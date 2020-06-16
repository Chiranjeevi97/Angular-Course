import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';


const routes: Routes = [
    {path: 'departments', component: DepartmentListComponent},
    {path: 'departmentdetails', component: DepartmentDetailsComponent},
    {path: 'students', component: StudentListComponent},
    {path: 'studentdetails', component: StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, DepartmentDetailsComponent, StudentListComponent, StudentDetailsComponent];
