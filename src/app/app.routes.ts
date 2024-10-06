import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [

    { path: '', component: HomeComponent},
    { path: ':id', component: DetailsComponent, canActivate: [AuthGuard]},
    /*
    {
        path: '', 
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    },
    {
        path: ':id',
        loadComponent: () => import('./pages/details/details.component').then(m => m.DetailsComponent),
    },
    {
        path: '**',
        redirectTo: '',
    },
    */
];
