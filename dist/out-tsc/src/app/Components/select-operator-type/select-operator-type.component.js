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
var operators_1 = require("rxjs/operators");
var forms_1 = require("@angular/forms");
var signup_service_1 = require("../../services/signup/signup.service");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../../services/authentication/authentication.service");
var alert_service_1 = require("../../services/alert/alert.service");
var ngx_toastr_1 = require("ngx-toastr");
var SelectOperatorTypeComponent = /** @class */ (function () {
    function SelectOperatorTypeComponent(formBuilder, SignupService, route, router, authenticationService, alertService, toastr) {
        this.formBuilder = formBuilder;
        this.SignupService = SignupService;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.toastr = toastr;
        this.op_type = 'individual';
        this.submitted = false;
    }
    SelectOperatorTypeComponent.prototype.ngOnInit = function () {
        this.currentUserStates = localStorage.getItem('constantVariable.currentUserStates');
        this.currentUser = JSON.parse(this.currentUserStates);
        console.log((JSON.parse(this.currentUserStates)));
        console.log('user mobile');
        console.log(this.currentUserStates);
        this.SelectOpratorForm = this.formBuilder.group({
            status: this.formBuilder.control('registered'),
            mobile: this.formBuilder.control(this.currentUser.mobile),
            token: this.formBuilder.control(this.currentUser.token),
            operator_state: this.formBuilder.control(this.currentUser.operator_state),
            op_type: this.formBuilder.control(''),
            optype1: this.formBuilder.control(''),
            hiddenvalue: this.formBuilder.control(''),
            countrycode: this.formBuilder.control(91),
        });
    };
    SelectOperatorTypeComponent.prototype.OperatorType = function (optype) {
        console.log('oprator type');
        console.log(optype);
        console.log(this.op_type = optype);
    };
    SelectOperatorTypeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.SelectOpratorForm.invalid) {
            console.log('incorrect login form');
            return;
        }
        else {
            console.log('submit operater form');
            console.log(this.SelectOpratorForm.value);
            this.SelectOpratorForm.value.op_type = this.op_type;
            this.SelectOpratorForm.value.mobile = this.currentUser.mobile;
            this.SelectOpratorForm.value.token = this.currentUser.token;
            this.SelectOpratorForm.value.operator_state = this.currentUser.operator_state;
            this.SignupService.register(this.SelectOpratorForm.value)
                .pipe(operators_1.first())
                .subscribe(function (data) {
                console.log('register response before auto login');
                _this.userResponse = data;
                console.log(_this.userResponse);
                // this.mobile = parseInt(this.userResponse.response.mobile);
                // this.token = this.userResponse.response.token;
                if (_this.userResponse.response.token && _this.userResponse.response.operator_state == 'registered') {
                    //store auth login in local storage
                    localStorage.setItem('constantVariable.currentUser', JSON.stringify(_this.userResponse));
                    // localStorage.setItem('constantVariable.currentUser', user);
                    localStorage.setItem('constantVariable.isLoggedIn', 'true');
                    localStorage.setItem('constantVariable.token', _this.userResponse.response.token);
                    _this.toastr.success('You Registered Successfully.', 'Congratulations!');
                    _this.router.navigate(['/myprofile']);
                }
                else {
                    _this.toastr.error('Something went wrong,Try Again.');
                    // this.alertService.error('Something went wrong');
                    _this.router.navigate(['/']);
                }
            }, function (error) {
                // this.alertService.error('Something went wrong,Try Again.');
                _this.toastr.error('Something went wrong,Try Again.');
                _this.router.navigate(['/']);
            });
            /*
            this.authenticationService.selectOprator(this.SelectOpratorForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.userLoggedIn = data;
                    console.log('user auto login response');
                    console.log(this.userLoggedIn);

                    if(this.userLoggedIn.response.token){
                        this.router.navigate(['/myprofile']);
                    }
                    else{
                        this.alertService.error('Something went wrong,Try Again.');
                        this.router.navigate(['/signup']);
                    }
                },
                error => {
                    this.alertService.error('Something went wrong,Try Again.');
                    this.router.navigate(['/signup']);
                });
            */
        }
    };
    SelectOperatorTypeComponent = __decorate([
        core_1.Component({
            selector: 'app-select-operator-type',
            templateUrl: './select-operator-type.component.html',
            styleUrls: ['./select-operator-type.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, signup_service_1.SignupService, router_1.ActivatedRoute, router_1.Router, authentication_service_1.AuthenticationService, alert_service_1.AlertService, ngx_toastr_1.ToastrService])
    ], SelectOperatorTypeComponent);
    return SelectOperatorTypeComponent;
}());
exports.SelectOperatorTypeComponent = SelectOperatorTypeComponent;
//# sourceMappingURL=select-operator-type.component.js.map