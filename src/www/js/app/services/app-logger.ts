import { Injectable } from '@angular/core';
import { BaseLogger } from './base-logger.ts';

@Injectable()
export class AppLogger implements BaseLogger {

	log(msg) {
		console.log('App> ' + msg);
	}

}
