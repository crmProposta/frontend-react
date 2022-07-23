import {FormCreateAccount, ErrorsFormCreateAccount} from "./FormCreateAccount";

export default function findFormErrors(form: FormCreateAccount): ErrorsFormCreateAccount {
    const {loginLabel, password, confirmPassword, roles, enabled} = form
    const newErrors: any = {}
    //name errors
    if (loginLabel === "") newErrors.loginLabel = "Cannot be blank!"
    //password errors
    if (password === "") newErrors.password = "Can not be empty"
    else if (password.length < 8 && password.length > 25) newErrors.password = "Must be between 8 and 25"
    //confirmPassword errors
    if (confirmPassword === "") newErrors.confirmPassword = "Can not be empty"
    if (confirmPassword !== password) newErrors.confirmPassword =
        "'password' and 'confirmPassword' field need to be equals"
    //roles errors
    if (roles.length === 0) newErrors.roles = "must select at least one role"
    //enabled errors
    if (enabled == null) newErrors.enabled = "Enable account field not defined"

    return newErrors as ErrorsFormCreateAccount
}