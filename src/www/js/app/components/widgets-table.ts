import { Component, Provider, provide, OnInit } from '@angular/core';

import { Widgets } from '../services/widgets.ts';
import { BaseLogger } from '../services/base-logger.ts';
import { Logger } from '../services/logger.ts';
import { AppLogger } from '../services/app-logger.ts';
import { Widget } from '../models/widget.ts';

@Component({
	selector: 'widgets-table',
	templateUrl: 'templates/widgets-table.html',
	providers: [
		Widgets,
		new Provider(Logger, { useClass: Logger }),
		provide(Logger, { useClass: AppLogger })
	]
})
export class WidgetsTable implements OnInit {

	widgets: Widget[];

	constructor(private widgetsSvc: Widgets, private loggerSvc: Logger) { }

	ngOnInit() {
		this.getWidgets();
	}

	getWidgets() {
		this.loggerSvc.log('getting widgets');
		this.widgetsSvc.getAll().then(widgets => this.widgets = widgets);
	}

}
