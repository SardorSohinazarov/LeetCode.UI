import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { InputComponent } from './components/pages/input/input.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: '', title: 'Home page', component: HomeComponent },
  { path: 'home', title: 'Home page', component: HomeComponent },
  { path: 'input', title: 'Input page', component: InputComponent },
  { path: 'profile', title: 'Profile page', component: ProfileComponent },
  { path: 'login', title: 'Login page', component: LoginComponent },
  { path: 'signup', title: 'Sign page', component: SignupComponent },
  { path: 'forgotpassword', title: 'ForgotPassword page', component: ForgotPasswordComponent },
  { path: '**', title: 'Not Found', component: NotfoundComponent },
];
