import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  // log = [];
  // log : number[] = [];
  log : Date[] = [];


  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
    // this.log.push(this.log.length + 1);
  }
}
