import { Component } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent {
  though = {
    id: 1,
    author: 'digite o nome do autor ou fonte',
    content: 'digite um pensamento',
    model: 'model1',
  };
}
