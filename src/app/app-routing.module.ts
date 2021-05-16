import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentAdminComponent } from './components/component-admin/component-admin.component';
import { ComponentFormComponent } from './components/component-form/component-form.component';
import { ComponentLoginComponent } from './components/component-login/component-login.component';
import { ComponentQuestionComponent } from './components/component-question/component-question.component';
import { ComponentTotalComponent } from './components/component-total/component-total.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GuardLoginGuard } from './guards/guard-login.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'question',
    pathMatch: 'full',
  },
  {
    path: 'question',
    component: ComponentQuestionComponent,
  },
  {
    path: 'login',
    component: ComponentLoginComponent
  },
  {
    canActivate: [GuardLoginGuard],
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'admin',
        component: ComponentAdminComponent
      },
      {
        path: 'form',
        component: ComponentFormComponent,
      },
      {
        path: 'total',
        component: ComponentTotalComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
