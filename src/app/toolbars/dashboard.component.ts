import { ViewChild, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

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
	menuOpen :boolean;

	constructor(private breakpointObserver: BreakpointObserver) {}

	ngOnInit(): void {
		this.isHandHeld = this.breakpointObserver.observe(
			'(max-width: 1200px)'
		)
		.pipe(
			map(result => result.matches)
		);

		// close menu if layout changes
		this.isHandHeld.subscribe( handHeld => {
			if (this.menuOpen && !handHeld) {
				this.menudrawer.close();
			}
		});
	}

	setMenuOpened(opened :boolean) {
		this.menuOpen = opened;
	}

	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
	}

}
