import { Component, OnInit } from '@angular/core';

import { ThemesService } from '../../themes.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

  constructor(public themesService :ThemesService) {
	}

  ngOnInit(): void {
  }

}
