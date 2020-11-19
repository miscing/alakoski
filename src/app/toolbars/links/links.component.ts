import { OnInit, Component } from '@angular/core';

import { BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

import { ContactInfo } from "../../contact-info/contactinfo";
import alakoskiCI from '../../contact-info/alakoski-contactinfo.json';
import { ThemesService } from "../../themes.service";

import itemsJson from './items.json';
import { Item } from '../item';

@Component({
	selector: 'app-links',
	templateUrl: './links.component.html',
	styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit{
	aInfo :ContactInfo = alakoskiCI;
	items : Item[] = itemsJson;
	color :BehaviorSubject<string>;
	isLight :boolean;
	isHandheld :boolean;

	constructor(private themesService: ThemesService, private breakpointObserver: BreakpointObserver) {}

	ngOnInit(): void {
		if (this.themesService.currentTheme() === "light-theme") {
			this.color = new BehaviorSubject<string>("");
		} else {
			this.color = new BehaviorSubject<string>("black");
		}
		this.themesService.getTheme().subscribe( theme => {
			if (theme !== "light-theme") {
				this.isLight = false;
			} else {
				this.isLight = true;
			}
			this.checkColor();
		});

		this.breakpointObserver.observe(
			'(max-width: 1200px)'
		).subscribe( (result :BreakpointState) => {
			// if handheld return black to color mail icon black on the white background
			if (result.matches){
				this.isHandheld = true;
			} else {
				this.isHandheld = false;
			}
			this.checkColor();
		});

	}

	checkColor() {
		if (this.isHandheld && this.isLight) {
			this.color.next("black");
		} else {
			this.color.next("");
		}
	}

}
