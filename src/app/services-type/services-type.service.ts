import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesTypeService {
  private apiUrl = 'https://mocki.io/v1/ff6c51fb-193e-4aba-bbc9-c6795f69e376';

  constructor(private http: HttpClient) { }

  getAppointments() {
    return this.http.get<any[]>(this.apiUrl);
  }
}