import { Component } from '@angular/core';
import { appService } from './app.service';
import { Cards, Type } from './card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url =
    'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json';
  items: Cards[] = [];
  Type = Type;

  constructor(private appService: appService) {
    this.appService.buscarDados().subscribe((data) => {
      this.items = data;
    });
  }

  remover(item: Cards) {
    this.items = this.items.filter((x) => x !== item);
  }

  filtrar(filtro:string) {
      this.items = this.items.filter((x) => x.title?.toLowerCase().startsWith(filtro.toLowerCase()));
      }

}
