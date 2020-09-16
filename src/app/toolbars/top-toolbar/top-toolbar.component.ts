import { Input, Component, OnInit } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';

import itemsJson from './items.json';
import { Item } from './item';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss']
})
export class TopToolbarComponent implements OnInit {
	@Input() isHandHeld: boolean;
	@Input() menuDrawer :MatDrawer;

	companyName: string = "saneeraus alakoski oy";
	items : Item[] = itemsJson;

	constructor() {}

	ngOnInit(): void {
	}

	toggleDrawer() {
		this.menuDrawer.toggle();
	}

	capitalize(input: string): string {
		return input.charAt(0).toUpperCase() + input.slice(1);
	}
}
