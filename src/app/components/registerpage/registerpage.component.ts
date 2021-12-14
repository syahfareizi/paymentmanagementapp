import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthManagementService } from 'src/app/services/auth-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

  constructor(
    private authMangementService:AuthManagementService,
    private router:Router) { }

  ngOnInit(): void {
  }

  addUserForm = new FormGroup({
    Username: new FormControl('',[Validators.required,Validators.minLength(5)]),
    Email: new FormControl('',[Validators.required,Validators.minLength(5)]),
    Password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

  get Username(){
    return this.addUserForm.get('Username')
  }
  get Email(){
    return this.addUserForm.get('Email')
  }
  get Password(){
    return this.addUserForm.get('Password')
  }

  addUser(){
    this.authMangementService.addUser(this.addUserForm.value).subscribe((res)=>{
      if(res.result){
      }
      this.addUserForm.reset()
      this.router.navigate(['/login'])
    })
  }
}
