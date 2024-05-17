import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferConsultComponent } from './offer-consult.component';

describe('OfferConsultComponent', () => {
  let component: OfferConsultComponent;
  let fixture: ComponentFixture<OfferConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferConsultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
