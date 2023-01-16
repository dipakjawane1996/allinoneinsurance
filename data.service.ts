import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 public data1="sample msg from service";
  constructor(private http:HttpClient) { 
    // console.log("this is constructor of service")
  }

  getData(){
    return this.http.get('http://universities.hipolabs.com/search?country=United+States');
  }

 
}
