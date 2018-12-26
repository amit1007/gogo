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
var modal_service_1 = require("../../services/modal/modal.service");
var RouteMapComponent = /** @class */ (function () {
    function RouteMapComponent(modalService) {
        this.modalService = modalService;
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.urls = new Array();
    }
    RouteMapComponent.prototype.ngOnInit = function () {
        //this.openModal('custom-model-myOTP');
        document.getElementById('call-modal-btn').click();
    };
    RouteMapComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    RouteMapComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    RouteMapComponent.prototype.onFileChanged = function (event) {
        var _this = this;
        this.urls = [];
        var files = event.target.files;
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.urls.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
    };
    RouteMapComponent = __decorate([
        core_1.Component({
            selector: 'app-route-map',
            templateUrl: './route-map.component.html',
            styleUrls: ['./route-map.component.css']
        }),
        __metadata("design:paramtypes", [modal_service_1.ModalService])
    ], RouteMapComponent);
    return RouteMapComponent;
}());
exports.RouteMapComponent = RouteMapComponent;
//# sourceMappingURL=route-map.component.js.map