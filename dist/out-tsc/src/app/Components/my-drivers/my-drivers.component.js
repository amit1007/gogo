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
var MyDriversComponent = /** @class */ (function () {
    function MyDriversComponent() {
    }
    MyDriversComponent.prototype.ngOnInit = function () {
        this.data = [{ 'd_name': 'Anil', 'd_mobile': '992233678945', 'd_working_hours_from': '7 am', 'd_working_hours_to': '7 pm', 'city': 'pune, Mumbai' },
            { 'd_name': 'Ankit', 'd_mobile': '992233678945', 'd_working_hours_from': '5 am', 'd_working_hours_to': '7 pm', 'city': 'pune' },
            { 'd_name': 'Sunil', 'd_mobile': '992233778945', 'd_working_hours_from': '8 am', 'd_working_hours_to': '9 pm', 'city': 'pune' },
            { 'd_name': 'Alok', 'd_mobile': '992233678945', 'd_working_hours_from': '1 am', 'd_working_hours_to': '10 pm', 'city': 'pune' },
            { 'd_name': 'Tinku', 'd_mobile': '992233698945', 'd_working_hours_from': '4 am', 'd_working_hours_to': '7 pm', 'city': 'pune' },
            { 'd_name': 'XYZ', 'd_mobile': '992233678945', 'd_working_hours_from': '7 am', 'd_working_hours_to': '12 pm', 'city': 'pune, Mumbai' },
            { 'd_name': 'Mahesh', 'd_mobile': '992233678945', 'd_working_hours_from': '9 am', 'd_working_hours_to': '7 pm', 'city': 'pune' },
            { 'd_name': 'erer', 'd_mobile': '992233672945', 'd_working_hours_from': '7 am', 'd_working_hours_to': '6 pm', 'city': 'pune' },
            { 'd_name': 'jhjh', 'd_mobile': '992233675945', 'd_working_hours_from': '7 am', 'd_working_hours_to': '9 pm', 'city': 'pune' }
        ];
    };
    MyDriversComponent = __decorate([
        core_1.Component({
            selector: 'app-my-drivers',
            templateUrl: './my-drivers.component.html',
            styleUrls: ['./my-drivers.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MyDriversComponent);
    return MyDriversComponent;
}());
exports.MyDriversComponent = MyDriversComponent;
//# sourceMappingURL=my-drivers.component.js.map