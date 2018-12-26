"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var model_service_1 = require("./model.service");
describe('ModelService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [model_service_1.ModelService]
        });
    });
    it('should be created', testing_1.inject([model_service_1.ModelService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=modal.service.spec.js.map