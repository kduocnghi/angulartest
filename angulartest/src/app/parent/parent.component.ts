import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<button (click)="child.value= child.value +1"></button> <app-child #child></app-child>',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
