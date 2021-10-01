import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/book';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  @ViewChild('f') createBookForm: NgForm;

  title;
  name;
  book_pic;

  constructor(private bookSer: BookService) {}

  ngOnInit(): void {}

  addNewBook() {
    this.title = this.createBookForm.value.title;
    this.name = this.createBookForm.value.name;
    this.book_pic = this.createBookForm.value.book_pic;

    this.bookSer
      .createBook(new Book(this.title, this.name, this.book_pic))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
