import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatePickMonthComponent } from './date-pick-month/date-pick-month.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePickMonthComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
