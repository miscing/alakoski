import { Input, Component, OnInit } from '@angular/core';

import { CompanyInfo } from '../contactinfo';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {
	@Input() company :CompanyInfo;

  constructor() { }

  ngOnInit(): void {
  }

	formatPNumber(phone :string) :string{
		return phone.split("-").join(" ")
	}

}
