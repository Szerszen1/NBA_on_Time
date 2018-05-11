import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  @Output()
  section = new EventEmitter<number>();

  emitSection(task: number) {
    this.section.emit(task);
  }

  constructor() { }

  ngOnInit() {
  }

}
