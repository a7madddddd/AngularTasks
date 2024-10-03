import { Component } from '@angular/core';
import { UrlService } from '../../URL/url.service';

@Component({
  selector: 'app-get-services-admin',
  templateUrl: './get-services-admin.component.html',
  styleUrl: './get-services-admin.component.css'
})
export class GetServicesAdminComponent {


  ngOnInit() {
    this.getAllServicesAdmin();
  }


  constructor(private _ser: UrlService) {

  }






  servicesArray: any
  getAllServicesAdmin() {
    this._ser.getServices().subscribe((data) => {
      this.servicesArray = data;
      console.log("Services", this.servicesArray)
    })
  }
}
