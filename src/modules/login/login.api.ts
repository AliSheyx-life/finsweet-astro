import { JwtEnum } from "@/utils/useJwt";
import { http } from "@/utils/axios.config";

class Auth {
  login(data: {}) {
    return http.post("auth/login", data);
  }
}

const auth = new Auth();
export default auth;
