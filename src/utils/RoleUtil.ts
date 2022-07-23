import {Roles} from "../models/Backend-default/Roles";

function higherRole(roles: Roles[]) {
    const rolesNumbers: number[] = roles.map(role => {
        // @ts-ignore
        return Roles[role] as number;
    })
    return Roles[Math.min(...rolesNumbers)] }

export default { higherRole }