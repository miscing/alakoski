import { Component, OnInit } from '@angular/core';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

import itemsJson from './items.json';
import { Item } from './item';


@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss']
})
export class TopToolbarComponent implements OnInit {

	// companyName: string = "Saneeraus Alakoski Oy";
	// isHandset$ : Observable<boolean>;
	// darkTheme : boolean;
	items : Item[] = itemsJson;

	// constructor(private breakpointObserver: BreakpointObserver) {}
	constructor() {}

	ngOnInit(): void {
		// this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
		// 	.pipe(
		// 		map(result => result.matches)
		// 	);
		// this.darkTheme = true;
	}

	capitalize(input: string): string {
		return input.charAt(0).toUpperCase() + input.slice(1);
	}

}
