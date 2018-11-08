import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable()

export class AppService {
  base_url: string = "http://localhost:3000/api/v1/";

  constructor(private http: HttpClient) {  }

  getList(get) {
    return this.http.get(this.base_url + get)
  }

  updateData(url, data){
    return this.http.put(this.base_url+url, data)
                    .subscribe(
                        db => {
                        db = data
                      }, error => {
                        console.log(error)
                      }
                    )
  }


}
