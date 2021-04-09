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
// import { get } from './decorators/routes';
// import { controller } from './decorators/controller'
// import { get, controller} from './decorators/index'
var decorators_1 = require("./decorators"); // shorter syntax
function logger(req, res, next) {
    console.log('Request was made!! haha!');
    next();
}
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.add = function (a, b) {
        return a + b;
    };
    LoginController.prototype.getLogin = function (req, res) {
        res.send("\n\t\t\t<form method=\"POST\">\n\t\t\t\t<div>\n\t\t\t\t\t<label>Email</label>\n\t\t\t\t\t<input name=\"email\"/>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<label>Password</label>\n\t\t\t\t\t<input name=\"password\" type=\"password\"/>\n\t\t\t\t</div>\n\n\t\t\t\t<button>Submit</button>\n\t\t\t</form>\n\t\t");
    };
    LoginController.prototype.postLogin = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (email && password && email === 'test' && password === 'password') {
            // mark the person as logged in
            req.session = { loggedIn: true };
            // redirect them to root route
            res.redirect('/');
        }
        else {
            res.send('Invalid email or password');
        }
    };
    LoginController.prototype.getLogout = function (req, res) {
        console.log('calling logout');
        req.session = undefined;
        res.redirect('/');
    };
    __decorate([
        decorators_1.get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", Number)
    ], LoginController.prototype, "add", null);
    __decorate([
        decorators_1.get('/login'),
        decorators_1.use(logger),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogin", null);
    __decorate([
        decorators_1.post('/login'),
        decorators_1.bodyValidator('email', 'password'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "postLogin", null);
    __decorate([
        decorators_1.get('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogout", null);
    LoginController = __decorate([
        decorators_1.controller('/auth') // this will be the root route
    ], LoginController);
    return LoginController;
}());
//# sourceMappingURL=LoginController.js.map