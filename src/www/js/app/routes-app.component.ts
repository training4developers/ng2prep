import { Component, enableProdMode } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Home } from './components/home.ts';
import { About } from './components/about.ts';

//enableProdMode();

@Component({
	selector: 'main',
	template: `
	<h1>App</h1>
	<a [routerLink]="['/']">Home</a>
	<a [routerLink]="['/about/1']">About</a>
	<button (click)="goAbout()">About</button>
	<router-outlet></router-outlet>`,
	directives: [ ROUTER_DIRECTIVES ]
})
export class AppComponent {

	constructor(private router: Router) {

	}

	goAbout() {
		this.router.navigate(['/about', 1]);
	}


}
