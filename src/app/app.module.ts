import{BrowserModule}from'@angular/platform-browser';
import {NgModule }from '@angular/core';
import {RouterModule}from '@angular/router';
import {ReactiveFormsModule,FormGroup, FormBuilder, FormsModule} from '@angular/forms';

import {AppComponent }from './app.component';

import {HomePageComponent}from './pages/home-page/home-page.component';
import {TaskListPageComponent}from './pages/task-list-page/task-list-page.component';
import { TaskEditPageComponent}from './pages/task-edit-page/task-edit-page.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {UserListPageComponent}from './pages/user-list-page/user-list-page.component';

import {NgbModule}from '@ng-bootstrap/ng-bootstrap';

import { AppConfiguration } from './common/config/app-configuration.service';
import { HttpModule } from '@angular/http';
import { INITIAL_CONFIG } from './common/config/initial-config';
import { AuthService } from './common/auth.service';
import { AppDataService } from './common/app-data.service';

import {TodoService}from './services/todo.service';
import {UserService}from './services/users.service';

const ROUTES = [
{path: '', component: HomePageComponent},
{path: 'tasks', component: TaskListPageComponent},
{path: 'edit', component: TaskEditPageComponent },
{path: 'users', component: UserListPageComponent },
{path: '**', component: PageNotFoundComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TaskListPageComponent,
    TaskEditPageComponent,
    PageNotFoundComponent,
    UserListPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: INITIAL_CONFIG,
      useValue: {
        apiURL: 'http://localhost:8080'
      }
    },
    TodoService,
    AppConfiguration,
    AuthService,
    AppDataService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
