import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'main',
	template: 'About'
})
export class About implements OnInit {

	constructor(
		private route: ActivatedRoute
	) {

	}

	ngOnInit() {
		console.log('made it here...');
		this.route.params.subscribe(params => {
			console.log(params);
		});
	}

}
