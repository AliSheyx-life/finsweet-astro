import useJwt from "@/utils/useJwt";
import auth from "@/api/auth";
import axios from "axios";

export const axiosInterceptor = (url: string) => {
  const scopedUrl = url;
  const http = axios.create();
  return () => {
    http.defaults.baseURL = scopedUrl;
    // Request interceptor for API calls
    http.interceptors.request.use(
      async (config: any) => {
        const keys = await useJwt.getAccessToken();
        if (keys) {
          config.headers = {
            Authorization: `Bearer ${keys}`,
          };
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    // Response interceptor for API calls
    let isRefreshing = 0;

    http.interceptors.response.use(
      (response) => {
        return response;
      },
      async function (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && isRefreshing < 2) {
          isRefreshing++;
          const { data } = await auth.refresh();
          const refreshToken = data.authorization.refresh_token;
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + refreshToken;
          useJwt.setAccessToken(refreshToken);
          return http(originalRequest);
        }
        isRefreshing = 0;
        if (error.response.status === 401) {
          useJwt.logout();
          window.location = "/login" as any;
        }
        return Promise.reject(error);
      }
    );
    return http;
  };
};
