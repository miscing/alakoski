import { Input, Component, OnInit } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss']
})
export class TopToolbarComponent implements OnInit {
	@Input() isHandHeld: boolean;
	@Input() menuDrawer :MatDrawer;

	companyName: string = "saneeraus alakoski oy";

	constructor() {}

	ngOnInit(): void {
	}

	toggleDrawer() {
		this.menuDrawer.toggle();
	}
}
