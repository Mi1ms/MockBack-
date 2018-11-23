import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  url: string = 'ws://localhost:4202';
  private sub: Rx.Subject<MessageEvent>;

  constructor() { }

  public connect(): Rx.Subject<MessageEvent> {
    // console.log(this.sub)
    if(!this.sub) {
        this.sub = this.create(this.url)
    }
    return this.sub;
  }

  private create(url): Rx.Subject<MessageEvent> {

    let webs = new WebSocket(url);
    // console.log(webs)
    setInterval( function(){
      // console.log('helloworld')
      console.log("readystate", webs.readyState)
      // console.log(webs)
    }, 2000)
    // if (webs.readyState == 1){
      // console.log('readyState  = 1 => open')
      let observable = Rx.Observable.create(
        (obs: Rx.Observer<MessageEvent>) => {

            webs.onmessage = obs.next.bind(obs);
            webs.onerror = obs.error.bind(obs);
            webs.onclose = obs.complete.bind(obs);
            return webs.close.bind(webs)
        }
      )

      let observer = {
          next: (data: Object) => {
            if(webs.readyState === 1 ){

              webs.send(JSON.stringify(data));
            }

          }

      }

      return Rx.Subject.create(observer, observable) }

    // } else {
      // console.log('readyState => ' + webs.readyState)
    }
  }
