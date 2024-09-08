import { Component } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent {
  listThoughts: {
    model: string;
    author: string;
    content: string;
  }[] = [
    {
      model: 'modelo1',
      author: 'Lohran mendes',
      content: 'Conteúdo para preenchimento e teste do pensamento.',
    },
    {
      model: 'modelo2',
      author: 'Lohran mendes',
      content: 'Conteúdo para preenchimento e teste do pensamento.',
    },
    {
      model: 'modelo2',
      author: 'Maria Eduarda Domingos',
      content:
        'Nascer do sol, brisa no mar, A vida corre sem parar. Flores desabrocham, estrelas a brilhar,Tempo que passa, sem avisar. Cores que dançam, vento a soprar, Rios que fluem, pássaros no ar. Nos olhos, o mundo a se revelar, No coração, o sonho de amar. Entrelaçados, destinos a se cruzar, Histórias que o tempo vai guardar. Em cada passo, um novo olhar, Na alma, um eterno caminhar.',
    },
  ];
}
