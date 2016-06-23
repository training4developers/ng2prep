import { Component, OnInit, Injectable, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Car } from './interfaces/car.ts';
import { CarTable } from './components/car-table.ts';
import { Cars } from './services/cars.ts';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'main',
	template: `<h1>Car Manager</h1>
	<router-outlet></router-outlet>`,
	directives: [ ROUTER_DIRECTIVES ]
})
export class AppComponent {

}
