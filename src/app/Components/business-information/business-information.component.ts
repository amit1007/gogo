import { Component, OnInit , NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators,FormControl,FormArray } from '@angular/forms';
import { SignupService } from '../../services/signup/signup.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { AlertService } from '../../services/alert/alert.service';
import { MyprofileService } from '../../services/myprofile/myprofile.service';
import { interval } from 'rxjs';
import {BrowserModule} from '@angular/platform-browser'
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Product, SellingPoint } from '../../product'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-business-information',
  templateUrl: './business-information.component.html',
  styleUrls: ['./business-information.component.css']
})
export class BusinessInformationComponent implements OnInit {

	isTrue = false;
	currentuser: any;
	submitted = false;
	submitted1 = false;
	submitted2 = false;
	is_bank_submitted = false;
	userData : any;
	//PERSONAL INFORMATION
	personalInfoForm : FormGroup;
	vehicleInfoForm : FormGroup;
	businessInfoForm : FormGroup;
	addDriverInfoForm: FormGroup;
	bankInfoForm : FormGroup;

	Islogin = false;
	unamePattern = '^[-\sa-zA-Z\s-]+$';
	onlynumberPattern = '^[0-9]\d*$';
	pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
	mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
	emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
	onlyletterPattern = "/[^a-zA-Z]/g";
	bankIFSCPattern = '^[A-Za-z]{4}[a-zA-Z0-9]{7}$';
	onlytwoletterPattern = '/^[a-z]{2}$/i';

	personalInfoResponse : any;
	selectedFile : any;
	selectedVehicleFile : any;
	FOLDER : string;
	filename:any;
	sameMobile : boolean = false;
	vehicleInfoResponse : any;
	myCarFiles:string [] = [];
	myCarFilesImgName:string [] = [];
	userid : number;
	loggedInUser : any;
	is_v_tc : boolean = false;
	is_b_tc : boolean = false;
	isLoaderAvailable : boolean = false;
	is_tc : boolean = false;
	is_veh_tc : boolean = false;
	is_personal_tc : boolean = false;
	is_bank_tc : boolean = false;
	
	// VEHICLE INFORMATION
	
	//BUISNESS INFORMATION
	businessInfoResponse : any;

	constructor(private formBuilder : FormBuilder,public SignupService : SignupService, private route:ActivatedRoute,private router:Router,private authenticationService : AuthenticationService,private alertService : AlertService,private myprofileService : MyprofileService,private toastr: ToastrService) { 
			
	}

	ngOnInit() {

		console.log('In my profile componenet');
		this.currentuser = localStorage.getItem('constantVariable.currentUser')
		console.log(JSON.parse(this.currentuser));
		if(this.currentuser)
		{
			console.log('user is logged in to dashboard');
			this.loggedInUser = JSON.parse(this.currentuser);
			this.userid = this.loggedInUser.response.id;

			// get current user detail by his id
			/*
			this.myprofileService.getPersonalInfo(this.userid)
            .pipe(first())
            .subscribe(
                data => {
                	this.userData = data;
                	console.log('user logged in data');
                	console.log(this.userData);
               //  	if(this.personalInfoResponse.response.status == 'success'){
               //  		 this.alertService.success('Personal information saved successful', true);
	            		// this.router.navigate(['/myprofile']);
               //  	}
                },
                error => {
                	console.log('error');
                	this.alertService.error('Something went wrong.');
                	// this.alertService.error(error);
                });
			*/
		}

		this.businessInfoForm = this.formBuilder.group({
	        op_bu_name: ['', Validators.required],
	        op_bu_address_line_1: ['', [ Validators.required]],
	        op_bu_address_line_2: '',
	        op_bu_address_line_3: '',
	        op_bu_address_pin_code: ['', [ Validators.required]],
	        op_bu_landmark: ['', [ Validators.required]],
	        op_bu_address_city: ['1',  Validators.required],
	        op_bu_address_state: ['27',  Validators.required],
	        op_bu_gstn_no: ['', [ Validators.required]],
	        op_bu_email: ['', [ Validators.pattern(this.emailPattern)]],
	        op_bu_pan_no: '',
	        op_bu_base_charge: ['', [ Validators.required]],
	        op_bu_per_km: ['', [ Validators.required]],
	        op_bu_loader_available: ['', [ Validators.required]],
	        op_bu_no_person: '',
	        op_bu_charge_per_person: '',
	        oprator_id: this.userid,
	        bu_terms_condition: ['', Validators.required],
    	});
	}

	// convenience getter for easy access to form fields Vehicle information
	get b() { return this.businessInfoForm.controls; }

	changeBusinessCondition(value){
		console.log('check business terms and condition');
		console.log(value);
		if(value==true){
			this.is_b_tc = true;
		}else{
			this.is_b_tc = false;
		}
		this.businessInfoForm.value.bu_terms_condition = value;	
	}

	check_terms_condition(){
		console.log('clicked business t&c');
		this.is_tc = true;
	}

	checkloaderAvailability(value){
		if(value==1){
			this.isLoaderAvailable = true;
		}else{
			this.isLoaderAvailable = false;
		}
	}

	onSubmitBusinessInfo(){
		this.submitted2 = true;
		console.log(this.businessInfoForm.value);
		
		if (this.businessInfoForm.invalid) {
		    console.log('incorrect');
		    console.log(this.businessInfoForm.invalid);
		    return;
		}
		else {
			console.log('save buiness information');
			this.businessInfoForm.value.oprator_id = this.userid;
			this.myprofileService.saveBusinessInfo(this.businessInfoForm.value)
            .pipe(first())
            .subscribe(
                data => {
                	this.businessInfoResponse = data;
                	if(this.businessInfoResponse.response.status == 'success'){
        		 		this.toastr.success('Buisness information saved successfully.', 'Great!');
	            		this.router.navigate(['/myprofile']);
        		 		// this.alertService.success('Buisness information saved successful', true);
                	}
                },
                error => {
                	console.log('error');
                	this.toastr.error('Something went wrong', 'Oops!');
                	// this.alertService.error('Something went wrong.');
                });
		}
	}


}
