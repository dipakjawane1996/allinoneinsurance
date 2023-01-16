import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-servicedata',
  templateUrl: './servicedata.component.html',
  styleUrls: ['./servicedata.component.css']
})
export class ServicedataComponent implements OnInit {
   postData:any;
   data:any;
   newData:any;
  constructor(private mySer:DataService) { 
    // console.log(this.mySer.data1)
    this.dataFromService();
  }

  ngOnInit(): void {
  }

  dataFromService(){
    this.mySer.getData().subscribe(
      // (err:any)=>{
      //   console.log(err);
      // },
      (data)=>{
        console.log(data);
        this.postData=data;
        this.data=data;
        this.newData= this.data.slice(0,15)
        console.log(this.newData)
      }
    );
  }

}
