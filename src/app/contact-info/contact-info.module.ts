import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { ContactInfoComponent } from './contact-info.component';



@NgModule({
	declarations: [ContactInfoComponent],
	exports: [ContactInfoComponent],
	imports: [
		MatCardModule,
		CommonModule
	]
})
export class ContactInfoModule { }
