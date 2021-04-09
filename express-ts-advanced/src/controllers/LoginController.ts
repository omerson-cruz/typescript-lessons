import {Router, Request, Response, NextFunction} from 'express';
// import { get } from './decorators/routes';
// import { controller } from './decorators/controller'

// import { get, controller} from './decorators/index'
import { get, controller, use, bodyValidator, post} from './decorators'  // shorter syntax


function logger(req: Request, res: Response, next: NextFunction) {
	console.log('Request was made!! haha!')
	next()
}

@controller('/auth') // this will be the root route
class LoginController {
	// @get('/')  // this will not work anymore due to the PropertyDescriptor is now limited to RequestHandler (req, res, next)
	// add(a: number, b: number): number {
	// 	return a + b;
	// }



	@get('/login')
	@use(logger)
	getLogin(req: Request, res: Response) {
		res.send(`
			<form method="POST">
				<div>
					<label>Email</label>
					<input name="email"/>
				</div>
				<div>
					<label>Password</label>
					<input name="password" type="password"/>
				</div>

				<button>Submit</button>
			</form>
		`)
	}

	@post('/login')
	@bodyValidator('email', 'password')
	postLogin(req: Request, res: Response) {
		const { email, password } = req.body;

		if (email && password && email === 'test' && password === 'password') {
			// mark the person as logged in
			req.session = { loggedIn: true}

			// redirect them to root route
			res.redirect('/')
		} else {
			res.send('Invalid email or password')
		}
	}

	@get('/logout')
	getLogout(req: Request, res: Response) {
		console.log('calling logout')
		req.session = undefined;
		res.redirect('/')
	}

}