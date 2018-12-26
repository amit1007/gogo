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
var Subject_1 = require("rxjs/Subject");
var ngx_webcam_1 = require("ngx-webcam");
var PersonalInformationComponent = /** @class */ (function () {
    function PersonalInformationComponent(formBuilder, SignupService, route, router, authenticationService, alertService, myprofileService, toastr) {
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
        this.is_v_tc = false;
        this.is_b_tc = false;
        this.isLoaderAvailable = false;
        this.is_personal_tc = false;
        //for camera
        this.showWebcam = true;
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {};
        this.errors = [];
        // latest snapshot
        this.webcamImage = null;
        // webcam snapshot trigger
        this.trigger = new Subject_1.Subject();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new Subject_1.Subject();
    }
    PersonalInformationComponent.prototype.triggerSnapshot = function () {
        this.trigger.next();
    };
    PersonalInformationComponent.prototype.toggleWebcam = function () {
        this.showWebcam = !this.showWebcam;
    };
    PersonalInformationComponent.prototype.handleInitError = function (error) {
        this.errors.push(error);
    };
    PersonalInformationComponent.prototype.showNextWebcam = function (directionOrDeviceId) {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    };
    PersonalInformationComponent.prototype.handleImage = function (webcamImage) {
        console.info('received webcam image', webcamImage);
        this.webcamImage = webcamImage;
    };
    PersonalInformationComponent.prototype.cameraWasSwitched = function (deviceId) {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    };
    Object.defineProperty(PersonalInformationComponent.prototype, "triggerObservable", {
        get: function () {
            return this.trigger.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonalInformationComponent.prototype, "nextWebcamObservable", {
        get: function () {
            return this.nextWebcam.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    PersonalInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        //for camera
        ngx_webcam_1.WebcamUtil.getAvailableVideoInputs()
            .then(function (mediaDevices) {
            _this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
        // console.log('In my profile componenet');
        this.currentuser = localStorage.getItem('constantVariable.currentUser');
        // console.log(JSON.parse(this.currentuser));
        if (this.currentuser) {
            // console.log('user is logged in to dashboard');
            this.loggedInUser = JSON.parse(this.currentuser);
            this.userid = this.loggedInUser.response.id;
            // get current user detail by his id
            this.myprofileService.getPersonalInfo(this.userid)
                .pipe(operators_1.first())
                .subscribe(function (data) {
                _this.userData = data;
                console.log('user logged in data');
                console.log(_this.userData);
                console.log('user result');
                console.log(_this.userData.response.Users);
                _this.personalInfoForm.patchValue(_this.userData.response.Users);
                //  	if(this.personalInfoResponse.response.status == 'success'){
                //  		 this.alertService.success('Personal information saved successful', true);
                // this.router.navigate(['/myprofile']);
                //  	}
            }, function (error) {
                console.log('error');
                // this.alertService.error('Something went wrong.');
                // this.alertService.error(error);
            });
        }
        //*********** Personal Information **********************//
        this.personalInfoForm = this.formBuilder.group({
            op_first_name: ['', [forms_1.Validators.required, forms_1.Validators.pattern(this.unamePattern)]],
            op_last_name: ['', [forms_1.Validators.required,]],
            // op_password: ['', [ Validators.required, Validators.pattern(this.pwdPattern)]],
            op_mobile_no: ['', [forms_1.Validators.required, forms_1.Validators.pattern(this.mobnumPattern)]],
            op_alternative_mobile_checbox: this.formBuilder.control(false),
            op_alternative_mobile_no: ['', [forms_1.Validators.pattern(this.mobnumPattern)]],
            op_email: ['', [forms_1.Validators.required, forms_1.Validators.pattern(this.emailPattern)]],
            op_gender: ['', forms_1.Validators.required],
            op_dob: '',
            op_adhar_card_no: [],
            op_pan_no: '',
            op_pet_name: this.formBuilder.control(''),
            op_address_line_1: ['', forms_1.Validators.required],
            op_address_line_2: this.formBuilder.control(''),
            op_address_line_3: this.formBuilder.control(''),
            op_address_pin_code: ['', forms_1.Validators.required],
            op_landmark: this.formBuilder.control(''),
            op_address_city: ['1', forms_1.Validators.required],
            op_address_state: ['27', forms_1.Validators.required],
            op_type: ['', forms_1.Validators.required],
            status: this.formBuilder.control('login'),
            id: this.formBuilder.control(this.userid),
            op_profile: '',
            // agree_terms_condition: ['', Validators.required]
            agree_terms_condition: this.formBuilder.control(''),
            profile_pic_arr: this.formBuilder.control(null),
            veh_driving_licence_no: ['', forms_1.Validators.required],
            veh_licence_validity: ['', forms_1.Validators.required],
        });
    };
    PersonalInformationComponent.prototype.adharValidation = function () {
        console.log('in adhar validation function');
    };
    Object.defineProperty(PersonalInformationComponent.prototype, "p", {
        // convenience getter for easy access to form fields Personal Information
        get: function () { return this.personalInfoForm.controls; },
        enumerable: true,
        configurable: true
    });
    PersonalInformationComponent.prototype.check_personal_terms_condition = function () {
        console.log('clicked vehicle t&c');
        this.is_personal_tc = true;
    };
    PersonalInformationComponent.prototype.changeValue = function (value) {
        this.personalInfoForm.value.op_alternative_mobile_checbox = value;
        if (value == true) {
            this.sameMobile = true;
            this.personalInfoForm.value.op_alternative_mobile_checbox = this.personalInfoForm.value.op_mobile_no;
        }
        else {
            this.sameMobile = false;
        }
    };
    PersonalInformationComponent.prototype.changeTCondition = function (value) {
        console.log('check personal terms and condition');
        console.log(value);
        this.personalInfoForm.value.agree_terms_condition = value;
    };
    PersonalInformationComponent.prototype.onFileChange = function (event) {
        this.selectedFile = event.target.files;
        console.log(this.selectedFile);
        this.filename = this.selectedFile.item(0);
        this.personalInfoForm.value.op_profile = this.filename.name;
        this.personalInfoForm.value.profile_pic_arr = event.target.files;
        console.log('file details');
        console.log(event.target.files);
        console.log('profile filename');
        console.log(this.personalInfoForm.value.op_profile);
    };
    PersonalInformationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.personalInfoForm.value);
        console.log(this.personalInfoForm.value.op_dob);
        if (this.personalInfoForm.invalid) {
            console.log('incorrect');
            console.log(this.personalInfoForm.invalid);
            return;
        }
        else {
            console.log('save personal information');
            console.log(this.personalInfoForm.value);
            this.personalInfoForm.value.status = 'login';
            this.personalInfoForm.value.id = this.userid;
            // this.upload();
            this.myprofileService.savePersonalInfo(this.personalInfoForm.value)
                .pipe(operators_1.first())
                .subscribe(function (data) {
                _this.personalInfoResponse = data;
                if (_this.personalInfoResponse.response.status == 'success') {
                    // this.alertService.success('Personal information saved successful', true);
                    _this.toastr.success('Personal information saved successfully.', 'Great!');
                    // this.router.navigate(['/myprofile']);
                    _this.router.navigate(['/vehicle']);
                }
            }, function (error) {
                console.log('error');
                _this.toastr.error('Something went wrong', 'Oops!');
                // this.alertService.error('Something went wrong.');
            });
        }
    };
    PersonalInformationComponent = __decorate([
        core_1.Component({
            selector: 'app-personal-information',
            templateUrl: './personal-information.component.html',
            styleUrls: ['./personal-information.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, signup_service_1.SignupService, router_1.ActivatedRoute, router_1.Router, authentication_service_1.AuthenticationService, alert_service_1.AlertService, myprofile_service_1.MyprofileService, ngx_toastr_1.ToastrService])
    ], PersonalInformationComponent);
    return PersonalInformationComponent;
}());
exports.PersonalInformationComponent = PersonalInformationComponent;
//# sourceMappingURL=personal-information.component.js.map