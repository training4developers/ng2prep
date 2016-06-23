import { Component } from '@angular/core';
import { CarForm } from './car-form.ts';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../interfaces/car.ts';
import { Cars } from '../services/cars.ts';

@Component({
	template: `<car-form [car]="car"></car-form>`,
	directives: [ CarForm ],
	providers: [ Cars ]
})
export class CarFormView {

	car: Car = { make: '', model: '', year: undefined, color: '' };

	constructor(
		private route: ActivatedRoute,
		private carsSvc: Cars
	) { }

	ngOnInit() {
		//this.carsSvc.getAll().subscribe(cars => this.cars = cars);

		this.route.params.subscribe(params => {
			this.carsSvc.get(parseInt(params['id'])).then(car => {
				console.dir(car);
				this.car = car
			});
		});

	}


}
