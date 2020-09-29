import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule  } from '@angular/material/list';
import { MatIconModule  } from '@angular/material/icon';
import { MatMenuModule  } from '@angular/material/menu';
import { MatSidenavModule  } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from '../app-routing.module';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { DashboardComponent } from './dashboard.component';
import { LinksComponent } from './links/links.component';
import { BottomToolbarComponent } from './bottom-toolbar/bottom-toolbar.component';
import { ThemesComponent } from './themes/themes.component';
import { RoutesToolbarComponent } from './routes-toolbar/routes-toolbar.component';



@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatListModule,
		AppRoutingModule,
		MatSidenavModule,
		MatRadioModule,
		MatTabsModule,
		MatMenuModule
	],
	exports: [
		DashboardComponent
	],
	declarations: [
		TopToolbarComponent,
		DashboardComponent,
		LinksComponent,
		BottomToolbarComponent,
		ThemesComponent,
		RoutesToolbarComponent
	]
})
export class ToolbarsModule { }
