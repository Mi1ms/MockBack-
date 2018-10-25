import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { MockbackService } from "./indicateur/mockback.service";
// import "rxjs/add/operator/map";

@Injectable(/*{
  // providedIn: 'root'
}*/)
export class AppService {
  // point route of api
  base_url: string = "api/v1/indicators";
  list_endpoint = "list";
  constructor(private http: Http, mockback : MockbackService) {
    console.log(Http);
  }

  // function get
  GetListData(){
    return this.http.get(this.base_url + this.list_endpoint);
  }
}
