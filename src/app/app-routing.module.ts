import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserrepositoryComponent } from './userrepository/userrepository.component';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes = [
  {path:'', redirectTo:'/users', pathMatch:'full'},
  {path:'users', component:UsersComponent},
  {path:'user/:name', component:UserrepositoryComponent},
  {path:'addUser', component:AdduserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
