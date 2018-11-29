import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { WebsocketService } from './websocket.service';
import { Data } from './data';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class AppService {
  base_url : string = "http://localhost:3000/api/v1/";
  // jsondata = Data[];
  data : any;


  constructor(private http: HttpClient, wsService: WebsocketService) {
      //wsService.getTest().subscribe(data => this.data = data)

  }
  public getData(): Observable<Object > {
    // RETURN OBSERVABLE DATA FROM JSON-SERVER
    return this.http.get<Object>(this.base_url)//.pipe(
    //  map( result  =>  console.log() )
    //);
  }

  public getTest() {

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
