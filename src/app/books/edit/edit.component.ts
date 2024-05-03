import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
}

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent{

  @Input() item: Book | null = null;
  editedItem: Book = { id: 0,title: "", author: "",genre: "" };

  @Output() onItemEdited = new EventEmitter<Book>();
  @Output() hideEditing = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    if (this.item) {
      this.editedItem = Object.assign({}, this.item);
    }
  }

  onSave() {
    this.onItemEdited.emit(this.editedItem);

    this.item = null;
    this.editedItem = { id: 0, title: "", author: "", genre: "" };
    this.hideEditing.emit(false);
  }
}
