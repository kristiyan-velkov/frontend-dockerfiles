import 'zone.js/node';
import '@angular/platform-server/init';
import { render } from '@analogjs/router/server';

import App from './app/app-root.ag';
import { config } from './app/app.config.server';

export default render(App, config);
