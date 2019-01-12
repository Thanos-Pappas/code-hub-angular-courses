import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-a',
  templateUrl: './parent-a.component.html'
})
export class ParentAComponent implements OnInit {
items: string[] = ["First Child of Parent A", "Second Child of Parent A", "Third Child of Parent A"];
  constructor() { }

  ngOnInit() {
  }

}
