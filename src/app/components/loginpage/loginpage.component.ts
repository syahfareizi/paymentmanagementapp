import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthManagementService } from 'src/app/services/auth-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(
    private authMagementService:AuthManagementService,
    private route:Router
  ) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    Email: new FormControl('',[Validators.required,Validators.minLength(5)]),
    Password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

  get Email(){
    return this.loginForm.get('Email')
  }
  get Password(){
    return this.loginForm.get('Password')
  }

  loginUser(){
    this.authMagementService.loginUser(this.loginForm.value)
    this.loginForm.reset()
    // this.route.navigate(['/homepage'])
  }
}

// .subscribe((res)=>{
//   if(res.result){
//   }
//   this.loginForm.reset()
//   this.route.navigate(['/homepage'])
// })
