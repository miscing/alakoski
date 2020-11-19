import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ThemesService } from './themes.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	theme :Observable<string>;

	constructor(private themesService : ThemesService) {}

	ngOnInit() {
		window.addEventListener("load",function() {
			setTimeout(function(){
				// This hides the address bar:
				window.scrollTo(0, 1);
			}, 0);
		});
		this.theme = this.themesService.getTheme();
	}

}
