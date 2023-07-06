import { JwtEnum } from "@/utils/useJwt";
import { http } from "@/utils/axios.config";

class Auth {
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
