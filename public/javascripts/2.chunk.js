(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/index.js!./src/app/auth/account/account.component.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/app/auth/account/account.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".errors {\r\n    display: block;\r\n}\r\n\r\n.account-settings {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\nfieldset {\r\n    border: 1px solid chartreuse;\r\n    padding: 10px;\r\n}\r\n\r\nlegend {\r\n    color: white;\r\n    width: unset;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./src/app/auth/account/account.component.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./src/app/auth/account/account.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!./account.component.css */ "./node_modules/css-loader/index.js!./src/app/auth/account/account.component.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/app/auth/account/account.component.css":
/*!****************************************************!*\
  !*** ./src/app/auth/account/account.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../../../node_modules/style-loader!../../../../node_modules/css-loader!./account.component.css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./src/app/auth/account/account.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./src/app/auth/account/account.component.html":
/*!*****************************************************!*\
  !*** ./src/app/auth/account/account.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"wrapper col-md-12\">\r\n        <form *ngIf=\"user\" class=\"account-settings\" (ngSubmit)=\"onUpdate()\" [formGroup]=\"accountSettingsForm\">\r\n            <fieldset>\r\n                <legend>Account Settings</legend>\r\n                <div class=\"form-group row justify-content-center\">\r\n                    <label for=\"username\" class=\"col-lg-1 col-form-label\">Username</label>\r\n                    <div class=\"col-lg-10\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"username\" formControlName=\"username\">\r\n                    </div>\r\n                    <div class=\"col-lg-1\">\r\n                        <i style=\"color: white;\" class=\"fa fa-pencil fa-2x\"></i>\r\n                    </div>\r\n                    <div class=\"errors col-lg-12 text-danger font-weight-bold\" *ngIf=\"usernameExists\">Username already exists</div>\r\n                    <div *ngIf=\"!accountSettingsForm.get('username').valid &&\r\n                     accountSettingsForm.get('username').touched\" class=\"errors col-lg-12 text-danger font-weight-bold\">\r\n                        <div *ngIf=\"accountSettingsForm.get('username').errors['required']\">This field is required</div>\r\n                        <div *ngIf=\"accountSettingsForm.get('username').errors['minlength'] ||\r\n                         accountSettingsForm.get('username').errors['maxlength']\"\r\n                        >Username length must be between 4 and 10\r\n                        </div>\r\n                        <div *ngIf=\"accountSettingsForm.get('username').errors['pattern']\">White spaces or special characters not\r\n                            allowed</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group row justify-content-center\">\r\n                    <label for=\"email\" class=\"col-lg-1 col-form-label\">Email</label>\r\n                    <div class=\"col-lg-10\">\r\n                        <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\">\r\n                    </div>\r\n                    <div class=\"col-lg-1\">\r\n                        <i style=\"color: white;\" class=\"fa fa-pencil fa-2x\"></i>\r\n                    </div>\r\n                    <div class=\"errors col-lg-12 text-danger font-weight-bold\" *ngIf=\"emailExists\">Email already exists</div>\r\n                    <div *ngIf=\"!accountSettingsForm.get('email').valid &&\r\n                     accountSettingsForm.get('email').touched\" class=\"errors col-lg-12 text-danger font-weight-bold\">\r\n                        <div *ngIf=\"accountSettingsForm.get('email').errors['required']\"\r\n                        >This field is required\r\n                        </div>\r\n                        <div *ngIf=\"accountSettingsForm.get('email').errors['pattern']\"\r\n                        >Email is not valid\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"settingsUpdated\" class=\"success col-lg-12 text-success font-weight-bold\">Settings updated\r\n                </div>\r\n                <button type=\"submit\" [disabled]=\"!accountSettingsForm.valid ||\r\n                 (accountSettingsForm.controls.username.value == user.username &&\r\n                  accountSettingsForm.controls.email.value == user.email)\" class=\"btn btn-primary pull-right\">Update\r\n                </button>\r\n            </fieldset>\r\n        </form>\r\n        <!-- Password change -->\r\n        <form *ngIf=\"user\" (ngSubmit)=\"onChangePassword()\" class=\"account-settings\" [formGroup]=\"accountPasswordForm\">\r\n            <fieldset>\r\n                <legend>Password</legend>\r\n                <div class=\"form-group row justify-content-center\">\r\n                    <label for=\"oldPassword\" class=\"col-lg-1 col-form-label\">Old</label>\r\n                    <div class=\"col-lg-10\">\r\n                        <input (keydown)=\"oldPasswordError? oldPasswordError = null : null\" type=\"password\"\r\n                               class=\"form-control\" id=\"oldPassword\" formControlName=\"oldPassword\">\r\n                    </div>\r\n                    <div class=\"col-lg-1\">\r\n                        <i style=\"color: white;\" class=\"fa fa-pencil fa-2x\"></i>\r\n                    </div>\r\n                    <div *ngIf=\"!accountPasswordForm.get('oldPassword').valid &&\r\n                     accountPasswordForm.get('oldPassword').touched\" class=\"errors col-lg-12 text-danger font-weight-bold\">\r\n                        <div *ngIf=\"accountPasswordForm.get('oldPassword').errors['required']\"\r\n                        >This field is required\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"oldPasswordError\" class=\"errors col-lg-12 text-danger font-weight-bold text-danger font-weight-bold\">\r\n                        {{oldPasswordError}}\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row justify-content-center\">\r\n                    <label for=\"password\" class=\"col-lg-1 col-form-label\">New</label>\r\n                    <div class=\"col-lg-10\">\r\n                        <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\">\r\n                    </div>\r\n                    <div class=\"col-lg-1\">\r\n                        <i style=\"color: white;\" class=\"fa fa-pencil fa-2x\"></i>\r\n                    </div>\r\n                    <div *ngIf=\"!accountPasswordForm.get('password').valid &&\r\n                     accountPasswordForm.get('password').touched\" class=\"errors col-lg-12 text-danger font-weight-bold\">\r\n                        <div *ngIf=\"accountPasswordForm.get('password').errors['required']\"\r\n                        >This field is required\r\n                        </div>\r\n                        <div *ngIf=\"accountPasswordForm.get('password').errors['minlength'] ||\r\n                        accountPasswordForm.get('password').errors['maxlength']\"\r\n                        >Password length must be between 8 and 16\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row justify-content-center\">\r\n                    <label for=\"confirmPassword\" class=\"col-lg-1 col-form-label\">Confirm</label>\r\n                    <div class=\"col-lg-10\">\r\n                        <input type=\"password\" class=\"form-control\" id=\"confirmPassword\"\r\n                               formControlName=\"confirmPassword\">\r\n                    </div>\r\n                    <div class=\"col-lg-1\">\r\n                        <i style=\"color: white;\" class=\"fa fa-pencil fa-2x\"></i>\r\n                    </div>\r\n                    <div *ngIf=\"!accountPasswordForm.get('confirmPassword').valid &&\r\n                     accountPasswordForm.get('confirmPassword').touched\" class=\"errors col-lg-12 text-danger font-weight-bold\">\r\n                        <div *ngIf=\"accountPasswordForm.get('confirmPassword').errors['required']\"\r\n                        >This field is required\r\n                        </div>\r\n                        <div *ngIf=\"accountPasswordForm.errors && accountPasswordForm.errors['mismatch']\"\r\n                        >This password and new password don't match\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"passwordChanged\" class=\"success col-lg-12 text-success font-weight-bold\">Password\r\n                    successfully changed\r\n                </div>\r\n                <button type=\"submit\" [disabled]=\"!accountPasswordForm.valid\" class=\"btn btn-primary pull-right\">Change\r\n                    Password\r\n                </button>\r\n            </fieldset>\r\n        </form>\r\n    </div>\r\n</div>";

/***/ }),

/***/ "./src/app/auth/account/account.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/account/account.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var Observable_1 = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
var user_model_1 = __webpack_require__(/*! ../user.model */ "./src/app/auth/user.model.ts");
var account_service_1 = __webpack_require__(/*! ./account.service */ "./src/app/auth/account/account.service.ts");
var AccountComponent = /** @class */ (function () {
    function AccountComponent(http, accountService) {
        this.http = http;
        this.accountService = accountService;
        this.usernameExists = false;
        this.emailExists = false;
        this.settingsUpdated = false;
        this.passwordChanged = false;
    }
    AccountComponent.prototype.initAccountSettingsForm = function () {
        this.accountSettingsForm = new forms_1.FormGroup({
            username: new forms_1.FormControl(this.user.username ? this.user.username : null, [
                forms_1.Validators.required,
                forms_1.Validators.pattern("^(\\d|\\w)+$"),
                forms_1.Validators.minLength(4),
                forms_1.Validators.maxLength(10)
            ]),
            email: new forms_1.FormControl(this.user.email ? this.user.email : null, [
                forms_1.Validators.required,
                forms_1.Validators.pattern("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])")
            ])
        });
    };
    AccountComponent.prototype.initAccountPasswordForm = function () {
        this.accountPasswordForm = new forms_1.FormGroup({
            oldPassword: new forms_1.FormControl(null, forms_1.Validators.required),
            password: new forms_1.FormControl(null, [
                forms_1.Validators.minLength(8),
                forms_1.Validators.maxLength(16),
                forms_1.Validators.required
            ]),
            confirmPassword: new forms_1.FormControl(null, [
                forms_1.Validators.minLength(8),
                forms_1.Validators.maxLength(16),
                forms_1.Validators.required
            ])
        }, this.passwordsShouldMatch);
    };
    AccountComponent.prototype.onUpdate = function () {
        var _this = this;
        this.usernameExists = false;
        this.emailExists = false;
        var user = new user_model_1.User(this.accountSettingsForm.controls.username.value, this.accountSettingsForm.controls.email.value);
        this.accountService.updateUser(user)
            .catch(function (err) {
            if (err['error']['error']['errors']['username'] && err['error']['error']['errors']['username']['kind'] == 'unique') {
                _this.usernameExists = true;
            }
            if (err['error']['error']['errors']['email'] && err['error']['error']['errors']['email']['kind'] == 'unique') {
                _this.emailExists = true;
            }
            return Observable_1.Observable.empty();
        })
            .subscribe(function (res) {
            _this.user.username = res['obj']['username'];
            _this.user.email = res['obj']['email'];
            _this.settingsUpdated = true;
            setTimeout(function () { return _this.settingsUpdated = false; }, 3000);
            console.log(res);
        });
    };
    AccountComponent.prototype.onChangePassword = function () {
        var _this = this;
        this.accountService.changePassword(this.accountPasswordForm.controls.oldPassword.value, this.accountPasswordForm.controls.password.value, this.accountPasswordForm.controls.confirmPassword.value)
            .catch(function (err) {
            _this.oldPasswordError = err['error']['title'];
            return Observable_1.Observable.empty();
        })
            .subscribe(function (res) {
            _this.oldPasswordError = null;
            _this.passwordChanged = true;
            _this.accountPasswordForm.reset();
            setTimeout(function () { return _this.passwordChanged = false; }, 3000);
        });
    };
    AccountComponent.prototype.passwordsShouldMatch = function (fGroup) {
        return fGroup.get('password').value === fGroup.get('confirmPassword').value
            ? null : { 'mismatch': true };
    };
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:3000/api/user/account')
            .catch(function (err) {
            return Observable_1.Observable.empty();
        })
            .subscribe(function (user) {
            _this.user = new user_model_1.User(user['username'], user['email']);
            _this.initAccountSettingsForm();
            _this.initAccountPasswordForm();
        });
    };
    ;
    AccountComponent = __decorate([
        core_1.Component({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/auth/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/auth/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, account_service_1.AccountService])
    ], AccountComponent);
    return AccountComponent;
}());
exports.AccountComponent = AccountComponent;


/***/ }),

/***/ "./src/app/auth/account/account.service.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/account/account.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.updateUser = function (user) {
        return this.http.put('http://localhost:3000/api/user/account', user);
    };
    AccountService.prototype.changePassword = function (oldPassword, password, confirmPassword) {
        return this.http.put('http://localhost:3000/api/user/account/password', { oldPassword: oldPassword, password: password, confirmPassword: confirmPassword });
    };
    AccountService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;


/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['user', 'signin']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], AuthGuardService);
    return AuthGuardService;
}());
exports.AuthGuardService = AuthGuardService;


/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var signup_component_1 = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
var signin_component_1 = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
var auth_guard_service_1 = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
var account_component_1 = __webpack_require__(/*! ./account/account.component */ "./src/app/auth/account/account.component.ts");
var authRoutes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'account', component: account_component_1.AccountComponent, canActivate: [auth_guard_service_1.AuthGuardService] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(authRoutes)],
            exports: [router_1.RouterModule]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());
exports.AuthRoutingModule = AuthRoutingModule;


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var auth_routing_module_1 = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
var signup_component_1 = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
var signin_component_1 = __webpack_require__(/*! ./signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var auth_guard_service_1 = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
var account_component_1 = __webpack_require__(/*! ./account/account.component */ "./src/app/auth/account/account.component.ts");
var account_service_1 = __webpack_require__(/*! ./account/account.service */ "./src/app/auth/account/account.service.ts");
var angular_jwt_1 = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [
                auth_routing_module_1.AuthRoutingModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
            ],
            declarations: [
                signup_component_1.SignupComponent,
                signin_component_1.SigninComponent,
                account_component_1.AccountComponent
            ],
            providers: [
                auth_service_1.AuthService,
                account_service_1.AccountService,
                auth_guard_service_1.AuthGuardService,
                angular_jwt_1.JwtHelperService
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"wrapper col-md-12\">\r\n            <form class=\"sign col-md-7\" [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"email\">Email address</label>\r\n                    <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" formControlName=\"email\">\r\n                    <div *ngIf=\"!signinForm.get('email').valid && signinForm.get('email').touched\" class=\"errors text-danger font-weight-bold\">\r\n                        <div *ngIf=\"signinForm.get('email').errors['required']\">This field is required</div>\r\n                        <div *ngIf=\"signinForm.get('email').errors['pattern']\">Email is not valid</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n                    <div *ngIf=\"!signinForm.get('password').valid && signinForm.get('password').touched\" class=\"errors text-danger font-weight-bold\">\r\n                        <div *ngIf=\"signinForm.get('password').errors['required']\">This field is required</div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"loginError\" class=\"errors text-danger font-weight-bold\">{{loginError}}</div>\r\n                <button [disabled]=\"!signinForm.valid\" type=\"submit\" class=\"btn btn-primary\">Login</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var user_model_1 = __webpack_require__(/*! ../user.model */ "./src/app/auth/user.model.ts");
var auth_service_1 = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var Observable_1 = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new user_model_1.User('user', this.signinForm.value.email, this.signinForm.value.password);
        this.authService.signin(user)
            .catch(function (err) {
            _this.loginError = err['error']['error']['message'];
            return Observable_1.Observable.empty();
        })
            .subscribe(function (data) {
            localStorage.setItem('token', data['token']);
            localStorage.setItem('userId', data['userId']);
            _this.router.navigateByUrl('/user/account');
        });
    };
    SigninComponent.prototype.ngOnInit = function () {
        if (this.authService.isLoggedIn()) {
            this.router.navigateByUrl('/user/account');
        }
        this.signinForm = new forms_1.FormGroup({
            email: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.pattern("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])")
            ]),
            password: new forms_1.FormControl(null, forms_1.Validators.required)
        });
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html")
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;


/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"wrapper col-md-12\">\r\n            <form class=\"sign col-md-7\" [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"username\">Username</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\"\r\n                           formControlName=\"username\">\r\n                    <div class=\"errors text-danger font-weight-bold\" *ngIf=\"usernameExists\">Username already exists</div>\r\n                    <div *ngIf=\"!signupForm.get('username').valid && signupForm.get('username').touched\"\r\n                         class=\"errors text-danger font-weight-bold\">\r\n                        <div *ngIf=\"signupForm.get('username').errors['required']\">This field is required</div>\r\n                        <div *ngIf=\"signupForm.get('username').errors['minlength'] ||\r\n                        signupForm.get('username').errors['maxlength']\">Username length must be between 4 and 10\r\n                        </div>\r\n                        <div *ngIf=\"signupForm.get('username').errors['pattern']\">White spaces or special characters not\r\n                            allowed\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"email\">Email address</label>\r\n                    <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\"\r\n                           formControlName=\"email\">\r\n                    <div class=\"errors text-danger font-weight-bold\" *ngIf=\"emailExists\">Email already exists</div>\r\n                    <div *ngIf=\"!signupForm.get('email').valid && signupForm.get('email').touched\"\r\n                         class=\"errors text-danger font-weight-bold\">\r\n                        <div *ngIf=\"signupForm.get('email').errors['required']\">This field is required</div>\r\n                        <div *ngIf=\"signupForm.get('email').errors['pattern']\">Email is not valid</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\"\r\n                           formControlName=\"password\">\r\n                    <div *ngIf=\"!signupForm.get('password').valid && signupForm.get('password').touched\"\r\n                         class=\"errors text-danger font-weight-bold\">\r\n                        <div *ngIf=\"signupForm.get('password').errors['required']\">This field is required</div>\r\n                        <div *ngIf=\"signupForm.get('password').errors['minlength'] ||\r\n                            signupForm.get('password').errors['minlength']\">Password length must be between 8 and 16\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\">Confirm Password</label>\r\n                    <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" placeholder=\"Confirm password\"\r\n                           formControlName=\"confirmPassword\">\r\n                    <div *ngIf=\"!signupForm.get('confirmPassword').valid && signupForm.get('confirmPassword').touched\"\r\n                         class=\"errors text-danger font-weight-bold\">\r\n                        <div *ngIf=\"signupForm.get('confirmPassword').errors['required']\">This field is required</div>\r\n                        <div *ngIf=\"signupForm.errors && signupForm.errors['mismatch']\">Passwords don't match</div>\r\n                    </div>\r\n                </div>\r\n                <button [disabled]=\"!signupForm.valid\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var auth_service_1 = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var user_model_1 = __webpack_require__(/*! ../user.model */ "./src/app/auth/user.model.ts");
var Observable_1 = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
        this.usernameExists = false;
        this.emailExists = false;
    }
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.usernameExists = false;
        this.emailExists = false;
        var user = new user_model_1.User(this.signupForm.value.username, this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.confirmPassword);
        this.authService.signup(user)
            .catch(function (err) {
            if (err['error']['error']['errors']['username'] && err['error']['error']['errors']['username']['kind'] == 'unique') {
                _this.usernameExists = true;
            }
            if (err['error']['error']['errors']['email'] && err['error']['error']['errors']['email']['kind'] == 'unique') {
                _this.emailExists = true;
            }
            return Observable_1.Observable.empty();
        })
            .subscribe(function (res) { return console.log(res); });
        this.signupForm.reset();
    };
    SignupComponent.prototype.passwordsShouldMatch = function (fGroup) {
        return fGroup.get('password').value === fGroup.get('confirmPassword').value
            ? null : { 'mismatch': true };
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = new forms_1.FormGroup({
            username: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.minLength(4),
                forms_1.Validators.maxLength(10),
                forms_1.Validators.pattern("^(\\d|\\w)+$")
            ]),
            email: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.pattern("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])")
            ]),
            password: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.minLength(8),
                forms_1.Validators.maxLength(16)
            ]),
            confirmPassword: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.minLength(8),
                forms_1.Validators.maxLength(16)
            ])
        }, this.passwordsShouldMatch);
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html")
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;


/***/ }),

/***/ "./src/app/auth/user.model.ts":
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(username, email, password, confirmPassword) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
    return User;
}());
exports.User = User;


/***/ })

}]);
//# sourceMappingURL=2.chunk.js.map