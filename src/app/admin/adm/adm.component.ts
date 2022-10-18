import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignProfService } from 'src/app/services/sign-prof.service';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {
showtable:boolean=false;
showform:boolean=false;
hideform:boolean=false;
data:any=[];
index:any;
nm:any;
em:any;
ps:any;
mb:any;
cp:any;
i:any;
idupdt:any;
showupdt:any;
x:any;
delbt:boolean=false;
showrow:boolean=false;
showsubmit: boolean=true;
  constructor(private r:Router, private service:SignProfService) { 
   if(this.data.length >0 ){
    this.showrow = true;
   }
  }

  ngOnInit(): void {
  }
  onGetData(){
    this.showtable = true;
    this.service.receiveAllData().subscribe(
      (res:any)=>{console.log(res)
      this.data = res
      },
      (err:any)=>{console.log(err)}
    )
  }

  onadd(){
    this.showform = true;
    this.showsubmit =true;
    this.showupdt =false;
  }
 
  onSignIn(x:any){
    console.log(x.value)
    // this.data = x.value;
    // this.data.push(x.value)
    // this.hideform =true;
    this.delbt = true;

    this.service.addUserToAPI(x.value).subscribe(
      (res:any)=>{console.log(res)
        this.data = res
        }
    )
  }

  onDelete(x:any){
    this.index = this.data.indexOf(x)
    // console.log(this.index)
    let id = this.data[this.index].id
    console.log(id)
    
    this.service.deleteUserFromAPI(id).subscribe(
      (res:any)=>{console.log(res)
        this.data = res
        }
    )
  }

  onEdit(x:any){
    this.showform = true;

    this.nm = x.name
    this.em = x.email
    this.mb = x.mbno
    this.ps = x.pass
    this.cp = x.cpass
    this.idupdt = x.id
    // console.log(this.nm)
    // this.i = this.data.indexOf(x)
    // console.log(this.i)
    this.showupdt = true
    this.showsubmit = false
    this.showform =true;


    
  }

  onUpdate(frm:any){
    console.log(frm.value)
    // let id = this.data[this.index].id
    // console.log(id)
    this.showform = false;
    console.log(this.idupdt)

this.service.updateUserToAPI(frm.value, this.idupdt).subscribe(
      (res:any)=>{console.log(res)
        this.data = res
        }
    )
  }

  
}
