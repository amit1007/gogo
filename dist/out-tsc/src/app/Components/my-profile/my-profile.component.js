"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var signup_service_1 = require("../../services/signup/signup.service");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../../services/authentication/authentication.service");
var alert_service_1 = require("../../services/alert/alert.service");
var myprofile_service_1 = require("../../services/myprofile/myprofile.service");
var ngx_toastr_1 = require("ngx-toastr");
var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(formBuilder, SignupService, route, router, authenticationService, alertService, myprofileService, toastr) {
        this.formBuilder = formBuilder;
        this.SignupService = SignupService;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.myprofileService = myprofileService;
        this.toastr = toastr;
        this.isTrue = false;
        this.submitted = false;
        this.submitted1 = false;
        this.submitted2 = false;
        this.is_bank_submitted = false;
        this.Islogin = false;
        this.unamePattern = '^[-\sa-zA-Z\s-]+$';
        this.onlynumberPattern = '^[0-9]\d*$';
        this.pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
        this.mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.onlyletterPattern = "/[^a-zA-Z]/g";
        this.bankIFSCPattern = '^[A-Za-z]{4}[a-zA-Z0-9]{7}$';
        this.onlytwoletterPattern = '/^[a-z]{2}$/i';
        this.sameMobile = false;
        this.myCarFiles = [];
        this.myCarFilesImgName = [];
        this.is_v_tc = false;
        this.is_b_tc = false;
        this.isLoaderAvailable = false;
        this.is_tc = false;
        this.is_veh_tc = false;
        this.is_personal_tc = false;
        this.is_bank_tc = false;
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        // console.log('In my profile componenet');
        this.currentuser = localStorage.getItem('constantVariable.currentUser');
        // console.log(JSON.parse(this.currentuser));
        if (this.currentuser) {
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
            op_bu_name: ['', forms_1.Validators.required],
            op_bu_address_line_1: ['', [forms_1.Validators.required]],
            op_bu_address_line_2: '',
            op_bu_address_line_3: '',
            op_bu_address_pin_code: ['', [forms_1.Validators.required]],
            op_bu_landmark: ['', [forms_1.Validators.required]],
            op_bu_address_city: ['1', forms_1.Validators.required],
            op_bu_address_state: ['27', forms_1.Validators.required],
            op_bu_gstn_no: ['', [forms_1.Validators.required]],
            op_bu_email: ['', [forms_1.Validators.pattern(this.emailPattern)]],
            op_bu_pan_no: '',
            op_bu_base_charge: ['', [forms_1.Validators.required]],
            op_bu_per_km: ['', [forms_1.Validators.required]],
            op_bu_loader_available: ['', [forms_1.Validators.required]],
            op_bu_no_person: '',
            op_bu_charge_per_person: '',
            oprator_id: this.userid,
            bu_terms_condition: ['', forms_1.Validators.required],
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
    };
    MyProfileComponent.prototype.ngAfterViewInit = function () {
        // this.isUserLoggedIn();
        // this.getUsername();
    };
    Object.defineProperty(MyProfileComponent.prototype, "p", {
        // convenience getter for easy access to form fields Personal Information
        get: function () { return this.personalInfoForm.controls; },
        enumerable: true,
        configurable: true
    });
    // convenience getter for easy access to form fields Vehicle information
    // get v() { return this.vehicleInfoForm.controls; }
    // // convenience getter for easy access to form fields Vehicle information
    // get b() { return this.businessInfoForm.controls; }
    // get bb() { return this.bankInfoForm.controls; }
    // convenience getter for easy access to form fields Vehicle information
    // get d() { return this.addDriverInfoForm.controls; }
    MyProfileComponent.prototype.check_personal_terms_condition = function () {
        console.log('clicked vehicle t&c');
        this.is_personal_tc = true;
    };
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
    MyProfileComponent.prototype.changeValue = function (value) {
        this.personalInfoForm.value.op_alternative_mobile_checbox = value;
        if (value == true) {
            this.sameMobile = true;
            this.personalInfoForm.value.op_alternative_mobile_checbox = this.personalInfoForm.value.op_mobile_no;
        }
        else {
            this.sameMobile = false;
        }
    };
    // changeTCondition(value){
    // 	console.log('check personal terms and condition');
    // 	console.log(value);
    // 	this.personalInfoForm.value.agree_terms_condition = value;
    // }
    MyProfileComponent.prototype.changeVTCondition = function (value) {
        console.log('check vehicle terms and condition');
        console.log(value);
        if (value == true) {
            this.is_v_tc = true;
        }
        else {
            this.is_v_tc = false;
        }
        this.vehicleInfoForm.value.veh_terms_condition = value;
    };
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
    MyProfileComponent.prototype.onFileChange = function (event) {
        this.selectedFile = event.target.files;
        console.log(this.selectedFile);
        this.filename = this.selectedFile.item(0);
        this.personalInfoForm.value.op_profile = this.filename.name;
        this.personalInfoForm.value.profile_pic_arr = event.target.files;
        console.log('file details');
        console.log(event.target.files);
        console.log('profile filename');
        console.log(this.personalInfoForm.value.op_profile);
    };
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
    MyProfileComponent.prototype.onDateSelect = function (dateValue) {
        console.log('date picker');
        console.log(dateValue);
    };
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
    MyProfileComponent.prototype.onSubmitDriverInfo = function () {
        this.submitted2 = true;
        console.log(this.addDriverInfoForm.value);
        if (this.addDriverInfoForm.invalid) {
            console.log('incorrect');
            return;
        }
        else {
            console.log('save driver information');
        }
    };
    MyProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-my-profile',
            templateUrl: './my-profile.component.html',
            styleUrls: ['./my-profile.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, signup_service_1.SignupService, router_1.ActivatedRoute, router_1.Router, authentication_service_1.AuthenticationService, alert_service_1.AlertService, myprofile_service_1.MyprofileService, ngx_toastr_1.ToastrService])
    ], MyProfileComponent);
    return MyProfileComponent;
}());
exports.MyProfileComponent = MyProfileComponent;
//# sourceMappingURL=my-profile.component.js.map