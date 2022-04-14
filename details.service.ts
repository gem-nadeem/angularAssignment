import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserData } from '../users/userModelData';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  data : UserData[]= [];
  addData(details : UserData){
    this.data.push(details);
  }
  sendData(){
    return this.data;
  }

 

  /* getAllUsers(): any{
    return JSON.parse(JSON.stringify())
  } */

  //Use Get , Post , Put , Delete Method

  // Create User Details using post Method
  /* postUser(data : any){
    return this.http.post<any>("http://localhost:3000/users",data).pipe(map((res : any)=>{
      return res;
    }))
  } */

  // Get User Data using get method
 /*  getUser(data : any){
    return this.http.get<any>("http://localhost:3000/users").pipe(map((res : any)=>{
      return res;
    }))
  } */

  // Update User Data using put method
 /*   updateUser(data : any,id: number){
    return this.http.put<any>("http://localhost:3000/users/"+id,data).pipe(map((res : any)=>{
      return res;
    }))
  } */
 
  // Delete User Data using delete method
  /*  deleteUser(id : number){
    return this.http.delete<any>("http://localhost:3000/users/"+id).pipe(map((res : any)=>{
      return res;
    }))
  }  */
   
}
