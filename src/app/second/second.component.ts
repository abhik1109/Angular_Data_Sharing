import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  count: number;
  @Input() name: string = '';
  @Output() newAddressEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor(private counterService: CounterService) {}

  ngOnInit() {
    // this.counterService.count.subscribe((c) => {
    //   this.count = c;
    // });
  }

  nextCount() {
    this.counterService.nextCount();
  }

  emitAddress(address: string) {
    this.newAddressEvent.emit(address);
  }
}
