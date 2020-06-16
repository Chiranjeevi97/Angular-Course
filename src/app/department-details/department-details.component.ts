import { Component, OnInit } from '@angular/core';
import { DepartmentServiceService } from '../department-service.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  errorMsg: any;

  // tslint:disable-next-line: variable-name
  constructor(private _departmentService: DepartmentServiceService) { }
  public departmentList = [];
  ngOnInit() {
    this._departmentService.getDepartmentList()
    .subscribe(data => this.departmentList = data,    // This is the subscribe method that gets the observable data from the server
               error => this.errorMsg = error);       // This is an error which gets triggered if an error is occured during the page load
  }

}
