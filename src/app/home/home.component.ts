import { Component, OnInit } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import homeRaw from './home.json';
import { Home } from './home';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
	home: Home = homeRaw;
	isHandHeld :Observable<boolean>;
	topToolbarShort :Observable<boolean>;
	postpost :string;

	constructor(private breakpointObserver :BreakpointObserver) {}

	ngOnInit(): void {
		this.isHandHeld = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
			map( breakpoinstState => breakpoinstState.matches )
		);
		this.topToolbarShort = this.breakpointObserver.observe('(max-width: 1200px)').pipe(
			map( breakpoinstState => breakpoinstState.matches )
		);
		this.topToolbarShort.subscribe( short => {
			if (short) {
				this.postpost = this.home.post[1];
			} else {
				this.postpost = this.home.post[2];
			}
		});
	}
}
