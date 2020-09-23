import { HostBinding, Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

import { ThemesService } from '../../themes.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
	themes :string[];

	@HostBinding('class') componentCssClass;

  constructor(private themesService :ThemesService, private overlayContainer: OverlayContainer) {
		let curTheme = this.themesService.currentTheme();
		this.overlayContainer.getContainerElement().classList.add(curTheme);
		this.componentCssClass = curTheme;
	}

  ngOnInit(): void {
		this.themes = this.themesService.getThemes();
  }

	changeTheme(to :string) {
		this.themesService.setTheme(to);
	}

}
