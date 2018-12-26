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
var router_1 = require("@angular/router");
var ngx_toastr_1 = require("ngx-toastr");
var alert_service_1 = require("../../services/alert/alert.service");
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
var AddVehicleComponent = /** @class */ (function () {
    function AddVehicleComponent(formBuilder, route, router, alertService, toastr) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.toastr = toastr;
        this.submitted1 = false;
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
    AddVehicleComponent.prototype.ngOnInit = function () {
        this.vehicleInfoForm = this.formBuilder.group({
            veh_owner_name: ['', forms_1.Validators.required],
            veh_owner_mobile_no: ['', [forms_1.Validators.pattern(this.mobnumPattern)]],
            veh_name: ['', [forms_1.Validators.required]],
            veh_type: ['0', forms_1.Validators.required],
            veh_num1: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2),]],
            veh_num2: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            veh_num3: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            veh_num4: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            veh_registration_no: this.formBuilder.control(''),
            veh_driving_licence_no: ['', forms_1.Validators.required],
            veh_validity: ['', [forms_1.Validators.required]],
            veh_city: ['', [forms_1.Validators.required]],
            working_hours_from: ['', [forms_1.Validators.required]],
            working_hours_to: ['', [forms_1.Validators.required]],
            veh_images: '',
            // veh_images: ['', [ Validators.required]],
            veh_terms_condition: ['', []],
            veh_op_id: this.formBuilder.control(this.userid),
            vehicle_images: '',
            veh_doc_pan: '',
            veh_upload_adhar: '',
            veh_upload_driving_licence: '',
        });
    };
    Object.defineProperty(AddVehicleComponent.prototype, "v", {
        // convenience getter for easy access to form fields Vehicle information
        get: function () { return this.vehicleInfoForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddVehicleComponent.prototype.addVehicle = function () {
        this.submitted1 = true;
        console.log(this.vehicleInfoForm.value);
        if (this.vehicleInfoForm.invalid /* && this.is_v_tc==false */) {
            console.log('form add vehicle is incorrect');
            console.log(this.vehicleInfoForm.invalid);
            return;
        }
        else {
            console.log('form add vehicle is correct');
        }
    };
    AddVehicleComponent.prototype.getVehicleImages = function (e) {
        //console.log (e.target.files);
        for (var i = 0; i < e.target.files.length; i++) {
            this.myCarFiles.push(e.target.files[i]);
            this.myCarFilesImgName.push(e.target.files[i].name);
        }
        console.log('my uploaded car files names');
        console.log(this.myCarFilesImgName);
    };
    AddVehicleComponent.prototype.changeVTCondition = function (value) {
        console.log('check vehicle terms and condition');
        console.log(value);
        if (value == true) {
            this.is_v_tc = true;
        }
        else {
            this.is_v_tc = false;
        }
        this.vehicleInfoForm.value.veh_terms_condition = value;
    };
    AddVehicleComponent.prototype.check_veh_terms_condition = function () {
        console.log('clicked vehicle t&c');
        this.is_veh_tc = true;
    };
    AddVehicleComponent = __decorate([
        core_1.Component({
            selector: 'app-add-vehicle',
            templateUrl: './add-vehicle.component.html',
            styleUrls: ['./add-vehicle.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, alert_service_1.AlertService, ngx_toastr_1.ToastrService])
    ], AddVehicleComponent);
    return AddVehicleComponent;
}());
exports.AddVehicleComponent = AddVehicleComponent;
//# sourceMappingURL=add-vehicle.component.js.map