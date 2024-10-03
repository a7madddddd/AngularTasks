import { Component, OnInit } from '@angular/core'; 
import { UrlService } from '../../URL/url.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'] 
})
export class AddServiceComponent implements OnInit { 

  image: any;

  constructor(private _ser: UrlService) { }

  ngOnInit() {
      
  }

  changeImage(event: any) {
    this.image = event.target.files[0];
  }

  addNewService(data: any) {
    const form = new FormData();

    // Complete the form
    for (let key in data) {
      if (data.hasOwnProperty(key)) { 
        form.append(key, data[key]);
      }
    }

    form.append("ServiceImage", this.image);

    this._ser.addService(form).subscribe(() => {
      alert("Service added successfully");
    }, error => {
      console.error("Error adding service", error); 
    });
  }
}
