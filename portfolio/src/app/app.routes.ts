import { Routes } from '@angular/router';
import{Home} from './components/home/home'
import{Portfolio} from './components/portfolio/portfolio'
import { Certificates } from './components/certificates/certificates';

export const routes: Routes = [
    {path : 'home', component: Home},
    {path : 'portfolio', component: Portfolio},
    {path : 'certificates', component: Certificates},
    {path : '**', redirectTo: 'home'}
];
