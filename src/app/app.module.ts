import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarsComponent } from './toolbars/toolbars.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule  } from '@angular/material/sidenav';
import { MatListModule  } from '@angular/material/list';
import { MatIconModule  } from '@angular/material/icon';
import { MatMenuModule  } from '@angular/material/menu';

@NgModule({
	declarations: [
		AppComponent,
		ToolbarsComponent,
		HomeComponent,
		PagenotfoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatToolbarModule,
		MatButtonModule ,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatMenuModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
