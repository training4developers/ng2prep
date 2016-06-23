import { Component, OnInit, Input } from '@angular/core';
import { UpperCasePipe } from '../pipes/upper-case.ts';


@Component({
	selector: 'item-list',
	template: `<ul><li *ngFor='let item of items'>{{item | upperCase}}</li></ul>`,
	pipes: [UpperCasePipe]
})
export class ItemList implements OnInit {

	ngOnInit() {
		console.log(this.items);
	}

	@Input()
	items: string[];
}
