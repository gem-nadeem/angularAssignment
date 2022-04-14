import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators, FormArray } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DetailsService } from 'src/app/shared/details.service';
import { UserData } from '../userModelData';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

   profile :any;

  //Creating object for posting data
  userDataModelObj: UserData = new UserData;


  categoryList: any = ['General', 'SC/ST', 'OBC'];
  technology: any = [ //'C', 'C++','Java','Python','JavaScript'
    { id: 1, name: 'C' },
    { id: 1, name: 'C++' },
    { id: 1, name: 'Java' },
    { id: 1, name: 'Python' },
    { id: 1, name: 'JavaScript' },
  ];
   namePattern = '^[a-zA-Z. ]*[a-zA-Z]{2,30}'
   emailPattern = '[a-zA-z0-9._%-]+@[a-z0-9._%-]+\\.[a-z]{2,3}';
   numberPattern = '(0/91)?[6-9][0-9]{9}';
   picPattern = '[^\\s]+(.*?)\\.(jpg|jpeg|png|JPG|JPEG|PNG)$';
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2),Validators.maxLength(30),Validators.pattern(this.namePattern)]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
    mobile: new FormControl('', [Validators.required,Validators.pattern(this.numberPattern)]),
    category: new FormControl('', [Validators.required]),
    technology: new FormArray([], [Validators.required]),
    profilepic: new FormControl('', [Validators.required,Validators.pattern(this.picPattern)]),


  })
  data!: UserData;

  
  displayStyle ='none';
  constructor(private userService: DetailsService) { }

  ngOnInit(): void {

  }
  // Now Subscribing data which is mapped via Services
 /*  saveData(){
     this.userDataModelObj.name = this.userForm.value.name;
     this.userDataModelObj.email = this.userForm.value.email;
     this.userDataModelObj.mobile = this.userForm.value.mobile;
     this.userDataModelObj.gender = this.userForm.value.gender;
     this.userDataModelObj.category = this.userForm.value.category;
     this.userDataModelObj.technology = this.userForm.value.technology;
     this.userDataModelObj.profilepic = this.userForm.value.profilepic;

    /*  this.http.postUser(this.userDataModelObj).subscribe(res =>{
       console.log(res);
       alert("User's Record Addedd Successfull!");
     },
     err =>{
       alert("Error : "+ err);
     }) 
  }  */


 /*  get name() {
    return this.userForm.get("name");

  }
  get email() {
    return this.userForm.get("email");

  }
  get gender() {
    return this.userForm.get("gender");

  }
  get mobile() {
    return this.userForm.get("mobile");

  } */

  onSubmit() {
    this.userDataModelObj.name = this.userForm.value.name;
    this.userDataModelObj.email = this.userForm.value.email;
    this.userDataModelObj.mobile = this.userForm.value.mobile;
    this.userDataModelObj.gender = this.userForm.value.gender;
    this.userDataModelObj.category = this.userForm.value.category;
    this.userDataModelObj.technology = this.userForm.value.technology;
    this.userDataModelObj.profilepic = this.userForm.value.profilepic;
    
    console.log(this.userForm.value);
  }

  onCheckBoxChange(e: any) {
   // console.log("Tech selected");
   const tech : FormArray = this.userForm.get('this.technology') as FormArray;
   if(e.target.checked){
     tech?.push(new FormControl(e.target.value))
   }
   else{
     const index =tech.controls.findIndex(x => x.value == e.target.value);
     tech.removeAt(index);
   }
  }


  imageUpload(e: any) {
  
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {

      this.userForm.patchValue({ profilePicture: reader.result });
  
      this.profile = reader.result;
      console.log(this.profile);
      console.log(reader.result);

    };

    reader.onerror = () => {

      return;

    };

  }
  /* saveData(data: any) {
    console.log(data.value);
  } */

  addDatas(){
    this.userService.addData(this.userDataModelObj);
    console.log(this.userDataModelObj);
    alert('Details Added');
    this.displayStyle='none';
  }
}
