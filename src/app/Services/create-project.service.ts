import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateProject } from '../create-project/create-project.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateProjectService {

  url:string="http://localhost:3000/projectlist";
  
  constructor(private http:HttpClient) { }

  addProject(p:CreateProject):Observable<any>{
    return this.http.post(this.url,p);
  }
  showProjects():Observable<any>{
    return this.http.get(this.url);
  }

  deleteProject(pname:string):Observable<any>{
    return this.http.delete(this.url+'/'+pname);
  }
  updateProject(p:CreateProject):Observable<any>{
    return this.http.put(this.url+'/'+p.pname,p);
  }
  searchProjectByPname(pname:string):Observable<any>{
    return this.http.get(this.url+'/'+pname);
  }
}
