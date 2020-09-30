import { Component, OnInit } from '@angular/core';

import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'app-handheld-menu',
  templateUrl: './handheld-menu.component.html',
  styleUrls: ['./handheld-menu.component.scss']
})
export class HandheldMenuComponent implements OnInit {
	paths :string[];

	constructor(private appRoutingModule :AppRoutingModule) { }

	ngOnInit(): void {
		this.paths = this.appRoutingModule.routes();
	}

	capitalize(input: string): string {
		return input.charAt(0).toUpperCase() + input.slice(1);
	}
}
