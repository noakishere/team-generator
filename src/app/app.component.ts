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
    if (Number(numberOfTeams) <= 0) {
      this.errorMessage = 'Number has to be more than 0';
    } else {
      this.errorMessage = '';
    }
  }

  public clearInput(): string {
    return ' ';
  }
}
