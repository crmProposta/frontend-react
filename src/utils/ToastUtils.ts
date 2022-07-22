import {APIResponse} from "../models/Backend-default/APIResponse";
import {APIError} from "../models/Backend-default/APIError";
import ResponseUtils from "./ResponseUtils";
import {toast} from "react-toastify";

function throwToastIfRequestIsNotSuccessful(result: APIResponse<any> | APIError) {
    if (ResponseUtils.responseIsNotSuccessful(result.status)) {
        const error = result as APIError
        toast.error(error.message)
        return
    }
}

export default {throwToastIfRequestIsNotSuccessful}