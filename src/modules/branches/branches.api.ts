import { http } from "@/utils/axios.config";

class Branches {
    getAllBranches() {
        return http.get("branch");
    }
}

const branches = new Branches();
export default branches;