import { Component } from '@angular/core';
import { UrlService } from '../URL/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-sub-service',
  templateUrl: './single-sub-service.component.html',
  styleUrl: './single-sub-service.component.css'
})
export class SingleSubServiceComponent {
  parameter: any
  servicesArray: any
  ngOnInit() {
    this.parameter = this._route.snapshot.paramMap.get("id");
    this.getSingleSubServices(this.parameter);
  }
  SingleSubServiceData: any
  constructor(private _ser: UrlService, private _route: ActivatedRoute) { }
  getSingleSubServices(id: any) {
    this._ser.getSingleSubSerById(id).subscribe((data) => {
      this.SingleSubServiceData = data
      console.log("this.subServiceData", this.SingleSubServiceData)
    })
  }
}
