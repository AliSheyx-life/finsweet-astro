import { JwtEnum } from "@/utils/useJwt";
import { http } from "@/utils/axios.config";
import { ILogin } from "./types/UserTypes";

class Auth {
  login(data: ILogin) {
    return http.post("auth/login", data);
  }
}

const auth = new Auth();
export default auth;
