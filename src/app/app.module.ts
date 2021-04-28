import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlocklyTestComponent } from './blockly-test/blockly-test.component';
import { NgxBlocklyModule } from 'ngx-blockly';


@NgModule({
  declarations: [
    AppComponent,
    BlocklyTestComponent
  ],
  imports: [
    BrowserModule,
    NgxBlocklyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
