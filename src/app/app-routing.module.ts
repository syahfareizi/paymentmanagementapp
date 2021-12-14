import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { UpdatepageComponent } from './components/updatepage/updatepage.component';
import { AuthguardGuard } from './services/authguard.guard';

const routes: Routes = [
  {path:'',redirectTo:'/homepage', pathMatch:'full'},
  {path:'register', component:RegisterpageComponent},
  {path:'login', component:LoginpageComponent},
  {path:'update/:id', component:UpdatepageComponent},
  {path:'homepage', component:HomepageComponent , canActivate:[AuthguardGuard]}

  // {path:'homepage',component:GetemployeeComponent},
  // {path:'updateemployee/:id',component:UpdateemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
