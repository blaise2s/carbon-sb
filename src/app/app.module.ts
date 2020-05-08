import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ButtonModule,
  ModalService,
  TableModule,
  LinkModule,
  TagModule,
  DialogModule,
  ModalModule,
  PlaceholderModule,
  InputModule,
  DropdownModule,
  ToggleModule,
  CheckboxModule,
} from 'carbon-components-angular';
import {
  SettingsModule,
  OverflowMenuVerticalModule,
} from '@carbon/icons-angular';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { OidTagComponent } from './oid-tag/oid-tag.component';
import { TableActionsComponent } from './table-actions/table-actions.component';
import { StudyEventModalComponent } from './study-event-modal/study-event-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    OidTagComponent,
    TableActionsComponent,
    StudyEventModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    LinkModule,
    TagModule,
    DialogModule,
    SettingsModule,
    OverflowMenuVerticalModule,
    ModalModule,
    PlaceholderModule,
    InputModule,
    ReactiveFormsModule,
    DropdownModule,
    ToggleModule,
    CheckboxModule,
  ],
  providers: [ModalService],
  bootstrap: [AppComponent],
  entryComponents: [StudyEventModalComponent],
})
export class AppModule {}
