import { Component, OnInit } from '@angular/core';
import {Component} from '@angular/core';

@Component({
  selector: 'select-form-example',
  templateUrl: 'select-form-example.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  constructor() {   interface Location {
    value: string;
    viewValue: string;
  }
  
  /**
   * @title Select in a form
   */
  
    selectedValue: string;
    selectedCar: string;
  
    foods: Location[] = [
      {value: 'aachen', viewValue: 'Aachen'},
      {value: 'bochum', viewValue: 'Bochum'},
      {value: 'berlin', viewValue: 'Berlin'},
      {value: 'braunschweig', viewValue: 'Braunschweig'},
      {value: 'bremen', viewValue: 'Bremen'},
      {value: 'dresden', viewValue: 'Dresden'},
      {value: 'erlangen', viewValue: 'Erlangen'},
      {value: 'hamburg', viewValue: 'Hamburg'},
      {value: 'kaiserslautern', viewValue: 'Kaiserslautern'},
      {value: 'karlsruhe', viewValue: 'Karlsruhe'},
      {value: 'stuttgart', viewValue: 'Stuttgart'},

    ];
  }

  ngOnInit(): void {
  }





}
