import { Component } from '@angular/core';
import { UrlService } from '../../URL/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-service-adimn',
  templateUrl: './update-service-adimn.component.html',
  styleUrl: './update-service-adimn.component.css'
})
export class UpdateServiceAdimnComponent {


  param:any
  ngOnInit() {
    this.param = this._active.snapshot.paramMap.get('id')
  }
  imageFile:any
  changeImage(event: any) {

      this.imageFile = event.target.files[0]
  }

  constructor(private _ser: UrlService, private _active: ActivatedRoute) { }


  updateServices(data : any) {

    var form = new FormData();

    for (let key in data) {

        form.append(key, data[key])
    }

    form.append("serviceImage", this.imageFile)
    debugger
    this._ser.UpdateService(this.param, form).subscribe(

      (data) => {
        alert("Service Updated Successfully");
      },
      
      (error) => {
        console.error("Error updating service:", error);
        alert("Failed to update service. Please try again.");
      }
    )
  }
}
