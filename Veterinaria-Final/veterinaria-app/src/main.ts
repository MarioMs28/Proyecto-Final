import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

// idioma español
registerLocaleData(localeEs);

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'es-MX' } // Esto hace que las fechas se muestren en español
  ]
});
