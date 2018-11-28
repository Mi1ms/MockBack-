import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { of } from 'rxjs';

@Injectable()

export class AppService {
  base_url : string = "http://localhost:3000/api/v1/";
  // jsondata = Data[];
  data : any;


  constructor(private http: HttpClient, wsService: WebsocketService) {
      // get data test of Observable

      //wsService.getTest().subscribe(data => this.data = data)

  }
  public getData()/*: */ {
    // RETURN OBSERVABLE DATA FROM JSON-SERVER
    // return this.http.get<>()
  }

  public getTest() {

    // let test =

      return of({groups:[{id: 1, name: "Splicy"}, {id:2, name:"Colvin"}]})
  }
  // LAST TECHNIQUE GET DATA
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
