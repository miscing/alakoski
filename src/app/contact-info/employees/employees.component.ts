import { Input, Component, OnInit } from '@angular/core';

import { Employee } from '../contactinfo';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
	@Input() employees :Employee[];

  constructor() { }

  ngOnInit(): void {
  }

}
