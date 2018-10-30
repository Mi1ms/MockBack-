import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()

export class AppService {
  base_url: string = "http://localhost:3000/api/v1/";

  constructor(private http: HttpClient) {  }

  getList(get){
    return this.http.get(this.base_url + get)
  }


}
