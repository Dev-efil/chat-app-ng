import { Component, OnInit } from '@angular/core';
import { SocketService } from './service/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  senderName: string;
  senderMessage: string;


  // senderData = new Message(this.senderName, this.senderMessage);

  constructor(private socketConnect: SocketService) { }

  ngOnInit() {
    this.socketConnect.socketConnection();

  }
  send() {
    let senderData = {
      name : this.senderName,
      message : this.senderMessage 
    }
    this.socketConnect.sendData(senderData);
    // console.log('compo',senderData);
  }
}
