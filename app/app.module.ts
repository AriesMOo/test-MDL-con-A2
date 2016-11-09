import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdlModule } from 'angular2-mdl';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, MdlModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  schemas:      [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
