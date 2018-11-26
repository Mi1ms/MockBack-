import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import * as socketIo from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  url: string = 'http://localhost:2400';
  private sub: Rx.Subject<MessageEvent>;
  private socket: SocketIOClient.Socket;

  constructor() { }

    public initSocket(): void {
        this.socket = socketIo(this.url);
    }

    public send(message: Rx.Message): void {
        this.socket.emit('message', message);
    }

    public onEvent(event: Event): Rx.Observable<any> {
        return new Rx.Observable<Event>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }
  // public connect(url) {
  //     this.socket = socketIo(url)
  //     console.log(url, this.socket)
  //   // if(!this.sub) {
  //   //     this.sub = this.create(this.url)
  //   // }
  //   // return this.sub;
  //
  // }

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
