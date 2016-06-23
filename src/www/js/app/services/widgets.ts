import { Injectable, Optional } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { BaseLogger } from './base-logger.ts';

import 'rxjs/add/operator/toPromise';

import { Widget } from '../models/widget.ts';

@Injectable()
export class Widgets {

	private widgetsUrl = 'http://t4dclass.herokuapp.com/api/widgets';

	constructor(private http: Http, @Optional() private loggerSvc: BaseLogger) { }

	getAll(): Promise<Widget[]> {
		if (this.loggerSvc) {
			this.loggerSvc.log('get all called');
		}
		return this.http.get(this.widgetsUrl)
			.toPromise()
			.then(response => response.json());

	}
}
