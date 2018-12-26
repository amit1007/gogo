import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './_directives/alert/alert.component';
import { AlertService } from './services/alert/alert.service';
import { ModalService } from './services/modal/modal.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupService } from './services/signup/signup.service';
import { ToastrModule } from 'ngx-toastr';
import { DataTableModule } from "angular-6-datatable";
import { AgmCoreModule } from '@agm/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {WebcamModule} from 'ngx-webcam';

// import { /* FormWizardModule } from 'angular2-wizard';*/
//add componenets here

import { AppComponent } from './app.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AppRoutingModule }  from './app-routing.module';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { MyProfileComponent } from './Components/my-profile/my-profile.component';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import { MyRidesComponent } from './Components/my-rides/my-rides.component';
import { TotalRidesComponent } from './Components/total-rides/total-rides.component';
import { SuccessfulRidesComponent } from './Components/successful-rides/successful-rides.component';
import { FooterComponent } from './footer/footer.component';
import { BookedRidesComponent } from './Components/booked-rides/booked-rides.component';
import { RejectedRidesComponent } from './Components/rejected-rides/rejected-rides.component';
import { CancelledRidesComponent } from './Components/cancelled-rides/cancelled-rides.component';
import { LoginComponent } from './Components/login/login.component';
import { HigherBidComponent } from './Components/higher-bid/higher-bid.component';
import { RouteMapComponent } from './Components/route-map/route-map.component';
import { NotificationDetailsComponent } from './Components/notification-details/notification-details.component';
import { DeliveryDetailsComponent } from './Components/delivery-details/delivery-details.component';
import { InvoiceComponent } from './Components/invoice/invoice.component';
import { HeaderComponent } from './header/header.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { AddMoreDriverComponent } from './Components/add-more-driver/add-more-driver.component';


@NgModule({
	declarations: [
		AppComponent,
		SignupComponent,
		RightSidebarComponent,
		MyProfileComponent,
		DashbordComponent,
		MyRidesComponent,
		TotalRidesComponent,
		SuccessfulRidesComponent,
		FooterComponent,
		BookedRidesComponent,
		RejectedRidesComponent,
		CancelledRidesComponent,
		LoginComponent,
		HigherBidComponent,
		RouteMapComponent,
		NotificationDetailsComponent,
		DeliveryDetailsComponent,
		InvoiceComponent,
		HeaderComponent,
		LeftSidebarComponent,
		AlertComponent,
		MyVehiclesComponent,
		MyDriversComponent,
		AddDriverComponent,
		AddVehicleComponent,
		AcceptBidDetailsComponent,
		SelectOperatorTypeComponent,
		PersonalInformationComponent,
		VehicleInformationComponent,
		BusinessInformationComponent,
		PaymentInformationComponent,
		AddMoreVehicleComponent,
		AddMoreDriverComponent,
	],
	imports: [ /* FormWizardModule,*/
		BrowserModule, FormsModule,ReactiveFormsModule,HttpClientModule,
		AppRoutingModule,NgbModule,BrowserAnimationsModule,WebcamModule,ToastrModule.forRoot({
		    timeOut: 10000,
		    positionClass: 'toast-bottom-right',
		    preventDuplicates: true,
  		}),DataTableModule,
  		AgmCoreModule.forRoot({
	    	apiKey: 'AIzaSyA3IPPYh8kevGnqsrWqJVPBxBo2zhvml9U'
	    }),
	],
	providers: [AlertService,ModalService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
	bootstrap: [AppComponent]
})
export class AppModule { }
