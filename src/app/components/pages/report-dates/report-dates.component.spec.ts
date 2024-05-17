import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDatesComponent } from './report-dates.component';

describe('ReportDatesComponent', () => {
  let component: ReportDatesComponent;
  let fixture: ComponentFixture<ReportDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
