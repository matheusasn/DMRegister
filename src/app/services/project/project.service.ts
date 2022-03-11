import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectComponent } from 'src/app/components/project/project.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private dataProjects: any[] = [];
  private url = 'http://localhost:3000/projetos'

  constructor(private httpClient: HttpClient) { 
    this.dataProjects = [];
  }

  get getProjects(){
    return this.dataProjects;
  }

  getprojectsUrl(): Observable<ProjectComponent[]>{
    return this.httpClient.get<ProjectComponent[]>(this.url)
  }

  save(project: ProjectComponent): Observable<ProjectComponent> {
    this.hydrateData(project);
    
    return this.httpClient.post<ProjectComponent>(this.url, project);    
  }

  private hydrateData(project: any){
    project.data = new Date()
    project.id = this.dataProjects.length
  }
}
