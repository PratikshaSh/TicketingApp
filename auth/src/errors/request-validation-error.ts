import { CustomError } from "./custom-error";
import { ValidationError } from "express-validator";

export class RequestValidationError extends CustomError {
    
    statusCode = 400;
    
    constructor(public errors: ValidationError[]){
        super('Invalid request parrameters');

        // Only because we are extending built in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    serializeErrors(){
        return this.errors.map(err => {
            return { message: err.msg, field: err.param};
        });
    }
}