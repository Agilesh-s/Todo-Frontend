import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  name = ""
  mobilenumber = ""
  email = ""
  password = ""
  
  readValues = ()=>{
    let data = {
      "name":this.name,
      "mobilenumber":this.mobilenumber,
      "email":this.email,
      "password":this.password
    }
    console.log(data)
    this.myApi.addData(data).subscribe(
      (response)=>{
        alert("Added Successfully")
      }
    )
    this.name = ""
    this.mobilenumber = ""
    this.email = ""
    this.password = ""
  }

  ngOnInit(): void {
  }

}
