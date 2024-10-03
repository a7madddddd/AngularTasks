import { Component, OnInit } from '@angular/core'; // Import OnInit
import { UrlService } from '../../URL/url.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class AddServiceComponent implements OnInit { // Implement OnInit

  image: any;

  constructor(private _ser: UrlService) { }

  ngOnInit() {
    // Initialization logic if needed
  }

  changeImage(event: any) {
    this.image = event.target.files[0];
  }

  addNewService(data: any) {
    const form = new FormData(); // Correctly instantiate FormData

    // Complete the form
    for (let key in data) {
      if (data.hasOwnProperty(key)) { // Check if key belongs to data
        form.append(key, data[key]);
      }
    }

    form.append("ServiceImage", this.image);

    this._ser.addService(form).subscribe(() => {
      alert("Service added successfully");
    }, error => {
      console.error("Error adding service", error); // Handle error
    });
  }
}
