import { c as __defineComponent, x as __elementStart, e as __element, y as __elementEnd, z as __text, a as __listener, B as __advance, C as __textInterpolate1, E as ChangeDetectionStrategy, F as signal } from './renderer.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'rxjs';
import 'rxjs/operators';
import '../raw/index.mjs';

const _IndexAnalogComponent = class _IndexAnalogComponent2 {
  constructor() {
    this.count = signal(0);
    this.count;
    function increment() {
      this.count.update((count2) => count2 + 1);
    }
    this.increment = increment.bind(this);
  }
};
_IndexAnalogComponent.\u0275fac = function IndexAnalogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IndexAnalogComponent)();
};
_IndexAnalogComponent.\u0275cmp = /* @__PURE__ */ __defineComponent({ type: _IndexAnalogComponent, selectors: [["index"], ["Index"]], decls: 19, vars: 1, consts: [["href", "https://analogjs.org/", "target", "_blank"], ["alt", "Analog Logo", "src", "/analog.svg", 1, "logo", "analog"], [1, "card"], ["type", "button", 3, "click"], [1, "read-the-docs"], ["href", "https://analogjs.org", "target", "_blank"], ["href", "https://github.com/analogjs/analog", "target", "_blank"], ["href", "https://github.com/sponsors/brandonroberts", "target", "_blank"]], template: function IndexAnalogComponent_Template(rf, ctx) {
  if (rf & 1) {
    __elementStart(0, "div")(1, "a", 0);
    __element(2, "img", 1);
    __elementEnd()();
    __elementStart(3, "h2");
    __text(4, "Analog");
    __elementEnd();
    __elementStart(5, "h3");
    __text(6, "The fullstack meta-framework for Angular!");
    __elementEnd();
    __elementStart(7, "div", 2)(8, "button", 3);
    __listener("click", function IndexAnalogComponent_Template_button_click_8_listener() {
      return ctx.increment();
    });
    __text(9);
    __elementEnd()();
    __elementStart(10, "p", 4)(11, "a", 5);
    __text(12, "Docs");
    __elementEnd();
    __text(13, " | ");
    __elementStart(14, "a", 6);
    __text(15, "GitHub");
    __elementEnd();
    __text(16, " | ");
    __elementStart(17, "a", 7);
    __text(18, " Sponsor ");
    __elementEnd()();
  }
  if (rf & 2) {
    __advance(9);
    __textInterpolate1("Count ", ctx.count(), "");
  }
}, styles: [".logo[_ngcontent-%COMP%] {    will-change: filter;  }  .logo[_ngcontent-%COMP%]:hover {    filter: drop-shadow(0 0 2em #646cffaa);  }  .read-the-docs[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {    color: #fff;  }  @media (prefers-color-scheme: light) {    .read-the-docs[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {      color: #213547;    }  }"], changeDetection: ChangeDetectionStrategy.OnPush });
let IndexAnalogComponent = _IndexAnalogComponent;

export { IndexAnalogComponent as default };
//# sourceMappingURL=index.page-CaOVJCHx.mjs.map
