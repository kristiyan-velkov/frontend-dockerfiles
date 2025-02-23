import { eventHandler } from 'file:///Users/kristiyanvelkov/Kristiyan/Projects/Private/frontend-dockerfiles/analog.js/node_modules/h3/dist/index.mjs';
import renderer$1 from 'file:///Users/kristiyanvelkov/Kristiyan/Projects/Private/frontend-dockerfiles/analog.js/dist/ssr/main.server.js';

// ROLLUP_NO_REPLACE 
 const template = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>analog-project</title>\n    <base href=\"/\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <link rel=\"icon\" type=\"image/x-icon\" href=\"/favicon.ico\" />\n    <script type=\"module\" crossorigin src=\"/assets/index-DlC0ESYl.js\"></script>\n    <link rel=\"stylesheet\" crossorigin href=\"/assets/index-CbkQJmri.css\">\n  </head>\n  <body>\n    <app-root></app-root>\n    <script type=\"text/javascript\" id=\"ng-event-dispatch-contract\">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();\n</script>\n  </body>\n</html>\n";

const renderer = eventHandler(async (event) => {
  const html = await renderer$1(event.node.req.url, template, {
    req: event.node.req,
    res: event.node.res,
  });
  return html;
});

export { renderer as default };
//# sourceMappingURL=renderer.mjs.map
