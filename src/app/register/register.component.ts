import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {RouterModule} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form = {
  firstName: '',
  lastName:'',
  email:''
}
  constructor(private _userService: UserService, private router: RouterModule ) { }

  ngOnInit() {
  }
  signUp(){
    this._userService.registerUser(this.form).subscribe( (res:any)=> {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      this._userService.firstName = res.firstName;
      this._userService.isLoggedIn = true;
      this.goToDash();
    })
  }

  goToDash(){
    this.router.navigate(['/home'])
  }
}
