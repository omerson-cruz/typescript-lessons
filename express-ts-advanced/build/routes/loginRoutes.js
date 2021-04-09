"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res, next) {
    res.send("\n\t\t<form method=\"POST\">\n\t\t\t<div>\n\t\t\t\t<label>Email</label>\n\t\t\t\t<input name=\"email\"/>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<label>Password</label>\n\t\t\t\t<input name=\"password\" type=\"password\"/>\n\t\t\t</div>\n\n\t\t\t<button>Submit</button>\n\t\t</form>\n\t");
});
router.post('/login', function (req, res) {
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
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("<div><div>You are logged in</div><a href=\"/logout\">Logout</a></div>\n\t\t");
    }
    else {
        res.send("\n\t\t<div>\n\t\t\t<div>\n\t\t\t\tYou are not logged in\n\t\t\t</div>\n\t\t\t<a href=\"/login\">Login</a>\n\t\t</div>\n\t");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route, logged in user');
});
//# sourceMappingURL=loginRoutes.js.map