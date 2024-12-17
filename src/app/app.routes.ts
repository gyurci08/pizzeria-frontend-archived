import { Routes } from '@angular/router';
import {LoginComponent} from './authentication/pages/login/login.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:"dashboard", component: DashboardComponent},
];
