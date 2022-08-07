export type FormEditAccount = {
    loginLabel: string,
    isToChangePassword: boolean
    password: string,
    confirmPassword: string,
    roles: string[]
    enabled: boolean
}

export type ErrorsFormEditAccount = {
    loginLabel: string,
    password: string,
    confirmPassword: string,
    roles: string
    enabled: string
}