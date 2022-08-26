
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
export const APP_ROUTES: Routes = [
  {path: 'microFrontendOne', loadChildren: () => import('microFrontendOne/Module').then(m => m.HomeModule)},
  {path: 'microFrontendTwo', loadChildren: () => import('microFrontendTwo/Module').then(m => m.HomeModule)},
  {path: '**', component: HomeComponent},
];
