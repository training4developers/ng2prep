import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Colors } from '../services/colors.ts';

@Component({
	template: `<h2>New Color</h2>
	<input [(ngModel)]="newColor" type="text">
	<button (click)="addColor()">Add Color</button>
	<button (click)="returnToList()">Cancel</button>`
})
export class ColorForm {

	newColor: string = '';

	constructor(
		private router: Router,
		private colorsSvc: Colors
	) { }

	addColor() {
		this.colorsSvc.add(this.newColor);
		this.router.navigate(['/']);
	}

	returnToList() {
		this.router.navigate(['/']);
	}

}
