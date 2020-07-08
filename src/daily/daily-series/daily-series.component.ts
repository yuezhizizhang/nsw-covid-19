import { Component, OnInit } from '@angular/core';
import {data} from '../../data/growth';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daily-series',
  templateUrl: './daily-series.component.html',
  styleUrls: ['./daily-series.component.scss']
})
export class DailySeriesComponent {

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

  areaColorScheme = {
    domain: ['#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded']
  };

  constructor(private readonly router: Router,
    private readonly route: ActivatedRoute,) {
    Object.assign(this, data);
    if (!!this.series && this.series.length > 0) {
      const last = this.series[this.series.length - 1];
      this.lastDay = last.name;
      this.lastDayCount = last.value;
    }
  }

  onSelect(item: any): void {
    const day: string = item.name;
    this.router.navigate([encodeURIComponent(day)], { relativeTo: this.route })
  }
}
