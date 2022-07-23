import {Roles} from "./Roles";

export interface UserDTO{
    id: number;
    username: string,
    enabled: boolean,
    roles: Roles[],
}