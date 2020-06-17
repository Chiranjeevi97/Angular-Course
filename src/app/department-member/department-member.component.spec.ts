import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentMemberComponent } from './department-member.component';

describe('DepartmentMemberComponent', () => {
  let component: DepartmentMemberComponent;
  let fixture: ComponentFixture<DepartmentMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
