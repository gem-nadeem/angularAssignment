import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { CreateUsersComponent } from './create-users/create-users.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';

//console.warn("Lazy loaded!");
@NgModule({
  declarations: [
    CreateUsersComponent,
    ViewAllUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
