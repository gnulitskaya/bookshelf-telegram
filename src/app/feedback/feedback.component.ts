import { Component, OnInit, signal } from '@angular/core';
import { TelegramService } from '../services/telegram.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedback = signal('')
  constructor(private telegram: TelegramService) {
    this.sendData = this.sendData.bind(this);
   }

  ngOnInit() {
    this.telegram.MainButton.setText('Отправить');
    this.telegram.MainButton.show();
    this.telegram.MainButton.onClick(this.sendData)
  }

  handle(event: any) {
    this.feedback.set(event.target.value)
  }

  sendData() {
    this.telegram.sendData({feedback: this.feedback()});
  }

}
