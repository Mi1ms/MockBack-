import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';

@Injectable()

export class AppService {
  base_url : string = "http://localhost:3000/api/v1/";
  messages : Subject<MessageEvent>;
  data : any;


  constructor(private http: HttpClient, wsService: WebsocketService) {
      wsService.getTest().subscribe(data => this.data = data)
      console.log(this.data)
  }

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
