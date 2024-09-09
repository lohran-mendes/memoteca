import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thought } from 'src/app/interface/thought.interface';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/thoughts';
  private http = inject(HttpClient);

  getThoughts(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API);
  }
  setThoughts(thoughtAdd: Thought): Observable<any> {
    return this.http.post(this.API, thoughtAdd);
  }
  deleteThought(id: string): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Thought>(url);
  }
  searchForId(id: string): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.get<Thought>(url);
  }
}
