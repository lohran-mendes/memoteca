import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';

const routes: Routes = [
  {
    path: '',
    component: ListThoughtsComponent,
    pathMatch: 'full',
  },
  {
    path: 'listar-pensamentos',
    component: ListThoughtsComponent,
  },
  {
    path: 'criar-pensamentos',
    component: CreateThoughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
