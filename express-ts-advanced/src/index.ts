import express, { Request, Response} from 'express';
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session';
import { router } from './routes/loginRoutes'
/// importing Class Router with decorator
// import { router as controllerRouter } from './controllers/decorators/controller'

// Now we are using the Singleton AppRouter so no need to import { router as controllerRouter }
import { AppRouter } from './AppRouter'

import './controllers/RootController'

import './controllers/LoginController'

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieSession({keys: ['myKey']}))
// app.use(router);  // deprecating this because we are already using the Typescript based / class based routing

// app.use(controllerRouter) // we are now using a singleton Router
app.use(AppRouter.getInstance())

app.get('/', (req : Request, res: Response) => {
	res.send(`
		<div>
			<h1>Hello from index.ts</h1>
		</div>
	`)
})

app.listen(5000, () => {
	console.log('Listening on Port ' + 5000)
})