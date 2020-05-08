import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseModal, ListItem } from 'carbon-components-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DemoService } from '../demo/demo.service';

export type IDListItem = ListItem & { id: number };

@Component({
  selector: 'app-study-event-modal',
  templateUrl: './study-event-modal.component.html',
  styleUrls: ['./study-event-modal.component.scss'],
})
export class StudyEventModalComponent extends BaseModal
  implements OnInit, OnDestroy {
  studyEventFormGroup: FormGroup;
  eventTypes: IDListItem[];
  eventOrders: IDListItem[];
  addBys: IDListItem[];
  // TODO: Input current count of study events...
  private studyEventsCount = 6;
  private subs = new Subscription();
  private touchedOnce = false;

  constructor(private demoService: DemoService) {
    super();
  }

  ngOnInit() {
    this.studyEventFormGroup = new FormGroup({
      title: new FormControl(null, Validators.required),
      shortName: new FormControl(null, Validators.required),
      eventType: new FormControl(null, Validators.required),
      eventOrder: new FormControl(null, Validators.required),
      addBy: new FormControl(null, Validators.required),
      required: new FormControl(false),
      createAnother: new FormControl(false),
    });

    this.subs.add(
      this.demoService.eventTypesSubject.subscribe(
        (eventTypes) => (this.eventTypes = eventTypes),
      ),
    );
    this.subs.add(
      this.demoService.addBysSubject.subscribe(
        (addBys) => (this.addBys = addBys),
      ),
    );
    this.subs.add(
      this.demoService.eventOrderSubject.subscribe((eventOrders) => {
        this.eventOrders = eventOrders;
        const selected = eventOrders.find((eventOrder) => eventOrder.selected);
        if (selected) {
          this.studyEventFormGroup.get('eventOrder').setValue(selected);
        }
      }),
    );

    this.demoService.getEventTypes();
    this.demoService.getAddBys();
    this.demoService.getEventOrder(this.studyEventsCount);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  invalid(control: string) {
    const ctrl = this.studyEventFormGroup.get(control);
    return !ctrl.valid && ctrl.touched;
  }

  onSave() {
    // TODO: Save study event...
    this.closeModal();
    console.log(this.studyEventFormGroup);
  }
}
