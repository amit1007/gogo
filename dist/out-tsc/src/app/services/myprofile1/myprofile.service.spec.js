"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var myprofile_service_1 = require("./myprofile.service");
describe('MyprofileService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [myprofile_service_1.MyprofileService]
        });
    });
    it('should be created', testing_1.inject([myprofile_service_1.MyprofileService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=myprofile.service.spec.js.map