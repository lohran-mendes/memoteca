import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Thought } from 'src/app/interface/thought.interface';
import { ThoughtService } from 'src/app/services/thought/thought.service';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css'],
})
export class EditThoughtComponent implements OnInit {
  service = inject(ThoughtService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  thought: Thought = {
    author: '',
    content: '',
    model: 'model1',
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchForId(id!).subscribe((res) => {
      this.thought = res;
    });
  }

  onCancel() {
    this.router.navigate(['/listar-pensamentos']);
  }
  onEdit() {
    this.service.editThought(this.thought).subscribe(() => {
      this.router.navigate(['/listar-pensamentos']);
    });
  }
}
