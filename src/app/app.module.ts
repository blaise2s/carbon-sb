import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonModule, ModalService } from 'carbon-components-angular';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [AppComponent, DemoComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ButtonModule],
  providers: [ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
