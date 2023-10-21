import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email:string='';
  password:string='';
  constructor(private auth:AuthService){


  }
  profile= new FormGroup({

    Email: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),



  })
 
  ngOnInit(): void {
      
  }
  login(){
    if(this.email==''){
      alert("Please enter a valid email!")
      return;
    }
    if(this.password==''){
      alert("Please enter a password!")
      return;
    }
    this.auth.login(this.email, this.password);
    this.email='';
    this.password='';

  }
  signInwithGoogle(){
    this.auth.googleSignIn();
    
  }
}
console.log(" login console is running......");


