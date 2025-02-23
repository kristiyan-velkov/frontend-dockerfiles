import { x as signal, f as __defineComponent, y as __elementStart, j as __element, z as __elementEnd, B as __text, c as __listener, C as __advance, E as __textInterpolate1, F as ChangeDetectionStrategy } from "../main.server.js";
import "rxjs";
import "rxjs/operators";
import "h3";
const _IndexAnalogComponent = class _IndexAnalogComponent {
  constructor() {
    this.count = signal(0);
    this.count;
    function increment() {
      this.count.update((count2) => count2 + 1);
    }
    this.increment = increment.bind(this);
  }
};
_IndexAnalogComponent.ɵfac = function IndexAnalogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IndexAnalogComponent)();
};
_IndexAnalogComponent.ɵcmp = /* @__PURE__ */ __defineComponent({ type: _IndexAnalogComponent, selectors: [["index"], ["Index"]], decls: 19, vars: 1, consts: [["href", "https://analogjs.org/", "target", "_blank"], ["alt", "Analog Logo", "src", "/analog.svg", 1, "logo", "analog"], [1, "card"], ["type", "button", 3, "click"], [1, "read-the-docs"], ["href", "https://analogjs.org", "target", "_blank"], ["href", "https://github.com/analogjs/analog", "target", "_blank"], ["href", "https://github.com/sponsors/brandonroberts", "target", "_blank"]], template: function IndexAnalogComponent_Template(rf, ctx) {
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
export {
  IndexAnalogComponent as default
};
