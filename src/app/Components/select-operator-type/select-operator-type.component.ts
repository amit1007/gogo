import { Component, OnInit,OnDestroy } from '@angular/core';
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
  selector: 'app-select-operator-type',
  templateUrl: './select-operator-type.component.html',
  styleUrls: ['./select-operator-type.component.css']
})
export class SelectOperatorTypeComponent implements OnInit {

	op_type = 'individual';
	SelectOpratorForm : FormGroup;
	submitted = false;
	userLoggedIn:any;
	id: number;
  	private sub: any;
  	private currentUserStates: any;
  	private userResponse: any;
  	private currentUser: any;

	constructor(private formBuilder : FormBuilder,public SignupService : SignupService,private route:ActivatedRoute,private router:Router,private authenticationService : AuthenticationService,private alertService : AlertService,private toastr: ToastrService) { }

	ngOnInit() {
		this.currentUserStates = localStorage.getItem('constantVariable.currentUserStates')
		this.currentUser = JSON.parse(this.currentUserStates);
		console.log((JSON.parse(this.currentUserStates)));
		console.log('user mobile');
		console.log(this.currentUserStates);
		
		this.SelectOpratorForm = this.formBuilder.group({
	        status: this.formBuilder.control('registered'),
	        mobile: this.formBuilder.control(this.currentUser.mobile),
	        token: this.formBuilder.control(this.currentUser.token),
	        operator_state: this.formBuilder.control(this.currentUser.operator_state),
	        op_type: this.formBuilder.control(''),
	        optype1: this.formBuilder.control(''),
	        hiddenvalue:this.formBuilder.control(''),
	        countrycode: this.formBuilder.control(91),
	    });
	}

	OperatorType(optype){
		console.log('oprator type');
		console.log(optype);
		console.log(this.op_type = optype);
	}

	onSubmit(){
		this.submitted = true;
		if (this.SelectOpratorForm.invalid) {
		    console.log('incorrect login form');
		    return;
		}
		else {
			console.log('submit operater form');
			console.log(this.SelectOpratorForm.value);
			this.SelectOpratorForm.value.op_type = this.op_type;
			this.SelectOpratorForm.value.mobile = this.currentUser.mobile;
			this.SelectOpratorForm.value.token = this.currentUser.token;
			this.SelectOpratorForm.value.operator_state = this.currentUser.operator_state;
			this.SignupService.register(this.SelectOpratorForm.value)
            .pipe(first())
            .subscribe(
                data => {
                	console.log('register response before auto login');
                	this.userResponse = data;
                	console.log(this.userResponse);
                	// this.mobile = parseInt(this.userResponse.response.mobile);
                	// this.token = this.userResponse.response.token;

                	if(this.userResponse.response.token && this.userResponse.response.operator_state=='registered'){
                		//store auth login in local storage
                		localStorage.setItem('constantVariable.currentUser', JSON.stringify(this.userResponse));
                        // localStorage.setItem('constantVariable.currentUser', user);
                        localStorage.setItem('constantVariable.isLoggedIn', 'true');
                        localStorage.setItem('constantVariable.token', this.userResponse.response.token);
                        
                		this.toastr.success('You Registered Successfully.', 'Congratulations!');
                		this.router.navigate(['/myprofile']);
	            	}
	            	else{
	            		this.toastr.error('Something went wrong,Try Again.');
	            		// this.alertService.error('Something went wrong');
	            		this.router.navigate(['/']);
	            	}
	   			 },
                error => {
                	// this.alertService.error('Something went wrong,Try Again.');
                	this.toastr.error('Something went wrong,Try Again.');
                	this.router.navigate(['/']);
                });
			/*
			this.authenticationService.selectOprator(this.SelectOpratorForm.value)
            .pipe(first())
            .subscribe(
                data => {
                	this.userLoggedIn = data;
                	console.log('user auto login response');
                	console.log(this.userLoggedIn);

                	if(this.userLoggedIn.response.token){
                		this.router.navigate(['/myprofile']);
	            	}
	            	else{
	            		this.alertService.error('Something went wrong,Try Again.');
	            		this.router.navigate(['/signup']);
	            	}
                },
                error => {
                	this.alertService.error('Something went wrong,Try Again.');
            		this.router.navigate(['/signup']);
            	});
            */
		}
	}

}
