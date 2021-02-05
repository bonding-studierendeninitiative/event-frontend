import { Component, OnInit } from '@angular/core';
import {Component} from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedValue: string;
  selectedCar: string;

  foods: Location[] = [
    {value: 'aachen', viewValue: 'Aachen'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}
