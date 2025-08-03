import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import AOS from 'aos';

bootstrapApplication(App, {
  providers: [provideHttpClient(), ...appConfig.providers],
}).catch((err: any) => console.error(err));

AOS.init();
