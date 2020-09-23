import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule  } from '@angular/material/list';
import { MatIconModule  } from '@angular/material/icon';
import { MatMenuModule  } from '@angular/material/menu';
import { MatSidenavModule  } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';

import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { DashboardComponent } from './dashboard.component';
import { LinksComponent } from './links/links.component';
import { BottomToolbarComponent } from './bottom-toolbar/bottom-toolbar.component';
import { ThemesComponent } from './themes/themes.component';



@NgModule({
	imports: [
		CommonModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatListModule,
		AppRoutingModule,
		MatSidenavModule,
		MatRadioModule,
		MatMenuModule
	],
	exports: [
		DashboardComponent
	],
	declarations: [TopToolbarComponent, DashboardComponent, LinksComponent, BottomToolbarComponent, ThemesComponent]
})
export class ToolbarsModule { }
