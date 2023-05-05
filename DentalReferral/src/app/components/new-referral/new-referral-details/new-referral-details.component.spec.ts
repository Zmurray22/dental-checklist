import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReferralDetailsComponent } from './new-referral-details.component';

describe('NewReferralDetailsComponent', () => {
  let component: NewReferralDetailsComponent;
  let fixture: ComponentFixture<NewReferralDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReferralDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReferralDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
