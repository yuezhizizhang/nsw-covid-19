import { Component, OnInit } from '@angular/core';
import {data} from '../data/postcode';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-postcode',
  templateUrl: './postcode.component.html',
  styleUrls: ['./postcode.component.scss']
})
export class PostcodeComponent implements OnInit {

  data: any;
  series: any[];
  total: number;
  lastDay = '';

  postcodeForm = new FormGroup({
    postcode: new FormControl('', [
      Validators.required,
      Validators.pattern('^2[0-9][0-9][0-9]$')
    ]),
  });

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

  ngOnInit(): void {
    this.postcodeForm.reset({
      postcode: this.data[0].name
    });
    this.series = this.data[0].series;
    this.total = this.data[0].total;
    this.lastDay = this.series.length > 0
        ? this.series[this.series.length - 1].name
        : '';
  }

  submit(): void {
    const code = this.postcodeForm.get('postcode').value;
    const list = this.data.filter(c => c.name === code);
    if (!!list && list.length > 0) {
      const item = list[0];
      this.series = item.series;
      this.total = item.total;
      this.lastDay = this.series.length > 0
        ? this.series[this.series.length - 1].name
        : '';
    } else {
      this.series = [];
      this.total = 0;
      this.lastDay = '';
    }
  }
}
