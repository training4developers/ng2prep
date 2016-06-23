import { Component, DoCheck, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'left-child2',
	template: `Left Child 2 Component: {{message}}`,
	//changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftChild2 implements DoCheck {

	@Input()
	message: string;

	ngDoCheck() {
		console.log('change detection left child 2');
	}
}

@Component({
	selector: 'left-child',
	template: `<div>Left Child Component: {{message}}</div>
	<left-child2 [message]="message"></left-child2>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	directives: [ LeftChild2 ]
})
export class LeftChild implements DoCheck {

	@Input()
	message: string;

	ngDoCheck() {
		console.log('change detection left child');
	}
}

@Component({
	selector: 'right-child',
	template: `Right Child Component: {{message}}`,
 	//changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightChild implements DoCheck {

	@Input()
	message: string;

	ngDoCheck() {
		console.log('change detection right child');
	}
}
