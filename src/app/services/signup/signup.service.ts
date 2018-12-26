import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { constantVariable } from '../../../app/constant';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

	constructor(private http: HttpClient) { }

	// register(data) {
	//     return this.http.post(constantVariable.API_ENDPOINT+'api/operators/register/', data);
	//     // return this.http.post(`/users/register`, register);
	// }

	register(data) {
		return this.http.post(constantVariable.API_ENDPOINT+'api/operators/register/', data);
    }
	
	getOperatorTypes() {
		console.log('get oprator list :');
		return this.http.get(constantVariable.API_ENDPOINT+'api/register/operators/get-operator-type')
		// return this.http.get('http://user.suigeneriskids.com/api/get-operator-type')
	}

	checkOperatorState(data){
		console.log('in select operator service');
        return this.http.post<any>(constantVariable.API_ENDPOINT+'api/operators/check-operator-state',data)
            .pipe(map(user => {
                return user.response;
        	}));
	}
}
