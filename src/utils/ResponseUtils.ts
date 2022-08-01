import { APIError } from "../models/Backend-default/APIError";
import { APIResponse } from "../models/Backend-default/APIResponse";
import { ResponseStatus } from "../models/Backend-default/APIResponseStatusEnum";

const responseIsNotSuccessful = (status: ResponseStatus) => status.toString() !== ResponseStatus[ResponseStatus.SUCCESS];

function getResponse(data: any) {
    if (data.status === ResponseStatus[ResponseStatus.SUCCESS]) {
        return data as APIResponse<any>
    } else {
        return convertDataToAPIError(data) as APIError
    }
}

function getAPIError(res: any) {

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

    return convertDataToAPIError(res.response.data)


}

function convertDataToAPIError(data: any) {
    return {
        status: ResponseStatus.ERROR,
        code: "",
        codeMessage: data.codeMessage,
        message: data.message
    } as APIError

}

const exportContent = { responseIsNotSuccessful, getResponse, getAPIError, convertDataToAPIError }

export default exportContent;