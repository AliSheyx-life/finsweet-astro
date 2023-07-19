import { http } from "@/utils/axios.config";
import { IUser } from "./types/UserTypes";

class UsersApi {
    async getUsers() {
        return await http.get("/user");
    }
    async createUser(user: IUser) {
        return await http.post("/user", user);
    }
    async updateUser(user: IUser) {
        return await http.put(`/user/${user.id}`, user);
    }
}

const usersApi = new UsersApi();
export default usersApi;