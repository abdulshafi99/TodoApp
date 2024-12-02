import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  message: string = '';
  isMessage: boolean = false;

  showMessage(message: string) {
    this.isMessage = true;
    this.message = message;

    setTimeout(() => {
      this.isMessage = false;
      this.message = '';
    }, 3000);
  }

  constructor() {}
}
