"use strict";
(self["webpackChunksocheck_portal"] = self["webpackChunksocheck_portal"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_error_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/error/error.component */ 8494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        // canActivate: [AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_shared_layout_layout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! src/app/shared/layout/layout.module */ 8634)).then((mod) => mod.LayoutModule),
    },
    // {
    //   path: 'login',
    //   loadChildren: () =>
    //     import('src/app/pages/login/login.module').then((mod) => mod.LoginModule),
    // },
    // {
    //   path: 'redirect',
    //   canActivate: [MsalGuard],
    //   loadChildren: () =>
    //     import('src/app/pages/redirect/redirect.module').then(
    //       (m) => m.RedirectModule
    //     ),
    // },
    // {
    //   path: 'home',
    //   loadChildren: () =>
    //     import('./shared/layout/layout.module').then((mod) => mod.LayoutModule),
    // },
    {
        path: 'error',
        component: _shared_error_error_component__WEBPACK_IMPORTED_MODULE_0__.ErrorComponent,
    },
    // {
    //   path: '',
    //   redirectTo: '/login',
    //   pathMatch: 'full'
    // }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @azure/msal-browser */ 3105);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/services/loader.service */ 4487);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/language.service */ 7524);
/* harmony import */ var _core_services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services/theme.service */ 4603);
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/services/session.service */ 2821);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @azure/msal-angular */ 4084);
/* harmony import */ var _core_services_user_context_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/services/user-context.service */ 5258);
/* harmony import */ var _core_services_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/user-data.service */ 4333);
/* harmony import */ var _core_services_auth_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/services/auth-api.service */ 6635);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/services/toast.service */ 9891);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/toast */ 2802);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/progressspinner */ 120);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 7514);




















const _c0 = function (a0, a1, a2, a3) { return { "pi-info-circle": a0, "pi-exclamation-triangle": a1, "pi-times-circle": a2, "pi-check": a3 }; };
function AppComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction4"](7, _c0, message_r2.severity == "info", message_r2.severity == "warn", message_r2.severity == "error", message_r2.severity == "success"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 3, message_r2.summary));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 5, message_r2.detail));
} }
function AppComponent_p_progressSpinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "p-progressSpinner");
} }
class AppComponent {
    constructor(
    // @Inject(DOCUMENT) private document,
    router, loaderService, languageService, themeService, sessionService, msalService, msalBroadcastService, userContextService, userService, authApiService, toastService) {
        this.router = router;
        this.loaderService = loaderService;
        this.languageService = languageService;
        this.themeService = themeService;
        this.sessionService = sessionService;
        this.msalService = msalService;
        this.msalBroadcastService = msalBroadcastService;
        this.userContextService = userContextService;
        this.userService = userService;
        this.authApiService = authApiService;
        this.toastService = toastService;
        this._destroying$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.showLoader = false;
        this.title = 'socheck-portal';
        this.isExpanded = false;
        this.menuItems = [
            {
                label: '我的首頁12345',
                icon: 'home',
                routerLink: '/home',
            },
            {
                label: '表單管理',
                icon: 'assignment',
                routerLink: '/formMgmt',
            },
            {
                label: '黑名單管理',
                icon: 'assignment',
                routerLink: '/blacklistMgmt',
            },
            {
                label: '許可證管理',
                icon: 'change_circle',
                routerLink: '/licenseMgmt',
            },
            {
                label: '白名單管理',
                icon: 'supervisor_account',
                routerLink: '/whitelistMgmt',
            },
            {
                label: '設定',
                icon: 'settings',
                routerLink: '/settings',
            },
        ];
        var theme = this.sessionService.getItem('selected-theme');
        if (theme != null && theme.length > 0) {
            this.theme = theme;
            this.themeService.selectTheme(theme);
        }
        else {
            this.theme = 'theme-blue';
        }
        router.events.subscribe((val) => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd) {
                this.toastService.clear();
            }
        });
    }
    isActive(path) {
        return this.router.url.includes(path);
    }
    ngOnInit() {
        this.loaderService.status.subscribe((val) => {
            this.showLoader = val;
        });
        this.themeService.theme.subscribe((val) => {
            this.theme = val;
        });
        this.msalBroadcastService.inProgress$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)((status) => status === _azure_msal_browser__WEBPACK_IMPORTED_MODULE_12__.InteractionStatus.None), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._destroying$))
            .subscribe(() => {
            console.log('msalBroadcastService.inProgress');
        });
        this.loaderService.show();
        this.languageService.initLang();
        console.log('Language: ' + this.languageService.getLang());
        this.loaderService.hide();
    }
    ngOnDestroy() {
        this._destroying$.next(null);
        this._destroying$.complete();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_theme_service__WEBPACK_IMPORTED_MODULE_2__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_session_service__WEBPACK_IMPORTED_MODULE_3__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_14__.MsalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_14__.MsalBroadcastService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_user_context_service__WEBPACK_IMPORTED_MODULE_4__.UserContextService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_user_data_service__WEBPACK_IMPORTED_MODULE_5__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_auth_api_service__WEBPACK_IMPORTED_MODULE_6__.AuthApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 2, consts: [[1, "ui-fluid", "ng-main", 3, "ngClass"], ["position", "bottom-right"], ["pTemplate", "message"], [4, "ngIf"], [1, "ui-toast-icon", "pi", 3, "ngClass"], [1, "ui-toast-message-text-content"], [1, "ui-toast-summary"], [1, "ui-toast-detail"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "p-toast", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AppComponent_ng_template_2_Template, 8, 12, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, AppComponent_p_progressSpinner_3_Template, 1, 0, "p-progressSpinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showLoader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, primeng_toast__WEBPACK_IMPORTED_MODULE_16__.Toast, primeng_api__WEBPACK_IMPORTED_MODULE_17__.PrimeTemplate, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_18__.ProgressSpinner, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "MSALGuardConfigFactory": () => (/* binding */ MSALGuardConfigFactory),
/* harmony export */   "MSALInstanceFactory": () => (/* binding */ MSALInstanceFactory),
/* harmony export */   "MSALInterceptorConfigFactory": () => (/* binding */ MSALInterceptorConfigFactory),
/* harmony export */   "loggerCallback": () => (/* binding */ loggerCallback)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @azure/msal-angular */ 4084);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @azure/msal-browser */ 9790);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @azure/msal-browser */ 3105);
/* harmony import */ var _azure_msal_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @azure/msal-browser */ 3503);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5347);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guards/auth.guard */ 7574);
/* harmony import */ var _shared_primeng_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/primeng.module */ 1771);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);



















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
function loggerCallback(_logLevel, message) {
    console.log(message);
}
function MSALInstanceFactory() {
    return new _azure_msal_browser__WEBPACK_IMPORTED_MODULE_7__.PublicClientApplication({
        auth: {
            clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.clientId,
            authority: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.authority,
            // validateAuthority: true,
            redirectUri: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.redirectUrl,
            postLogoutRedirectUri: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.postLogoutRedirectUri,
            navigateToLoginRequestUrl: true,
        },
        cache: {
            cacheLocation: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserCacheLocation.LocalStorage,
            storeAuthStateInCookie: false,
        },
        system: {
            loggerOptions: {
                loggerCallback,
                logLevel: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_9__.LogLevel.Info,
                piiLoggingEnabled: false,
            },
        },
    });
}
function MSALInterceptorConfigFactory() {
    const protectedResourceMap = new Map();
    protectedResourceMap.set('http://localhost:4200/portal', ['user.read']);
    protectedResourceMap.set(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.sofcBaseHerf, ['user.read']);
    return {
        interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_8__.InteractionType.Redirect,
        protectedResourceMap,
    };
}
function MSALGuardConfigFactory() {
    return {
        interactionType: _azure_msal_browser__WEBPACK_IMPORTED_MODULE_8__.InteractionType.Redirect,
        // authRequest: {
        //   scopes: ['user.read']
        // },
        // loginFailedRoute: '/login-failed'
    };
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
        _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard,
        _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe,
        primeng_api__WEBPACK_IMPORTED_MODULE_12__.ConfirmationService,
        primeng_api__WEBPACK_IMPORTED_MODULE_12__.MessageService,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
            useClass: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_14__.MsalInterceptor,
            multi: true,
        },
        {
            provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_14__.MSAL_INSTANCE,
            useFactory: MSALInstanceFactory,
        },
        {
            provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_14__.MSAL_GUARD_CONFIG,
            useFactory: MSALGuardConfigFactory,
        },
        {
            provide: _azure_msal_angular__WEBPACK_IMPORTED_MODULE_14__.MSAL_INTERCEPTOR_CONFIG,
            useFactory: MSALInterceptorConfigFactory,
        },
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_14__.MsalService,
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_14__.MsalGuard,
        _azure_msal_angular__WEBPACK_IMPORTED_MODULE_14__.MsalBroadcastService,
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__.APP_BASE_HREF,
            useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseHref,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _shared_primeng_module__WEBPACK_IMPORTED_MODULE_4__.PrimengModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient],
                },
            }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule.forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _shared_primeng_module__WEBPACK_IMPORTED_MODULE_4__.PrimengModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule] }); })();


/***/ }),

/***/ 6156:
/*!******************************************************!*\
  !*** ./src/app/core/directives/directives.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectivesModule": () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var _dnd_upload_dnd_upload_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dnd-upload/dnd-upload.directive */ 8829);
/* harmony import */ var _html_collapse_html_collapse_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-collapse/html-collapse.directive */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class DirectivesModule {
}
DirectivesModule.ɵfac = function DirectivesModule_Factory(t) { return new (t || DirectivesModule)(); };
DirectivesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DirectivesModule });
DirectivesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DirectivesModule, { declarations: [_dnd_upload_dnd_upload_directive__WEBPACK_IMPORTED_MODULE_0__.DndUploadDirective, _html_collapse_html_collapse_directive__WEBPACK_IMPORTED_MODULE_1__.HtmlCollapseDirective], exports: [_dnd_upload_dnd_upload_directive__WEBPACK_IMPORTED_MODULE_0__.DndUploadDirective, _html_collapse_html_collapse_directive__WEBPACK_IMPORTED_MODULE_1__.HtmlCollapseDirective] }); })();


/***/ }),

/***/ 8829:
/*!********************************************************************!*\
  !*** ./src/app/core/directives/dnd-upload/dnd-upload.directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DndUploadDirective": () => (/* binding */ DndUploadDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class DndUploadDirective {
    constructor() {
        this.acceptDropFileType = ''; // ex. ".xlsx,.csv,.xls"
        this.allowMulitUpload = false;
        this.maxFileSize = 40 * 1024 * 1024; // default 4MB
        this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // file drop 事件接口
        this.onFileDroppedError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // 本directive拋出錯誤時的統一接口
    }
    // Dragover listener
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
    }
    // Dragleave listener
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
    }
    // Drop listener
    ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        // 使用者未預設傳入格式，使得所有類型的檔案都可以上傳
        if (this.acceptDropFileType.length === 0) {
            console.log('dnd allow all file type');
        }
        // 預設僅可上傳單一檔案，上傳多檔案時終止流程並拋出錯誤
        if (!this.allowMulitUpload && evt.dataTransfer.files.length > 1) {
            return this.onFileDroppedError.emit('SampleOutDPL.Message.NotAllowMulitpleFileUpload');
        }
        // 上傳檔案類型與預設類型不符時終止流程並拋出錯誤
        let unexceptTypes = Array.from(evt.dataTransfer.files).filter((file) => { return !this.isAcceptType(file); });
        if (unexceptTypes.length > 0) {
            return this.onFileDroppedError.emit('SampleOutDPL.Message.NotAllowThisUploadFileType');
        }
        ;
        // 上傳檔案大小過大時拋出錯誤
        let unexceptSize = Array.from(evt.dataTransfer.files).filter((file) => { return !this.isAcceptSize(file); });
        if (unexceptSize.length > 0) {
            return this.onFileDroppedError.emit('SampleOutDPL.Message.FileSizeExceed');
        }
        ;
        // 回傳正確檔案
        let acceptFiles = Array.from(evt.dataTransfer.files).filter((file) => { return this.isAcceptType(file); });
        if (acceptFiles.length > 0) {
            this.fileDropped.emit({ 'files': acceptFiles });
        }
    }
    isAcceptType(file) {
        var _a, _b;
        const fileType = ((_b = (_a = file.name) === null || _a === void 0 ? void 0 : _a.split('.')) === null || _b === void 0 ? void 0 : _b.pop()) || '';
        return this.acceptDropFileType.split(',').includes('.' + fileType) || this.acceptDropFileType === '';
    }
    isAcceptSize(file) {
        return file.size < this.maxFileSize;
    }
}
DndUploadDirective.ɵfac = function DndUploadDirective_Factory(t) { return new (t || DndUploadDirective)(); };
DndUploadDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DndUploadDirective, selectors: [["", "dndUploadHandler", ""]], hostBindings: function DndUploadDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function DndUploadDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DndUploadDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DndUploadDirective_drop_HostBindingHandler($event) { return ctx.ondrop($event); });
    } }, inputs: { acceptDropFileType: "acceptDropFileType", allowMulitUpload: "allowMulitUpload", maxFileSize: "maxFileSize" }, outputs: { fileDropped: "fileDropped", onFileDroppedError: "onFileDroppedError" } });


/***/ }),

/***/ 8165:
/*!**************************************************************************!*\
  !*** ./src/app/core/directives/html-collapse/html-collapse.directive.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlCollapseDirective": () => (/* binding */ HtmlCollapseDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HtmlCollapseDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.collapseController = true;
    }
    get htmlEl() {
        return this.elementRef.nativeElement;
    }
    ngOnInit() {
        this.toggle();
    }
    ngOnChanges(changes) {
        this.toggle();
    }
    hide() {
        this.collapseController = false;
        const element = this.htmlEl;
        // // remove collapse show
        element.classList.remove('collapse');
        element.classList.remove('show');
        const height = element.offsetHeight;
        element.style.height = `${height}px`;
        element.classList.add('collapsing');
        element.style.height = '';
    }
    show() {
        this.collapseController = true;
        const element = this.htmlEl;
        element.classList.remove('collapse');
        element.classList.add('collapsing');
        const height = element.scrollHeight;
        element.style.height = `${height}px`;
    }
    toggle() {
        this.collapseController ? this.show() : this.hide();
    }
}
HtmlCollapseDirective.ɵfac = function HtmlCollapseDirective_Factory(t) { return new (t || HtmlCollapseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
HtmlCollapseDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HtmlCollapseDirective, selectors: [["", "htmlCollapse", ""]], inputs: { collapseController: "collapseController" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 7574:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @azure/msal-angular */ 4084);
/* harmony import */ var _services_user_context_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user-context.service */ 5258);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/session.service */ 2821);





class AuthGuard {
    constructor(router, msalService, userContextService, sessionService) {
        this.router = router;
        this.msalService = msalService;
        this.userContextService = userContextService;
        this.sessionService = sessionService;
    }
    canActivate(_router, state) {
        let currentPath = state.url;
        console.log(currentPath);
        let expirationDate = this.sessionService.getItem('expirationDate');
        if (!expirationDate || new Date() > new Date(expirationDate)) {
            this.sessionService.clear();
            this.router.navigate(['/login']);
            return false;
        }
        const user = this.userContextService.user$.getValue();
        if (user == null || !(user === null || user === void 0 ? void 0 : user.userCode)) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_4__.MsalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_user_context_service__WEBPACK_IMPORTED_MODULE_0__.UserContextService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ 6635:
/*!***************************************************!*\
  !*** ./src/app/core/services/auth-api.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthApiService": () => (/* binding */ AuthApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _user_context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-context.service */ 5258);





const baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiPathPrefix}`;
const APIM_AUTH_HEADER = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
    'Ocp-Apim-Subscription-Key': _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiKey,
});
class AuthApiService {
    constructor(http, userContextService) {
        this.http = http;
        this.userContextService = userContextService;
    }
    getUserEmpDataByTenantAndCode(userTenant, userCode) {
        const url = `${baseUrl}/emp/${userCode}/${userTenant}`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json').append('Content-Type', 'application/json');
        const response = this.http.get(url, {
            headers: headerslocal,
            observe: 'events',
        });
        return response;
    }
    getUserProfileByAdSubscriptionIdAndEmail(model) {
        const url = `${baseUrl}/getUserProfileByAdSubscriptionIdAndEmail/${model.userEmail}`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json')
            .append('Content-Type', 'application/json')
            .append('adSubscriptionId', model.adSubscriptionId);
        const response = this.http.get(url, {
            headers: headerslocal,
            observe: 'events',
        });
        return response;
    }
    getUserProfileByEmail(model) {
        const url = `${baseUrl}/getUserProfileByEmail/${model.userEmail}`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json')
            .append('Content-Type', 'application/json')
            .append('tenantId', model.tenantId);
        const response = this.http.get(url, {
            headers: headerslocal,
            observe: 'events',
        });
        return response;
    }
    getUserProfile(model) {
        const url = `${baseUrl}/user`;
        const userToken = this.userContextService.user$.getValue().userToken;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json')
            .append('Content-Type', 'application/json')
            .append('userToken', userToken);
        const response = this.http.post(url, model, {
            headers: headerslocal,
            observe: 'events',
        });
        return response;
    }
    getUserMenuList() {
        const url = `${baseUrl}/getUserMenuList`;
        const userToken = this.userContextService.user$.getValue().userToken;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json')
            .append('Content-Type', 'application/json')
            .append('userToken', userToken);
        return this.http.get(url, { headers: headerslocal });
    }
    getUserMenuUrlPermissionList(userInfo) {
        const url = `${baseUrl}/permission/menuUrl`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json')
            .append('Content-Type', 'application/json')
            .append('userToken', userInfo.userToken);
        return this.http.get(url, { headers: headerslocal });
    }
    getAllEmpByTenant(tenant, empData) {
        const url = `${baseUrl}/getAllEmp/${tenant}/${empData}`;
        const userToken = this.userContextService.user$.getValue().userToken;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json')
            .append('Content-Type', 'application/json')
            .append('userToken', userToken);
        return this.http.get(url, { headers: headerslocal, observe: 'events' });
    }
    getSupervisorUser(tenant, empCode) {
        const url = `${baseUrl}/getSupervisorUser/${tenant}/${empCode}`;
        const userToken = this.userContextService.user$.getValue().userToken;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json')
            .append('Content-Type', 'application/json')
            .append('userToken', userToken);
        return this.http.get(url, { headers: headerslocal, observe: 'events' });
    }
    addUserProfileByEmail(model) {
        const url = `${baseUrl}/user/add`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json')
            .append('Content-Type', 'application/json')
            .append('adSubscriptionId', model.adSubscriptionId);
        const body = JSON.stringify(model);
        return this.http.post(url, body, {
            headers: headerslocal,
            observe: 'events',
        });
    }
    getAllTenants() {
        const url = `${baseUrl}/tenant/query`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json').append('Content-Type', 'application/json');
        let model = {};
        const body = JSON.stringify(model);
        return this.http.post(url, body, {
            headers: headerslocal,
            observe: 'events',
        });
    }
    getAuthGroups(model) {
        const url = `${baseUrl}/authGroup/query`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json').append('Content-Type', 'application/json');
        const body = JSON.stringify(model);
        return this.http.post(url, body, {
            headers: headerslocal,
            observe: 'events',
        });
    }
    queryAuthGroupMembers(model) {
        const url = `${baseUrl}/authGroup/member/query`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json').append('Content-Type', 'application/json');
        const body = JSON.stringify(model);
        return this.http.post(url, body, {
            headers: headerslocal,
            observe: 'events',
        });
    }
    queryAvailableMembers(model) {
        const url = `${baseUrl}/authGroup/member/query/available`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json').append('Content-Type', 'application/json');
        const body = JSON.stringify(model);
        return this.http.post(url, body, {
            headers: headerslocal,
            observe: 'events',
        });
    }
    checkAuthGroupNameExists(model) {
        const url = `${baseUrl}/authGroup/existName`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json').append('Content-Type', 'application/json');
        const body = JSON.stringify(model);
        return this.http.post(url, body, {
            headers: headerslocal,
            observe: 'events',
        });
    }
    saveAuthGroupAndMembers(model) {
        const url = `${baseUrl}/authGroup/member/save`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json').append('Content-Type', 'application/json');
        const body = JSON.stringify(model);
        return this.http.post(url, body, {
            headers: headerslocal,
            observe: 'events',
        });
    }
    deleteAuthGroup(model) {
        const url = `${baseUrl}/authGroup/${model.authGroupId}`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json').append('Content-Type', 'application/json');
        return this.http.delete(url, { headers: headerslocal, observe: 'events' });
    }
    getRoles(model) {
        const url = `${baseUrl}/role/query`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json').append('Content-Type', 'application/json');
        const body = JSON.stringify(model);
        return this.http.post(url, body, {
            headers: headerslocal,
            observe: 'events',
        });
    }
    queryRoleAuthGroups(model) {
        const url = `${baseUrl}/role/authGroup/query`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json').append('Content-Type', 'application/json');
        const body = JSON.stringify(model);
        return this.http.post(url, body, {
            headers: headerslocal,
            observe: 'events',
        });
    }
    queryRoleAvailableGroups(model) {
        const url = `${baseUrl}/role/authGroup/query/available`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json').append('Content-Type', 'application/json');
        const body = JSON.stringify(model);
        return this.http.post(url, body, {
            headers: headerslocal,
            observe: 'events',
        });
    }
    queryRolePermissions(model) {
        const url = `${baseUrl}/role/permission/query`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json').append('Content-Type', 'application/json');
        const body = JSON.stringify(model);
        return this.http.post(url, body, {
            headers: headerslocal,
            observe: 'events',
        });
    }
    checkRoleNameExists(model) {
        const url = `${baseUrl}/role/existName`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json').append('Content-Type', 'application/json');
        const body = JSON.stringify(model);
        return this.http.post(url, body, {
            headers: headerslocal,
            observe: 'events',
        });
    }
    saveRole(model) {
        const url = `${baseUrl}/role/save`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json').append('Content-Type', 'application/json');
        const body = JSON.stringify(model);
        return this.http.post(url, body, {
            headers: headerslocal,
            observe: 'events',
        });
    }
    deleteRole(model) {
        const url = `${baseUrl}/role/${model.roleId}`;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json').append('Content-Type', 'application/json');
        return this.http.delete(url, { headers: headerslocal, observe: 'events' });
    }
    ouQueryByPrefix(ouPrefix, enableSearchAllOU = 'N') {
        const tenant = this.userContextService.user$.getValue().tenant;
        const url = `${baseUrl}/ouQueryByPrefix/${tenant}/${ouPrefix}?enableSearchAllOU=${enableSearchAllOU}`;
        const userToken = this.userContextService.user$.getValue().userToken;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json')
            .append('Content-Type', 'application/json')
            .append('userToken', userToken);
        return this.http.get(url, { headers: headerslocal });
    }
    ouQueryByPrefixAndGroup(ouPrefix = null, groupName = null) {
        const model = JSON.parse('{}');
        const tenant = this.userContextService.user$.getValue().tenant;
        const url = `${baseUrl}/ouQuery`;
        const userToken = this.userContextService.user$.getValue().userToken;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json')
            .append('Content-Type', 'application/json')
            .append('userToken', userToken);
        model.tenant = tenant;
        model.groupName = groupName;
        model.ouPrefix = ouPrefix;
        return this.http.post(url, model, { headers: headerslocal });
    }
    groupQuery() {
        const tenant = this.userContextService.user$.getValue().tenant;
        const url = `${baseUrl}/groupQuery/${tenant}`;
        const userToken = this.userContextService.user$.getValue().userToken;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json')
            .append('Content-Type', 'application/json')
            .append('userToken', userToken);
        return this.http.get(url, { headers: headerslocal });
    }
    getAgentDeptByTenantAndEmpCode(tenant, empCode) {
        const url = `${baseUrl}/dept/${tenant}/${empCode}`;
        const userToken = this.userContextService.user$.getValue().userToken;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json')
            .append('Content-Type', 'application/json')
            .append('userToken', userToken);
        return this.http.get(url, { headers: headerslocal, observe: 'events' });
    }
    getOUInfoByOUGroup(groupCode) {
        const tenant = this.userContextService.user$.getValue().tenant;
        const url = `${baseUrl}/groupOuQuery/${tenant}/${groupCode}`;
        const userToken = this.userContextService.user$.getValue().userToken;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json')
            .append('Content-Type', 'application/json')
            .append('userToken', userToken);
        return this.http.get(url, { headers: headerslocal, observe: 'events' });
    }
    getTenantFormTypeList() {
        const tenant = this.userContextService.user$.getValue().tenant;
        const url = `${baseUrl}/permission/getTenantFormTypeList/${tenant}`;
        const userToken = this.userContextService.user$.getValue().userToken;
        const headerslocal = APIM_AUTH_HEADER.append('accept', 'application/json')
            .append('Content-Type', 'application/json')
            .append('userToken', userToken);
        return this.http.get(url, { headers: headerslocal });
    }
}
AuthApiService.ɵfac = function AuthApiService_Factory(t) { return new (t || AuthApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_context_service__WEBPACK_IMPORTED_MODULE_1__.UserContextService)); };
AuthApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthApiService, factory: AuthApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7524:
/*!***************************************************!*\
  !*** ./src/app/core/services/language.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session.service */ 2821);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 7514);



class LanguageService {
    constructor(sessionService, translateService) {
        this.sessionService = sessionService;
        this.translateService = translateService;
        this.languages = ['zh-tw', 'en-us'];
    }
    initLang() {
        this.translateService.addLangs(this.languages);
        this.translateService.setDefaultLang(this.languages[0]);
        let language = this.getLang();
        this.translateService.use(language);
        this.sessionService.setItem("LANG", language);
    }
    getLangs() {
        return this.languages;
    }
    getLang() {
        let language = this.sessionService.getItem("LANG");
        if (!this.languages.includes(language)) {
            console.log('browser language: ', navigator.language);
            if (navigator.language === 'zh-TW' || navigator.language === 'zh-CN') {
                language = 'zh-tw';
            }
            else {
                language = 'en-us';
            }
            // language = this.translateService.getDefaultLang();
        }
        return language;
    }
    setLang(language) {
        if (this.languages.includes(language)) {
            this.translateService.use(language);
            this.sessionService.setItem("LANG", language);
        }
    }
    getContent(content) {
        let result = content;
        try {
            let contentObject = JSON.parse(content);
            let language = this.getLang();
            switch (language) {
                case 'zh-tw':
                    result = contentObject.TW ? contentObject.TW : content;
                    break;
                case 'en-us':
                    result = contentObject.EN ? contentObject.EN : content;
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.error(error);
        }
        return result;
    }
    translate(key, params) {
        return this.translateService.instant(key, params);
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
LanguageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });
class LanguageContent {
}


/***/ }),

/***/ 4487:
/*!*************************************************!*\
  !*** ./src/app/core/services/loader.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


/**
 * loader service
 * toggle loader gif in website
 */
class LoaderService {
    constructor() {
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
    show() {
        this.status.next(true);
    }
    hide() {
        this.status.next(false);
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2821:
/*!**************************************************!*\
  !*** ./src/app/core/services/session.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionService": () => (/* binding */ SessionService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

/**
 * Session storage service
 * Provides methods to get, set, remove, clear session storage items.
 */
class SessionService {
    /**
     * set session storage item
     * @param key
     * @param value
     */
    setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    /**
     * get session storage item
     * @param key
     */
    getItem(key) {
        var value = localStorage.getItem(key);
        return JSON.parse(value);
    }
    /**
     * remove session storage item
     * @param key
     */
    removeItem(key) {
        localStorage.removeItem(key);
    }
    /**
     * remove all session storage items
     */
    clear() {
        localStorage.clear();
    }
}
SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(); };
SessionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4603:
/*!************************************************!*\
  !*** ./src/app/core/services/theme.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


/**
 * Theme provider service
 */
class ThemeService {
    constructor() {
        this.theme = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject("theme-blue");
    }
    /**
     *
     * @param value on selecting theme set theme variable globally
     */
    selectTheme(value) {
        this.theme.next(value);
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9891:
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 1122);


/**
 * Toast service class
 * This class provides methods to add single, multiple alerts as a toast
 */
class ToastService {
    constructor(messageService) {
        this.messageService = messageService;
    }
    info(detail, sticky, key) {
        this.addSingle('info', 'Info', detail, sticky, key);
    }
    success(detail, sticky, key) {
        this.addSingle('success', 'Success', detail, sticky, key);
    }
    warn(detail, sticky, key) {
        this.addSingle('warn', 'Warn', detail, sticky, key);
    }
    error(detail, key) {
        this.addSingle('error', 'Error', detail, true, key);
    }
    /**
     * add single toast message
     * @param severity Severity level of the message, valid values are "success", "info", "warn" and "error"
     * @param summary Summary text of the message.
     * @param detail Detail text of the message.
     * @param sticky Whether the message should be automatically closed based on life property or kept visible.
     * @param key Key of the message in case message is targeted to a specific toast component.
     */
    addSingle(severity, summary, detail, sticky, key) {
        this.messageService.add({
            severity: severity,
            summary: summary,
            detail: detail,
            sticky: sticky,
            key: key
        });
    }
    /**
     * add multiple toast messages
     * @param messages
     * array of message type {severity:'success', summary:'Service Message', detail:'Via MessageService'}
     */
    addMultiple(messages) {
        this.messageService.addAll(messages);
    }
    /**
     * clear all toast messages
     */
    clear() {
        this.messageService.clear();
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService)); };
ToastService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5258:
/*!*******************************************************!*\
  !*** ./src/app/core/services/user-context.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuUrlPermission": () => (/* binding */ MenuUrlPermission),
/* harmony export */   "Permission": () => (/* binding */ Permission),
/* harmony export */   "UserContextService": () => (/* binding */ UserContextService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/session.service */ 2821);



const defaultUser = null;
class UserContextService {
    constructor(sessionService) {
        this.sessionService = sessionService;
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(defaultUser);
        const data = this.sessionService.getItem('userInfo');
        if (data != null) {
            this.user$.next(data);
        }
    }
    setUser(user) {
        let expirationDate = new Date(new Date().getTime() + 1 * 60 * 60 * 1000);
        this.sessionService.setItem('expirationDate', expirationDate);
        this.sessionService.setItem('userInfo', user);
        this.user$.next(user);
    }
    getMenuUrlPermission(menuUrl) {
        var _a, _b;
        let permissions = [];
        if ((_a = this.user$.getValue()) === null || _a === void 0 ? void 0 : _a.menuUrlPermissions) {
            let menuUrlPermission = (_b = this.user$
                .getValue()) === null || _b === void 0 ? void 0 : _b.menuUrlPermissions.filter((x) => x.menuUrl === menuUrl);
            menuUrlPermission.forEach((x) => {
                permissions.push.apply(permissions, x === null || x === void 0 ? void 0 : x.permissions.map((p) => p.permissionCode));
            });
        }
        return permissions;
    }
    getMenuUrlTitle(menuUrl) {
        let title = '';
        let menus = this.sessionService.getItem('Menus');
        if (menus) {
            let menuItems = JSON.parse(menus);
            menuItems.forEach((menu) => {
                var _a;
                (_a = menu === null || menu === void 0 ? void 0 : menu.items) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
                    if ((item === null || item === void 0 ? void 0 : item.routerLink) == menuUrl) {
                        title = item.label;
                    }
                });
            });
        }
        return title;
    }
    logout() {
        console.log('logout');
        const lang = this.sessionService.getItem('LANG');
        this.sessionService.clear();
        this.sessionService.setItem('LANG', lang);
        this.user$.next(defaultUser);
    }
}
UserContextService.ɵfac = function UserContextService_Factory(t) { return new (t || UserContextService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService)); };
UserContextService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserContextService, factory: UserContextService.ɵfac, providedIn: 'root' });
class MenuUrlPermission {
}
class Permission {
}


/***/ }),

/***/ 4333:
/*!****************************************************!*\
  !*** ./src/app/core/services/user-data.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDataService": () => (/* binding */ UserDataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-api.service */ 6635);


/**
 * user service class
 */
class UserDataService {
    constructor(authApiService) {
        this.authApiService = authApiService;
    }
    getUserProfileByEmail(userInfo) {
        return this.authApiService.getUserProfileByAdSubscriptionIdAndEmail(userInfo);
    }
}
UserDataService.ɵfac = function UserDataService_Factory(t) { return new (t || UserDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_api_service__WEBPACK_IMPORTED_MODULE_0__.AuthApiService)); };
UserDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserDataService, factory: UserDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8494:
/*!*************************************************!*\
  !*** ./src/app/shared/error/error.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ErrorComponent {
    constructor() { }
    ngOnInit() { }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 19, vars: 0, consts: [[1, "row", "error-box"], [1, "col-sm-12"], [1, "text-center"], [1, "font-xl"], [1, "fa", "fa-fw", "fa-exclamation-triangle", "fa-lg"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Error 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3)(6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " The page you requested could not be found, either contact your webmaster or try again. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Use your browsers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " button to navigate to the page you have prevously come from. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, encapsulation: 2 });


/***/ }),

/***/ 1771:
/*!******************************************!*\
  !*** ./src/app/shared/primeng.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimengModule": () => (/* binding */ PrimengModule)
/* harmony export */ });
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/accordion */ 5456);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! primeng/autocomplete */ 1338);
/* harmony import */ var primeng_blockui__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/blockui */ 8015);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/breadcrumb */ 1815);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/calendar */ 1229);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/card */ 6480);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/carousel */ 87);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/chart */ 3252);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/checkbox */ 8271);
/* harmony import */ var primeng_chip__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/chip */ 4580);
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/chips */ 111);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/confirmdialog */ 6625);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/dataview */ 6796);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/dialog */ 3489);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/dropdown */ 4086);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dynamicdialog */ 7018);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/fileupload */ 7197);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/inputnumber */ 9721);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtextarea */ 7288);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/listbox */ 3803);
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/megamenu */ 6307);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/message */ 8129);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/messages */ 2530);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/multiselect */ 2460);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/overlaypanel */ 9245);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/paginator */ 1066);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/panel */ 6572);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/panelmenu */ 1862);
/* harmony import */ var primeng_picklist__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/picklist */ 8801);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/progressspinner */ 120);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/radiobutton */ 5949);
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! primeng/scrolltop */ 2071);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/selectbutton */ 5260);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/sidebar */ 9734);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/steps */ 7798);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ 8581);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/tabview */ 2050);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toast */ 2802);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! primeng/togglebutton */ 4816);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! primeng/toolbar */ 1722);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/tooltip */ 1210);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! primeng/divider */ 9026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);













































class PrimengModule {
}
PrimengModule.ɵfac = function PrimengModule_Factory(t) { return new (t || PrimengModule)(); };
PrimengModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PrimengModule });
PrimengModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[], primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__.InputTextModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule,
        primeng_panel__WEBPACK_IMPORTED_MODULE_3__.PanelModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_4__.ToastModule,
        primeng_megamenu__WEBPACK_IMPORTED_MODULE_5__.MegaMenuModule,
        primeng_panelmenu__WEBPACK_IMPORTED_MODULE_6__.PanelMenuModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_7__.TableModule,
        primeng_message__WEBPACK_IMPORTED_MODULE_8__.MessageModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_9__.CardModule,
        primeng_chart__WEBPACK_IMPORTED_MODULE_10__.ChartModule,
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__.ProgressSpinnerModule,
        primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_12__.OverlayPanelModule,
        primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__.BreadcrumbModule,
        primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.CalendarModule,
        primeng_sidebar__WEBPACK_IMPORTED_MODULE_15__.SidebarModule,
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_16__.DynamicDialogModule,
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__.InputTextareaModule,
        primeng_messages__WEBPACK_IMPORTED_MODULE_18__.MessagesModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__.FileUploadModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__.DropdownModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_21__.MultiSelectModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_22__.AccordionModule,
        primeng_steps__WEBPACK_IMPORTED_MODULE_23__.StepsModule,
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_24__.RadioButtonModule,
        primeng_blockui__WEBPACK_IMPORTED_MODULE_25__.BlockUIModule,
        primeng_listbox__WEBPACK_IMPORTED_MODULE_26__.ListboxModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_27__.DialogModule,
        primeng_chips__WEBPACK_IMPORTED_MODULE_28__.ChipsModule,
        primeng_dataview__WEBPACK_IMPORTED_MODULE_29__.DataViewModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_30__.TabViewModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_31__.ConfirmDialogModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_32__.CheckboxModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_33__.TooltipModule,
        primeng_carousel__WEBPACK_IMPORTED_MODULE_34__.CarouselModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_35__.PaginatorModule,
        primeng_picklist__WEBPACK_IMPORTED_MODULE_36__.PickListModule,
        primeng_chip__WEBPACK_IMPORTED_MODULE_37__.ChipModule,
        primeng_scrolltop__WEBPACK_IMPORTED_MODULE_38__.ScrollTopModule,
        primeng_selectbutton__WEBPACK_IMPORTED_MODULE_39__.SelectButtonModule,
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_40__.AutoCompleteModule,
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_41__.ToolbarModule,
        primeng_togglebutton__WEBPACK_IMPORTED_MODULE_42__.ToggleButtonModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_43__.InputNumberModule,
        primeng_divider__WEBPACK_IMPORTED_MODULE_44__.DividerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PrimengModule, { exports: [primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__.InputTextModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule,
        primeng_panel__WEBPACK_IMPORTED_MODULE_3__.PanelModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_4__.ToastModule,
        primeng_megamenu__WEBPACK_IMPORTED_MODULE_5__.MegaMenuModule,
        primeng_panelmenu__WEBPACK_IMPORTED_MODULE_6__.PanelMenuModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_7__.TableModule,
        primeng_message__WEBPACK_IMPORTED_MODULE_8__.MessageModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_9__.CardModule,
        primeng_chart__WEBPACK_IMPORTED_MODULE_10__.ChartModule,
        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_11__.ProgressSpinnerModule,
        primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_12__.OverlayPanelModule,
        primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_13__.BreadcrumbModule,
        primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.CalendarModule,
        primeng_sidebar__WEBPACK_IMPORTED_MODULE_15__.SidebarModule,
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_16__.DynamicDialogModule,
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__.InputTextareaModule,
        primeng_messages__WEBPACK_IMPORTED_MODULE_18__.MessagesModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__.FileUploadModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__.DropdownModule,
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_21__.MultiSelectModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_22__.AccordionModule,
        primeng_steps__WEBPACK_IMPORTED_MODULE_23__.StepsModule,
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_24__.RadioButtonModule,
        primeng_blockui__WEBPACK_IMPORTED_MODULE_25__.BlockUIModule,
        primeng_listbox__WEBPACK_IMPORTED_MODULE_26__.ListboxModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_27__.DialogModule,
        primeng_chips__WEBPACK_IMPORTED_MODULE_28__.ChipsModule,
        primeng_dataview__WEBPACK_IMPORTED_MODULE_29__.DataViewModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_30__.TabViewModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_31__.ConfirmDialogModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_32__.CheckboxModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_33__.TooltipModule,
        primeng_carousel__WEBPACK_IMPORTED_MODULE_34__.CarouselModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_35__.PaginatorModule,
        primeng_picklist__WEBPACK_IMPORTED_MODULE_36__.PickListModule,
        primeng_chip__WEBPACK_IMPORTED_MODULE_37__.ChipModule,
        primeng_scrolltop__WEBPACK_IMPORTED_MODULE_38__.ScrollTopModule,
        primeng_selectbutton__WEBPACK_IMPORTED_MODULE_39__.SelectButtonModule,
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_40__.AutoCompleteModule,
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_41__.ToolbarModule,
        primeng_togglebutton__WEBPACK_IMPORTED_MODULE_42__.ToggleButtonModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_43__.InputNumberModule,
        primeng_divider__WEBPACK_IMPORTED_MODULE_44__.DividerModule] }); })();


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _core_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/directives/directives.module */ 6156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
        };
    }
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateStore], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _core_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _core_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _core_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule], exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _core_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    envName: 'DEV',
    baseHref: '/portal/',
    apiUrl: 'https://itu7-apim.azure-api.net/dev-sofcheck-api/v1',
    apiPathPrefix: '/service/v1',
    workflowApiUrl: 'https://itu7-apim.azure-api.net/dev-work-flow-api/v1/workflow',
    apiUsageCode: '',
    apiKey: 'a6adb39cb25e4975ad7fbc0a447afc15',
    version: '1.0.0',
    clientId: '8305ae0f-3152-49f8-8c3f-1ad24902bd47',
    authority: 'https://login.microsoftonline.com/common',
    redirectUrl: 'https://dev-sofcheck.ibpaas.com/portal/redirect',
    postLogoutRedirectUri: 'https://dev-sofcheck.ibpaas.com/portal/login',
    sofcBaseHerf: 'https://dev-sofcheck.ibpaas.com/portal',
    devLoginDisplay: 'true',
    storeRedirectUrlPrefix: 'https://dev.ibpaas.com/portal-store/redirect',
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map