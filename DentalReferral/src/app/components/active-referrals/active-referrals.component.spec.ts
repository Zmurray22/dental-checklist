import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveReferralsComponent } from './active-referrals.component';

describe('ActiveReferralsComponent', () => {
  let component: ActiveReferralsComponent;
  let fixture: ComponentFixture<ActiveReferralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveReferralsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveReferralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
