import { Component, inject } from '@angular/core';
import { CreateProjectService } from '../Services/create-project.service';
import { CreateProject } from '../create-project/create-project.dto';
import { ProjectListingService } from '../Services/project-listing.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-listing',
  imports: [CommonModule,FormsModule],
  templateUrl: './project-listing.component.html',
  styleUrl: './project-listing.component.css'
})
export class ProjectListingComponent {
  prs:ProjectListingService=inject(ProjectListingService);
  project_List:CreateProject[]=[];

  constructor(){
    this.showProjectList();
  }
  showProjectList(){
    this.prs.showProjects().subscribe(result=>{
      this.project_List=result;
    })
  }


}
