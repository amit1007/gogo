import { Component, OnInit } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { SignupService } from '../../services/signup/signup.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { interval } from 'rxjs';
import { AlertService } from '../../services/alert/alert.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	
	isOn : boolean = true;
	submitted = false;
	submitted1 = false;
    isRegistered = false;
    SignupForm : FormGroup;
    verifyOtpForm : FormGroup;
    otpInput : number;
    username : string
    password : string;
    timeremain : number = 0;
    signupResponse : any;
    tempotp: any;
    responeOTP : number;
    userResponse : any;
    token : any;
    mobile : number;
    userLoggedIn:any;
    operators : any;
    operatorstypes : any;
    isShow : boolean = true;
    status : string = "login";
    private userState : any;

	constructor(private formBuilder : FormBuilder,public SignupService : SignupService,private route:ActivatedRoute,private router:Router,private authenticationService : AuthenticationService,private alertService : AlertService,private toastr: ToastrService) { 
		// this.operatorType();
	}
  	
  	ngOnInit() 
  	{
  		this.SignupForm = this.formBuilder.group({
	        mobile: ['', [Validators.required, Validators.minLength(10)]],
	        operatortype: ['other', Validators.required],
	        countrycode: this.formBuilder.control(91),
         	// status: this.formBuilder.control('initial'),
			status: this.formBuilder.control(''),
         	otptype: this.formBuilder.control('individual'),
	    });

	    this.verifyOtpForm = this.formBuilder.group({
	        otp: ['', [Validators.required, Validators.minLength(4)]],
	        status: this.formBuilder.control('verified'),
	        operator_state: this.formBuilder.control(''),
	        mobile:this.formBuilder.control(this.SignupForm.value.mobile),
	        countrycode: this.formBuilder.control(91),
	    });
    }

    // convenience getter for easy access to form fields
	get f() { return this.SignupForm.controls; }

	// convenience getter for easy access to form fields verifyOtpForm 
	get f1() { return this.verifyOtpForm.controls; }

	showHide(value){
		console.log('show hide value');
		console.log(value);
		if(value==true){
			console.log('sign up');
			this.status="initial";
			this.isShow = false;
			this.SignupForm.value.status = this.status;
		}else{
			console.log('sign in');
			this.status="login";
			this.isShow = true;
			this.SignupForm.value.status = this.status;
		}
	}
	// public operatorType() {
 //      	this.SignupService.getOperatorTypes().subscribe(
	//     (res: any) => {
	//       	console.log(res);
	// 		this.operators = res; 
	// 		console.log('oprators :');
	//       	console.log(this.operators.operatortypes);
	//       	this.operatorstypes = this.operators.operatortypes;
	//       	// console.log(this.operators.operatortypes);
	// 		// Where you find the array res.data or res.data.data
	//     },
	//     error => {
	//       console.log('error');
	//       console.log(error);
	//     });
 //  	}

	onSubmit(){
		this.submitted = true;
		this.SignupForm.value.status = this.status;
		console.log(this.SignupForm.value);
		if (this.SignupForm.invalid) {
		    console.log('incorrect');
		    return;
		}
		else {
			console.log('correct');
			this.isOn = false;

			// this.SignupForm.value.status = this.status;
			// this.SignupService.register(this.SignupForm.value)
            // .pipe(first())
            // .subscribe(
            //     data => {
            //     	this.signupResponse = data;
            //     	if(this.signupResponse.response.status == 'Failed'){
            //     		// this.alertService.error(this.signupResponse.response.message);
            //     		this.toastr.error(this.signupResponse.response.message);
	        //     		this.router.navigate(['/']);
            //     	}
            //     	else{
            //     		this.isOn = false;
            //     		//get otp in response store int one variable
	        //         	this.tempotp = atob(atob(this.signupResponse.response.otp));
	        //         	this.responeOTP = parseInt(this.tempotp);
	        //     	 	this.resendOTPTimer();
            //     	}
            //     },
            //     error => {
            //     	console.log('error');
            //     	// this.alertService.error(error);
            //     });
		}
	}

	verifyOtp(){
		this.submitted1 = true;
		this.otpInput = parseInt(this.verifyOtpForm.value.otp);
		console.log('signup form');
		console.log(this.SignupForm.value);
		
		// if(this.SignupForm.value.status=='login'){
		// 	this.verifyOtpForm.value.operator_state = this.SignupForm.value.status;
		// }else{
		// 	this.verifyOtpForm.value.operator_state = this.SignupForm.value.status;
		// }
		this.verifyOtpForm.value.operator_state = this.SignupForm.value.status;
		this.verifyOtpForm.value.mobile = this.SignupForm.value.mobile;
		if (this.verifyOtpForm.invalid) {
		    return;
		}
		else 
		{	
			this.router.navigate(['/myprofile']);

			// if(this.responeOTP != null)
			// {	if(this.responeOTP == this.otpInput)
			// 	{
			// 		console.log('otp correct');
			// 		//web service to check mobile is verified but no operator has been selected
					
			// 		this.SignupService.checkOperatorState(this.verifyOtpForm.value)
		    //         .pipe(first())
		    //         .subscribe(
		    //             data => {
		    //             	this.userState = data;
		    //             	console.log('response :');
		    //             	console.log(this.userState);
		    //             	if(this.userState.statusCode == 200){
		    //             		localStorage.setItem('constantVariable.currentUserStates',JSON.stringify(this.userState));
	        //         			this.router.navigate(['/select-operator-type']);
		    //             	}else{
		    //             		this.verifyOtpForm.value.registerId = this.signupResponse.response.id;
			// 					console.log(this.verifyOtpForm.value);
			// 					this.SignupService.register(this.verifyOtpForm.value)
			// 		            .pipe(first())
			// 		            .subscribe(
			// 		                data => {
			// 		                	console.log('register response before auto login');
			// 		                	this.userResponse = data;
			// 		                	console.log(this.userResponse);
			// 		                	this.mobile = parseInt(this.userResponse.response.mobile);
			// 		                	this.token = this.userResponse.response.token;
					                	
			// 		                	if(this.userResponse.response.token){
			// 		                		if(this.userResponse.response.operator_state=='initial'){
			// 		                			localStorage.setItem('constantVariable.currentUserStates',JSON.stringify(this.userResponse.response));
			// 		                			console.log('select operator type');
			// 		                			this.router.navigate(['/select-operator-type']);
			// 		                		}else
			// 		                		{
			// 	                				console.log('redirect to profile');
			// 	                				localStorage.setItem('constantVariable.currentUser', JSON.stringify(this.userResponse));
			// 			                        localStorage.setItem('constantVariable.isLoggedIn', 'true');
			// 			                        localStorage.setItem('constantVariable.token', this.userResponse.response.token);
			// 	                				this.router.navigate(['/myprofile']);
			// 		                		}
			// 			            	}
			// 			            	else{
			// 			            		// this.alertService.error('Something went wrong');
			// 			            		this.toastr.error('Something went wrong,no token found');
			// 			            		this.router.navigate(['/']);
			// 			            	}
					                	
			// 		                },
			// 		                error => {
			// 		                	// this.alertService.error('Something went wrong,Try Again.');
			// 		                	this.toastr.error('Something went wrong,in register error');
			// 		                	this.router.navigate(['/']);
			// 		                });
		    //             	}
		    //             },
		    //             error => {
		    //             	this.alertService.error('Something went wrong,Try Again.');
		    //         		this.router.navigate(['/']);
	        //         	});

			// 		/*
			// 			this.verifyOtpForm.value.registerId = this.signupResponse.response.id;
			// 			console.log(this.verifyOtpForm.value);
			// 			this.SignupService.register(this.verifyOtpForm.value)
			//             .pipe(first())
			//             .subscribe(
			//                 data => {
			//                 	console.log('register response before auto login');
			//                 	this.userResponse = data;
			//                 	console.log(this.userResponse);
			//                 	this.mobile = parseInt(this.userResponse.response.mobile);
			//                 	this.token = this.userResponse.response.token;
			                	
			//                 	if(this.userResponse.response.token){
			//                 		if(this.userResponse.response.operator_state=='initial'){
			//                 			localStorage.setItem('constantVariable.currentUserStates',JSON.stringify(this.userResponse.response));
			//                 			this.router.navigate(['/select-operator-type']);
			//                 		}else
			//                 		{
		    //             				this.router.navigate(['/myprofile']);
			//                 		}
			// 	            	}
			// 	            	else{
			// 	            		// this.alertService.error('Something went wrong');
			// 	            		this.toastr.error('Something went wrong');
			// 	            		this.router.navigate(['/']);
			// 	            	}
			                	
			//                 },
			//                 error => {
			//                 	// this.alertService.error('Something went wrong,Try Again.');
			//                 	this.toastr.error('Something went wrong');
			//                 	this.router.navigate(['/signup']);
			//                 });
	        //     	*/

			// 	}else{
			// 		console.log('incorrect otp');
			// 	}
			// }
    	 	
		}	
	}

	public resendOTPTimer(){
  		
  		this.timeremain = 30;
  		var downloadTimer = setInterval(() => { //replaced function() by ()=>
			this.timeremain--;
			// console.log(this.timeremain);
			if(this.timeremain== 0){
				clearInterval(downloadTimer);
			}
			else{
				//show count down otp
				this.timeremain;
			}

		},1000);
  	}

  	public resendOTP(){
  		
  		this.SignupForm.value.otptype = 'resendotp';
  		this.SignupService.register(this.SignupForm.value)
        .pipe(first())
        .subscribe(
            data => {
            	console.log(data);
            	this.isOn = false;
            	//get otp in response store int one variable
            	// this.responeOTP = 8989;
            	this.tempotp = atob(atob(this.signupResponse.response.otp));
            	this.responeOTP = parseInt(this.tempotp);
            	this.resendOTPTimer();
            	// toaster success message
                // this.alertService.success('Registration successful', true);
                // this.router.navigate(['/login']);
            },
            error => {
            	console.log('error');
            	// toaster error message
                // this.alertService.error(error);
            });
  	}
}
