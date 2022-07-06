import { ResponseStatus } from "./APIResponseStatusEnum";

export interface APIResponse<T> {
    status: ResponseStatus,
    data: T
}