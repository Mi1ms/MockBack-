import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()

export class AppService {
  base_url: string = "http://localhost:3000/api";

  constructor(private http: HttpClient) {  }

  getList(){
    return this.http.get(this.base_url)
  }


}
