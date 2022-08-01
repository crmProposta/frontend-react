import { ErrorHandler } from './handler/ErrorHandler';
export abstract class  Validation {
    abstract validate() : ErrorHandler[]
}