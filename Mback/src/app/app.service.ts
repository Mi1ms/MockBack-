import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import  'rxjs/operators';

@Injectable()

export class AppService {
  // point route of api
  base_url: string = "/api/v1/indicators";
  list: any = [];
    constructor(private http: HttpClient) {  }

  // function get
  getList() {
    console.log(this.http.get(this.base_url))
    return this.http.get(this.base_url );
    // .map(res => res.json());
  }


}
