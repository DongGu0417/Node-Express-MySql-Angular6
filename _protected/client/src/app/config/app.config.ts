
import { AppConfig } from './app-config';
export { AppConfig } from './app-config';
import { environment } from '../../environments/environment'
// #docregion token
import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
// #enddocregion token
// #docregion config
export const APP_DI_CONFIG: AppConfig = {
  apiEndpoint: environment.API_URL,
  LoanTypesOptions: [
                    { id: 1, name: 'Loan' },
                    { id: 2, name: 'Deposit' },
                    ],
  LoanTypesConstant: { LOAN: 1, DEPOSIT: 2 },
  LoanTypesConstantMap: { 1: 'Loan', 2: 'Deposit' }

};
