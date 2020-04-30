import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  ButtonModule,
  ModalService,
  TableModule,
  LinkModule,
  TagModule,
  DialogModule,
} from 'carbon-components-angular';
import { SettingsModule } from '@carbon/icons-angular';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { OidTagComponent } from './oid-tag/oid-tag.component';

@NgModule({
  declarations: [AppComponent, DemoComponent, OidTagComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    LinkModule,
    TagModule,
    DialogModule,
    SettingsModule,
  ],
  providers: [ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
