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
	selector: 'app-my-profile',
	templateUrl: './my-profile.component.html',
	styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

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


	 	// console.log('In my profile componenet');
		this.currentuser = localStorage.getItem('constantVariable.currentUser')
		// console.log(JSON.parse(this.currentuser));
		if(this.currentuser)
		{
			// console.log('user is logged in to dashboard');
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
		
		// this.personalInfoForm = this.formBuilder.group({
	 //        op_first_name: ['', [ Validators.required, Validators.pattern(this.unamePattern)]],
	 //        op_last_name: ['', [ Validators.required, /* Validators.pattern(this.unamePattern) */]],
	 //        // op_password: ['', [ Validators.required, Validators.pattern(this.pwdPattern)]],
	 //        op_mobile_no: ['', [ Validators.required, Validators.pattern(this.mobnumPattern)]],
	 //        op_alternative_mobile_checbox : this.formBuilder.control(false), 
	 //        op_alternative_mobile_no: ['', [ Validators.pattern(this.mobnumPattern)]],
	 //        op_email: ['', [ Validators.required, Validators.pattern(this.emailPattern)]],
  //        	op_gender: ['',  Validators.required],
  //        	op_dob: '', /*['',  Validators.required],*/
	 //        op_adhar_card_no: '',
	 //        op_pan_no: '',
  //        	op_pet_name: this.formBuilder.control(''),
  //        	op_address_line_1: ['',  Validators.required],
  //        	op_address_line_2: this.formBuilder.control(''),
  //        	op_address_line_3: this.formBuilder.control(''),
  //        	op_address_pin_code: ['', Validators.required],
  //        	op_landmark: this.formBuilder.control(''),
  //        	op_address_city: ['1',  Validators.required],
  //        	op_address_state: ['27', Validators.required],
  //        	op_type: ['', Validators.required],
  //        	status: this.formBuilder.control('login'),
	 //        id :  this.formBuilder.control(this.userid),
	 //        op_profile: '',
	 //        // op_profile: ['', Validators.required],
	 //        // agree_terms_condition: ['', Validators.required]
	 //        agree_terms_condition :  this.formBuilder.control(''),
	 //        profile_pic_arr :  this.formBuilder.control(null),
	 //    });

	    // Validators.pattern(this.mobnumPattern)

	    /*
		this.vehicleInfoForm = this.formBuilder.group({
	        veh_owner_name: ['', Validators.required],
	        veh_owner_mobile_no: ['', [ Validators.pattern(this.mobnumPattern)]],
	        veh_name: ['', [ Validators.required]],
	        veh_type: ['0', Validators.required],
	        veh_num1: ['', [ Validators.required ,Validators.minLength(2) ]],
	        veh_num2: ['', [ Validators.required,Validators.minLength(2)]],
	        veh_num3: ['', [ Validators.required,Validators.minLength(2)]],
	        veh_num4: ['', [ Validators.required,Validators.minLength(4)]], 
	        veh_registration_no : this.formBuilder.control(''),
	        veh_driving_licence_no : ['', Validators.required],
	        veh_validity: ['', [ Validators.required]],
	        veh_city: ['', [ Validators.required]],
	        working_hours_from: ['', [ Validators.required]],
	        working_hours_to: ['', [ Validators.required]],
	        veh_images: '',
	        // veh_images: ['', [ Validators.required]],
	        veh_terms_condition : ['', [ ]],
	        veh_op_id : this.formBuilder.control(this.userid),
	        vehicle_images : '',
	        veh_doc_pan : '',
	        veh_upload_adhar : '',
	        veh_upload_driving_licence : '',
	    });

		*/

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

    	// this.bankInfoForm = this.formBuilder.group({
     //        op_name: ['', [ Validators.required, Validators.pattern(this.unamePattern)]],
     //        op_bank_name: ['', [ Validators.required, Validators.pattern(this.unamePattern)]],
     //        op_bank_branch: ['', Validators.required],
     //        op_bank_ifsc: ['', [ Validators.required, Validators.pattern(this.bankIFSCPattern)]],
     //        //op_bank_wallet: ['', Validators.required],
     //        op_bank_account_number: ['', Validators.required],
     //        id : this.formBuilder.control(this.userid),
     //        bank_agree_terms_condition : ['', Validators.required],
     //    });
	}

  	ngAfterViewInit() {
		// this.isUserLoggedIn();
		// this.getUsername();
	}

	// convenience getter for easy access to form fields Personal Information
	get p() { return this.personalInfoForm.controls; }

	// convenience getter for easy access to form fields Vehicle information
	// get v() { return this.vehicleInfoForm.controls; }

	// // convenience getter for easy access to form fields Vehicle information
	// get b() { return this.businessInfoForm.controls; }

	// get bb() { return this.bankInfoForm.controls; }

	// convenience getter for easy access to form fields Vehicle information
	// get d() { return this.addDriverInfoForm.controls; }


	check_personal_terms_condition(){
		console.log('clicked vehicle t&c');
		this.is_personal_tc = true;	
	}
	// check_veh_terms_condition(){
	// 	console.log('clicked vehicle t&c');
	// 	this.is_veh_tc = true;	
	// }
	
	// check_bank_terms_condition(){
	// 	console.log('clicked vehicle t&c');
	// 	this.is_bank_tc = true;	
	// }

	// checkloaderAvailability(value){
	// 	console.log('loader availability');
	// 	console.log(value);
	// 	if(value==1){
	// 		this.isLoaderAvailable = true;
	// 	}else{
	// 		this.isLoaderAvailable = false;
	// 	}
	// }

	changeValue(value) {
		this.personalInfoForm.value.op_alternative_mobile_checbox = value;
		if(value == true){
			this.sameMobile = true;
			this.personalInfoForm.value.op_alternative_mobile_checbox = this.personalInfoForm.value.op_mobile_no;
		}else{
			this.sameMobile = false;
		}
	} 

	// changeTCondition(value){
	// 	console.log('check personal terms and condition');
	// 	console.log(value);
	// 	this.personalInfoForm.value.agree_terms_condition = value;
	// }

	changeVTCondition(value){
		console.log('check vehicle terms and condition');
		console.log(value);
		if(value==true){
			this.is_v_tc = true;
		}else{
			this.is_v_tc = false;
		}
		this.vehicleInfoForm.value.veh_terms_condition = value;
	}
	// changeBusinessCondition(value){
	// 	console.log('check business terms and condition');
	// 	console.log(value);
	// 	if(value==true){
	// 		this.is_b_tc = true;
	// 	}else{
	// 		this.is_b_tc = false;
	// 	}
	// 	this.businessInfoForm.value.bu_terms_condition = value;	
	// }

	// upload() {
	// 	let file = this.selectedFile.item(0);
	// 	this.myprofileService.uploadfile(file);
 //  	}
	 
	onFileChange(event) {
		this.selectedFile = event.target.files;
		console.log(this.selectedFile);
		this.filename = this.selectedFile.item(0);
		this.personalInfoForm.value.op_profile = this.filename.name;
		this.personalInfoForm.value.profile_pic_arr = event.target.files;
		console.log('file details');
		console.log(event.target.files);
		console.log('profile filename');
		console.log(this.personalInfoForm.value.op_profile);
	}

	// onVehicleImagesSelect(event){
	// 	this.selectedVehicleFile = event.target.files;
	// 	console.log(this.selectedVehicleFile);
	// 	this.filename = this.selectedVehicleFile.item(0);
	// 	this.vehicleInfoForm.value.veh_images = this.filename.name;
		
	// 	// this.vehicleInfoForm.value.veh_images = event.target.files;
	// 	console.log('file details');
	// 	console.log(event.target.files);
	// 	console.log('vehicle filename');
	// 	console.log(this.vehicleInfoForm.value.veh_images);	
	// }

	// getVehicleImages(e){
	// 	//console.log (e.target.files);
	//     for (var i = 0; i < e.target.files.length; i++) { 
	//       this.myCarFiles.push(e.target.files[i]);
	//       this.myCarFilesImgName.push(e.target.files[i].name);
	//     }
	//     console.log('my uploaded car files names');
	//     console.log(this.myCarFilesImgName);
	// }	

	onDateSelect(dateValue){
		console.log('date picker');
		console.log(dateValue);
	}
	
	// onFileChange(event) {
	// 	  let reader = new FileReader();
		 
	// 	  if(event.target.files && event.target.files.length) {
	// 	    const [file] = event.target.files;
	// 	    reader.readAsDataURL(file);
		  	
	// 	  	console.log('read file');
	// 	  	console.log(event.target.files);
	// 	    reader.onload = () => {
	// 	      // this.formGroup.patchValue({
	// 	      //   file: reader.result
	// 	      // });
		      
	// 	      // // need to run CD since file load runs outside of zone
	// 	      // this.cd.markForCheck();
	// 	    };
	// 	  }
	// 	}

	// working here
	// isUserLoggedIn() {
	// 	this.authenticationService.isLoggedIn().then({
	// 		this.Islogin = username;
	// 		console.log(this.Islogin);
	// 	});

	// 	 this.authenticationService.isLoggedIn().subscribe(x=>{
	// 	      this.myBooleanVal = x;
	// 	      console.log(x,"X Value");// this print true "X Value"
	// 	      console.log(this.myBooleanVal);// this prints "true"
	// 	    });

	// 	 this.authenticationService.hasLoggedIn().then((res) => {
	// 		this.Islogin = res;
	// 		console.log('has logged in : ');
	// 		console.log(this.Islogin);
	// 	});
	// }

	// getUsername() {
	// 	this.authenticationService.getUsername().then((username) => {
	// 		this.username = username;
	// 		console.log(this.username);
	// 	});
	// }

	/*
	onSubmitVehicleInfo(){
		this.submitted1 = true;
		console.log(this.vehicleInfoForm.value);
		if (this.vehicleInfoForm.invalid) {
		    console.log('form vehicle is incorrect');
		    console.log(this.vehicleInfoForm.invalid);
		    return;
		}
		else{
			console.log('form vehicle is correct');
			
			this.vehicleInfoForm.value.veh_registration_no = this.vehicleInfoForm.value.veh_num1 + this.vehicleInfoForm.value.veh_num2 + this.vehicleInfoForm.value.veh_num3 + this.vehicleInfoForm.value.veh_num4;
			this.personalInfoForm.value.id = this.userid;

			var vehicle_car_images = [];
			var vehicle_car_names = [];
			for (var i = 0; i < this.myCarFiles.length; i++) { 
		      vehicle_car_images.push(this.myCarFiles[i]);
		    }
		    
			this.vehicleInfoForm.value.vehicle_images = vehicle_car_images;
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
	*/

	// onSubmit(){
	// 	this.submitted = true;
	// 	console.log(this.personalInfoForm.value);
	// 	console.log(this.personalInfoForm.value.op_dob);
		
	// 	if (this.personalInfoForm.invalid) {
	// 	    console.log('incorrect');
	// 	    console.log(this.personalInfoForm.invalid);
	// 	    return;
	// 	}
	// 	else {
	// 		console.log('save personal information');
	// 		console.log(this.personalInfoForm.value);
	// 		this.personalInfoForm.value.status = 'login';
	// 		this.personalInfoForm.value.id = this.userid;
	// 		// this.upload();

	// 		this.myprofileService.savePersonalInfo(this.personalInfoForm.value)
 //            .pipe(first())
 //            .subscribe(
 //                data => {
 //                	this.personalInfoResponse = data;
 //                	if(this.personalInfoResponse.response.status == 'success'){
 //            		 	// this.alertService.success('Personal information saved successful', true);
 //            			this.toastr.success('Personal information saved successfully.', 'Great!');
	//             		this.router.navigate(['/myprofile']);
 //                	}
 //                },
 //                error => {
 //                	console.log('error');
 //                	this.toastr.error('Something went wrong', 'Oops!');
 //                	// this.alertService.error('Something went wrong.');
 //                });
	// 	}
	// }

	// onSubmitBusinessInfo(){
	// 	this.submitted2 = true;
	// 	console.log(this.businessInfoForm.value);
		
	// 	if (this.businessInfoForm.invalid) {
	// 	    console.log('incorrect');
	// 	    console.log(this.businessInfoForm.invalid);
	// 	    return;
	// 	}
	// 	else {
	// 		console.log('save buiness information');
	// 		this.businessInfoForm.value.oprator_id = this.userid;
	// 		this.myprofileService.saveBusinessInfo(this.businessInfoForm.value)
 //            .pipe(first())
 //            .subscribe(
 //                data => {
 //                	this.businessInfoResponse = data;
 //                	if(this.businessInfoResponse.response.status == 'success'){
 //        		 		this.toastr.success('Buisness information saved successfully.', 'Great!');
	//             		this.router.navigate(['/myprofile']);
 //        		 		// this.alertService.success('Buisness information saved successful', true);
 //                	}
 //                },
 //                error => {
 //                	console.log('error');
 //                	this.toastr.error('Something went wrong', 'Oops!');
 //                	// this.alertService.error('Something went wrong.');
 //                });
	// 	}
	// }

	onSubmitDriverInfo(){
		this.submitted2 = true;
		console.log(this.addDriverInfoForm.value);
		if (this.addDriverInfoForm.invalid) {
		    console.log('incorrect');
		    return;
		}
		else {
			console.log('save driver information');
		}	
	}

	 
}
