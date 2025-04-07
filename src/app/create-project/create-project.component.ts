import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateProject } from './create-project.dto';
import { CreateProjectService } from '../Services/create-project.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css'
})
export class CreateProjectComponent {
  projectForm!:FormGroup;
  prs:CreateProjectService=inject(CreateProjectService);
  btn_name: string = "Save Project";
  project_List: CreateProject[] = [];
  p_obj!:CreateProject;


  constructor(private formBuilder: FormBuilder) {
    this.projectForm = this.formBuilder.group({
      pname: ['', [Validators.required]],
      reason: ['', [Validators.required]],
      type: ['', [Validators.required]],
      division: ['', [Validators.required]],
      category: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      dept: ['', [Validators.required]],
      sdate: ['', [Validators.required]],
      edate: ['', [Validators.required]],
      loc: ['', [Validators.required]]
    })
   }
  
  ngOnit(){
  }
  get pname(){
    return this.projectForm.get('pname');
  }
  get reason(){
    return this.projectForm.get('reason');
  }
  get type(){
    return this.projectForm.get('type');
  }
  get division(){
    return this.projectForm.get('division');
  }

  get category(){
    return this.projectForm.get('category');
  }
  get priority(){
    return this.projectForm.get('priority');
  }
  get dept(){
    return this.projectForm.get('dept');
  }
  get sdate(){
    return this.projectForm.get('sdate');
  }
  get edate(){
    return this.projectForm.get('edate');
  }
  get loc(){
    return this.projectForm.get('loc');
  }

  

  saveProject(){
    this.p_obj=this.projectForm.value;
    if(this.btn_name=="Save Project"){
      this.prs.addProject(this.p_obj).subscribe(result=>{
        alert("Project added");

      })
    }
      else if(this.btn_name=="Update Project"){
        this.prs.updateProject(this.p_obj).subscribe(result=>{
          alert("Project updated");
          this.btn_name="Save Project";
        })
      }
      this.clearFeilds();

    }

    showProjectList(){
      this.prs.showProjects().subscribe(result=>{
        this.project_List=result;
      })
    }

    clearFeilds(){
      this.projectForm=this.formBuilder.group({
      pname: [''],
      reason: [''],
      type: [''],
      division: [''],
      category: [''],
      priority: [''],
      dept: [''],
      sdate: [''],
      edate: [''],
      loc: ['']

      })

    }
  }

  
 

