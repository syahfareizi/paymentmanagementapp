import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormpaymentComponent } from './components/formpayment/formpayment.component';
import { TabelpaymentComponent } from './components/tabelpayment/tabelpayment.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './interceptors';
import { UpdatepageComponent } from './components/updatepage/updatepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FormpaymentComponent,
    TabelpaymentComponent,
    LoginpageComponent,
    RegisterpageComponent,
    UpdatepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
