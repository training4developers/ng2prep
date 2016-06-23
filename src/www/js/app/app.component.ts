import { Component, OnInit } from '@angular/core';
import { Colors } from './services/colors.ts';

@Component({
	selector: 'main',
	template: `<h1>List of Colors</h1>
	Color Filter: <input [(ngModel)]="colorFilter" type="text">
	<ul *ngFor='let color of sortedColors'>
		<li>{{color | uppercase}}</li>
	</ul>
	<input [(ngModel)]="newColor" type="text">
	<button (click)="addColor()">Add Color</button>`,
	//styles: ['h1 { color: orange; }']
	styleUrls: ['css/home.css'],
	providers: [Colors]

})
export class AppComponent implements OnInit {

	colors: string[];
	newColor: string = '';
	colorFilter: string = '';

	constructor(private colorsSvc: Colors) { }

	ngOnInit() {
		this.colors = this.colorsSvc.getAll();
	}

	get sortedColors(): string[] {
		return this.colorsSvc.getAll().filter(color =>
			this.colorFilter === '' || color.startsWith(this.colorFilter)).sort();
	}

	addColor(): void {
		this.colorsSvc.add(this.newColor);
		this.newColor = "";
	}
}
