import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OidTagComponent } from './oid-tag.component';

describe('OidTagComponent', () => {
  let component: OidTagComponent;
  let fixture: ComponentFixture<OidTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OidTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OidTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
