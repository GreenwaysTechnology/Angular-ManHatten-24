import { Component } from '@angular/core';
import { Todo } from './types/todo.type';
import { TODOS } from './mock-data/todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruits: Array<string> = ['Apple', 'Banana', 'Cherry'];
  todos: Array<Todo> = TODOS
  categories = [
    { name: 'Fruits', items: ['Apple', 'Banana', 'Cherry'] },
    { name: 'Vegetables', items: ['Carrot', 'Peas', 'Spinach'] }
  ];
}
