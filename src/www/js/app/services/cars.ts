import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Car } from '../interfaces/car.ts';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Cars {

	constructor(private http: Http) { }

	// getAll(): Observable<Car[]> {
	// 	return this.http.get('/api/cars').map(res => res.json());
	// }

	getAll(): Promise<Car[]> {
		return this.http.get('/api/cars').map(res => res.json()).toPromise();
	}

	get(id: number): Promise<Car> {
		return this.http.get('/api/cars/' + encodeURIComponent(id.toString()))
			.toPromise().then(res => {
				console.log('got it');
				return res.json();
			});
	}

}
