import { OnInit, Component } from '@angular/core';

import { BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { ContactInfo } from "../../contact-info/contactinfo";
import alakoskiCI from '../../contact-info/alakoski-contactinfo.json';

import itemsJson from './items.json';
import { Item } from '../item';

@Component({
	selector: 'app-links',
	templateUrl: './links.component.html',
	styleUrls: ['./links.component.scss']
})
export class LinksComponent {
	aInfo :ContactInfo = alakoskiCI;
	items : Item[] = itemsJson;
	color :Observable<string>;

	constructor(private breakpointObserver: BreakpointObserver) {}

	ngOnInit(): void{
		this.color = this.breakpointObserver.observe(
			'(max-width: 1200px)'
		).pipe(
			// if handheld return black to color mail icon black on the white background
			map((result :BreakpointState )=> {
				 if (result.matches) {
					 return "black";
				 } else {
					 return "";
				 }
			})
		);

		this.color.subscribe( color => { console.log( color ) });
	}

}
