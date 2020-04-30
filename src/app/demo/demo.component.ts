import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {
  TableModel,
  TableHeaderItem,
  TableItem,
} from 'carbon-components-angular';

class StudyEvent {
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
export class DemoComponent implements OnInit {
  striped = false;
  model = new TableModel();
  @ViewChild('expansionTemplate', { static: true })
  expansionTemplate: TemplateRef<any>;
  @ViewChild('studyEventNameTableItemTemplate', { static: true })
  studyEventNameTableItemTemplate: TemplateRef<any>;
  @ViewChild('lastModifiedTableItemTemplate', { static: true })
  lastModifiedTableItemTemplate: TemplateRef<any>;
  @ViewChild('OIDTableItemTemplate', { static: true })
  OIDTableItemTemplate: TemplateRef<any>;

  private people: StudyEvent[] = [
    {
      name: 'Medications',
      shortName: 'studyVersionShort',
      lastModified: new Date('2020-03-03'),
      scheduleOfEventsOrder: 1,
      oid: 'YYY-ZZ-II-72-1',
    },
    {
      name: 'Screening',
      shortName: 'studyVersionShort',
      lastModified: new Date('2020-03-05'),
      scheduleOfEventsOrder: 2,
      oid: 'DDD-XX-RR-77-9',
    },
    {
      name: 'Consent',
      shortName: 'studyVersionShort',
      lastModified: new Date('2020-03-06'),
      scheduleOfEventsOrder: 3,
      oid: 'AAA-CC-DD-34-6',
    },
    {
      name: 'First month exam',
      shortName: 'studyVersionShort',
      lastModified: new Date('2020-03-16'),
      scheduleOfEventsOrder: 4,
      oid: 'CCC-SS-QQ-43-1',
    },
    {
      name: 'Second month exam',
      shortName: 'studyVersionShort',
      lastModified: new Date('2020-03-29'),
      scheduleOfEventsOrder: 5,
      oid: 'TTT-PP-NN-21-4',
    },
    {
      name: 'Lab Normals',
      shortName: 'studyVersionShort',
      lastModified: new Date('2020-04-02'),
      scheduleOfEventsOrder: 6,
      oid: 'JJJ-GG-TT-26-5 ',
    },
  ];

  ngOnInit(): void {
    this.model.header = [
      new TableHeaderItem({ data: 'Study Event Name' }),
      new TableHeaderItem({ data: 'Short Name' }),
      new TableHeaderItem({ data: 'Last Modified' }),
      new TableHeaderItem({ data: 'Schedule of Events Order' }),
      new TableHeaderItem({ data: 'OID' }),
    ];
    this.model.data = this.people.map(
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
}
