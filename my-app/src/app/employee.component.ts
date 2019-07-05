import { Component, OnInit } from '@angular/core';
import { EmployeeRaw } from './data/employeeRaw';
import { Positions } from './data/positions'
import { EmployeeServiceService } from './data/employee.service';
import { PositionServiceService } from './data/position.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  private paramSubScription: any;
  private employeeSubscription: any;
  private getPositionsSubcription: any;
  private saveEmployeeSubscription: any;
  employee: EmployeeRaw;
  private positions: Positions[];

  private successMessage = false;
  private failMessage = false;
  
  constructor(private e: EmployeeServiceService, private p: PositionServiceService, private r: ActivatedRoute) { }

  ngOnInit() {
    this.paramSubScription = this.r.params.subscribe((param) => {
      
      this.employeeSubscription = this.e.getEmployee(param['_id']).subscribe((data) => {
        this.employee = data[0];
      });

      this.getPositionsSubcription = this.p.getPositions().subscribe((data) => {
        this.positions = data;
      });

    })
  }

  onSubmit() {
    this.saveEmployeeSubscription = this.e.saveEmployee(this.employee).subscribe(() => {
      this.successMessage = true;
      setTimeout(() => {this.successMessage = false;}, 2500);
    },
    () => {this.failMessage = true;
      setTimeout(() => {this.failMessage = false;}, 2500);
    });
  }

  ngOnDestroy( ){
    if(this.paramSubScription){this.paramSubScription.unsubscribe();}
    if(this.employeeSubscription){this.employeeSubscription.unsubscribe();}
    if(this.getPositionsSubcription){this.getPositionsSubcription.unsubscribe();}
    if(this.saveEmployeeSubscription){this.saveEmployeeSubscription.unsubscribe();}
  }

}
