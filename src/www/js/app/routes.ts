import { provideRouter, RouterConfig } from '@angular/router';

// import { ColorList } from './components/color-list.ts';
// import { ColorForm } from './components/color-form.ts';

import { CarTableView } from './components/car-table-view.ts';
import { CarFormView } from './components/car-form-view.ts';

export const routes: RouterConfig = [
	{ path: '', component: CarTableView },
	{ path: 'edit/:id', component: CarFormView }
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];
