import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  personals: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPersonal();
  }
  getPersonal() {
    this.http.get('http://localhost:5000/api/personals')
    .subscribe(response => {
      this.personals = response;
    }, error => {
      console.log(error);
    });
  }


}
