import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  OnDestroy,
} from '@angular/core';
import {
  TableModel,
  TableHeaderItem,
  TableItem,
  ModalService,
  ListItem,
} from 'carbon-components-angular';
import { StudyEventModalComponent } from '../study-event-modal/study-event-modal.component';
import { DemoService } from './demo.service';
import { Subscription } from 'rxjs';

export class StudyEvent {
  constructor(
    public name: string,
    public shortName: string,
    public lastModified: Date,
    public scheduleOfEventsOrder: number,
    public oid: string,
  ) {}
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit, OnDestroy {
  striped = false;
  model = new TableModel();
  // private studyEvents: StudyEvent[];
  private subs = new Subscription();

  @ViewChild('expansionTemplate', { static: true })
  expansionTemplate: TemplateRef<any>;
  @ViewChild('studyEventNameTableItemTemplate', { static: true })
  studyEventNameTableItemTemplate: TemplateRef<any>;
  @ViewChild('lastModifiedTableItemTemplate', { static: true })
  lastModifiedTableItemTemplate: TemplateRef<any>;
  @ViewChild('OIDTableItemTemplate', { static: true })
  OIDTableItemTemplate: TemplateRef<any>;
  @ViewChild('ActionsTableItemTemplate', { static: true })
  ActionsTableItemTemplate: TemplateRef<any>;

  constructor(
    private modalService: ModalService,
    private demoService: DemoService,
  ) {}

  ngOnInit(): void {
    this.initHeaders();
    this.subs.add(
      this.demoService.studyEventsSubject.subscribe((studyEvents) =>
        this.loadData(studyEvents),
      ),
    );
    this.demoService.getStudyEvents();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  initHeaders() {
    this.model.header = [
      new TableHeaderItem({ data: 'Study Event Name' }),
      new TableHeaderItem({ data: 'Short Name' }),
      new TableHeaderItem({ data: 'Last Modified' }),
      new TableHeaderItem({ data: 'Schedule of Events Order' }),
      new TableHeaderItem({ data: 'OID' }),
      new TableHeaderItem({ data: '' }),
    ];
  }

  loadData(studyEvents: StudyEvent[]) {
    this.model.data = studyEvents.map(
      ({ name, shortName, lastModified, scheduleOfEventsOrder, oid }) => {
        return [
          new TableItem({
            data: name,
            template: this.studyEventNameTableItemTemplate,
            expandedTemplate: this.expansionTemplate,
            expandedData: {},
          }),
          new TableItem({ data: shortName }),
          new TableItem({
            data: lastModified,
            template: this.lastModifiedTableItemTemplate,
          }),
          new TableItem({ data: scheduleOfEventsOrder }),
          new TableItem({ data: oid, template: this.OIDTableItemTemplate }),
          new TableItem({
            data: 'TESTING',
            template: this.ActionsTableItemTemplate,
          }),
        ];
      },
    );
  }

  sort(index: number) {
    const header = this.model.header[index];
    if (header.sorted) {
      header.ascending = header.descending;
    }
    this.model.sort(index);
  }

  onCreateNewStudyEvent(): void {
    this.modalService.create({
      component: StudyEventModalComponent,
    });
  }
}
