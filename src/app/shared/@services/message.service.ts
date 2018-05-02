import { Injectable } from "@angular/core";
import { errors, success } from "../@model/index";

@Injectable()
export class MessageService{

	getError(errorCode: string){
		const err: string = errors[errorCode];
		return err ? err : errors.ERR_DEFAULT;
	}

	getSuccess(successCode: string){
		const sc: string = success[successCode];
		return sc ? sc : errors.ERR_DEFAULT;
	}

}