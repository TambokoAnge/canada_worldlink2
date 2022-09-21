import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  login!: boolean;
  user!: boolean;

  ngOnInit(): void {
    this.login= true;
    this.user= false;
  }

  onSubmitForm(): void{
    this.login= false;
    this.user= true;
    this.router.navigateByUrl('/social-media')
  }

}
