import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
experimentList : string[] = ['Mars soil sample' , 'Plant growth in habitat', 'Human bone density'];
experimentListBeingEdited : string = '';
  constructor() { }

  ngOnInit() {
  }

  add(newExperimentName:string){
    this.experimentList.push(newExperimentName);
  }

  remove(item:string){
    let index = this.experimentList.indexOf(item);
    this.experimentList.splice(index, 1);
  }

  save(newItem: string, item: string) {
    
    let index = this.experimentList.indexOf(item);
    this.experimentList[index] = newItem;
    }
    edit(item: string) {
      this.experimentListBeingEdited = item;
}

}
