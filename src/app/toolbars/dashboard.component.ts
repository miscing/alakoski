import { HostBinding, ViewChild, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatDrawer } from '@angular/material/sidenav';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

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
	@HostBinding('style.height') hostHeight;

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

		// will set height to height without address/url bar on mobile
		this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(res => res.matches))
		.subscribe( (handset :boolean) => {
			if (handset) {
				if (window.innerHeight >= document.documentElement.clientHeight) {
					this.hostHeight = document.documentElement.clientHeight;
				}
			} else {
				this.hostHeight = "100vh";
			}
		});
	}

	setMenuOpened(opened :boolean) {
		this.menuOpen = opened;
	}

	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
	}

	checkIfUrlBarVisible() :void {
	}
}
