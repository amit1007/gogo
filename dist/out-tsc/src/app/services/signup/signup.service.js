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
var SignupService = /** @class */ (function () {
    function SignupService(http) {
        this.http = http;
    }
    // register(data) {
    //     return this.http.post(constantVariable.API_ENDPOINT+'api/operators/register/', data);
    //     // return this.http.post(`/users/register`, register);
    // }
    SignupService.prototype.register = function (data) {
        return this.http.post(constant_1.constantVariable.API_ENDPOINT + 'api/operators/register/', data);
    };
    SignupService.prototype.getOperatorTypes = function () {
        console.log('get oprator list :');
        return this.http.get(constant_1.constantVariable.API_ENDPOINT + 'api/register/operators/get-operator-type');
        // return this.http.get('http://user.suigeneriskids.com/api/get-operator-type')
    };
    SignupService.prototype.checkOperatorState = function (data) {
        console.log('in select operator service');
        return this.http.post(constant_1.constantVariable.API_ENDPOINT + 'api/operators/check-operator-state', data)
            .pipe(operators_1.map(function (user) {
            return user.response;
        }));
    };
    SignupService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SignupService);
    return SignupService;
}());
exports.SignupService = SignupService;
//# sourceMappingURL=signup.service.js.map