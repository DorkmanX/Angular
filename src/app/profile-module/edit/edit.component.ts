import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Book {
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

  @Input() item: Book | null = null; // Receive selected item from parent
  editedItem: Book = { title: "", author: "",genre: "" }; // Create a copy for editing

  @Output() onItemEdited = new EventEmitter<Book>(); // Event to notify parent

  constructor() { }

  ngOnInit() {
    if (this.item) {
      // Copy item properties for editing
      this.editedItem = Object.assign({}, this.item);
    }
  }

  onSave() {
    this.onItemEdited.emit(this.editedItem);

    this.item = null;
    this.editedItem = { title: "", author: "", genre: "" };
  }
}
