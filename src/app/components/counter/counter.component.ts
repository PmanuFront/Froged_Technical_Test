import { Component, signal, Signal, computed, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  public count: WritableSignal<number> = signal(0);
  public doubleCount: Signal<number> = computed(() => this.count() * 2);

  constructor() {
    // Signals are getter functions - calling them reads their value.
    console.log('The count is: ' + this.count());
  }

  public setValue(value: number) {
    this.count.set(value);
    console.log('The count is: ' + this.count());
  }

  public incrementValue() {
    this.count.update(value => value + 1);
    console.log('The count is: ' + this.count());
  }

  public decreaseValue() {
    this.count.update(value => value - 1);
    console.log('The count is: ' + this.count());
  }

}
