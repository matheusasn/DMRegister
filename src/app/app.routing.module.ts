import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router'
import { NewProjectComponent } from "./components/new-project/new-project.component";
import { ProjectComponent } from "./components/project/project.component";

export const routes: Routes = [
    {path: '', redirectTo: 'project', pathMatch: 'full'},
    {path: 'project', component: ProjectComponent},
    {path: 'new-project', component: NewProjectComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class appRoutingModule{}