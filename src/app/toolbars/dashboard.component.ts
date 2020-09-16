import { ViewChild, Component, OnInit } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	@ViewChild('menudrawer') menudrawer : MatDrawer;
	isHandHeld : Observable<boolean>;

	constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
		this.isHandHeld = this.breakpointObserver.observe(Breakpoints.Handset)
			.pipe(
				map(result => result.matches)
			);
	}

	capitalize(input: string): string {
		return input.charAt(0).toUpperCase() + input.slice(1);
	}
}
