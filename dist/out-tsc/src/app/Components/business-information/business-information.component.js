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
var BusinessInformationComponent = /** @class */ (function () {
    function BusinessInformationComponent(formBuilder, SignupService, route, router, authenticationService, alertService, myprofileService, toastr) {
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
    BusinessInformationComponent.prototype.ngOnInit = function () {
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
        this.businessInfoForm = this.formBuilder.group({
            op_bu_name: ['', forms_1.Validators.required],
            op_bu_address_line_1: ['', [forms_1.Validators.required]],
            op_bu_address_line_2: '',
            op_bu_address_line_3: '',
            op_bu_address_pin_code: ['', [forms_1.Validators.required]],
            op_bu_landmark: ['', [forms_1.Validators.required]],
            op_bu_address_city: ['1', forms_1.Validators.required],
            op_bu_address_state: ['27', forms_1.Validators.required],
            op_bu_gstn_no: ['', [forms_1.Validators.required]],
            op_bu_email: ['', [forms_1.Validators.pattern(this.emailPattern)]],
            op_bu_pan_no: '',
            op_bu_base_charge: ['', [forms_1.Validators.required]],
            op_bu_per_km: ['', [forms_1.Validators.required]],
            op_bu_loader_available: ['', [forms_1.Validators.required]],
            op_bu_no_person: '',
            op_bu_charge_per_person: '',
            oprator_id: this.userid,
            bu_terms_condition: ['', forms_1.Validators.required],
        });
    };
    Object.defineProperty(BusinessInformationComponent.prototype, "b", {
        // convenience getter for easy access to form fields Vehicle information
        get: function () { return this.businessInfoForm.controls; },
        enumerable: true,
        configurable: true
    });
    BusinessInformationComponent.prototype.changeBusinessCondition = function (value) {
        console.log('check business terms and condition');
        console.log(value);
        if (value == true) {
            this.is_b_tc = true;
        }
        else {
            this.is_b_tc = false;
        }
        this.businessInfoForm.value.bu_terms_condition = value;
    };
    BusinessInformationComponent.prototype.check_terms_condition = function () {
        console.log('clicked business t&c');
        this.is_tc = true;
    };
    BusinessInformationComponent.prototype.checkloaderAvailability = function (value) {
        if (value == 1) {
            this.isLoaderAvailable = true;
        }
        else {
            this.isLoaderAvailable = false;
        }
    };
    BusinessInformationComponent.prototype.onSubmitBusinessInfo = function () {
        var _this = this;
        this.submitted2 = true;
        console.log(this.businessInfoForm.value);
        if (this.businessInfoForm.invalid) {
            console.log('incorrect');
            console.log(this.businessInfoForm.invalid);
            return;
        }
        else {
            console.log('save buiness information');
            this.businessInfoForm.value.oprator_id = this.userid;
            this.myprofileService.saveBusinessInfo(this.businessInfoForm.value)
                .pipe(operators_1.first())
                .subscribe(function (data) {
                _this.businessInfoResponse = data;
                if (_this.businessInfoResponse.response.status == 'success') {
                    _this.toastr.success('Buisness information saved successfully.', 'Great!');
                    _this.router.navigate(['/myprofile']);
                    // this.alertService.success('Buisness information saved successful', true);
                }
            }, function (error) {
                console.log('error');
                _this.toastr.error('Something went wrong', 'Oops!');
                // this.alertService.error('Something went wrong.');
            });
        }
    };
    BusinessInformationComponent = __decorate([
        core_1.Component({
            selector: 'app-business-information',
            templateUrl: './business-information.component.html',
            styleUrls: ['./business-information.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, signup_service_1.SignupService, router_1.ActivatedRoute, router_1.Router, authentication_service_1.AuthenticationService, alert_service_1.AlertService, myprofile_service_1.MyprofileService, ngx_toastr_1.ToastrService])
    ], BusinessInformationComponent);
    return BusinessInformationComponent;
}());
exports.BusinessInformationComponent = BusinessInformationComponent;
//# sourceMappingURL=business-information.component.js.map