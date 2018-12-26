"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var signup_component_1 = require("./Components/signup/signup.component");
var my_profile_component_1 = require("./Components/my-profile/my-profile.component");
var dashbord_component_1 = require("./Components/dashbord/dashbord.component");
var my_rides_component_1 = require("./Components/my-rides/my-rides.component");
var total_rides_component_1 = require("./Components/total-rides/total-rides.component");
var successful_rides_component_1 = require("./Components/successful-rides/successful-rides.component");
var booked_rides_component_1 = require("./Components/booked-rides/booked-rides.component");
var rejected_rides_component_1 = require("./Components/rejected-rides/rejected-rides.component");
var cancelled_rides_component_1 = require("./Components/cancelled-rides/cancelled-rides.component");
var higher_bid_component_1 = require("./Components/higher-bid/higher-bid.component");
var route_map_component_1 = require("./Components/route-map/route-map.component");
var notification_details_component_1 = require("./Components/notification-details/notification-details.component");
var delivery_details_component_1 = require("./Components/delivery-details/delivery-details.component");
var invoice_component_1 = require("./Components/invoice/invoice.component");
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
var routes = [
    // { path: '', component: SignupComponent },
    //{ path:'login', component: LoginComponent },
    //{ path:'', component: MyProfileComponent },
    { path: '', component: signup_component_1.SignupComponent },
    //{ path:'signup', component: SignupComponent },
    { path: 'dashbord', component: dashbord_component_1.DashbordComponent },
    { path: 'myprofile', component: my_profile_component_1.MyProfileComponent },
    { path: 'personal', component: personal_information_component_1.PersonalInformationComponent },
    { path: 'vehicle', component: vehicle_information_component_1.VehicleInformationComponent },
    { path: 'business', component: business_information_component_1.BusinessInformationComponent },
    { path: 'payment', component: payment_information_component_1.PaymentInformationComponent },
    { path: 'myrides', component: my_rides_component_1.MyRidesComponent },
    { path: 'totalrides', component: total_rides_component_1.TotalRidesComponent },
    { path: 'successfulrides', component: successful_rides_component_1.SuccessfulRidesComponent },
    { path: 'bookedrides', component: booked_rides_component_1.BookedRidesComponent },
    { path: 'rejectedrides', component: rejected_rides_component_1.RejectedRidesComponent },
    { path: 'cancelledrides', component: cancelled_rides_component_1.CancelledRidesComponent },
    { path: 'higherbid', component: higher_bid_component_1.HigherBidComponent },
    { path: 'routemap', component: route_map_component_1.RouteMapComponent },
    { path: 'notificationdetails', component: notification_details_component_1.NotificationDetailsComponent },
    { path: 'deliverydetails', component: delivery_details_component_1.DeliveryDetailsComponent },
    { path: 'invoice', component: invoice_component_1.InvoiceComponent },
    { path: 'myvehicles', component: my_vehicles_component_1.MyVehiclesComponent },
    { path: 'mydrivers', component: my_drivers_component_1.MyDriversComponent },
    { path: 'adddriver', component: add_driver_component_1.AddDriverComponent },
    { path: 'addvehicle', component: add_vehicle_component_1.AddVehicleComponent },
    { path: 'accept-bid-details', component: accept_bid_details_component_1.AcceptBidDetailsComponent },
    { path: 'select-operator-type', component: select_operator_type_component_1.SelectOperatorTypeComponent },
    { path: 'add-more-vehicle', component: add_more_vehicle_component_1.AddMoreVehicleComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map