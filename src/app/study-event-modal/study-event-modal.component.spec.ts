import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyEventModalComponent } from './study-event-modal.component';

describe('StudyEventModalComponent', () => {
  let component: StudyEventModalComponent;
  let fixture: ComponentFixture<StudyEventModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyEventModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
