import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsstatusComponent } from './reportsstatus.component';

describe('ReportsstatusComponent', () => {
  let component: ReportsstatusComponent;
  let fixture: ComponentFixture<ReportsstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
