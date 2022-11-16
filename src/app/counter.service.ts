import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CounterService {
  counter = 1;
  count: BehaviorSubject<number>;
  constructor() {
    this.count = new BehaviorSubject(this.counter);
  }

  nextCount() {
    this.count.next(++this.counter);
  }

  resetCounter() {
    this.counter = 0;
  }
}
