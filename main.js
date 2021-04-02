(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\flavi\OneDrive\Área de Trabalho\Escola\1.2 DWM\Programacao Web\Angular\Final\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 0, consts: [["id", "background", "src", "../../assets/homeAssets/wallpaper.png", "alt", "", 1, "position-absolute"], ["id", "main", 1, "container-fluid", "d-flex", "flex-column", "align-items-start", "justify-content-center"], ["href", "", "id", "assinatura", 1, "position-absolute"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "WELCOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Este \u00E9 o meu portf\u00F3lio, a partir daqui poder\u00E1s contactar me ou saber mais sobre mim.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DOWNLOAD CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Flavio Costa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');\n\n@font-face{\r\n  font-family: signature;\r\n src: url('SurfshirtSignature.ttf');\r\n}\n#background[_ngcontent-%COMP%]{\r\n  z-index: 1;\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\n#assinatura[_ngcontent-%COMP%]{\r\n  font-family: signature;\r\n  font-size: 60px;\r\n  color: white;\r\n  text-decoration: none;\r\n  top: 0;\r\n  right: 0;\r\n  margin: 1vw 3vw 0vw 0vh;\r\n}\n#main[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  height: 100vh;\r\n  margin-left: 10vw;\r\n  z-index: 900;\r\n  width: 90vw;\r\n}\n#main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  font-family: 'Bebas Neue', cursive;\r\n  font-size: 6rem;\r\n  color: white;\r\n}\n#main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  width: 35%;\r\n  font-size: 1.5rem;\r\n  margin-bottom: 0;\r\n  color: white;\r\n}\n#main[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  color: white;\r\n  background-color: #16161600;\r\n  padding: 10px 20px 10px 20px;\r\n  margin-top: 4vh;\r\n  border: 2px solid white;\r\n  transition-duration: 1s;\r\n}\n#main[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n  color: black;\r\n  background-color: white;\r\n  box-shadow:         -6px -6px 30px 0px #18181877;\r\n}\n#main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n}\n@media screen and  (max-width: 769px), screen and (max-height: 700px) {\r\n  #assinatura[_ngcontent-%COMP%]{\r\n    font-family: signature;\r\n    font-size: 2.3rem;\r\n    margin: 1vw 5vw 0vw 0vh;\r\n\r\n  }\r\n\r\n  #main[_ngcontent-%COMP%]{\r\n    width: 100vw;\r\n    margin-left: 0vw;\r\n  }\r\n  #main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 4rem;\r\n    width: 100%;\r\n    text-align: left;\r\n  }\r\n\r\n  #main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n    font-size: 1.2rem;\r\n  }\r\n  #main[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    padding: 10px 15px 10px 15px;\r\n  }\r\n}\n\n@media only screen and (min-width:  769.1px) and (max-width: 991.98px){\r\n  \r\n}\n\n@media only screen and (min-width: 769px) and (max-width: 1300.98px) {\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsK0VBQStFO0FBSC9FOztLQUVLO0FBR0w7RUFDRSxzQkFBc0I7Q0FDdkIsa0NBQXdEO0FBQ3pEO0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLE1BQU07RUFDTixRQUFRO0VBQ1IsdUJBQXVCO0FBQ3pCO0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUd2QixnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87QUFDVDtBQU1BO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHVCQUF1Qjs7RUFFekI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGO0FBR0EsaURBQWlEO0FBQ2pEOztBQUVBO0FBSUEsa0RBQWtEO0FBQ2xEOztBQUVBIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT1cclxuICBJbXBvcnRzXHJcbj09PT0qL1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWJhcytOZXVlJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTogc2lnbmF0dXJlO1xyXG4gc3JjOiB1cmwoLi4vLi4vYXNzZXRzL2hvbWVBc3NldHMvU3VyZnNoaXJ0U2lnbmF0dXJlLnR0Zik7XHJcbn1cclxuXHJcbiNiYWNrZ3JvdW5ke1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiNhc3NpbmF0dXJhe1xyXG4gIGZvbnQtZmFtaWx5OiBzaWduYXR1cmU7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMXZ3IDN2dyAwdncgMHZoO1xyXG59XHJcblxyXG5cclxuI21haW57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiAgei1pbmRleDogOTAwO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG59XHJcbiNtYWluIGgxe1xyXG4gIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiA2cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jbWFpbiBwIHtcclxuICB3aWR0aDogMzUlO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiNtYWluIGJ1dHRvbntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogNHZoO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG59XHJcbiNtYWluIGJ1dHRvbjpob3ZlcntcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtNnB4IC02cHggMzBweCAwcHggIzE4MTgxODc3O1xyXG4gIC1tb3otYm94LXNoYWRvdzogICAgLTZweCAtNnB4IDMwcHggMHB4ICMxODE4MTg3NztcclxuICBib3gtc2hhZG93OiAgICAgICAgIC02cHggLTZweCAzMHB4IDBweCAjMTgxODE4Nzc7XHJcbn1cclxuI21haW4gaW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA3NjlweCksIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDcwMHB4KSB7XHJcbiAgI2Fzc2luYXR1cmF7XHJcbiAgICBmb250LWZhbWlseTogc2lnbmF0dXJlO1xyXG4gICAgZm9udC1zaXplOiAyLjNyZW07XHJcbiAgICBtYXJnaW46IDF2dyA1dncgMHZ3IDB2aDtcclxuXHJcbiAgfVxyXG5cclxuICAjbWFpbntcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1hcmdpbi1sZWZ0OiAwdnc7XHJcbiAgfVxyXG4gICNtYWluIGgxe1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgI21haW4gcHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcbiAgI21haW4gYnV0dG9ue1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMTVweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiAvLyBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgbGVzcyB0aGFuIDk5MnB4KSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICA3NjkuMXB4KSBhbmQgKG1heC13aWR0aDogOTkxLjk4cHgpe1xyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcbi8qIC8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCBsZXNzIHRoYW4gMTIwMHB4KSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTMwMC45OHB4KSB7XHJcblxyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "Ae20":
/*!********************************************!*\
  !*** ./src/app/acerca/acerca.component.ts ***!
  \********************************************/
/*! exports provided: AcercaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcercaComponent", function() { return AcercaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function AcercaComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const titulo_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", titulo_r1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.descricoes[i_r2], " ");
} }
class AcercaComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.titulos = ["Lorem Ipsium", "Lorem Ipsium", "Lorem Ipsium"];
        this.descricoes = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        ];
        this.teste = 1;
    }
    ngOnInit() {
    }
    scrollfunction() {
        this.teste = this.teste + 1;
        console.log(this.teste);
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "none";
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = "cover";
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundPosition = "center";
    }
}
AcercaComponent.ɵfac = function AcercaComponent_Factory(t) { return new (t || AcercaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AcercaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AcercaComponent, selectors: [["app-acerca"]], hostBindings: function AcercaComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AcercaComponent_scroll_HostBindingHandler() { return ctx.scrollfunction(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 63, vars: 1, consts: [["id", "banner", 1, "container-fluid", "d-flex", "flex-row", "justify-content-center"], ["id", "profile-pic", 1, "d-flex", "flex-row", "justify-content-center", "align-content-center"], ["src", "../../assets/about/profile.png", "alt", ""], ["id", "banner-bottom-info"], [1, "container-fluid", "d-flex", "flex-column", "justify-content-center", "align-items-center"], ["id", "nome", 1, "text-center"], [1, "w-100", "text-center"], ["id", "redes", 1, "container-fluid", "d-flex", "flex-row", "align-items-center", "justify-content-center"], ["src", "../../assets/about/redes/rdes-email.svg", "alt", "", 1, "sociais"], ["src", "../../assets/about/redes/redes-phone.svg", "alt", "", 1, "sociais"], ["src", "../../assets/about/redes/redes-facebook.svg", "alt", "", 1, "sociais"], ["src", "../../assets/about/redes/redes-linkedin.svg", "alt", "", 1, "sociais"], ["id", "introducao-texto", 1, "container-fluid", "d-flex", "flex-row", "align-items-center", "justify-content-center"], ["id", "conhecimentos", 1, "container-fluid", "d-flex", "flex-column"], [1, "row", "d-flex", "flex-wrap", "flex-row", "justify-content-center", "align-items-center"], [1, "col-md-3", "d-flex", "flex-column", "justify-content-start", "align-items-center"], ["src", "../../assets/about/conhecimentos/htmlcssjs.png", "alt", "", 1, "conhecimentos-logos"], [1, "text-center"], [1, "col-md-3", "d-flex", "flex-column", "justify-content-center", "align-items-center"], ["src", "../../assets/about/conhecimentos/angular.png", "alt", "", 1, "conhecimentos-logos"], ["src", "../../assets/about/conhecimentos/bootstrap.png", "alt", "", 1, "conhecimentos-logos"], [1, "row", "d-flex", "flex-wrap", "flex-row", "justify-content-center", "align-items-center", "mt-md-5", "md-sm-3", "mt-sm-0"], ["src", "../../assets/about/conhecimentos/mysql.png", "alt", "", 1, "conhecimentos-logos"], ["src", "../../assets/about/conhecimentos/figma.png", "alt", "", 1, "conhecimentos-logos"], ["src", "../../assets/about/conhecimentos/um-para-muitos.png", "alt", "", 1, "conhecimentos-logos"], ["id", "percurso", 1, "container-fluid", "d-flex", "flex-column", "align-content-center", "justify-content-center"], ["id", "box", "class", "container mainbox d-flex flex-md-row flex-sm-column flex-md-nowrap flex-sm-wrap", 4, "ngFor", "ngForOf"], ["id", "box", 1, "container", "mainbox", "d-flex", "flex-md-row", "flex-sm-column", "flex-md-nowrap", "flex-sm-wrap"], [1, "box-titulo", "overflow-hidden"], ["id", "box-texto", 1, "mt-auto", "mb-auto"]], template: function AcercaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "JOHN DOE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "q", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius accusantium ratione.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "CONHECIMENTOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Html & Css & Js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Lorem ipsium is simply dummy text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Angular & Ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lorem ipsium is simply dummy text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem ipsium is simply dummy text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "MySql");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Lorem ipsium is simply dummy text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "FIGMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Lorem ipsium is simply dummy text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "OUTROS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Lorem ipsium is simply dummy text of the printing and typesetting industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "PERCURSO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, AcercaComponent_div_62_Template, 6, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.titulos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["#banner[_ngcontent-%COMP%]{\r\n  width: 100vw;\r\n  height: 30vh;\r\n  margin-bottom: 10vh;\r\n  position: relative;\r\n  margin-left: 0vw;\r\n  background-image: url('banner.png');\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n#profile-pic[_ngcontent-%COMP%]{\r\n  width: 200px;\r\n  height: 200px;\r\n  position: absolute;\r\n  bottom: -35%;\r\n  overflow: hidden;\r\n  border-radius: 50%;\r\n  border: 5px solid #181818;\r\n}\r\n#profile-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n#banner-bottom-info[_ngcontent-%COMP%]{\r\n  width: 100vw;\r\n  margin-left: 0vw;\r\n  margin-top: 14vh;\r\n}\r\n#banner-bottom-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  font-family: titles, cursive;\r\n  font-weight: bold;\r\n  font-size: 3rem;\r\n}\r\n#banner-bottom-info[_ngcontent-%COMP%]   q[_ngcontent-%COMP%]{\r\n  font-family: titles, cursive;\r\n  font-size: 1.5rem;\r\n  margin-top: 1vh;\r\n}\r\n#banner-bottom-info[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  margin-top: 3vh;\r\n}\r\n\r\n\r\n#redes[_ngcontent-%COMP%]{\r\n  width: 100vw;\r\n  margin-top: 6vh;\r\n  margin-bottom: 6.3vh;\r\n}\r\n.sociais[_ngcontent-%COMP%]{\r\n  margin: 0vh 1.5vw 0vh 1.5vw;\r\n}\r\n\r\n\r\n#introducao-texto[_ngcontent-%COMP%]{\r\n  width: 100vw;\r\n  margin-bottom: 5vh;\r\n}\r\n#introducao-texto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  width: 48%;\r\n  font-family: texto;\r\n  font-size: 1.3rem;\r\n  line-height: 180%;\r\n  text-align: justify;\r\n  text-justify: inter-word;\r\n}\r\n\r\n\r\n#conhecimentos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  font-family: titles, cursive;\r\n  margin: 4vh 0vw 6vh 0vw;\r\n}\r\n.conhecimentos-logos[_ngcontent-%COMP%]{\r\n  width: 15%;\r\n  height: auto;\r\n  margin-bottom: 10px;\r\n}\r\n#conhecimentos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n  font-family: titles, cursive;\r\n  font-size: 1.875rem;\r\n}\r\n#conhecimentos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  width: 55%;\r\n  font-size: 1.25rem;\r\n  margin-bottom: 3vh;\r\n}\r\n\r\n\r\n#percurso[_ngcontent-%COMP%]{\r\n  width: 100vw;\r\n  font-family: titles, cursive;\r\n  margin: 10vh 0vw 7vh 0vw;\r\n}\r\n#percurso[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  margin: 0vh 0vw 6vh 0vw;\r\n}\r\n.mainbox[_ngcontent-%COMP%]{\r\n  width: 45%;\r\n  overflow: hidden;\r\n  margin-bottom: 3vh;\r\n  padding: 0px;\r\n  background: #444343;\r\n  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;\r\n}\r\n.box-titulo[_ngcontent-%COMP%]{\r\n  width: 20%;\r\n  height: 100%;\r\n  min-width: 20%;\r\n  background: #106573;\r\n  color: white;\r\n  margin: 0px;\r\n  margin: auto 0vw auto 0vw;\r\n  border-right: 10px solid #EFEFEF;\r\n  word-spacing: 100vw;\r\n  text-align: center;\r\n  padding: 1vh 0vw 1vh 0vw;\r\n}\r\n.box-titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n  font-size: 1.875rem;\r\n  margin: 0px;\r\n}\r\n#box-texto[_ngcontent-%COMP%]{\r\n  font-family: texto;\r\n  color: white;\r\n  font-size: 1.2rem;\r\n  margin-left: 10px;\r\n  padding: 0vh 1vw 0vh 1vw;\r\n}\r\n\r\n\r\n@media screen and  (max-width: 769px), screen and (max-height: 700px) {\r\n\r\n  \r\n  #banner[_ngcontent-%COMP%]{\r\n    margin-bottom: 8vh;\r\n    height: 20vh;\r\n    background-position: center;\r\n  }\r\n  #profile-pic[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n    width: 150px;\r\n    bottom: -43%;\r\n  }\r\n  #banner-bottom-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 2.5rem;\r\n  }\r\n  #banner-bottom-info[_ngcontent-%COMP%]   q[_ngcontent-%COMP%]{\r\n    font-size: 1.3rem;\r\n  }\r\n  #banner-bottom-info[_ngcontent-%COMP%]{\r\n    margin-top: 13vh;\r\n  }\r\n  #banner-bottom-info[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n  }\r\n\r\n  \r\n\r\n\r\n  \r\n  #redes[_ngcontent-%COMP%]{\r\n    margin-top: 5vh;\r\n    margin-bottom: 5vh;\r\n  }\r\n  .sociais[_ngcontent-%COMP%]{\r\n    height: auto;\r\n    width: 12%;\r\n    margin: 0vh 5vw 0vh 5vw;\r\n  }\r\n  \r\n\r\n\r\n  \r\n  #introducao-texto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 95%;\r\n    font-size: 1rem;\r\n    text-align: left;\r\n  }\r\n  \r\n\r\n\r\n  \r\n\r\n  #conhecimentos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 2.5rem;\r\n    margin: 2vh 0vw 8vh 0vw;\r\n  }\r\n  .conhecimentos-logos[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n  }\r\n  #conhecimentos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 1.00rem;\r\n    width: 55%;\r\n    margin-bottom: 10vh;\r\n  }\r\n  \r\n\r\n  \r\n  #percurso[_ngcontent-%COMP%]{\r\n    font-family: titles, cursive;\r\n    margin: 3vh 0vw 1vh 0vw;\r\n    width: 100vw;\r\n  }\r\n  #percurso[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 2.5rem;\r\n    margin: -3vh 0vw 6vh 0vw;\r\n  }\r\n  .mainbox[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    flex-direction: column;\r\n  }\r\n  .box-titulo[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    border-right: none;\r\n    border-bottom: 4px solid #EFEFEF;\r\n    word-spacing: normal;\r\n  }\r\n  #box[_ngcontent-%COMP%]{\r\n    margin-bottom: 7vh;\r\n  }\r\n  #box-texto[_ngcontent-%COMP%]{\r\n    padding: 2vh 5px 2vh 5px;\r\n    font-size: 0.8rem;\r\n    height: auto;\r\n    width: 100%;\r\n    margin-left: 0px;\r\n  }\r\n  \r\n}\r\n\r\n@media only screen and (min-device-width: 720px) and (max-device-width: 1280px) and (orientation: landscape) {\r\n  #banner[_ngcontent-%COMP%]{\r\n    width: 100vw;\r\n    height: 40vh;\r\n    margin-bottom: 21vh;\r\n    margin-left: 0vw;\r\n  }\r\n  #profile-pic[_ngcontent-%COMP%]{\r\n    width: 150px;\r\n    height: 150px;\r\n    position: absolute;\r\n    bottom: -45%;\r\n  }\r\n\r\n  #banner-bottom-info[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n  }\r\n\r\n  #redes[_ngcontent-%COMP%]{\r\n    margin-bottom: 10vh;\r\n  }\r\n\r\n  .sociais[_ngcontent-%COMP%]{\r\n    width: auto;\r\n    height: 1%;\r\n  }\r\n\r\n  #introducao-texto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    font-size: 1rem;\r\n  }\r\n\r\n\r\n  .conhecimentos-logos[_ngcontent-%COMP%]{\r\n    width: 10%;\r\n    height: auto;\r\n    margin-bottom: 10px;\r\n  }\r\n  #conhecimentos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 55%;\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  .mainbox[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width:  769.1px) and (max-width: 991.98px){\r\n\r\n  #banner-bottom-info[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\r\n    width: 71%;\r\n  }\r\n\r\n  #introducao-texto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  #conhecimentos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: titles, cursive;\r\n    margin: 0vh 0vw 6vh 0vw;\r\n  }\r\n\r\n  #conhecimentos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    font-family: titles, cursive;\r\n    font-size: 1.6rem;\r\n  }\r\n  #conhecimentos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .conhecimentos-logos[_ngcontent-%COMP%]{\r\n    width: 20%;\r\n  }\r\n\r\n  #percurso[_ngcontent-%COMP%]{\r\n    width: 100vw;\r\n    margin: 5vh 0vw 7vh 0vw;\r\n  }\r\n\r\n  .mainbox[_ngcontent-%COMP%]{\r\n    width: 65%;\r\n  }\r\n\r\n  .box-titulo[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n  }\r\n\r\n  .box-titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  #box-texto[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n  }\r\n}\r\n\r\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\r\n\r\n  #banner[_ngcontent-%COMP%]{\r\n    height: 25vh;\r\n    margin-bottom: 2vh;\r\n  }\r\n  #profile-pic[_ngcontent-%COMP%]{\r\n    bottom: -35%\r\n  }\r\n  #banner-bottom-info[_ngcontent-%COMP%]{\r\n    margin-bottom: 5vh;\r\n  }\r\n  #banner-bottom-info[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n    margin-top: 3vh;\r\n  }\r\n\r\n\r\n  #redes[_ngcontent-%COMP%]{\r\n    margin-bottom: 6vh;\r\n  }\r\n\r\n  #introducao-texto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    width: 59%;\r\n  }\r\n\r\n\r\n  #conhecimentos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-family: titles, cursive;\r\n    margin: 2vh 0vw 6vh 0vw;\r\n    font-size: 2.5rem;\r\n  }\r\n\r\n  .conhecimentos-logos[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    height: auto;\r\n  }\r\n  #conhecimentos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    font-family: titles, cursive;\r\n    font-size: 1.8rem;\r\n  }\r\n  #conhecimentos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 1.0rem;\r\n    width: 90%;\r\n  }\r\n\r\n\r\n  #percurso[_ngcontent-%COMP%]{\r\n    width: 100vw;\r\n    font-family: titles, cursive;\r\n    margin:7vh 0vw 7vh 0vw;\r\n  }\r\n  #percurso[_ngcontent-%COMP%]{\r\n    font-size: 2.5rem;\r\n    margin-bottom: 4vh;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 769px) and (max-width: 1300.98px) {\r\n  #banner[_ngcontent-%COMP%]{\r\n    height: 35vh;\r\n  }\r\n  #profile-pic[_ngcontent-%COMP%]{\r\n    bottom: -27%;\r\n  }\r\n\r\n  #banner-bottom-info[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n  }\r\n\r\n  .sociais[_ngcontent-%COMP%]{\r\n    width: 3.5%;\r\n    height: auto;\r\n    margin: 0vh 1vw 0vh 1vw;\r\n  }\r\n\r\n  #redes[_ngcontent-%COMP%]{\r\n    margin-top: 7vh;\r\n    margin-bottom: 7vh;\r\n  }\r\n\r\n  #introducao-texto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    font-size: 1rem;\r\n\r\n  }\r\n\r\n\r\n  #introducao-texto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    font-size: 1.3rem;\r\n  }\r\n\r\n  .conhecimentos-logos[_ngcontent-%COMP%]{\r\n    width: 25%;\r\n  }\r\n  #conhecimentos[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    font-size: 1.25rem;\r\n    margin-bottom: 3vh;\r\n  }\r\n\r\n\r\n  #percurso[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    margin: 5vh 0vw 7vh 0vw;\r\n  }\r\n  .mainbox[_ngcontent-%COMP%]{\r\n    width: 60%;\r\n  }\r\n  .box-titulo[_ngcontent-%COMP%]{\r\n    width: 10%;\r\n    border-right: 10px solid #EFEFEF;\r\n    border-bottom: none;\r\n  }\r\n  .box-titulo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 1.875rem;\r\n    margin: 0px;\r\n    word-spacing: 100vw;\r\n  }\r\n  #box-texto[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-size: 1rem;\r\n    padding: 0vh 1vw 0vh 1vw;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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O0lBQ0UsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLHdCQUF3QjtFQUMxQjtBQUNGIiwiZmlsZSI6ImFjZXJjYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyojcmVnaW9uIEJhbm5lciovXHJcbiNiYW5uZXJ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMzB2aDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogMHZ3O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvYWJvdXQvYmFubmVyLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG4jcHJvZmlsZS1waWN7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTM1JTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjMTgxODE4O1xyXG59XHJcbiNwcm9maWxlLXBpYyBpbWd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4jYmFubmVyLWJvdHRvbS1pbmZve1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBtYXJnaW4tbGVmdDogMHZ3O1xyXG4gIG1hcmdpbi10b3A6IDE0dmg7XHJcbn1cclxuI2Jhbm5lci1ib3R0b20taW5mbyBoMXtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LWZhbWlseTogdGl0bGVzLCBjdXJzaXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxufVxyXG4jYmFubmVyLWJvdHRvbS1pbmZvIHF7XHJcbiAgZm9udC1mYW1pbHk6IHRpdGxlcywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBtYXJnaW4tdG9wOiAxdmg7XHJcbn1cclxuI2Jhbm5lci1ib3R0b20taW5mbyBocntcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IDN2aDtcclxufVxyXG4vKiNlbmRyZWdpb24gQmFubmVyKi9cclxuXHJcbi8qI3JlZ2lvbiBSZWRlcyBTb2NpYWlzKi9cclxuI3JlZGVze1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBtYXJnaW4tdG9wOiA2dmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNi4zdmg7XHJcbn1cclxuLnNvY2lhaXN7XHJcbiAgbWFyZ2luOiAwdmggMS41dncgMHZoIDEuNXZ3O1xyXG59XHJcbi8qI2VuZHJlZ2lvbiBSZWRlcyBTb2NpYWlzKi9cclxuXHJcbi8qI3JlZ2lvbiBJbnRyb2R1Y2FvKi9cclxuI2ludHJvZHVjYW8tdGV4dG97XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIG1hcmdpbi1ib3R0b206IDV2aDtcclxufVxyXG4jaW50cm9kdWNhby10ZXh0byBwIHtcclxuICB3aWR0aDogNDglO1xyXG4gIGZvbnQtZmFtaWx5OiB0ZXh0bztcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBsaW5lLWhlaWdodDogMTgwJTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHRleHQtanVzdGlmeTogaW50ZXItd29yZDtcclxufVxyXG4vKiNlbmRyZWdpb24gQmFubmVyKi9cclxuXHJcbi8qI3JlZ2lvbiBDb25oZWNpbWVudG9zKi9cclxuI2NvbmhlY2ltZW50b3MgaDF7XHJcbiAgZm9udC1mYW1pbHk6IHRpdGxlcywgY3Vyc2l2ZTtcclxuICBtYXJnaW46IDR2aCAwdncgNnZoIDB2dztcclxufVxyXG4uY29uaGVjaW1lbnRvcy1sb2dvc3tcclxuICB3aWR0aDogMTUlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiNjb25oZWNpbWVudG9zIGg0e1xyXG4gIGZvbnQtZmFtaWx5OiB0aXRsZXMsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcclxufVxyXG4jY29uaGVjaW1lbnRvcyBwe1xyXG4gIHdpZHRoOiA1NSU7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDN2aDtcclxufVxyXG4vKiNlbmRyZWdpb24gQ29uaGVjaW1lbnRvcyovXHJcblxyXG5cclxuLyojcmVnaW9uIFBlcmN1cnNvKi9cclxuI3BlcmN1cnNve1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBmb250LWZhbWlseTogdGl0bGVzLCBjdXJzaXZlO1xyXG4gIG1hcmdpbjogMTB2aCAwdncgN3ZoIDB2dztcclxufVxyXG4jcGVyY3Vyc28gaDF7XHJcbiAgbWFyZ2luOiAwdmggMHZ3IDZ2aCAwdnc7XHJcbn1cclxuLm1haW5ib3h7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDN2aDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogIzQ0NDM0MztcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCAxcHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCAycHggMnB4LCByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCA0cHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCA4cHggOHB4LCByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCAxNnB4IDE2cHg7XHJcbn1cclxuLmJveC10aXR1bG97XHJcbiAgd2lkdGg6IDIwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAyMCU7XHJcbiAgYmFja2dyb3VuZDogIzEwNjU3MztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvIDB2dyBhdXRvIDB2dztcclxuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI0VGRUZFRjtcclxuICB3b3JkLXNwYWNpbmc6IDEwMHZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxdmggMHZ3IDF2aCAwdnc7XHJcbn1cclxuLmJveC10aXR1bG8gaDN7XHJcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4jYm94LXRleHRve1xyXG4gIGZvbnQtZmFtaWx5OiB0ZXh0bztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZzogMHZoIDF2dyAwdmggMXZ3O1xyXG59XHJcbi8qI2VuZHJlZ2lvbiBQZXJjdXJzbyovXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIC8vIEV4dHJhIHNtYWxsIGRldmljZXMgKHBvcnRyYWl0IHBob25lcywgbGVzcyB0aGFuIDU3NnB4KSAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDogNzY5cHgpLCBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3MDBweCkge1xyXG5cclxuICAvKiAjcmVnaW9uIGJhbm5lciAqL1xyXG4gICNiYW5uZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4dmg7XHJcbiAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gICNwcm9maWxlLXBpY3tcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3R0b206IC00MyU7XHJcbiAgfVxyXG4gICNiYW5uZXItYm90dG9tLWluZm8gaDF7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICB9XHJcbiAgI2Jhbm5lci1ib3R0b20taW5mbyBxe1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgfVxyXG4gICNiYW5uZXItYm90dG9tLWluZm97XHJcbiAgICBtYXJnaW4tdG9wOiAxM3ZoO1xyXG4gIH1cclxuICAjYmFubmVyLWJvdHRvbS1pbmZvIGhye1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIC8qICNlbmRyZWdpb24gYmFubmVyICovXHJcblxyXG5cclxuICAvKiAjcmVnaW9uIHJlZGVzICovXHJcbiAgI3JlZGVze1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG4gIH1cclxuICAuc29jaWFpc3tcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMiU7XHJcbiAgICBtYXJnaW46IDB2aCA1dncgMHZoIDV2dztcclxuICB9XHJcbiAgLyojZW5kcmVnaW9uIHJlZGVzKi9cclxuXHJcblxyXG4gIC8qI3JlZ2lvbiBpbnRyb2R1Y2FvKi9cclxuICAjaW50cm9kdWNhby10ZXh0byBwe1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC8qI2VuZHJlZ2lvbiBpbnRyb2R1Y2FvKi9cclxuXHJcblxyXG4gIC8qI3JlZ2lvbiBjb25oZWNpbWVudG9zKi9cclxuXHJcbiAgI2NvbmhlY2ltZW50b3MgaDF7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIG1hcmdpbjogMnZoIDB2dyA4dmggMHZ3O1xyXG4gIH1cclxuICAuY29uaGVjaW1lbnRvcy1sb2dvc3tcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG4gICNjb25oZWNpbWVudG9zIHB7XHJcbiAgICBmb250LXNpemU6IDEuMDByZW07XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcclxuICB9XHJcbiAgLyojZW5kcmVnaW9uIGNvbmhlY2ltZW50b3MqL1xyXG5cclxuICAvKiNyZWdpb24gcGVyY3Vyc28qL1xyXG4gICNwZXJjdXJzb3tcclxuICAgIGZvbnQtZmFtaWx5OiB0aXRsZXMsIGN1cnNpdmU7XHJcbiAgICBtYXJnaW46IDN2aCAwdncgMXZoIDB2dztcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICB9XHJcbiAgI3BlcmN1cnNvIGgxe1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBtYXJnaW46IC0zdmggMHZ3IDZ2aCAwdnc7XHJcbiAgfVxyXG4gIC5tYWluYm94e1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5ib3gtdGl0dWxve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI0VGRUZFRjtcclxuICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xyXG4gIH1cclxuICAjYm94e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3ZoO1xyXG4gIH1cclxuICAjYm94LXRleHRve1xyXG4gICAgcGFkZGluZzogMnZoIDVweCAydmggNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIC8qICNlbmRyZWdpb24gcGVyY3Vyc28gKi9cclxufVxyXG5cclxuLyogKDMyMHg0ODApIFNtYXJ0cGhvbmUsIExhbmRzY2FwZSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3MjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMjgwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICNiYW5uZXJ7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMXZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDB2dztcclxuICB9XHJcbiAgI3Byb2ZpbGUtcGlje1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTQ1JTtcclxuICB9XHJcblxyXG4gICNiYW5uZXItYm90dG9tLWluZm8gaHJ7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcbiAgI3JlZGVze1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTB2aDtcclxuICB9XHJcblxyXG4gIC5zb2NpYWlze1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDElO1xyXG4gIH1cclxuXHJcbiAgI2ludHJvZHVjYW8tdGV4dG8gcHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuXHJcbiAgLmNvbmhlY2ltZW50b3MtbG9nb3N7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgI2NvbmhlY2ltZW50b3MgcHtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG5cclxuICAubWFpbmJveHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyogLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIGxlc3MgdGhhbiA5OTJweCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAgNzY5LjFweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KXtcclxuXHJcbiAgI2Jhbm5lci1ib3R0b20taW5mbyBocntcclxuICAgIHdpZHRoOiA3MSU7XHJcbiAgfVxyXG5cclxuICAjaW50cm9kdWNhby10ZXh0byBwIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAjY29uaGVjaW1lbnRvcyBoMXtcclxuICAgIGZvbnQtZmFtaWx5OiB0aXRsZXMsIGN1cnNpdmU7XHJcbiAgICBtYXJnaW46IDB2aCAwdncgNnZoIDB2dztcclxuICB9XHJcblxyXG4gICNjb25oZWNpbWVudG9zIGg0e1xyXG4gICAgZm9udC1mYW1pbHk6IHRpdGxlcywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIH1cclxuICAjY29uaGVjaW1lbnRvcyBwe1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5jb25oZWNpbWVudG9zLWxvZ29ze1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcblxyXG4gICNwZXJjdXJzb3tcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1hcmdpbjogNXZoIDB2dyA3dmggMHZ3O1xyXG4gIH1cclxuXHJcbiAgLm1haW5ib3h7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gIH1cclxuXHJcbiAgLmJveC10aXR1bG97XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxuXHJcbiAgLmJveC10aXR1bG8gaDN7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gICNib3gtdGV4dG97XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyogKDEwMjR4NzY4KSBpUGFkIDEgJiAyLCBYR0EgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gICNiYW5uZXJ7XHJcbiAgICBoZWlnaHQ6IDI1dmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAydmg7XHJcbiAgfVxyXG4gICNwcm9maWxlLXBpY3tcclxuICAgIGJvdHRvbTogLTM1JVxyXG4gIH1cclxuICAjYmFubmVyLWJvdHRvbS1pbmZve1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXZoO1xyXG4gIH1cclxuICAjYmFubmVyLWJvdHRvbS1pbmZvIGhye1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbi10b3A6IDN2aDtcclxuICB9XHJcblxyXG5cclxuICAjcmVkZXN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2dmg7XHJcbiAgfVxyXG5cclxuICAjaW50cm9kdWNhby10ZXh0byBwIHtcclxuICAgIHdpZHRoOiA1OSU7XHJcbiAgfVxyXG5cclxuXHJcbiAgI2NvbmhlY2ltZW50b3MgaDF7XHJcbiAgICBmb250LWZhbWlseTogdGl0bGVzLCBjdXJzaXZlO1xyXG4gICAgbWFyZ2luOiAydmggMHZ3IDZ2aCAwdnc7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICB9XHJcblxyXG4gIC5jb25oZWNpbWVudG9zLWxvZ29ze1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgI2NvbmhlY2ltZW50b3MgaDR7XHJcbiAgICBmb250LWZhbWlseTogdGl0bGVzLCBjdXJzaXZlO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgfVxyXG4gICNjb25oZWNpbWVudG9zIHB7XHJcbiAgICBmb250LXNpemU6IDEuMHJlbTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuXHJcbiAgI3BlcmN1cnNve1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgZm9udC1mYW1pbHk6IHRpdGxlcywgY3Vyc2l2ZTtcclxuICAgIG1hcmdpbjo3dmggMHZ3IDd2aCAwdnc7XHJcbiAgfVxyXG4gICNwZXJjdXJzb3tcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHZoO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qIC8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCBsZXNzIHRoYW4gMTIwMHB4KSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTMwMC45OHB4KSB7XHJcbiAgI2Jhbm5lcntcclxuICAgIGhlaWdodDogMzV2aDtcclxuICB9XHJcbiAgI3Byb2ZpbGUtcGlje1xyXG4gICAgYm90dG9tOiAtMjclO1xyXG4gIH1cclxuXHJcbiAgI2Jhbm5lci1ib3R0b20taW5mbyBocntcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgfVxyXG5cclxuICAuc29jaWFpc3tcclxuICAgIHdpZHRoOiAzLjUlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwdmggMXZ3IDB2aCAxdnc7XHJcbiAgfVxyXG5cclxuICAjcmVkZXN7XHJcbiAgICBtYXJnaW4tdG9wOiA3dmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3dmg7XHJcbiAgfVxyXG5cclxuICAjaW50cm9kdWNhby10ZXh0byBwIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcblxyXG4gIH1cclxuXHJcblxyXG4gICNpbnRyb2R1Y2FvLXRleHRvIHAge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbmhlY2ltZW50b3MtbG9nb3N7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuICAjY29uaGVjaW1lbnRvcyBwe1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcclxuICB9XHJcblxyXG5cclxuICAjcGVyY3Vyc28gaDF7XHJcbiAgICBtYXJnaW46IDV2aCAwdncgN3ZoIDB2dztcclxuICB9XHJcbiAgLm1haW5ib3h7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuICAuYm94LXRpdHVsb3tcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgI0VGRUZFRjtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG4gIC5ib3gtdGl0dWxvIGgze1xyXG4gICAgZm9udC1zaXplOiAxLjg3NXJlbTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgd29yZC1zcGFjaW5nOiAxMDB2dztcclxuICB9XHJcbiAgI2JveC10ZXh0b3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHBhZGRpbmc6IDB2aCAxdncgMHZoIDF2dztcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "FXX8":
/*!**************************************************!*\
  !*** ./src/app/trabalhos/trabalhos.component.ts ***!
  \**************************************************/
/*! exports provided: TrabalhosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabalhosComponent", function() { return TrabalhosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TrabalhosComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
    }
    //Alterar Background
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('../../assets/trabalhos/background.png')";
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = "cover";
    }
}
TrabalhosComponent.ɵfac = function TrabalhosComponent_Factory(t) { return new (t || TrabalhosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
TrabalhosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrabalhosComponent, selectors: [["app-trabalhos"]], decls: 34, vars: 0, consts: [["id", "ultimos-trabalhos", 1, "container-fluid", "ultimos-trabalhos", "d-flex", "flex-column", "align-items-center"], [1, "row"], [1, "col-md-4", "col-sm-12", "d-flex", "justify-content-center", "flex-wrap"], [1, "card-holder", "d-flex", "flex-column", "align-items-center"], ["src", "../../assets/trabalhos/holdertest.png", "alt", ""], [1, "col-md-4", "col-sm-12", "d-flex", "justify-content-center"]], template: function TrabalhosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ULTIMOS TRABALHOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#background[_ngcontent-%COMP%]{\r\n  height: 100vh;\r\n  width: 100vw;\r\n  position: absolute;\r\n  z-index: -1;\r\n}\r\n#ultimos-trabalhos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-family: titles;\r\n  font-size: 4rem;\r\n  margin: 6vh 0vw 10vh 0vw;\r\n}\r\n.card-holder[_ngcontent-%COMP%]{\r\n  width: 85%;\r\n  background-color: #27272B;\r\n  height: auto;\r\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\r\n  margin-bottom: 8vh;\r\n  transition-duration: 1s;\r\n}\r\n.card-holder[_ngcontent-%COMP%]:hover{\r\n  width: 85%;\r\n  background-color: #27272B;\r\n  height: auto;\r\n  box-shadow: rgba(255, 255, 255, 0.2) 0px 7px 29px 0px;\r\n  margin-bottom: 8vh;\r\n}\r\n.card-holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n  width: 90%;\r\n  height: auto;\r\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\r\n}\r\n.card-holder[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-family: texto;\r\n  text-transform: uppercase;\r\n  font-size: 1.2rem;\r\n  margin-bottom: 3%;\r\n}\r\n#ultimos-trabalhos[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\r\n  width: 80%;\r\n}\r\n@media screen and  (max-width: 769px), screen and (max-height: 700px){\r\n  #ultimos-trabalhos[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n\r\n  .card-holder[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n  }\r\n  .card-holder[_ngcontent-%COMP%]:hover{\r\n    width: 90%;\r\n  }\r\n  #ultimos-trabalhos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-family: titles;\r\n    font-size: 3rem;\r\n    margin: 6vh 0vw 6vh 0vw;\r\n    word-spacing: 100vw;\r\n    text-align: center;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWJhbGhvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG9EQUFvRDtFQUNwRCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxREFBcUQ7RUFDckQsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixZQUFZO0VBQ1osb0RBQW9EO0FBQ3REO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFHQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoidHJhYmFsaG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuI3VsdGltb3MtdHJhYmFsaG9zIGgxe1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogdGl0bGVzO1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBtYXJnaW46IDZ2aCAwdncgMTB2aCAwdnc7XHJcbn1cclxuLmNhcmQtaG9sZGVye1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyQjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpKTtcclxuICBtYXJnaW4tYm90dG9tOiA4dmg7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbn1cclxuLmNhcmQtaG9sZGVyOmhvdmVye1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjcyQjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIDBweCA3cHggMjlweCAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHZoO1xyXG59XHJcblxyXG4uY2FyZC1ob2xkZXIgaW1ne1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XHJcbn1cclxuLmNhcmQtaG9sZGVyIGg0e1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogdGV4dG87XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG5cclxuI3VsdGltb3MtdHJhYmFsaG9zIC5yb3d7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA3NjlweCksIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDcwMHB4KXtcclxuICAjdWx0aW1vcy10cmFiYWxob3MgLnJvd3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtaG9sZGVye1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgLmNhcmQtaG9sZGVyOmhvdmVye1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgI3VsdGltb3MtdHJhYmFsaG9zIGgxe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IHRpdGxlcztcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIG1hcmdpbjogNnZoIDB2dyA2dmggMHZ3O1xyXG4gICAgd29yZC1zcGFjaW5nOiAxMDB2dztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loader/loader.component */ "vPOg");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'Final';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [["id", "loading", 1, "justify-content-center", "align-content-center"], ["id", "content", 1, "h-auto"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["@font-face{\r\n  font-family: signature;\r\n src: url('SurfshirtSignature.ttf');\r\n}\r\n@font-face{\r\n  font-family: titles;\r\n src: url('BebasNeue.ttf');\r\n}\r\n[_ngcontent-%COMP%]:root{\r\n  --mainFontColor: #181818;\r\n}\r\n#content[_ngcontent-%COMP%]{\r\n  padding-left: 0vw;\r\n  display: flex;\r\n  max-width: 100vw;\r\n}\r\n#loading[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100%;\r\n  z-index: 999;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0NBQ3ZCLGtDQUFxRDtBQUN0RDtBQUNBO0VBQ0UsbUJBQW1CO0NBQ3BCLHlCQUF1QztBQUN4QztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtBQUNkIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTogc2lnbmF0dXJlO1xyXG4gc3JjOiB1cmwoLi4vYXNzZXRzL2hvbWVBc3NldHMvU3VyZnNoaXJ0U2lnbmF0dXJlLnR0Zik7XHJcbn1cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTogdGl0bGVzO1xyXG4gc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL0JlYmFzTmV1ZS50dGYpO1xyXG59XHJcblxyXG46cm9vdHtcclxuICAtLW1haW5Gb250Q29sb3I6ICMxODE4MTg7XHJcbn1cclxuXHJcblxyXG4jY29udGVudHtcclxuICBwYWRkaW5nLWxlZnQ6IDB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1heC13aWR0aDogMTAwdnc7XHJcbn1cclxuXHJcbiNsb2FkaW5ne1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDk5OTtcclxufVxyXG4iXX0= */"] });
//chamar loader
window.addEventListener('load', (event) => {
    setTimeout(function () {
        document.getElementById("loading").style.display = "none";
    }, 0);
});


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _trabalhos_trabalhos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trabalhos/trabalhos.component */ "FXX8");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/loader/loader.component */ "vPOg");
/* harmony import */ var _acerca_acerca_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./acerca/acerca.component */ "Ae20");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _trabalhos_trabalhos_component__WEBPACK_IMPORTED_MODULE_5__["TrabalhosComponent"],
        _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"],
        _acerca_acerca_component__WEBPACK_IMPORTED_MODULE_7__["AcercaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/about"]; };
const _c2 = function () { return ["/trabalhos"]; };
class NavbarComponent {
    constructor() {
        this.navIsOpen = false;
    }
    ngOnInit() {
    }
    //Am i dumb? maybe....
    callNav() {
        if (this.navIsOpen == false) {
            this.navIsOpen = true;
            for (let i = 0; i < 3; i++) {
                document.getElementsByClassName("burger-line")[i].classList.remove("close");
                document.getElementsByClassName("burger-line")[i].classList.add("open");
            }
            document.querySelector("nav").classList.add("navUp");
            document.querySelector("nav").classList.remove("navDown");
        }
        else {
            this.navIsOpen = false;
            for (let i = 0; i < 3; i++) {
                document.getElementsByClassName("burger-line")[i].classList.remove("open");
                document.getElementsByClassName("burger-line")[i].classList.add("close");
            }
            document.querySelector("nav").classList.remove("navUp");
            document.querySelector("nav").classList.add("navDown");
        }
    }
    FecharNav() {
        for (let i = 0; i < 3; i++) {
            document.getElementsByClassName("burger-line")[i].classList.remove("open");
            document.getElementsByClassName("burger-line")[i].classList.add("close");
        }
        document.querySelector("nav").classList.remove("navUp");
        document.querySelector("nav").classList.add("navDown");
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 59, vars: 6, consts: [[1, "flex-sm-row", "flex-md-column", "align-items-md-center", "justify-content-md-center", "align-content-center", "justify-content-around"], ["id", "home", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", "routerLinkActive", "active", 1, "navSVG", "atual", 2, "enable-background", "new 0 0 512 512", 3, "routerLink", "click"], ["d", "M506.555,208.064L263.859,30.367c-4.68-3.426-11.038-3.426-15.716,0L5.445,208.064\n        c-5.928,4.341-7.216,12.665-2.875,18.593s12.666,7.214,18.593,2.875L256,57.588l234.837,171.943c2.368,1.735,5.12,2.57,7.848,2.57\n        c4.096,0,8.138-1.885,10.744-5.445C513.771,220.729,512.483,212.405,506.555,208.064z"], ["d", "M442.246,232.543c-7.346,0-13.303,5.956-13.303,13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52\n        s-66.52,29.842-66.52,66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303,5.956-13.303,13.303v225.053\n        c0,7.347,5.957,13.303,13.303,13.303h133.029c6.996,0,12.721-5.405,13.251-12.267c0.032-0.311,0.052-0.651,0.052-1.036v-128.89\n        c0-22.009,17.905-39.914,39.914-39.914s39.914,17.906,39.914,39.914v128.89c0,0.383,0.02,0.717,0.052,1.024\n        c0.524,6.867,6.251,12.279,13.251,12.279h133.029c7.347,0,13.303-5.956,13.303-13.303V245.847\n        C455.549,238.499,449.593,232.543,442.246,232.543z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "35", "height", "22.814", "viewBox", "0 0 35 22.814", "routerLinkActive", "active", 1, "navSVG", 3, "routerLink", "click"], ["id", "id-card", "transform", "translate(0 0)"], ["id", "Grupo_225", "data-name", "Grupo 225", "transform", "translate(0 0)"], ["id", "Grupo_224", "data-name", "Grupo 224"], ["id", "Caminho_10", "data-name", "Caminho 10", "d", "M32.771,89.13H2.229A2.232,2.232,0,0,0,0,91.359v18.356a2.232,2.232,0,0,0,2.229,2.229H32.771A2.232,2.232,0,0,0,35,109.715V91.359A2.232,2.232,0,0,0,32.771,89.13Zm.743,20.585a.744.744,0,0,1-.743.743H2.229a.744.744,0,0,1-.743-.743V91.359a.744.744,0,0,1,.743-.743H32.771a.744.744,0,0,1,.743.743Z", "transform", "translate(0 -89.13)", "fill", "#fff"], ["id", "Grupo_227", "data-name", "Grupo 227", "transform", "translate(20.137 6.52)"], ["id", "Grupo_226", "data-name", "Grupo 226"], ["id", "Caminho_11", "data-name", "Caminho 11", "d", "M303.289,184.506h-7.975a.743.743,0,0,0,0,1.486h7.975a.743.743,0,1,0,0-1.486Z", "transform", "translate(-294.571 -184.506)", "fill", "#fff"], ["id", "Grupo_229", "data-name", "Grupo 229", "transform", "translate(20.137 10.664)"], ["id", "Grupo_228", "data-name", "Grupo 228"], ["id", "Caminho_12", "data-name", "Caminho 12", "d", "M303.289,245.129h-7.975a.743.743,0,0,0,0,1.486h7.975a.743.743,0,1,0,0-1.486Z", "transform", "translate(-294.571 -245.129)", "fill", "#fff"], ["id", "Grupo_231", "data-name", "Grupo 231", "transform", "translate(20.137 14.808)"], ["id", "Grupo_230", "data-name", "Grupo 230"], ["id", "Caminho_13", "data-name", "Caminho 13", "d", "M303.289,305.752h-7.975a.743.743,0,0,0,0,1.486h7.975a.743.743,0,1,0,0-1.486Z", "transform", "translate(-294.571 -305.752)", "fill", "#fff"], ["id", "Grupo_233", "data-name", "Grupo 233", "transform", "translate(3.856 3.228)"], ["id", "Grupo_232", "data-name", "Grupo 232"], ["id", "Caminho_14", "data-name", "Caminho 14", "d", "M66.281,146.873a1.765,1.765,0,0,1-1.742-1.416,4.262,4.262,0,0,0,1.211-1.582c.022,0,.044,0,.066,0a.669.669,0,0,0,.528-.258,4.53,4.53,0,0,0,.914-2.93,3.919,3.919,0,0,0-3.576-4.056c-.053,0-.1,0-.138,0h0a3.394,3.394,0,0,0-1.473-.282,3.68,3.68,0,0,0-2.814,1.519,5.385,5.385,0,0,0-.967,3.9,5.34,5.34,0,0,0,.431,1.5.669.669,0,0,0,.568.39.66.66,0,0,0,.2-.018,4.371,4.371,0,0,0,1.313,1.81,1.769,1.769,0,0,1-1.743,1.419,2.73,2.73,0,0,0-2.637,2.725v2.708a.669.669,0,0,0,.669.669H68.25a.669.669,0,0,0,.669-.669V149.6A2.73,2.73,0,0,0,66.281,146.873ZM59.62,141.65l-.009-.062a3.908,3.908,0,0,1-.037-.439,3.833,3.833,0,0,1,.741-2.46,2.369,2.369,0,0,1,1.8-1,1.9,1.9,0,0,1,1.007.223.6.6,0,0,0,.318.07l.224-.01a2.633,2.633,0,0,1,2.261,2.761,3.559,3.559,0,0,1-.02.513,3.971,3.971,0,0,0-1.883-1.677.669.669,0,0,0-.886.385,2.879,2.879,0,0,1-.186.4,1.016,1.016,0,0,1-.938.487c-.08,0-.161,0-.241,0a3.58,3.58,0,0,0-1.139.223A3.618,3.618,0,0,0,59.62,141.65Zm.932.971a2.68,2.68,0,0,1,.545-.3,2.351,2.351,0,0,1,.863-.138,2.353,2.353,0,0,0,2.086-1.061,2.789,2.789,0,0,1,.82,1.031c-.207,1.5-1.141,2.643-2.2,2.643C61.719,144.8,60.87,143.9,60.552,142.62Zm1.47,3.438a2.8,2.8,0,0,0,.643.075,2.844,2.844,0,0,0,.647-.075,3.077,3.077,0,0,0,1.262,1.657,2.028,2.028,0,0,1-3.813,0A3.077,3.077,0,0,0,62.022,146.058Zm-4.269,5.579V149.6a1.391,1.391,0,0,1,1.39-1.39c.015,0,.259-.014.364-.028a3.366,3.366,0,0,0,6.321,0c.1.014.348.028.364.028a1.391,1.391,0,0,1,1.39,1.39v2.039Z", "transform", "translate(-56.415 -136.354)", "fill", "#fff"], ["id", "trabalhos", "xmlns", "http://www.w3.org/2000/svg", "width", "35", "height", "27.221", "viewBox", "0 0 35 27.221", "routerLinkActive", "active", 1, "navSVG", 3, "routerLink", "click"], ["id", "inbox", "transform", "translate(-2 -29)"], ["id", "Grupo_235", "data-name", "Grupo 235", "transform", "translate(14.585 48.856)"], ["id", "Grupo_234", "data-name", "Grupo 234"], ["id", "Caminho_15", "data-name", "Caminho 15", "d", "M192.879,332.734H185.16a1.056,1.056,0,0,0-1.055,1.055v2.368a1.056,1.056,0,0,0,1.055,1.055h7.719a1.056,1.056,0,0,0,1.055-1.055v-2.368A1.056,1.056,0,0,0,192.879,332.734Zm-.3,3.121h-7.116v-1.765h7.116Z", "transform", "translate(-184.105 -332.734)", "fill", "#fff"], ["id", "Grupo_237", "data-name", "Grupo 237", "transform", "translate(2 29)"], ["id", "Grupo_236", "data-name", "Grupo 236"], ["id", "Caminho_16", "data-name", "Caminho 16", "d", "M34.657,69.894l.011-.005L29.581,59.833a2.39,2.39,0,0,0-2.143-1.318h-.967V57.58a.678.678,0,0,0-.678-.678H9.207a.678.678,0,0,0-.678.678v.935H7.562a2.39,2.39,0,0,0-2.143,1.318L.333,69.889l.011.005A2.361,2.361,0,0,0,0,71.123V81.747a2.378,2.378,0,0,0,2.376,2.376H32.624A2.378,2.378,0,0,0,35,81.747V71.123A2.361,2.361,0,0,0,34.657,69.894Zm-8.185-9.872h.967a.89.89,0,0,1,.8.491L32.4,68.748H29.569V66.214a.678.678,0,0,0-.678-.678h-.839V61.9a.678.678,0,0,0-.678-.678h-.9Zm1.741,6.87v1.856H24.633a1.567,1.567,0,0,0-1.426.922l-.977,2.168a.057.057,0,0,1-.052.034H12.823a.057.057,0,0,1-.052-.034l-.977-2.168a1.567,1.567,0,0,0-1.426-.922H6.787V66.892ZM9.885,58.259h15.23v2.96H9.885ZM26.7,62.575v2.96H8.3v-2.96ZM6.764,60.513a.89.89,0,0,1,.8-.491h.967v1.2h-.9a.678.678,0,0,0-.678.678v3.639H6.109a.678.678,0,0,0-.678.678v2.534H2.6Zm25.861,22.1H2.376a.869.869,0,0,1-.868-.868V71.123a.869.869,0,0,1,.868-.868h7.991a.058.058,0,0,1,.052.034l.977,2.168a1.567,1.567,0,0,0,1.426.922h9.355a1.567,1.567,0,0,0,1.426-.921l.977-2.168h0a.057.057,0,0,1,.052-.034h7.991a.869.869,0,0,1,.868.868V81.747h0A.869.869,0,0,1,32.624,82.615Z", "transform", "translate(0 -56.902)", "fill", "#fff"], ["id", "contactar", "xmlns", "http://www.w3.org/2000/svg", "width", "35", "height", "32.247", "viewBox", "0 0 35 32.247", "routerLinkActive", "active", 1, "navSVG", 3, "click"], ["id", "Grupo_240", "data-name", "Grupo 240", "transform", "translate(0 11.07)"], ["id", "Grupo_239", "data-name", "Grupo 239"], ["id", "Caminho_18", "data-name", "Caminho 18", "d", "M34.976,183.647a1.573,1.573,0,0,0-1.573-1.571h0l-31.829.044A1.573,1.573,0,0,0,0,183.695l.025,17.987A1.575,1.575,0,0,0,1.6,203.253h0l31.829-.044A1.573,1.573,0,0,0,35,201.634Zm-3.3,0L17.5,193.5,3.3,183.69Zm-8.264,11.431,8.453,6.556-28.748.04,8.5-6.6a.786.786,0,1,0-.964-1.243L1.6,200.864l-.023-16.455,15.482,10.7a.787.787,0,0,0,.9,0L33.4,184.365l.024,16.5-9.053-7.022a.787.787,0,0,0-.964,1.243Z", "transform", "translate(-0.001 -182.076)", "fill", "#fff"], ["id", "Grupo_242", "data-name", "Grupo 242", "transform", "translate(13.511 0)"], ["id", "Grupo_241", "data-name", "Grupo 241"], ["id", "Caminho_19", "data-name", "Caminho 19", "d", "M205.365,23.026,202.5,20.47a1.3,1.3,0,0,0-1.731,0l-2.861,2.556a.787.787,0,0,0,1.048,1.173l1.892-1.69v6.062a.786.786,0,1,0,1.573,0V22.509l1.892,1.69a.787.787,0,0,0,1.048-1.173Z", "transform", "translate(-197.65 -20.14)", "fill", "#fff"], ["id", "hamburger", "viewBox", "0 0 100 80", "width", "40", "height", "40", 1, "navSVG", 3, "click"], ["width", "100", "height", "20", 1, "close", "burger-line"], ["y", "30", "width", "100", "height", "20", 1, "close", "burger-line"], ["y", "60", "width", "100", "height", "20", 1, "close", "burger-line"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template__svg_svg_click_1_listener() { return ctx.FecharNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template__svg_svg_click_23_listener() { return ctx.FecharNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "g", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "g", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template__svg_svg_click_40_listener() { return ctx.FecharNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "g", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "g", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "g", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "g", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template__svg_svg_click_48_listener() { return ctx.FecharNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "g", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "g", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "svg", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template__svg_svg_click_55_listener() { return ctx.callNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "rect", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "rect", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "rect", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["*[_ngcontent-%COMP%]{\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]{\r\n  width: 4%;\r\n  height: 100vh;\r\n  background-color: #18181860;\r\n  position: fixed;\r\n  left: 0;\r\n  transition-duration: 1s;\r\n  z-index: 998;\r\n  display: flex;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]:hover{\r\n\r\n  background-color: #181818;\r\n\r\n}\r\n\r\nsvg[_ngcontent-%COMP%]{\r\n  margin: 3vh 0vw 3vh 0vw;\r\n  width: 45%;\r\n  height: auto;\r\n  cursor: crosshair;\r\n}\r\n\r\npath[_ngcontent-%COMP%]{\r\n  fill: white;\r\n}\r\n\r\n.active[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{\r\n  fill: #0d92a7;\r\n}\r\n\r\n#hamburger[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.navUp[_ngcontent-%COMP%]{\r\n  bottom: 0;\r\n}\r\n\r\n.navDown[_ngcontent-%COMP%]{\r\n  bottom: 0;\r\n}\r\n\r\n@media screen and  (max-width: 769px), screen and (max-height: 700px) {\r\n  nav[_ngcontent-%COMP%]{\r\n    bottom:-30vh;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 10%;\r\n    transition-duration: 0.5s;\r\n    background: rgba( 255, 255, 255, 0.55 );\r\n    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );\r\n    backdrop-filter: blur( 12.0px );\r\n    -webkit-backdrop-filter: blur( 12.0px );\r\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\r\n    border-top-right-radius: 20px;\r\n    border-top-left-radius: 20px;\r\n  }\r\n  svg[_ngcontent-%COMP%]{\r\n    margin: auto 0vw auto 0vw;\r\n    width: 9%;\r\n    height: auto;\r\n    cursor: crosshair;\r\n  }\r\n  path[_ngcontent-%COMP%]{\r\n    fill: #6b6767;\r\n  }\r\n\r\n  #hamburger[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    right: left;\r\n    display: block;\r\n    margin: 1vh 0vh 0vh 1vh;\r\n    width: auto;\r\n    height: 4%;\r\n    z-index: 999;\r\n    fill: #0d92a778;\r\n  }\r\n\r\n  .close[_ngcontent-%COMP%]{\r\n    transition-duration: 1s;\r\n    transform: rotate(0deg);\r\n  }\r\n  .open[_ngcontent-%COMP%]{\r\n    transition-duration: 1s;\r\n  }\r\n\r\n  .navUp[_ngcontent-%COMP%]{\r\n    bottom: 0;\r\n  }\r\n  .navDown[_ngcontent-%COMP%]{\r\n    bottom: -10%;\r\n  }\r\n\r\n  .open[_ngcontent-%COMP%]:nth-child(1){\r\n    transform: skewY(45deg);\r\n  }\r\n  .open[_ngcontent-%COMP%]:nth-child(2){\r\n    transform: scaleX(-1)  rotate(45deg);\r\n    opacity: 0;\r\n  }\r\n  .open[_ngcontent-%COMP%]:nth-child(3){\r\n    transform: skewY(-45deg);\r\n  }\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsT0FBTztFQUNQLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUNBOztFQUVFLHlCQUF5Qjs7QUFFM0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsdUNBQXVDO0lBQ3ZDLGtEQUFrRDtJQUNsRCwrQkFBK0I7SUFDL0IsdUNBQXVDO0lBQ3ZDLDZDQUE2QztJQUM3Qyw2QkFBNkI7SUFDN0IsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsU0FBUztJQUNULFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLG9DQUFvQztJQUNwQyxVQUFVO0VBQ1o7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjs7O0FBR0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5uYXZ7XHJcbiAgd2lkdGg6IDQlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODYwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gIHotaW5kZXg6IDk5ODtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbm5hdjpob3ZlcntcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxODtcclxuXHJcbn1cclxuXHJcbnN2Z3tcclxuICBtYXJnaW46IDN2aCAwdncgM3ZoIDB2dztcclxuICB3aWR0aDogNDUlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBjdXJzb3I6IGNyb3NzaGFpcjtcclxufVxyXG5cclxucGF0aHtcclxuICBmaWxsOiB3aGl0ZTtcclxufVxyXG5cclxuLmFjdGl2ZSBwYXRoe1xyXG4gIGZpbGw6ICMwZDkyYTc7XHJcbn1cclxuXHJcbiNoYW1idXJnZXJ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm5hdlVwe1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG4ubmF2RG93bntcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOiA3NjlweCksIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDcwMHB4KSB7XHJcbiAgbmF2e1xyXG4gICAgYm90dG9tOi0zMHZoO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuNTUgKTtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKCAzMSwgMzgsIDEzNSwgMC4zNyApO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCAxMi4wcHggKTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCAxMi4wcHggKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIDI1NSwgMjU1LCAyNTUsIDAuMTggKTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgc3Zne1xyXG4gICAgbWFyZ2luOiBhdXRvIDB2dyBhdXRvIDB2dztcclxuICAgIHdpZHRoOiA5JTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xyXG4gIH1cclxuICBwYXRoe1xyXG4gICAgZmlsbDogIzZiNjc2NztcclxuICB9XHJcblxyXG4gICNoYW1idXJnZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxdmggMHZoIDB2aCAxdmg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogNCU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBmaWxsOiAjMGQ5MmE3Nzg7XHJcbiAgfVxyXG5cclxuICAuY2xvc2V7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAub3BlbntcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gIH1cclxuXHJcbiAgLm5hdlVwe1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuICAubmF2RG93bntcclxuICAgIGJvdHRvbTogLTEwJTtcclxuICB9XHJcblxyXG4gIC5vcGVuOm50aC1jaGlsZCgxKXtcclxuICAgIHRyYW5zZm9ybTogc2tld1koNDVkZWcpO1xyXG4gIH1cclxuICAub3BlbjpudGgtY2hpbGQoMil7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSkgIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAub3BlbjpudGgtY2hpbGQoMyl7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdZKC00NWRlZyk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "vPOg":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 3, vars: 0, consts: [["id", "loader-section", 1, "d-flex", "flex-column", "align-content-center", "justify-content-center"], ["id", "loading-signature", 1, "pulsate-fwd", "text-center"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Flavio Costa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#loader-section[_ngcontent-%COMP%]{\r\n  width: 100vw;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  background-color: #181818;\r\n}\r\n#loading-signature[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  font-family: signature;\r\n  color: #12c3df;\r\n  font-size: 100px;\r\n}\r\n.pulsate-fwd[_ngcontent-%COMP%]{animation:pulsate-fwd .5s ease-in-out infinite both}\r\n@keyframes pulsate-fwd{0%{transform:scale(1)}50%{transform:scale(1.1)}100%{transform:scale(1)}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFFQSxhQUFhLG1EQUFtRDtBQUNoRSx1QkFBdUIsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLG9CQUFvQixDQUFDLEtBQUssa0JBQWtCLENBQUMiLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9hZGVyLXNlY3Rpb257XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODE4O1xyXG59XHJcbiNsb2FkaW5nLXNpZ25hdHVyZXtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LWZhbWlseTogc2lnbmF0dXJlO1xyXG4gIGNvbG9yOiAjMTJjM2RmO1xyXG4gIGZvbnQtc2l6ZTogMTAwcHg7XHJcbn1cclxuXHJcbi5wdWxzYXRlLWZ3ZHthbmltYXRpb246cHVsc2F0ZS1md2QgLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGh9XHJcbkBrZXlmcmFtZXMgcHVsc2F0ZS1md2R7MCV7dHJhbnNmb3JtOnNjYWxlKDEpfTUwJXt0cmFuc2Zvcm06c2NhbGUoMS4xKX0xMDAle3RyYW5zZm9ybTpzY2FsZSgxKX19XHJcbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _acerca_acerca_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acerca/acerca.component */ "Ae20");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _trabalhos_trabalhos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trabalhos/trabalhos.component */ "FXX8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "trabalhos", component: _trabalhos_trabalhos_component__WEBPACK_IMPORTED_MODULE_3__["TrabalhosComponent"] },
    { path: "about", component: _acerca_acerca_component__WEBPACK_IMPORTED_MODULE_1__["AcercaComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map