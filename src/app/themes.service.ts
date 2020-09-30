import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

const themes = [ "light-theme", "dark-theme" ];

@Injectable({
	providedIn: 'root'
})
export class ThemesService {
	private theme :string;
	private bs :BehaviorSubject<string>;

	constructor() {
		this.theme = themes[0]; //default theme TODO: read cookie for old theme
		this.bs = new BehaviorSubject<string>(this.theme);
	}

	toggle() {
		if (this.theme == themes[0]) {
			this.theme = themes[1];
			this.bs.next(themes[1]);
		} else {
			this.theme = themes[0];
			this.bs.next(themes[0]);
		}
	}

	currentTheme() :string {
		return this.theme;
	}

	// Returns an observable that triggers on theme change sending the theme class
	getTheme() :Observable<string> {
		return this.bs;
	}
}
