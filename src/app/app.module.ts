import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ToolbarsModule } from './toolbars/toolbars.module';
import { ContactInfoModule } from './contact-info/contact-info.module';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
	declarations: [
		HomeComponent,
		PagenotfoundComponent,
		AppComponent
	],
	imports: [
		ContactInfoModule,
		ToolbarsModule,
		BrowserModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
