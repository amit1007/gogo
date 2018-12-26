"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var constant_1 = require("../../../app/constant");
var router_1 = require("@angular/router");
// import { StorageService,LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
var AuthenticationService = /** @class */ (function () {
    // HAS_LOGGED_IN = 'hasLoggedIn';
    // public local: LocalStorageService, public session: SessionStorageService,private storage: StorageService
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        console.log('authentication service');
    }
    AuthenticationService.prototype.login = function (data) {
        console.log('in login service');
        return this.http.post(constant_1.constantVariable.API_ENDPOINT + 'api/operators/login', data)
            .pipe(operators_1.map(function (user) {
            // login successful if there's a jwt token in the response
            if (user.response && user.response.token && user.response.status == 'success') {
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
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('constantVariable.currentUser');
        this.removestorage = localStorage.getItem('constantVariable.currentUser');
        console.log('remove storage variable');
        console.log(this.removestorage);
        this.router.navigate(['/']);
        console.log('user logout');
    };
    AuthenticationService.prototype.autoLogin = function (mobile, token) {
        console.log('auto login service');
        // return this.http.post<any>(constantVariable.API_ENDPOINT+'api/operators/autologin',{ mobile: mobile, token: token })
        return this.http.post(constant_1.constantVariable.API_ENDPOINT + 'api/operators/login', { mobile: mobile, token: token })
            .pipe(operators_1.map(function (user) {
            if (user.response && user.response.token && user.response.status == 'success') {
                // login successful if there's a jwt token in the response
                console.log('in auto login with jwt token');
                console.log(user);
                localStorage.setItem('constantVariable.currentUser', JSON.stringify(user));
                localStorage.setItem('constantVariable.isLoggedIn', 'true');
                localStorage.setItem('constantVariable.token', user.response.token);
            }
            return user;
        }));
    };
    // operatorsType(): Observable<Book[]> {
    //     return this.http.get(this.url)
    //         .map(this.extractData)
    //         .catch(this.handleErrorObservable);
    // }
    AuthenticationService.prototype.verifyLogin = function (url) {
        if (!this.isLoggedIn()) {
            console.log('in verify login function');
            // this.router.navigate(['/login']);
            return false;
        }
        else if (this.isLoggedIn()) {
            return true;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var status = false;
        if (localStorage.getItem('constantVariable.isLoggedIn') == "true") {
            status = true;
            console.log('in isLoggedIn function & status :');
            console.log(status);
        }
        else {
            status = false;
        }
        return status;
    };
    // hasLoggedIn(): Promise<boolean> {
    //     return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
    //       return value === true;
    //     });
    // };
    AuthenticationService.prototype.selectOprator = function (data) {
        console.log('select oprator service');
    };
    AuthenticationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map