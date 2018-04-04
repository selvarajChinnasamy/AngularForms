import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ServiceService {

  constructor(public http: HttpClient) { }
  sendMail(data) {
    return this.http.post('http://localhost:9000/sendmail', data);
  }
}
