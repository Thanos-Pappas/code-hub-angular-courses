import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-routing',
    templateUrl: './routing.component.html'
})
export class RoutingComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
    }

    /**
     * Navigate to a path relative to the current path (http://localhost:4200/extras/extra-1)
     */
    goToExtra(index: number) {
        console.log(this.route);
        this.router.navigate(['extra-'+index], {relativeTo: this.route});
    }

    /**
     * Navigate to an absolute path (http://localhost:4200/exercises)
     */
    goToExercises() {
        this.router.navigate(['exercises']);
    }
}
