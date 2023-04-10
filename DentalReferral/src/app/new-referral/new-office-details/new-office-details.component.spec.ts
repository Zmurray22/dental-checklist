import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOfficeDetailsComponent } from './new-office-details.component';

describe('NewOfficeDetailsComponent', () => {
  let component: NewOfficeDetailsComponent;
  let fixture: ComponentFixture<NewOfficeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOfficeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewOfficeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
