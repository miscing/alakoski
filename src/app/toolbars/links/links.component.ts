import { Component } from '@angular/core';

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

  constructor() { }
}
