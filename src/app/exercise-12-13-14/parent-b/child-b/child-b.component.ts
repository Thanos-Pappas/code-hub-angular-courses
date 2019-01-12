import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html'
})
export class ChildBComponent implements OnInit {
id:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
        (params: Params) =>{
          this.id = params['id'];
        }
    );
  }

}
