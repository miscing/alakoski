import { Input, Component, OnInit } from '@angular/core';

import itemsJson from './items.json';
import { Item } from './item';

import { DrawerService } from '../drawer.service';


@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss']
})
export class TopToolbarComponent implements OnInit {
	@Input() isHandHeld: boolean;

	companyName: string = "saneeraus alakoski oy";
	items : Item[] = itemsJson;

	constructor( private drawerService: DrawerService) {}

	ngOnInit(): void {
	}

	toggleDrawer() {
		this.drawerService.toggle();
	}

	capitalize(input: string): string {
		return input.charAt(0).toUpperCase() + input.slice(1);
	}
}
