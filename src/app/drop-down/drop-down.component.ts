
import {Component} from '@angular/core';

interface Location {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent {

  constructor() { }

  ngOnInit(): void {
  }

  selectedValue: string;
  selectedCar: string;

  locations: Location[] = [
    {value: 'aachen', viewValue: 'Aachen'},
    {value: 'berlin', viewValue: 'Berlin'},
    {value: 'bochum', viewValue: 'Bochum'},
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
