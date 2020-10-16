import { Input, Component } from '@angular/core';

import { Employee } from '../contactinfo';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
	@Input() employees :Employee[];

  constructor() { }

	formatPNumber(phone :string) :string{
		return phone.split("-").join(" ")
	}

}
