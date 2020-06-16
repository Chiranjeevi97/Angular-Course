import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Deparment } from './department';
import { Observable } from 'rxjs/';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {

  public url = '/assets/Data/Department.json';      // This is the path for the Department.json file which is instead of html response
  constructor(private http: HttpClient) { }         // We need to declare a variabel http with HttpClient to use it in our app
  getDepartmentList(): Observable<Deparment[]> {
    return this.http.get<Deparment[]>(this.url)     // Http get method to get the data from a particular path defined or given
                    .pipe(catchError(this.errorHandler));   // This is a pipe to catch the errors which fail to execute while running
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');     // This method triggers when there is an error occured during the http calls
  }
}
