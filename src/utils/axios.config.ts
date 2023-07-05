import { axiosInterceptor } from "./interceptor";

const baseURL = import.meta.env && import.meta.env.VITE_BACKEND_URL;
const httpBase = axiosInterceptor(baseURL);
const http = httpBase();

export { http };
