import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferSearchComponent } from './offer-search.component';

describe('OfferSearchComponent', () => {
  let component: OfferSearchComponent;
  let fixture: ComponentFixture<OfferSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
