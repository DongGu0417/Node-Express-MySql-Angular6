import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BareLayoutComponent } from './_layout/bare-layout/bare-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component'
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ErrorsComponent } from './core/errors';

const routes: Routes = [


  //Site routes goes here
  {
    path: 'auth',
    component: BareLayoutComponent,
    children: [
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent, pathMatch: 'full' },

    ]
  },

  // App routes goes here here
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', loadChildren: './pages/dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
      { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },

    ]
  },
  { path: '**', component: ErrorsComponent, data: { error: 404 } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
