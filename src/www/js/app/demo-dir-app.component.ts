import { Component, OnInit, Provider, provide } from '@angular/core';
import { ItemList } from './components/item-list.ts';
import { ItemForm } from './components/item-form.ts';
import { DemoDirective } from './directives/demo.ts';

// <template [myDemo]="!showMe">
// <div>You can see me too!</div>
// </template>

@Component({
  selector: 'my-app',
  template: `
<h1>Colors</h1>
<item-list [items]='colors'></item-list>
<item-form (addItem)='addColor($event)'></item-form>
<div *myDemo="colors"></div>
	`,
	directives: [
		ItemList,
		ItemForm,
		DemoDirective
	],
})
export class AppComponent {
	colors = ['red','blue','green','yellow'];

	showMe: boolean = true;

	addColor(newColor) {
		this.colors.push(newColor);
		console.dir(this);
	}
}
