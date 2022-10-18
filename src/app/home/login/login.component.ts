import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
cssclass:any="css1";

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(frm:any){
    console.log(frm.value)
    this.route.navigateByUrl('otp')
   
  }

  onGetPassword(x:any){
    this.route.navigateByUrl('password')
  }

  onSignUp(x:any){
    this.route.navigateByUrl('register')
  }

}
