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
var AddMoreDriverComponent = /** @class */ (function () {
    function AddMoreDriverComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.is_v_tc = false;
        this.is_veh_tc = false;
        this.urls = new Array();
        this.Files = [];
        this.FileName = [];
    }
    AddMoreDriverComponent.prototype.ngOnInit = function () {
        this.adddriverForm = this.formBuilder.group({
            itemRows: this.formBuilder.array([this.initDriverItemRows()]),
            veh_terms_condition: [''],
        });
    };
    AddMoreDriverComponent.prototype.initDriverItemRows = function () {
        return this.formBuilder.group({
            // list all your form controls here, which belongs to your form array
            driver_name: [''],
            driver_mob_num: [''],
            driver_lic_num: [''],
            driver_lic_vali_num: [''],
            driver_aadhar_num: [''],
            up_profile: [''],
            veh_doc_pan: [''],
            veh_upload_adhar: [''],
            veh_upload_driving_licence: [''],
        });
    };
    AddMoreDriverComponent.prototype.createForm = function () {
        this.adddriverForm = this.formBuilder.group({
            itemRows: this.formBuilder.array([])
        });
        this.adddriverForm.setControl('itemRows', this.formBuilder.array([]));
    };
    Object.defineProperty(AddMoreDriverComponent.prototype, "itemRows", {
        get: function () {
            return this.adddriverForm.get('itemRows');
        },
        enumerable: true,
        configurable: true
    });
    AddMoreDriverComponent.prototype.addNewRow = function () {
        // control refers to your formarray
        var control = this.adddriverForm.controls['itemRows'];
        // add new formgroup
        control.push(this.initDriverItemRows());
    };
    AddMoreDriverComponent.prototype.deleteRow = function (index) {
        // control refers to your formarray
        var control = this.adddriverForm.controls['itemRows'];
        // remove the chosen row
        control.removeAt(index);
    };
    AddMoreDriverComponent.prototype.changeVTCondition = function (value) {
        console.log('check vehicle terms and condition');
        console.log(value);
        if (value == true) {
            this.is_v_tc = true;
        }
        else {
            this.is_v_tc = false;
        }
    };
    AddMoreDriverComponent.prototype.check_veh_terms_condition = function () {
        console.log('clicked vehicle t&c');
        this.is_veh_tc = true;
    };
    AddMoreDriverComponent = __decorate([
        core_1.Component({
            selector: 'app-add-more-driver',
            templateUrl: './add-more-driver.component.html',
            styleUrls: ['./add-more-driver.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], AddMoreDriverComponent);
    return AddMoreDriverComponent;
}());
exports.AddMoreDriverComponent = AddMoreDriverComponent;
//# sourceMappingURL=add-more-driver.component.js.map