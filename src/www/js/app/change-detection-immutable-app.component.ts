import { Component, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { LeftChild, RightChild } from './components/child.ts';

@Component({
  selector: 'my-app',
  template: `
	<div>
		Left Message: {{leftMessage}}<br>
		<input [(ngModel)]="leftMessage" type="text">
		<left-child [message]="leftMessage"></left-child>
	</div>
	<div>
		Right Message: {{rightMessage}}<br>
		<input [(ngModel)]="rightMessage" type="text">
		<right-child [message]="rightMessage"></right-child>
	</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	directives: [ LeftChild, RightChild ]
})
export class AppComponent implements DoCheck {

	leftMessage: string = "Left";
	rightMessage: string = "Right";

	constructor() { }

	ngDoCheck() {
		console.log('change checking app component');
	}

}
