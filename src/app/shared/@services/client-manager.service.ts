import { Injectable } from "@angular/core";
import { Client } from "../@model";
import { ClientService } from "../../../../../reServed-core/shared/@services/index";

@Injectable()
export class ClientManagerService{

	private client: Client;

	constructor(private clientService: ClientService) {
		this.client = new Client();
		this.clientService.getAll().subscribe((res:Client[])=>{
			this.client = res[0];
		});
	}

	getClient():Client{
		return Object.assign({}, this.client);
	}

}