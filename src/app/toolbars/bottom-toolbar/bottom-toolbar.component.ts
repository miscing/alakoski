import { Component, OnInit } from '@angular/core';

import itemsJson from './items.json';
import { Item } from '../item';

@Component({
  selector: 'app-bottom-toolbar',
  templateUrl: './bottom-toolbar.component.html',
  styleUrls: ['./bottom-toolbar.component.scss']
})
export class BottomToolbarComponent implements OnInit {

	items : Item[] = itemsJson;

  constructor() { }

  ngOnInit(): void {
  }

}
