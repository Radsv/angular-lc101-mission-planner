import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipmentItems : string[] = ['Command Module', 'Space Camera', 'Food', 'Oxygen Tanks'];
equipmentItemsBeingEdited : string = '';
  constructor() { }

  ngOnInit() {
  }

  add(newEquipmentName:string){
    this.equipmentItems.push(newEquipmentName);
  }

  remove(item:string){
    let index = this.equipmentItems.indexOf(item);
    this.equipmentItems.splice(index, 1);
  }
  save(newItem: string, item: string) {
    
    let index = this.equipmentItems.indexOf(item);
    this.equipmentItems[index] = newItem;
    }
    edit(item: string) {
      this.equipmentItemsBeingEdited = item;
}
}
