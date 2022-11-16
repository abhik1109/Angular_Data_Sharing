import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  count: number;
  CurrentName: string = 'Abhi';
  address: string = '';
  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.count.subscribe((c) => {
      this.count = c;
    });
  }

  nextCount() {
    this.counterService.nextCount();
  }
  resetCounter() {
    this.counterService.resetCounter();
    this.counterService.nextCount();
  }

  addAddress(addr: string) {
    this.address = addr;
  }
}
