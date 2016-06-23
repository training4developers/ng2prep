import { bootstrap, CACHED_TEMPLATE_PROVIDER } from '@angular/platform-browser-dynamic';


import { AppComponent } from './app.component.ts';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
//import { HTTP_PROVIDERS } from '@angular/http';
//import { APP_ROUTER_PROVIDERS } from './routes.ts';
//import { Colors } from './services/colors.ts';

//import { Widgets } from './services/widgets.ts';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/do';

// bootstrap(AppComponent, [HTTP_PROVIDERS, Widgets]);
//bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, Colors]);
bootstrap(AppComponent, [ disableDeprecatedForms(), provideForms() ]);

// enum Direction {
// 	North,
// 	South,
// 	East,
// 	West
// }
//
// console.log(Direction.North);
// console.log(Direction[Direction.North]);
//
// console.dir(Direction);

// var o = {
// 	firstName: 'Bob',
// 	lastName: 'Greene'
// };
//
// var { firstName, lastName } = o;
//
// console.log(firstName);
//
// interface IPerson {
// 	firstName: string;
// 	lastName: string;
// }
//
// function myDecorator(obj) {
// 	console.log('myDecorator');
// 	console.dir(obj);
// 	obj.age = 33;
//
// }
//
// @myDecorator
// class Person implements IPerson {
//
// 	constructor(public firstName: string, public lastName: string) { }
// }
//
// var p: IPerson = new Person('Bob','Smith');
//
// console.dir(Person);
// console.dir(p);
