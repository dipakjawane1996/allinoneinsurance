import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignProfService } from 'src/app/services/sign-prof.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
data:any;
showEditform:boolean=false
  constructor(private profile:SignProfService) { 
  this.profile.getmsg().subscribe(
    (r:any)=>{
      // console.log(r)
      this.data = r
    }
  )
   
  }

  ngOnInit(): void {
 
  }
  onEdit(){
    this.showEditform = true;
  }
  onSignIn(frm:any){
    console.log(frm.value)
    this.data = frm.value;
    this.showEditform = false; 
  }

}
