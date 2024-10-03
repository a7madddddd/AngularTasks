import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";


import { FormsModule } from '@angular/forms';

import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AboutUsComponent } from "./about-us/about-us.component";
import { AddServiceComponent } from "./Admin/add-service/add-service.component";
import { DashboardComponent } from "./Admin/dashboard/dashboard.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { RegusretrationUsersComponent } from "./regusretration-users/RegusretrationUsersComponent";
import { ServicesComponent } from "./services/services.component";
import { SingleSubServiceComponent } from "./single-sub-service/single-sub-service.component";
import { SubSecriptionComponent } from "./sub-secription/sub-secription.component";
import { SubServicesComponent } from "./sub-services/sub-services.component";





@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        AboutUsComponent,
        ContactUsComponent,
        HomeComponent,
        ServicesComponent,
        SubServicesComponent,
        SubSecriptionComponent,
        RegusretrationUsersComponent,
        LoginComponent, // Ensure this is declared,
        DashboardComponent,
        AddServiceComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule, // Ensure FormsModule is imported
        AppRoutingModule,
        RouterModule.forRoot([
            { path: "", component: HomeComponent, pathMatch: "full" },
            { path: "services", component: ServicesComponent },
            { path: "about-us", component: AboutUsComponent },
            { path: "contact-us", component: ContactUsComponent },
            { path: 'SubServices/:id', component: SubServicesComponent },
            { path: 'SubSubciption', component: SubSecriptionComponent },
            { path: 'Single/:id', component: SingleSubServiceComponent },
            { path: 'registration', component: RegusretrationUsersComponent },
            { path: 'Login', component: LoginComponent },
            {
                path: 'Dashboard', component: DashboardComponent, children: [
                { path: "AddService", component: AddServiceComponent },
                { path: "**", component: DashboardComponent }
                ]
            },
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
