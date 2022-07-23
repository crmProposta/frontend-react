export type FormCreateAccount = {
    loginLabel: string,
    password: string,
    confirmPassword: string,
    roles: string[]
    enabled: boolean
}

export type ErrorsFormCreateAccount = {
    loginLabel: string,
    password: string,
    confirmPassword: string,
    roles: string
    enabled: string
}