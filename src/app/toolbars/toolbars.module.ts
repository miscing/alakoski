import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { AppRoutingModule } from '../app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule  } from '@angular/material/list';
import { MatIconModule  } from '@angular/material/icon';
import { MatMenuModule  } from '@angular/material/menu';



@NgModule({
	imports: [
		CommonModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatListModule,
		AppRoutingModule,
		MatMenuModule
	],
	exports: [
		TopToolbarComponent
	],
	declarations: [TopToolbarComponent]
})
export class ToolbarsModule { }
