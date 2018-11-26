import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';

@Injectable()

export class AppService {
  // const secondCount = interval(1000);
  base_url: string = "http://localhost:3000/api/v1/";
  public messages : Subject<MessageEvent>;
  // url: string = 'ws://localhost:5432';


  constructor(private http: HttpClient, wsService: WebsocketService) {
      console.log(wsService)
      // this.messages = <Subject<MessageEvent>>wsService
      //     .connect()
          // .map((response: MessageEvent) => {
          // console.log(response)
          //
          // })

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

  // secondCount.subscribe((n) => console.log(n));

}
