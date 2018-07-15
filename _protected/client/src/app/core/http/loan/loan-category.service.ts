import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { ApiService, NotificationService } from '../../services';


import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LoanCategoryService {
  private API_URL = environment.API_URL;
  constructor(private apiHandler: ApiService, private notificationService: NotificationService) { }

  getCategories(f: URLSearchParams) {
    return this.apiHandler.get('/loan/categories').map(response => {
      if (response.success) {
        // this.notificationService.notifySuccess(response.message?response.message:'Loan Categories Fetched');
        return response.result;
      } else {
        this.notificationService.notifyError(response.message ? response.message : 'Failed to Fetch loan categories');
        return null;
      }

    });
  }
  createCategory(data: any) {
    return this.apiHandler.post('/loan/category/create', data).map(response => {
      if (response.success) {
        this.notificationService.notifySuccess(response.message ? response.message : 'New Category Added');
        return true;
      } else {
        this.notificationService.notifyError(response.message ? response.message : 'Failed to add Category');
        return null;
      }

    });
  }
  updateCategory(id: number, data: any) {
    return this.apiHandler.put('/loan/category/'+id, data).map(response => {
      if (response.success) {
        this.notificationService.notifySuccess(response.message ? response.message : 'Category Updated');
        return true;
      } else {
        this.notificationService.notifyError(response.message ? response.message : 'Failed to update Category');
        return null;
      }

    });
  }
  deleteCategory(ids:any) {
    return this.apiHandler.delete('/loan/category/'+ids).map(response => {
      if (response.success) {
        this.notificationService.notifySuccess(response.message ? response.message : 'Category deleted');
        return true;
      } else {
        this.notificationService.notifyError(response.message ? response.message : 'Failed to delete Category');
        return null;
      }

    });
  }
}
