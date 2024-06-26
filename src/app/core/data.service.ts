import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getData(): Observable<Book[]> {
    let apiUrl = 'http://localhost:3000/get/books';
    return this.http.get<Book[]>(apiUrl);
  }
}