import { Component, OnInit , NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators,FormControl,FormArray } from '@angular/forms';
import { SignupService } from '../../services/signup/signup.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../services/alert/alert.service';
import { MyprofileService } from '../../services/myprofile/myprofile.service';
import { interval } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser'
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-more-driver',
  templateUrl: './add-more-driver.component.html',
  styleUrls: ['./add-more-driver.component.css']
})
export class AddMoreDriverComponent implements OnInit {

    adddriverForm : FormGroup;
    submitted = false;
	is_v_tc : boolean = false;
	is_veh_tc : boolean = false;
	urls = new Array<string>();
	Files:string [] = [];
	FileName:string [] = [];

  constructor(private formBuilder : FormBuilder) {

  }

  ngOnInit() {
  	this.adddriverForm = this.formBuilder.group({
            itemRows: this.formBuilder.array([this.initDriverItemRows()]),
            veh_terms_condition:[''],
        });
  }

  initDriverItemRows() {
        return this.formBuilder.group({
            // list all your form controls here, which belongs to your form array
            driver_name: [''],
            driver_mob_num: [''],
            driver_lic_num : [''],
            driver_lic_vali_num : [''],
            driver_aadhar_num : [''],
            up_profile : [''],
            veh_doc_pan : [''],
            veh_upload_adhar: [''],
            veh_upload_driving_licence: [''],
            // veh_terms_condition:[''],
        });
    }

    createForm(){
        this.adddriverForm = this.formBuilder.group({
            itemRows: this.formBuilder.array([])
        });
        this.adddriverForm.setControl('itemRows', this.formBuilder.array([]));
    }

    get itemRows(): FormArray {
        return this.adddriverForm.get('itemRows') as FormArray;
    }

    addNewRow() {
        // control refers to your formarray
        const control = <FormArray>this.adddriverForm.controls['itemRows'];
        // add new formgroup
        control.push(this.initDriverItemRows());
    }

    deleteRow(index: number) {
        // control refers to your formarray
        const control = <FormArray>this.adddriverForm.controls['itemRows'];
        // remove the chosen row
        control.removeAt(index);
    }

    changeVTCondition(value){
      console.log('check vehicle terms and condition');
      console.log(value);
      if(value==true){
        this.is_v_tc = true;
      }else{
        this.is_v_tc = false;
      }
    }

    check_veh_terms_condition(){
		console.log('clicked vehicle t&c');
		this.is_veh_tc = true;	
	}

}
