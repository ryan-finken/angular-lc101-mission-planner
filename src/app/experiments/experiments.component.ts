import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = [
    'Mars soil sample',
    'Plant growth in habitat',
    'Human bone density'
  ];
  experimentBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  add(experiment: string) {
    this.experiments.push(experiment);
  }

  edit(experiment: string) {
    this.experimentBeingEdited = experiment;
  }

  save(updatedExperiment: string, experiment: string) {
    const experimentIndex = this.experiments.indexOf(experiment);
    this.experiments[experimentIndex] = updatedExperiment;
    this.experimentBeingEdited = null;
  }

  remove(experiment: string) {
    const experimentIndex = this.experiments.indexOf(experiment);
    this.experiments.splice(experimentIndex, 1);
  }

}
