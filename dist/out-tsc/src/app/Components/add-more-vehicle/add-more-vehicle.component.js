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
var alert_service_1 = require("../../services/alert/alert.service");
var myprofile_service_1 = require("../../services/myprofile/myprofile.service");
var ngx_toastr_1 = require("ngx-toastr");
var AddMoreVehicleComponent = /** @class */ (function () {
    function AddMoreVehicleComponent(formBuilder, SignupService, route, router, alertService, myprofileService, toastr) {
        this.formBuilder = formBuilder;
        this.SignupService = SignupService;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.myprofileService = myprofileService;
        this.toastr = toastr;
        this.submitted = false;
        this.is_v_tc = false;
        this.is_veh_tc = false;
        this.urls = new Array();
        this.Files = [];
        this.FileName = [];
        this.myCarFiles = [];
        this.myCarFilesImgName = [];
        this.submitted1 = false;
        this.totalfiles = [];
        this.totalFileName = [];
        this.lengthCheckToaddMore = 0;
    }
    AddMoreVehicleComponent.prototype.ngOnInit = function () {
        this.currentuser = localStorage.getItem('constantVariable.currentUser');
        if (this.currentuser) {
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
        this.addvehicleForm = this.formBuilder.group({
            itemRows: this.formBuilder.array([this.initVehicleItemRows()]),
            veh_terms_condition: [''],
            operator_type: this.formBuilder.control(this.operator_type),
            veh_op_id: this.formBuilder.control(this.userid),
        });
    };
    AddMoreVehicleComponent.prototype.initVehicleItemRows = function () {
        return this.formBuilder.group({
            // list all your form controls here, which belongs to your form array
            veh_wheel_type: [''],
            veh_model: ['', [forms_1.Validators.required]],
            veh_type: ['', [forms_1.Validators.required]],
            veh_num1: [''],
            veh_num2: [''],
            veh_num3: [''],
            veh_num4: [''],
            veh_city: ['', [forms_1.Validators.required]],
            veh_capacity: ['', [forms_1.Validators.required]],
            veh_dimension: ['', [forms_1.Validators.required]],
            veh_work_days_from: ['', [forms_1.Validators.required]],
            veh_work_days_to: ['', [forms_1.Validators.required]],
            veh_work_dt_from: ['', [forms_1.Validators.required]],
            veh_work_dt_to: ['', [forms_1.Validators.required]],
            // veh_images:[''],
            veh_images: [''],
            veh_registration_no: [''],
        });
    };
    // veh_working_days: ['', [ Validators.required]],
    // veh_working_from: ['', [ Validators.required]],
    // veh_working_to: ['', [ Validators.required]],
    // veh_images: [''],
    // upload_pan: [''],
    // upload_adhar: [''],
    // upload_driving_licence: [''],
    // veh_terms_condition : ['', [ ]],
    // veh_op_id : this.formBuilder.control(this.userid),
    // operator_type :this.formBuilder.control(this.operator_type),
    AddMoreVehicleComponent.prototype.createForm = function () {
        this.addvehicleForm = this.formBuilder.group({
            itemRows: this.formBuilder.array([])
        });
        this.addvehicleForm.setControl('itemRows', this.formBuilder.array([]));
    };
    Object.defineProperty(AddMoreVehicleComponent.prototype, "itemRows", {
        get: function () {
            return this.addvehicleForm.get('itemRows');
        },
        enumerable: true,
        configurable: true
    });
    AddMoreVehicleComponent.prototype.addNewRow = function () {
        // control refers to your formarray
        var control = this.addvehicleForm.controls['itemRows'];
        // add new formgroup
        control.push(this.initVehicleItemRows());
    };
    AddMoreVehicleComponent.prototype.deleteRow = function (index) {
        // control refers to your formarray
        var control = this.addvehicleForm.controls['itemRows'];
        // remove the chosen row
        control.removeAt(index);
    };
    AddMoreVehicleComponent.prototype.changeVTCondition = function (value) {
        console.log('check vehicle terms and condition');
        console.log(value);
        if (value == true) {
            this.is_v_tc = true;
        }
        else {
            this.is_v_tc = false;
        }
    };
    AddMoreVehicleComponent.prototype.check_veh_terms_condition = function () {
        console.log('clicked vehicle t&c');
        this.is_veh_tc = true;
    };
    AddMoreVehicleComponent.prototype.fileSelectionEvent = function (e, oldIndex) {
        var _this = this;
        console.log("oldIndex is ", oldIndex);
        console.log('file input', e.target.files[0]);
        if (e.target.files && e.target.files.length > 0) {
            for (var i = 0; i < e.target.files.length; i++) {
                var reader = new FileReader();
                reader.readAsDataURL(e.target.files[i]); // read file as data url
                reader.onload = function (event) {
                    // this.url = event.target.result;
                    _this.urls.push(event.target.result);
                };
                // this.totalfiles.push(e.target.files[i]);
                this.Files.push(e.target.files[i]);
                this.FileName.push(e.target.files[i].name);
                console.log('total files', this.totalfiles);
                console.log('total file name', this.FileName);
            }
        }
    };
    AddMoreVehicleComponent.prototype.goBack = function () {
        this.router.navigate(['/myprofile']);
    };
    AddMoreVehicleComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted1 = true;
        console.log(this.addvehicleForm.value);
        if (this.addvehicleForm.invalid /* && this.is_v_tc==false */) {
            console.log('incorrect');
            return;
        }
        else {
            console.log('correct');
            this.addvehicleForm.value.veh_registration_no = this.addvehicleForm.value.veh_num1 + this.addvehicleForm.value.veh_num2 + this.addvehicleForm.value.veh_num3 + this.addvehicleForm.value.veh_num4;
            var vehicle_car_images = [];
            var vehicle_car_names = [];
            for (var i = 0; i < this.myCarFiles.length; i++) {
                vehicle_car_images.push(this.myCarFiles[i]);
            }
            // this.addvehicleForm.value.vehicle_images = vehicle_car_images;
            this.addvehicleForm.value.veh_images = this.myCarFilesImgName;
            console.log('cars names');
            this.myprofileService.saveVehicleInfo(this.addvehicleForm.value)
                .pipe(operators_1.first())
                .subscribe(function (data) {
                _this.vehicleResponse = data;
                if (_this.vehicleResponse.response.status == 'success') {
                    // this.alertService.success('Vehicle information saved successfully', true);
                    _this.toastr.success('Vehicle information saved successfully.', 'Great!');
                    _this.router.navigate(['/add-more-driver']);
                }
            }, function (error) {
                console.log('error');
                _this.toastr.error('Something went wrong', 'Oops!');
                // this.alertService.error('Something went wrong.');
            });
        }
    };
    AddMoreVehicleComponent = __decorate([
        core_1.Component({
            selector: 'app-add-more-vehicle',
            templateUrl: './add-more-vehicle.component.html',
            styleUrls: ['./add-more-vehicle.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, signup_service_1.SignupService, router_1.ActivatedRoute, router_1.Router, alert_service_1.AlertService, myprofile_service_1.MyprofileService, ngx_toastr_1.ToastrService])
    ], AddMoreVehicleComponent);
    return AddMoreVehicleComponent;
}());
exports.AddMoreVehicleComponent = AddMoreVehicleComponent;
//# sourceMappingURL=add-more-vehicle.component.js.map