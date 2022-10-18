import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
cssclass:any="css1"
  constructor(private r:Router) { }

  ngOnInit(): void {
  }
  onGetPass(frm:any){
    console.log(frm.value)
    this.r.navigateByUrl("")
  }
}
