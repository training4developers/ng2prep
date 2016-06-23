import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarTable } from './car-table.ts';
import { Car } from '../interfaces/car.ts';
import { Cars } from '../services/cars.ts';

@Component({
	template: `<car-table [cars]="cars" (editCar)="editCar($event)"></car-table>`,
	directives: [ CarTable ],
	providers: [ Cars ]
})
export class CarTableView implements OnInit {

	cars: Car[];

	constructor(
		private router: Router,
		private carsSvc: Cars
	) { }

	ngOnInit() {
		//this.carsSvc.getAll().subscribe(cars => this.cars = cars);
		this.carsSvc.getAll().then(cars => this.cars = cars);
	}

	editCar(id) {
		console.log('edit car', id);
		this.router.navigate(['/edit', id]);
	}

}
