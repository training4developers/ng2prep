import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Car } from '../interfaces/car.ts';

@Component({
	selector: 'car-table',
	template: `<table>
		<tr *ngFor='let car of cars'>
			<td>{{car.make}}</td>
			<td>{{car.model}}</td>
			<td>{{car.year}}</td>
			<td>{{car.color}}</td>
			<td>
				<button (click)="editCarButton(car.id)">Edit</button>
			</td>
		</tr>
	</table>`
})
export class CarTable {

	@Input()
	cars: Car[];

	@Output()
	editCar: EventEmitter<number> = new EventEmitter<number>();

	editCarButton(id: number) {
		console.log('edit car button', id);
		this.editCar.emit(id);
	}

}
