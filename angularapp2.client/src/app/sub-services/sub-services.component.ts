import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from '../URL/url.service';

@Component({
  selector: 'app-sub-services',
  templateUrl: './sub-services.component.html',
  styleUrls: ['./sub-services.component.css']  // Corrected to 'styleUrls'
})
export class SubServicesComponent implements OnInit {
  parameter: any;
  subServiceData: any;  // Changed to store the fetched sub-services data

  constructor(private _ser: UrlService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the 'id' parameter from the URL using snapshot
    this.parameter = this._route.snapshot.paramMap.get("id");
    if (this.parameter) {
      this.getsubServices(this.parameter);  // Fetch sub-services based on service ID
    }
  }

  // Method to fetch sub-services by service ID
  getsubServices(id: any): void {
    this._ser.getSubSerBySerId(id).subscribe(
      (data) => {
        this.subServiceData = data;
        console.log("Sub-services fetched:", this.subServiceData);
      },
      (error) => {
        console.error("Error fetching sub-services:", error);  // Basic error handling
      }
    );
  }
}
