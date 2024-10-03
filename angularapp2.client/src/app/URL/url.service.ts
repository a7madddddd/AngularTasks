import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }

  // بحط كل الروابط من سواقر للسيرفس
  staticData = "https://localhost:7123/api/"
  urlMohammad = `${this.staticData}Services`;

  getServices(): Observable<any> {
    return this.http.get<any>(this.urlMohammad)
  }


  getSubSerBySerId(id: number): Observable<any> {
    return this.http.get<any>(`${this.staticData}subService/GetSubServicesByServicesId/${id}`)
  }

  getSubSerById(id: number): Observable<any> {
    return this.http.get<any>(`${this.staticData}/subService/GetSubServicesById/${id}`)
  }

  getSingleSubSerById(id: number): Observable<any> {
    return this.http.get<any>(`${this.staticData}subService/GetSubServicesByServicesId/${id}`)
  }


  addUserSub(data : any): Observable<any> {
    return this.http.post<any>(`${this.staticData}subService/postUSerSubsecriptoin`, data)
  }

  getSubscriptions(): Observable<any> {
    return this.http.get<any>(`${this.staticData}subService/SubSecriptions`)
  }
  

  addUSer(data: any): Observable<any> {

    return this.http.post(`${this.staticData}Users`, data)

  }


  LoginUSer(data: any): Observable<any> {

    return this.http.post(`${this.staticData}Users/UserLogin`, data)

  }

  addService(data: any): Observable<any> {
    return this.http.post(`https://localhost:7123/api/Services/addsService`, data)

  }

}
