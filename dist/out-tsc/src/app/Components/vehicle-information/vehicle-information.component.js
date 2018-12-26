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
var isNumeric_1 = require("rxjs/util/isNumeric");
var VehicleInformationComponent = /** @class */ (function () {
    function VehicleInformationComponent(formBuilder, SignupService, route, router, authenticationService, alertService, myprofileService, toastr) {
        this.formBuilder = formBuilder;
        this.SignupService = SignupService;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.myprofileService = myprofileService;
        this.toastr = toastr;
        this.isTrue = false;
        this.submitted1 = false;
        this.is_bank_submitted = false;
        this.isOwnerDriver = false;
        this.urls = new Array();
        //add more form
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
        this.isOwner = false;
        this.vehile_models_3 = ['Piaggio Ape Xtra LDx', 'Mahindra Alfa ', 'MAHINDRA ALFA PLUS'];
        this.vehile_models_4 = ['Piaggio Porter 700', 'Piaggio Porter 1000', 'Tata ACE (Chotta Haathi)', 'Tata ACE zip (Chotta Haathi)', 'Tata SUPER ACE MINT', 'Mahindra Supro Maxitruck', 'Mahindra Jeeto', 'Mahindra Bolero Pickup', 'Mahindra Maxximo', 'Mahindra Supro Mini truck', 'Force Trump 40', 'Force Trump 40 - Hi deck', 'Ashok Leyland DOST', 'Tata 407'];
        this.veh_model = [];
        debugger;
    }
    VehicleInformationComponent.prototype.ngOnInit = function () {
        console.log('In my profile componenet');
        this.currentuser = localStorage.getItem('constantVariable.currentUser');
        // this.currentuser = JSON.parse(this.currentuser);
        console.log(JSON.parse(this.currentuser));
        if (this.currentuser) {
            console.log('user is logged in to dashboard');
            this.loggedInUser = JSON.parse(this.currentuser);
            this.userid = this.loggedInUser.response.id;
            this.operator_type = this.loggedInUser.response.op_type_id;
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
        this.vehicleInfoForm = this.formBuilder.group({
            op_v_ow_driver: ['', forms_1.Validators.required],
            veh_owner_name: ['', forms_1.Validators.required],
            veh_owner_mobile_no: ['', [forms_1.Validators.pattern(this.mobnumPattern)]],
            veh_wheel_type: ['', forms_1.Validators.required],
            veh_model: ['', [forms_1.Validators.required]],
            veh_type: ['', [forms_1.Validators.required]],
            veh_capacity: ['', [forms_1.Validators.required]],
            veh_dimension: ['', [forms_1.Validators.required]],
            // veh_registration_no:['', [ Validators.required]],
            veh_num1: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(2)])],
            veh_num2: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            veh_num3: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            veh_num4: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            veh_city: ['', [forms_1.Validators.required]],
            veh_working_days_frm: ['', [forms_1.Validators.required]],
            veh_working_days_to: ['', [forms_1.Validators.required]],
            veh_working_from: ['', [forms_1.Validators.required]],
            veh_working_to: ['', [forms_1.Validators.required]],
            veh_images: [''],
            upload_pan: [''],
            upload_adhar: [''],
            upload_driving_licence: [" "],
            veh_terms_condition: ['', []],
            veh_op_id: this.formBuilder.control(this.userid),
            operator_type: this.formBuilder.control(this.operator_type),
        });
    };
    VehicleInformationComponent.prototype.getWheelModel = function (type) {
        console.log('get wheel type');
        console.log(type);
        if (type == 3) {
            this.veh_model = this.vehile_models_3;
        }
        else if (type == 4) {
            this.veh_model = this.vehile_models_4;
        }
        else {
        }
    };
    Object.defineProperty(VehicleInformationComponent.prototype, "v", {
        // convenience getter for easy access to form fields Vehicle information
        get: function () { return this.vehicleInfoForm.controls; },
        enumerable: true,
        configurable: true
    });
    VehicleInformationComponent.prototype.checkownership = function (value) {
        console.log('check owner');
        if (value == 1) {
            this.isOwner = true;
        }
        else {
            this.isOwner = false;
        }
    };
    VehicleInformationComponent.prototype.check_veh_terms_condition = function () {
        this.is_veh_tc = true;
    };
    VehicleInformationComponent.prototype.changeVTCondition = function (value) {
        if (value == true) {
            this.is_v_tc = true;
        }
        else {
            this.is_v_tc = false;
        }
        this.vehicleInfoForm.value.veh_terms_condition = value;
    };
    VehicleInformationComponent.prototype.onVehicleImagesSelect = function (event) {
        this.selectedVehicleFile = event.target.files;
        console.log(this.selectedVehicleFile);
        this.filename = this.selectedVehicleFile.item(0);
        this.vehicleInfoForm.value.veh_images = this.filename.name;
        // this.vehicleInfoForm.value.veh_images = event.target.files;
        console.log('file details');
        console.log(event.target.files);
        console.log('vehicle filename');
        console.log(this.vehicleInfoForm.value.veh_images);
        debugger;
    };
    VehicleInformationComponent.prototype.onSelectFile = function (e) {
        var _this = this;
        //console.log (e.target.files);
        if (e.target.files && e.target.files.length > 0) {
            for (var i = 0; i < e.target.files.length; i++) {
                //show img preview
                var reader = new FileReader();
                reader.readAsDataURL(e.target.files[i]); // read file as data url
                reader.onload = function (event) {
                    // this.url = event.target.result;
                    _this.urls.push(event.target.result);
                };
                this.myCarFiles.push(e.target.files[i]);
                this.myCarFilesImgName.push(e.target.files[i].name);
            }
        }
        debugger;
    };
    VehicleInformationComponent.prototype.onSubmitVehicleInfo = function () {
        var _this = this;
        this.submitted1 = true;
        console.log(this.vehicleInfoForm.value);
        this.vehicleInfoForm.value.op_v_ow_driver = this.isOwner;
        if (this.vehicleInfoForm.invalid /* && this.is_v_tc==false */) {
            console.log('form vehicle is incorrect');
            console.log(this.vehicleInfoForm.invalid);
            return;
        }
        else {
            console.log('form vehicle is correct');
            this.vehicleInfoForm.value.veh_registration_no = this.vehicleInfoForm.value.veh_num1 + this.vehicleInfoForm.value.veh_num2 + this.vehicleInfoForm.value.veh_num3 + this.vehicleInfoForm.value.veh_num4;
            this.vehicleInfoForm.value.id = this.userid;
            var vehicle_car_images = [];
            var vehicle_car_names = [];
            for (var i = 0; i < this.myCarFiles.length; i++) {
                vehicle_car_images.push(this.myCarFiles[i]);
            }
            // this.vehicleInfoForm.value.vehicle_images = vehicle_car_images;
            this.vehicleInfoForm.value.veh_images = this.myCarFilesImgName;
            console.log('cars names');
            this.myprofileService.saveVehicleInfo(this.vehicleInfoForm.value)
                .pipe(operators_1.first())
                .subscribe(function (data) {
                _this.vehicleInfoResponse = data;
                if (_this.vehicleInfoResponse.response.status == 'success') {
                    // this.alertService.success('Vehicle information saved successfully', true);
                    _this.toastr.success('Vehicle information saved successfully.', 'Great!');
                    _this.router.navigate(['/myprofile']);
                }
            }, function (error) {
                console.log('error');
                _this.toastr.error('Something went wrong', 'Oops!');
                // this.alertService.error('Something went wrong.');
            });
        }
    };
    VehicleInformationComponent.prototype.goBack = function () {
        this.router.navigate(['/myprofile']);
    };
    VehicleInformationComponent.prototype.onSearchChange = function (searchValue) {
        if (isNumeric_1.isNumeric(searchValue)) {
            this.testhtml = 'Invalid Registration Number Format';
        }
        else {
            this.testhtml = '';
        }
    };
    VehicleInformationComponent.prototype.onSearchChange1 = function (searchValue) {
        if (isNumeric_1.isNumeric(searchValue)) {
            this.testhtml1 = '';
        }
        else {
            this.testhtml1 = 'Invalid Registration Number Format';
        }
    };
    VehicleInformationComponent = __decorate([
        core_1.Component({
            selector: 'app-vehicle-information',
            templateUrl: './vehicle-information.component.html',
            styleUrls: ['./vehicle-information.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, signup_service_1.SignupService, router_1.ActivatedRoute, router_1.Router, authentication_service_1.AuthenticationService, alert_service_1.AlertService, myprofile_service_1.MyprofileService, ngx_toastr_1.ToastrService])
    ], VehicleInformationComponent);
    return VehicleInformationComponent;
}());
exports.VehicleInformationComponent = VehicleInformationComponent;
//# sourceMappingURL=vehicle-information.component.js.map