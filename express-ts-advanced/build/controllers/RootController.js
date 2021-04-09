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
var index_1 = require("./decorators/index");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.getRoot = function (req, res) {
        if (req.session && req.session.loggedIn) {
            res.send("<div>\n\t\t\t\t<div>You are logged in</div><a href=\"/auth/logout\">Logout</a>\n\t\t\t</div>\n\t\t\t");
        }
        else {
            res.send("\n\t\t\t<div>\n\t\t\t\t<div>\n\t\t\t\t\tYou are not logged in\n\t\t\t\t</div>\n\t\t\t\t<a href=\"/auth/login\">Login</a>\n\t\t\t</div>\n\t\t");
        }
    };
    RootController.prototype.getProtected = function (req, res) {
        res.send('Welcome to protected route, logged in user');
    };
    __decorate([
        index_1.get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getRoot", null);
    __decorate([
        index_1.get('/protected'),
        index_1.use(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getProtected", null);
    RootController = __decorate([
        index_1.controller('') // don't do this ==> @controller('/') it will end up in double slash //
    ], RootController);
    return RootController;
}());
//# sourceMappingURL=RootController.js.map