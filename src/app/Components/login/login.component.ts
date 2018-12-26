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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	title = 'app';
	LoginForm : FormGroup;
	submitted = false;
	userLoggedIn : any;

	constructor(private formBuilder : FormBuilder,public SignupService : SignupService,private route:ActivatedRoute,private router:Router,private authenticationService : AuthenticationService,private alertService : AlertService) { 
		
	}

	ngOnInit() {
  		this.LoginForm = this.formBuilder.group({
	        mobile: ['', [Validators.required, Validators.minLength(10)]],
         	// password: ['', [Validators.required, Validators.minLength(6)]],
         	// countrycode: ['', Validators.required],
         	countrycode: this.formBuilder.control(91),
         	// rememberme: this.formBuilder.control(''),
         	status: this.formBuilder.control('login'),
	    });
    }

    // convenience getter for easy access to login form fields
	get l() { return this.LoginForm.controls; }

	onSubmit(){
		this.submitted = true;
		if (this.LoginForm.invalid) {
		    console.log('incorrect login form');
		    return;
		}
		else {
			console.log(this.LoginForm.value);
			this.router.navigate(['/myprofile']);
			/*
				this.authenticationService.login(this.LoginForm.value)
		        .pipe(first())
		        .subscribe(
		            data => {
		            	this.userLoggedIn = data;
		            	if(this.userLoggedIn.response.token){

		            		console.log('login sucessfully');
							this.router.navigate(['/myprofile']);
		            	}
		            	else if(this.userLoggedIn.response.status = 'Failed'){
		            		console.log('error in login page');
		            		this.alertService.error(this.userLoggedIn.response.msg);
		            	}
		            	console.log('in login response');
		            },
		            error => {
		            	this.alertService.error('Something went wrong.');
		            	console.log('something went wrong');
		            	this.router.navigate(['/login']);
		        	});
    		*/
		}
	}

	forgotPassword(){
		console.log('inside forgot password screen');
	}
}
