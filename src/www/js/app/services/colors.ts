import { Injectable } from '@angular/core';

@Injectable()
export class Colors {

	private _colors: string[] = ['red','white','blue'];

	getAll() {
		return this._colors;
	}

	add(newColor) {
		this._colors.push(newColor);
	}

}
