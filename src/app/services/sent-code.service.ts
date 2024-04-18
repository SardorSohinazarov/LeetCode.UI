import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Code } from '../models/code';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SentCodeService {

  baseUrl: string = "https://localhost:7106/api/Compiler";

  constructor(private http : HttpClient) {}

  code?:Code;

  create(data: Code) { 
    return this.http.post<string>(this.baseUrl, data);
  }
}
