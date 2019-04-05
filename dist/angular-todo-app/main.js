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
/* harmony import */ var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/todo/todo.component */ "./src/app/components/todo/todo.component.ts");
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/about/about.component */ "./src/app/components/pages/about/about.component.ts");





var routes = [
    { path: '', component: _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"] },
    { path: 'about', component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] }
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-header></app-header>\n    <router-outlet></router-outlet>\n\n</div>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-todo-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/todo/todo.component */ "./src/app/components/todo/todo.component.ts");
/* harmony import */ var _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/todo-item/todo-item.component */ "./src/app/components/todo-item/todo-item.component.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-todo/add-todo.component */ "./src/app/components/add-todo/add-todo.component.ts");
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/about/about.component */ "./src/app/components/pages/about/about.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_7__["TodoComponent"],
                _components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_8__["TodoItemComponent"],
                _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_10__["AddTodoComponent"],
                _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-todo/add-todo.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-todo/add-todo.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  display: flex;\n}\n\n.form input [type='text'] {\n  flex: 10;\n  padding: 5px;\n  height:20px;\n}\n\n.form input [type='submit'] {\n  flex: 2;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdG9kby9hZGQtdG9kby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxPQUFPO0FBQ1QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC10b2RvL2FkZC10b2RvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mb3JtIGlucHV0IFt0eXBlPSd0ZXh0J10ge1xuICBmbGV4OiAxMDtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6MjBweDtcbn1cblxuLmZvcm0gaW5wdXQgW3R5cGU9J3N1Ym1pdCddIHtcbiAgZmxleDogMjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/add-todo/add-todo.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-todo/add-todo.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" (ngSubmit)=\"onSubmit()\">\n  <input type=\"text\" name=\"title\" [(ngModel)]=\"title\" placeholder=\"Add Todo...\">\n  <input type=\"submit\" value=\"Submit\" class=\"btn\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/add-todo/add-todo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-todo/add-todo.component.ts ***!
  \***********************************************************/
/*! exports provided: AddTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoComponent", function() { return AddTodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddTodoComponent = /** @class */ (function () {
    function AddTodoComponent() {
        this.addTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddTodoComponent.prototype.ngOnInit = function () {
    };
    AddTodoComponent.prototype.onSubmit = function () {
        var todo = {
            title: this.title,
            completed: false
        };
        this.addTodo.emit(todo);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddTodoComponent.prototype, "addTodo", void 0);
    AddTodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-todo',
            template: __webpack_require__(/*! ./add-todo.component.html */ "./src/app/components/add-todo/add-todo.component.html"),
            styles: [__webpack_require__(/*! ./add-todo.component.css */ "./src/app/components/add-todo/add-todo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddTodoComponent);
    return AddTodoComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background:#333;\n  color:#fff;\n  text-align:center;\n  padding:10px;\n}\n\n.header a {\n  color:#fff;\n  text-decoration:none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiMzMzM7XG4gIGNvbG9yOiNmZmY7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBwYWRkaW5nOjEwcHg7XG59XG5cbi5oZWFkZXIgYSB7XG4gIGNvbG9yOiNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <h1>TodoList</h1>\n  <nav>\n    <a routerLink=\"/\">Home</a> | <a routerLink=\"/about\">About</a>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/layout/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/about/about.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/pages/about/about.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/pages/about/about.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/pages/about/about.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>About</h1>\n  <p>This is the TodoList app v1.0.0(a).</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/pages/about/about.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/about/about.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/pages/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/todo-item/todo-item.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/todo-item/todo-item.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".del{\n  background: #ff0000;\n  color:#fff;\n  border:none;\n  padding:5px 9px;\n  border-radius:50%;\n  cursor:pointer;\n  float:right;\n}\n\n.todo {\n  background: #f4f4f4;\n  padding:10px;\n  border-bottom:1px #ccc dotted;\n}\n\n.is-complete {\n  text-decoration: line-through;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWl0ZW0vdG9kby1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1pdGVtL3RvZG8taXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbHtcbiAgYmFja2dyb3VuZDogI2ZmMDAwMDtcbiAgY29sb3I6I2ZmZjtcbiAgYm9yZGVyOm5vbmU7XG4gIHBhZGRpbmc6NXB4IDlweDtcbiAgYm9yZGVyLXJhZGl1czo1MCU7XG4gIGN1cnNvcjpwb2ludGVyO1xuICBmbG9hdDpyaWdodDtcbn1cblxuLnRvZG8ge1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICBwYWRkaW5nOjEwcHg7XG4gIGJvcmRlci1ib3R0b206MXB4ICNjY2MgZG90dGVkO1xufVxuXG4uaXMtY29tcGxldGUge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/todo-item/todo-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-item/todo-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"setClasses()\">\n<p>\n  <input (change)=\"onToggle(todo)\" type=\"checkbox\" />\n  {{ todo.title }}\n  <button (click)=\"onDelete(todo)\" class=\"del\">X</button>\n</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/todo-item/todo-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-item/todo-item.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/todo.service */ "./src/app/service/todo.service.ts");
/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Todo */ "./src/app/models/Todo.ts");




var TodoItemComponent = /** @class */ (function () {
    function TodoItemComponent(todoService) {
        this.todoService = todoService;
        this.deleteTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TodoItemComponent.prototype.ngOnInit = function () {
    };
    // Set Dynamic Classes
    TodoItemComponent.prototype.setClasses = function () {
        var classes = {
            todo: true,
            'is-complete': this.todo.completed
        };
        return classes;
    };
    TodoItemComponent.prototype.onToggle = function (todo) {
        // Toggle in UI
        todo.completed = !todo.completed;
        // Toggle on server
        this.todoService.toggleCompleted(todo).subscribe(function (todo) {
            console.log(todo);
        });
    };
    TodoItemComponent.prototype.onDelete = function (todo) {
        this.deleteTodo.emit(todo);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_Todo__WEBPACK_IMPORTED_MODULE_3__["Todo"])
    ], TodoItemComponent.prototype, "todo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TodoItemComponent.prototype, "deleteTodo", void 0);
    TodoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-item',
            template: __webpack_require__(/*! ./todo-item.component.html */ "./src/app/components/todo-item/todo-item.component.html"),
            styles: [__webpack_require__(/*! ./todo-item.component.css */ "./src/app/components/todo-item/todo-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], TodoItemComponent);
    return TodoItemComponent;
}());



/***/ }),

/***/ "./src/app/components/todo/todo.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/todo/todo.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby90b2RvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/todo/todo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/todo/todo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-add-todo (addTodo)=\"addTodo($event)\"></app-add-todo>\n<app-todo-item\n*ngFor=\"let todo of todos\"\n[todo]=\"todo\"\n(deleteTodo)=\"deleteTodo($event)\">\n</app-todo-item>\n"

/***/ }),

/***/ "./src/app/components/todo/todo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/todo/todo.component.ts ***!
  \***************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/todo.service */ "./src/app/service/todo.service.ts");



var TodoComponent = /** @class */ (function () {
    function TodoComponent(todoService) {
        this.todoService = todoService;
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.getTodos().subscribe(function (todos) {
            _this.todos = todos;
        });
    };
    TodoComponent.prototype.deleteTodo = function (todo) {
        // Remove From UI
        this.todos = this.todos.filter(function (t) { return t.id !== todo.id; });
        // Remove from server
        this.todoService.deleteTodo(todo).subscribe();
    };
    TodoComponent.prototype.addTodo = function (todo) {
        var _this = this;
        this.todoService.addTodo(todo).subscribe(function (todo) {
            _this.todos.push(todo);
        });
    };
    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/components/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/components/todo/todo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/models/Todo.ts":
/*!********************************!*\
  !*** ./src/app/models/Todo.ts ***!
  \********************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo() {
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/service/todo.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/todo.service.ts ***!
  \*****************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.todosUrl = 'https://jsonplaceholder.typicode.com/todos';
        this.todosLimit = '?_limit=10';
    }
    // Get Todos
    TodoService.prototype.getTodos = function () {
        return this.http.get("" + this.todosUrl + this.todosLimit);
    };
    // Delete Todo
    TodoService.prototype.deleteTodo = function (todo) {
        // Remove from UI
        var url = this.todosUrl + "/" + todo.id;
        // Remove from server
        return this.http.delete(url, httpOptions);
    };
    // Add Todo
    TodoService.prototype.addTodo = function (todo) {
        return this.http.post(this.todosUrl, todo, httpOptions);
    };
    // Toggle Completed
    TodoService.prototype.toggleCompleted = function (todo) {
        var url = this.todosUrl + "/" + todo.id;
        return this.http.put(url, todo, httpOptions);
    };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodoService);
    return TodoService;
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

module.exports = __webpack_require__(/*! /Users/ericzhou/Documents/EricZhou/CS/angular-todo-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map