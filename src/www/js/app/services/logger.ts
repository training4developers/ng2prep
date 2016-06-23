import { Injectable } from '@angular/core';
import { BaseLogger } from './base-logger.ts';

@Injectable()
export class Logger implements BaseLogger {

	log(msg) {
		console.log(msg);
	}

}
