import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  themeClass= localStorage.getItem('applicationTheme');
  changeTheme(theme){
  this.themeClass = theme;
  localStorage.setItem('applicationTheme',this.themeClass);
  }
}

