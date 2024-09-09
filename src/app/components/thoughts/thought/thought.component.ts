import { Component, Input } from '@angular/core';
import { Thought } from 'src/app/interface/thought.interface';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent {
  @Input() thought!: Thought;
  widthThought() {
    if (this.thought.content.length >= 256) {
      return 'thought-l';
    }
    return 'thought-s';
  }
  teste() {
    console.log(this.thought.id);
  }
}
