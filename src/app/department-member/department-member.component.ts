import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DepartmentServiceService } from '../department-service.service';
import {Location } from '@angular/common';
import { Department } from '../department';

@Component({
  selector: 'app-department-member',
  templateUrl: './department-member.component.html',
  styleUrls: ['./department-member.component.css']
})
export class DepartmentMemberComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private departmentService: DepartmentServiceService,
              private location: Location,
              private router: Router) { }
  public depId;
  public depMem;
  public size;

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line: no-shadowed-variable tslint:disable-next-line: radix
      this.depId = parseInt(params.get('id'));
    });
    this.departmentService.getDepartmentList().subscribe(data => data.forEach(element => {
    if (element.id === this.depId) {
      this.depMem = element;
    }
    this.size = data.length;
    }) );
  }

  public goNext() {
    let nextId = this.depId + 1;
    if (nextId >= this.size) {
      nextId = this.size;
    // tslint:disable-next-line: align
    }this.router.navigate(['/departments', nextId]);
    this.departmentService.getDepartmentList().subscribe(data => data.forEach(element => {
      if (element.id === this.depId) {
        this.depMem = element;
      }
      }) );
  }

  public goPrevious() {
    let prevId = this.depId - 1;
    if (prevId <= 0) {
      prevId = 1;
    }
    this.router.navigate(['/departments', prevId]);
    this.departmentService.getDepartmentList().subscribe(data => data.forEach(element => {
      if (element.id === this.depId) {
        this.depMem = element;
      }
      }) );
  }

  public goback() {
    this.location.back();
  }

}
