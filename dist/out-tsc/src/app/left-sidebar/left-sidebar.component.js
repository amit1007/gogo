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
var authentication_service_1 = require("../services/authentication/authentication.service");
var router_1 = require("@angular/router");
var LeftSidebarComponent = /** @class */ (function () {
    function LeftSidebarComponent(authenticationService, route, router) {
        this.authenticationService = authenticationService;
        this.route = route;
        this.router = router;
    }
    LeftSidebarComponent.prototype.ngOnInit = function () {
    };
    LeftSidebarComponent.prototype.LogOut = function () {
        // reset login status
        console.log('in logout function');
        this.authenticationService.logout();
    };
    LeftSidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-left-sidebar',
            templateUrl: './left-sidebar.component.html',
            styleUrls: ['./left-sidebar.component.css']
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.ActivatedRoute, router_1.Router])
    ], LeftSidebarComponent);
    return LeftSidebarComponent;
}());
exports.LeftSidebarComponent = LeftSidebarComponent;
//# sourceMappingURL=left-sidebar.component.js.map