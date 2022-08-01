import { Component } from '@angular/core';
import { appService } from './app.service';
import { Cards } from './card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  url = 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json'
  items: Cards[] = [];

  constructor(private appService: appService) {

    this.appService.buscarDados().subscribe(data => {
      console.log(data);
      this.items = data;
    });

  }
}
