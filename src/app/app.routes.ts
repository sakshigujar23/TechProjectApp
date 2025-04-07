import { Routes } from '@angular/router';
<<<<<<< HEAD

export const routes: Routes = [];
=======
import { CreateProjectComponent } from './create-project/create-project.component';
import { LoginComponent } from './login/login.component';
import { ProjectListingComponent } from './project-listing/project-listing.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'create_projects',component:CreateProjectComponent},
{path:'projectlist',component:ProjectListingComponent}    
    

];
>>>>>>> 2a58cbc (first commit)
