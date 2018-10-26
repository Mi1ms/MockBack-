import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()

export class AppService {
  // point route of api
  base_url: string = "http://localhost:3000/api";

  constructor(private http: HttpClient) {  }

  // function get
  getList(){
    return this.http.get(this.base_url)
    // return [{'typ': 'backup', 'label': 'test', 'value': 'danger'}];
  }


}
