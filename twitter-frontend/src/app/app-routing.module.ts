import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component';
import {NavigationComponent} from './navigation/navigation.component';
import {LogoutComponent} from './logout/logout.component';
import {RegisterComponent} from './register/register.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/:id', component: UserComponent},
  {path: 'profile', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'nav', component: NavigationComponent, canActivate: [AuthGuard]},
  {path: 'edit', component: EditProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
