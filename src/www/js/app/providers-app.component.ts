import { Component, DoCheck, ChangeDetectorRef,
	KeyValueDiffers, KeyValueDiffer, KeyValueChangeRecord,
	OnChanges, SimpleChange } from '@angular/core';

import { Widgets } from './services/widgets.ts';

@Component({
  selector: 'my-app',
  template: `
	<div>{{message}}</div>
	<input [(ngModel)]="message" type="text">
	`,
	// providers: [
	// 	Widgets
	// ]
})
export class AppComponent implements DoCheck, OnChanges {

	message: string = "Hello World!";
	differ: KeyValueDiffer;

	constructor(
		//private changeDetector: ChangeDetectorRef,
		private keyValueDiffers: KeyValueDiffers,
		private widgetsSvc: Widgets
	) {
		//this.differ = this.keyValueDiffers.find({ message: this.message }).create(this.changeDetector);
		this.differ = this.keyValueDiffers.find({}).create(null);
	}

	// simple property changes
	ngOnChanges(changes: { [propName: string] : SimpleChange }) {
		console.dir(this.widgetsSvc);
		console.dir(changes);
	}

	ngDoCheck() {
		console.log('changes');

		if (this.differ) {
			const changes = this.differ.diff({ message: this.message });

			if(changes) {
				console.log('changes detected');
				changes.forEachChangedItem(r => console.log('changed ', r.currentValue, r.previousValue));
				changes.forEachAddedItem(r => console.log('added ' + r.currentValue));
				changes.forEachRemovedItem(r => console.log('removed ' + r.currentValue));
			} else {
				console.log('nothing changed');
			}
		}
	}

}
