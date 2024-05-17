import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferReportListComponent } from './offer-report-list.component';

describe('OfferReportListComponent', () => {
  let component: OfferReportListComponent;
  let fixture: ComponentFixture<OfferReportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferReportListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
