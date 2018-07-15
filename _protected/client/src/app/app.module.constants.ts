import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

// Configuration values
import { APP_CONFIG, APP_DI_CONFIG } from './config/app.config';
// Root App component
import { AppComponent } from './app.component';
// App Routing
import { AppRoutingModule } from './app.routing.module';
// Core Modules
import { CoreModule } from './core';
// layout components
import { HeaderComponent, FooterComponent, SidebarComponent, AppLayoutComponent, BareLayoutComponent, BareHeaderComponent } from './_layout';
// Authentication guards & services
import { AuthGuard, HttpTokenInterceptor, AuthenticationService, NotificationService, ApiService, ErrorsModule } from './core'
// Shared Components & declarations
import { ConfirmModalComponent, DIRECTIVE_DECLARATIONS } from './shared';

// Login Component
import { LoginComponent } from './login/login.component';

// Third party modules & components
import { CollapseModule, BsDropdownModule, ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { LoadingModule } from 'ngx-loading';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

export const DEFAULT_DECLARATION = [
    AppComponent,
    HeaderComponent,
    BareHeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    BareLayoutComponent,
    AppLayoutComponent,
    ConfirmModalComponent, DIRECTIVE_DECLARATIONS

];

export const DEFAULT_MODULES = [CommonModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    CoreModule,
    ErrorsModule,
    ReactiveFormsModule,

    // BrowserAnimationsModule no longer required
    ToastNoAnimationModule,
    ToastrModule.forRoot({
        toastComponent: ToastNoAnimation,
        maxOpened: 1,
        autoDismiss: true
    }),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
        }
    }),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot(),
    LoadingModule];

export const DEFAULT_PROVIDERS = [AuthenticationService,
    ApiService,
    NotificationService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    { provide: APP_CONFIG, useValue: APP_DI_CONFIG }]

@NgModule({

    entryComponents: [ConfirmModalComponent],
    imports: [

        AppRoutingModule
    ],
    providers: [
        AuthenticationService,
        ApiService,
        NotificationService,
        AuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
        { provide: APP_CONFIG, useValue: APP_DI_CONFIG }],

    bootstrap: [AppComponent]
})
export class AppModule { }
