
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
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}
