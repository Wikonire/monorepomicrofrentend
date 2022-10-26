
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {loadRemoteModule} from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {path: 'microFrontendOne', loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'microFrontendOne',
      exposedModule: './Module'
    }).then(module => module.HomeModule)
  },
  {path: 'microFrontendTwo', loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'microFrontendTwo',
      exposedModule: './Module'
    }).then(module => module.HomeModule)
  },
  {path: 'microFrontendRemote', loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'microFrontendRemote',
      exposedModule: './Module'
    }).then(module => module.HomeModule)
  },
  {path: '**', component: HomeComponent},
];
