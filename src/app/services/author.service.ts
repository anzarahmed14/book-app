import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import AuthorModel from '../model/AuthorModel';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiUrl = "http://localhost:5222/api";
  constructor(private http: HttpClient) {

  }

  getAuthors(): Observable<AuthorModel[]> {
    const url = `${this.apiUrl}/author`;

    return this.http.get<AuthorModel[]>(url);
  }

  getAuthor(id: Number): Observable<AuthorModel> {
    const url = `${this.apiUrl}/author/${id}`;

    return this.http.get<AuthorModel>(url);
  }

  createAuthor(author: AuthorModel): Observable<AuthorModel> {
    const url = `${this.apiUrl}/author`;

    return this.http.post<AuthorModel>(url, author);
  }

  updateAuthor(id: Number, author: AuthorModel): Observable<AuthorModel> {
    const url = `${this.apiUrl}/author/${id}`;

    return this.http.put<AuthorModel>(url, author);
  }

  deleteAuthor(id: Number): Observable<AuthorModel> {
    const url = `${this.apiUrl}/author/${id}`;

    return this.http.delete<AuthorModel>(url);
  }



}
