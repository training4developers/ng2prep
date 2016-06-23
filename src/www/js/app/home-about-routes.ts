import { provideRouter, RouterConfig } from '@angular/router';
import { Home } from './components/home.ts';
import { About } from './components/about.ts';

export const routes: RouterConfig = [
	{ path: '', component: Home },
	{ path: 'about/:id', component: About }
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];
