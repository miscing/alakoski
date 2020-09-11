import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title: string = "alakoski";
	isHandset$ : Observable<boolean>;

	constructor(private breakpointObserver: BreakpointObserver) {}
	ngOnInit() {
		this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
			.pipe(
				map(result  => result.matches )
			);
	}
}
