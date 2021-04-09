import { Request, Response, NextFunction, RequestHandler } from "express";
import { get, post, controller, use } from "./decorators/index";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
	if(req.session && req.session.loggedIn) {
		 next();
		 return;
	}
	res.status(403);
	res.send('Not permitted')
}



@controller('') // don't do this ==> @controller('/') it will end up in double slash //
class RootController {
	@get('/')
	getRoot(req: Request, res: Response) {  // in order to redirect to root route of "loginRoutes" we need to define it here or else it will go to the index's root route if tyou try to "res.redirect('/')"
		if(req.session && req.session.loggedIn){
			res.send(`<div>
				<div>You are logged in</div><a href="/auth/logout">Logout</a>
			</div>
			`)
		} else {
			res.send(`
			<div>
				<div>
					You are not logged in
				</div>
				<a href="/auth/login">Login</a>
			</div>
		`)
		}
	}

	@get('/protected')
	@use(requireAuth)
	getProtected(req: Request, res: Response) {
		res.send('Welcome to protected route, logged in user')
	}
}