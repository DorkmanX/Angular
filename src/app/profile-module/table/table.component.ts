import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

interface Book {
  title: string;
  author: string;
  genre: string;
}


@Component({
  selector: 'book_table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data: Book[] = [];
  selectedDataItem: Book | null = null;
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

  onEditItem(item: Book) {
    this.selectedDataItem = item;
    //TO DO: CHANGE DATA IN TABLE HERE
  }
}
