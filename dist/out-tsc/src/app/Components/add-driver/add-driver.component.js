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
var AddDriverComponent = /** @class */ (function () {
    function AddDriverComponent(formBuilder, route, router, alertService, toastr) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.toastr = toastr;
        this.submitted = false;
        this.Islogin = false;
        this.unamePattern = '^[-\sa-zA-Z\s-]+$';
        this.onlynumberPattern = '^[0-9]\d*$';
        this.pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
        this.mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.onlyletterPattern = "/[^a-zA-Z]/g";
        this.bankIFSCPattern = '^[A-Za-z]{4}[a-zA-Z0-9]{7}$';
        this.onlytwoletterPattern = '/^[a-z]{2}$/i';
    }
    AddDriverComponent.prototype.ngOnInit = function () {
        this.addDriverForm = this.formBuilder.group({
            d_name: ['', forms_1.Validators.required],
            d_mobile: ['', [forms_1.Validators.pattern(this.mobnumPattern)]],
            d_num1: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2),]],
            d_num2: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            d_num3: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            d_num4: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            d_driver_licence_no: ['', forms_1.Validators.required],
            d_driving_validity: ['', forms_1.Validators.required],
            d_city: ['', [forms_1.Validators.required]],
            d_working_hours_to: ['', [forms_1.Validators.required]],
            d_working_hours_from: ['', [forms_1.Validators.required]],
            d_upload_pan: '',
            d_upload_adhar: '',
            d_upload_driving_licence: '',
            d_profileimage: '',
        });
    };
    Object.defineProperty(AddDriverComponent.prototype, "d", {
        // convenience getter for easy access to form fields Vehicle information
        get: function () { return this.addDriverForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddDriverComponent.prototype.addDriver = function () {
        this.submitted = true;
        console.log(this.addDriverForm.value);
        if (this.addDriverForm.invalid /* && this.is_v_tc==false */) {
            console.log('form add driver is incorrect');
            console.log(this.addDriverForm.invalid);
            return;
        }
        else {
            console.log('form add driver is correct');
        }
    };
    AddDriverComponent.prototype.getDriverProfile = function (event) {
        this.selectedFileArr = event.target.files;
        this.filename = this.selectedFileArr.item(0);
        this.addDriverForm.value.d_profileimage = this.filename.name;
    };
    AddDriverComponent = __decorate([
        core_1.Component({
            selector: 'app-add-driver',
            templateUrl: './add-driver.component.html',
            styleUrls: ['./add-driver.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, alert_service_1.AlertService, ngx_toastr_1.ToastrService])
    ], AddDriverComponent);
    return AddDriverComponent;
}());
exports.AddDriverComponent = AddDriverComponent;
//# sourceMappingURL=add-driver.component.js.map