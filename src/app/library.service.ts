import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// export class LibraryService {

//   constructor() { }
// }
export class LibraryService {
  // getAllBooks() {
  //   throw new Error('Method not implemented.');
  // }
  sourceUrl = 'http://127.0.0.1:5000'
  constructor(private http: HttpClient) {
  }
  getBooks(user_id: string) {
    return this.http.get(this.sourceUrl + '/library/' + user_id + '/user');
  }
  getAllBooks() {
    return this.http.get(this.sourceUrl + '/library/');
  }
  // addNewBooks() {
  //   return this.http.post(this.sourceUrl + '/library/');
  // }
}