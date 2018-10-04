import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  configUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(public http: HttpClient) {
    console.log('Data service connected....');
   }

   getPosts() {
     return this.http.get(this.configUrl);
  }

}