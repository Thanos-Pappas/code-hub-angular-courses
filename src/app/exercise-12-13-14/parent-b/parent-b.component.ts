import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-parent-b',
  templateUrl: './parent-b.component.html'
})
export class ParentBComponent implements OnInit {
    items: string[] = ["First Child of Parent B", "Second Child of Parent B", "Third Child of Parent B"];

  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

    selectChild(index: number){
    this.router.navigate(['childb',index], {relativeTo: this.route});
    }
}
