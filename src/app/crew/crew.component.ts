import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];
  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }
  
  add(memberName: string, isFirst: boolean) {
    if (!memberName) {
      alert('Must enter a name');
      return -1;
    }
    for (const member of this.crew) {
      if (member['name'].toLowerCase() === memberName.toLowerCase() ) {
        alert('Already in crew');
        return -1;
      }
    }
    this.crew.push({name: memberName, firstMission: isFirst});
  }

  remove(member: object) {
    const removalIndex = this.crew.indexOf(member);
    this.crew.splice(removalIndex, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
  }

}
