import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  confirmLogout() {
    if(confirm(`Are you sure you want to Log Out ?`))
      this.logout()
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }
}
