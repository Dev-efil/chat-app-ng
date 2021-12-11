import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket:any;
  data:any;
  constructor() { }

  socketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }

  sendData(senderData){
    // Emit the event named 'my message' to send this message to server
    this.socket.emit('sender', senderData); 
    this.socket.on('broadcast', (data: string) => {
      console.log(data);
    });
    // console.log('service',senderData);
  }

}
