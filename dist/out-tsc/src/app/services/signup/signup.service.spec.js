"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var signup_service_1 = require("./signup.service");
describe('SignupService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [signup_service_1.SignupService]
        });
    });
    it('should be created', testing_1.inject([signup_service_1.SignupService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=signup.service.spec.js.map