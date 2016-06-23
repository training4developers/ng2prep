import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ChangeDetectorRef, IterableDiffer, IterableDiffers } from '@angular/core';
import { DoCheck } from '@angular/core';

@Directive({
	selector: '[myDemo]'
})
export class DemoDirective implements DoCheck {

	private items: string[];
	private differ: IterableDiffer;

	constructor(
		private changeDetector: ChangeDetectorRef,
		private templateRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef,
		private differs: IterableDiffers
	) { }

	// called once on initial load
	@Input() set myDemo(items: string[]) {

		console.log("set myDemo called");

		this.items = items;
		items.forEach(item => {
			this.viewContainer.createEmbeddedView(this.templateRef);
		});
		this.differ = this.differs.find(items).create(this.changeDetector);
	}

	ngDoCheck() {

		console.log('do check called');

		if (this.differ) {
			const changes = this.differ.diff(this.items);
			console.dir(changes);
		}

	}

}
