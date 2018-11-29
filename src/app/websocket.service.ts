import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Socket }     from 'ngx-socket-io';
import * as io  from 'socket.io-client';
import * as Rx  from 'rxjs';
import { of }   from 'rxjs';
import { map }  from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class WebsocketService /*extends Socket */{
  url: string = 'http://localhost:2400';
  // socket : SocketIOClient.Socket;

  constructor(private socket: Socket/* protected http: HttpClient*/) {
    // console.log(super({ url: 'http://localhost:2400/', options: {} }))
    // this.socket = io(this.url)

    // console.log(this.socket.fromEvent<Data>('data'))
  }

  public setData(msg){
      // this.socket.emit('msg', msg)
  }

  public getSocket() {
      // RETURN SOCKET OF INOTIFY
      // console.log(this.socket.ioSocket.connected)
      // if (this.socket.ioSocket.connected) {
      //   console.log('Socket connected !! ')
      //   // connected => receive data json server
      //   // this.getData()
      // }

  }

}
