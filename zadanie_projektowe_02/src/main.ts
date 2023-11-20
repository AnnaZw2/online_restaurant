import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { PersonService } from './shared/services/personService';
import { Person, generateUUID } from './shared/interfaces/person';
import { Gender } from './shared/enums/custom-enums';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

