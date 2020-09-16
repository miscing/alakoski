import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToolbarsModule } from './toolbars/toolbars.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HomeComponent } from './home/home.component';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
	declarations: [
		// HomeComponent,
		// PagenotfoundComponent,
		AppComponent
	],
	imports: [
		ToolbarsModule,
		BrowserModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
