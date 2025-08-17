import { Routes } from '@angular/router';
import { FormsListedComponent } from './components/forms-listed/forms-listed.component';
import { roleGuard } from './guard/role.guard';

export const routes: Routes = [
    {
        path: 'login',
       loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
    },
   {
       path: 'custom-form',
       loadComponent: () => import('./components/custom-form-builder/custom-form-builder.component').then(m => m.CustomFormBuilderComponent),
       canActivate: [roleGuard],
       data: { roles: ['admin'] }
    },
   { path: 'saved-forms', component: FormsListedComponent,
    canActivate: [roleGuard], 
    data: { roles: ['admin', 'user'] }
  },
   {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
   },
   {
    path: '**',
    redirectTo: 'login'
   }
];
