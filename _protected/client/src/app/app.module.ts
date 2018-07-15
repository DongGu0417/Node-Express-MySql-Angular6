import { NgModule } from '@angular/core';
// Configuration values
import { APP_CONFIG, APP_DI_CONFIG } from './config/app.config';
// Root App component
import { AppComponent } from './app.component';
// Shared Components & declarations
import { ConfirmModalComponent, DIRECTIVE_DECLARATIONS } from './shared';
// App Routing
import { AppRoutingModule } from './app.routing.module';

import { DEFAULT_DECLARATION, DEFAULT_MODULES, DEFAULT_PROVIDERS } from "./app.module.constants"

@NgModule({
  declarations: [...DEFAULT_DECLARATION],
  entryComponents: [ConfirmModalComponent],
  imports: [
    ...DEFAULT_MODULES,
    AppRoutingModule
  ],
  providers: [
    ...DEFAULT_PROVIDERS],

  bootstrap: [AppComponent]
})
export class AppModule { }
