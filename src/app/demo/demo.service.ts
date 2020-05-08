import { Injectable } from '@angular/core';
import { StudyEvent } from './demo.component';
import { Subject } from 'rxjs';
import { IDListItem } from '../study-event-modal/study-event-modal.component';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  private studyEvents: StudyEvent[] = [
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
  studyEventsSubject: Subject<StudyEvent[]> = new Subject();

  private eventTypes = [
    {
      id: 1,
      content: 'Type 1',
      selected: false,
    },
  ];
  eventTypesSubject: Subject<IDListItem[]> = new Subject();

  private addBys = [
    {
      id: 1,
      content: 'When subject is added',
      selected: false,
    },
    {
      id: 2,
      content: 'By user',
      selected: false,
    },
    {
      id: 3,
      content: 'By rule',
      selected: false,
    },
  ];
  addBysSubject: Subject<IDListItem[]> = new Subject();

  eventOrderSubject: Subject<IDListItem[]> = new Subject();
  private buildEventOrderOptions(studyEventsCount: number) {
    const eventOrder: IDListItem[] = [
      {
        id: 0,
        content: 'Always first',
        selected: false,
      },
    ];
    const newStudyEventsCount = studyEventsCount + 1;
    for (let i = 0; i < newStudyEventsCount; i++) {
      const order = i + 1;
      eventOrder.push({
        id: order,
        content: `${order}`,
        selected: order === newStudyEventsCount,
      });
    }
    eventOrder.push({
      id: newStudyEventsCount + 1,
      content: 'Always last',
      selected: false,
    });
    return eventOrder;
  }

  getStudyEvents() {
    return this.studyEventsSubject.next(this.studyEvents);
  }

  getEventTypes() {
    return this.eventTypesSubject.next(this.eventTypes);
  }

  getAddBys() {
    return this.addBysSubject.next(this.addBys);
  }

  getEventOrder(studyEventsCount: number) {
    return this.eventOrderSubject.next(
      this.buildEventOrderOptions(studyEventsCount),
    );
  }
}
