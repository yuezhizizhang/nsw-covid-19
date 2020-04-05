import { Component, OnInit } from '@angular/core';
import {data} from '../data/surburb';

@Component({
  selector: 'app-suburb',
  templateUrl: './suburb.component.html',
  styleUrls: ['./suburb.component.scss']
})
export class SuburbComponent {

  data: any[];

  // options
  gradient = false;

  colorScheme = {
    domain: ['#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded']
  };

  constructor() {
    Object.assign(this, {data});
  }

}
