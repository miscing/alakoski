import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
	{ path: "",  redirectTo: '', pathMatch: 'full'},
	{ path: "etusivu", component: HomeComponent , data: {animation: 'HomePage'} },
	{ path: "yhteistiedot", component: ContactdetailsComponent, data: {animation: 'AboutPage'} },
	{ path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

	paths :string[] = [];

	constructor() {
		for (let i=0;i<routes.length;i++) {
			if (routes[i].path == "**" || routes[i].path == "") {
				continue;
			}
			this.paths.push(routes[i].path)
		}
	}

	routes() :string[] {
		return this.paths;
	}
}
