import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  dataProjects: any[];

  constructor(private service: ProjectService) { }

  ngOnInit(): void {
   this.service.getprojectsUrl().subscribe((dataProjects: ProjectComponent[]) => {
     console.table(dataProjects);
     this.dataProjects = dataProjects;
   });
  }

}
