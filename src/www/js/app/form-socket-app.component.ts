import { Component, OnInit, DoCheck, Injectable } from '@angular/core';
import { RuntimeCompiler } from '@angular/compiler';

declare var io: any;

interface LogEntry {
	message: string;
}

interface Logging {
	log(entry: LogEntry): void;
}

@Injectable()
export class SocketLogger implements Logging {

	private socket;

	constructor() {
		this.socket = io('http://localhost:3000');
	}

	log(entry: LogEntry) {
		this.socket.emit('log', entry);
	}
}



export enum Status {
	Active,
	Inactive,
	Discharged
}

export class Person {
	public firstName: string;
	public lastName: string;
	public status: string;
}

// pristine: {{personFirstNameNgModel.pristine}}<br>
// dirty: {{personFirstNameNgModel.dirty}}<br>
// valid: {{personFirstNameNgModel.valid}}<br>
// touched: {{personFirstNameNgModel.touched}}<br>
// untouched: {{personFirstNameNgModel.untouched}}<br>
// class name: {{personFirstName.className}}<br>


@Component({
	selector: 'main',
	template: `<form>
		<div><label>
			First Name:
			<input type="text" required [(ngModel)]="person.firstName" name="personFirstName" #personFirstName #personFirstNameNgModel="ngModel">
		</label></div>
		<div><label>
			Last Name:
			<input type="text" required [(ngModel)]="person.lastName" name="personLastName">
		</label></div>
		<div><label>
			Status:
			<select name="personStatus" [(ngModel)]="person.status">
				<option *ngFor="let statusValue of statusValues" [value]="statusValue">{{statusValue}}</option>
			</select>
		</label></div>
		<div><label>
			US Citizen:
			<input type="checkbox" [(ngModel)]="person.citizen" name="personCitizen">
		</label></div>
		<div><fieldset>
			<legend>Location:</legend>
			<label>
				<input type="radio" [(ngModel)]="person.location" name="personLocation" value="Virginia"> Virginia
			</label>
			<label>
				<input type="radio" [(ngModel)]="person.location" name="personLocation" value="Texas"> Texas
			</label>
		</fieldset></div>
		<div><label>
			Comments:
			<textarea [(ngModel)]="person.comments" name="personComments"></textarea>
		</label></div>
		<button type="button" (click)="sendPerson()">Send</button>
	</form>`,
	styles: [
		'label > input, label > select, label > textarea { font-weight:normal; }'
	],
	providers: [ RuntimeCompiler, SocketLogger ]
})
export class AppComponent implements OnInit, DoCheck {

	person: Person = new Person();

	statusValues: string[] = ['active','inactive','discharged'];

	sendPerson() {
		console.dir(this.person);
	}

	constructor(
		private rc: RuntimeCompiler,
		private socketLogger: SocketLogger
	) { }

	ngOnInit() {

		this.rc.resolveComponent(AppComponent).then(function(){
			console.log(arguments);
		})

		this.socketLogger.log({ message: 'form loaded' });
	}

	ngDoCheck() {
	}
}
