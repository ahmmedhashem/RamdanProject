import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signup, AdminLogin, VolSearch, CountO, AbsanceVal, EditCountryCity, CountryNotes, AddEditLocation } from  '../crud-class/policy';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = 'http://localhost/Ramadan-Aman/backend';

  readPolicies(): Observable<Signup[]>{
    return this.httpClient.get<Signup[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }


  createPolicy(policy: Signup): Observable<Signup>{
    return this.httpClient.post<Signup>(`${this.PHP_API_SERVER}/api/create.php`, policy);
  }



  updatePolicy(policy: Signup){
    return this.httpClient.put<Signup>(`${this.PHP_API_SERVER}/api/update.php`, policy);   
  }



  deletePolicy(id: number){
    return this.httpClient.delete<Signup>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }

  /////////for admin login
  LoginRequest(policy: AdminLogin): Observable<AdminLogin>{
    return this.httpClient.post<AdminLogin>(`${this.PHP_API_SERVER}/api/create.php`, policy);
  }

 

  API_SERVER = 'http://localhost/Ramadan-Aman/frontend/my-app/backend-for-test';

   /////////volunteer search
   VolSearchRequest(policy: VolSearch): Observable<VolSearch>{
    return this.httpClient.post<VolSearch>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }






  ///read countries object
  readCountriesO(): Observable<CountO[]>{
    return this.httpClient.get<CountO[]>(`${this.API_SERVER}/php-test.php`);
  }


  /////////Absance Status 
  AbsanceRequest(policy: AbsanceVal): Observable<AbsanceVal>{
    return this.httpClient.post<AbsanceVal>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }

  /////////Edit Country And City
  EditCountryCity(policy: EditCountryCity): Observable<EditCountryCity>{
    return this.httpClient.post<EditCountryCity>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }


  /////////Country Notes
  CountryNotesRequest(policy: CountryNotes): Observable<CountryNotes>{
    return this.httpClient.post<CountryNotes>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }


  /////////Country Notes
  AddEditLocationRequest(policy: AddEditLocation): Observable<AddEditLocation>{
    return this.httpClient.post<AddEditLocation>(`${this.PHP_API_SERVER}/php-test.php`, policy);
  }




  constructor(private httpClient: HttpClient) {}
}