import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDatesChoiceComponent } from './report-dates-choice.component';

describe('ReportDatesChoiceComponent', () => {
  let component: ReportDatesChoiceComponent;
  let fixture: ComponentFixture<ReportDatesChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDatesChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportDatesChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
