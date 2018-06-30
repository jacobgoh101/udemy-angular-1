import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from '@angular/core';

@Component({selector: 'app-game-control', templateUrl: './game-control.component.html', styleUrls: ['./game-control.component.css']})
export class GameControlComponent implements OnInit {
  @Input()gameRunning : boolean;
  @Output()gameChange : EventEmitter < boolean > = new EventEmitter < boolean > ();
  @Output()increment : EventEmitter < void > = new EventEmitter < void > ();
  interval : any = null;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes : SimpleChanges) : void {
    if(changes.hasOwnProperty('gameRunning')) {
      const gameRunning = changes.gameRunning.currentValue;
      if (gameRunning) {
        this.interval = setInterval(() => {
          this
            .increment
            .emit();
        }, 1000);
      } else {
        if (this.interval !== null) {
          clearInterval(this.interval);
          this.interval = null;
        }
      }
    }
  }

}
