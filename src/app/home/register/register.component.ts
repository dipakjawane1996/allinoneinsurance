import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SignProfService } from 'src/app/services/sign-prof.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, DoCheck {
data:any
newpass:any
newcpass:any
flag:boolean=false;
  constructor(private r:Router, private signup:SignProfService) { }

  ngOnInit(): void {
  }

  onSignIn(frm:any){
    // console.log(frm.value)
    this.r.navigateByUrl("")
    this.data = frm.value
    this.signup.setmsg(this.data)
    // this.r.navigateByUrl('profile')
    this.signup.addUserToAPI(frm.value).subscribe(
      (r) => { console.log(r) },
      (e) => { console.log(e) }
    )
  }

  ngDoCheck() {
    // console.log('onchange');
    if (this.newpass != this.newcpass) {
      this.flag = false;
    } else {
      this.flag = true;
    }
  }

  
}
