import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as Rx from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';

@Injectable({ providedIn: 'root' })

export class WebsocketService {
  url: string = 'http://localhost:2400';

  constructor(private socket: Socket, protected http: HttpClient) {
    this.getSocket()
    this.getData()
  }

   // public static

  public setData(msg){
      this.socket.emit('msg', msg)

  }

  public getSocket() {
      // RETURN SOCKET OF INOTIFY
      console.log(this.socket.ioSocket.connected)
      if (this.socket.ioSocket.connected) {
        console.log('Socket connected !! ')
        // connected => receive data json server
        // this.getData()
      }

  }

  public getData() {
    // RETURN OBSERVABLE DATA FROM JSON-SERVER
    // return this.http.get()
  }

  public getTest() {

      return of({client:[{id: 1, name: "Splicy"}, {id:2, name:"Colvin"}]})
  }

}
