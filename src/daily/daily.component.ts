import { Component, OnInit } from '@angular/core';
import {data} from '../data/growth';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent{

  series: any[];
  total = 0;
  lastDay = '';
  lastDayCount = 0;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;

  colorScheme = {
    domain: ['#5AA454']
  };

  constructor() {
    Object.assign(this, data);
    if (!!this.series && this.series.length > 0) {
      const last = this.series[this.series.length - 1];
      this.lastDay = last.name;
      this.lastDayCount = last.value;
    }
  }

}
