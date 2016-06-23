import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { KeyValueDiffer, KeyValueDiffers } from '@angular/core';

@Directive({
	selector: '[myUnless]'
})
export class UnlessDirective {

	constructor(
		private templateRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef,
		private differs: KeyValueDiffers
	) { }

	@Input() set myUnless(condition: boolean) {
		if (!condition) {
			this.viewContainer.createEmbeddedView(this.templateRef);
		} else {
			this.viewContainer.clear();
		}

		console.dir(this.differs.find(condition));
	}


}
