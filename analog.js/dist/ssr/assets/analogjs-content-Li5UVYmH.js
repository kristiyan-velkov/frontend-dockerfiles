var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
import { a as assertInInjectionContext, i as inject, D as DestroyRef, I as InjectionToken, A as ActivatedRoute, T as TransferState, m as makeStateKey, b as DOCUMENT, L as Location, R as Router, ɵ as __defineDirective, c as __listener, d as __defineInjectable, e as DomSanitizer, f as __defineComponent, h as __HostDirectivesFeature, j as __element, k as __classMap, l as __property, N as NgZone, P as PLATFORM_ID, n as isPlatformBrowser, o as __viewQuery, p as __queryRefresh, q as __loadQuery, r as __NgOnChangesFeature, s as __pipe, t as __pipeBind1, u as AsyncPipe, v as PendingTasksInternal, w as __sanitizeHtml, V as ViewContainerRef } from "../main.server.js";
import { Observable, of, from, isObservable, firstValueFrom } from "rxjs";
import { takeUntil, map, switchMap, tap, filter, mergeMap, catchError } from "rxjs/operators";
import fm from "front-matter";
import { getHeadingList, gfmHeadingId } from "marked-gfm-heading-id";
import { marked } from "marked";
import { mangle } from "marked-mangle";
import "h3";
/**
 * @license Angular v19.1.7
 * (c) 2010-2024 Google LLC. https://angular.io/
 * License: MIT
 */
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    assertInInjectionContext();
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((observer) => {
    const unregisterFn = destroyRef.onDestroy(observer.next.bind(observer));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}
const _c0 = ["container"];
let AnchorNavigationDirective = /* @__PURE__ */ (() => {
  let AnchorNavigationDirective2 = /* @__PURE__ */ (() => {
    const _AnchorNavigationDirective3 = class _AnchorNavigationDirective3 {
      constructor() {
        this.document = inject(DOCUMENT);
        this.location = inject(Location);
        this.router = inject(Router);
      }
      handleNavigation(element) {
        if (element instanceof HTMLAnchorElement && isInternalUrl(element, this.document) && hasTargetSelf(element) && !hasDownloadAttribute(element)) {
          const {
            pathname,
            search,
            hash
          } = element;
          const url = this.location.normalize(`${pathname}${search}${hash}`);
          this.router.navigateByUrl(url);
          return false;
        }
        return true;
      }
    };
    _AnchorNavigationDirective3.ɵfac = function AnchorNavigationDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnchorNavigationDirective3)();
    };
    _AnchorNavigationDirective3.ɵdir = /* @__PURE__ */ __defineDirective({
      type: _AnchorNavigationDirective3,
      selectors: [["", "analogAnchorNavigation", ""]],
      hostBindings: function AnchorNavigationDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          __listener("click", function AnchorNavigationDirective_click_HostBindingHandler($event) {
            return ctx.handleNavigation($event.target);
          });
        }
      }
    });
    let AnchorNavigationDirective3 = _AnchorNavigationDirective3;
    return AnchorNavigationDirective3;
  })();
  return AnchorNavigationDirective2;
})();
function hasDownloadAttribute(anchorElement) {
  return anchorElement.getAttribute("download") !== null;
}
function hasTargetSelf(anchorElement) {
  return !anchorElement.target || anchorElement.target === "_self";
}
function isInternalUrl(anchorElement, document) {
  return anchorElement.host === document.location.host && anchorElement.protocol === document.location.protocol;
}
const getContentFilesList = () => {
  let ANALOG_CONTENT_FILE_LIST = {};
  return ANALOG_CONTENT_FILE_LIST;
};
const getContentFiles = () => {
  let ANALOG_CONTENT_ROUTE_FILES = {};
  return ANALOG_CONTENT_ROUTE_FILES;
};
const getAgxFiles = () => {
  let ANALOG_AGX_FILES = {};
  return ANALOG_AGX_FILES;
};
function getSlug(filename) {
  const parts = filename.match(/^(\\|\/)(.+(\\|\/))*(.+)\.(.+)$/);
  return parts?.length ? parts[4] : "";
}
const CONTENT_FILES_LIST_TOKEN = new InjectionToken("@analogjs/content Content Files List", {
  providedIn: "root",
  factory() {
    const contentFiles = getContentFilesList();
    return Object.keys(contentFiles).map((filename) => {
      const attributes = contentFiles[filename];
      const slug = attributes["slug"];
      return {
        filename,
        attributes,
        slug: slug ? encodeURI(slug) : encodeURI(getSlug(filename))
      };
    });
  }
});
const CONTENT_FILES_TOKEN = new InjectionToken("@analogjs/content Content Files", {
  providedIn: "root",
  factory() {
    const contentFiles = getContentFiles();
    const agxFiles = getAgxFiles();
    const allFiles = {
      ...contentFiles,
      ...agxFiles
    };
    const contentFilesList = inject(CONTENT_FILES_LIST_TOKEN);
    const lookup = {};
    contentFilesList.forEach((item) => {
      const fileParts = item.filename.split("/");
      const filePath = fileParts.slice(0, fileParts.length - 1).join("/");
      const fileNameParts = fileParts[fileParts.length - 1].split(".");
      lookup[item.filename] = `${filePath}/${item.slug}.${fileNameParts[fileNameParts.length - 1]}`;
    });
    const objectUsingSlugAttribute = {};
    Object.entries(allFiles).forEach((entry) => {
      const filename = entry[0];
      const value = entry[1];
      const newFilename = lookup[filename];
      if (newFilename !== void 0) {
        const objectFilename = newFilename.replace(/^\/(.*?)\/content/, "/src/content");
        objectUsingSlugAttribute[objectFilename] = value;
      }
    });
    return objectUsingSlugAttribute;
  }
});
function parseRawContentFile(rawContentFile) {
  const {
    body,
    attributes
  } = fm(rawContentFile);
  return {
    content: body,
    attributes
  };
}
async function waitFor(prom) {
  if (isObservable(prom)) {
    prom = firstValueFrom(prom);
  }
  if (typeof Zone === "undefined") {
    return prom;
  }
  const macroTask = Zone.current.scheduleMacroTask(`AnalogContentResolve-${Math.random()}`, () => {
  }, {}, () => {
  });
  return prom.then((p) => {
    macroTask.invoke();
    return p;
  });
}
let RenderTaskService = /* @__PURE__ */ (() => {
  let RenderTaskService2 = /* @__PURE__ */ (() => {
    var _pendingTasks;
    const _RenderTaskService3 = class _RenderTaskService3 {
      constructor() {
        __privateAdd(this, _pendingTasks, inject(PendingTasksInternal));
      }
      addRenderTask() {
        return __privateGet(this, _pendingTasks).add();
      }
      clearRenderTask(clear) {
        if (typeof clear === "function") {
          clear();
        } else if (typeof __privateGet(this, _pendingTasks).remove === "function") {
          __privateGet(this, _pendingTasks).remove(clear);
        }
      }
    };
    _pendingTasks = new WeakMap();
    _RenderTaskService3.ɵfac = function RenderTaskService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RenderTaskService3)();
    };
    _RenderTaskService3.ɵprov = /* @__PURE__ */ __defineInjectable({
      token: _RenderTaskService3,
      factory: _RenderTaskService3.ɵfac
    });
    let RenderTaskService3 = _RenderTaskService3;
    return RenderTaskService3;
  })();
  return RenderTaskService2;
})();
function getContentFile(contentFiles, prefix, slug, fallback, renderTaskService) {
  const filePath = `/src/content/${prefix}${slug}`;
  const contentFile = contentFiles[`${filePath}.md`] ?? contentFiles[`${filePath}.agx`];
  if (!contentFile) {
    return of({
      filename: filePath,
      attributes: {},
      slug: "",
      content: fallback
    });
  }
  const contentTask = renderTaskService.addRenderTask();
  return new Observable((observer) => {
    const contentResolver = contentFile();
    {
      waitFor(contentResolver).then((content) => {
        observer.next(content);
        observer.complete();
        setTimeout(() => renderTaskService.clearRenderTask(contentTask), 10);
      });
    }
  }).pipe(map((contentFile2) => {
    if (typeof contentFile2 === "string") {
      const {
        content,
        attributes
      } = parseRawContentFile(contentFile2);
      return {
        filename: filePath,
        slug,
        attributes,
        content
      };
    }
    return {
      filename: filePath,
      slug,
      attributes: contentFile2.metadata,
      content: contentFile2.default
    };
  }));
}
function injectContent(param = "slug", fallback = "No Content Found") {
  const contentFiles = inject(CONTENT_FILES_TOKEN);
  const renderTaskService = inject(RenderTaskService);
  const task = renderTaskService.addRenderTask();
  if (typeof param === "string" || "param" in param) {
    const prefix = typeof param === "string" ? "" : `${param.subdirectory}/`;
    const route = inject(ActivatedRoute);
    const paramKey = typeof param === "string" ? param : param.param;
    return route.paramMap.pipe(map((params) => params.get(paramKey)), switchMap((slug) => {
      if (slug) {
        return getContentFile(contentFiles, prefix, slug, fallback, renderTaskService);
      }
      return of({
        filename: "",
        slug: "",
        attributes: {},
        content: fallback
      });
    }), tap(() => renderTaskService.clearRenderTask(task)));
  } else {
    return getContentFile(contentFiles, "", param.customFilename, fallback, renderTaskService).pipe(tap(() => renderTaskService.clearRenderTask(task)));
  }
}
let ContentRenderer = /* @__PURE__ */ (() => {
  let ContentRenderer2 = /* @__PURE__ */ (() => {
    const _ContentRenderer3 = class _ContentRenderer3 {
      async render(content) {
        return content;
      }
      getContentHeadings() {
        return [];
      }
      // eslint-disable-next-line
      enhance() {
      }
    };
    _ContentRenderer3.ɵfac = function ContentRenderer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContentRenderer3)();
    };
    _ContentRenderer3.ɵprov = /* @__PURE__ */ __defineInjectable({
      token: _ContentRenderer3,
      factory: _ContentRenderer3.ɵfac
    });
    let ContentRenderer3 = _ContentRenderer3;
    return ContentRenderer3;
  })();
  return ContentRenderer2;
})();
class NoopContentRenderer {
  constructor() {
    this.transferState = inject(TransferState);
    this.contentId = 0;
  }
  /**
   * Generates a hash from the content string
   * to be used with the transfer state
   */
  generateHash(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
      let chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return hash;
  }
  async render(content) {
    this.contentId = this.generateHash(content);
    return content;
  }
  enhance() {
  }
  getContentHeadings() {
    const key = makeStateKey(`content-headings-${this.contentId}`);
    {
      const headings = getHeadingList();
      this.transferState.set(key, headings);
      return headings;
    }
  }
}
function injectContentFiles(filterFn) {
  const renderTaskService = inject(RenderTaskService);
  const task = renderTaskService.addRenderTask();
  const allContentFiles = inject(CONTENT_FILES_LIST_TOKEN);
  renderTaskService.clearRenderTask(task);
  if (filterFn) {
    const filteredContentFiles = allContentFiles.filter(filterFn);
    return filteredContentFiles;
  }
  return allContentFiles;
}
let MarkedContentHighlighter = /* @__PURE__ */ (() => {
  let MarkedContentHighlighter2 = /* @__PURE__ */ (() => {
    const _MarkedContentHighlighter3 = class _MarkedContentHighlighter3 {
    };
    _MarkedContentHighlighter3.ɵfac = function MarkedContentHighlighter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MarkedContentHighlighter3)();
    };
    _MarkedContentHighlighter3.ɵprov = /* @__PURE__ */ __defineInjectable({
      token: _MarkedContentHighlighter3,
      factory: _MarkedContentHighlighter3.ɵfac
    });
    let MarkedContentHighlighter3 = _MarkedContentHighlighter3;
    return MarkedContentHighlighter3;
  })();
  return MarkedContentHighlighter2;
})();
function withHighlighter(provider) {
  return {
    provide: MarkedContentHighlighter,
    ...provider
  };
}
let MarkedSetupService = /* @__PURE__ */ (() => {
  let MarkedSetupService2 = /* @__PURE__ */ (() => {
    const _MarkedSetupService3 = class _MarkedSetupService3 {
      constructor() {
        this.highlighter = inject(MarkedContentHighlighter, {
          optional: true
        });
        const renderer = new marked.Renderer();
        renderer.code = (code, lang) => {
          if (lang === "mermaid") {
            return '<pre class="mermaid">' + code + "</pre>";
          }
          if (!lang) {
            return "<pre><code>" + code + "</code></pre>";
          }
          if (this.highlighter?.augmentCodeBlock) {
            return this.highlighter?.augmentCodeBlock(code, lang);
          }
          return `<pre class="language-${lang}"><code class="language-${lang}">${code}</code></pre>`;
        };
        const extensions = [gfmHeadingId(), mangle()];
        if (this.highlighter) {
          extensions.push(this.highlighter.getHighlightExtension());
        }
        marked.use(...extensions, {
          renderer,
          pedantic: false,
          gfm: true,
          breaks: false,
          mangle: false
        });
        this.marked = marked;
      }
      getMarkedInstance() {
        return this.marked;
      }
    };
    _MarkedSetupService3.ɵfac = function MarkedSetupService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MarkedSetupService3)();
    };
    _MarkedSetupService3.ɵprov = /* @__PURE__ */ __defineInjectable({
      token: _MarkedSetupService3,
      factory: _MarkedSetupService3.ɵfac
    });
    let MarkedSetupService3 = _MarkedSetupService3;
    return MarkedSetupService3;
  })();
  return MarkedSetupService2;
})();
let MarkdownContentRendererService = /* @__PURE__ */ (() => {
  let MarkdownContentRendererService2 = /* @__PURE__ */ (() => {
    var _marked;
    const _MarkdownContentRendererService3 = class _MarkdownContentRendererService3 {
      constructor() {
        __privateAdd(this, _marked, inject(MarkedSetupService, {
          self: true
        }));
      }
      async render(content) {
        return __privateGet(this, _marked).getMarkedInstance().parse(content);
      }
      /**
       * The method is meant to be called after `render()`
       */
      getContentHeadings() {
        return getHeadingList();
      }
      // eslint-disable-next-line
      enhance() {
      }
    };
    _marked = new WeakMap();
    _MarkdownContentRendererService3.ɵfac = function MarkdownContentRendererService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MarkdownContentRendererService3)();
    };
    _MarkdownContentRendererService3.ɵprov = /* @__PURE__ */ __defineInjectable({
      token: _MarkdownContentRendererService3,
      factory: _MarkdownContentRendererService3.ɵfac
    });
    let MarkdownContentRendererService3 = _MarkdownContentRendererService3;
    return MarkdownContentRendererService3;
  })();
  return MarkdownContentRendererService2;
})();
const CONTENT_RENDERER_PROVIDERS = [{
  provide: ContentRenderer,
  useClass: NoopContentRenderer
}];
function withMarkdownRenderer(options) {
  return [CONTENT_RENDERER_PROVIDERS, options?.loadMermaid ? [{
    provide: MERMAID_IMPORT_TOKEN,
    useFactory: options.loadMermaid
  }] : []];
}
function provideContent(...features) {
  return [{
    provide: RenderTaskService,
    useClass: RenderTaskService
  }, ...features];
}
const MERMAID_IMPORT_TOKEN = new InjectionToken("mermaid_import");
let AnalogMarkdownRouteComponent = /* @__PURE__ */ (() => {
  let AnalogMarkdownRouteComponent2 = /* @__PURE__ */ (() => {
    const _AnalogMarkdownRouteComponent3 = class _AnalogMarkdownRouteComponent3 {
      constructor() {
        this.sanitizer = inject(DomSanitizer);
        this.route = inject(ActivatedRoute);
        this.contentRenderer = inject(ContentRenderer);
        this.content = this.sanitizer.bypassSecurityTrustHtml(this.route.snapshot.data["renderedAnalogContent"]);
        this.classes = "analog-markdown-route";
      }
      ngAfterViewChecked() {
        this.contentRenderer.enhance();
      }
    };
    _AnalogMarkdownRouteComponent3.ɵfac = function AnalogMarkdownRouteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnalogMarkdownRouteComponent3)();
    };
    _AnalogMarkdownRouteComponent3.ɵcmp = /* @__PURE__ */ __defineComponent({
      type: _AnalogMarkdownRouteComponent3,
      selectors: [["analog-markdown-route"]],
      inputs: {
        classes: "classes"
      },
      features: [__HostDirectivesFeature([AnchorNavigationDirective])],
      decls: 1,
      vars: 3,
      consts: [[3, "innerHTML"]],
      template: function AnalogMarkdownRouteComponent_Template(rf, ctx) {
        if (rf & 1) {
          __element(0, "div", 0);
        }
        if (rf & 2) {
          __classMap(ctx.classes);
          __property("innerHTML", ctx.content, __sanitizeHtml);
        }
      },
      encapsulation: 2
    });
    let AnalogMarkdownRouteComponent3 = _AnalogMarkdownRouteComponent3;
    return AnalogMarkdownRouteComponent3;
  })();
  return AnalogMarkdownRouteComponent2;
})();
let AnalogMarkdownComponent = /* @__PURE__ */ (() => {
  let AnalogMarkdownComponent2 = /* @__PURE__ */ (() => {
    const _AnalogMarkdownComponent3 = class _AnalogMarkdownComponent3 {
      constructor() {
        this.sanitizer = inject(DomSanitizer);
        this.route = inject(ActivatedRoute);
        this.zone = inject(NgZone);
        this.platformId = inject(PLATFORM_ID);
        this.mermaidImport = inject(MERMAID_IMPORT_TOKEN, {
          optional: true
        });
        this.content$ = this.getContentSource();
        this.classes = "analog-markdown";
        this.contentRenderer = inject(ContentRenderer);
        if (isPlatformBrowser(this.platformId) && this.mermaidImport) {
          this.loadMermaid(this.mermaidImport);
        }
      }
      ngOnInit() {
        this.updateContent();
      }
      ngOnChanges() {
        this.updateContent();
      }
      updateContent() {
        if (this.content && typeof this.content !== "string") {
          this.container.clear();
          const componentRef = this.container.createComponent(this.content);
          componentRef.changeDetectorRef.detectChanges();
        } else {
          this.content$ = this.getContentSource();
        }
      }
      getContentSource() {
        return this.route.data.pipe(map((data) => this.content ?? data["_analogContent"]), filter((content) => typeof content === "string"), mergeMap((contentString) => this.renderContent(contentString)), map((content) => this.sanitizer.bypassSecurityTrustHtml(content)), catchError((e) => of(`There was an error ${e}`)));
      }
      async renderContent(content) {
        return this.contentRenderer.render(content);
      }
      ngAfterViewChecked() {
        this.contentRenderer.enhance();
        this.zone.runOutsideAngular(() => this.mermaid?.default.run());
      }
      loadMermaid(mermaidImport) {
        this.zone.runOutsideAngular(() => (
          // Wrap into an observable to avoid redundant initialization once
          // the markdown component is destroyed before the promise is resolved.
          from(mermaidImport).pipe(takeUntilDestroyed()).subscribe((mermaid) => {
            this.mermaid = mermaid;
            this.mermaid.default.initialize({
              startOnLoad: false
            });
            this.mermaid?.default.run();
          })
        ));
      }
    };
    _AnalogMarkdownComponent3.ɵfac = function AnalogMarkdownComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnalogMarkdownComponent3)();
    };
    _AnalogMarkdownComponent3.ɵcmp = /* @__PURE__ */ __defineComponent({
      type: _AnalogMarkdownComponent3,
      selectors: [["analog-markdown"]],
      viewQuery: function AnalogMarkdownComponent_Query(rf, ctx) {
        if (rf & 1) {
          __viewQuery(_c0, 7, ViewContainerRef);
        }
        if (rf & 2) {
          let _t;
          __queryRefresh(_t = __loadQuery()) && (ctx.container = _t.first);
        }
      },
      inputs: {
        content: "content",
        classes: "classes"
      },
      features: [__HostDirectivesFeature([AnchorNavigationDirective]), __NgOnChangesFeature],
      decls: 3,
      vars: 5,
      consts: [["container", ""], [3, "innerHTML"]],
      template: function AnalogMarkdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          __element(0, "div", 1, 0);
          __pipe(2, "async");
        }
        if (rf & 2) {
          __classMap(ctx.classes);
          __property("innerHTML", __pipeBind1(2, 3, ctx.content$), __sanitizeHtml);
        }
      },
      dependencies: [AsyncPipe],
      encapsulation: 2
    });
    let AnalogMarkdownComponent3 = _AnalogMarkdownComponent3;
    return AnalogMarkdownComponent3;
  })();
  return AnalogMarkdownComponent2;
})();
export {
  AnchorNavigationDirective,
  ContentRenderer,
  MERMAID_IMPORT_TOKEN,
  AnalogMarkdownComponent as MarkdownComponent,
  MarkdownContentRendererService,
  AnalogMarkdownRouteComponent as MarkdownRouteComponent,
  MarkedContentHighlighter,
  MarkedSetupService,
  NoopContentRenderer,
  injectContent,
  injectContentFiles,
  parseRawContentFile,
  provideContent,
  withHighlighter,
  withMarkdownRenderer
};
