import { Component, OnInit, Provider, provide } from '@angular/core';
import { ItemList } from './components/item-list.ts';
import { ItemForm } from './components/item-form.ts';


@Component({
  selector: 'my-app',
  template: `
<h1>Colors</h1>
<item-list [items]='colors'></item-list>
<item-form (addItem)='addColor($event)'></item-form>
	`,
	directives: [
		ItemList,
		ItemForm,
	],
})
export class AppComponent {
	colors = ['red','blue','green','yellow'];

	addColor(newColor) {
		this.colors.push(newColor);
	}
}
