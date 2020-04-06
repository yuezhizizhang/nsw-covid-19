import { Component, OnInit } from '@angular/core';
import {data} from '../data/growth';
import {data as areas} from '../data/growth.area';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent {

  series: any[];
  areas: any[];
  areaSeries: any[];
  total = 0;
  lastDay = '';
  day = '';
  lastDayCount = 0;
  dayCount = 0;
  isByArea = false;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;

  colorScheme = {
    domain: ['#5AA454']
  };

  areaColorScheme = {
    domain: ['#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded']
  };

  constructor() {
    Object.assign(this, data);
    Object.assign(this, {areas});
    if (!!this.series && this.series.length > 0) {
      const last = this.series[this.series.length - 1];
      this.lastDay = this.day = last.name;
      this.lastDayCount = this.dayCount = last.value;
    }
  }

  onSelect(item: any): void {
    const day: string = item.name;
    const list = this.areas.filter(s => s.name === day);
    if (!!list && list.length > 0) {
      const area = list[0];
      this.areaSeries = area.series;
      this.isByArea = true;
      this.day = area.name;
      this.dayCount = area.total;
    }
  }

  goBack(): void {
    this.isByArea = false;
    this.day = this.lastDay;
    this.dayCount = this.lastDayCount;
  }
}
