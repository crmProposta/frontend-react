import {API} from "../api/PropostaAPI";
import {APIError} from "../models/Backend-default/APIError";
import {ResponseStatus} from "../models/Backend-default/APIResponseStatusEnum";
import {APIResponse} from "../models/Backend-default/APIResponse";
import CookieUtils from "../utils/CookieUtils";

export default class MasterDataSource {

    static async createAccount(form: any) {
        let token = CookieUtils.getAccessToken();
        token = token == null ? "" : token;

        if (form.password !== form.confirmPassword) {
            return {
                status: ResponseStatus.ERROR,
                code: "",
                codeMessage: "conflictPassword",
                message: "The password and confirm password input are not equals"
            } as APIError
        }
        return await API.path.post(
            "/master/create-account",
            form,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )
            .then(res => {
                return this.getResponse(res.data)
            })
            .catch(res => {
                return this.getAPIError(res) as APIError
            });
    }

    static async listAccount() {
        return await API.authPath().get(
            '/master/list-account',
        ).then(res => {
            console.log(res)
            return this.getResponse(res.data)
        }).catch(res => {
            return this.getAPIError(res) as APIError
        })
    }

    private static getResponse(data: any) {
        if (data.status == ResponseStatus[ResponseStatus.SUCCESS]) {
            return data as APIResponse<any>
        } else {
            return this.convertDataToAPIError(data) as APIError
        }
    }

    private static getAPIError(res: any) {

        if (res.response.status === 403) {
            res.response.data = {
                codeMessage: "deniedAccess",
                message: "You dont have access to this action"
            }
        } else if (res.response.data == null) {
            res.response.data = {
                codeMessage: res.type,
                message: res.message
            }
        }

        return this.convertDataToAPIError(res.response.data)


    }

    private static convertDataToAPIError(data: any) {
        return {
            status: ResponseStatus.ERROR,
            code: "",
            codeMessage: data.codeMessage,
            message: data.message
        } as APIError

    }
}