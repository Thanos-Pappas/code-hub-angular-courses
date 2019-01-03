import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'third-ex-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {
    items : string[] = ["first item", "second item", "third item"];
    allow : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
