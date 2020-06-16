import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chiranjeevi';
  message = '';
  public compoentCommunication = 'This is from App Component';  // This is the property which we are trying to send it to student component
}
