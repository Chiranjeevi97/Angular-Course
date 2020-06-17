import { Component, OnInit } from '@angular/core';
import { DepartmentServiceService } from '../department-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public member;
  public memberId;
  constructor(private depService: DepartmentServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
  //   this.route.paramMap.subscribe((params: ParamMap) => {
  //   // tslint:disable-next-line: no-shadowed-variable tslint:disable-next-line: radix
  //   this.memberId = parseInt(params.get('id'));
  //   console.log(this.route.snapshot);
  // });
  //   this.depService.getDepartmentList().subscribe(data => data.forEach(element => {
  //     if (element.id === this.memberId) {
  //       this.member = element;
  //       console.log(this.memberId);
  //     }
  //   }));
  }

}
