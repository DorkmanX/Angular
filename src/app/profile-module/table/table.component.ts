import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

interface Book {
  title: string;
  author: string;
  isbn: number;
}


@Component({
  selector: 'book_table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data: Book[] = [];
  isLoading = false; // Flag for loading state

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.isLoading = true;
    this.dataService.getData()
      .subscribe(data => {
        this.data = data;
        this.isLoading = false;
      });
  }
}
