import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent {
  @Input() thought!: {
    model: string;
    author: string;
    content: string;
  };

  widthThought() {
    if (this.thought.content.length >= 256) {
      return 'thought-l';
    }
    return 'thought-s';
  }
}
