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
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var constant_1 = require("../../../app/constant");
var http_2 = require("@angular/common/http");
// import * as AWS from 'aws-sdk/global';
// import * as S3 from 'aws-sdk/clients/s3';
// import * as AWS from 'aws-sdk';
var MyprofileService = /** @class */ (function () {
    // public http: Http
    function MyprofileService(http) {
        this.http = http;
        console.log('myprofile service');
    }
    MyprofileService.prototype.getPersonalInfo = function (userId) {
        console.log('get user personal info');
        return this.http.get(constant_1.constantVariable.API_ENDPOINT + 'api/operators/personal-information/' + userId);
        // return this.http.get(constantVariable.API_ENDPOINT+'api/operators/drivers/',userId)
    };
    MyprofileService.prototype.savePersonalInfo = function (data) {
        console.log('save personal service');
        return this.http.post(constant_1.constantVariable.API_ENDPOINT + 'api/operators/save-personal-information', data)
            .pipe(operators_1.map(function (res) {
            if (res.response) {
                //personal information saved successfully
                console.log('personal info saved sucessfully');
            }
            return res;
        }));
    };
    MyprofileService.prototype.saveVehicleInfo = function (data) {
        console.log('save personal service');
        var headers = new http_2.HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        headers.append('Content-Type', 'application/json');
        return this.http.post(constant_1.constantVariable.API_ENDPOINT + 'api/operators/register/vehicle/', data, { headers: headers })
            .pipe(operators_1.map(function (res) {
            if (res.response) {
                console.log('vehicle info saved sucessfully');
            }
            return res;
        }));
    };
    MyprofileService.prototype.saveBusinessInfo = function (data) {
        console.log('save personal service');
        var headers = new http_2.HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        headers.append('Content-Type', 'application/json');
        return this.http.post(constant_1.constantVariable.API_ENDPOINT + 'api/operators/register/business/', data, { headers: headers })
            .pipe(operators_1.map(function (res) {
            if (res.response) {
                console.log('business info saved sucessfully');
            }
            return res;
        }));
    };
    MyprofileService.prototype.saveBankInfo = function (data) {
        console.log('save bank service');
        return this.http.post(constant_1.constantVariable.API_ENDPOINT + 'api/operators/register/bankDetails', data)
            .pipe(operators_1.map(function (res) {
            if (res.response) {
                //personal information saved successfully
                console.log('bank info saved sucessfully');
            }
            return res;
        }));
    };
    MyprofileService.prototype.uploadfile = function (file) {
        console.log('upload profile pic function');
        console.log(this.FOLDER);
        console.log(constant_1.constantVariable.S3accessKeyId);
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
    };
    MyprofileService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MyprofileService);
    return MyprofileService;
}());
exports.MyprofileService = MyprofileService;
//# sourceMappingURL=myprofile.service.js.map