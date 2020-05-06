import {Component, OnInit} from '@angular/core';
import {MessagingService} from './service/messaging/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-push-notification';


  constructor(private messagingService: MessagingService) {
  }

  ngOnInit(): void {
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
  }



}
