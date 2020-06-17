import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DepartmentMemberComponent } from './department-member/department-member.component';

const routes: Routes = [
    {path: '', redirectTo: 'departments', pathMatch: 'full' },
    {path: 'departments', component: DepartmentListComponent},
    {path: 'departmentdetails', component: DepartmentDetailsComponent},
    {path: 'departments/:id', component: DepartmentMemberComponent },
    {path: 'students', component: StudentListComponent},           // This is the routes array which contains a path and component to route
    {path: 'studentdetails', component: StudentDetailsComponent},
    {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, DepartmentDetailsComponent, StudentListComponent,
                                  PagenotfoundComponent, StudentDetailsComponent, DepartmentMemberComponent];
  // This is the const variable which stores the routing components in an array such that when ever we update a path or component
  // There is no need to change/add components in app.component file
