import { Component, DoCheck, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class ToDo {

	static lastToDoId: number = 0;

	id: number;
	task: string;

	constructor(id: number, task?: string) {
		this.id = id;
		this.task = task;
	}
}


type ObservableToDo = Observable<ToDo>;
type ObservableToDos = Observable<ToDo[]>;

@Component({
	selector: 'todo-item',
	template: '<li>{{todo.id}} - {{todo.task}}</li>'
})
export class ToDoItem implements DoCheck {

	//@Input()
	todo: ObservableToDo;

	ngDoCheck() {
		// console.log("change detection todo: " + this.todo.id);
	}
}


@Component({
	selector: 'my-app',
	template: `<ul>
		<todo-item *ngFor="let t of todos" [todo]="t"></todo-item>
	</ul>
	<form>
		<label>
			Task:
			<input [(ngModel)]="newToDo.task" type="text">
		</label>
		<button (click)="addToDo()">Add To Do</button>
	</form>`,
	directives: [ ToDoItem ]
})
export class AppComponent {

	todos: ObservableToDos;
	//  = new Observable<ToDo[]>(
	// [
	// 	new ToDo(++ToDo.lastToDoId, 'task a'),
	// 	new ToDo(++ToDo.lastToDoId, 'task b'),
	// 	new ToDo(++ToDo.lastToDoId, 'task c'),
	// ]);

	newToDo: ToDo = new ToDo(++ToDo.lastToDoId);

	addToDo() {
		// this.todos.push(this.newToDo);
		this.newToDo = new ToDo(++ToDo.lastToDoId);
	}

}
