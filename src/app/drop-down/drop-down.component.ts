
import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }
   

  ngOnInit(): void {
    this.selectedValue=this.activeRoute.snapshot.params.location;
    this.activeRoute.params.subscribe(routeParams => {
      this.selectedValue=this.activeRoute.snapshot.params.location;
    });
    }

  selectedValue: string;

  locations: Location[] = [
    {value: '', viewValue: 'alle'},
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

  changeValue(value):void{
    if (value == '') {
      this.router.navigateByUrl('/')
    } else {
      this.router.navigate([value]);
    }    
  }
}
