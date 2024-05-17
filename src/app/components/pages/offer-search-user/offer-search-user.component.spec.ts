import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferSearchUserComponent } from './offer-search-user.component';

describe('OfferSearchUserComponent', () => {
  let component: OfferSearchUserComponent;
  let fixture: ComponentFixture<OfferSearchUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferSearchUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferSearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
