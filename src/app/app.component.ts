import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: { [key: string] : string | Date } = {}

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Todo list',
        footer: 'Todo list made in Angular',
        date: new Date()
      }
    }, 1000)
  }
}
