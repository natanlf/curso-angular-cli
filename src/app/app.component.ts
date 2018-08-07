import { Component } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: Date = new Date;
  money: number = 598;
  title = 'Tasks';
  user: User = {
    name: 'Bob',
    age: 25
  }
  upperText:string='Display';
  lowerText:string='Display';
  percentValue: number = 0.5;
}
