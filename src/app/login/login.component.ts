import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder, private api:ApiService, private router:Router){}

  loginForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })


  login(){
    if(this.loginForm.valid){
      this.api.loginApi(this.loginForm.value).subscribe({
        next:(res:any)=>{
          console.log(res);
          alert('login successfull')
          this.router.navigateByUrl('/')
          
        },
        error:(err:any)=>{
          console.log(err);
          
        }
      })
    }
    else{
      alert('Please fill the form completely')
    }
  }

}
