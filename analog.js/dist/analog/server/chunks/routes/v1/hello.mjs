import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';

const hello = defineEventHandler(() => ({ message: "Hello World" }));

export { hello as default };
//# sourceMappingURL=hello.mjs.map
