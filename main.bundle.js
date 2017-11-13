webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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

module.exports = "<app-navbar></app-navbar>\n<app-home></app-home>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/familiavepo/workspace/portifolio-vepo/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/common/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_footer_footer_component__ = __webpack_require__("../../../../../src/app/common/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__common_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__common_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_app_home_home_module__["a" /* HomeModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/familiavepo/workspace/portifolio-vepo/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 0px;\n  transition: height 1s;\n  background-color: #222222;\n   \n}\n.footer h5 {\n  color: #8d9d9d;\n  margin-top: 8px;\n  margin-left: 2%;\n}\n\n@media (max-width: 400px){\n  .footer {\n    height: -webkit-fit-content !important;\n    height: -moz-fit-content !important;\n    height: fit-content !important;\n    transition: height 0s;\n    position: relative;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "  <footer id=\"footer\" class=\"footer\">\n    <h5>Interessado em meu trabalho? <a (click)=\"setContactPanel()\"> Entre em contato!</a></h5>\n  </footer>"

/***/ }),

/***/ "../../../../../src/app/common/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vepo_utils_utils__ = __webpack_require__("../../../../../vepo-utils/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.onscroll = function () {
        new __WEBPACK_IMPORTED_MODULE_1__vepo_utils_utils__["a" /* Util */]().scrollResize('footer', 20, 0, 30);
    };
    FooterComponent.prototype.ngOnInit = function () {
        this.homeComponent = new __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]();
    };
    FooterComponent.prototype.setContactPanel = function () {
        this.desactiveAllButton();
        document.getElementById("contact-button").setAttribute("class", "navbar-brand navbar-brand-other contact active");
        this.homeComponent.setContactPanel();
    };
    FooterComponent.prototype.desactiveAllButton = function () {
        document.getElementById("home-button").setAttribute("class", "navbar-brand");
        document.getElementById("prof-exp-button").setAttribute("class", "navbar-brand navbar-brand-other");
        document.getElementById("about-me-button").setAttribute("class", "navbar-brand navbar-brand-other");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* HostListener */])('window:scroll'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], FooterComponent.prototype, "onscroll", null);
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/common/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/footer/footer.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/home/familiavepo/workspace/portifolio-vepo/src/footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/common/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.navbar-top{\n  background-color: #222 !important;\n}\n\n.navbar{\n   width: 100%;\n   top: 0;\n   background-color: #33363b;\n}\n\nh2{\n  font-size: 70px;\n}\n\nh5{\n  font-size: 15px;\n}\n\nh6{\n  font-size: 30px;\n}\n\n.texto-navbar{\n  margin-top: 120px;\n  text-align: center;\n  color: white;\n}\n\n.navbar-brand{\n  font-size: 15px;\n  margin-left: -4px !important;\n}\n\n.navbar-header{\n  width: 100%;\n}\n\n.contact{\n  float: right;\n}\n\n.active{\n  color: white;\n}\n\n.title{\n  width: 100%;\n}\n\n.small-title{\n  display: none;\n  width: 100%;\n  padding-right: 5%;\n  padding-left: 5%;\n  margin-top: -15%;\n  margin-bottom: -3%;\n}\n\n@media (min-width: 767px){\n  .navbar-collapse{\n    display: none !important;\n  }\n\n  #background{\n    background-color: #33363b;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin-left: 0%;\n    margin-top: 0.18%;\n   width: 100%;\n   z-index: -9999;\n }\n\n .navbar-header{\n  width: 95%;\n}\n\n\n}\n\n@media (max-width: 767px){\n.navbar-brand-other{\n  display: none;\n}\n\n.small-title{\n  display: block;\n}\n\n.title{\n  display: none;\n}\n\n.navbar-brand{\n  display: none;\n}\n\n.navbar-top{\n  padding-right: 0;\n  padding-left: 0;\n  margin-bottom: 10%;\n}\n\n.navbar-header{\n  margin-right: 0px;\n  margin-left: 0px;\n}\n\n#background{\n  margin-bottom: -5%;\n\n}\n\n\n}\n\n.navbar-toggle{\n  margin-right: 7%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" id=\"navbar\">\n  <div class=\"container-fluid navbar-top\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n    <div class=\"row\">\n       <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\" id=\"home-mobile-button\"><a (click)=\"setHomePanel()\">Home</a></li>\n            <li id=\"prof-exp-mobile-button\"><a (click)=\"setExpPanel()\">Experiências Profissionais</a></li>\n            <li id=\"about-me-mobile-button\"><a (click)=\"setAboutMe()\">Sobre mim</a></li> \n            <li id=\"contact-mobile-button\"><a (click)=\"setContactPanel()\">Contato</a></li> \n          </ul>\n          \n        </div>\n\n\n      <a id=\"home-button\" class=\"navbar-brand active\" (click)=\"setHomePanel()\"><span class=\"glyphicon glyphicon-home\"></span></a>\n      <a id=\"prof-exp-button\" class=\"navbar-brand navbar-brand-other\" (click)=\"setExpPanel()\">Experiências Profissionais</a>\n      <a id=\"about-me-button\" class=\"navbar-brand navbar-brand-other\" (click)=\"setAboutMe()\">Sobre mim</a>\n      <a id=\"contact-button\" class=\"navbar-brand contact navbar-brand-other\" (click)=\"setContactPanel()\">Contato</a>\n    </div>\n  </div>\n  <!-- /.container-fluid -->\n  <div id=\"background\">    \n    <img class=\"title\" src=\"./resources/titleportifolio10.png\">\n    <img class=\"small-title\" src=\"./resources/title-small.png\">\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/common/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.homeComponent = new __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]();
    };
    NavbarComponent.prototype.goHome = function () {
        this.desactiveAllMobileButtons();
        this.desactiveAllNavbrandButton();
        document.getElementById("home-button").setAttribute("class", "navbar-brand active");
        document.getElementById("home-mobile-button").setAttribute("class", " active");
    };
    NavbarComponent.prototype.setContactPanel = function () {
        this.desactiveAllMobileButtons();
        this.desactiveAllNavbrandButton();
        document.getElementById("contact-button").setAttribute("class", "navbar-brand navbar-brand-other contact active");
        document.getElementById("contact-mobile-button").setAttribute("class", "active");
        this.homeComponent.setContactPanel();
    };
    NavbarComponent.prototype.setHomePanel = function () {
        this.goHome();
        this.homeComponent.goHome();
    };
    NavbarComponent.prototype.setAboutMe = function () {
        this.desactiveAllMobileButtons();
        this.desactiveAllNavbrandButton();
        document.getElementById("about-me-button").setAttribute("class", "navbar-brand navbar-brand-other active");
        document.getElementById("about-me-mobile-button").setAttribute("class", "active");
        this.homeComponent.setAboutMe();
    };
    NavbarComponent.prototype.setExpPanel = function () {
        this.desactiveAllMobileButtons();
        this.desactiveAllNavbrandButton();
        document.getElementById("prof-exp-button").setAttribute("class", "navbar-brand navbar-brand-other active");
        document.getElementById("prof-exp-mobile-button").setAttribute("class", "active");
        this.homeComponent.setExpPanel();
    };
    NavbarComponent.prototype.desactiveAllMobileButtons = function () {
        var e = document.getElementsByClassName("active");
        console.log(e.length);
        if (e.length > 0) {
            e[0].setAttribute("class", "");
        }
    };
    NavbarComponent.prototype.desactiveAllNavbrandButton = function () {
        document.getElementById("home-button").setAttribute("class", "navbar-brand");
        document.getElementById("prof-exp-button").setAttribute("class", "navbar-brand navbar-brand-other");
        document.getElementById("about-me-button").setAttribute("class", "navbar-brand navbar-brand-other");
        document.getElementById("contact-button").setAttribute("class", "navbar-brand navbar-brand-other contact");
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/common/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/navbar/navbar.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=/home/familiavepo/workspace/portifolio-vepo/src/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/about-me/about-me.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".minhafoto{\n    width: 95%;\n    margin-top: 10%;\n}\n\n.formatura{\n    width: 98%;\n    margin-top: 7%;\n}\n\n.col-md-10{\n    margin: 0 auto;\n    float: none;\n    margin-bottom: 5%;\n}\n\n@media (min-width: 2000px){\n    .col-md-8{\n        width: 80%\n    }\n\n    .col-md-4{\n        width: 20%;\n    }\n    \n}\n\n@media (max-width: 1000px){\n    .formatura{\n        display: none;\n    }\n    \n}\n\n\n.panel-body{\n    margin-bottom: -26%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/about-me/about-me.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-body\">\n      <div class=\"col-md-10\">\n            <div class=\"row\">\n            <div class=\"col-md-8\">\n                        <h2>Sobre Mim</h2>\n                        <p>Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, \n                          suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock,\n                           um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, \n                           consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura \n                           clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do \"de Finibus Bonorum \n                           et Malorum\" (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética \n                           muito popular na época da Renascença. A primeira linha de Lorem Ipsum, \"Lorem Ipsum dolor sit amet...\" vem de uma \n                           linha na seção 1.10.32.\n                        </p>\n                        <p>O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está reproduzido abaixo para os interessados. \n                          Seções 1.10.32 e 1.10.33 de \"de Finibus Bonorum et Malorum\" de Cicero também foram reproduzidas abaixo em sua forma \n                          exata original, acompanhada das versões para o inglês da tradução feita por H. Rackham em 1914.</p>\n                          <h3>Formação</h3>\n                          <p>O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está reproduzido abaixo para os interessados. \n                            Seções 1.10.32 e 1.10.33 de \"de Finibus Bonorum et Malorum\" de Cicero também foram reproduzidas abaixo em sua forma \n                            exata original, acompanhada das versões para o inglês da tradução feita por H. Rackham em 1914.</p>\n        \n                        </div>\n                  <div class=\"col-md-4\">\n                              <img class=\"minhafoto\" src=\"./resources/george.png\">\n                        </div>\n                        <div class=\"col-md-4\">\n                                    <img class=\"formatura\" src=\"./resources/formatura.png\">\n                        </div>\n            \n            </div>\n            \n\n      </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/about-me/about-me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'app-about-me',
            template: __webpack_require__("../../../../../src/app/home/about-me/about-me.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/about-me/about-me.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());
//# sourceMappingURL=/home/familiavepo/workspace/portifolio-vepo/src/about-me.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".phone{\n    width: 70%;\n    margin: 3%;\n    min-width: 150px;\n}\n\n.whatsapp{\n    width: 2.5%;\n    margin-left: 1.1%;\n    margin-top: -1.1%;\n    max-width: 30px;\n}\n\n.email{\n    width: 2.5%;\n    margin-left: 1.1%;\n    margin-top: -0.5%;\n    max-width: 30px;\n\n}\n\nimg.link-button{\n    width: 2.5%;\n    margin-left: 1.1%;\n    margin-bottom: 0.3%;\n    max-width: 30px;\n    \n}\n\n\n@media (max-width: 600px){\n    .col-xs-4{\n        display: none;\n    }\n\n    .col-xs-8{\n        width: 100%;\n    }\n\n    .whatsapp{\n        width: 20px;\n    }\n    \n    .email{\n        width: 20px;\n    \n    }\n    \n    img.link-button{\n        width: 20px;\n        \n    }\n    \n\n}\n\n.panel-body{\n    margin-bottom: -26%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-body\">\n      <div class=\"col-xs-4 col-md-4\">\n            <img class=\"phone\" src=\"./resources/phone.png\">\n           \n      </div>\n      <div class=\"col-xs-8 col-md-8\">\n            <h1>Contato</h1>\n            Cel: (48) 99636 - 6387 <img class=\"whatsapp\" src=\"./resources/whatsapp.png\"><br>\n            E-mail: george.vepog@gmail.com <img class=\"email\" src=\"./resources/gmail.png\"><br>\n            <a class=\"link-button\" target=\"_blank\" href=\"https://www.linkedin.com/in/george-melo-vepo-08343bb8/\">Linkedin</a><img class=\"link-button\" src=\"./resources/linkedin.png\"><br>\n            <a class=\"link-button\" target=\"_blank\" href=\"https://www.facebook.com/george.melovepo\">Facebook</a><img class=\"link-button\" src=\"./resources/facebook.png\">\n      </div>\n            \n\t\t\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/home/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/contact/contact.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=/home/familiavepo/workspace/portifolio-vepo/src/contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/exp-profissionais/exp-profissionais.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".paripassu{\n    width: 100%;\n}\n\n.brdti{\n    width: 100%;\n    margin-top: -8%;\n}\n\n.col-md-9{\n    margin-bottom: 4%;\n    margin: 0 auto;\n    float: none;\n}\n\n.panel-body{\n    margin-bottom: -26%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/exp-profissionais/exp-profissionais.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-body\">\n      <div class=\"col-md-9\">\n            <h2>Experiências Profissionais</h2>\n            <p>Desde os 14 anos passei por diversas empresas antes de começar minha carreira como programador. Em agosto de\n                  2015 abri como MEI uma empresa de limpeza de vitrine, trabalhei durante 3 meses como MEI até conseguir\n                  meu primeiro estágio.</p>\n            <div class=\"row\">\n                  <div class=\"col-md-4\">\n                        <img class=\"paripassu\" src=\"./resources/paripassu.png\">\n                  </div>\n                  <div class=\"col-md-8\">\n                        <h3>Paripassu - Novembro de 2015 à Abril de 2017</h3>\n                        <p>Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000\n                              anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de\n                              45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou\n                              uma das mais obscuras palavras em latim, consectetur.</p>\n                  </div>\n            </div>\n            <div class=\"row\">\n                  <div class=\"col-md-8\">\n                        <h3>BRDTI - Abril de 2017 ao Presente Momento</h3>\n                        <p>Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo\n                              de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem\n                              nem um pouco convincentes. Se você pretende usar uma passagem de Lorem Ipsum, precisa ter certeza\n                              de que não há algo embaraçoso escrito escondido no meio do texto.</p>\n                  </div>\n                  <div class=\"col-md-4\">\n                        <img class=\"brdti\" src=\"./resources/brdti.png\">\n                  </div>\n            </div>\n\n            <div class=\"row\">\n                  <div class=\"col-md-12\">\n                        <h3>Conhecimentos em:</h3>\n                        <div class=\"row\">\n                              <ul>\n                                    <div class=\"col-md-2\">\n                                          <li>Java</li>\n                                          <li>Javascript</li>\n                                          <li>AngularJS</li>\n                                          <li>Jquery</li>\n                                          <li>JavaEE</li>\n                                    </div>\n                                    <div class=\"col-md-2\">\n                                          <li>JSF</li>\n                                          <li>JPA/Hibernate</li>\n                                          <li>Foundation</li>\n                                          <li>Jooq</li>\n                                          <li>Maven</li>\n                                    </div>\n                                    <div class=\"col-md-2\">\n                                          <li>Spring</li>\n                                          <li>Git</li>\n                                          <li>Jenkins</li>\n                                          <li>Inglês (intermediário)</li>\n                                    </div>\n                              </ul>\n                        </div>\n                  </div>\n            </div>\n\n      </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/exp-profissionais/exp-profissionais.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpProfissionaisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpProfissionaisComponent = (function () {
    function ExpProfissionaisComponent() {
    }
    ExpProfissionaisComponent.prototype.ngOnInit = function () {
    };
    ExpProfissionaisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'app-exp-profissionais',
            template: __webpack_require__("../../../../../src/app/home/exp-profissionais/exp-profissionais.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/exp-profissionais/exp-profissionais.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], ExpProfissionaisComponent);
    return ExpProfissionaisComponent;
}());
//# sourceMappingURL=/home/familiavepo/workspace/portifolio-vepo/src/exp-profissionais.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\napp-project-list {\n    display: none;\n}\n\napp-contact{\n    display: none;\n}\n\napp-exp-profissionais{\n    display: none;\n}\n\napp-about-me{\n    display: none;\n}\n\napp-project{\n    display: none;\n}\n\n.panel-primary{\n    top: -40px;\n}\n    \n\n.nav-tabs-home{\n    background-color: #222 !important;\n}\n\n.nav-tabs-home a{\n    color: #adacac !important;\n    background-color: #222;\n}\n\n.painel-title{\n    border-bottom-color:#adacac; \n}\n\n.painel-size{\n    width: 93%;\n}\n\nselect {\n\tdisplay: none;\n    width: 125px;\n    color: #fff;\n    background-color: #222;\n}\n\n.panel-heading{\n    background-color: #222 !important;\n    display: none;\n    padding: 0px !important;\n}\n\n@media (max-width: 550px){\n    select {\n\t    display: block;\n\t}\n\n    .nav{\n       display: none; \n    }\n\n}\n\n@media (max-width: 1700px){\n    .body-margin {\n\t    width: 95%;\n    }\n\n}\n\n\n@media (max-width: 800px){\n    .body-margin {\n\t    width: 100%;\n        padding-right: 0;\n        padding-left: 0;\n        margin-right: 0;\n        margin-left: 0;\n    }\n\n}\n\n#home-panel{\n    transition: top 2s;\n    top: -200px;\n}\n\n@media (max-width: 500px){\n    #home-panel{\n        margin-bottom: 0px;\n        top: -120px;\n    }\n}\n\n@media (max-width: 400px){\n    #home-panel{\n        margin-bottom: -10%\n    }\n}\n\n.home{\n   top:-40px !important; \n}\n\n.active-panel{\n    display: block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container body-margin painel-size main-painel-margin\">\n  <div id=\"home-panel\" class=\"panel panel-primary no-padding no-border col-md-12 home\">\n\n    <div id=\"panel-heading-projects\" class=\"panel-heading home-painel-heading active-panel\">\n      <ul class=\"nav nav-tabs nav-tabs-home no-border\">\n        <li id=\"botao-todos\" role=\"presentation\" class=\"active\"><a (click)=\"filtrarProjetos()\">Todos</a></li>\n        <li id=\"botao-angular\" role=\"presentation\"><a (click)=\"filtrarProjetos('botao-angular')\">Angular</a></li>\n        <li id=\"botao-jsf\" role=\"presentation\"><a (click)=\"filtrarProjetos('botao-jsf')\">JSF</a></li>\n        <li id=\"botao-android\" role=\"presentation\"><a (click)=\"filtrarProjetos('botao-android')\">Android</a></li>\n        <li id=\"botao-java\" role=\"presentation\"><a (click)=\"filtrarProjetos('botao-java')\">Java</a></li>\n        <li id=\"botao-typescript\" role=\"presentation\"><a (click)=\"filtrarProjetos('botao-typescript')\">Typescript</a></li>\n      </ul>\n\n     <select  [(ngModel)]=\"selectedFilter\" (ngModelChange)=\"filtrarProjetosMobile()\"class=\"form-control\" id=\"selectFilter\">\n         <option [ngValue]=\"'botao-todos'\">Todos</option>\n         <option [ngValue]=\"'botao-angular'\">Angular</option>\n         <option [ngValue]=\"'botao-jsf'\">JSF</option>\n         <option [ngValue]=\"'botao-android'\">Android</option>\n         <option [ngValue]=\"'botao-java'\">Java</option>\n         <option [ngValue]=\"'botao-typescript'\">Typescript</option>\n    </select>\n\n    </div>\n\n    <div id=\"panel-heading-contact\" class=\"panel-heading\">\n      <ul class=\"nav nav-tabs nav-tabs-home no-border\">\n        <li id=\"projects\" role=\"presentation\"><a (click)=\"goHome()\">Projetos</a></li>\n        <li id=\"contact\" role=\"presentation\"  class=\"active\"><a >Contato</a></li>\n      </ul>\n\n    </div>\n\n     <div id=\"panel-heading-exp\" class=\"panel-heading\">\n      <ul class=\"nav nav-tabs nav-tabs-home no-border\">\n        <li id=\"projects\" role=\"presentation\"><a (click)=\"goHome()\">Projetos</a></li>\n        <li id=\"expProfissionais\" role=\"presentation\"  class=\"active\"><a >Experiências Profissionais</a></li>\n      </ul>\n\n    </div>\n    \n    <div id=\"panel-heading-about-me\" class=\"panel-heading\">\n        <ul class=\"nav nav-tabs nav-tabs-home no-border\">\n          <li id=\"projects\" role=\"presentation\"><a (click)=\"goHome()\">Projetos</a></li>\n          <li id=\"aboutMe\" role=\"presentation\"  class=\"active\"><a >Sobre Mim</a></li>\n        </ul>\n  \n      </div>\n    \n      <div id=\"panel-heading-project\" class=\"panel-heading\">\n        <ul class=\"nav nav-tabs nav-tabs-home no-border\">\n          <li id=\"projects\" role=\"presentation\"><a (click)=\"goHome()\">Voltar</a></li>\n        </ul>\n  \n      </div>  \n\n    <app-project-list class=\"active-panel\"></app-project-list>\n    <app-contact></app-contact>\n    <app-exp-profissionais></app-exp-profissionais>\n    <app-about-me></app-about-me>\n    <app-project></app-project>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_project_list_project_list_component__ = __webpack_require__("../../../../../src/app/home/project-list/project-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/common/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.recentPostComponent = new __WEBPACK_IMPORTED_MODULE_1__home_project_list_project_list_component__["a" /* ProjectListComponent */]();
        this.navbarComponent = new __WEBPACK_IMPORTED_MODULE_2__common_navbar_navbar_component__["a" /* NavbarComponent */]();
        this.selectedFilter = "botao-todos";
    };
    HomeComponent.prototype.filtrarProjetosMobile = function () {
        this.recentPostComponent.filtrarProjetos(this.selectedFilter);
    };
    HomeComponent.prototype.filtrarProjetos = function (id) {
        this.recentPostComponent.filtrarProjetos(id);
        this.setActive(id);
    };
    HomeComponent.prototype.setActive = function (id) {
        var elementList = document.getElementsByClassName("active");
        for (var i = 0; i <= elementList.length; i++) {
            if (elementList[i] && elementList[i].id != "home-button") {
                elementList[i].setAttribute("class", "");
            }
        }
        document.getElementById(id).setAttribute("class", "active");
    };
    HomeComponent.prototype.setContactPanel = function () {
        this.desactiveAllPanel();
        document.getElementById("home-panel").setAttribute("class", "panel panel-primary no-padding no-border col-md-12");
        document.getElementById("panel-heading-contact").setAttribute("class", "panel-heading active-panel");
        document.getElementsByTagName("app-contact").item(0).setAttribute("class", "active-panel");
    };
    HomeComponent.prototype.setHomeNavbar = function () {
        if (this.navbarComponent) {
            this.navbarComponent.goHome();
        }
    };
    HomeComponent.prototype.goHome = function () {
        this.desactiveAllPanel();
        document.getElementById("home-panel").setAttribute("class", "panel panel-primary no-padding no-border col-md-12 home");
        document.getElementById("panel-heading-projects").setAttribute("class", "panel-heading home-painel-heading active-panel");
        document.getElementsByTagName("app-project-list").item(0).setAttribute("class", "active-panel");
        this.setHomeNavbar();
    };
    HomeComponent.prototype.setExpPanel = function () {
        this.desactiveAllPanel();
        document.getElementById("home-panel").setAttribute("class", "panel panel-primary no-padding no-border col-md-12");
        document.getElementById("panel-heading-exp").setAttribute("class", "panel-heading active-panel");
        document.getElementsByTagName("app-exp-profissionais").item(0).setAttribute("class", "active-panel");
    };
    HomeComponent.prototype.setAboutMe = function () {
        this.desactiveAllPanel();
        document.getElementById("home-panel").setAttribute("class", "panel panel-primary no-padding no-border col-md-12");
        document.getElementById("panel-heading-about-me").setAttribute("class", "panel-heading active-panel");
        document.getElementsByTagName("app-about-me").item(0).setAttribute("class", "active-panel");
    };
    HomeComponent.prototype.goToPortifolio = function () {
        this.desactiveAllPanel();
        document.getElementById("home-panel").setAttribute("class", "panel panel-primary no-padding no-border col-md-12");
        document.getElementById("panel-heading-project").setAttribute("class", "panel-heading active-panel");
        document.getElementsByTagName("app-project").item(0).setAttribute("class", "active-panel");
    };
    HomeComponent.prototype.desactiveAllPanel = function () {
        document.getElementById("panel-heading-projects").setAttribute("class", "panel-heading home-painel-heading");
        document.getElementsByTagName("app-project-list").item(0).setAttribute("class", "");
        document.getElementById("panel-heading-contact").setAttribute("class", "panel-heading");
        document.getElementsByTagName("app-contact").item(0).setAttribute("class", "");
        document.getElementsByTagName("app-about-me").item(0).setAttribute("class", "");
        document.getElementById("panel-heading-about-me").setAttribute("class", "panel-heading");
        document.getElementById("panel-heading-exp").setAttribute("class", "panel-heading");
        document.getElementsByTagName("app-exp-profissionais").item(0).setAttribute("class", "");
        document.getElementById("panel-heading-project").setAttribute("class", "panel-heading");
        document.getElementsByTagName("app-project").item(0).setAttribute("class", "");
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/familiavepo/workspace/portifolio-vepo/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_list_project_list_component__ = __webpack_require__("../../../../../src/app/home/project-list/project-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/home/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exp_profissionais_exp_profissionais_component__ = __webpack_require__("../../../../../src/app/home/exp-profissionais/exp-profissionais.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_me_about_me_component__ = __webpack_require__("../../../../../src/app/home/about-me/about-me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project_project_component__ = __webpack_require__("../../../../../src/app/home/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_3__project_list_project_list_component__["a" /* ProjectListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_5__exp_profissionais_exp_profissionais_component__["a" /* ExpProfissionaisComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_me_about_me_component__["a" /* AboutMeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__project_project_component__["a" /* ProjectComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
//# sourceMappingURL=/home/familiavepo/workspace/portifolio-vepo/src/home.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/project-list/project-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid {\n\tlist-style: none;\n    padding-left: 2%;\n}\n\n@media (max-width: 800px){\n    .grid {\n    padding-left: 0%;\n    }\n}\n\n\n.show-project{\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0s, opacity 0.5s linear;\n   position: relative;\n}\n\n.hide-project{\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.5s, opacity 0.5s linear;\n  position: absolute;\n  width: 48%\n}\n\n #taskmanager.hide-project{\n  left: 50%;\n}\n\n\nfigure {\n\tmargin: 0;\n\tposition: relative;\n\twidth: 100%;\n}\n\n figure img {\n\tdisplay: block;\n\tposition: relative;\n\twidth: 100%;\n}\n\n figcaption {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tbackground: #222222;\n\tcolor: #fff;\n}\n\n figcaption h1 {\n\tmargin: 0;\n\tpadding: 4%;\n\tcolor: #5ea8e2;\n}\n\n\n figcaption a {\n\ttext-align: center;\n\tpadding: 5px 10px;\n\tborder-radius: 2px;\n\tdisplay: inline-block;\n\tbackground: #327bb3;\n\tcolor: #fff;\n}\n\nfigure {\n\t-webkit-transform-style: preserve-3d;\n\t        transform-style: preserve-3d;\n}\n\nfigure > div {\n\toverflow: hidden;\n}\n\nfigure img {\n\ttransition: -webkit-transform 0.4s;\n\ttransition: transform 0.4s;\n\ttransition: transform 0.4s, -webkit-transform 0.4s;\n}\n\nfigure:hover img {\n\t-webkit-transform: translateX(25%);\n\t        transform: translateX(25%);\n}\n\nfigcaption {\n\theight: 100%;\n\twidth: 50%;\n\topacity: 0;\n\t-webkit-backface-visibility: hidden;\n\t        backface-visibility: hidden;\n\t-webkit-transform-origin: 0 0;\n\t        transform-origin: 0 0;\n\t-webkit-transform: rotateY(-90deg);\n\t        transform: rotateY(-90deg);\n\ttransition: opacity 0.1s 0.3s, -webkit-transform 0.4s;\n\ttransition: transform 0.4s, opacity 0.1s 0.3s;\n\ttransition: transform 0.4s, opacity 0.1s 0.3s, -webkit-transform 0.4s;\n}\n\nfigure:hover figcaption {\n\topacity: 1;\n\t-webkit-transform: rotateY(0deg);\n\t        transform: rotateY(0deg);\n\ttransition: opacity 0.1s, -webkit-transform 0.4s;\n\ttransition: transform 0.4s, opacity 0.1s;\n\ttransition: transform 0.4s, opacity 0.1s, -webkit-transform 0.4s;\n}\n\nfigcaption a {\n\tposition: absolute;\n\tbottom: 20px;\n\tright: 20px;\n}\n\nli {\n\tdisplay: inline-block;\n\twidth: 49%;\n\tmargin: 0;\n\tpadding: 0.5%;\n\ttext-align: left;\n\tposition: relative;\n}\n\nli {\n\t-webkit-perspective: 1700px;\n\t        perspective: 1700px;\n\t-webkit-perspective-origin: 0 50%;\n\t        perspective-origin: 0 50%;\n}\n\n@media (max-width: 800px){\n    li {\n\twidth: 100%;\n\tmargin-bottom: 3%;\n\t}\n\n\t.hide-project{\n\t\tvisibility: hidden;\n\t\topacity: 0;\n\t\ttransition: visibility 0.5s, opacity 0.5s linear;\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\tpadding: 2%;\n\t  }\n\n\t  #taskmanager.hide-project{\n\t\tleft: 0;\n\t  }\n\t  \n\n}\n\n@media (max-width: 400px){\n\th1{\n\t\tfont-size: 28px;\n\t}\n}\n\np{\n\tpadding-left: 4%;\n}\n\n@media (max-width: 500px){\n\tp{\n\t\tdisplay: none;\n\t}\n}\n\n@media (max-width: 330px){\n\th1{\n\t\tdisplay: none;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/project-list/project-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-body\">\n      <div class=\"container\">\n            <ul class=\"grid cs-style-4\">\n\n                  <li id=\"portifolio\">\n                        <figure>\n                              <div>\n                                    <img src=\"./resources/portifolio.png\" alt=\"img01\">\n                              </div>\n                              <figcaption>\n                                    <h1>Este Projeto</h1>\n                                    <p>Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com\n                                          mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura\n                                          latina clássica datada de 45 AC. Richard McClintock.</p>\n                                    <a (click)=\" goToPortifolio() \">Dê uma olhada!</a>\n                              </figcaption>\n                        </figure>\n                  </li>\n\n                  <li id=\"taskmanager\">\n                        <figure>\n                              <div>\n                                    <img src=\"./resources/taskmanager.png\" al\n                                    t=\"taskmanager\">\n                              </div>\n                              <figcaption>\n                                    <h1>Task Manager</h1>\n                                    <p>Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com\n                                          mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura\n                                          latina clássica datada de 45 AC. Richard McClintock.</p>\n                                    <a (click)=\" goToPortifolio() \">Dê uma olhada!</a>\n                              </figcaption>\n                        </figure>\n                  </li>\n\n            </ul>\n      </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/project-list/project-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectListComponent = (function () {
    function ProjectListComponent() {
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        this.homeComponent = new __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */]();
    };
    ProjectListComponent.prototype.goToPortifolio = function () {
        this.homeComponent.goToPortifolio();
    };
    ProjectListComponent.prototype.filtrarProjetos = function (id) {
        switch (id) {
            case "botao-todos":
                document.getElementById("taskmanager").setAttribute("class", "show-project");
                document.getElementById("portifolio").setAttribute("class", "show-project");
                break;
            case "botao-angular":
                document.getElementById("taskmanager").setAttribute("class", "hide-project");
                document.getElementById("portifolio").setAttribute("class", "show-project");
                break;
            case "botao-jsf":
                document.getElementById("taskmanager").setAttribute("class", "show-project");
                document.getElementById("portifolio").setAttribute("class", "hide-project");
                break;
            case "botao-android":
                document.getElementById("taskmanager").setAttribute("class", "hide-project");
                document.getElementById("portifolio").setAttribute("class", "hide-project");
                break;
            case "botao-java":
                document.getElementById("taskmanager").setAttribute("class", "show-project");
                document.getElementById("portifolio").setAttribute("class", "hide-project");
                break;
            case "botao-typescript":
                document.getElementById("taskmanager").setAttribute("class", "hide-project");
                document.getElementById("portifolio").setAttribute("class", "show-project");
                break;
        }
    };
    ProjectListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'app-project-list',
            template: __webpack_require__("../../../../../src/app/home/project-list/project-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/project-list/project-list.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectListComponent);
    return ProjectListComponent;
}());
//# sourceMappingURL=/home/familiavepo/workspace/portifolio-vepo/src/project-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\n    text-align: center;\n}\n\n.div-title{\n    margin-bottom: 4%;\n    margin-top: 0px;\n    text-align: center;\n    margin-top: -0.5%;\n}\n\n.div-principal{\n    margin: 0 auto;\n    float: none;\n}\n\nimg.project-home-photo{\n    width: 100%;\n}\n\n.mobile-version-photo{\n    width: 100%;\n    display: block;\n    margin-left: 3%;\n    margin-right: auto\n}\n\n\n.row{\n    margin-bottom: 5%;\n}\n\n.mobile-div{\n    height: 265px;\n    overflow: scroll;\n}\n\nimg.git-icon{\n    width: 2%;\n    margin-right: 1.2%;\n}\n\ndiv.git-icon{\n    margin-bottom: 2%;\n    margin-top: 3%;\n}\n\ndiv.project-home-photo{\n    padding-bottom: 8%;\n}\n\n@media (max-width: 1000px){\n    .mobile-version-photo{\n        padding-top: 5%;\n    }\n\n    .mobile-div{\n        display: none;\n    }\n\n    \n}\n\n@media (max-width: 400px){\n    img.git-icon{\n        display: none\n    }\n\n    a.git-icon{\n        font-size:12px;\n    }\n\n    \n}\n\n.panel-body{\n    margin-bottom: -26%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-body\">\n  <div class=\"div-principal col-md-9\">\n    <div class=\"row\">\n      <h2>Portifólio</h2>\n      <p class=\"div-title\">(Angular 4 & Typescipt)</p>\n      \n      <div class=\"row\">\n          <div class=\"project-home-photo col-md-5\">\n              <img class=\"project-home-photo\" src=\"./resources/projeto-home.png\">\n            </div>\n          <div class=\"col-md-7\">\n            <p>\n              Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o\n              século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de\n              modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica,\n              permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo\n              passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica\n              como Aldus PageMaker.\n            </p>\n          </div>\n          \n        <div class=\"col-md-9\">\n          <p>\n            Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem\n            ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de\n            latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur,\n            oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu\n            a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do \"de Finibus Bonorum et Malorum\" (Os\n            Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular\n            na época da Renascença. A primeira linha de Lorem Ipsum, \"Lorem Ipsum dolor sit amet...\" vem de uma linha na\n            seção 1.10.32.\n          </p>\n          <p>\n            O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está reproduzido abaixo para os interessados. Seções 1.10.32\n            e 1.10.33 de \"de Finibus Bonorum et Malorum\" de Cicero também foram reproduzidas abaixo em sua forma exata original,\n            acompanhada das versões para o inglês da tradução feita por H. Rackham em 1914.\n          </p>\n        </div>\n        <div class=\"col-md-3 mobile-div\">\n          <img class=\"mobile-version-photo\" src=\"./resources/mobile-version-home.png\">\n        </div>\n      </div>\n      <div class=\"git-icon col-md-12\">\n          <img class=\"git-icon\" src=\"./resources/git-icon.png\"><a class=\"git-icon\" target=\"_blank\" href=\"https://github.com/GeorgeVepo/portifolio-vepo/tree/master/portifolio-vepo\">https://github.com/GeorgeVepo/portifolio-vepo/tree/master/portifolio-vepo</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'app-project',
            template: __webpack_require__("../../../../../src/app/home/project/project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/project/project.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectComponent);
    return ProjectComponent;
}());
//# sourceMappingURL=/home/familiavepo/workspace/portifolio-vepo/src/project.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/familiavepo/workspace/portifolio-vepo/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/familiavepo/workspace/portifolio-vepo/src/main.js.map

/***/ }),

/***/ "../../../../../vepo-utils/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
var Util = (function () {
    function Util() {
    }
    /*
    Animação de alteração de tamanho depois de movimento com o scroll
  
    Escolha um id da view e a posição do scroll aonde a animaçao vai acontecer e a altura antes
    e depois da animação
  
    Utilize junto com @HostListener('window:scroll')
      Ex:
        @HostListener('window:scroll') onscroll(){
       new Util().scrollResize('footer', 100, 0, 100);
    }
  
    Importarção = import { HostListener } from '@angular/core';
  
    */
    Util.prototype.scrollResize = function (domId, scrollPosition, beforeHeight, afterHeight) {
        var docEl = document.documentElement;
        var $class = document.getElementById(domId);
        var sTop = (window.pageYOffset || docEl.scrollTop) - (docEl.clientTop || 0);
        $class.style.height = sTop > scrollPosition ? afterHeight + "px" : beforeHeight + "px";
    };
    return Util;
}());
//# sourceMappingURL=/home/familiavepo/workspace/portifolio-vepo/src/utils.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map