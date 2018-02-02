import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CrudServiceService } from './crud-service.service';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
BrowserModule,
FormsModule,
HttpModule,
RouterModule.forRoot([
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{path: 'users', component: UsersComponent},
{path: 'dashboard', component: DashboardComponent},
])
],
  providers: [CrudServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
