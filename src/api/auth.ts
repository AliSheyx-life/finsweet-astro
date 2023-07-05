import { JwtEnum } from "@/utils/useJwt";
import { http } from "@/utils/axios.config";

class Auth {
  login(data: {}) {
    return http.post("auth/login", data);
  }
  refresh() {
    return http.post("auth/refresh");
  }
  getUserInfo() {
    const token = localStorage.getItem(JwtEnum.accessToken);
    if (token) {
      return http.post("auth/me", {
        token: JSON.parse(token),
      });
    } else {
      return Promise.reject({ message: "Token undefined" });
    }
  }
}

const auth = new Auth();
export default auth;
