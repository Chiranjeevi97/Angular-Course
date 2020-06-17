import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DepartmentServiceService } from '../department-service.service';
import {Location } from '@angular/common';
import { Department } from '../department';
import { relative } from 'path';

@Component({
  selector: 'app-department-member',
  templateUrl: './department-member.component.html',
  styleUrls: ['./department-member.component.css']
})
export class DepartmentMemberComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private departmentService: DepartmentServiceService,
              private router: Router) { }
  public depId;
  public depMem;
  public size;

  ngOnInit() {
    this.getAll();
  }

  public getAll() {
        // tslint:disable-next-line: deprecation
        this.route.paramMap.subscribe((params: ParamMap) => {
          // tslint:disable-next-line: no-shadowed-variable tslint:disable-next-line: radix
          this.depId = parseInt(params.get('id'));
        });
        this.departmentService.getDepartmentList().subscribe(data => data.forEach(element => {
        if (element.id === this.depId) {
          this.depMem = element;
          console.log(this.depMem);
        }
        this.size = data.length;
        }) );
  }

  public goNext() {
    let nextId = this.depId + 1;
    if (nextId >= this.size) {
      nextId = this.size;
    // tslint:disable-next-line: align
    }this.router.navigate( ['../', nextId], {relativeTo: this.route});
    this.getAll();
  }

  public goPrevious() {
    let prevId = this.depId - 1;
    if (prevId <= 0) {
      prevId = 1;
    }
    this.router.navigate(['../', prevId], {relativeTo: this.route});
    this.getAll();
  }

  public goback() {
    const selectedId = this.depId ? this.depId : null;
    // this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  getOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  getContact() {
    this.router.navigate(['contact'], {relativeTo: this.route});

  }

}
