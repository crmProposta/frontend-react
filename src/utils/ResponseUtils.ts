import {ResponseStatus} from "../models/Backend-default/APIResponseStatusEnum";

const responseIsNotSuccessful = (status: ResponseStatus) => status.toString() !== ResponseStatus[ResponseStatus.SUCCESS];

export default { responseIsNotSuccessful }