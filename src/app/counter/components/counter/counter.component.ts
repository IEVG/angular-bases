import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{ counter }}</h3>

        <button (click)="increaseBy(+1)">+1</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="increaseBy(-1)">-1</button>
    `
})

export class CounterComponent {

    counter = 10;
  tempCounter = this.counter;

  increaseBy( incOrDec: number ): void {
    this.counter += incOrDec;
  }

  resetCounter() {
    this.counter = this.tempCounter;
  }

}