import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Input() public parentData;     // @Input is the decorator to inform the student component that this is the parent property
  // @Output() public childEvent = new EventEmitter();
  public isTrue;
  public color;
  public list = ['Nagaraju', 'Chandrika', 'Chiranjeevi', 'Niharika'];    // This is the list of elements to print in the template
  public name = 'Implementing Pipes';
  public person = {id: 1, name: 'Chiranjeevi', gender: 'M', degree: 'Bachelors' };
  public date = new Date();
  public checkTrue() {
    this.isTrue = true;       // This is the method to set the isTrue variable to true
  }

  // public sendEvent() {
  //   this.childEvent.emit('Hello this is from Student Component');    // This is the method that creates and emits the child event
  // }

  public checkFalse() {
    this.isTrue = false;      // This is the method to set the isTrue variable to true
  }
  public changeColor(c) {
    this.color = c;           // This is the method to set the color variable to the color chosen by the user
  }
  constructor() { }

  ngOnInit() {
  }

}
