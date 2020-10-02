import { ViewChild, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { slideInAnimation } from './animation';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	animations: [slideInAnimation] // register the animation
})
export class DashboardComponent implements OnInit {
	@ViewChild('menudrawer') menudrawer : MatDrawer;
	isHandHeld : Observable<boolean>;
	// isHandHeld : Observable<BreakpointState>;

	constructor(private breakpointObserver: BreakpointObserver) {}

	ngOnInit(): void {
		this.isHandHeld = this.breakpointObserver.observe(Breakpoints.Web)
		.pipe(
			map(result => !result.matches)
		);
		this.isHandHeld.subscribe( x => { console.log(x) } );
	}

	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
	}
}
