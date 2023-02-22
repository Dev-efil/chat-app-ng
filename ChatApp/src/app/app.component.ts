import { Component, OnInit } from '@angular/core';
import { SocketService } from './service/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
sender:string;
message:string;
newMessage: string [] = [];
messageList: string[] = [];
status: string;

// senderData = new Message(this.senderName, this.senderMessage);

constructor(private chatService: SocketService) { }

ngOnInit() {
  this.chatService.getData().subscribe((message: string) => {
    this.messageList.push(message);
    // console.log('here ngoninit',this.messageList);
    
  });
 
  
  
}

typing() {
this.status = '';
this.chatService.typing(this.sender);
this.status = `${this.sender} is typing...`;
console.log('typengon',this.sender);
}

send() {  
  this.newMessage = [this.sender,this.message];
  this.chatService.sendData(this.newMessage);
  this.message = '';
  console.log('here send -',this.newMessage);
}
}
