import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newclaim',
  templateUrl: './newclaim.component.html',
  styleUrls: ['./newclaim.component.css']
})
export class NewclaimComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  tologin(){
    this.route.navigateByUrl('login')
  }
}
