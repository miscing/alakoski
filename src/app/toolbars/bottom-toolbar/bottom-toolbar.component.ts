import { ChangeDetectorRef, AfterViewInit, Component } from '@angular/core';

import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';

import itemsJson from './items.json';
import { Item } from '../item';

const triggerDiff = 60; // cut-off point to hide toolbar

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
					console.log(offset);
					if ( Math.abs(this.oldOffset - offset) < 15 ) {
						console.log("triggered");
						if (offset > triggerDiff && offset > this.oldOffset) {
							if (!this.hide) {
								this.hide = true;
								this.cdRef.detectChanges();
							}
						} else {
							if (this.hide) {
								this.hide = false;
								this.cdRef.detectChanges();
							}
						}
					}
					this.oldOffset = offset;
				}
		});
	}
}
