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
var forms_1 = require("@angular/forms");
var signup_service_1 = require("../../services/signup/signup.service");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../../services/authentication/authentication.service");
var alert_service_1 = require("../../services/alert/alert.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, SignupService, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.SignupService = SignupService;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.title = 'app';
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.LoginForm = this.formBuilder.group({
            mobile: ['', [forms_1.Validators.required, forms_1.Validators.minLength(10)]],
            // password: ['', [Validators.required, Validators.minLength(6)]],
            // countrycode: ['', Validators.required],
            countrycode: this.formBuilder.control(91),
            // rememberme: this.formBuilder.control(''),
            status: this.formBuilder.control('login'),
        });
    };
    Object.defineProperty(LoginComponent.prototype, "l", {
        // convenience getter for easy access to login form fields
        get: function () { return this.LoginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.LoginForm.invalid) {
            console.log('incorrect login form');
            return;
        }
        else {
            console.log(this.LoginForm.value);
            this.router.navigate(['/myprofile']);
            /*
                this.authenticationService.login(this.LoginForm.value)
                .pipe(first())
                .subscribe(
                    data => {
                        this.userLoggedIn = data;
                        if(this.userLoggedIn.response.token){

                            console.log('login sucessfully');
                            this.router.navigate(['/myprofile']);
                        }
                        else if(this.userLoggedIn.response.status = 'Failed'){
                            console.log('error in login page');
                            this.alertService.error(this.userLoggedIn.response.msg);
                        }
                        console.log('in login response');
                    },
                    error => {
                        this.alertService.error('Something went wrong.');
                        console.log('something went wrong');
                        this.router.navigate(['/login']);
                    });
            */
        }
    };
    LoginComponent.prototype.forgotPassword = function () {
        console.log('inside forgot password screen');
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, signup_service_1.SignupService, router_1.ActivatedRoute, router_1.Router, authentication_service_1.AuthenticationService, alert_service_1.AlertService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map