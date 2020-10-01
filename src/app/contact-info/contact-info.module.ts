import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { ContactInfoComponent } from './contact-info.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { EmployeesComponent } from './employees/employees.component';



@NgModule({
	declarations: [ContactInfoComponent, CompanyInfoComponent, EmployeesComponent],
	exports: [ContactInfoComponent],
	imports: [
		MatCardModule,
		MatListModule,
		CommonModule
	]
})
export class ContactInfoModule { }
