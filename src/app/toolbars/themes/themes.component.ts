import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ThemesService } from '../../themes.service';


@Component({
	selector: 'app-themes',
	templateUrl: './themes.component.html',
	styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
	theme :Observable<string>;

	constructor(private themesService :ThemesService) {
	}

	ngOnInit(): void {
		this.theme = this.themesService.getTheme();
	}

	toggle() :void {
		this.themesService.toggle();
	}
}
