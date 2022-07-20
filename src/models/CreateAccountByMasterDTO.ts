export interface CreateAccountByMasterDTO{
    loginLabel: string;
    password: string;
    enabled: boolean;
    confirmPassword: string;
    roles: string[]
}