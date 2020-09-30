import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { ThemesService } from '../../themes.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
	light :BehaviorSubject<boolean>;
	private currentValue :boolean;

  constructor(private themesService :ThemesService) {
	}

  ngOnInit(): void {
		if (this.themesService.currentTheme() == "light") {
			this.light = new BehaviorSubject<boolean>(true);
			this.currentValue = true;
		} else {
			this.light = new BehaviorSubject<boolean>(false);
			this.currentValue = false;
		}
  }

	toggle() :void {
		this.currentValue = !this.currentValue;
		this.light.next(this.currentValue);
		this.themesService.toggle();
	}

}
