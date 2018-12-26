import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import {constantVariable} from '../../../app/constant';
import { HttpHeaders } from '@angular/common/http';
// import * as AWS from 'aws-sdk/global';
// import * as S3 from 'aws-sdk/clients/s3';
// import * as AWS from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class MyprofileService {
 	FOLDER : string; 
 	// public http: Http
   constructor(private http: HttpClient) { 
		console.log('myprofile service');
	}

 	getPersonalInfo(userId) {
	    console.log('get user personal info');
		return this.http.get(constantVariable.API_ENDPOINT+'api/operators/personal-information/'+userId)
		// return this.http.get(constantVariable.API_ENDPOINT+'api/operators/drivers/',userId)
	}

 	savePersonalInfo(data) {
	    console.log('save personal service');
	    return this.http.post<any>(constantVariable.API_ENDPOINT+'api/operators/save-personal-information',data)
	    // return this.http.post<any>(constantVariable.API_ENDPOINT+'api/operators/register/',data)
	        .pipe(map(res => {
	                if(res.response){
	                    //personal information saved successfully
	                    console.log('personal info saved sucessfully');
	                }
            return res;
        }));
	}

	saveVehicleInfo(data) {
	    console.log('save personal service');
	    let headers = new HttpHeaders(); 
		headers.append('Access-Control-Allow-Origin','*');
		headers.append('Access-Control-Allow-Methods','POST');
		headers.append('Access-Control-Allow-Headers','X-Requested-With,content-type');
		headers.append('Content-Type', 'application/json');
		
	    return this.http.post<any>(constantVariable.API_ENDPOINT+'api/operators/register/vehicle/',data, {headers: headers})
	    	
	    // return this.http.post<any>(constantVariable.API_ENDPOINT+'api/operators/driver/savepersonalinfo',data)
	        .pipe(map(res => {
                if(res.response){
                	console.log('vehicle info saved sucessfully');
                }
            return res;
        }));
	}

	saveBusinessInfo(data){
		console.log('save personal service');
	    let headers = new HttpHeaders(); 
		headers.append('Access-Control-Allow-Origin','*');
		headers.append('Access-Control-Allow-Methods','POST');
		headers.append('Access-Control-Allow-Headers','X-Requested-With,content-type');
		headers.append('Content-Type', 'application/json');
		
	    return this.http.post<any>(constantVariable.API_ENDPOINT+'api/operators/register/business/',data, {headers: headers})
	    	
	    // return this.http.post<any>(constantVariable.API_ENDPOINT+'api/operators/driver/savepersonalinfo',data)
	        .pipe(map(res => {
                if(res.response){
                	console.log('business info saved sucessfully');
                }
            return res;
        }));
	}

	saveBankInfo(data) {
        console.log('save bank service');
        return this.http.post<any>(constantVariable.API_ENDPOINT+'api/operators/register/bankDetails',data)
        // return this.http.post<any>(constantVariable.API_ENDPOINT+'api/operators/driver/savepersonalinfo',data)
            .pipe(map(res => {
                    if(res.response){
                        //personal information saved successfully
                        console.log('bank info saved sucessfully');
                    }
           return res;
       }));
    }
    
	uploadfile(file) {
 		console.log('upload profile pic function');
 		console.log(this.FOLDER);
 		console.log(constantVariable.S3accessKeyId);

		/*
		this.FOLDER = 'madhuri_c' + '/child_photo/';
		AWS.config.accessKeyId = constantVariable.S3accessKeyId;
		AWS.config.secretAccessKey = constantVariable.S3secretAccessKey;
		var bucket = new AWS.S3({params: {Bucket: constantVariable.S3Bucket}});

		var params = {Bucket: constantVariable.S3Bucket, 
					 Key:  this.FOLDER + file.name,
					 Body: file, 
					 ACL: 'public-read'};
		bucket.upload(params, function (err, res) {
		   console.log(err, res);
		     if (err) {
		        console.log('There was an error uploading your file: ', err);
		        return false;
		      }
		 
		      console.log('Successfully uploaded file.', res);
		      return true;
		});
		*/

	 //   	var bucket = new S3(
		//   {
		//     accessKeyId: 'YOUR-ACCESS-KEY-ID',
		//     secretAccessKey: 'YOUR-SECRET-ACCESS-KEY',
		//     region: 'us-east-1'
		//   }
		// );
		 
		// var params = {
		//   Bucket: 'jsa-angular4-bucket',
		//   Key: 'jsa-s3/' + file.name,
		//   Body: file
		// };
		 
		// bucket.upload(params, function (err, data) {
		//   // ...
		// });
	}
}
