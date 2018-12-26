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
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

	vehicleInfoForm : FormGroup;
	submitted1 = false;

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

	constructor(private formBuilder : FormBuilder,private route:ActivatedRoute,private router:Router,private alertService : AlertService,private toastr: ToastrService) { }

	ngOnInit() {
		this.vehicleInfoForm = this.formBuilder.group({
		    veh_owner_name: ['', Validators.required],
		    veh_owner_mobile_no: ['', [ Validators.pattern(this.mobnumPattern)]],
		    veh_name: ['', [ Validators.required]],
		    veh_type: ['0', Validators.required],
		    veh_num1: ['', [ Validators.required ,Validators.minLength(2), /* Validators.pattern(this.onlyletterPattern) */ ]],
		    veh_num2: ['', [ Validators.required,Validators.minLength(2)]],
		    veh_num3: ['', [ Validators.required,Validators.minLength(2)]],
		    veh_num4: ['', [ Validators.required,Validators.minLength(4)]], //,Validators.pattern(this.onlynumberPattern)
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
	}

	// convenience getter for easy access to form fields Vehicle information
	get v() { return this.vehicleInfoForm.controls; }


	addVehicle(){
		this.submitted1 = true;
		console.log(this.vehicleInfoForm.value);
		if (this.vehicleInfoForm.invalid /* && this.is_v_tc==false */) {
		    console.log('form add vehicle is incorrect');
		    console.log(this.vehicleInfoForm.invalid);
		    return;
		}
		else{
			console.log('form add vehicle is correct');
		}
	}

	getVehicleImages(e){
		//console.log (e.target.files);
	    for (var i = 0; i < e.target.files.length; i++) { 
	      this.myCarFiles.push(e.target.files[i]);
	      this.myCarFilesImgName.push(e.target.files[i].name);
	    }
	    console.log('my uploaded car files names');
	    console.log(this.myCarFilesImgName);
	}	

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

	check_veh_terms_condition(){
		console.log('clicked vehicle t&c');
		this.is_veh_tc = true;	
	}

}
