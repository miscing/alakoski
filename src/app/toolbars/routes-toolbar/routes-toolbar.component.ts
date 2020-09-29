import { Component, OnInit } from '@angular/core';

import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'app-routes-toolbar',
  templateUrl: './routes-toolbar.component.html',
  styleUrls: ['./routes-toolbar.component.scss']
})
export class RoutesToolbarComponent implements OnInit {
	paths :string[];

  constructor(private appRoutingModule :AppRoutingModule) { }

  ngOnInit(): void {
		this.paths = this.appRoutingModule.routes();
  }

	capitalize(input: string): string {
		return input.charAt(0).toUpperCase() + input.slice(1);
	}

}
