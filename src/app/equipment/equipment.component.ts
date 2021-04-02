import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: string[] = [
    'Habitat dome',
    'Drones',
    'Food containers',
    'Oxygen tanks'
  ];
  itemBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(item: string) {
    if (!item) {
       alert('Must enter an item');
       return -1;
    }
    this.equipment.push(item);
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(updatedItem: string, item: string) {
    const itemIndex = this.equipment.indexOf(item);
    this.equipment[itemIndex] = updatedItem;
    this.itemBeingEdited = null;
  }

  remove(item: string) {
    const itemIndex = this.equipment.indexOf(item);
    this.equipment.splice(itemIndex, 1);
  }

}
