(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proyectos/proyectos.component */ "./src/app/proyectos/proyectos.component.ts");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacto/contacto.component */ "./src/app/contacto/contacto.component.ts");






var routes = [
    { path: "", component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"] },
    { path: "proyectos", component: _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_4__["ProyectosComponent"] },
    { path: "contacto", component: _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_5__["ContactoComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\n    font-family: 'Lato', sans-serif;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7O0FBRW5DIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZ7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\">Gaston Ariel Veliez</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link active\" href=\"\">Home <span class=\"sr-only\">(current)</span></a>\n      <a class=\"nav-item nav-link\" (click)='proyectos()' [routerLink]=\"\">Proyectos</a>\n      <a class=\"nav-item nav-link\" (click)='contacto()' [routerLink]=\"\">Contacto</a>\n    </div>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'portfolio';
    }
    AppComponent.prototype.proyectos = function () {
        this.router.navigate(["/proyectos"]);
    };
    AppComponent.prototype.contacto = function () {
        this.router.navigate(["/contacto"]);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./proyectos/proyectos.component */ "./src/app/proyectos/proyectos.component.ts");
/* harmony import */ var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacto/contacto.component */ "./src/app/contacto/contacto.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_6__["InicioComponent"],
                _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_7__["ProyectosComponent"],
                _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_8__["ContactoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacto/contacto.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacto/contacto.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    font-family: 'Oswald', sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG8vY29udGFjdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RvL2NvbnRhY3RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contacto/contacto.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacto/contacto.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Contacto</h2>\n  <div class=\"container\">\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\"><i class=\"fas fa-phone-square fa-lg\"></i> (011) 69408079</li>\n        <li class=\"list-group-item\"><i class=\"fas fa-envelope fa-lg\"></i> gastonveliez95@gmail.com</li>\n        <li class=\"list-group-item\"><a href=\"https://www.linkedin.com/in/gaston-ariel-veliez-8881b2168/\"><i class=\"fab fa-linkedin fa-lg\"></i> Mi perfil en LinkedIn</a></li>\n      </ul>\n  </div>\n  <div class=\"container\" style=\"padding-top: 20px\">\n    <h4>Contacto directo</h4>\n    <form #contactForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n<!--      <div class=\"form-group\">\n        <label for=\"emailInput\">Email</label>\n        <input type=\"email\" class=\"form-control\" id=\"emailInput\" placeholder=\"Ingresa un mail de contacto\" [(ngModel)]=\"formulario.email\" name=\"email\" required>\n      </div>-->\n      <div class=\"form-group\">\n        <label for=\"asuntoInput\">Asunto</label>\n        <input type=\"text\" class=\"form-control\" id=\"asuntoInput\" placeholder=\"Ingresa el asunto del contacto\" [(ngModel)]=\"formulario.asunto\" name=\"asunto\" required >\n      </div>\n      <div class=\"form-group\">\n          <label for=\"textInput\">Contenido</label>\n          <textarea class=\"form-control\" id=\"textInput\" rows=\"3\" [(ngModel)]=\"formulario.mensaje\" name=\"mensaje\" required></textarea>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Enviar</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contacto/contacto.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacto/contacto.component.ts ***!
  \************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../email.service */ "./src/app/email.service.ts");



var ContactoComponent = /** @class */ (function () {
    function ContactoComponent(emailServ) {
        this.emailServ = emailServ;
        this.formulario = { asunto: '', mensaje: '' };
    }
    ContactoComponent.prototype.ngOnInit = function () {
    };
    ContactoComponent.prototype.onSubmit = function () {
        window.open('mailto:gastonveliez95@gmail.com?subject=' + this.formulario.asunto + '&body=' + this.formulario.mensaje);
        //this.emailServ.sendEmail(this.formulario);
    };
    ContactoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__(/*! ./contacto.component.html */ "./src/app/contacto/contacto.component.html"),
            styles: [__webpack_require__(/*! ./contacto.component.css */ "./src/app/contacto/contacto.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_email_service__WEBPACK_IMPORTED_MODULE_2__["EmailService"]])
    ], ContactoComponent);
    return ContactoComponent;
}());



/***/ }),

/***/ "./src/app/email.service.ts":
/*!**********************************!*\
  !*** ./src/app/email.service.ts ***!
  \**********************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.component.css":
/*!*********************************************!*\
  !*** ./src/app/inicio/inicio.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-item {\n    height: 500px;\n }\n\n .infoCV{\n    font-family: 'Oswald', sans-serif;\n }\n\n h4{\n     color: aquamarine;\n }\n\n h3{\n     color: aquamarine;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQjs7Q0FFQTtJQUNHLGlDQUFpQztDQUNwQzs7Q0FFQTtLQUNJLGlCQUFpQjtDQUNyQjs7Q0FFQTtLQUNJLGlCQUFpQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1pdGVtIHtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuIH1cblxuIC5pbmZvQ1Z7XG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xuIH1cblxuIGg0e1xuICAgICBjb2xvcjogYXF1YW1hcmluZTtcbiB9XG5cbiBoM3tcbiAgICAgY29sb3I6IGFxdWFtYXJpbmU7XG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/inicio/inicio.component.html":
/*!**********************************************!*\
  !*** ./src/app/inicio/inicio.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"http://static.t13.cl/images/sizes/1200x675/1493938270-programacion-istock.jpg\" class=\"d-block w-100\" alt=\"img1\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h3>Gaston Veliez</h3>\n        <h4>Tecnico Universitario en Programacion Informatica</h4>\n        <h4>Estudiante de la Licenciatura en Informatica</h4>\n        <h4>Universidad Nacional de Quilmes</h4>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <a [routerLink]=\"\" (click)=\"proyectos()\">\n        <img src=\"https://dev-res.thumbr.io/libraries/82/12/41/lib/1452348363337_1.jpg?size=854x493s&ext=jpg\" class=\"d-block w-100\" alt=\"img2\">\n      </a>\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h3>Mis proyectos</h3>\n        <h4>Proyectos realizados con motivo acedemico y/o personal</h4>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <a [routerLink]=\"\" (click)=\"contacto()\">\n        <img src=\"https://i.kinja-img.com/gawker-media/image/upload/s--fwbIzHY7--/c_scale,f_auto,fl_progressive,q_80,w_800/ozw77feokqvffbkaulxx.png\" class=\"d-block w-100\" alt=\"img3\">\n      </a>\n      <div class=\"carousel-caption d-none d-md-block\">\n        <h3>Contacto</h3>\n      </div>\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Atras</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Siguiente</span>\n  </a>\n</div>\n<div class=\"container\" style=\"padding-top: 80px\">\n    <h2 style=\"text-align: center; font-family: 'Oswald', sans-serif;\">Mi perfil</h2>\n    <div class=\"row\" style=\"padding-top: 50px\">\n      <div class=\"col-sm\">\n        <img src=\"../../assets/ImgPerfil.jpeg\" class=\"rounded mx-auto d-block\" alt=\"profilePic\" style=\"max-width: 250px;max-height: 250px;\">\n      </div>\n      <div class=\"col-md infoCV\">\n        <h5>Tecnico Universitario en Programacion Informatica</h5>\n        <h5>Estudiante de la Licenciatura en Informatica</h5>\n        <h5>Universidad Nacional de Quilmes</h5>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var InicioComponent = /** @class */ (function () {
    function InicioComponent(router) {
        this.router = router;
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent.prototype.proyectos = function () {
        this.router.navigate(["/proyectos"]);
    };
    InicioComponent.prototype.contacto = function () {
        this.router.navigate(["/contacto"]);
    };
    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/inicio/inicio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/proyectos/proyectos.component.css":
/*!***************************************************!*\
  !*** ./src/app/proyectos/proyectos.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3llY3Rvcy9wcm95ZWN0b3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/proyectos/proyectos.component.html":
/*!****************************************************!*\
  !*** ./src/app/proyectos/proyectos.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n  <div class=\"card\" style=\"width: 18rem; display: inline-block;\">\n    <img src=\"../../assets/GFIcon.png\" class=\"card-img-top\" alt=\"GestionFitImg\" height=\"250\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">GestionFit</h5>\n      <h6 class=\"card-subtitle mb-2 text-muted\"><i class=\"fab fa-angular\"></i><i class=\"fab fa-java\"></i></h6>\n      <p class=\"card-text\">Trabajo de insercion profesional para la Tecnicatura en Programacion Informatica, Universidad Nacional de Quilmes.</p>\n      <a href=\"https://github.com/MatiCava/GestionFitTip\" class=\"btn btn-primary\">Ver en Github</a>\n    </div>\n  </div>\n  <div class=\"card\" style=\"width: 18rem;display: inline-block;\">\n    <img src=\"../../assets/CarPnDLogo1.png\" class=\"card-img-top\" alt=\"CarPnDImg\" height=\"250\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">CarPnD</h5>\n      <h6 class=\"card-subtitle mb-2 text-muted\"><i class=\"fab fa-angular\"></i><i class=\"fab fa-java\"></i></h6>\n      <p class=\"card-text\">Proyecto para la materia Desarrollo de Aplicaciones, Universidad Nacional de Quilmes.</p>\n      <a href=\"https://github.com/gasvel/desapp-unq-grupo-f-012018\" class=\"btn btn-primary\">Ver en Github</a>\n    </div>\n  </div>\n  <div class=\"card\" style=\"width: 18rem;display: inline-block;\">\n    <img src=\"../../assets/LightKeeper.jpg\" class=\"card-img-top\" alt=\"LightKeeperImg\"height=\"250\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Light Keeper</h5>\n      <h6 class=\"card-subtitle mb-2 text-muted\"><i class=\"fas fa-gamepad\"></i></h6>\n      <p class=\"card-text\">Proyecto personal realizado en una semana para la Brackey's Game Jam.</p>\n      <a href=\"https://github.com/gasvel/Light-Keeper\" class=\"btn btn-primary\">Ver en Github</a>\n    </div>\n  </div>\n  <div class=\"card\" style=\"width: 18rem;display: inline-block;\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Pocket Rocket</h5>\n      <h6 class=\"card-subtitle mb-2 text-muted\"><i class=\"fas fa-gamepad\"></i></h6>\n      <p class=\"card-text\">Proyecto personal en curso.Juego para plataformas mobile.</p>\n      <a href=\"https://github.com/gasvel/PocketRocket\" class=\"btn btn-primary\">Ver en Github</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/proyectos/proyectos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/proyectos/proyectos.component.ts ***!
  \**************************************************/
/*! exports provided: ProyectosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectosComponent", function() { return ProyectosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProyectosComponent = /** @class */ (function () {
    function ProyectosComponent() {
    }
    ProyectosComponent.prototype.ngOnInit = function () {
    };
    ProyectosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proyectos',
            template: __webpack_require__(/*! ./proyectos.component.html */ "./src/app/proyectos/proyectos.component.html"),
            styles: [__webpack_require__(/*! ./proyectos.component.css */ "./src/app/proyectos/proyectos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProyectosComponent);
    return ProyectosComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gasvel/Documentos/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map