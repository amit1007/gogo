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
var animations_1 = require("@angular/animations");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.collapseNav = "closed";
    }
    HeaderComponent.prototype.toggleCollapse = function () {
        // this.show = !this.show
        this.collapseNav = this.collapseNav == "open" ? 'closed' : 'open';
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css'],
            animations: [
                animations_1.trigger('collapseNav', [
                    animations_1.state('open', animations_1.style({
                        opacity: '1',
                        display: 'block',
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    animations_1.state('closed', animations_1.style({
                        opacity: '0',
                        display: 'none',
                        transform: 'translate3d(0, -100%, 0)'
                    })),
                    animations_1.transition('closed => open', animations_1.animate('200ms ease-in')),
                    animations_1.transition('open => closed', animations_1.animate('100ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map