import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guard/auth.guard';

import { SignupComponent } from './Components/signup/signup.component';
import { AppComponent } from './app.component';
import { MyProfileComponent } from './Components/my-profile/my-profile.component';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import { MyRidesComponent } from './Components/my-rides/my-rides.component';
import { TotalRidesComponent } from './Components/total-rides/total-rides.component';
import { SuccessfulRidesComponent } from './Components/successful-rides/successful-rides.component';
import { BookedRidesComponent } from './Components/booked-rides/booked-rides.component';
import { RejectedRidesComponent } from './Components/rejected-rides/rejected-rides.component';
import { CancelledRidesComponent } from './Components/cancelled-rides/cancelled-rides.component';
import { LoginComponent } from './Components/login/login.component';
import { HigherBidComponent } from './Components/higher-bid/higher-bid.component';
import { RouteMapComponent } from './Components/route-map/route-map.component';
import { NotificationDetailsComponent } from './Components/notification-details/notification-details.component';
import { DeliveryDetailsComponent } from './Components/delivery-details/delivery-details.component';
import { InvoiceComponent } from './Components/invoice/invoice.component';
import { MyVehiclesComponent } from './Components/my-vehicles/my-vehicles.component';
import { MyDriversComponent } from './Components/my-drivers/my-drivers.component';
import { AddDriverComponent } from './Components/add-driver/add-driver.component';
import { AddVehicleComponent } from './Components/add-vehicle/add-vehicle.component';
import { AcceptBidDetailsComponent } from './Components/accept-bid-details/accept-bid-details.component';
import { SelectOperatorTypeComponent } from './Components/select-operator-type/select-operator-type.component';
import { PersonalInformationComponent } from './Components/personal-information/personal-information.component';
import { VehicleInformationComponent } from './Components/vehicle-information/vehicle-information.component';
import { BusinessInformationComponent } from './Components/business-information/business-information.component';
import { PaymentInformationComponent } from './Components/payment-information/payment-information.component';
import { AddMoreVehicleComponent } from './Components/add-more-vehicle/add-more-vehicle.component';

const routes: Routes = [
	// { path: '', component: SignupComponent },
	//{ path:'login', component: LoginComponent },
	//{ path:'', component: MyProfileComponent },
	{ path:'', component: SignupComponent },
	//{ path:'signup', component: SignupComponent },
	{ path:'dashbord', component: DashbordComponent },
	{ path:'myprofile', component: MyProfileComponent}, //,canActivate: [AuthGuard]
	{ path:'personal', component: PersonalInformationComponent },
	{ path:'vehicle', component: VehicleInformationComponent },
	{ path:'business', component: BusinessInformationComponent },
	{ path:'payment', component: PaymentInformationComponent },
	{ path:'myrides', component: MyRidesComponent },
	{ path:'totalrides', component: TotalRidesComponent },
	{ path:'successfulrides', component: SuccessfulRidesComponent },
	{ path:'bookedrides', component: BookedRidesComponent },
	{ path:'rejectedrides', component: RejectedRidesComponent },
	{ path:'cancelledrides', component: CancelledRidesComponent },
	{ path:'higherbid', component: HigherBidComponent },
	{ path:'routemap', component: RouteMapComponent },
	{ path:'notificationdetails', component: NotificationDetailsComponent },
	{ path:'deliverydetails', component: DeliveryDetailsComponent },
	{ path:'invoice', component: InvoiceComponent },
	{ path:'myvehicles', component: MyVehiclesComponent },
	{ path:'mydrivers', component: MyDriversComponent },
	{ path:'adddriver', component: AddDriverComponent },
	{ path:'addvehicle', component: AddVehicleComponent },
	{ path:'accept-bid-details', component: AcceptBidDetailsComponent },
	{ path:'select-operator-type', component: SelectOperatorTypeComponent }, 
	{ path:'add-more-vehicle', component: AddMoreVehicleComponent },
 //  	{
 //        path: 'myprofile',
 //        component: MyProfileComponent,
 //        children: [
 //            {
 //                path: '',
 //                component: PersonalInformationComponent
 //            },
 //            // ++ THIS PART WAS ADDED
 //            {
 //              path: 'vehicle',
 //              component: VehicleInformationComponent
 //            },
 //            // -- THIS PART WAS ADDED
 //            {
 //                path: 'business',
 //                component: BusinessInformationComponent
 //            },
 //            {
 //                path: ':payment',
 //                // outlet: 'sidemenu',
 //                component: PaymentInformationComponent
 //            }
 //        ]
	// }
];
@NgModule({
	imports: [ RouterModule.forRoot(routes, { useHash: true }) ], /* RouterModule.forRoot(routes),*/
	exports: [ RouterModule ]
})
export class AppRoutingModule{ } 