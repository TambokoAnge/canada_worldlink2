import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from 'src/app/complex-form/components/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginCtrl$!: Observable<boolean>;
  userCtrl$!: Observable<boolean>;

  constructor() { }

  login!: boolean;
  user!: boolean;

  ngOnInit(): void {
    this.login= true;
    this.user= true;
  }

  // private initUser(){
  //   this.login= false;
  //   this.user= true;
  // }

}
