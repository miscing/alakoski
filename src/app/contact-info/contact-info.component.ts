import { Component, OnInit } from '@angular/core';

import { ContactInfo } from "./contactinfo";
import alakoskiCI from './alakoski-contactinfo.json';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
	aInfo :ContactInfo = alakoskiCI;


	constructor() {}

	ngOnInit(): void {
	}
}
