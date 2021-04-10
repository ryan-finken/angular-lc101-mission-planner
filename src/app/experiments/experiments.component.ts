import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
  plannedExperiments: string[] = [];
  constructor() { }

  ngOnInit() { }

  planExperiment(experiment: string): void {
    if (this.plannedExperiments.length < 3) {
      this.plannedExperiments.push(experiment);
      let index = this.experiments.indexOf(experiment);
      this.experiments.splice(index, 1);
    }
  }

  removeExperiment(experiment: string): void {
    this.experiments.push(experiment);
    let index = this.plannedExperiments.indexOf(experiment);
    this.plannedExperiments.splice(index, 1);
  }

}
