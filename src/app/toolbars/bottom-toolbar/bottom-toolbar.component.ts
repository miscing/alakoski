import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';

import itemsJson from './items.json';
import { Item } from '../item';

@Component({
	selector: 'app-bottom-toolbar',
	templateUrl: './bottom-toolbar.component.html',
	styleUrls: ['./bottom-toolbar.component.scss']
})

export class BottomToolbarComponent implements OnInit, AfterViewInit {

	items :Item[] = itemsJson;
	hide :Observable<boolean>;
	sController :scrollerController;

	constructor(public scrollDispatcher:ScrollDispatcher) {
		this.sController = new scrollerController;
	}

	ngOnInit(): void {
		// this.isHide = true;
		this.hide = this.sController.shouldHide();
		console.log(this.hide);
		this.hide.subscribe( x => { console.log(x) });
	}

	ngAfterViewInit() : void {
		this.sController.regService(this.scrollDispatcher.scrolled());
		this.hide.subscribe( x => { console.log(x) });
		console.log(this.hide);
	}
}

// TODO: add errors
export class scrollerController {
	scroller: Observable<CdkScrollable | void>;
	bs : BehaviorSubject<boolean>;
	private locked :boolean;

	constructor() {
		this.locked = false;
		this.bs = new BehaviorSubject(false);
	}

	regService(service: Observable<CdkScrollable | void> ) :void {
		if (!this.locked) {
			this.locked = true;
			this.scroller = service;
			this.processOffset();
		}
	}

	shouldHide() : Observable<boolean> {
		return this.bs;
	}

	private processOffset() :void {
		const triggerDiff = 120; // cut-off point to hide toolbar
		let oldOffset = 0;
		let oldValue = false;
		this.scroller.subscribe(
			x => {
				let offset = (x as CdkScrollable).measureScrollOffset("top");
				console.log(offset);
				// if ( offset >= oldOffset && offset > triggerDiff && !oldValue) {
				if ( offset >= oldOffset && offset > triggerDiff) {
					this.bs.next(true);
					oldValue = true;
				// } else if ( offset < oldOffset && oldValue) {
				} else if ( offset < oldOffset) {
					this.bs.next(false);
					oldValue = false;
				}
				oldOffset = offset;
			},
			err => {
				console.error(err);
			}
		);
	}
}

	// (obs) => {
	// 	const triggerDiff = 120; // cut-off point to hide toolbar
	// 	let oldOffset = 0;
	// 	let oldValue = false;
	// 	let i = 0;
	// 	let inter = setInterval( () => {
	// 		console.log(i); i++;
	// 		if (this.scroller != undefined) {
	// 			clearInterval(inter);
	// 			this.scroller.subscribe(
	// 				x => {
	// 					let offset = (x as CdkScrollable).measureScrollOffset("top");
	// 					console.log(offset);
	// 					if ( offset >= oldOffset && offset > triggerDiff && !oldValue) {
	// 						obs.next(true);
	// 						oldValue = true;
	// 					} else if ( offset < oldOffset && oldValue) {
	// 						obs.next(false);
	// 						oldValue = false;
	// 					}
	// 					oldOffset = offset;
	// 			},
	// 				err => {
	// 					console.error(err);
	// 				}
	// 			);
	// 		} else {
	// 			obs.next(false);
	// 		}
	// 	}, 100);
	// 	// Use return to trigger something on unsubscribe
	// 	// }
	// });

