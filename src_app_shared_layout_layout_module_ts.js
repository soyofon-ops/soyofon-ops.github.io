"use strict";
(self["webpackChunksocheck_portal"] = self["webpackChunksocheck_portal"] || []).push([["src_app_shared_layout_layout_module_ts"],{

/***/ 1546:
/*!********************************************************!*\
  !*** ./src/app/shared/layout/layout-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutRoutingModule": () => (/* binding */ LayoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 6359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent,
        children: [
            // {
            //   path: 'home',
            //   loadChildren: () =>
            //     import('../../pages/home/home.module').then((mod) => mod.HomeModule),
            // },
            // {
            //   path: 'example',
            //   loadChildren: () =>
            //     import('../../pages/example.module').then((mod) => mod.ExampleModule),
            // },
            {
                path: 'credit',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_credit_credit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/credit/credit.module */ 5118)).then((mod) => mod.CreditModule),
            },
            {
                path: '',
                redirectTo: 'credit',
            },
        ],
    },
];
class LayoutRoutingModule {
}
LayoutRoutingModule.ɵfac = function LayoutRoutingModule_Factory(t) { return new (t || LayoutRoutingModule)(); };
LayoutRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LayoutRoutingModule });
LayoutRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LayoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8634:
/*!************************************************!*\
  !*** ./src/app/shared/layout/layout.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _primeng_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../primeng.module */ 1771);
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-routing.module */ 1546);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ 6359);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _primeng_module__WEBPACK_IMPORTED_MODULE_0__.PrimengModule, _layout_routing_module__WEBPACK_IMPORTED_MODULE_1__.LayoutRoutingModule, _shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _primeng_module__WEBPACK_IMPORTED_MODULE_0__.PrimengModule, _layout_routing_module__WEBPACK_IMPORTED_MODULE_1__.LayoutRoutingModule, _shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ }),

/***/ 6359:
/*!******************************************************!*\
  !*** ./src/app/shared/layout/main/main.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @azure/msal-angular */ 4084);
/* harmony import */ var _core_services_auth_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../core/services/auth-api.service */ 6635);
/* harmony import */ var src_app_core_services_user_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/user-context.service */ 5258);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var src_app_core_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/session.service */ 2821);
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/services/toast.service */ 9891);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/panelmenu */ 1862);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 4086);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var primeng_scrolltop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/scrolltop */ 2071);

















const _c0 = function (a0) { return { close: a0 }; };
const _c1 = function (a0) { return { active: a0 }; };
function MainComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 10)(2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MainComponent_ng_container_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r2.displayMenu = !ctx_r2.displayMenu; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "p-panelMenu", 12)(4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, !ctx_r0.displayMenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c1, ctx_r0.displayMenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("model", ctx_r0.menuItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 4, "Button.Label.Logout"));
} }
function MainComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "MainLayout.Label.testEnv"), "(", ctx_r1.envName, ") ");
} }
const _c2 = function (a0) { return { "no-nav": a0 }; };
const _c3 = function (a0) { return { "menu-open": a0 }; };
class MainComponent {
    constructor(router, msalService, authApiService, userContextService, translateService, sessionService, toastService) {
        this.router = router;
        this.msalService = msalService;
        this.authApiService = authApiService;
        this.userContextService = userContextService;
        this.translateService = translateService;
        this.sessionService = sessionService;
        this.toastService = toastService;
        this.showLoader = false;
        this.displayMenu = true;
        this.unsubscribeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.isShowEnv = false;
        //> get current url and check
        this.checkIsShowNavBar();
    }
    ngOnInit() {
        this.menuItems = new Array(); // end: menuItems
        this.langOptions = [
            { label: '繁體中文', value: 'zh-tw' },
            { label: 'English', value: 'en-us' },
        ];
        this.selectedLang = this.translateService.currentLang;
        this.changeLanguage();
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd) {
                this.routerChanged();
            }
        });
        this.onUserChange$ = this.userContextService.user$.subscribe(() => {
            console.log('setHasLogin...');
            this.setHasLogin();
        });
        //> check is test env
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.envName !== 'PROD') {
            this.envName = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.envName;
            this.isShowEnv = true;
        }
        this.getTenantFormTypeList();
    }
    checkIsShowNavBar() {
        let isHide = true;
        const noHideList = [
            '/applicationMgmt/',
            '/home',
            '/blacklistMgmt/dpl-result',
            '/blacklistMgmt/sample-out-dpl',
            '/sysadmin/',
            '/formMgmt/',
            '-mtn',
            '-setup',
        ];
        for (const urlpath of noHideList) {
            if (this.router.url.includes(urlpath)) {
                isHide = false;
                break;
            }
        }
        const hideList = ['soa-control-setup-check-result-download'];
        for (const urlpath of hideList) {
            if (this.router.url.includes(urlpath)) {
                isHide = true;
                break;
            }
        }
        this.isShowNavBar = true;
        // if (isHide) {
        //   this.isShowNavBar = false;
        // } else {
        //   this.isShowNavBar = true;
        // }
    }
    changeLanguage() {
        console.log('Change Language to: ' + this.selectedLang);
        this.translateService.use(this.selectedLang).subscribe(() => {
            this.initMenu();
        });
        this.sessionService.setItem('LANG', this.selectedLang);
    }
    changeLang() {
        this.changeLanguage();
    }
    setHasLogin() {
        this.currentUser = this.userContextService.user$.getValue();
        if (this.currentUser != null) {
        }
    }
    hideUserInfo(element) {
        if (!this.currentUser) {
            element.hide();
        }
    }
    initMenu() {
        let menus = [
            {
                menuId: '6DB6795E-9524-4609-B7B8-4D4BD6ABBC3E',
                menuDesc: '信用額度申請/確認作業',
                menuDescCn: '信用額度申請/確認作業',
                menuDescEn: 'Test Main',
                menuUrl: '',
                icon: 'home',
                ordinal: 33,
                permissionId: 'A8F71460-FAE2-48D1-96D9-AD25F60D3EF6',
                subMenus: [
                    {
                        menuId: '4C47B731-13CF-46A0-B051-28D6B4533B5D',
                        menuDesc: '申請表單',
                        menuDescCn: '申請表單',
                        menuDescEn: 'Example Form',
                        menuUrl: '/credit/credit-apply/apply',
                        ordinal: 32,
                        parentId: '6DB6795E-9524-4609-B7B8-4D4BD6ABBC3E',
                        permissionId: 'A8F71460-FAE2-48D1-96D9-AD25F60D3EF6',
                    },
                    {
                        menuId: '4C47B731-13CF-46A0-B051-28D6B4533B5D',
                        menuDesc: '簽核表單',
                        menuDescCn: '簽核表單',
                        menuDescEn: 'Example Form',
                        menuUrl: '/credit/credit-apply/approving',
                        ordinal: 32,
                        parentId: '6DB6795E-9524-4609-B7B8-4D4BD6ABBC3E',
                        permissionId: 'A8F71460-FAE2-48D1-96D9-AD25F60D3EF6',
                    },
                    {
                        menuId: '4C47B731-13CF-46A0-B051-28D6B4533B5D',
                        menuDesc: '查詢表單',
                        menuDescCn: '查詢表單',
                        menuDescEn: 'Example Form',
                        menuUrl: '/credit/credit-apply/readonly',
                        ordinal: 32,
                        parentId: '6DB6795E-9524-4609-B7B8-4D4BD6ABBC3E',
                        permissionId: 'A8F71460-FAE2-48D1-96D9-AD25F60D3EF6',
                    },
                ],
            },
            {
                menuId: '6DB6795E-9524-4609-B7B8-4D4BD6ABBC3E',
                menuDesc: '信用額度定期更新作業',
                menuDescCn: '信用額度定期更新作業',
                menuDescEn: 'Test Main',
                menuUrl: '',
                icon: 'home',
                ordinal: 33,
                permissionId: 'A8F71460-FAE2-48D1-96D9-AD25F60D3EF6',
                subMenus: [
                    {
                        menuId: '4C47B731-13CF-46A0-B051-28D6B4533B5D',
                        menuDesc: '簽核表單',
                        menuDescCn: '簽核表單',
                        menuDescEn: 'Example Form',
                        menuUrl: '/credit/credit-update/approving',
                        ordinal: 32,
                        parentId: '6DB6795E-9524-4609-B7B8-4D4BD6ABBC3E',
                        permissionId: 'A8F71460-FAE2-48D1-96D9-AD25F60D3EF6',
                    },
                    {
                        menuId: '4C47B731-13CF-46A0-B051-28D6B4533B5D',
                        menuDesc: '查詢表單',
                        menuDescCn: '查詢表單',
                        menuDescEn: 'Example Form',
                        menuUrl: '/credit/credit-update/readonly',
                        ordinal: 32,
                        parentId: '6DB6795E-9524-4609-B7B8-4D4BD6ABBC3E',
                        permissionId: 'A8F71460-FAE2-48D1-96D9-AD25F60D3EF6',
                    },
                ],
            },
            {
                menuId: '6DB6795E-9524-4609-B7B8-4D4BD6ABBC3E',
                menuDesc: 'One customer with multi-payment-terms',
                menuDescCn: 'One customer with multi-payment-terms',
                menuDescEn: 'One customer with multi-payment-terms',
                menuUrl: '',
                icon: 'home',
                ordinal: 33,
                permissionId: 'A8F71460-FAE2-48D1-96D9-AD25F60D3EF6',
                subMenus: [
                    {
                        menuId: '4C47B731-13CF-46A0-B051-28D6B4533B5D',
                        menuDesc: '申請表單',
                        menuDescCn: '申請表單',
                        menuDescEn: 'Example Form',
                        menuUrl: '/credit/multi-payment-terms/apply',
                        ordinal: 32,
                        parentId: '6DB6795E-9524-4609-B7B8-4D4BD6ABBC3E',
                        permissionId: 'A8F71460-FAE2-48D1-96D9-AD25F60D3EF6',
                    },
                    {
                        menuId: '4C47B731-13CF-46A0-B051-28D6B4533B5D',
                        menuDesc: '簽核表單',
                        menuDescCn: '簽核表單',
                        menuDescEn: 'Example Form',
                        menuUrl: '/credit/multi-payment-terms/approving',
                        ordinal: 32,
                        parentId: '6DB6795E-9524-4609-B7B8-4D4BD6ABBC3E',
                        permissionId: 'A8F71460-FAE2-48D1-96D9-AD25F60D3EF6',
                    },
                    {
                        menuId: '4C47B731-13CF-46A0-B051-28D6B4533B5D',
                        menuDesc: '查詢表單',
                        menuDescCn: '查詢表單',
                        menuDescEn: 'Example Form',
                        menuUrl: '/credit/multi-payment-terms/readonly',
                        ordinal: 32,
                        parentId: '6DB6795E-9524-4609-B7B8-4D4BD6ABBC3E',
                        permissionId: 'A8F71460-FAE2-48D1-96D9-AD25F60D3EF6',
                    },
                ],
            },
            // {
            //   menuId: '6DB6795E-9524-4609-B7B8-4D4BD6ABBC3E',
            //   menuDesc: 'Oracle TP',
            //   menuDescCn: 'Oracle TP',
            //   menuDescEn: 'Oracle TP',
            //   menuUrl: '',
            //   icon: 'home',
            //   ordinal: 33,
            //   permissionId: 'A8F71460-FAE2-48D1-96D9-AD25F60D3EF6',
            //   subMenus: [
            //     {
            //       menuId: '4C47B731-13CF-46A0-B051-28D6B4533B5D',
            //       menuDesc: '簽核表單',
            //       menuDescCn: '簽核表單',
            //       menuDescEn: 'Example Form',
            //       menuUrl: '/credit/credit-tp/approving',
            //       ordinal: 32,
            //       parentId: '6DB6795E-9524-4609-B7B8-4D4BD6ABBC3E',
            //       permissionId: 'A8F71460-FAE2-48D1-96D9-AD25F60D3EF6',
            //     },
            //     {
            //       menuId: '4C47B731-13CF-46A0-B051-28D6B4533B5D',
            //       menuDesc: '查詢表單',
            //       menuDescCn: '查詢表單',
            //       menuDescEn: 'Example Form',
            //       menuUrl: '/credit/credit-tp/readonly',
            //       ordinal: 32,
            //       parentId: '6DB6795E-9524-4609-B7B8-4D4BD6ABBC3E',
            //       permissionId: 'A8F71460-FAE2-48D1-96D9-AD25F60D3EF6',
            //     },
            //   ],
            // },
        ];
        this.menuItems = this.createMenu(menus, this);
        // this.authApiService.getUserMenuList().subscribe({
        //   next: (rsp) => {
        //     let newMenus: any[] = [];
        //     if (rsp.menus) {
        //       let menus = rsp.menus.filter((x) => x.subMenus.length > 0);
        //       newMenus = this.createMenu(menus, this);
        //     }
        //     this.menuItems = newMenus;
        //     this.sessionService.setItem('Menus', JSON.stringify(this.menuItems));
        //   },
        //   error: (rsp) => {
        //     this.toastService.error('System.Message.Error');
        //   },
        // });
    }
    createMenu(menus, _this) {
        let items = [];
        menus.forEach(function (menu) {
            let menuDesc = _this.selectedLang == 'en-us' ? menu.menuDescEn : menu.menuDesc;
            let item = {
                label: menuDesc,
                routerLink: menu.menuUrl,
            };
            if (menu.icon) {
                item.icon = menu.icon;
            }
            if (menu.subMenus) {
                item.items = _this.createMenu(menu.subMenus, _this);
            }
            items.push(item);
        });
        return items;
    }
    logout() {
        this.msalService.logout();
        this.userContextService.logout();
        this.router.navigate(['/login']);
    }
    routerChanged() {
        this.menuItems.forEach((item) => {
            if (item.hasOwnProperty('items') &&
                item.items.length > 0 &&
                item.items.filter((x) => {
                    return this.router.url.includes(x.routerLink);
                }).length > 0) {
                if (!item.hasOwnProperty('expanded'))
                    item['expanded'] = true;
            }
            else if (item.hasOwnProperty('items') && item.items.length > 0) {
                item['expanded'] = false;
            }
        });
    }
    getTenantFormTypeList() {
        this.authApiService.getTenantFormTypeList().subscribe({
            next: (rsp) => {
                let formTyleList = [];
                let rspformTypeList = rsp.formTypeList;
                formTyleList = rspformTypeList.map((p) => p.permissionId);
                this.sessionService.setItem('FormTyleList', JSON.stringify(formTyleList));
            },
            error: (rsp) => {
                this.toastService.error('System.Message.Error');
            },
        });
    }
    ngOnDestroy() {
        [this.onLangChange$, this.onUserChange$].forEach((subscription) => {
            if (subscription != null || subscription != undefined)
                subscription.unsubscribe();
        });
        this.unsubscribeEvent.next(null);
        this.unsubscribeEvent.complete();
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_azure_msal_angular__WEBPACK_IMPORTED_MODULE_8__.MsalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_auth_api_service__WEBPACK_IMPORTED_MODULE_1__.AuthApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_user_context_service__WEBPACK_IMPORTED_MODULE_2__.UserContextService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_session_service__WEBPACK_IMPORTED_MODULE_3__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 11, vars: 11, consts: [[4, "ngIf"], [1, "main-container", 3, "ngClass"], [1, "header", 3, "ngClass"], [1, "logo-block", "img-block"], ["class", "env-block", 4, "ngIf"], [1, "btn-container"], ["pButton", "", "type", "button", "label", "999001 \u66FE\u53EF\u611B(\u6E2C\u8A66\u5E33\u865F) / Peter Tseng", 1, "btn-link", "user-info-btn"], [1, "language-btn", 3, "options", "ngModel", "ngModelChange", "onChange"], [1, "content-container"], ["target", "parent", 3, "threshold"], [1, "menu-container", 3, "ngClass"], ["pButton", "", "type", "button", 1, "menu-btn", 3, "ngClass", "click"], [1, "list-block", 3, "model"], ["pButton", "", "type", "button", 1, "logout-btn", 3, "label"], [1, "env-block"], [1, "env-text"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MainComponent_ng_container_0_Template, 6, 10, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MainComponent_div_4_Template, 4, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_p_dropdown_ngModelChange_7_listener($event) { return ctx.selectedLang = $event; })("onChange", function MainComponent_Template_p_dropdown_onChange_7_listener() { return ctx.changeLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "router-outlet")(10, "p-scrollTop", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShowNavBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c2, !ctx.isShowNavBar));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c3, ctx.displayMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isShowEnv);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.langOptions)("ngModel", ctx.selectedLang);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("threshold", 50);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_12__.PanelMenu, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, primeng_scrolltop__WEBPACK_IMPORTED_MODULE_15__.ScrollTop], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background-color: #f5f5f5;\n}\n.menu-container[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100%;\n  padding: 20px 10px 20px 15px;\n  background-color: #006deb;\n  text-align: right;\n  position: relative;\n  z-index: 11;\n  transition: all 700ms;\n}\n@media screen and (max-width: 767px) {\n  .menu-container[_ngcontent-%COMP%] {\n    width: 180px;\n    padding-left: 5px;\n    padding-right: 5px;\n    position: fixed;\n  }\n  .menu-container[_ngcontent-%COMP%]    + .main-container[_ngcontent-%COMP%] {\n    width: calc(100% - 85px + 20px);\n    margin-left: calc(85px - 20px);\n  }\n}\n.menu-container.close[_ngcontent-%COMP%] {\n  width: 85px;\n  text-align: center;\n}\n@media screen and (max-width: 767px) {\n  .menu-container.close[_ngcontent-%COMP%] {\n    width: 65px;\n  }\n}\n.menu-container.close[_ngcontent-%COMP%]    + .main-container[_ngcontent-%COMP%] {\n  width: calc(100% - 85px);\n}\n@media screen and (max-width: 767px) {\n  .menu-container.close[_ngcontent-%COMP%]    + .main-container[_ngcontent-%COMP%] {\n    width: calc(100% - 85px + 20px);\n  }\n}\n.menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .p-menuitem-icon, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .p-menuitem-icon[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .p-menuitem-icon, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .img-block img, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .p-menuitem-icon[_ngcontent-%COMP%], .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link.active, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block.active[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link.active .img-block img, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block.active[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 1;\n  display: inline-block;\n}\n.menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link.active .img-block img.active, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block.active[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]   img.active[_ngcontent-%COMP%] {\n  display: none;\n}\n.menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .p-menuitem-text, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .txt, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .p-menuitem-text[_ngcontent-%COMP%], .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {\n  display: none;\n}\n.menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .p-panelmenu-icon, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .p-menuitem-text, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .p-panelmenu-icon[_ngcontent-%COMP%], .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .p-menuitem-text[_ngcontent-%COMP%] {\n  display: none;\n}\n.menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active {\n  background-color: transparent;\n}\n.menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link .p-menuitem-icon, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active .p-menuitem-icon {\n  opacity: 1;\n}\n.menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link .home, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active .home {\n  background-image: url('home.svg');\n}\n.menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link .assignment, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active .assignment {\n  background-image: url('assignment.svg');\n}\n.menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link .swap_vertical_circle, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active .swap_vertical_circle {\n  background-image: url('swap_vertical_circle.svg');\n}\n.menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link .supervised_user_circle, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active .supervised_user_circle {\n  background-image: url('supervised_user_circle.svg');\n}\n.menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link .settings, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active .settings {\n  background-image: url('settings.svg');\n}\n.menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link .attach_money, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active .attach_money {\n  background-image: url('attach_money.svg');\n}\n.menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link .credit-card, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active .credit-card {\n  background-image: url('credit-card.svg');\n}\n.menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link .p-panelmenu-icon, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link .p-menuitem-text, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active .p-panelmenu-icon, .menu-container.close[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active .p-menuitem-text {\n  display: none;\n}\n.menu-container.close[_ngcontent-%COMP%]     .p-toggleable-content {\n  display: none;\n}\n.menu-container.close[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.menu-container.close[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]     .p-button-label {\n  display: none;\n}\n.menu-container[_ngcontent-%COMP%]   .menu-btn.p-button[_ngcontent-%COMP%] {\n  min-width: 0;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  background-color: transparent;\n  background-image: url('menu.svg');\n  background-size: cover;\n  border: 0;\n  font-size: 0;\n}\n.menu-container[_ngcontent-%COMP%]   .menu-btn.p-button[_ngcontent-%COMP%]:enabled:hover {\n  background-color: transparent;\n  border-color: transparent;\n  color: #06b0d6;\n}\n.menu-container[_ngcontent-%COMP%]   .menu-btn.p-button[_ngcontent-%COMP%]:enabled:active, .menu-container[_ngcontent-%COMP%]   .menu-btn.p-button[_ngcontent-%COMP%]:enabled:focus {\n  outline: 0;\n  box-shadow: none;\n  background-color: transparent;\n}\n.menu-container[_ngcontent-%COMP%]   .menu-btn.active.p-button[_ngcontent-%COMP%] {\n  background-image: url('menu-active.svg');\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%] {\n  display: block;\n  height: calc(100% - 24px - 30px - 10px - 40px);\n  overflow: hidden auto;\n  margin-top: 30px;\n  padding-right: 5px;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-panel, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .item-block[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 10px;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  padding: 10px 8px;\n  border: 0;\n  background-color: transparent;\n  border-radius: 5px;\n  cursor: pointer;\n  text-decoration: none;\n  color: #ffffff;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .p-panelmenu-icon, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .p-panelmenu-icon[_ngcontent-%COMP%] {\n  order: 3;\n  margin: 0;\n  margin-left: 10px;\n  font-size: 10px;\n  color: inherit;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .p-menuitem-icon, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .img-block, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .p-menuitem-icon[_ngcontent-%COMP%], .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  overflow: hidden;\n  margin-right: 5px;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .p-menuitem-icon img, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .img-block img, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .p-menuitem-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .p-menuitem-icon img.active, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .img-block img.active, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .p-menuitem-icon[_ngcontent-%COMP%]   img.active[_ngcontent-%COMP%], .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]   img.active[_ngcontent-%COMP%] {\n  display: none;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .home, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .home[_ngcontent-%COMP%] {\n  background-image: url('home.svg');\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .assignment, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .assignment[_ngcontent-%COMP%] {\n  background-image: url('assignment.svg');\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .swap_vertical_circle, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .swap_vertical_circle[_ngcontent-%COMP%] {\n  background-image: url('swap_vertical_circle.svg');\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .supervised_user_circle, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .supervised_user_circle[_ngcontent-%COMP%] {\n  background-image: url('supervised_user_circle.svg');\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .settings, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%] {\n  background-image: url('settings.svg');\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .attach_money, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .attach_money[_ngcontent-%COMP%] {\n  background-image: url('attach_money.svg');\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .credit-card, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .credit-card[_ngcontent-%COMP%] {\n  background-image: url('credit-card.svg');\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .p-menuitem-text, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link .txt, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .p-menuitem-text[_ngcontent-%COMP%], .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100px;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 1.3em;\n  color: #ffffff;\n  text-align: left;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link:hover, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link:focus, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link.p-highlight, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link.active, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block.p-highlight[_ngcontent-%COMP%], .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block.active[_ngcontent-%COMP%] {\n  background-color: #B2D5FF;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link.p-highlight .img-block img, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link.active .img-block img, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block.p-highlight[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block.active[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: none;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link.p-highlight .img-block img.active, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link.active .img-block img.active, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block.p-highlight[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]   img.active[_ngcontent-%COMP%], .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block.active[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]   img.active[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link.p-highlight .txt, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header-link.active .txt, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block.p-highlight[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%], .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]   .link-block.active[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {\n  color: #0075C1;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active {\n  background-color: #B2D5FF;\n  color: #0075C1;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link .home, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active .home {\n  background-image: url('home-active.svg');\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link .assignment, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active .assignment {\n  background-image: url('assignment-active.svg');\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link .swap_vertical_circle, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active .swap_vertical_circle {\n  background-image: url('swap_vertical_circle-active.svg');\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link .supervised_user_circle, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active .supervised_user_circle {\n  background-image: url('supervised_user_circle-active.svg');\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link .settings, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active .settings {\n  background-image: url('settings-active.svg');\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link .attach_money, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active .attach_money {\n  background-image: url('attach_money.svg');\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link .credit-card, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active .credit-card {\n  background-image: url('credit-card.svg');\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link .p-menuitem-text, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header .p-panelmenu-header-link.p-menuitem-link-active .p-menuitem-text {\n  color: #0075C1;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-panelmenu .p-panelmenu-header.p-highlight .p-panelmenu-header-link {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-menuitem-link {\n  padding: 10px 10px 10px 35px;\n  color: #b6b6b6;\n  font-size: 16px;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-menuitem-link .p-menuitem-text, .menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {\n  color: inherit;\n  font-size: 15px;\n  text-align: left;\n  line-height: 1.3em;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-menuitem-link:focus {\n  box-shadow: none;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-menuitem-link:hover {\n  background-color: #f1f6f9;\n  color: #0075C1;\n}\n.menu-container[_ngcontent-%COMP%]   .list-block[_ngcontent-%COMP%]     .p-menuitem-link.p-menuitem-link-active {\n  color: #0075C1;\n}\n.menu-container[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  min-width: 0;\n  width: calc(100% - 20px * 2);\n  padding: 10px 8px;\n  margin: 20px;\n  border: 0;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  color: #ffffff;\n  font-size: 16px;\n  text-align: left;\n  border-radius: 5px;\n}\n@media screen and (max-width: 767px) {\n  .menu-container[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n    width: calc(100% - 10px * 2);\n    margin: 10px;\n  }\n}\n.menu-container[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  margin-right: 10px;\n  background-image: url('logout.svg');\n}\n.menu-container[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:hover, .menu-container[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:enabled:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  height: 80px;\n  padding: 0 20px;\n  background-color: #FBFDFF;\n  border-bottom: 1px solid #cfd0d0;\n}\n@media screen and (max-width: 655px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n}\n.header[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%] {\n  display: flex;\n}\n.header[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]   .env-text[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n  font-size: 20px;\n  white-space: nowrap;\n  padding-left: 5px;\n}\n@media screen and (max-width: 655px) {\n  .header[_ngcontent-%COMP%]   .user-info-btn[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n.header[_ngcontent-%COMP%]   .user-info-btn[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  overflow: hidden;\n  margin: 8px;\n  border-radius: 50%;\n}\n.header[_ngcontent-%COMP%]   .user-info-btn.p-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n  height: auto;\n  padding: 0;\n  font-weight: normal;\n  color: #6f6d6d;\n}\n.header[_ngcontent-%COMP%]   .user-info-btn.p-button[_ngcontent-%COMP%]     .p-button-label {\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n@media screen and (max-width: 655px) {\n  .header[_ngcontent-%COMP%]   .user-info-btn.p-button[_ngcontent-%COMP%]     .p-button-label {\n    display: none;\n  }\n}\n.header[_ngcontent-%COMP%]   .language-btn.p-button[_ngcontent-%COMP%] {\n  padding: 5px 15px;\n  height: auto;\n  border-radius: 20px;\n}\n.header[_ngcontent-%COMP%]   .language-btn[_ngcontent-%COMP%]  .p-dropdown {\n  min-width: 110px;\n  padding: 5px 15px;\n  background-color: #87949d;\n  border-color: #87949d;\n  border-radius: 20px;\n  color: #ffffff;\n}\n.header[_ngcontent-%COMP%]   .language-btn[_ngcontent-%COMP%]  .p-dropdown .p-dropdown-label {\n  padding: 0;\n  color: inherit;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.5em;\n  text-align: center;\n}\n.header[_ngcontent-%COMP%]   .language-btn[_ngcontent-%COMP%]  .p-dropdown .p-dropdown-trigger {\n  width: auto;\n  padding-left: 10px;\n}\n.header[_ngcontent-%COMP%]   .language-btn[_ngcontent-%COMP%]  .p-dropdown .p-dropdown-trigger-icon {\n  font-size: 12px;\n  color: #ffffff;\n}\n.header[_ngcontent-%COMP%]   .language-btn[_ngcontent-%COMP%]  .p-dropdown .p-dropdown-panel {\n  padding: 10px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);\n  border: 0;\n  border-radius: 5px;\n  color: #6f6d6d;\n}\n.header[_ngcontent-%COMP%]   .language-btn[_ngcontent-%COMP%]  .p-dropdown .p-dropdown-panel p-dropdownitem {\n  display: block;\n}\n.header[_ngcontent-%COMP%]   .language-btn[_ngcontent-%COMP%]  .p-dropdown .p-dropdown-panel p-dropdownitem:not(:last-child) {\n  margin-bottom: 5px;\n}\n.header[_ngcontent-%COMP%]   .language-btn[_ngcontent-%COMP%]  .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item {\n  border-radius: 10px;\n  font-weight: normal;\n  font-size: 16px;\n  color: inherit;\n  line-height: 1.3em;\n}\n.header[_ngcontent-%COMP%]   .language-btn[_ngcontent-%COMP%]  .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {\n  border-radius: 10px;\n  background-color: #f1f6f9;\n  font-weight: normal;\n  font-size: 16px;\n  color: #006deb;\n  line-height: 1.3em;\n}\n.header[_ngcontent-%COMP%]   .language-btn[_ngcontent-%COMP%]  .p-dropdown .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {\n  background: transparent;\n  background-color: #e5e5e5;\n  color: inherit;\n}\n.main-container[_ngcontent-%COMP%] {\n  display: block;\n  width: calc(100% - 200px);\n  height: 100%;\n  background-color: #ffffff;\n  transition: all 700ms;\n}\n@media screen and (max-width: 767px) {\n  .main-container[_ngcontent-%COMP%] {\n    min-width: 310px;\n    width: calc(100% - 200px + 20px);\n  }\n}\n.main-container.no-nav[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n  height: calc(100% - 80px);\n  padding: 20px;\n  overflow: hidden auto;\n}\n@media screen and (max-width: 767px) {\n  .main-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n.main-container[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(router-outlet) {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0eWxlcy9oZWxwZXJzL192YXJpYWJsZXMuc2NzcyIsIm1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBQTtBQTZCQSxXQUFBO0FBUUEsVUFBQTtBQ2hDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCREVHO0FDSEw7QUFJQTtFQUNFLFlEMEJPO0VDekJQLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHlCRGZRO0VDZ0JSLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBR0EscUJBQUE7QUFIRjtBQVVFO0VBakJGO0lBa0JJLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQVBGO0VBU0U7SUFDRSwrQkFBQTtJQUNBLDhCQUFBO0VBUEo7QUFDRjtBQVVFO0VBQ0UsV0RGVztFQ0dYLGtCQUFBO0FBUko7QUFVSTtFQUpGO0lBS0ksV0FBQTtFQVBKO0FBQ0Y7QUFTSTtFQUNFLHdCQUFBO0FBUE47QUFVTTtFQUpGO0lBS0ksK0JBQUE7RUFQTjtBQUNGO0FBVUk7O0VBRUUsdUJBQUE7QUFSTjtBQVVNOztFQUNFLGVBQUE7QUFQUjtBQVNNOzs7O0VBRUUsWUFBQTtBQUxSO0FBUU07O0VBQ0UsNkJBQUE7QUFMUjtBQU9ROztFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQUpWO0FBS1U7O0VBQ0UsYUFBQTtBQUZaO0FBT007Ozs7RUFFRSxhQUFBO0FBSFI7QUFNTTs7OztFQUVFLGFBQUE7QUFGUjtBQUtJOztFQUVFLDZCQUFBO0FBSE47QUFLTTs7RUFDRSxVQUFBO0FBRlI7QUFJTTs7RUFDRSxpQ0FBQTtBQURSO0FBR007O0VBQ0UsdUNBQUE7QUFBUjtBQUVNOztFQUNFLGlEQUFBO0FBQ1I7QUFDTTs7RUFDRSxtREFBQTtBQUVSO0FBQU07O0VBQ0UscUNBQUE7QUFHUjtBQURNOztFQUNFLHlDQUFBO0FBSVI7QUFGTTs7RUFDRSx3Q0FBQTtBQUtSO0FBRk07Ozs7RUFF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LG1CQUFBO0VBRUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBNUJWO0FBOEJVO0VBQ0UsbUJBQUE7RUFDQSx5QkRqZ0JGO0VDa2dCRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjRC9nQkY7RUNnaEJFLGtCQUFBO0FBNUJaO0FBOEJVO0VBQ0UsdUJBQUE7RUFDQSx5QkRuZ0JGO0VDb2dCRSxjQUFBO0FBNUJaO0FBb0NBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUVBLHlCRDVnQk07RUM4Z0JOLHFCQUFBO0FBbkNGO0FBcUNFO0VBVEY7SUFVSSxnQkFBQTtJQUNBLGdDQUFBO0VBbENGO0FBQ0Y7QUFxQ0U7RUFDRSxXQUFBO0FBbkNKO0FBc0NFO0VBQ0UseUJBQUE7RUFDQSxhRG5oQk07RUNvaEJOLHFCQUFBO0FBcENKO0FBc0NJO0VBTEY7SUFNSSxhRHhoQkk7RUNxZlI7QUFDRjtBQXFDSTtFQUNFLFlBQUE7QUFuQ04iLCJmaWxlIjoibWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbG9yIFNldCAqL1xyXG4kcHJpbWFyeTogIzAwNmRlYjtcclxuJGRhcmstYmx1ZTogIzE5Mzc2MjtcclxuJGRhcmstYmx1ZS0wMjogIzI0NTZkNztcclxuXHJcbiRsaWdodC1ibHVlOiAjMDZiMGQ2O1xyXG4kbGluZS1ibHVlOiAjZjBmN2ZiO1xyXG5cclxuJHNlY29uZGFyeTogI2I0ODU3MjtcclxuJHNlY29uZGFyeS1kYXJrOiAjNzk1NTQ4O1xyXG5cclxuJGJnOiAjZjVmNWY1O1xyXG4kYmctYmx1ZTogI2YxZjZmOTtcclxuXHJcbiRncmF5LTAxOiAjNmY2ZDZkOyAvLyB0ZXh0XHJcbiRncmF5LTAyOiAjODc5NDlkOyAvLyBidG5cclxuJGdyYXktMDM6ICNiNmI2YjY7IC8vIGNoZWNrYm94LCByYWRpbywgdGFibGUgaWNvblxyXG4kZ3JheS0wNDogI2NmZDBkMDsgLy8gZGl2aWRlciBsaW5lXHJcbiRncmF5LTA1OiAjZTVlNWU1OyAvLyBwbGFjZWhvbGRlclxyXG5cclxuJGxpbmU6ICNmMmYyZjI7XHJcblxyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuXHJcbiR3YXJyaW5nOiAjZTE4MTQ2O1xyXG4kc3VjY2VzczogIzM0Yjc2YjtcclxuJGVycm9yOiAjY2EwZjQ3O1xyXG5cclxuLyogTWFyZ2luICovXHJcbiRzcGFjZS1iYXNlOiAxMHB4O1xyXG4kc3BhY2UtMTogJHNwYWNlLWJhc2UgKiAxO1xyXG4kc3BhY2UtMjogJHNwYWNlLWJhc2UgKiAyO1xyXG4kc3BhY2UtMzogJHNwYWNlLWJhc2UgKiAzO1xyXG4kc3BhY2UtNDogJHNwYWNlLWJhc2UgKiA0O1xyXG4kc3BhY2UtNTogJHNwYWNlLWJhc2UgKiA1O1xyXG5cclxuLyogT3RoZXIgKi9cclxuJGhlYWRlci1oOiA4MHB4O1xyXG4kbWVudS13OiAyMDBweDtcclxuJG1lbnUtY2xvc2UtdzogODVweDtcclxuXHJcbiRmb290ZXItYnRuLWg6IDgwcHg7XHJcbiIsIkBpbXBvcnQgJ34vc3JjL3N0eWxlcy9oZWxwZXJzL3ZhcmlhYmxlcyc7XHJcblxyXG4kbGluay1jb2xvcjogIzAwNzVDMTtcclxuJGJnLW1lbnUtbGluazogI0IyRDVGRjtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XHJcbn0gLy8gZW5kIGhvc3RcclxuXHJcbi5tZW51LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6ICRtZW51LXc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6ICRzcGFjZS0yICgkc3BhY2UtMSAvIDIgKiAzIC0gJHNwYWNlLTEgLyAyKSAkc3BhY2UtMiAkc3BhY2UtMSAvIDIgKiAzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMTtcclxuXHJcbiAgLy8gdHJhbnNpdGlvbjogd2lkdGggNzAwbXMsIG1hcmdpbiA3MDBtcztcclxuICB0cmFuc2l0aW9uOiBhbGwgNzAwbXM7XHJcblxyXG4gIC8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC8vICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIC8vICAgaGVpZ2h0OiAxMDB2aDtcclxuICAvLyB9IC8vIGVuZCBtZWRpYSA8IDEyMDBcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIHdpZHRoOiAoJG1lbnUtdyAtICRzcGFjZS0yKTtcclxuICAgIHBhZGRpbmctbGVmdDogKCRzcGFjZS0xIC8gMik7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAoJHNwYWNlLTEgLyAyKTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuXHJcbiAgICAmICsgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtICN7JG1lbnUtY2xvc2Utd30gKyAjeyRzcGFjZS0yfSk7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCN7JG1lbnUtY2xvc2Utd30gLSAjeyRzcGFjZS0yfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmNsb3NlIHtcclxuICAgIHdpZHRoOiAkbWVudS1jbG9zZS13O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIHdpZHRoOiAoJG1lbnUtY2xvc2UtdyAtICRzcGFjZS0yKTtcclxuICAgIH1cclxuXHJcbiAgICAmICsgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtICN7JG1lbnUtY2xvc2Utd30pO1xyXG4gICAgICAvLyBtYXJnaW4tbGVmdDogJG1lbnUtY2xvc2UtdztcclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtICN7JG1lbnUtY2xvc2Utd30gKyAjeyRzcGFjZS0yfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubGlzdC1ibG9jayA6Om5nLWRlZXAgLnAtcGFuZWxtZW51IC5wLXBhbmVsbWVudS1oZWFkZXItbGluayxcclxuICAgIC5saXN0LWJsb2NrIC5saW5rLWJsb2NrIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAucC1tZW51aXRlbS1pY29uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLnAtbWVudWl0ZW0taWNvbixcclxuICAgICAgLmltZy1ibG9jayBpbWcge1xyXG4gICAgICAgIG9wYWNpdHk6IC4zO1xyXG4gICAgICB9IC8vIGltZy1ibG9ja1xyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAuaW1nLWJsb2NrIGltZyB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gLy8gaW1nLWJsb2NrIGltZ1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucC1tZW51aXRlbS10ZXh0LFxyXG4gICAgICAudHh0IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucC1wYW5lbG1lbnUtaWNvbixcclxuICAgICAgLnAtbWVudWl0ZW0tdGV4dCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfSAvLyBlbmQgbGlzdC1saW5rXHJcbiAgICAubGlzdC1ibG9jayA6Om5nLWRlZXAgLnAtcGFuZWxtZW51IC5wLXBhbmVsbWVudS1oZWFkZXIucC1oaWdobGlnaHQgLnAtcGFuZWxtZW51LWhlYWRlci1saW5rLFxyXG4gICAgLmxpc3QtYmxvY2sgOjpuZy1kZWVwIC5wLXBhbmVsbWVudSAucC1wYW5lbG1lbnUtaGVhZGVyIC5wLXBhbmVsbWVudS1oZWFkZXItbGluay5wLW1lbnVpdGVtLWxpbmstYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAucC1tZW51aXRlbS1pY29uIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICAgIC5ob21lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vc3JjL2Fzc2V0cy9pbWdzL21lbnUtaWNvbi9ob21lLnN2ZycpO1xyXG4gICAgICB9XHJcbiAgICAgIC5hc3NpZ25tZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vc3JjL2Fzc2V0cy9pbWdzL21lbnUtaWNvbi9hc3NpZ25tZW50LnN2ZycpO1xyXG4gICAgICB9XHJcbiAgICAgIC5zd2FwX3ZlcnRpY2FsX2NpcmNsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L3NyYy9hc3NldHMvaW1ncy9tZW51LWljb24vc3dhcF92ZXJ0aWNhbF9jaXJjbGUuc3ZnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLnN1cGVydmlzZWRfdXNlcl9jaXJjbGUge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9zcmMvYXNzZXRzL2ltZ3MvbWVudS1pY29uL3N1cGVydmlzZWRfdXNlcl9jaXJjbGUuc3ZnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLnNldHRpbmdzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vc3JjL2Fzc2V0cy9pbWdzL21lbnUtaWNvbi9zZXR0aW5ncy5zdmcnKTtcclxuICAgICAgfVxyXG4gICAgICAuYXR0YWNoX21vbmV5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vc3JjL2Fzc2V0cy9pbWdzL21lbnUtaWNvbi9hdHRhY2hfbW9uZXkuc3ZnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLmNyZWRpdC1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vc3JjL2Fzc2V0cy9pbWdzL21lbnUtaWNvbi9jcmVkaXQtY2FyZC5zdmcnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnAtcGFuZWxtZW51LWljb24sXHJcbiAgICAgIC5wLW1lbnVpdGVtLXRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLnAtdG9nZ2xlYWJsZS1jb250ZW50IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubG9nb3V0LWJ0biB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcblxyXG4gICAgICA6Om5nLWRlZXAgLnAtYnV0dG9uLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9IC8vIGVuZCBsb2dvdXRcclxuICB9IC8vIGVuZCBjbG9zZVxyXG5cclxuICAubWVudS1idG4ge1xyXG4gICAgJi5wLWJ1dHRvbiB7XHJcbiAgICAgIG1pbi13aWR0aDogMDtcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9zcmMvYXNzZXRzL2ltZ3MvbWVudS1pY29uL21lbnUuc3ZnJyk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgZm9udC1zaXplOiAwO1xyXG5cclxuICAgICAgJjplbmFibGVkOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiAkbGlnaHQtYmx1ZTtcclxuXHJcbiAgICAgICAgLnAtYnV0dG9uLWxhYmVsIHtcclxuICAgICAgICAgIC8vIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOmVuYWJsZWQ6YWN0aXZlLFxyXG4gICAgICAmOmVuYWJsZWQ6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG4gICAgfSAvLyBlbmQgcC1idXR0b25cclxuXHJcblxyXG4gICAgJi5hY3RpdmUucC1idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vc3JjL2Fzc2V0cy9pbWdzL21lbnUtaWNvbi9tZW51LWFjdGl2ZS5zdmcnKTtcclxuICAgIH1cclxuICB9IC8vIGVuZCBtZW51LWJ0blxyXG5cclxuICAubGlzdC1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjRweCAtICN7JHNwYWNlLTN9IC0gI3skc3BhY2UtMX0gLSA0MHB4KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcclxuICAgIG1hcmdpbi10b3A6ICRzcGFjZS0zO1xyXG4gICAgcGFkZGluZy1yaWdodDogJHNwYWNlLTEgLyAyO1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIC5wLXBhbmVsbWVudSAucC1wYW5lbG1lbnUtcGFuZWwsXHJcbiAgICAuaXRlbS1ibG9jazpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi10b3A6ICRzcGFjZS0xO1xyXG4gICAgfVxyXG5cclxuICAgIDo6bmctZGVlcCAucC1wYW5lbG1lbnUgLnAtcGFuZWxtZW51LWhlYWRlci1saW5rLFxyXG4gICAgLmxpbmstYmxvY2sge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAkc3BhY2UtMSA4cHg7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG5cclxuICAgICAgLnAtcGFuZWxtZW51LWljb24ge1xyXG4gICAgICAgIG9yZGVyOiAzO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJHNwYWNlLTE7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucC1tZW51aXRlbS1pY29uLFxyXG4gICAgICAuaW1nLWJsb2NrIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAkc3BhY2UtMSAvIDI7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSAvLyBlbmQgaW1nXHJcbiAgICAgIH0gLy8gZW5kIGltZy1ibG9ja1xyXG5cclxuICAgICAgLmhvbWUge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9zcmMvYXNzZXRzL2ltZ3MvbWVudS1pY29uL2hvbWUuc3ZnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLmFzc2lnbm1lbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9zcmMvYXNzZXRzL2ltZ3MvbWVudS1pY29uL2Fzc2lnbm1lbnQuc3ZnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLnN3YXBfdmVydGljYWxfY2lyY2xlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vc3JjL2Fzc2V0cy9pbWdzL21lbnUtaWNvbi9zd2FwX3ZlcnRpY2FsX2NpcmNsZS5zdmcnKTtcclxuICAgICAgfVxyXG4gICAgICAuc3VwZXJ2aXNlZF91c2VyX2NpcmNsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L3NyYy9hc3NldHMvaW1ncy9tZW51LWljb24vc3VwZXJ2aXNlZF91c2VyX2NpcmNsZS5zdmcnKTtcclxuICAgICAgfVxyXG4gICAgICAuc2V0dGluZ3Mge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9zcmMvYXNzZXRzL2ltZ3MvbWVudS1pY29uL3NldHRpbmdzLnN2ZycpO1xyXG4gICAgICB9XHJcbiAgICAgIC5hdHRhY2hfbW9uZXkge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9zcmMvYXNzZXRzL2ltZ3MvbWVudS1pY29uL2F0dGFjaF9tb25leS5zdmcnKTtcclxuICAgICAgfVxyXG4gICAgICAuY3JlZGl0LWNhcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9zcmMvYXNzZXRzL2ltZ3MvbWVudS1pY29uL2NyZWRpdC1jYXJkLnN2ZycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucC1tZW51aXRlbS10ZXh0LFxyXG4gICAgICAudHh0IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG5cclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xyXG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfSAvLyBlbmQgdHh0XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgIH1cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAmLnAtaGlnaGxpZ2h0LFxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLW1lbnUtbGluaztcclxuXHJcbiAgICAgICAgLmltZy1ibG9jayBpbWcge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gLy8gaW1nLWJsb2NrIGltZ1xyXG5cclxuICAgICAgICAudHh0IHtcclxuICAgICAgICAgIGNvbG9yOiAkbGluay1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gLy8gZW5kIGxpbmstYmxvY2tcclxuXHJcbiAgICA6Om5nLWRlZXAgLnAtcGFuZWxtZW51IC5wLXBhbmVsbWVudS1oZWFkZXIucC1oaWdobGlnaHQgLnAtcGFuZWxtZW51LWhlYWRlci1saW5rLFxyXG4gICAgOjpuZy1kZWVwIC5wLXBhbmVsbWVudSAucC1wYW5lbG1lbnUtaGVhZGVyIC5wLXBhbmVsbWVudS1oZWFkZXItbGluay5wLW1lbnVpdGVtLWxpbmstYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLW1lbnUtbGluaztcclxuICAgICAgY29sb3I6ICRsaW5rLWNvbG9yO1xyXG5cclxuICAgICAgLmhvbWUge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9zcmMvYXNzZXRzL2ltZ3MvbWVudS1pY29uL2hvbWUtYWN0aXZlLnN2ZycpO1xyXG4gICAgICB9XHJcbiAgICAgIC5hc3NpZ25tZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vc3JjL2Fzc2V0cy9pbWdzL21lbnUtaWNvbi9hc3NpZ25tZW50LWFjdGl2ZS5zdmcnKTtcclxuICAgICAgfVxyXG4gICAgICAuc3dhcF92ZXJ0aWNhbF9jaXJjbGUge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9zcmMvYXNzZXRzL2ltZ3MvbWVudS1pY29uL3N3YXBfdmVydGljYWxfY2lyY2xlLWFjdGl2ZS5zdmcnKTtcclxuICAgICAgfVxyXG4gICAgICAuc3VwZXJ2aXNlZF91c2VyX2NpcmNsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L3NyYy9hc3NldHMvaW1ncy9tZW51LWljb24vc3VwZXJ2aXNlZF91c2VyX2NpcmNsZS1hY3RpdmUuc3ZnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLnNldHRpbmdzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vc3JjL2Fzc2V0cy9pbWdzL21lbnUtaWNvbi9zZXR0aW5ncy1hY3RpdmUuc3ZnJyk7XHJcbiAgICAgIH1cclxuICAgICAgLmF0dGFjaF9tb25leSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L3NyYy9hc3NldHMvaW1ncy9tZW51LWljb24vYXR0YWNoX21vbmV5LnN2ZycpO1xyXG4gICAgICB9XHJcbiAgICAgIC5jcmVkaXQtY2FyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L3NyYy9hc3NldHMvaW1ncy9tZW51LWljb24vY3JlZGl0LWNhcmQuc3ZnJyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5wLW1lbnVpdGVtLXRleHQge1xyXG4gICAgICAgIGNvbG9yOiAkbGluay1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfSAvLyBlbmQgcC1oaWdobGlnaHRcclxuICAgIDo6bmctZGVlcCAucC1wYW5lbG1lbnUgLnAtcGFuZWxtZW51LWhlYWRlci5wLWhpZ2hsaWdodCAucC1wYW5lbG1lbnUtaGVhZGVyLWxpbmsge1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIH1cclxuXHJcbiAgICA6Om5nLWRlZXAgLnAtbWVudWl0ZW0tbGluayB7XHJcbiAgICAgIHBhZGRpbmc6ICRzcGFjZS0xICRzcGFjZS0xICRzcGFjZS0xICgkc3BhY2UtMSArIDE1cHggKyAkc3BhY2UtMSk7XHJcbiAgICAgIGNvbG9yOiAkZ3JheS0wMztcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICAgICAgLnAtbWVudWl0ZW0tdGV4dCxcclxuICAgICAgJjpub3QoLnAtZGlzYWJsZWQpOmhvdmVyIC5wLW1lbnVpdGVtLXRleHQge1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctYmx1ZTtcclxuICAgICAgICBjb2xvcjogJGxpbmstY29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgJi5wLW1lbnVpdGVtLWxpbmstYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogJGxpbmstY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH0gLy8gZW5kIHN1Ym1lbnUgaXRlbVxyXG4gIH0gLy8gZW5kIGxpc3QtYmxvY2tcclxuXHJcbiAgLmxvZ291dC1idG4ge1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtICN7JHNwYWNlLTJ9ICogMik7XHJcbiAgICBwYWRkaW5nOiAkc3BhY2UtMSA4cHg7XHJcbiAgICBtYXJnaW46ICRzcGFjZS0yO1xyXG4gICAgYm9yZGVyOiAwO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcblxyXG5cclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAjeyRzcGFjZS0xfSAqIDIpO1xyXG4gICAgICBtYXJnaW46ICRzcGFjZS0xO1xyXG4gICAgfVxyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAkc3BhY2UtMTtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L3NyYy9hc3NldHMvaW1ncy9tZW51LWljb24vbG9nb3V0LnN2ZycpO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmVuYWJsZWQ6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgIC8vIGNvbG9yOiAkbGluay1jb2xvcjtcclxuXHJcbiAgICAgIC8vICY6YmVmb3JlIHtcclxuICAgICAgLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vc3JjL2Fzc2V0cy9pbWdzL21lbnUtaWNvbi9sb2dvdXQtYWN0aXZlLnN2ZycpO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgfSAvLyBlbmQgbG9nb3V0LWJ0blxyXG59IC8vIGVuZCBtZW51LWNvbnRhaW5lclxyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogJGhlYWRlci1oO1xyXG4gIHBhZGRpbmc6IDAgJHNwYWNlLTI7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZERkY7XHJcbiAgLy8gYm94LXNoYWRvdzogMHB4IDNweCAyMHB4IHJnYmEoODYsIDEwMywgMTExLCAwLjIpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JheS0wNDtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjU1cHgpIHtcclxuICAgIHBhZGRpbmc6IDAgJHNwYWNlLTE7XHJcbiAgfSAvLyBlbmQgbWVkaWEgPCA2NTVweFxyXG4gIFxyXG4gIC5pbWctYmxvY2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5lbnYtdGV4dCB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuIFxyXG5cclxuICAudXNlci1pbmZvLWJ0biB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTVweCkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9IC8vIGVuZCBtZWRpYSA8IDY1NXB4XHJcblxyXG4gICAgLmltZy1ibG9jayB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgbWFyZ2luOiA4cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH0gLy8gZW5kIGltZy1ibG9ja1xyXG5cclxuXHJcbiAgICAmLnAtYnV0dG9uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWluLXdpZHRoOiAwO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBjb2xvcjogJGdyYXktMDE7XHJcblxyXG4gICAgICA6Om5nLWRlZXAgLnAtYnV0dG9uLWxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICAgIC8vIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjU1cHgpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfSAvLyBlbmQgbWVkaWEgPCA2NTVweFxyXG4gICAgICB9IC8vIGVuZCBwLWJ1dHRvbi1sYWJlbFxyXG4gICAgfSAvLyBlbmQgcC1idXR0b25cclxuICB9IC8vIGVuZCB1c2VyLWluZm8tYnRuXHJcblxyXG4gIC5sYW5ndWFnZS1idG4ge1xyXG4gICAgJi5wLWJ1dHRvbiB7XHJcbiAgICAgIHBhZGRpbmc6ICRzcGFjZS0xIC8gMiAkc3BhY2UtMSAvIDIgKiAzO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6bmctZGVlcCAucC1kcm9wZG93biB7XHJcbiAgICAgIG1pbi13aWR0aDogMTEwcHg7XHJcbiAgICAgIHBhZGRpbmc6ICRzcGFjZS0xIC8gMiAkc3BhY2UtMSAvIDIgKiAzO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS0wMjtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkZ3JheS0wMjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgY29sb3I6ICR3aGl0ZTtcclxuXHJcbiAgICAgIC5wLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9IC8vIGVuZCAucC1kcm9wZG93bi1sYWJlbFxyXG5cclxuICAgICAgLnAtZHJvcGRvd24tdHJpZ2dlciB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAkc3BhY2UtMTtcclxuICAgICAgfVxyXG4gICAgICAucC1kcm9wZG93bi10cmlnZ2VyLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICB9IC8vIGVuZCBwLWRyb3Bkb3duLXRyaWdnZXItaWNvblxyXG5cclxuICAgICAgLnAtZHJvcGRvd24tcGFuZWwge1xyXG4gICAgICAgIHBhZGRpbmc6ICRzcGFjZS0xO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICRncmF5LTAxO1xyXG5cclxuICAgICAgICBwLWRyb3Bkb3duaXRlbSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAkc3BhY2UtMSAvIDI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucC1kcm9wZG93bi1pdGVtcyAucC1kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xyXG5cclxuICAgICAgICAgICYucC1oaWdobGlnaHQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctYmx1ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcclxuICAgICAgICAgIH0gLy8gZW5kIHAtaGlnaGxpZ2h0XHJcbiAgICAgICAgICAmOm5vdCgucC1oaWdobGlnaHQpOm5vdCgucC1kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktMDU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gLy8gZW5kIHAtZHJvcGRvd24taXRlbVxyXG4gICAgICB9IC8vIGVuZCAucC1kcm9wZG93bi1wYW5lbFxyXG4gICAgfSAvLyBlbmQgLnAtZHJvcGRvd25cclxuICB9IC8vIGVuZCBsYW5ndWFnZVxyXG59IC8vIGVuZCBoZWFkZXJcclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtICN7JG1lbnUtd30pO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvLyBtYXJnaW4tbGVmdDogJG1lbnUtdztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcblxyXG4gIHRyYW5zaXRpb246IGFsbCA3MDBtcztcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIG1pbi13aWR0aDogMzEwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gI3skbWVudS13fSArICN7JHNwYWNlLTJ9KTtcclxuICB9XHJcblxyXG4gIFxyXG4gICYubm8tbmF2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gI3skaGVhZGVyLWh9KTtcclxuICAgIHBhZGRpbmc6ICRzcGFjZS0yO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIHBhZGRpbmc6ICRzcGFjZS0xO1xyXG4gICAgfVxyXG5cclxuICAgID4gKjpub3Qocm91dGVyLW91dGxldCkge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59IC8vIGVuZCBtYWluLWNvbnRhaW5lciJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_shared_layout_layout_module_ts.js.map