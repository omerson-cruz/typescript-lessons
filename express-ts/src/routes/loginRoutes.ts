import {Router, Request, Response, NextFunction} from 'express';


interface RequestWithBody extends Request {
	// this means that body has some "keys" that are string and it has value of string type as well
	body: { [key: string]: string | undefined}
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
	if(req.session && req.session.loggedIn) {
		 next();
		 return;
	}
	res.status(403);
	res.send('Not permitted')
}


const router = Router();

router.get('/login', (req: Request, res: Response, next) => {
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
})

router.post('/login', (req: RequestWithBody, res: Response) => {
	const { email, password } = req.body;

	if (email && password && email === 'test' && password === 'password') {
		// mark the person as logged in
		req.session = { loggedIn: true}

		// redirect them to root route
		res.redirect('/')
	} else {
		res.send('Invalid email or password')
	}
})

router.get('/', (req: Request, res: Response) => {  // in order to redirect to root route of "loginRoutes" we need to define it here or else it will go to the index's root route if tyou try to "res.redirect('/')"
	if(req.session && req.session.loggedIn){
		res.send(`<div><div>You are logged in</div><a href="/logout">Logout</a></div>
		`)
	} else {
		res.send(`
		<div>
			<div>
				You are not logged in
			</div>
			<a href="/login">Login</a>
		</div>
	`)
	}
})

router.get('/logout', (req: Request, res: Response) => {
	req.session = undefined;
	res.redirect('/')
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
	res.send('Welcome to protected route, logged in user')
})

export { router }