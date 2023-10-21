import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  currentUser: any;

  constructor(private fireauth:AngularFireAuth, private router:Router) { }
  //email verification
sendEmailForVarification(user:any){
  user.sendEmailVarification().then ((res:any)=>{
    this.router.navigate(['/verify']);
}, (err:any)=>{
  alert("Something Went wrong. NOT ABLE TO SEND MAIL TO YOUR EMAIL")
})
}
  //login method
login(email:string, password:string,  ){
  this.fireauth.signInWithEmailAndPassword(email,password).then( res=>{
    localStorage.setItem('token', 'true');

    
    
   
      this.router.navigate(['dashboard'])
  
  },
  err =>{
    alert(err.message);
    this.router.navigate(['/login']);
  })

}
//sign up method
async signup(email:string, password:string){
     // Set SESSION persistence
     await this.fireauth.setPersistence('session');
    
  this.fireauth.createUserWithEmailAndPassword(email, password).then( res=>{
    this.router.navigate(['/login']);
    this.sendEmailForVarification(res.user);
  }, 
  err=>{
    alert(err.message);
    this.router.navigate(['/register']);
  }
  
  )
}


//sign in with google
googleSignIn(){
  return this.fireauth.signInWithPopup( new GoogleAuthProvider).then( res=>{
    this.router.navigate(['/dashboard']);
    localStorage.setItem('token', JSON.stringify(res.user?.uid))

  },
  err=>{
    alert(err.messages);
  }
  )
}
//forgot passowrd
forgotPassword(email: string){
  this.fireauth.sendPasswordResetEmail(email).then( ()=>{
    this.router.navigate(['/verify']);

  }, err=>{
    alert("Somethig went wrong");
  }

  ) 

}
}
