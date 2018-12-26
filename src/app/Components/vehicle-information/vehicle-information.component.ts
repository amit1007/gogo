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
import { BrowserModule } from '@angular/platform-browser'
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Product, SellingPoint } from '../../product'
import { ToastrService } from 'ngx-toastr';
import {isNumeric} from "rxjs/util/isNumeric";

@Component({
  selector: 'app-vehicle-information',
  templateUrl: './vehicle-information.component.html',
  styleUrls: ['./vehicle-information.component.css']
})
export class VehicleInformationComponent implements OnInit {
	options:any;

  	isTrue = false;
	currentuser: any;
	submitted1 = false;
	is_bank_submitted = false;
	userData : any;
	vehicleInfoForm : FormGroup;
	isOwnerDriver : boolean = false;
	urls = new Array<string>();
	operator_type : any;
	testhtml : any;
	testhtml1 : any;
	//add more form
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
	isOwner : boolean = false;
	vehile_models_3 = ['Piaggio Ape Xtra LDx', 'Mahindra Alfa ', 'MAHINDRA ALFA PLUS'];
	vehile_models_4 = ['Piaggio Porter 700','Piaggio Porter 1000','Tata ACE (Chotta Haathi)','Tata ACE zip (Chotta Haathi)','Tata SUPER ACE MINT','Mahindra Supro Maxitruck','Mahindra Jeeto','Mahindra Bolero Pickup','Mahindra Maxximo','Mahindra Supro Mini truck','Force Trump 40','Force Trump 40 - Hi deck','Ashok Leyland DOST','Tata 407'];
	veh_model: string [] = [];

  	constructor(private formBuilder : FormBuilder,public SignupService : SignupService, private route:ActivatedRoute,private router:Router,private authenticationService : AuthenticationService,private alertService : AlertService,private myprofileService : MyprofileService,private toastr: ToastrService) {
	}

	ngOnInit() {

	 	console.log('In my profile componenet');
		this.currentuser = localStorage.getItem('constantVariable.currentUser')
		// this.currentuser = JSON.parse(this.currentuser);
		console.log(JSON.parse(this.currentuser));
		if(this.currentuser)
		{
			console.log('user is logged in to dashboard');
			this.loggedInUser = JSON.parse(this.currentuser);
			this.userid = this.loggedInUser.response.id;
			this.operator_type = this.loggedInUser.response.op_type_id;

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

		this.vehicleInfoForm = this.formBuilder.group({
	        op_v_ow_driver: ['', Validators.required],
	        veh_owner_name: ['', Validators.required],
	        veh_owner_mobile_no: ['', [ Validators.pattern(this.mobnumPattern)]],
	        veh_wheel_type: ['', Validators.required],
	        veh_model: ['', [ Validators.required]],
	        veh_type: ['', [ Validators.required]],
	        veh_capacity:['', [ Validators.required]],
	        veh_dimension:['', [ Validators.required]],
	        // veh_registration_no:['', [ Validators.required]],
	        veh_num1: ['', Validators.compose([Validators.required,Validators.maxLength(2)])],
	        veh_num2: ['', [ Validators.required,Validators.minLength(2)]],
	        veh_num3: ['', [ Validators.required,Validators.minLength(2)]],
	        veh_num4: ['', [ Validators.required,Validators.minLength(4)]], 
	        veh_city:['', [ Validators.required]],
	        veh_working_days_frm: ['', [ Validators.required]],
	        veh_working_days_to: ['', [ Validators.required]],
	        veh_working_from: ['', [ Validators.required]],
	        veh_working_to: ['', [ Validators.required]],
	        veh_images: [''],
	        upload_pan: [''],
	        upload_adhar: [''],
	        upload_driving_licence: [" "],
	        veh_terms_condition : ['', [ ]],
	        veh_op_id : this.formBuilder.control(this.userid),
	        operator_type :this.formBuilder.control(this.operator_type),
	    });
	    
	}

	getWheelModel(type){
		console.log('get wheel type');
		console.log(type);
		if(type==3){
			this.veh_model = this.vehile_models_3;
		}else if(type==4){
			this.veh_model = this.vehile_models_4;	
		}
		else{

		}
	}

	// convenience getter for easy access to form fields Vehicle information
	get v() { return this.vehicleInfoForm.controls; }

	checkownership(value){
		console.log('check owner');
		if(value==1){
			this.isOwner = true;
		}else{
			this.isOwner = false;
		}
	}

	check_veh_terms_condition(){
		this.is_veh_tc = true;	
	}

	changeVTCondition(value){
		if(value==true){
			this.is_v_tc = true;
		}else{
			this.is_v_tc = false;
		}
		this.vehicleInfoForm.value.veh_terms_condition = value;
	}

	onVehicleImagesSelect(event){
		this.selectedVehicleFile = event.target.files;
		console.log(this.selectedVehicleFile);
		this.filename = this.selectedVehicleFile.item(0);
		this.vehicleInfoForm.value.veh_images = this.filename.name;
		
		// this.vehicleInfoForm.value.veh_images = event.target.files;
		console.log('file details');
		console.log(event.target.files);
		console.log('vehicle filename');
		console.log(this.vehicleInfoForm.value.veh_images);	
		
		
	}

	onSelectFile(e){
		//console.log (e.target.files);
		if (e.target.files && e.target.files.length > 0) {

		    for (var i = 0; i < e.target.files.length; i++) { 
				//show img preview
				var reader = new FileReader();
				reader.readAsDataURL(e.target.files[i]); // read file as data url
				reader.onload = (event:any) => { // called once readAsDataURL is completed
					// this.url = event.target.result;
					this.urls.push(event.target.result);
				}

				this.myCarFiles.push(e.target.files[i]);
				this.myCarFilesImgName.push(e.target.files[i].name);
		    }
		}
	
		
	}

	onSubmitVehicleInfo(){
		this.submitted1 = true;
		console.log(this.vehicleInfoForm.value);
		this.vehicleInfoForm.value.op_v_ow_driver = this.isOwner;
		if (this.vehicleInfoForm.invalid /* && this.is_v_tc==false */) {
		    console.log('form vehicle is incorrect');
		    console.log(this.vehicleInfoForm.invalid);
		    return;
		}
		else{
			console.log('form vehicle is correct');
			
			this.vehicleInfoForm.value.veh_registration_no = this.vehicleInfoForm.value.veh_num1 + this.vehicleInfoForm.value.veh_num2 + this.vehicleInfoForm.value.veh_num3 + this.vehicleInfoForm.value.veh_num4;
			this.vehicleInfoForm.value.id = this.userid;

			var vehicle_car_images = [];
			var vehicle_car_names = [];
			for (var i = 0; i < this.myCarFiles.length; i++) { 
		      vehicle_car_images.push(this.myCarFiles[i]);
		    }
		    
			// this.vehicleInfoForm.value.vehicle_images = vehicle_car_images;
	      	this.vehicleInfoForm.value.veh_images =  this.myCarFilesImgName;
	      	console.log('cars names');

			this.myprofileService.saveVehicleInfo(this.vehicleInfoForm.value)
            .pipe(first())
            .subscribe(
                data => {
                	this.vehicleInfoResponse = data;
                	if(this.vehicleInfoResponse.response.status == 'success'){
            		 	// this.alertService.success('Vehicle information saved successfully', true);
            		 	this.toastr.success('Vehicle information saved successfully.', 'Great!');
	            		this.router.navigate(['/myprofile']);
                	}
                },
                error => {
                	console.log('error');
                	this.toastr.error('Something went wrong', 'Oops!');
                	// this.alertService.error('Something went wrong.');
                });
		}
	}

	goBack(){
		this.router.navigate(['/myprofile']);
	}

	onSearchChange(searchValue : string ) {  
		if(isNumeric(searchValue)){
    		this.testhtml = 'Invalid Registration Number Format';
    	}
		else {
    		this.testhtml = '';
		}
	}

	onSearchChange1(searchValue : string ) {  
		if(isNumeric(searchValue)){
    		this.testhtml1 = '';
    	}
		else {
    		this.testhtml1 = 'Invalid Registration Number Format';
		}
	}

}
