import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public newMemberName: string = '';
  public members: string[] = [];
  public errorMessage: string = '';
  public teams: string[][] = []; //final teams array

  public addMemberToArray(newMember: string): void {
    if (newMember == '') {
      this.errorMessage = 'Name input cannot be empty';
    } else {
      this.members.push(newMember);
      this.errorMessage = '';
    }
    console.log(this.members);
  }

  public generateTeams(numberOfTeams: string): void {
    let indexCount = Number(numberOfTeams);
    if (indexCount <= 0) {
      this.errorMessage = 'Number has to be more than 0';
    } else if (this.members.length < indexCount) {
      this.errorMessage =
        'Not enough members for the requested amount of teams';
    } else {
      this.errorMessage = '';

      const allMembers = [...this.members];

      while (allMembers.length) {
        for (let i = 0; i < indexCount; i++) {
          const randomIndex = Math.floor(Math.random() * allMembers.length);
          const member = allMembers.splice(randomIndex, 1)[0];

          if (member != undefined) {
            if (this.teams[i]) {
              this.teams[i].push(member);
            } else {
              this.teams[i] = [member];
            }
          }
        }
      }
      console.log(this.teams);

      this.members = []; //clears the list
    }
  }

  public clearInput(): string {
    return ' ';
  }
}
