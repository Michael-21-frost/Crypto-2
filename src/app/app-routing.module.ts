import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SplashComponent } from './component/splash/splash/splash.component';
import { LogInComponent } from './component/log-in/log-in/log-in.component';
import { SignUpComponent } from './component/sign-up/sign-up/sign-up.component';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';
import { VerifyComponent } from './component/verify/verify/verify.component';
import { TopUpComponent } from './component/top-up/top-up/top-up.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { ResetPasswordComponent } from './component/forgotPassword/reset-password/reset-password.component';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  {path: '', component:SplashComponent,   pathMatch: 'full',},
  {path: 'main', component:HomeComponent,     ...canActivate(redirectUnauthorizedToLogin)},
  {path: 'login', component:LogInComponent,    ...canActivate(redirectLoggedInToHome)},
  {path: 'register', component: SignUpComponent},
  {path: 'reset', component:ResetPasswordComponent},
  {path: 'dashboard', component: DashboardComponent,   ...canActivate(redirectUnauthorizedToLogin)},
  {path: 'verify', component:VerifyComponent},
  {path: 'topup', component:TopUpComponent,   ...canActivate(redirectUnauthorizedToLogin)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
