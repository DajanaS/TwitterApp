webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__public_profile_public_profile_component__ = __webpack_require__("../../../../../src/app/public-profile/public-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_4__logout_logout_component__["a" /* LogoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_8__public_profile_public_profile_component__["a" /* PublicProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', redirectTo: '/home', pathMatch: 'full', canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]] },
    { path: 'nav', component: __WEBPACK_IMPORTED_MODULE_3__navigation_navigation_component__["a" /* NavigationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_6__edit_profile_edit_profile_component__["a" /* EditProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_guard__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: '/login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Twitter App';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__publish_tweet_publish_tweet_component__ = __webpack_require__("../../../../../src/app/publish-tweet/publish-tweet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__public_profile_public_profile_component__ = __webpack_require__("../../../../../src/app/public-profile/public-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__delete_tweet_delete_tweet_component__ = __webpack_require__("../../../../../src/app/delete-tweet/delete-tweet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_management_service__ = __webpack_require__("../../../../../src/app/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tweet_management_service__ = __webpack_require__("../../../../../src/app/tweet-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__like_management_service__ = __webpack_require__("../../../../../src/app/like-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pipes_age_pipe__ = __webpack_require__("../../../../../src/app/pipes/age-pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__upload_avatar_upload_avatar_component__ = __webpack_require__("../../../../../src/app/upload-avatar/upload-avatar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__autofocus_directive__ = __webpack_require__("../../../../../src/app/autofocus.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_13__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__publish_tweet_publish_tweet_component__["a" /* PublishTweetComponent */],
                __WEBPACK_IMPORTED_MODULE_15__edit_profile_edit_profile_component__["a" /* EditProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__public_profile_public_profile_component__["a" /* PublicProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pipes_age_pipe__["a" /* AgePipe */],
                __WEBPACK_IMPORTED_MODULE_17__delete_tweet_delete_tweet_component__["a" /* DeleteTweetComponent */],
                __WEBPACK_IMPORTED_MODULE_23__upload_avatar_upload_avatar_component__["a" /* UploadAvatarComponent */],
                __WEBPACK_IMPORTED_MODULE_24__autofocus_directive__["a" /* AutofocusDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular2_moment__["MomentModule"]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__publish_tweet_publish_tweet_component__["a" /* PublishTweetComponent */], __WEBPACK_IMPORTED_MODULE_15__edit_profile_edit_profile_component__["a" /* EditProfileComponent */], __WEBPACK_IMPORTED_MODULE_17__delete_tweet_delete_tweet_component__["a" /* DeleteTweetComponent */], __WEBPACK_IMPORTED_MODULE_23__upload_avatar_upload_avatar_component__["a" /* UploadAvatarComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__user_management_service__["a" /* UserManagementService */], __WEBPACK_IMPORTED_MODULE_19__tweet_management_service__["a" /* TweetManagementService */], __WEBPACK_IMPORTED_MODULE_20__like_management_service__["a" /* LikeManagementService */], __WEBPACK_IMPORTED_MODULE_21__auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_management_service__ = __webpack_require__("../../../../../src/app/user-management.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(userManagementService, router) {
        this.userManagementService = userManagementService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.userManagementService.getAuthenticatedUser().map(function (user) {
            var val = false;
            if (user !== null) {
                val = true;
                console.log('Logged in');
            }
            else {
                console.log('Not logged in');
                _this.router.navigate(['/login']);
            }
            return val;
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_management_service__["a" /* UserManagementService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/autofocus.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutofocusDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(el) {
        this.el = el;
    }
    AutofocusDirective.prototype.ngAfterViewInit = function () {
        this.el.nativeElement.focus();
    };
    AutofocusDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAutofocus]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], AutofocusDirective);
    return AutofocusDirective;
}());



/***/ }),

/***/ "../../../../../src/app/delete-tweet/delete-tweet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/delete-tweet/delete-tweet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteTweetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tweet_management_service__ = __webpack_require__("../../../../../src/app/tweet-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeleteTweetComponent = /** @class */ (function () {
    function DeleteTweetComponent(activeModal, tweetService, router) {
        this.activeModal = activeModal;
        this.tweetService = tweetService;
        this.router = router;
    }
    DeleteTweetComponent.prototype.ngOnInit = function () {
    };
    DeleteTweetComponent.prototype.yes = function () {
        var _this = this;
        this.tweetService.deleteTweet(this.tweetId).subscribe(function (resp) {
            if (resp) {
                _this.tweetService.tweetDeleted(_this.tweetId);
            }
        });
        this.activeModal.close();
        this.router.navigate(['/nav']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DeleteTweetComponent.prototype, "tweetId", void 0);
    DeleteTweetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete-tweet',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Are you sure?</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Are you sure you want to delete this tweet?</p>\n    </div>\n    <div class=\"row modal-footer\">\n      <div class=\"col\">\n        <button type=\"button\" (click)=\"activeModal.dismiss('Cross click')\" class=\"btn btn-light\" style=\"float:left\">Cancel</button>\n      </div>\n      <div class=\"col\">\n        <button type=\"button\" (click)=\"yes()\" class=\"btn btn-primary\" style=\"float:right\">Yes</button>\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/delete-tweet/delete-tweet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__tweet_management_service__["a" /* TweetManagementService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], DeleteTweetComponent);
    return DeleteTweetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit-profile/edit-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-profile/edit-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_management_service__ = __webpack_require__("../../../../../src/app/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(fb, activeModal, userService) {
        this.fb = fb;
        this.activeModal = activeModal;
        this.userService = userService;
        this.emailTaken = false;
        this.invalidEmail = '';
        this.passwordModel = '';
        this.repeatPasswordModel = '';
        this.createForm();
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.revert();
        this.newEmail = this.oldEmail;
    };
    EditProfileComponent.prototype.createForm = function () {
        this.userForm = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(30)]],
            gender: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email]],
            oldPassword: [],
            password: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
            repeatPassword: []
        });
    };
    EditProfileComponent.prototype.revert = function () {
        this.userForm.reset({
            name: this.oldName,
            gender: this.oldGender,
            email: this.oldEmail,
            oldPassword: '',
            password: '',
            repeatPassword: ''
        });
    };
    EditProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        var formModel = this.userForm.value;
        var oldP = formModel.oldPassword;
        if (oldP.trim().length > 0) {
            var newP = formModel.password;
            if (oldP === this.newPassword && newP.trim().length > 0) {
                this.newPassword = newP; // the new password will be saved only if the old one is correct and if the length is not 0.
            }
        }
        var updatedUser = new __WEBPACK_IMPORTED_MODULE_3__model_user__["a" /* User */](formModel.name, formModel.gender, formModel.email, this.birth, this.newPassword);
        updatedUser.setAvatar(this.avatar); // for avatar -> Upload button, when using check if it is not available, then use the default
        updatedUser.setId(this.id);
        this.userService.editUser(updatedUser).subscribe(function (user) {
            if (user != null) {
                _this.userEdited = user;
                _this.userService.profileDataChanged(_this.userEdited);
                _this.activeModal.close();
            }
            else {
                _this.emailTaken = true;
                _this.invalidEmail = formModel.email;
            }
        });
    };
    Object.defineProperty(EditProfileComponent.prototype, "name", {
        get: function () {
            return this.userForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProfileComponent.prototype, "gender", {
        get: function () {
            return this.userForm.get('gender');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProfileComponent.prototype, "email", {
        get: function () {
            return this.userForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProfileComponent.prototype, "password", {
        get: function () {
            return this.userForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProfileComponent.prototype, "oldPassword", {
        get: function () {
            return this.userForm.get('oldPassword');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditProfileComponent.prototype, "repeatPassword", {
        get: function () {
            return this.userForm.get('repeatPassword');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EditProfileComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EditProfileComponent.prototype, "oldName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EditProfileComponent.prototype, "oldGender", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EditProfileComponent.prototype, "oldEmail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EditProfileComponent.prototype, "birth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EditProfileComponent.prototype, "newPassword", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EditProfileComponent.prototype, "avatar", void 0);
    EditProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-profile',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Edit profile</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form [formGroup]=\"userForm\" (keydown.enter)=\"onSubmit()\">\n\n        <div class=\"form-group\">\n          <label for=\"fullName\">Full name</label> <input type=\"text\" class=\"form-control\" id=\"fullName\"\n                                                         formControlName=\"name\" placeholder=\"Full Name\" required>\n        </div>\n        <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"name.errors.required\">\n            Full name is required.\n          </div>\n          <div *ngIf=\"name.errors.minlength\">\n            The name must be between 2 and 30 characters.\n          </div>\n          <div *ngIf=\"name.errors.maxlength\">\n            The name must be between 2 and 30 characters.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Select your gender</label><br/>\n          <input type=\"radio\" name=\"gender\" value=\"m\" formControlName=\"gender\"> Male\n          <input type=\"radio\" name=\"gender\" value=\"f\" formControlName=\"gender\"> Female\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label> <input type=\"email\" class=\"form-control\" id=\"email\"\n                                                          [(ngModel)]=\"newEmail\" formControlName=\"email\"\n                                                          placeholder=\"example@domain.com\" required>\n        </div>\n        <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"email.errors.required\">\n            The e-mail is required.\n          </div>\n          <div *ngIf=\"email.errors.email\">\n            Not a valid e-mail format.\n          </div>\n        </div>\n        <div *ngIf=\"emailTaken && newEmail===invalidEmail\" class=\"alert alert-danger\">\n          Sorry, the email is already taken.\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"oldPassword\">Enter your old password</label> <input type=\"password\" class=\"form-control\" id=\"oldPassword\"\n                                                                          formControlName=\"oldPassword\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"password\">Enter your new password</label> <input type=\"password\" class=\"form-control\" id=\"password\"\n                                                                       [(ngModel)]=\"passwordModel\" formControlName=\"password\">\n        </div>\n        <div class=\"alert alert-warning\">\n          The new password won't be saved if the old password entered is not correct.\n        </div>\n        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"password.errors.pattern\">\n            The password must be at least 8 characters long and contain uppercase(s), lowercase(s) and at least one special\n            character or numeral.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"repeatPassword\">Repeat new password</label> <input type=\"password\" class=\"form-control\"\n                                                                         id=\"repeatPassword\"\n                                                                         formControlName=\"repeatPassword\"\n                                                                         [(ngModel)]=\"repeatPasswordModel\"\n                                                                         (keyup.enter)=\"onSubmit()\">\n        </div>\n        <div *ngIf=\"(repeatPassword.dirty || repeatPassword.touched) && repeatPasswordModel !== passwordModel\"\n             class=\"alert alert-warning\">\n          The value is not equal with new password field's value.\n        </div>\n\n      </form>\n    </div>\n    <div class=\"row modal-footer\">\n      <div class=\"col\">\n        <button type=\"reset\" (click)=\"revert()\" [disabled]=\"userForm.pristine\" class=\"btn btn-danger\"\n                style=\"float:left\">Reset\n        </button>\n      </div>\n      <div class=\"col\">\n        <button type=\"button\" (click)=\"onSubmit()\" routerLink=\"/nav\" [disabled]=\"userForm.invalid\"\n                class=\"btn btn-success\" style=\"float:right\">Save\n        </button>\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/edit-profile/edit-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__user_management_service__["a" /* UserManagementService */]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  margin: 5% auto;\r\n  border: cornflowerblue solid 2px;\r\n  padding: 5%;\r\n  border-radius: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-sm-4 offset-sm-4\">\r\n  <div *ngIf=\"topTweets && topTweets.length===0\">\r\n    <div class=\"card\" style=\"border:none;\">\r\n      <div class=\"card-body\">\r\n        No tweets are published yet from anyone.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"topTweets\">\r\n    <div class=\"card\" *ngFor=\"let tweet of topTweets; let i = index\">\r\n      <h4 class=\"card-title\">{{tweet.author.name}}</h4>\r\n      <h6 class=\"card-subtitle mb-2 text-muted\">{{tweet.date | date:'medium'}}</h6>\r\n      <p class=\"card-text\">{{tweet.content}}</p>\r\n      <div class=\"row\" style=\"padding: 0 10% 0 5%;\">\r\n        <div class=\"col\">\r\n          <a *ngIf=\"!currentUserLiked[i]\" (click)=\"likeTweet(i)\" class=\"card-link\"\r\n             style=\"float:left; cursor: pointer\"><img\r\n            src=\"../../assets/img/star-icon-empty.png\" style=\"width:25px;height: 25px;\"/></a>\r\n          <a *ngIf=\"currentUserLiked[i]\" (click)=\"likeTweet(i)\" class=\"card-link\"\r\n             style=\"float:left; cursor: pointer\"><img\r\n            src=\"../../assets/img/star-icon-colored.png\" style=\"width:25px;height: 25px;\"/></a>\r\n        </div>\r\n        <div class=\"col\">\r\n          <p class=\"card-link\" style=\"float:right\">Likes: {{tweet.likes}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ngb-pagination *ngIf=\"topTweets && topTweets.length>=1\" [collectionSize]=\"totalTweets\" [(page)]=\"page\" [pageSize]=\"4\"\r\n                  (pageChange)=\"pageChanged()\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tweet_management_service__ = __webpack_require__("../../../../../src/app/tweet-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__like_management_service__ = __webpack_require__("../../../../../src/app/like-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_management_service__ = __webpack_require__("../../../../../src/app/user-management.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(tweetService, likeService, userService) {
        var _this = this;
        this.tweetService = tweetService;
        this.likeService = likeService;
        this.userService = userService;
        this.page = 1;
        likeService.newLikeAdded$.subscribe(function (like) {
            _this.getAllTweets();
            _this.getTotalTweets();
        });
        likeService.likeRemoved$.subscribe(function (tweetId) {
            _this.getAllTweets();
            _this.getTotalTweets();
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAuthenticatedUser().subscribe(function (user) {
            _this.currentUser = user;
        });
        this.getAllTweets();
        // TODO: these 2 should be updated by adding the authUser.id, so that only tweets of the users they follow will be returned
        this.getTotalTweets();
    };
    HomeComponent.prototype.getAllTweets = function () {
        var _this = this;
        this.tweetService.getAllTweets(this.page).subscribe(function (data) {
            _this.topTweets = data['content'];
            var index = 0;
            _this.currentUserLiked = [];
            _this.currentUserLiked.length = _this.topTweets.length;
            var _loop_1 = function (tweet) {
                _this.likeService.getLikesByTweet(tweet.id).subscribe(function (likes) {
                    if (likes.length === 0) {
                        tweet.likes = 0;
                        _this.currentUserLiked[index] = false;
                    }
                    else {
                        tweet.likes = likes.length;
                        for (var _i = 0, likes_1 = likes; _i < likes_1.length; _i++) {
                            var like = likes_1[_i];
                            if (like.likeOwner.email === _this.currentUser.email) {
                                _this.currentUserLiked[index] = true;
                                break;
                            }
                            else {
                                _this.currentUserLiked[index] = false;
                            }
                        }
                    }
                    index++;
                });
            };
            for (var _i = 0, _a = _this.topTweets; _i < _a.length; _i++) {
                var tweet = _a[_i];
                _loop_1(tweet);
            }
        }, function (error) {
            console.log(error.error.message);
        });
    };
    HomeComponent.prototype.pageChanged = function () {
        this.getAllTweets();
    };
    HomeComponent.prototype.getTotalTweets = function () {
        var _this = this;
        this.tweetService.getTotalTweets().subscribe(function (total) { return _this.totalTweets = total; });
    };
    HomeComponent.prototype.likeTweet = function (tweetIndex) {
        var _this = this;
        if (!this.currentUserLiked[tweetIndex]) {
            var likedTweetId = this.topTweets[tweetIndex].id;
            this.currentUserLiked[tweetIndex] = true;
            this.likeService.addLike(likedTweetId).subscribe(function (like) {
                _this.like = like;
                _this.likeService.newLikedAdded(_this.like);
            });
        }
        else {
            this.likeService.removeLike(this.topTweets[tweetIndex].id).subscribe(function (resp) {
                if (resp) {
                    _this.likeService.likeRemoved(_this.topTweets[tweetIndex].id);
                }
            });
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tweet_management_service__["a" /* TweetManagementService */],
            __WEBPACK_IMPORTED_MODULE_2__like_management_service__["a" /* LikeManagementService */],
            __WEBPACK_IMPORTED_MODULE_3__user_management_service__["a" /* UserManagementService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/like-management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikeManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LikeManagementService = /** @class */ (function () {
    function LikeManagementService(http) {
        this.http = http;
        this.api = 'http://localhost:8080/likes';
        this.newLikeAddedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.likeRemovedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.newLikeAdded$ = this.newLikeAddedSource.asObservable();
        this.likeRemoved$ = this.likeRemovedSource.asObservable();
    }
    LikeManagementService.prototype.newLikedAdded = function (like) {
        this.newLikeAddedSource.next(like);
    };
    LikeManagementService.prototype.addLike = function (likedTweetId) {
        return this.http.post(this.api, likedTweetId).pipe();
    };
    LikeManagementService.prototype.getLikesByTweet = function (tweetId) {
        return this.http.get(this.api + '/byTweet?id=' + tweetId).pipe();
    };
    LikeManagementService.prototype.removeLike = function (tweetId) {
        return this.http.post(this.api + '/remove', tweetId).pipe();
    };
    LikeManagementService.prototype.likeRemoved = function (tweetId) {
        this.likeRemovedSource.next(tweetId);
    };
    LikeManagementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LikeManagementService);
    return LikeManagementService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\r\n  text-align: center;\r\n  margin: 5%;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n  margin: 5% auto;\r\n  width: 25%;\r\n  height: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-sm-4 offset-sm-4\">\r\n\r\n  <img src=\"../../assets/img/logo.png\"/>\r\n\r\n  <h2>Login</h2>\r\n\r\n  <div *ngIf=\"loginFail===true\" class=\"alert alert-danger\">\r\n    <strong>Login unsuccessful!</strong> Please enter a valid e-mail address and correspondent password, or register.\r\n  </div>\r\n\r\n  <form [formGroup]=\"loginForm\">\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail1\">Email address</label>\r\n      <input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"exampleInputEmail1\" placeholder=\"Email\" ngModel appAutofocus>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputPassword1\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"password\"\r\n             placeholder=\"Password\" required>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col\" style=\"float:left\">\r\n        <a routerLink=\"/register\" class=\"nav-link\">Register here</a>\r\n      </div>\r\n      <div class=\"col\">\r\n        <button type=\"submit\" (click)=\"onSubmit()\" [disabled]=\"loginForm.invalid\" class=\"btn btn-default\"\r\n                style=\"float:right\">Login\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_management_service__ = __webpack_require__("../../../../../src/app/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, route, userService, router) {
        this.fb = fb;
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.loginFail = false;
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var formModel = this.loginForm.value;
        var email = formModel.email;
        var password = formModel.password;
        this.userService.authenticateUser(email, password)
            .subscribe(function (response) {
            _this.loginFail = response;
            if (_this.loginFail === false) {
                _this.router.navigate(['/nav']);
            }
        });
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () {
            return this.loginForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__user_management_service__["a" /* UserManagementService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"success\">\r\n  <p>Logout Successful!</p>\r\n</div>\r\n<div *ngIf=\"success===false\">\r\n  <p>Logout failed!</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_management_service__ = __webpack_require__("../../../../../src/app/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.success = false;
        this.email = '';
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAuthenticatedUser().subscribe(function (user) {
            _this.user = user;
            _this.email = _this.user.email;
            _this.userService.logOutUser(_this.email).subscribe(function (response) {
                _this.success = response;
                if (_this.success) {
                    _this.router.navigate(['/login']);
                }
            });
        });
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_management_service__["a" /* UserManagementService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(name, gender, email, birth, password) {
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.birth = birth;
        this.password = password;
        if (gender === 'm') {
            this.avatar = '../../assets/img/avatar-male.png';
        }
        else {
            this.avatar = '../../assets/img/avatar-female.png';
        }
    }
    User.prototype.setId = function (id) {
        this.id = id;
    };
    User.prototype.setAvatar = function (avatar) {
        this.avatar = avatar;
    };
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-tabset justify=\"justified\">\r\n  <ngb-tab title=\"Home\">\r\n    <ng-template ngbTabContent>\r\n      <app-home></app-home>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab title=\"My profile\">\r\n    <ng-template ngbTabContent>\r\n      <app-user></app-user>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab disabled=\"true\">\r\n    <ng-template ngbTabTitle>\r\n      <a routerLink=\"/logout\">Logout</a>\r\n    </ng-template>\r\n  </ngb-tab>\r\n  <ngb-tab disabled=\"true\">\r\n    <ng-template ngbTabTitle>\r\n      <div class=\"form-group\">\r\n        <input style=\"float:left; width:70%;\" id=\"typeahead-basic\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\"\r\n               [ngbTypeahead]=\"search\" placeholder=\"User search\"/>\r\n        <button type=\"button\" class=\"btn btn-outline-light\" style=\"width:30%\" (click)=\"onSubmit()\">\r\n          <img src=\"../../assets/img/search-icon.png\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\r\n        </button>\r\n        <div *ngIf=\"noUserFound\"><p style=\"color: red;\">No user found.</p></div>\r\n      </div>\r\n    </ng-template>\r\n  </ngb-tab>\r\n</ngb-tabset>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_management_service__ = __webpack_require__("../../../../../src/app/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.noUserFound = false;
        this.search = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : _this.emails.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUsersEmails().subscribe(function (emails) { return _this.emails = emails; });
    };
    NavigationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.getUserByEmail(this.model)
            .subscribe(function (id) {
            if (id === -1) {
                _this.noUserFound = true;
            }
            else {
                _this.router.navigate(['/profile/' + id]);
            }
        });
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__user_management_service__["a" /* UserManagementService */], __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* Router */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/age-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AgePipe = /** @class */ (function () {
    function AgePipe() {
    }
    AgePipe.prototype.transform = function (value) {
        var today = __WEBPACK_IMPORTED_MODULE_1_moment__();
        var birth = __WEBPACK_IMPORTED_MODULE_1_moment__(value);
        var years = today.diff(birth, 'years');
        return years + ' years';
    };
    AgePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'age'
        })
    ], AgePipe);
    return AgePipe;
}());



/***/ }),

/***/ "../../../../../src/app/public-profile/public-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  margin: 5% auto;\r\n  border: cornflowerblue solid 2px;\r\n  padding: 5%;\r\n  border-radius: 15px;\r\n}\r\n\r\nul {\r\n  height: 250px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n#profile {\r\n  display: block;\r\n  margin: 5% auto auto auto;\r\n}\r\n\r\n#profileInfo h4, #profileInfo h6 {\r\n  text-align: center;\r\n}\r\n\r\n#nov {\r\n  margin: 5%;\r\n  padding-bottom: 5%;\r\n  border-right: #99A3A4 solid 2px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/public-profile/public-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-tabset justify=\"justified\" activeId=\"profile_tab\">\r\n  <ngb-tab disabled=\"true\">\r\n    <ng-template ngbTabTitle>\r\n      <a routerLink=\"/nav\">Home</a>\r\n    </ng-template>\r\n  </ngb-tab>\r\n\r\n\r\n  <ngb-tab title={{currentUser.name}} id=\"profile_tab\">\r\n    <ng-template ngbTabContent>\r\n\r\n      <div *ngIf=\"currentUser\" class=\"row\">\r\n\r\n        <div id=\"profileInfo\" class=\"col-sm-4\">\r\n          <div id=\"nov\">\r\n            <img id=\"profile\" style=\"width:225px; height:225px;\" src={{currentUser.avatar}}/>\r\n            <h4>{{currentUser.name}}</h4>\r\n            <h6>{{currentUser.birth | age}}</h6>\r\n\r\n            <div style=\"display:flex;justify-content: center;\">\r\n              <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- TODO: Ako go sledi da mu se prikaze sledniot div, inaku: \"You must follow this user to see their tweets.\" i kopche 'Follow' -->\r\n\r\n        <div *ngIf=\"tweets\" class=\"col-sm-4\">\r\n          <div *ngIf=\"tweets.length===0\">\r\n            <div class=\"card\" style=\"border:none;\">\r\n              <div class=\"card-body\">\r\n                This user has not published any tweets yet.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card\" *ngFor=\"let tweet of tweets\">\r\n            <h4 class=\"card-title\">{{tweet.author.name}}</h4>\r\n            <h6 class=\"card-subtitle mb-2 text-muted\">{{tweet.date | date:'medium'}}</h6>\r\n            <p class=\"card-text\">{{tweet.content}}</p>\r\n            <div class=\"row\" style=\"padding: 0 10% 0 5%;\">\r\n              <div class=\"col\">\r\n                <a *ngIf=\"!liked\" href=\"#\" class=\"card-link\" style=\"float:left\"><img\r\n                  src=\"../../assets/img/star-icon-empty.png\" style=\"width:25px;height: 25px;\"/></a>\r\n                <a *ngIf=\"liked\" href=\"#\" class=\"card-link\" style=\"float:left\"><img\r\n                  src=\"../../assets/img/star-icon-colored.png\" style=\"width:25px;height: 25px;\"/></a>\r\n              </div>\r\n              <div class=\"col\">\r\n                <p class=\"card-link\" style=\"float:right\">Likes: {{tweet.likes}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4\">\r\n          <div style=\"border-left:#99A3A4 solid 2px; margin: 5% 10% 5% 5%; padding: 2%;\">\r\n            <ul id=\"followers\" class=\"list-group list-group-flush\">\r\n              <li class=\"list-group-item\"><h4 style=\"color: royalblue;\">Followers (5)</h4></li>\r\n              <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-male.png\"\r\n                                               style=\"width:25px;height: 25px; margin-right:5%;\"/>Drug ime\r\n              </li>\r\n              <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-male.png\"\r\n                                               style=\"width:25px;height: 25px; margin-right:5%;\"/>Treto ime\r\n              </li>\r\n              <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-female.png\"\r\n                                               style=\"width:25px;height: 25px; margin-right:5%;\"/>Chetvrto imeeeee\r\n              </li>\r\n              <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-female.png\"\r\n                                               style=\"width:25px;height: 25px; margin-right:5%;\"/>Pettooooooooooooooo\r\n              </li>\r\n              <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-male.png\"\r\n                                               style=\"width:25px;height: 25px; margin-right:5%;\"/>Shesto ime\r\n              </li>\r\n              <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-female.png\"\r\n                                               style=\"width:25px;height: 25px; margin-right:5%;\"/>Edno ime\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div style=\"border-left:royalblue solid 2px; margin: 5% 10% 5% 5%; padding: 2%;\">\r\n            <ul id=\"following\" class=\"list-group list-group-flush\">\r\n              <li class=\"list-group-item\"><h4 style=\"color: dimgray;\">Following (6)</h4></li>\r\n              <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-female.png\"\r\n                                               style=\"width:25px;height: 25px; margin-right:5%;\"/>Edno ime\r\n              </li>\r\n              <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-male.png\"\r\n                                               style=\"width:25px;height: 25px; margin-right:5%;\"/>Drugo ime\r\n              </li>\r\n              <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-male.png\"\r\n                                               style=\"width:25px;height: 25px; margin-right:5%;\"/>Treto ime\r\n              </li>\r\n              <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-female.png\"\r\n                                               style=\"width:25px;height: 25px; margin-right:5%;\"/>Chetvrto imeeeee\r\n              </li>\r\n              <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-female.png\"\r\n                                               style=\"width:25px;height: 25px; margin-right:5%;\"/>Pettoooooooooooooooo\r\n              </li>\r\n              <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-male.png\"\r\n                                               style=\"width:25px;height: 25px; margin-right:5%;\"/>Shesto ime\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </ng-template>\r\n  </ngb-tab>\r\n\r\n\r\n  <ngb-tab disabled=\"true\">\r\n    <ng-template ngbTabTitle>\r\n      <a routerLink=\"/logout\">Logout</a>\r\n    </ng-template>\r\n  </ngb-tab>\r\n</ngb-tabset>\r\n"

/***/ }),

/***/ "../../../../../src/app/public-profile/public-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_management_service__ = __webpack_require__("../../../../../src/app/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tweet_management_service__ = __webpack_require__("../../../../../src/app/tweet-management.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PublicProfileComponent = /** @class */ (function () {
    function PublicProfileComponent(route, modalService, userService, tweetService) {
        this.route = route;
        this.modalService = modalService;
        this.userService = userService;
        this.tweetService = tweetService;
        this.currentRate = 5;
        this.liked = false;
    }
    PublicProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAuthenticatedUser().subscribe(function (user) {
            _this.authenticatedUser = user;
        });
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.userService.getUserById(_this.id).subscribe(function (user) {
                _this.currentUser = user;
                _this.tweetService.getTweets(_this.currentUser.id).subscribe(function (tweets) { return _this.tweets = tweets; });
            });
        });
    };
    PublicProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-public-profile',
            template: __webpack_require__("../../../../../src/app/public-profile/public-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/public-profile/public-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_2__user_management_service__["a" /* UserManagementService */],
            __WEBPACK_IMPORTED_MODULE_4__tweet_management_service__["a" /* TweetManagementService */]])
    ], PublicProfileComponent);
    return PublicProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/publish-tweet/publish-tweet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/publish-tweet/publish-tweet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishTweetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tweet_management_service__ = __webpack_require__("../../../../../src/app/tweet-management.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublishTweetComponent = /** @class */ (function () {
    function PublishTweetComponent(activeModal, tweetService) {
        this.activeModal = activeModal;
        this.tweetService = tweetService;
        this.value = '';
    }
    PublishTweetComponent.prototype.ngOnInit = function () {
    };
    PublishTweetComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.value.trim() !== '') {
            this.tweetService.addTweet(this.value).subscribe(function (tweet) {
                _this.tweet = tweet;
                _this.tweet.author = _this.name;
                _this.tweetService.newTweetPublished(_this.tweet);
            });
            this.activeModal.close();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PublishTweetComponent.prototype, "name", void 0);
    PublishTweetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-publish-tweet',
            template: "\n    <div (keydown.enter)=\"onSubmit()\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Tweet a new message as {{name}}</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n      <textarea [(ngModel)]=\"value\" class=\"form-control\" id=\"tweet\" placeholder=\"Enter your text here\"\n                ngModel appAutofocus required></textarea>\n      </div>\n      <div class=\"modal-footer\">\n        <button *ngIf=\"value.trim()!==''\" type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-primary\">Publish</button>\n        <button *ngIf=\"value.trim()===''\" class=\"btn btn-primary\" disabled>Publish</button>\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/publish-tweet/publish-tweet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_2__tweet_management_service__["a" /* TweetManagementService */]])
    ], PublishTweetComponent);
    return PublishTweetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\r\n  text-align: center;\r\n  margin: 4%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-sm-4 offset-sm-4\">\r\n  <h2>Register</h2>\r\n\r\n  <form [formGroup]=\"userForm\">\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"fullName\">Full name</label> <input type=\"text\" class=\"form-control\" id=\"fullName\"\r\n                                                     formControlName=\"name\" placeholder=\"Full Name\" ngModel appAutofocus required>\r\n    </div>\r\n    <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n      <div *ngIf=\"name.errors.required\">\r\n        Full name is required.\r\n      </div>\r\n      <div *ngIf=\"name.errors.minlength\">\r\n        The name must be between 2 and 30 characters.\r\n      </div>\r\n      <div *ngIf=\"name.errors.maxlength\">\r\n        The name must be between 2 and 30 characters.\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Select your gender</label><br/>\r\n      <input type=\"radio\" name=\"gender\" value=\"m\" formControlName=\"gender\"> Male\r\n      <input type=\"radio\" name=\"gender\" value=\"f\" formControlName=\"gender\"> Female\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email address</label> <input type=\"email\" class=\"form-control\" id=\"email\"\r\n                                                      [(ngModel)]=\"newEmail\" formControlName=\"email\"\r\n                                                      placeholder=\"example@domain.com\" required>\r\n    </div>\r\n    <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n      <div *ngIf=\"email.errors.required\">\r\n        The e-mail is required.\r\n      </div>\r\n      <div *ngIf=\"email.errors.email\">\r\n        Not a valid e-mail format.\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"emailTaken && newEmail===invalidEmail\" class=\"alert alert-danger\">\r\n      Sorry, the email is already taken.\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"birth\">Date of birth</label> <input type=\"date\" class=\"form-control\" id=\"birth\"\r\n                                                      formControlName=\"birth\" placeholder=\"dd-mm-yyyy\" required>\r\n    </div>\r\n    <div *ngIf=\"birth.invalid && (birth.dirty || birth.touched)\" class=\"alert alert-danger\">\r\n      <div *ngIf=\"birth.errors.required\">\r\n        The date is required.\r\n      </div>\r\n    </div>\r\n\r\n    <!--\r\n    <div class=\"form-group\">\r\n      <label for=\"birth\">Date of birth</label><br/>\r\n\r\n      <div class=\"input-group\">\r\n        <input class=\"form-control\" id=\"birth\" formControlName=\"birth\" placeholder=\"yyyy-mm-dd\"\r\n               name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\r\n        <div class=\"input-group-append\">\r\n          <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\r\n            <img src=\"../../assets/img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    VALIDATION NOT AVAILABLE FOR THIS COMPONENT!\r\n    </div>\r\n    -->\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password</label> <input type=\"password\" class=\"form-control\" id=\"password\"\r\n                                                    formControlName=\"password\" placeholder=\"Strong&Password123\"\r\n                                                    [(ngModel)]=\"passwordModel\"\r\n                                                    required>\r\n    </div>\r\n    <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\r\n      <div *ngIf=\"password.errors.required\">\r\n        The password is required.\r\n      </div>\r\n      <div *ngIf=\"password.errors.pattern\">\r\n        The password must be at least 8 characters long and contain uppercase(s), lowercase(s) and at least one special\r\n        character or numeral.\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"repeatPassword\">Repeat password</label> <input type=\"password\" class=\"form-control\"\r\n                                                                 id=\"repeatPassword\"\r\n                                                                 formControlName=\"repeatPassword\"\r\n                                                                 placeholder=\"Strong&Password123\"\r\n                                                                 [(ngModel)]=\"repeatPasswordModel\"\r\n                                                                 required>\r\n    </div>\r\n    <div *ngIf=\"repeatPassword.invalid && (repeatPassword.dirty || repeatPassword.touched)\" class=\"alert alert-danger\">\r\n      <div *ngIf=\"repeatPassword.errors.required\">\r\n        This field is required.\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"(repeatPassword.dirty || repeatPassword.touched) && repeatPasswordModel !== passwordModel\"\r\n         class=\"alert alert-warning\">\r\n      The value is not equal with password field's value.\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <button type=\"reset\" (click)=\"revert()\" [disabled]=\"userForm.pristine\" class=\"btn btn-danger\"\r\n                style=\"float:left\">Reset\r\n        </button>\r\n      </div>\r\n      <div class=\"col\">\r\n        <button type=\"submit\" (click)=\"onSubmit()\" [disabled]=\"userForm.invalid\"\r\n                class=\"btn btn-success\" style=\"float:right\">Register\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_management_service__ = __webpack_require__("../../../../../src/app/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, router, userService) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.emailTaken = false;
        this.invalidEmail = '';
        this.newEmail = '';
        this.passwordModel = '';
        this.repeatPasswordModel = '';
        this.createForm();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.createForm = function () {
        this.userForm = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(30)]],
            gender: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email]],
            birth: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
            repeatPassword: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]]
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = this.prepareSaveUser();
        this.userService.addUser(user)
            .subscribe(function (response) {
            _this.emailTaken = response;
            if (_this.emailTaken === false) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.invalidEmail = user.email;
            }
        });
    };
    RegisterComponent.prototype.prepareSaveUser = function () {
        var formModel = this.userForm.value;
        return new __WEBPACK_IMPORTED_MODULE_3__model_user__["a" /* User */](formModel.name, formModel.gender, formModel.email, formModel.birth, formModel.password);
    };
    RegisterComponent.prototype.revert = function () {
        this.userForm.reset({
            name: '',
            gender: '',
            email: '',
            birth: '',
            password: '',
            repeatPassword: ''
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "name", {
        get: function () {
            return this.userForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "gender", {
        get: function () {
            return this.userForm.get('gender');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.userForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "birth", {
        get: function () {
            return this.userForm.get('birth');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.userForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "repeatPassword", {
        get: function () {
            return this.userForm.get('repeatPassword');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__user_management_service__["a" /* UserManagementService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tweet-management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweetManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TweetManagementService = /** @class */ (function () {
    function TweetManagementService(http) {
        this.http = http;
        this.api = 'http://localhost:8080/tweets';
        this.newTweetPublishedSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.tweetDeletedSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.newTweetPublished$ = this.newTweetPublishedSource.asObservable();
        this.tweetDeleted$ = this.tweetDeletedSource.asObservable();
    }
    TweetManagementService.prototype.newTweetPublished = function (tweet) {
        this.newTweetPublishedSource.next(tweet);
    };
    TweetManagementService.prototype.tweetDeleted = function (id) {
        this.tweetDeletedSource.next(id);
    };
    TweetManagementService.prototype.addTweet = function (content) {
        return this.http.post(this.api, content).pipe();
    };
    TweetManagementService.prototype.getTweets = function (id) {
        return this.http.get(this.api + '?id=' + id).pipe();
    };
    TweetManagementService.prototype.deleteTweet = function (id) {
        return this.http.post(this.api + '/delete', id).pipe();
    };
    TweetManagementService.prototype.getAllTweets = function (page) {
        return this.http.get(this.api + '/all?page=' + page);
    };
    TweetManagementService.prototype.getTotalTweets = function () {
        return this.http.get(this.api + '/totalTweets').pipe();
    };
    TweetManagementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TweetManagementService);
    return TweetManagementService;
}());



/***/ }),

/***/ "../../../../../src/app/upload-avatar/upload-avatar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload-avatar/upload-avatar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadAvatarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_management_service__ = __webpack_require__("../../../../../src/app/user-management.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadAvatarComponent = /** @class */ (function () {
    function UploadAvatarComponent(fb, userService, activeModal) {
        this.fb = fb;
        this.userService = userService;
        this.activeModal = activeModal;
        this.state = false;
        this.createForm();
    }
    UploadAvatarComponent.prototype.ngOnInit = function () {
    };
    UploadAvatarComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            avatar: null
        });
    };
    UploadAvatarComponent.prototype.onFileChange = function (event) {
        this.state = event.target.value.length > 0;
        // console.dir(this.fileInput.nativeElement);
        // console.dir(this.fileInput.nativeElement.value);
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.form.get('avatar').setValue(file);
        }
    };
    UploadAvatarComponent.prototype.prepareSave = function () {
        var input = new FormData();
        input.append('avatar', this.form.get('avatar').value);
        return input;
    };
    UploadAvatarComponent.prototype.onSubmit = function () {
        var _this = this;
        var formModel = this.prepareSave();
        this.userService.updateAvatar(this.userId, formModel).subscribe(function (user) {
            _this.user = user;
            _this.userService.avatarUpdated(_this.user);
            _this.activeModal.close();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UploadAvatarComponent.prototype, "userId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], UploadAvatarComponent.prototype, "fileInput", void 0);
    UploadAvatarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload-avatar',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Upload photo</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"avatar\">Upload photo</label>\n          <input type=\"file\" id=\"avatar\" (change)=\"onFileChange($event)\" #fileInput>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button *ngIf=\"state\" type=\"button\" (click)=\"onSubmit()\" class=\"btn btn-primary\">Upload</button>\n      <button *ngIf=\"state===false\" class=\"btn btn-primary\" disabled>Upload</button>\n    </div>\n  ",
            styles: [__webpack_require__("../../../../../src/app/upload-avatar/upload-avatar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__user_management_service__["a" /* UserManagementService */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], UploadAvatarComponent);
    return UploadAvatarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserManagementService = /** @class */ (function () {
    function UserManagementService(http) {
        this.http = http;
        this.api = 'http://localhost:8080/users';
        this.profileDataChangedSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.avatarUpdatedSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.profileDataChanged$ = this.profileDataChangedSource.asObservable();
        this.avatarUpdated$ = this.avatarUpdatedSource.asObservable();
        this.isLoggedIn = false;
    }
    UserManagementService.prototype.profileDataChanged = function (user) {
        this.profileDataChangedSource.next(user);
    };
    UserManagementService.prototype.avatarUpdated = function (user) {
        this.avatarUpdatedSource.next(user);
    };
    UserManagementService.prototype.addUser = function (user) {
        return this.http.post(this.api, user).pipe();
    };
    UserManagementService.prototype.editUser = function (user) {
        return this.http.post(this.api + '/update', user).pipe();
    };
    UserManagementService.prototype.getAuthenticatedUser = function () {
        return this.http.get(this.api).pipe();
    };
    UserManagementService.prototype.getUserById = function (id) {
        return this.http.get(this.api + '/id/' + id).pipe();
    };
    UserManagementService.prototype.getAllUsersEmails = function () {
        return this.http.get(this.api + '/all').pipe();
    };
    UserManagementService.prototype.getUserByEmail = function (email) {
        return this.http.get(this.api + '/email?email=' + email).pipe();
    };
    UserManagementService.prototype.authenticateUser = function (email, password) {
        return this.http.post(this.api + '/login', { email: email, password: password }).pipe();
    };
    UserManagementService.prototype.logOutUser = function (email) {
        return this.http.post(this.api + '/logout', email).pipe();
    };
    UserManagementService.prototype.updateAvatar = function (userId, formModel) {
        return this.http.post(this.api + '/' + userId + '/upload/avatar', formModel).pipe();
    };
    UserManagementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserManagementService);
    return UserManagementService;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n  margin: 5% auto;\r\n  border: cornflowerblue solid 2px;\r\n  padding: 5%;\r\n  border-radius: 15px;\r\n}\r\n\r\nul {\r\n  height: 250px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n#profile {\r\n  display: block;\r\n  margin: 5% auto auto auto;\r\n}\r\n\r\n#profileInfo h4, #profileInfo h6 {\r\n  text-align: center;\r\n}\r\n\r\n#nov {\r\n  margin: 5%;\r\n  padding-bottom: 5%;\r\n  border-right: #99A3A4 solid 2px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authenticatedUser\" class=\"row\">\r\n\r\n  <div id=\"profileInfo\" class=\"col-sm-4\">\r\n    <div id=\"nov\">\r\n      <img id=\"profile\" style=\"width:225px; height:225px;\" src={{authenticatedUser.avatar}}/>\r\n      <h4>{{authenticatedUser.name}}</h4>\r\n      <h6>{{authenticatedUser.birth | age}}</h6>\r\n\r\n      <div style=\"display:flex;justify-content: center;\">\r\n        <ngb-rating readonly=\"true\" [(rate)]=\"currentRate\"></ngb-rating>\r\n      </div>\r\n\r\n      <div style=\"display:flex;justify-content: center; margin-top: 10%;\">\r\n        <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open()\">Tweet a new message</button>\r\n      </div>\r\n\r\n      <div style=\"display:flex;justify-content: center; margin-top: 10%;\">\r\n        <button class=\"btn btn-lg btn-outline-primary\" (click)=\"editProfile()\">Edit your profile</button>\r\n      </div>\r\n\r\n      <div style=\"display:flex;justify-content: center; margin-top: 10%;\">\r\n        <button class=\"btn btn-lg btn-outline-primary\" (click)=\"changeAvatar()\">Change your avatar</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"tweets\" class=\"col-sm-4\">\r\n    <div *ngIf=\"tweets.length===0\">\r\n      <div class=\"card\" style=\"border:none;\">\r\n        <div class=\"card-body\">\r\n          You have no tweets yet. Click on \"Tweet a new message\".\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\" *ngFor=\"let tweet of tweets; let indx = index\">\r\n      <h4 class=\"card-title\">{{authenticatedUser.name}}</h4>\r\n      <h6 class=\"card-subtitle mb-2 text-muted\">{{tweet.date | date:'medium'}}</h6>\r\n      <p class=\"card-text\">{{tweet.content}}</p>\r\n      <div class=\"row\" style=\"padding: 0 10% 0 5%;\">\r\n        <div class=\"col\">\r\n          <a *ngIf=\"!liked[indx]\" (click)=\"likeTweet(indx)\" class=\"card-link\" style=\"float:left; cursor: pointer\"><img\r\n            src=\"../../assets/img/star-icon-empty.png\" style=\"width:25px; height:25px;\"/></a>\r\n          <a *ngIf=\"liked[indx]\" (click)=\"likeTweet(indx)\" class=\"card-link\" style=\"float:left; cursor: pointer\"><img\r\n            src=\"../../assets/img/star-icon-colored.png\" style=\"width:25px;height: 25px;\"/></a>\r\n          <p class=\"card-link\" style=\"float:right\">Likes: {{tweet.likes}}</p>\r\n        </div>\r\n        <div class=\"col\">\r\n          <button class=\"card-link\" style=\"float:right; border:none; background:transparent;\"\r\n                  (click)=\"deleteTweet(tweet.id)\">\r\n            <img src=\"../../assets/img/bin-icon.png\" style=\"width:25px; height:25px; cursor: pointer;\"/></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-4\">\r\n    <div style=\"border-left:#99A3A4 solid 2px; margin: 5% 10% 5% 5%; padding: 2%;\">\r\n      <ul id=\"followers\" class=\"list-group list-group-flush\">\r\n        <li class=\"list-group-item\"><h4 style=\"color: royalblue;\">Followers (5)</h4></li>\r\n        <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-male.png\"\r\n                                         style=\"width:25px;height: 25px; margin-right:5%;\"/>Drug ime\r\n        </li>\r\n        <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-male.png\"\r\n                                         style=\"width:25px;height: 25px; margin-right:5%;\"/>Treto ime\r\n        </li>\r\n        <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-female.png\"\r\n                                         style=\"width:25px;height: 25px; margin-right:5%;\"/>Chetvrto imeeeee\r\n        </li>\r\n        <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-female.png\"\r\n                                         style=\"width:25px;height: 25px; margin-right:5%;\"/>Pettooooooooooooooo\r\n        </li>\r\n        <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-male.png\"\r\n                                         style=\"width:25px;height: 25px; margin-right:5%;\"/>Shesto ime\r\n        </li>\r\n        <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-female.png\"\r\n                                         style=\"width:25px;height: 25px; margin-right:5%;\"/>Edno ime\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div style=\"border-left:royalblue solid 2px; margin: 5% 10% 5% 5%; padding: 2%;\">\r\n      <ul id=\"following\" class=\"list-group list-group-flush\">\r\n        <li class=\"list-group-item\"><h4 style=\"color: dimgray;\">Following (6)</h4></li>\r\n        <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-female.png\"\r\n                                         style=\"width:25px;height: 25px; margin-right:5%;\"/>Edno ime\r\n        </li>\r\n        <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-male.png\"\r\n                                         style=\"width:25px;height: 25px; margin-right:5%;\"/>Drugo ime\r\n        </li>\r\n        <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-male.png\"\r\n                                         style=\"width:25px;height: 25px; margin-right:5%;\"/>Treto ime\r\n        </li>\r\n        <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-female.png\"\r\n                                         style=\"width:25px;height: 25px; margin-right:5%;\"/>Chetvrto imeeeee\r\n        </li>\r\n        <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-female.png\"\r\n                                         style=\"width:25px;height: 25px; margin-right:5%;\"/>Pettoooooooooooooooo\r\n        </li>\r\n        <li class=\"list-group-item\"><img src=\"../../assets/img/avatar-male.png\"\r\n                                         style=\"width:25px;height: 25px; margin-right:5%;\"/>Shesto ime\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publish_tweet_publish_tweet_component__ = __webpack_require__("../../../../../src/app/publish-tweet/publish-tweet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_management_service__ = __webpack_require__("../../../../../src/app/user-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_profile_edit_profile_component__ = __webpack_require__("../../../../../src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tweet_management_service__ = __webpack_require__("../../../../../src/app/tweet-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__delete_tweet_delete_tweet_component__ = __webpack_require__("../../../../../src/app/delete-tweet/delete-tweet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__like_management_service__ = __webpack_require__("../../../../../src/app/like-management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__upload_avatar_upload_avatar_component__ = __webpack_require__("../../../../../src/app/upload-avatar/upload-avatar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserComponent = /** @class */ (function () {
    function UserComponent(modalService, userService, tweetService, likeService) {
        var _this = this;
        this.modalService = modalService;
        this.userService = userService;
        this.tweetService = tweetService;
        this.likeService = likeService;
        this.currentRate = 5;
        tweetService.newTweetPublished$.subscribe(function (tweet) {
            _this.tweets.reverse();
            _this.tweets.push(tweet);
            _this.tweets.reverse();
        });
        userService.profileDataChanged$.subscribe(function (user) { return _this.authenticatedUser = user; });
        userService.avatarUpdated$.subscribe(function (user) { return _this.authenticatedUser = user; });
        tweetService.tweetDeleted$.subscribe(function (id) {
            _this.tweetService.getTweets(_this.authenticatedUser.id).subscribe(function (tweets) { return _this.tweets = tweets; });
        });
        likeService.newLikeAdded$.subscribe(function (like) {
            _this.loadTweets();
        });
        likeService.likeRemoved$.subscribe(function (tweetId) {
            _this.loadTweets();
        });
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAuthenticatedUser().subscribe(function (user) {
            _this.authenticatedUser = user;
            _this.loadTweets();
        });
    };
    UserComponent.prototype.loadTweets = function () {
        var _this = this;
        this.tweetService.getTweets(this.authenticatedUser.id).subscribe(function (tweets) {
            _this.tweets = tweets;
            var index = 0;
            _this.liked = [];
            _this.liked.length = _this.tweets.length;
            var _loop_1 = function (tweet) {
                _this.likeService.getLikesByTweet(tweet.id).subscribe(function (likes) {
                    if (likes.length === 0) {
                        tweet.likes = 0;
                        _this.liked[index] = false;
                    }
                    else {
                        tweet.likes = likes.length;
                        for (var _i = 0, likes_1 = likes; _i < likes_1.length; _i++) {
                            var like = likes_1[_i];
                            if (like.likeOwner.email === _this.authenticatedUser.email) {
                                _this.liked[index] = true;
                                break;
                            }
                            else {
                                _this.liked[index] = false;
                            }
                        }
                    }
                    index++;
                });
            };
            for (var _i = 0, _a = _this.tweets; _i < _a.length; _i++) {
                var tweet = _a[_i];
                _loop_1(tweet);
            }
        }, function (error) {
            console.log(error.error.message);
        });
    };
    UserComponent.prototype.likeTweet = function (tweetIndex) {
        var _this = this;
        if (!this.liked[tweetIndex]) {
            var likedTweetId = this.tweets[tweetIndex].id;
            this.liked[tweetIndex] = true;
            this.likeService.addLike(likedTweetId).subscribe(function (like) {
                _this.like = like;
                _this.likeService.newLikedAdded(_this.like);
            });
        }
        else {
            this.likeService.removeLike(this.tweets[tweetIndex].id).subscribe(function (resp) {
                if (resp) {
                    _this.likeService.likeRemoved(_this.tweets[tweetIndex].id);
                }
            });
        }
    };
    UserComponent.prototype.open = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__publish_tweet_publish_tweet_component__["a" /* PublishTweetComponent */]);
        modalRef.componentInstance.name = this.authenticatedUser.name;
    };
    UserComponent.prototype.editProfile = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_4__edit_profile_edit_profile_component__["a" /* EditProfileComponent */]);
        modalRef.componentInstance.id = this.authenticatedUser.id;
        modalRef.componentInstance.oldName = this.authenticatedUser.name;
        modalRef.componentInstance.oldGender = this.authenticatedUser.gender;
        modalRef.componentInstance.oldEmail = this.authenticatedUser.email;
        modalRef.componentInstance.birth = this.authenticatedUser.birth;
        modalRef.componentInstance.newPassword = this.authenticatedUser.password;
        modalRef.componentInstance.avatar = this.authenticatedUser.avatar;
    };
    UserComponent.prototype.deleteTweet = function (id) {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_6__delete_tweet_delete_tweet_component__["a" /* DeleteTweetComponent */]);
        modalRef.componentInstance.tweetId = id;
    };
    UserComponent.prototype.changeAvatar = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_8__upload_avatar_upload_avatar_component__["a" /* UploadAvatarComponent */]);
        modalRef.componentInstance.userId = this.authenticatedUser.id;
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_3__user_management_service__["a" /* UserManagementService */],
            __WEBPACK_IMPORTED_MODULE_5__tweet_management_service__["a" /* TweetManagementService */],
            __WEBPACK_IMPORTED_MODULE_7__like_management_service__["a" /* LikeManagementService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map