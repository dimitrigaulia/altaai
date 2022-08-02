import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards } from './card.model';

@Injectable({ providedIn: 'root' })
export class appService {

    constructor(private http: HttpClient) { }

    url = 'http://aai-frontend-interview-mock-data.s3-website-sa-east-1.amazonaws.com/cardlist.json'

    buscarDados() {
     return this.http.get<Cards[]>(this.url)
    }
}
