import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface (optional) for your data structure
export interface Book {
  title: string;
  author: string;
  isbn: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'get/books'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getData(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
}