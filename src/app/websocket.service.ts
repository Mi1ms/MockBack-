import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { Socket } from 'ngx-socket-io';
import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  // url: string = 'http://localhost:2400';

  constructor(private socket: Socket) {
    console.log(this.socket)
   }

  public getSocket() {
      return this.socket

  }

  // // private create(url)/*: Rx.Subject<Event>*/ {
  //
  //   let webs = new WebSocket(url);
  //
  //   setInterval( function(){
  //     // console.log('helloworld')
  //     // console.log("readystate", webs.readyState)
  //   console.log(webs)
  //   }, 2000)
  // //   let observable = Rx.Observable.create(
  // //     (obs: Rx.Observer<MessageEvent>) => {
  // //
  // //         webs.onmessage = obs.next.bind(obs);
  // //         webs.onerror = obs.error.bind(obs);
  // //         webs.onclose = obs.complete.bind(obs);
  // //         return webs.close.bind(webs)
  // //     }
  // //   )
  // //
  // //   let observer = {
  // //       next: (data: Object) => {
  // //         if(webs.readyState === 1 ){
  // //
  // //           webs.send(JSON.stringify(data));
  // //         }
  // //
  // //       }
  // //
  // //   }
  // //
  // //   return Rx.Subject.create(observer, observable)
  // }

}
