import { Component, OnInit,NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators,FormControl,FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser'
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Product, SellingPoint } from '../../product'
import { ToastrService } from 'ngx-toastr';
import { AlertService } from '../../services/alert/alert.service';
import { SignupService } from '../../services/signup/signup.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {

	addDriverForm : FormGroup;
	submitted = false;
	selectedFileArr:any;
	filename:any;

	Islogin = false;
	unamePattern = '^[-\sa-zA-Z\s-]+$';
	onlynumberPattern = '^[0-9]\d*$';
	pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
	mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
	emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
	onlyletterPattern = "/[^a-zA-Z]/g";
	bankIFSCPattern = '^[A-Za-z]{4}[a-zA-Z0-9]{7}$';
	onlytwoletterPattern = '/^[a-z]{2}$/i';
	
	constructor(private formBuilder : FormBuilder,private route:ActivatedRoute,private router:Router,private alertService : AlertService,private toastr: ToastrService) { }

	ngOnInit() {
		this.addDriverForm = this.formBuilder.group({
		    d_name: ['', Validators.required],
		    d_mobile: ['', [ Validators.pattern(this.mobnumPattern)]],
		    d_num1: ['', [ Validators.required ,Validators.minLength(2), /* Validators.pattern(this.onlyletterPattern) */ ]],
		    d_num2: ['', [ Validators.required,Validators.minLength(2)]],
		    d_num3: ['', [ Validators.required,Validators.minLength(2)]],
		    d_num4: ['', [ Validators.required,Validators.minLength(4)]], //,Validators.pattern(this.onlynumberPattern)
		    d_driver_licence_no: ['', Validators.required],
		    d_driving_validity: ['', Validators.required],
		    d_city: ['', [ Validators.required]],
		    d_working_hours_to: ['', [ Validators.required]],
		    d_working_hours_from: ['', [ Validators.required]],
		    d_upload_pan : '',
			d_upload_adhar : '',
			d_upload_driving_licence : '',
			d_profileimage : '',
		    // veh_name: ['', [ Validators.required]],
		    // veh_type: ['0', Validators.required],
		    // veh_registration_no : this.formBuilder.control(''),
		    // veh_driving_licence_no : ['', Validators.required],
		    // veh_validity: ['', [ Validators.required]],
		    // veh_images: '',
		    // // veh_images: ['', [ Validators.required]],
		    // veh_terms_condition : ['', [ ]],
		    // veh_op_id : this.formBuilder.control(this.userid),
	    });
	}

	// convenience getter for easy access to form fields Vehicle information
	get d() { return this.addDriverForm.controls; }

	addDriver(){
		this.submitted = true;
		console.log(this.addDriverForm.value);
		if (this.addDriverForm.invalid /* && this.is_v_tc==false */) {
		    console.log('form add driver is incorrect');
		    console.log(this.addDriverForm.invalid);
		    return;
		}
		else{
			console.log('form add driver is correct');
		}
	}

	getDriverProfile(event){
		this.selectedFileArr = event.target.files;
		this.filename = this.selectedFileArr.item(0);
		this.addDriverForm.value.d_profileimage = this.filename.name;
	}
}



