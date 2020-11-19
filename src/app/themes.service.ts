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
		let theme = this.getCookie();
		if ( theme == themes[0] || theme == themes[1] ) {
			this.theme = theme;
		} else {
			this.setCookie(themes[0]);
			this.theme = themes[0];
		}
		this.bs = new BehaviorSubject<string>(this.theme);
	}

	toggle() {
		if (this.theme == themes[0]) {
			this.setTheme(themes[1]);
		} else {
			this.setTheme(themes[0]);
		}
	}

	currentTheme() :string {
		return this.theme;
	}

	// Returns an observable that triggers on theme change sending the theme class
	getTheme() :Observable<string> {
		return this.bs;
	}

	setTheme(theme :string) {
		this.theme = theme;
		this.bs.next(theme);
		this.setCookie(theme);
	}

	setCookie(theme :string) {
		try {
			window.localStorage.setItem("theme", theme);
		} catch {
			console.error("failed to store theme");
		}
	}

	getCookie() :string {
		try {
			let theme = window.localStorage.getItem("theme");
			return theme;
		} catch {
			console.error("failed to store theme");
			return "light-theme";
		}
	}
}
