import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'item-form',
	templateUrl: 'templates/item-form.html'
})
export class ItemForm {

	newColor: string = '';

	@Output() addItem = new EventEmitter();

	addColor() {
		this.addItem.emit(this.newColor);
		this.newColor = '';
	}

}
