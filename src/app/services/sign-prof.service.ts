import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignProfService {
  private message = new BehaviorSubject('')
  data = this.message.asObservable();

  constructor(private http:HttpClient) { }

  setmsg(msg:any){
    this.message.next(msg)
  }

  getmsg(){
    return this.data
  }

  receiveAllData() {
    return this.http.get('http://localhost:8081/allUsers');
  }

  addUserToAPI(dt: any) {
    return this.http.post('http://localhost:8081/addUser', dt);
  }

  updateUserToAPI(dt: any, id:any) {
    return this.http.put('http://localhost:8081/updateUser/'+id, dt);
  }

  deleteUserFromAPI(id: any) {
    return this.http.delete('http://localhost:8081/deleteUser/' + id);
  }
}
