import { Component, OnInit } from '@angular/core';

interface Candidate {
  name: string;
  photo: string;
}

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: Candidate[] = [];

  candidates: Candidate[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  isInCrew(candidate: Candidate): boolean {
    for (const testCandidate of this.crew) {
      if (candidate.name === testCandidate.name) {
        return true;
      }
    }
    return false;
  }

  getCrewMemberIndex(candidate: Candidate): number {
    let crewMemberIndex = -1; // assume not in crew
    if (this.isInCrew(candidate)) {
      for (let i = 0; i < this.crew.length; i++) {
        if (candidate.name === this.crew[i].name) {
          crewMemberIndex = i;
        }
      }
    }
    return crewMemberIndex;
  }

  addCrewMember(candidate: Candidate): void {
    if (this.isInCrew(candidate)) {
      this.crew.splice(this.getCrewMemberIndex(candidate), 1);
    } else if (this.crew.length < 3) {
      this.crew.push(candidate);
    }
  }

}
