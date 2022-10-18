import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  callback: any = [
    { name: '--- Please Choose ---', value: 'null' },
    { name: 'Health Insurance', value: 'HI' },
    { name: 'Life Insurance', value: 'LI' },
    { name: 'Home Insurance', value: 'HMI' },
    { name: 'Car Insurance', value: 'CI' },
    { name: 'Business Insurance', value: 'BI' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
