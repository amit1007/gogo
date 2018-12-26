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
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.css']
})
export class PaymentInformationComponent implements OnInit {

  isTrue = false;
	currentuser: any;
	submitted = false;
	submitted1 = false;
	submitted2 = false;
	is_bank_submitted = false;
	userData : any;
	content : any;
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

		this.bankInfoForm = this.formBuilder.group({
            op_name: ['', [ Validators.required, Validators.pattern(this.unamePattern)]],
            op_bank_name: ['', [ Validators.required, Validators.pattern(this.unamePattern)]],
            op_bank_branch: ['', Validators.required],
            op_bank_ifsc: ['', [ Validators.required, Validators.pattern(this.bankIFSCPattern)]],
            //op_bank_wallet: ['', Validators.required],
            op_bank_account_number: ['', Validators.required],
            id : this.formBuilder.control(this.userid),
            bank_agree_terms_condition : ['', Validators.required],
            op_deposite:[''],
            op_subscription:[''],
            op_paymentmode:[''],
        });

	}

	get bb() { return this.bankInfoForm.controls; }

	changeBankCondition(value){
		console.log('check personal terms and condition');
		console.log(value);
		this.bankInfoForm.value.agree_terms_condition = value;
	}

	check_bank_terms_condition(){
		console.log('clicked vehicle t&c');
		this.is_bank_tc = true;	
	}

	onSubmitBankInfo(){
        this.is_bank_submitted = true;        // this.submittedvehicle = true;
        
        if (this.bankInfoForm.invalid) {
            console.log('form bank is incorrect');
            console.log(this.bankInfoForm.invalid);
            return;
        }
        else {
            console.log('form bank is correct');
            this.bankInfoForm.value.id = this.userid;                
            console.log(this.bankInfoForm.value);
            this.myprofileService.saveBankInfo(this.bankInfoForm.value)
           .pipe(first())
           .subscribe(
               data => {
                   this.personalInfoResponse = data;
                   if(this.personalInfoResponse.response.status == 'success'){
                        this.toastr.success('Bank information saved successfully.', 'Great!');
                        this.router.navigate(['/myprofile']);
                        // this.alertService.success('Bank information saved successful', true);
                   }
               },
               error => {
                   console.log('error');
                   this.toastr.error('Something went wrong', 'Oops!');
                   // this.alertService.error('Something went wrong.');
               });
        }
    }

    onSearchChange(searchValue : string ) {  
		console.log(searchValue);
		
		if(searchValue == "1: 1"){
		this.content = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
		}
		else{
			this.content = 'Some Content';
		}
	}
}
