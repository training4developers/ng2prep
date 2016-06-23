import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colors } from '../services/colors.ts';

@Component({
	template: `<h2>Color List</h2>
	Color Filter: <input [(ngModel)]="colorFilter" type="text">
	<ul *ngFor='let color of sortedColors'>
		<li>{{color | uppercase}}</li>
	</ul>
	<button (click)="addColor()">Add Color</button>`
})
export class ColorList implements OnInit {

	colors: string[];
	colorFilter: string = '';

	constructor(
		private router: Router,
		private colorsSvc: Colors
	) { }

	ngOnInit() {
		this.colors = this.colorsSvc.getAll();
	}

	get sortedColors(): string[] {
		return this.colorsSvc.getAll().filter(color =>
			this.colorFilter === '' || color.startsWith(this.colorFilter)).sort();
	}

	addColor(): void {
		this.router.navigate(['/add']);
	}

}
