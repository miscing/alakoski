import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { ToolbarsModule } from './toolbars/toolbars.module';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [
		HomeComponent,
		AppComponent
	],
	imports: [
		ScrollingModule,
		ToolbarsModule,
		BrowserModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
