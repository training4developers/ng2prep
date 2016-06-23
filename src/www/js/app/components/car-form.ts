import { Component, Input } from '@angular/core';
import { Car } from '../interfaces/car.ts';

@Component({
	selector: 'car-form',
	template: `<form>
		<div><label>
			Make: <input type="text" [(ngModel)]="car.make" name="carMake">
		</label></div>
	</form>`
})
export class CarForm {

	@Input()
	car: Car;

}
