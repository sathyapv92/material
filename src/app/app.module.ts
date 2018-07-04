import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent, DatepickerFilterExample } from './app.component';
import { DialogComponent, DialogContentExampleDialog } from './dialog/dialog.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestDialogComponent, DialogOverviewExampleDialog } from './test-dialog/test-dialog.component';
import { MyOwnCustomMaterialModule } from './test-dialog/material-module';
import { DealEntryComponent } from './deal-entry/deal-entry.component';
import { PostsComponent } from './posts/posts.component';
import { DataService } from './services/data.service';
import { PostService } from './services/post.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogContentExampleDialog,
    TestDialogComponent,
    DialogOverviewExampleDialog,
    DealEntryComponent,
    DatepickerFilterExample,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
   
    
   
   
    
   
   
  ],
  entryComponents: [DialogComponent, DialogContentExampleDialog,TestDialogComponent,DialogOverviewExampleDialog],
  providers: [PostService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
