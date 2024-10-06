import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UrlService } from '../URL/url.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ngOnInit() {

  }


  constructor(private _ser: UrlService, private _router: Router) {

  }


  //LoginUSer(data: any) {
  //  var form = new FormData();
  //  for (let key in data) {
  //    form.append(key, data[key])
  //  }
  //  this._ser.LoginUSer(form).subscribe(() => {
  //    alert("user Login succsefully")
  //    this._router.navigate(['/services']);
  //  },

  //    (error) => {
  //      alert(error.error)
  //    });
  //}




  LoginUSer(data: any) {

    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    this._ser.LoginUSer(form).subscribe((newData) => {
      this._ser['email'].next(newData.email);
      if (newData.email == 'admin@gmail.com') {
        this._router.navigate(['/Dashboard'])

      } else {
        this._router.navigate(['/services'])

      }
      alert('userLogin successfully')

    })
  }




  oginNewUser(data: any) {

    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    this._ser.LoginUSer(form).subscribe((newData) => {
      this._ser['email'].next(newData.email);
      if (newData.email == 'admin@gmail.com') {
        this._router.navigate(['/Dashboard'])

      } else {
        this._router.navigate(['/services'])

      }
      alert('userLogin successfully')

    })
  }
}




