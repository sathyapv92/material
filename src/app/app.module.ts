import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DialogComponent, DialogContentExampleDialog } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogContentExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   
    MatDialogModule,
    ReactiveFormsModule
   
    
  
   
   
  
   
   
    
   
   
  ],
  entryComponents: [DialogComponent, DialogContentExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
