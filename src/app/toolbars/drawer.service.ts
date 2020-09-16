import { Injectable } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
	providedIn: 'root'
})
export class DrawerService {
	private drawer: MatDrawer;

	setDrawer(drawer: MatDrawer) {
		if (drawer == null) {
			console.error("undefined drawer received");
			return
		}
		this.drawer = drawer;
	}

	toggle(): void {
		if (this.drawer == null) {
			console.error("no drawer set");
			return
		}
		this.drawer.toggle();
	}

	constructor() { }
}
