import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { throwIfAlreadyLoaded } from './ensureModuleLoadedOnceGuard';


import { UserService, LoanCategoryService } from './http';




@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    UserService,
    LoanCategoryService
  ],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {

    throwIfAlreadyLoaded(parentModule, 'CoreModule');

  }
}
