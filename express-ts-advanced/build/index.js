"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
/// importing Class Router with decorator
// import { router as controllerRouter } from './controllers/decorators/controller'
// Now we are using the Singleton AppRouter so no need to import { router as controllerRouter }
var AppRouter_1 = require("./AppRouter");
require("./controllers/RootController");
require("./controllers/LoginController");
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['myKey'] }));
// app.use(router);  // deprecating this because we are already using the Typescript based / class based routing
// app.use(controllerRouter) // we are now using a singleton Router
app.use(AppRouter_1.AppRouter.getInstance());
app.get('/', function (req, res) {
    res.send("\n\t\t<div>\n\t\t\t<h1>Hello from index.ts</h1>\n\t\t</div>\n\t");
});
app.listen(5000, function () {
    console.log('Listening on Port ' + 5000);
});
//# sourceMappingURL=index.js.map