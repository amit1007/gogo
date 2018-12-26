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
var router_1 = require("@angular/router");
var ngx_toastr_1 = require("ngx-toastr");
var NotificationDetailsComponent = /** @class */ (function () {
    function NotificationDetailsComponent(toastr, router) {
        this.toastr = toastr;
        this.router = router;
    }
    NotificationDetailsComponent.prototype.ngOnInit = function () {
    };
    NotificationDetailsComponent.prototype.acceptBid = function () {
        // this.toastr.success('Thank You', 'All the Best!');
        this.router.navigate(['/accept-bid-details']);
    };
    NotificationDetailsComponent.prototype.cancelBid = function () {
        console.log('cancel bid');
        this.toastr.info('You canceled bid!');
        this.router.navigate(['/dashbord']);
    };
    NotificationDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-notification-details',
            templateUrl: './notification-details.component.html',
            styleUrls: ['./notification-details.component.css']
        }),
        __metadata("design:paramtypes", [ngx_toastr_1.ToastrService, router_1.Router])
    ], NotificationDetailsComponent);
    return NotificationDetailsComponent;
}());
exports.NotificationDetailsComponent = NotificationDetailsComponent;
//# sourceMappingURL=notification-details.component.js.map