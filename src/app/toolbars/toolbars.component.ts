import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import itemsJson from './items.json';
import { Item } from './item';


@Component({
  selector: 'app-toolbars',
  templateUrl: './toolbars.component.html',
  styleUrls: ['./toolbars.component.scss']
})
export class ToolbarsComponent implements OnInit {

	companyName: string = "Saneeraus Alakoski Oy";
	isHandset$ : Observable<boolean>;
	darkTheme : boolean;
	items : Item[] = itemsJson;



	ngOnInit() {
		this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
			.pipe(
				map(result => result.matches)
			);
		this.darkTheme = true;
	}

	constructor(private breakpointObserver: BreakpointObserver) {}

	capitalize(input: string): string {
		return input.charAt(0).toUpperCase() + input.slice(1);
	}

}
