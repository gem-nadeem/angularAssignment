import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUsersComponent } from './create-users/create-users.component'; 
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';


const routes: Routes = [
  {path : 'create', component : CreateUsersComponent},
  {path : 'viewallusers', component : ViewAllUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
