import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Myta House",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 2,
      "Name": "Vita House",
      "Type": "House",
      "Price": 11500
    },
    {
      "Id": 3,
      "Name": "Vihu House",
      "Type": "House",
      "Price": 12750
    },
    {
      "Id": 4,
      "Name": "Gonzo House",
      "Type": "House",
      "Price": 9000
    },
    {
      "Id": 5,
      "Name": "Binz House",
      "Type": "House",
      "Price": 10000
    },
    {
      "Id": 6,
      "Name": "Wowwy House",
      "Type": "House",
      "Price": 11500
    }
  ];
}
