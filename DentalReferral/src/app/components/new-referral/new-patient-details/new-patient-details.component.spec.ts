import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPatientDetailsComponent } from './new-patient-details.component';

describe('NewPatientDetailsComponent', () => {
  let component: NewPatientDetailsComponent;
  let fixture: ComponentFixture<NewPatientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPatientDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
