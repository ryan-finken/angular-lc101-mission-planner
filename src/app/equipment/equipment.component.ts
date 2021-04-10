import { Component, OnInit } from '@angular/core';

interface EquipmentItem {
  name: string;
  mass: number;
}

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentItems: EquipmentItem[] = [
    { name: 'Duct Tape', mass: 0.5 },
    { name: 'Space Camera', mass: 20 },
    { name: 'Food', mass: 150 },
    { name: 'Oxygen Tanks', mass: 400 },
    { name: 'AE-35 Unit', mass: 5 },
    { name: 'ISS Supplies', mass: 800 },
    { name: 'Water', mass: 250 },
    { name: 'Satellite', mass: 1200 },
    { name: 'R2 Unit', mass: 32 }
  ];
  cargoHold: EquipmentItem[] = [];
  cargoMass: number = 0;
  maximumAllowedMass: number = 2000;
  maxItems: number = 10;

  constructor() { }

  ngOnInit() { }

  // Code your addItem function here:

  addItem(equipment: EquipmentItem): boolean {
    this.cargoHold.push(equipment);
    this.cargoMass += equipment.mass;
    return (Math.abs(this.cargoMass - this.maximumAllowedMass) >= 200);
  }

  emptyCargoHold(): void {
    this.cargoHold = [];
    this.cargoMass = 0;
  }

  itemCountInHold(item: EquipmentItem): number {
    let numOfItems: number = 0;
    for (const equipment of this.cargoHold) {
      if (equipment.name === item.name) {
        numOfItems++;
      }
    }
    return numOfItems;
  }

  getItemIndex(item: EquipmentItem): number {
    let itemIndex: number = -1; // assume item not in cargo hold
    for (let i = 0; i < this.cargoHold.length; i++) {
      if (this.cargoHold[i].name === item.name) {
        itemIndex = i;
        break;
      }
    }
    return itemIndex;
  }

  removeItem(item: EquipmentItem): void {
    this.cargoHold.splice(this.getItemIndex(item), 1);
    this.cargoMass -= item.mass;
  }
}
