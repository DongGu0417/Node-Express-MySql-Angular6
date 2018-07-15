import { Injectable } from '@angular/core';
import { URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import { ApiService,NotificationService } from '../../services';
import 'rxjs/add/operator/catch';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  private API_URL = environment.API_URL;
  constructor(private apiHandler: ApiService,private notificationService:NotificationService) { }

  getEnquiries(filter: HttpParams) {
    return this.apiHandler.get('/loan-enquiry',filter).map(response => {
     if (response.success) {
        // this.notificationService.notifySuccess(response.message?response.message:'Loan Enquiries Fetched');
        return response.result;
      } else {
        this.notificationService.notifyError(response.message?response.message:'Failed to Fetch loan enquiries');
        return {};
      }
    }).catch(this.handleError);
  }

  downloadCSV(filter: HttpParams){
    return this.apiHandler.get('/loan-enquiry/download',filter).map(response => {
      if (response.success && response.result.data) {
         // this.notificationService.notifySuccess(response.message?response.message:'Loan Enquiries Fetched');
         return response.result.data;
       } else {
         this.notificationService.notifyError(response.message?response.message:'Failed to download CSV');
         return {};
       }
     }).catch(this.handleError);


  }

  private handleError(error: | any) {
    console.error(error);
    // return Observable.throw(error); // <= B
    return Observable.of(error.error);
  }
}
