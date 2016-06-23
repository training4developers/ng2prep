import { provideRouter, RouterConfig } from '@angular/router';

import { ColorList } from './components/color-list.ts';
import { ColorForm } from './components/color-form.ts';

export const routes: RouterConfig = [
	{ path: '', component: ColorList },
	{ path: 'add', component: ColorForm }
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];
