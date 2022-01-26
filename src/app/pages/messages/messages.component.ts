import { Component, OnInit } from '@angular/core';
import { MOCK_MESSAGES } from 'src/app/mock/mock-messages';
import { Message } from 'src/app/model/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages: Message[];

  constructor() {
    this.messages = MOCK_MESSAGES;
  }

  ngOnInit(): void {
  }


}
