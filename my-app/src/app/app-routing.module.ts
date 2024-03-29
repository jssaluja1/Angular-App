import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeesComponent } from './employees.component';
import { PositionsComponent } from './positions.component';
import { PageNotFoundComponent } from './not-found.component';
import { EmployeeComponent } from './employee.component';
import { PositionComponent } from './position.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'employees', component:EmployeesComponent},
  {path:'positions', component:PositionsComponent},
  {path:'employee/:_id', component:EmployeeComponent},
  {path:'position/:_id', component:PositionComponent},
  {path:'', redirectTo:"/home", pathMatch: 'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
