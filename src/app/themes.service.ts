import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

const themes = [ "light-theme", "dark-theme", "orange-theme" ];

@Injectable({
	providedIn: 'root'
})
export class ThemesService {
	private theme :string;
	private bs :BehaviorSubject<string>;

	constructor() {
		this.theme = themes[0]; //default theme
		this.bs = new BehaviorSubject<string>(this.theme);
	}

	setTheme(theme :string) {
		this.theme = theme;
		this.bs.next(theme);
	}

	currentTheme() :string {
		return this.theme;
	}

	// Returns an observable that triggers on theme change sending the theme class
	getTheme() :Observable<string> {
		return this.bs;
	}

	getThemes() :string[] {
		return themes;
	}
}
