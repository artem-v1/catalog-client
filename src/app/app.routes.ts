import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { AuthGuard } from './auth/auth.guard';
import { TestComponentComponent } from './pages/test-component/test-component.component';

export const routes: Routes = [

    /*
    { path: '', component: HomeComponent},
    { path: ':id', component: DetailsComponent, canActivate: [AuthGuard]},
*/


    {
        path: 't', 
        component: TestComponentComponent,
        //canActivate: [AuthGuard],
    },

    
    {
        path: '', 
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    },
    {
        path: 'details/:id',
        loadComponent: () => import('./pages/details/details.component').then(m => m.DetailsComponent),
        //canActivate: [AuthGuard],
    },
    {
        path: '**',
        redirectTo: '',
    },
    
];
