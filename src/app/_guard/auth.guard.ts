import { Injectable } from '@angular/core';
import {  Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) { }

	// canActivate(
	// 	next: ActivatedRouteSnapshot,
	// 	state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
	// 	return true;
	// }
	
	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('constantVariable.currentUser')) {
            // logged in so return true
            console.log('in auth guard service');
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
    
    // verifyLogin(url) : boolean{
    //     if(!this.isLoggedIn()){
    //         console.log('in verify login function');
    //         this.router.navigate(['/login']);
    //         return false;
    //     }
    //     else if(this.isLoggedIn()){
    //         return true;
    //     }
    // }
    // public isLoggedIn(): boolean{
    //     let status = false;
    //     if( localStorage.getItem('constantVariable.isLoggedIn') == "true"){
    //       status = true;
    //       console.log('in isLoggedIn function & status :');
    //       console.log(status);
    //     }
    //     else{
    //       status = false;
    //     }
    //     return status;
    // }
}
