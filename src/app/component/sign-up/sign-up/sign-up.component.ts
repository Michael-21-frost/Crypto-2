import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  email:string='';
  password:string='';
  passwordTwo:string='';
  username:string='';
  number:string='';
  currency:string='';

  constructor(private auth:AuthService){}

  ngOnInit(): void {
      
  }


  
  signup(){
   
    if(this.username==''){
      alert("Please enter a valid username!")
      return;
    }
    if(this.email==''){
      alert("Please enter a valid email!")
      return;
    }
    if(this.number==''){
      alert("Please enter a valid phone number!")
      return;
    }
    if(this.password==''){
      alert("Please enter a password!")
      return;
    }
    if(this.passwordTwo==''){
      alert("Please confirm your password!")
      return;
    }
    if(this.password != this.passwordTwo){
      alert("MISPATCHED PASSWORDS! \n    Please ensure both passwords are the same")
      return;
    }
  
   this.auth.signup(this.email, this.password);
    this.email='';
    this.password='';
  

  }
}


