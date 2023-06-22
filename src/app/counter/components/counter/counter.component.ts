// Si presionamos a- component podemos utilizar el snippet que crea la plantilla base automáticamente


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

  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;

  }

  resetCounter(){
    this.counter = 10;
  }

  // reset(value: number){
  //   this.counter = value;
  // }

}
