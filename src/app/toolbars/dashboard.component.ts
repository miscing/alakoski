import { AfterViewInit,  ViewChild, Component, OnInit } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DrawerService } from './drawer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,AfterViewInit {
	@ViewChild('menudrawer') menudrawer : MatDrawer;
	isHandHeld : Observable<boolean>;

	constructor(private breakpointObserver: BreakpointObserver, private drawerService: DrawerService) {}

  ngOnInit(): void {
		this.isHandHeld = this.breakpointObserver.observe(Breakpoints.Handset)
			.pipe(
				map(result => result.matches)
			);
	}

	ngAfterViewInit() :void {
		this.drawerService.setDrawer(this.menudrawer);
	}
}
