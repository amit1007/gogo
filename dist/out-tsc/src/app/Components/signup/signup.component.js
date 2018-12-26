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
var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, SignupService, route, router, authenticationService, alertService, toastr) {
        this.formBuilder = formBuilder;
        this.SignupService = SignupService;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.toastr = toastr;
        this.isOn = true;
        this.submitted = false;
        this.submitted1 = false;
        this.isRegistered = false;
        this.timeremain = 0;
        this.isShow = true;
        this.status = "login";
        // this.operatorType();
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.SignupForm = this.formBuilder.group({
            mobile: ['', [forms_1.Validators.required, forms_1.Validators.minLength(10)]],
            operatortype: ['other', forms_1.Validators.required],
            countrycode: this.formBuilder.control(91),
            // status: this.formBuilder.control('initial'),
            status: this.formBuilder.control(''),
            otptype: this.formBuilder.control('individual'),
        });
        this.verifyOtpForm = this.formBuilder.group({
            otp: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            status: this.formBuilder.control('verified'),
            operator_state: this.formBuilder.control(''),
            mobile: this.formBuilder.control(this.SignupForm.value.mobile),
            countrycode: this.formBuilder.control(91),
        });
    };
    Object.defineProperty(SignupComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.SignupForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupComponent.prototype, "f1", {
        // convenience getter for easy access to form fields verifyOtpForm 
        get: function () { return this.verifyOtpForm.controls; },
        enumerable: true,
        configurable: true
    });
    SignupComponent.prototype.showHide = function (value) {
        console.log('show hide value');
        console.log(value);
        if (value == true) {
            console.log('sign up');
            this.status = "initial";
            this.isShow = false;
            this.SignupForm.value.status = this.status;
        }
        else {
            console.log('sign in');
            this.status = "login";
            this.isShow = true;
            this.SignupForm.value.status = this.status;
        }
    };
    // public operatorType() {
    //      	this.SignupService.getOperatorTypes().subscribe(
    //     (res: any) => {
    //       	console.log(res);
    // 		this.operators = res; 
    // 		console.log('oprators :');
    //       	console.log(this.operators.operatortypes);
    //       	this.operatorstypes = this.operators.operatortypes;
    //       	// console.log(this.operators.operatortypes);
    // 		// Where you find the array res.data or res.data.data
    //     },
    //     error => {
    //       console.log('error');
    //       console.log(error);
    //     });
    //  	}
    SignupComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.SignupForm.value.status = this.status;
        console.log(this.SignupForm.value);
        if (this.SignupForm.invalid) {
            console.log('incorrect');
            return;
        }
        else {
            console.log('correct');
            this.isOn = false;
            // this.SignupForm.value.status = this.status;
            // this.SignupService.register(this.SignupForm.value)
            // .pipe(first())
            // .subscribe(
            //     data => {
            //     	this.signupResponse = data;
            //     	if(this.signupResponse.response.status == 'Failed'){
            //     		// this.alertService.error(this.signupResponse.response.message);
            //     		this.toastr.error(this.signupResponse.response.message);
            //     		this.router.navigate(['/']);
            //     	}
            //     	else{
            //     		this.isOn = false;
            //     		//get otp in response store int one variable
            //         	this.tempotp = atob(atob(this.signupResponse.response.otp));
            //         	this.responeOTP = parseInt(this.tempotp);
            //     	 	this.resendOTPTimer();
            //     	}
            //     },
            //     error => {
            //     	console.log('error');
            //     	// this.alertService.error(error);
            //     });
        }
    };
    SignupComponent.prototype.verifyOtp = function () {
        this.submitted1 = true;
        this.otpInput = parseInt(this.verifyOtpForm.value.otp);
        console.log('signup form');
        console.log(this.SignupForm.value);
        // if(this.SignupForm.value.status=='login'){
        // 	this.verifyOtpForm.value.operator_state = this.SignupForm.value.status;
        // }else{
        // 	this.verifyOtpForm.value.operator_state = this.SignupForm.value.status;
        // }
        this.verifyOtpForm.value.operator_state = this.SignupForm.value.status;
        this.verifyOtpForm.value.mobile = this.SignupForm.value.mobile;
        if (this.verifyOtpForm.invalid) {
            return;
        }
        else {
            this.router.navigate(['/myprofile']);
            // if(this.responeOTP != null)
            // {	if(this.responeOTP == this.otpInput)
            // 	{
            // 		console.log('otp correct');
            // 		//web service to check mobile is verified but no operator has been selected
            // 		this.SignupService.checkOperatorState(this.verifyOtpForm.value)
            //         .pipe(first())
            //         .subscribe(
            //             data => {
            //             	this.userState = data;
            //             	console.log('response :');
            //             	console.log(this.userState);
            //             	if(this.userState.statusCode == 200){
            //             		localStorage.setItem('constantVariable.currentUserStates',JSON.stringify(this.userState));
            //         			this.router.navigate(['/select-operator-type']);
            //             	}else{
            //             		this.verifyOtpForm.value.registerId = this.signupResponse.response.id;
            // 					console.log(this.verifyOtpForm.value);
            // 					this.SignupService.register(this.verifyOtpForm.value)
            // 		            .pipe(first())
            // 		            .subscribe(
            // 		                data => {
            // 		                	console.log('register response before auto login');
            // 		                	this.userResponse = data;
            // 		                	console.log(this.userResponse);
            // 		                	this.mobile = parseInt(this.userResponse.response.mobile);
            // 		                	this.token = this.userResponse.response.token;
            // 		                	if(this.userResponse.response.token){
            // 		                		if(this.userResponse.response.operator_state=='initial'){
            // 		                			localStorage.setItem('constantVariable.currentUserStates',JSON.stringify(this.userResponse.response));
            // 		                			console.log('select operator type');
            // 		                			this.router.navigate(['/select-operator-type']);
            // 		                		}else
            // 		                		{
            // 	                				console.log('redirect to profile');
            // 	                				localStorage.setItem('constantVariable.currentUser', JSON.stringify(this.userResponse));
            // 			                        localStorage.setItem('constantVariable.isLoggedIn', 'true');
            // 			                        localStorage.setItem('constantVariable.token', this.userResponse.response.token);
            // 	                				this.router.navigate(['/myprofile']);
            // 		                		}
            // 			            	}
            // 			            	else{
            // 			            		// this.alertService.error('Something went wrong');
            // 			            		this.toastr.error('Something went wrong,no token found');
            // 			            		this.router.navigate(['/']);
            // 			            	}
            // 		                },
            // 		                error => {
            // 		                	// this.alertService.error('Something went wrong,Try Again.');
            // 		                	this.toastr.error('Something went wrong,in register error');
            // 		                	this.router.navigate(['/']);
            // 		                });
            //             	}
            //             },
            //             error => {
            //             	this.alertService.error('Something went wrong,Try Again.');
            //         		this.router.navigate(['/']);
            //         	});
            // 		/*
            // 			this.verifyOtpForm.value.registerId = this.signupResponse.response.id;
            // 			console.log(this.verifyOtpForm.value);
            // 			this.SignupService.register(this.verifyOtpForm.value)
            //             .pipe(first())
            //             .subscribe(
            //                 data => {
            //                 	console.log('register response before auto login');
            //                 	this.userResponse = data;
            //                 	console.log(this.userResponse);
            //                 	this.mobile = parseInt(this.userResponse.response.mobile);
            //                 	this.token = this.userResponse.response.token;
            //                 	if(this.userResponse.response.token){
            //                 		if(this.userResponse.response.operator_state=='initial'){
            //                 			localStorage.setItem('constantVariable.currentUserStates',JSON.stringify(this.userResponse.response));
            //                 			this.router.navigate(['/select-operator-type']);
            //                 		}else
            //                 		{
            //             				this.router.navigate(['/myprofile']);
            //                 		}
            // 	            	}
            // 	            	else{
            // 	            		// this.alertService.error('Something went wrong');
            // 	            		this.toastr.error('Something went wrong');
            // 	            		this.router.navigate(['/']);
            // 	            	}
            //                 },
            //                 error => {
            //                 	// this.alertService.error('Something went wrong,Try Again.');
            //                 	this.toastr.error('Something went wrong');
            //                 	this.router.navigate(['/signup']);
            //                 });
            //     	*/
            // 	}else{
            // 		console.log('incorrect otp');
            // 	}
            // }
        }
    };
    SignupComponent.prototype.resendOTPTimer = function () {
        var _this = this;
        this.timeremain = 30;
        var downloadTimer = setInterval(function () {
            _this.timeremain--;
            // console.log(this.timeremain);
            if (_this.timeremain == 0) {
                clearInterval(downloadTimer);
            }
            else {
                //show count down otp
                _this.timeremain;
            }
        }, 1000);
    };
    SignupComponent.prototype.resendOTP = function () {
        var _this = this;
        this.SignupForm.value.otptype = 'resendotp';
        this.SignupService.register(this.SignupForm.value)
            .pipe(operators_1.first())
            .subscribe(function (data) {
            console.log(data);
            _this.isOn = false;
            //get otp in response store int one variable
            // this.responeOTP = 8989;
            _this.tempotp = atob(atob(_this.signupResponse.response.otp));
            _this.responeOTP = parseInt(_this.tempotp);
            _this.resendOTPTimer();
            // toaster success message
            // this.alertService.success('Registration successful', true);
            // this.router.navigate(['/login']);
        }, function (error) {
            console.log('error');
            // toaster error message
            // this.alertService.error(error);
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, signup_service_1.SignupService, router_1.ActivatedRoute, router_1.Router, authentication_service_1.AuthenticationService, alert_service_1.AlertService, ngx_toastr_1.ToastrService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map