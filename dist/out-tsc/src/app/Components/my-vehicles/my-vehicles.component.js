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
var MyVehiclesComponent = /** @class */ (function () {
    function MyVehiclesComponent() {
    }
    MyVehiclesComponent.prototype.ngOnInit = function () {
        this.data = [
            { 'veh_owner_name': 'Anil', 'veh_name': 'Tata Signa', 'veh_type': 'open', 'd_working_hours_to': '7 pm', 'd_working_hours_from': '7 am' },
            { 'veh_owner_name': 'Ankit', 'veh_name': 'Tata Signa', 'veh_type': 'close', 'd_working_hours_to': '7 am', 'd_working_hours_from': '2 am' },
            { 'veh_owner_name': 'Sunil', 'veh_name': 'Tata Prima', 'veh_type': 'Tarpaulin covered', 'd_working_hours_to': '9 pm', 'd_working_hours_from': '8 pm' },
            { 'veh_owner_name': 'Alok', 'veh_name': 'Paiggio Appe', 'veh_type': 'open', 'd_working_hours_to': '10 pm', 'd_working_hours_from': '4 am' },
            { 'veh_owner_name': 'Tinku', 'veh_name': 'Mini cargo ', 'veh_type': 'Tarpaulin covered', 'd_working_hours_to': '7 pm', 'd_working_hours_from': '1 pm' },
            { 'veh_owner_name': 'XYZ', 'veh_name': 'Loading auto', 'veh_type': 'close', 'd_working_hours_to': '12 pm', 'd_working_hours_from': '9 am' },
            { 'veh_owner_name': 'Mahesh', 'veh_name': 'Maxima Cargo', 'veh_type': 'close', 'd_working_hours_to': '7 pm', 'd_working_hours_from': '7 am' },
            { 'veh_owner_name': 'erer', 'veh_name': 'Mahindra Alfa Plus', 'veh_type': 'open', 'd_working_hours_to': '6 pm', 'd_working_hours_from': '3 am' },
            { 'veh_owner_name': 'jhjh', 'veh_name': 'Tata Signa', 'veh_type': 'Tarpaulin covered', 'd_working_hours_to': '9 pm', 'd_working_hours_from': '12 am' }
        ];
    };
    MyVehiclesComponent = __decorate([
        core_1.Component({
            selector: 'app-my-vehicles',
            templateUrl: './my-vehicles.component.html',
            styleUrls: ['./my-vehicles.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MyVehiclesComponent);
    return MyVehiclesComponent;
}());
exports.MyVehiclesComponent = MyVehiclesComponent;
//# sourceMappingURL=my-vehicles.component.js.map