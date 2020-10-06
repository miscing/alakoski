import { Component } from '@angular/core';

import itemsJson from './items.json';
import { Item } from '../item';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {
	items : Item[] = itemsJson;

  constructor() { }
}
