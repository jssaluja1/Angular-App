import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { Employees } from './employees';
import { EmployeeRaw } from './employeeRaw';

@Injectable()
export class EmployeeServiceService {
  private url="https://stormy-earth-26721.herokuapp.com";

  constructor(private http:HttpClient) {}


  getEmployees() : Observable<Employees[]> {
    return this.http.get<Employees[]>(`${this.url}/employees`);
  }


  saveEmployee(employee : EmployeeRaw) : Observable<any> {
    return this.http.put<any>(this.url + "/employee/" + employee._id, employee);
  }

  
  getEmployee(id) : Observable<EmployeeRaw[]> {
    return this.http.get<EmployeeRaw[]>(this.url + "/employee-raw/" + id);
  }

}
