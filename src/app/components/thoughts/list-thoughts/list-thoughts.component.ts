import { Component, inject, OnInit } from '@angular/core';
import { Thought } from '../../../interface/thought.interface';
import { ThoughtService } from 'src/app/services/thought/thought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent implements OnInit {
  service = inject(ThoughtService);
  listThoughts: Thought[] = [];

  ngOnInit() {
    this.service.getThoughts().subscribe((thoughtsReturned) => {
      this.listThoughts = thoughtsReturned;
    });
  }
}
