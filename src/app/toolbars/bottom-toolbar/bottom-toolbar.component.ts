import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';

import itemsJson from './items.json';
import { Item } from '../item';

@Component({
	selector: 'app-bottom-toolbar',
	templateUrl: './bottom-toolbar.component.html',
	styleUrls: ['./bottom-toolbar.component.scss']
})


export class BottomToolbarComponent implements OnInit, AfterViewInit {

	items : Item[] = itemsJson;
	hide : Observable<boolean>;
	// isHide : boolean;
	sController = new scrollerController;

	constructor(private scrollDispatcher:ScrollDispatcher) { }

	ngOnInit(): void {
		// this.isHide = true;
		this.hide = this.sController.shouldHide();
	}

	ngAfterViewInit() : void {
		this.sController.regService(this.scrollDispatcher.scrolled());
	}
}

export class scrollerController {
	scroller: Observable<CdkScrollable | void>;

	regService(service: Observable<CdkScrollable | void> ) {
		this.scroller = service;
	}

	shouldHide() : Observable<boolean> {
		return new Observable((obs) => {
			const triggerDiff = 120; // cut-off point to hide toolbar
			let oldOffset = 0;
			setInterval( () => {
				if (this.scroller != undefined) {
					this.scroller.subscribe(x => {
						if ( x != undefined ) {
							let offset = (x as CdkScrollable).measureScrollOffset("top");
							// console.log(offset);
							if ( offset >= oldOffset && offset > triggerDiff ) {
								obs.next(true);
							} else if ( offset < oldOffset) {
								obs.next(false);
							}
							oldOffset = offset;
							// return
						} else {
							console.error("scroller service returned void");
						}
					},
						err => {
							console.error(err);
						}
					);
				} else {
					obs.next(false);
				}
			}, 100);
			// Use return to trigger something on unsubscribe
			// }
		});
	}

}
