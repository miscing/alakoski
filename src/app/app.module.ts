import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { ToolbarsModule } from './toolbars/toolbars.module';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';

@NgModule({
	declarations: [
		HomeComponent,
		PagenotfoundComponent,
		AppComponent,
		ContactdetailsComponent
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
