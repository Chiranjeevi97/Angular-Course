import { Component, OnInit } from '@angular/core';
import { DepartmentServiceService } from '../department-service.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})

export class DepartmentListComponent implements OnInit {

  constructor(private depService: DepartmentServiceService, private router: Router) { }

  public deplist = [];
  public errorMsg;
  ngOnInit() {
    this.depService.getDepartmentList()
    .subscribe(data => this.deplist = data,         // This is the subscribe method that gets the observable data from the server
                error => this.errorMsg = error);    // This is an error which gets triggered if an error is occured during the page load
  }

  public onSelect(department) {
    this.router.navigate(['/departments', department.id] );
  }

   /*  public name = 'Chiranjeevi';
    public mytext = 'TestId';     // Property to bind in tempalate URL.
    public disabledId = false;    // property to bind in tempalate URL.
    public successClass = 'text-success';
    public hasError = true;
    public styleBind = 'grey';
    public messageClasses = {
      'text-success': true,
      'text-danger': false,       // This is a class object to conditionally apply to multiple classes.
      'text-special': true
    };
    public titleStyles = {
      color: 'blue',              // This is an style object to conditioanlly apply multiple styles.
      fontStyle: 'italic'
    };
  public intro;
  public updateValue = '';
  public onClick() {
    this.intro = 'Hello this is Chiranjeevi!...';   // This method gets triggered when the user clicks the buton one time.
  }

  public onDblClick() {
    this.intro = '';              // This method gets triggered when the user clicks the button two times.
  }

  public logConsole(text) {
      // tslint:disable-next-line: max-line-length
      console.log(text);          // This method gets triggered when the user hits log console button which gets the DOM
                                  // element using template reference in html page using #myInput.
  }
 */

}
