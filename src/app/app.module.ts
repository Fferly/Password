import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassfieldComponent } from './passfield/passfield.component';
import { StatusbarComponent } from './statusbar/statusbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PassfieldComponent,
    StatusbarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
