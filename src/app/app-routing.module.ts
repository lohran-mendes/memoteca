import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';

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
  {
    path: 'pensamentos/excluir-pensamento/:id',
    component: DeleteThoughtComponent,
  },
  {
    path: 'pensamentos/editar-pensamento/:id',
    component: EditThoughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
