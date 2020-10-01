import { Component, OnInit } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ContactInfo } from "./contactinfo";
import alakoskiCI from './alakoski-contactinfo.json';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
	isHandHeld: Observable<boolean>;
	aInfo :ContactInfo = alakoskiCI;


	constructor(private breakpointObserver: BreakpointObserver) {}

	ngOnInit(): void {
		this.isHandHeld = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map(result => result.matches)
		);
	}
}
