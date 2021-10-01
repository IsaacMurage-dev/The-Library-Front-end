import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  sourceUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}
  createBook(book) {
    return this.http.post(this.sourceUrl + '/library', book);
  }
}
