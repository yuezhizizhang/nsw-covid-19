import { Component, OnInit } from '@angular/core';
import {data} from '../data/surburb';
import {data as suburbGrowth} from '../data/surburb.growth';

@Component({
  selector: 'app-suburb',
  templateUrl: './suburb.component.html',
  styleUrls: ['./suburb.component.scss']
})
export class SuburbComponent {

  series: any[];
  suburbGrowth: any;
  total = 0;
  suburbs = [];
  selectSuburb = 'All';
  suburbSeries = [];
  totalCase = 0;

  // options
  gradient = false;

  colorScheme = {
    domain: ['#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded']
  };

  verticalColorScheme = {
    domain: ['#5AA454']
  };

  constructor() {
    Object.assign(this, data);
    Object.assign(this, {suburbGrowth});
    for (const s of this.suburbGrowth) {
      this.suburbs.push(s.name);
    }
    this.totalCase = this.total;
  }

  submit($event: string): void {
    this.selectSuburb = $event;
    if (this.selectSuburb === 'All') {
      this.total = this.totalCase;
    } else {
      const list = this.suburbGrowth.filter(s => s.name === this.selectSuburb);
      if (!!list && list.length > 0) {
        const item = list[0];
        this.suburbSeries = item.series;
        this.total = item.total;
      }
    }
  }

}
