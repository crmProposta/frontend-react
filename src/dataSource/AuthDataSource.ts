import axios from "axios";
import { url } from "inspector";
import { API } from "../api/PropostaAPI";
import { APIError } from "../models/APIError";
import { APIResponse } from "../models/APIResponse";
import { ResponseStatus } from "../models/APIResponseStatusEnum";

export default class AuthDataSource {

    static async register(email: string, password: string) {
        const result = await API.path.post(
            '/auth/register',
            {
                loginLabel: email,
                password: password
            })
            .then(res => { return this.getResponse(res.data) })
            .catch(res => { return this.getAPIError(res) as APIError })

        return result;
    }

    static login(email: string, password: string) {
        const result = API.path.post(
            '/auth/login',
            {
                loginLabel: email,
                password: password
            })
            .then(res => { return this.getResponse(res.data) })
            .catch(res => { return this.getAPIError(res) as APIError })

        return result;
    }



    private static getResponse(data: any) {
        if (data.status == ResponseStatus.SUCCESS.toString) {
            return data as APIResponse<any>
        } else {
            return this.convertDataToAPIError(data) as APIError
        }
    }

    private static getAPIError(res: any) {
        if (res.response.data == null) {
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