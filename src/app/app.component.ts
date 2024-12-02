import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'TodoApp';

  message = '';
  isMessage = false;

  showMessage(message: string) {
    this.isMessage = true;
    this.message = message;

    setTimeout(() => {
      this.isMessage = false;
      this.message = '';
    }, 5000);
  }
}
