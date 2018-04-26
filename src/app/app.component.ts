import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   myWindow ;
   panelOpenState: boolean = false;
 
  themeClass= localStorage.getItem('applicationTheme');
  changeTheme(theme){
  this.themeClass = theme;
  localStorage.setItem('applicationTheme',this.themeClass);
  }
  
  openWin() {
    this.myWindow = window.open("http://localhost:4100", "myWindow", "width=400, height=200");
}
closeWin() {
  if (this.myWindow) {
    this.myWindow.close();
  }
}
}
@Component({
  selector: 'datepicker-filter-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class DatepickerFilterExample {
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
}
