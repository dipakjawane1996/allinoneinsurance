import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
cssclass :any="css1"
  constructor(private r:Router) { }

  ngOnInit(): void {
  }

  onGetOTP(frm:any){
    console.log(frm.value)
    this.r.navigateByUrl("")
  }
 
}
