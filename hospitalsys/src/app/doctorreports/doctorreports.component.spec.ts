import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorreportsComponent } from './doctorreports.component';

describe('DoctorreportsComponent', () => {
  let component: DoctorreportsComponent;
  let fixture: ComponentFixture<DoctorreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
