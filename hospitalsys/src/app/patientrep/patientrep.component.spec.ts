import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientrepComponent } from './patientrep.component';

describe('PatientrepComponent', () => {
  let component: PatientrepComponent;
  let fixture: ComponentFixture<PatientrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientrepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
