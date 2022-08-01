import { AxiosResponse } from "axios";
import { API } from "../api/PropostaAPI";
import { APIError } from "../models/Backend-default/APIError";
import { APIResponse } from '../models/Backend-default/APIResponse';
import { ResponseStatus } from "../models/Backend-default/APIResponseStatusEnum";
import ResponseUtils from "../utils/ResponseUtils";
import { UserCreationValidation } from "../validation/UserCreationValidation";

export default class MasterDataSource {

    static async createAccount(form: any) {
        const validation = new UserCreationValidation(form.password, form.confirmPassword);
        const errors = validation.validate()

        if (errors.length > 0) {
            return {
                status: ResponseStatus.ERROR,
                code: "",
                codeMessage: `${errors[0].variable}`,
                message: `${errors[1].variable}`
            } as APIError
        }

        return await API.authPath().post(
            "/master/create-account",
            form,
        )
        .then(res => this.getResponse(res))
        .catch(res => this.getAPIError(res));
    }

    static async listAccount() {
        return await API.authPath().get(
            '/master/list-account',
        ).then(res => this.getResponse(res))
        .catch(res => this.getAPIError(res))
    }

    static async disableAccount(id: number) {
        return await API.authPath().post(
            "/master/disable-account",
            { id: id }
        ).then(res => this.getResponse(res))
        .catch(res => this.getAPIError(res))
    }

    static async enableAccount(id: number) {
        return await API.authPath().post(
            "/master/enable-account",
            { id: id }
        ).then(res => this.getResponse(res))
        .catch(res => this.getAPIError(res))
    }

    static async getAccountById(id: number) {
        return await API.authPath().get(
            `/master/get-account-by-id/${id}`
        ).then(res => this.getResponse(res))
        .catch(res => this.getAPIError(res))
    }

    static getResponse = (res: AxiosResponse<any, any>) => ResponseUtils.getResponse(res.data) as APIResponse<any> | APIError

    static getAPIError = (res: any) => ResponseUtils.getAPIError(res) as APIError

}