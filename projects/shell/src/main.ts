import('./bootstrap').catch(err => console.error(err));
import {loadManifest} from '@angular-architects/module-federation';
loadManifest('/assets/mf.manifest.json')
  // todo: needs better handling for production code
  .catch(err => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch(err => console.error(err));
