import { Component, OnInit } from '@angular/core';
import {data as areas} from '../../data/growth.area';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-daily-areas',
  templateUrl: './daily-areas.component.html',
  styleUrls: ['./daily-areas.component.scss']
})
export class DailyAreasComponent {

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

  constructor(private readonly router: Router,
    private readonly route: ActivatedRoute) {
    Object.assign(this, {areas});
    
    this.route.paramMap.subscribe(params => {
      const day = decodeURIComponent(params.get('day'));
      const list = this.areas.filter(s => s.name === day);
      if (!!list && list.length > 0) {
        const area = list[0];
        this.areaSeries = area.series;
        this.day = area.name;
        this.dayCount = area.total;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/daily']);
  }
}
