import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  message$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  socket = io(environment.SOCKET_ENDPOINT);

  sendData(senderData){
    // Emit the event named 'my message' to send this message to server
    this.socket.emit('sender', senderData); 
    console.log('service', senderData);
  }
  typing(user: string) {
    this.socket.emit('typing', user);
    console.log('servicetype', user);
  }   
  getData() {
    this.socket.on('sender', (data) => {
      this.message$.next(data);
      // console.log('here -',data, 'here sub -', this.message$);
    });
    return this.message$.asObservable();
  }



}
