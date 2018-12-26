"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var alert_component_1 = require("./_directives/alert/alert.component");
var alert_service_1 = require("./services/alert/alert.service");
var modal_service_1 = require("./services/modal/modal.service");
var http_1 = require("@angular/common/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ngx_toastr_1 = require("ngx-toastr");
var angular_6_datatable_1 = require("angular-6-datatable");
var core_2 = require("@agm/core");
var common_1 = require("@angular/common");
var ngx_webcam_1 = require("ngx-webcam");
// import { /* FormWizardModule } from 'angular2-wizard';*/
//add componenets here
var app_component_1 = require("./app.component");
var signup_component_1 = require("./Components/signup/signup.component");
var app_routing_module_1 = require("./app-routing.module");
var right_sidebar_component_1 = require("./right-sidebar/right-sidebar.component");
var my_profile_component_1 = require("./Components/my-profile/my-profile.component");
var dashbord_component_1 = require("./Components/dashbord/dashbord.component");
var my_rides_component_1 = require("./Components/my-rides/my-rides.component");
var total_rides_component_1 = require("./Components/total-rides/total-rides.component");
var successful_rides_component_1 = require("./Components/successful-rides/successful-rides.component");
var footer_component_1 = require("./footer/footer.component");
var booked_rides_component_1 = require("./Components/booked-rides/booked-rides.component");
var rejected_rides_component_1 = require("./Components/rejected-rides/rejected-rides.component");
var cancelled_rides_component_1 = require("./Components/cancelled-rides/cancelled-rides.component");
var login_component_1 = require("./Components/login/login.component");
var higher_bid_component_1 = require("./Components/higher-bid/higher-bid.component");
var route_map_component_1 = require("./Components/route-map/route-map.component");
var notification_details_component_1 = require("./Components/notification-details/notification-details.component");
var delivery_details_component_1 = require("./Components/delivery-details/delivery-details.component");
var invoice_component_1 = require("./Components/invoice/invoice.component");
var header_component_1 = require("./header/header.component");
var left_sidebar_component_1 = require("./left-sidebar/left-sidebar.component");
var animations_1 = require("@angular/platform-browser/animations");
var my_vehicles_component_1 = require("./Components/my-vehicles/my-vehicles.component");
var my_drivers_component_1 = require("./Components/my-drivers/my-drivers.component");
var add_driver_component_1 = require("./Components/add-driver/add-driver.component");
var add_vehicle_component_1 = require("./Components/add-vehicle/add-vehicle.component");
var accept_bid_details_component_1 = require("./Components/accept-bid-details/accept-bid-details.component");
var select_operator_type_component_1 = require("./Components/select-operator-type/select-operator-type.component");
var personal_information_component_1 = require("./Components/personal-information/personal-information.component");
var vehicle_information_component_1 = require("./Components/vehicle-information/vehicle-information.component");
var business_information_component_1 = require("./Components/business-information/business-information.component");
var payment_information_component_1 = require("./Components/payment-information/payment-information.component");
var add_more_vehicle_component_1 = require("./Components/add-more-vehicle/add-more-vehicle.component");
var add_more_driver_component_1 = require("./Components/add-more-driver/add-more-driver.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                signup_component_1.SignupComponent,
                right_sidebar_component_1.RightSidebarComponent,
                my_profile_component_1.MyProfileComponent,
                dashbord_component_1.DashbordComponent,
                my_rides_component_1.MyRidesComponent,
                total_rides_component_1.TotalRidesComponent,
                successful_rides_component_1.SuccessfulRidesComponent,
                footer_component_1.FooterComponent,
                booked_rides_component_1.BookedRidesComponent,
                rejected_rides_component_1.RejectedRidesComponent,
                cancelled_rides_component_1.CancelledRidesComponent,
                login_component_1.LoginComponent,
                higher_bid_component_1.HigherBidComponent,
                route_map_component_1.RouteMapComponent,
                notification_details_component_1.NotificationDetailsComponent,
                delivery_details_component_1.DeliveryDetailsComponent,
                invoice_component_1.InvoiceComponent,
                header_component_1.HeaderComponent,
                left_sidebar_component_1.LeftSidebarComponent,
                alert_component_1.AlertComponent,
                my_vehicles_component_1.MyVehiclesComponent,
                my_drivers_component_1.MyDriversComponent,
                add_driver_component_1.AddDriverComponent,
                add_vehicle_component_1.AddVehicleComponent,
                accept_bid_details_component_1.AcceptBidDetailsComponent,
                select_operator_type_component_1.SelectOperatorTypeComponent,
                personal_information_component_1.PersonalInformationComponent,
                vehicle_information_component_1.VehicleInformationComponent,
                business_information_component_1.BusinessInformationComponent,
                payment_information_component_1.PaymentInformationComponent,
                add_more_vehicle_component_1.AddMoreVehicleComponent,
                add_more_driver_component_1.AddMoreDriverComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule, ng_bootstrap_1.NgbModule, animations_1.BrowserAnimationsModule, ngx_webcam_1.WebcamModule, ngx_toastr_1.ToastrModule.forRoot({
                    timeOut: 10000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true,
                }), angular_6_datatable_1.DataTableModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyA3IPPYh8kevGnqsrWqJVPBxBo2zhvml9U'
                }),
            ],
            providers: [alert_service_1.AlertService, modal_service_1.ModalService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map