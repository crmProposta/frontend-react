import { ResponseStatus } from "./APIResponseStatusEnum"

export interface APIError {
    status: ResponseStatus
    code: string,
    codeMessage: string,
    message: string
}