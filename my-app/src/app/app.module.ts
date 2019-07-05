import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { ContentComponent } from './content.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';
import { EmployeesComponent } from './employees.component';
import { PositionsComponent } from './positions.component';
import { PageNotFoundComponent } from './not-found.component';
import { PositionServiceService } from './data/position.service';
import { EmployeeServiceService } from './data/employee.service';
import { HttpClientModule } from "@angular/common/http";
import { EmployeeComponent } from './employee.component';
import { PositionComponent } from './position.component';
import { FormsModule } from '@angular/forms';
@NgModule({

  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    EmployeesComponent,
    PositionsComponent,
    PageNotFoundComponent,
    EmployeeComponent,
    PositionComponent],

  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule],

  providers: [
    EmployeeServiceService,
    PositionServiceService],

  bootstrap: [AppComponent]
})
export class AppModule { }
