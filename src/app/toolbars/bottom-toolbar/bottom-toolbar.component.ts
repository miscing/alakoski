import { ChangeDetectorRef, AfterViewInit, Component } from '@angular/core';

import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';

import itemsJson from './items.json';
import { Item } from '../item';

const triggerDiff = 120; // cut-off point to hide toolbar

@Component({
	selector: 'app-bottom-toolbar',
	templateUrl: './bottom-toolbar.component.html',
	styleUrls: ['./bottom-toolbar.component.scss']
})

export class BottomToolbarComponent implements AfterViewInit {
	items :Item[] = itemsJson;
	hide :boolean;

	private oldOffset :number;

	constructor(
		private cdRef: ChangeDetectorRef,
		private scrollDispatcher: ScrollDispatcher
	) {
		this.oldOffset = 0;
	}

	ngAfterViewInit() {
		this.scrollDispatcher.scrolled().subscribe( (cdk: CdkScrollable) => {
				if ( cdk ) {
					let offset = cdk.measureScrollOffset("top");
					if (offset > 50 && offset > this.oldOffset) {
						this.hide = true;
					} else {
						this.hide = false;
					}
					this.oldOffset = offset;
				}
			this.cdRef.detectChanges();
		});
	}
}
