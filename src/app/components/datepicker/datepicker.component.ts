import { Component, OnInit } from '@angular/core';
import { DateFilterFn } from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  minDate = new Date();
  maxDate = new Date(2023, 2, 15);

  constructor() { }

  ngOnInit(): void {
  }

  dateFilter: (date: Date | null) => boolean =
    (date: Date | null) => {
    if (!date) {
      return false;
    }
    const day = date.getDay();
    return day != 0 && day != 6;
  };

}
