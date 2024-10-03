import { Component } from "@angular/core";
import { UrlService } from "../URL/url.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-regusretration-users',
  templateUrl: './regusretration-users.component.html',
  styleUrl: './regusretration-users.component.css'
})
export class RegusretrationUsersComponent {
  ngOnInit() {

  }


  constructor(private _ser: UrlService, private _router: Router) {

  }

  addNewUser(data: any) {
    const form = new FormData();

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        form.append(key, data[key]);
      }
    }

    this._ser.addUSer(form).subscribe(
      () => {
        alert("User added successfully");
        this._router.navigate(['/Login']);
      },
      (error) => {
        alert(error.error || "An error occurred while adding the user.");
      }
    );
  }
}

