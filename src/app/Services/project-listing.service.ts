import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProjectListingService {

  url:string="http://localhost:3000/projectlist";

  constructor(private http:HttpClient) { }

  showProjects():Observable<any>{
      return this.http.get(this.url);
    }
}
