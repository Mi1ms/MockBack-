import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
// import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // point route of api
  base_url: string;// "api/v1/indicators";
  list_endpoints = "list";
  constructor(private http: Http) {
    console.log(http);
  }

  // function get
  GetListData(){
    return this.http.get(this.list_endpoints);
  }
}
