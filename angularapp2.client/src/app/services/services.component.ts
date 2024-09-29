import { Component } from '@angular/core';
import { UrlService } from '../URL/url.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {


  ngOnInit() {
    this.getService();
  }

  constructor(private _ser: UrlService) {

  }

  servicesArray: any
  getService() {
    this._ser.getServices().subscribe((data) => {
      this.servicesArray = data;
      console.log("Services", this.servicesArray)
    })
  }

}
