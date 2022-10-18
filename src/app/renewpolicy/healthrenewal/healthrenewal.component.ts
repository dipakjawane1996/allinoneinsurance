import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-healthrenewal',
  templateUrl: './healthrenewal.component.html',
  styleUrls: ['./healthrenewal.component.css']
})
export class HealthrenewalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
        console.log('okay')
  }
}
