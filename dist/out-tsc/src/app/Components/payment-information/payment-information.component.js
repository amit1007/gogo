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
var myprofile_service_1 = require("../../services/myprofile/myprofile.service");
var ngx_toastr_1 = require("ngx-toastr");
var PaymentInformationComponent = /** @class */ (function () {
    function PaymentInformationComponent(formBuilder, SignupService, route, router, authenticationService, alertService, myprofileService, toastr) {
        this.formBuilder = formBuilder;
        this.SignupService = SignupService;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.myprofileService = myprofileService;
        this.toastr = toastr;
        this.isTrue = false;
        this.submitted = false;
        this.submitted1 = false;
        this.submitted2 = false;
        this.is_bank_submitted = false;
        this.Islogin = false;
        this.unamePattern = '^[-\sa-zA-Z\s-]+$';
        this.onlynumberPattern = '^[0-9]\d*$';
        this.pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
        this.mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.onlyletterPattern = "/[^a-zA-Z]/g";
        this.bankIFSCPattern = '^[A-Za-z]{4}[a-zA-Z0-9]{7}$';
        this.onlytwoletterPattern = '/^[a-z]{2}$/i';
        this.sameMobile = false;
        this.myCarFiles = [];
        this.myCarFilesImgName = [];
        this.is_v_tc = false;
        this.is_b_tc = false;
        this.isLoaderAvailable = false;
        this.is_tc = false;
        this.is_veh_tc = false;
        this.is_personal_tc = false;
        this.is_bank_tc = false;
    }
    PaymentInformationComponent.prototype.ngOnInit = function () {
        console.log('In my profile componenet');
        this.currentuser = localStorage.getItem('constantVariable.currentUser');
        console.log(JSON.parse(this.currentuser));
        if (this.currentuser) {
            console.log('user is logged in to dashboard');
            this.loggedInUser = JSON.parse(this.currentuser);
            this.userid = this.loggedInUser.response.id;
            // get current user detail by his id
            /*
            this.myprofileService.getPersonalInfo(this.userid)
            .pipe(first())
            .subscribe(
                data => {
                    this.userData = data;
                    console.log('user logged in data');
                    console.log(this.userData);
               //  	if(this.personalInfoResponse.response.status == 'success'){
               //  		 this.alertService.success('Personal information saved successful', true);
                        // this.router.navigate(['/myprofile']);
               //  	}
                },
                error => {
                    console.log('error');
                    this.alertService.error('Something went wrong.');
                    // this.alertService.error(error);
                });
            */
        }
        this.bankInfoForm = this.formBuilder.group({
            op_name: ['', [forms_1.Validators.required, forms_1.Validators.pattern(this.unamePattern)]],
            op_bank_name: ['', [forms_1.Validators.required, forms_1.Validators.pattern(this.unamePattern)]],
            op_bank_branch: ['', forms_1.Validators.required],
            op_bank_ifsc: ['', [forms_1.Validators.required, forms_1.Validators.pattern(this.bankIFSCPattern)]],
            //op_bank_wallet: ['', Validators.required],
            op_bank_account_number: ['', forms_1.Validators.required],
            id: this.formBuilder.control(this.userid),
            bank_agree_terms_condition: ['', forms_1.Validators.required],
            op_deposite: [''],
            op_subscription: [''],
            op_paymentmode: [''],
        });
    };
    Object.defineProperty(PaymentInformationComponent.prototype, "bb", {
        get: function () { return this.bankInfoForm.controls; },
        enumerable: true,
        configurable: true
    });
    PaymentInformationComponent.prototype.changeBankCondition = function (value) {
        console.log('check personal terms and condition');
        console.log(value);
        this.bankInfoForm.value.agree_terms_condition = value;
    };
    PaymentInformationComponent.prototype.check_bank_terms_condition = function () {
        console.log('clicked vehicle t&c');
        this.is_bank_tc = true;
    };
    PaymentInformationComponent.prototype.onSubmitBankInfo = function () {
        var _this = this;
        this.is_bank_submitted = true; // this.submittedvehicle = true;
        if (this.bankInfoForm.invalid) {
            console.log('form bank is incorrect');
            console.log(this.bankInfoForm.invalid);
            return;
        }
        else {
            console.log('form bank is correct');
            this.bankInfoForm.value.id = this.userid;
            console.log(this.bankInfoForm.value);
            this.myprofileService.saveBankInfo(this.bankInfoForm.value)
                .pipe(operators_1.first())
                .subscribe(function (data) {
                _this.personalInfoResponse = data;
                if (_this.personalInfoResponse.response.status == 'success') {
                    _this.toastr.success('Bank information saved successfully.', 'Great!');
                    _this.router.navigate(['/myprofile']);
                    // this.alertService.success('Bank information saved successful', true);
                }
            }, function (error) {
                console.log('error');
                _this.toastr.error('Something went wrong', 'Oops!');
                // this.alertService.error('Something went wrong.');
            });
        }
    };
    PaymentInformationComponent.prototype.onSearchChange = function (searchValue) {
        console.log(searchValue);
        if (searchValue == "1: 1") {
            this.content = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
        }
        else {
            this.content = 'Some Content';
        }
    };
    PaymentInformationComponent = __decorate([
        core_1.Component({
            selector: 'app-payment-information',
            templateUrl: './payment-information.component.html',
            styleUrls: ['./payment-information.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, signup_service_1.SignupService, router_1.ActivatedRoute, router_1.Router, authentication_service_1.AuthenticationService, alert_service_1.AlertService, myprofile_service_1.MyprofileService, ngx_toastr_1.ToastrService])
    ], PaymentInformationComponent);
    return PaymentInformationComponent;
}());
exports.PaymentInformationComponent = PaymentInformationComponent;
//# sourceMappingURL=payment-information.component.js.map