import { Component, OnInit } from '@angular/core';
import {data} from '../data/growth';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent{

  data: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;

  colorScheme = {
    domain: ['#5AA454']
  };

  constructor() {
    Object.assign(this, {data});
  }

}
