import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ActionsComponent } from './actions/actions.component';
import { NewuserComponent } from './newuser/newuser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: MainpageComponent,
  },
  {
    path: 'actions',
    component: ActionsComponent,
  },
  {
    path: 'createUser',
    component: NewuserComponent,
  },
  {
    path: 'readUser',
    component: DashboardComponent,
  },
  {
    path: 'user-edit/:id',
    component: UserEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
