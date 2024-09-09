import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Thought } from 'src/app/interface/thought.interface';
import { ThoughtService } from 'src/app/services/thought/thought.service';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent {
  router = inject(Router);
  service = inject(ThoughtService);
  though: Thought = {
    author: '',
    content: '',
    model: 'model1',
  };

  addThought(though: Thought) {
    this.service.setThoughts(though).subscribe(() => {
      this.router.navigate(['/listar-pensamentos']);
    });
  }
  onCancel() {
    this.router.navigate(['/listar-pensamentos']);
  }
}
