import { http } from "@/utils/axios.config";
import { ICompany, ICreateCompany } from "./types/Companies";
import { IPartner } from "./types/Partners";
import { IBranch } from "./types/Branches";
import { AxiosPromise } from "axios";

class Branches {
    // branches
    getAllBranches(): Promise<AxiosPromise<IBranch[]>> {
        return http.get("branch");
    }

    // companies
    getAllCompanies(): Promise<AxiosPromise<ICompany[]>> {
        return http.get("company");
    }
    createCompany(company: ICreateCompany): Promise<AxiosPromise<ICompany>> {
        return http.post("company", company);
    }
    updateCompany(id: string, company: ICreateCompany): Promise<AxiosPromise<ICompany>> {
        return http.put(`company/${id}`, company);
    }
    deleteCompany(id: string): Promise<AxiosPromise<ICompany>> {
        return http.delete(`company/${id}`);
    }

    // partners
    getAllPartners(): Promise<AxiosPromise<IPartner[]>> {
        return http.get("partner");
    }
}

const branches = new Branches();
export default branches;