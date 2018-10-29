import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()

export class AppService {
  // base_url: string = "localhost:3000/api/v1/indicators";
  base_url: string = "http://localhost:3000/api/v1/indicators";

  constructor(private http: HttpClient) {  }

  getList(){
    // var tets = this.http.get(this.base_url).subscribe((data) => console.log(data))
    // console.log(tets);
    return this.http.get(this.base_url)
  }


}
