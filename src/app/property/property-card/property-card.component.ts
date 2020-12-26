import { Component, Input } from "@angular/core";
import { IProperty } from "../IProperty.interface";

@Component({
  selector: 'app-property-card',
  //template: `<h1>I am a card</h1>`,
  templateUrl: 'property-card.component.html',
  //styles: ['h1 {color: red;}']
  styleUrls: ['property-card.component.css']
})
export class PropertyCardComponent{
  //Using property binding
  @Input() property: IProperty;

  //Using Text interpolation
  // Property: any = {
  //   "Id": 1,
  //   "Name": "Virla House",
  //   "Type": "House",
  //   "Price": 12000
  // }

  onEdit(){
    alert('You are clicking Edit',);
  }
}
