import { Validation } from "./validationInterface";
import { ErrorHandler } from './handler/ErrorHandler';

export class UserCreationValidation implements Validation {
    password: string;
    confirmPassword: string;
    errors = [] as ErrorHandler[]

    constructor(password: string, confirmPassword: string) {
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    validate(): ErrorHandler[] {

        this.errors = []
        this.validatePasswordEqualsConfirmPassword();
        

        return this.errors;
    }

    private validatePasswordEqualsConfirmPassword() {
        if (this.password !== this.confirmPassword) {
            this.errors.push(
                {
                    variable: "password",
                    message: "must be equals to confirmPassword"
                },
                {
                    variable: "confirmPassword",
                    message: "mustBeEquals to password"
                }
            );
        }
    }
}