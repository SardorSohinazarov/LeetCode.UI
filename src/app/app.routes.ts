import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { InputComponent } from './components/pages/input/input.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { SubmissionsListComponent } from './components/submissions-list/submissions-list.component';

import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: '', title: 'Home page', component: HomeComponent },
  { path: 'explore', title: 'Explore - Leetcode', component: HomeComponent },
  { path: 'problemset', title: 'Problems - Leetcode', component: HomeComponent },
  { path: 'problems/:problem-name', title: 'Input page', component: InputComponent },
  { path: 'login', title: 'Account Login', component: LoginComponent },
  { path: 'signup', title: 'Account Login', component: SignupComponent },
  
  { path: 'problems/:problem-name/submissions', title: 'Submissions - Leetcode', component: SubmissionsListComponent },
  { path: 'forgotpassword', title: 'ForgotPassword - Leetcode', component: ForgotPasswordComponent },
  { path: ':username', title: 'Profile - Leetcode', component: ProfileComponent },
  { path: '**', title: 'Not Found', component: NotfoundComponent },
];
