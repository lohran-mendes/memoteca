import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Thought } from 'src/app/interface/thought.interface';
import { ThoughtService } from 'src/app/services/thought/thought.service';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css'],
})
export class DeleteThoughtComponent implements OnInit {
  thought: Thought = {
    id: '',
    content: '',
    author: '',
    model: 'model1',
  };

  service = inject(ThoughtService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchForId(id!).subscribe((thought) => {
      console.log(thought);
      this.thought = thought;
    });
  }

  onDelete() {
    if (this.thought.id) {
      this.service.deleteThought(this.thought.id).subscribe(() => {
        this.router.navigate(['/listar-pensamentos']);
      });
    }
  }
  onCancel() {
    this.router.navigate(['/listar-pensamentos']);
  }
}
