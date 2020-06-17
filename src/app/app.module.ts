import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule } from '@angular/forms';
import { StudentServiceService } from './student-service.service';
import { DepartmentServiceService } from './department-service.service';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DepartmentMemberComponent } from './department-member/department-member.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PagenotfoundComponent,
    DepartmentMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentServiceService, DepartmentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
