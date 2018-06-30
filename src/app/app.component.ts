import {Component} from '@angular/core';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  currentIndex : number = 0;
  gameRunning : boolean = false;

  onIncrement() {
    this.currentIndex++;
  }

  onGameChange(v : boolean) : void {
    this.gameRunning = v;
  }

  get indexArr() : Array < number > {
    return Array(this.currentIndex)
      .fill(null)
      .map((x, i) => i);;
  }
}
