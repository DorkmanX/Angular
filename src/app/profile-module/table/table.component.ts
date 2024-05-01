import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

interface Book {
  id: number;
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
  editingVisible = false;

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
    this.editingVisible = true;
    if(item){
      let index = this.data.findIndex(book => book.id === item.id);
      if(this.data[index].title !== item.title){
        this.data[index].title = item.title;
      }
      if(this.data[index].author !== item.author){
        this.data[index].author = item.author;
      }
      if(this.data[index].genre !== item.genre){
        this.data[index].genre = item.genre;
      }
    }
  }

  hideEditing(visible: boolean)
  {
    this.editingVisible = visible;
  }
}
