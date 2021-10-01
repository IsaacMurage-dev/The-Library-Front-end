import { LibraryService } from './../../library.service';
import { Component, OnInit } from '@angular/core';
import { Library } from 'src/app/library';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  name: string;
  author: string;
  user_id;
  allbooks
  constructor(private libraryService: LibraryService) {
   };
  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks() {
    this.libraryService.getAllBooks().subscribe(data => {
        console.log(data);
        this.allbooks = data;
      }
    )
    }
    addNewBooks() {
      
    }
  }
