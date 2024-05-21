import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-dates',
  templateUrl: './report-dates.component.html',
  styleUrls: ['./report-dates.component.scss']
})
export class ReportDatesComponent implements OnInit {
  fechaInicio: string = "1/1/2000";
  fechaFin: string = "1/1/2001";

  constructor() { }

  ngOnInit(): void {
  }

}
