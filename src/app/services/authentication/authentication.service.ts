import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import {constantVariable} from '../../../app/constant';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
// import { StorageService,LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
    currentuser : any;
    removestorage : any;
    
    // HAS_LOGGED_IN = 'hasLoggedIn';
    // public local: LocalStorageService, public session: SessionStorageService,private storage: StorageService

    constructor(private http: HttpClient,private router:Router) { 
        console.log('authentication service');
    }

    
    login(data) {
        console.log('in login service');
        return this.http.post<any>(constantVariable.API_ENDPOINT+'api/operators/login',data)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                    if(user.response && user.response.token && user.response.status=='success'){
                        console.log('in login service with jwt token');
                        console.log(user);
                        localStorage.setItem('constantVariable.currentUser', JSON.stringify(user));
                        // localStorage.setItem('constantVariable.currentUser', user);
                        localStorage.setItem('constantVariable.isLoggedIn', 'true');
                        localStorage.setItem('constantVariable.token', user.response.token);
                        // this.storage.set(this.HAS_LOGGED_IN, true);
                    }
                // if (user && user.token) {
                //     // store user details and jwt token in local storage to keep user logged in between page refreshes
                //     // localStorage.setItem('currentUser', JSON.stringify(user));
                    
                // }
                return user;
            }));
    }

    logout() {    
        // remove user from local storage to log user out
        localStorage.removeItem('constantVariable.currentUser');
        this.removestorage = localStorage.getItem('constantVariable.currentUser')
        console.log('remove storage variable');
        console.log(this.removestorage);
        this.router.navigate(['/']);
        console.log('user logout');

    }

    autoLogin(mobile: number, token: string) {
        console.log('auto login service');
        // return this.http.post<any>(constantVariable.API_ENDPOINT+'api/operators/autologin',{ mobile: mobile, token: token })
        return this.http.post<any>(constantVariable.API_ENDPOINT+'api/operators/login',{ mobile: mobile, token: token })
            .pipe(map(user => {
                    if(user.response && user.response.token && user.response.status=='success'){
                        // login successful if there's a jwt token in the response
                        console.log('in auto login with jwt token');
                        console.log(user);
                        localStorage.setItem('constantVariable.currentUser', JSON.stringify(user));
                        localStorage.setItem('constantVariable.isLoggedIn', 'true');
                        localStorage.setItem('constantVariable.token', user.response.token);
                    }

                return user;
            }));
    }

    // operatorsType(): Observable<Book[]> {
    //     return this.http.get(this.url)
    //         .map(this.extractData)
    //         .catch(this.handleErrorObservable);
    // }

    verifyLogin(url) : boolean{
        if(!this.isLoggedIn()){
            console.log('in verify login function');
            // this.router.navigate(['/login']);
            return false;
        }
        else if(this.isLoggedIn()){
            return true;
        }
    }

    public isLoggedIn(): boolean{
        let status = false;
        if( localStorage.getItem('constantVariable.isLoggedIn') == "true"){
          status = true;
          console.log('in isLoggedIn function & status :');
          console.log(status);
        }
        else{
          status = false;
        }
        return status;
    }

    // hasLoggedIn(): Promise<boolean> {
    //     return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
    //       return value === true;
    //     });
    // };

    selectOprator(data){
        console.log('select oprator service');
    }
}
