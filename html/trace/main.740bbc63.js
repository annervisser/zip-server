var Ld = Object.defineProperty;
var Pd = (e, t, n) => t in e ? Ld(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n;
var $e = (e, t, n) => (Pd(e, typeof t != "symbol" ? t + "" : t, n), n);
const Dd = function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const l of i) if (l.type === "childList") for (const o of l.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {childList: !0, subtree: !0});

    function n(i) {
        const l = {};
        return i.integrity && (l.integrity = i.integrity), i.referrerpolicy && (l.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? l.credentials = "include" : i.crossorigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const l = n(i);
        fetch(i.href, l)
    }
};
Dd();
var A = {exports: {}}, H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Er = Symbol.for("react.element"), Id = Symbol.for("react.portal"), Ad = Symbol.for("react.fragment"),
    zd = Symbol.for("react.strict_mode"), Bd = Symbol.for("react.profiler"), Ud = Symbol.for("react.provider"),
    Fd = Symbol.for("react.context"), $d = Symbol.for("react.forward_ref"), Hd = Symbol.for("react.suspense"),
    Vd = Symbol.for("react.memo"), jd = Symbol.for("react.lazy"), Ts = Symbol.iterator;

function Wd(e) {
    return e === null || typeof e != "object" ? null : (e = Ts && e[Ts] || e["@@iterator"], typeof e == "function" ? e : null)
}

var ba = {
    isMounted: function () {
        return !1
    }, enqueueForceUpdate: function () {
    }, enqueueReplaceState: function () {
    }, enqueueSetState: function () {
    }
}, eu = Object.assign, tu = {};

function Rn(e, t, n) {
    this.props = e, this.context = t, this.refs = tu, this.updater = n || ba
}

Rn.prototype.isReactComponent = {};
Rn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Rn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function nu() {
}

nu.prototype = Rn.prototype;

function To(e, t, n) {
    this.props = e, this.context = t, this.refs = tu, this.updater = n || ba
}

var Co = To.prototype = new nu;
Co.constructor = To;
eu(Co, Rn.prototype);
Co.isPureReactComponent = !0;
var Cs = Array.isArray, ru = Object.prototype.hasOwnProperty, Ro = {current: null},
    iu = {key: !0, ref: !0, __self: !0, __source: !0};

function lu(e, t, n) {
    var r, i = {}, l = null, o = null;
    if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (l = "" + t.key), t) ru.call(t, r) && !iu.hasOwnProperty(r) && (i[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) i.children = n; else if (1 < s) {
        for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps) for (r in s = e.defaultProps, s) i[r] === void 0 && (i[r] = s[r]);
    return {$$typeof: Er, type: e, key: l, ref: o, props: i, _owner: Ro.current}
}

function Kd(e, t) {
    return {$$typeof: Er, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner}
}

function Mo(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Er
}

function Qd(e) {
    var t = {"=": "=0", ":": "=2"};
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}

var Rs = /\/+/g;

function nl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Qd("" + e.key) : t.toString(36)
}

function Zr(e, t, n, r, i) {
    var l = typeof e;
    (l === "undefined" || l === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0; else switch (l) {
        case"string":
        case"number":
            o = !0;
            break;
        case"object":
            switch (e.$$typeof) {
                case Er:
                case Id:
                    o = !0
            }
    }
    if (o) return o = e, i = i(o), e = r === "" ? "." + nl(o, 0) : r, Cs(i) ? (n = "", e != null && (n = e.replace(Rs, "$&/") + "/"), Zr(i, t, n, "", function (u) {
        return u
    })) : i != null && (Mo(i) && (i = Kd(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Rs, "$&/") + "/") + e)), t.push(i)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", Cs(e)) for (var s = 0; s < e.length; s++) {
        l = e[s];
        var a = r + nl(l, s);
        o += Zr(l, t, n, a, i)
    } else if (a = Wd(e), typeof a == "function") for (e = a.call(e), s = 0; !(l = e.next()).done;) l = l.value, a = r + nl(l, s++), o += Zr(l, t, n, a, i); else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function Or(e, t, n) {
    if (e == null) return e;
    var r = [], i = 0;
    return Zr(e, r, "", "", function (l) {
        return t.call(n, l, i++)
    }), r
}

function Gd(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}

var _e = {current: null}, Jr = {transition: null},
    Yd = {ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: Jr, ReactCurrentOwner: Ro};
H.Children = {
    map: Or, forEach: function (e, t, n) {
        Or(e, function () {
            t.apply(this, arguments)
        }, n)
    }, count: function (e) {
        var t = 0;
        return Or(e, function () {
            t++
        }), t
    }, toArray: function (e) {
        return Or(e, function (t) {
            return t
        }) || []
    }, only: function (e) {
        if (!Mo(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
H.Component = Rn;
H.Fragment = Ad;
H.Profiler = Bd;
H.PureComponent = To;
H.StrictMode = zd;
H.Suspense = Hd;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yd;
H.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = eu({}, e.props), i = e.key, l = e.ref, o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (l = t.ref, o = Ro.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
        for (a in t) ru.call(t, a) && !iu.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n; else if (1 < a) {
        s = Array(a);
        for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
        r.children = s
    }
    return {$$typeof: Er, type: e.type, key: i, ref: l, props: r, _owner: o}
};
H.createContext = function (e) {
    return e = {
        $$typeof: Fd,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {$$typeof: Ud, _context: e}, e.Consumer = e
};
H.createElement = lu;
H.createFactory = function (e) {
    var t = lu.bind(null, e);
    return t.type = e, t
};
H.createRef = function () {
    return {current: null}
};
H.forwardRef = function (e) {
    return {$$typeof: $d, render: e}
};
H.isValidElement = Mo;
H.lazy = function (e) {
    return {$$typeof: jd, _payload: {_status: -1, _result: e}, _init: Gd}
};
H.memo = function (e, t) {
    return {$$typeof: Vd, type: e, compare: t === void 0 ? null : t}
};
H.startTransition = function (e) {
    var t = Jr.transition;
    Jr.transition = {};
    try {
        e()
    } finally {
        Jr.transition = t
    }
};
H.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.")
};
H.useCallback = function (e, t) {
    return _e.current.useCallback(e, t)
};
H.useContext = function (e) {
    return _e.current.useContext(e)
};
H.useDebugValue = function () {
};
H.useDeferredValue = function (e) {
    return _e.current.useDeferredValue(e)
};
H.useEffect = function (e, t) {
    return _e.current.useEffect(e, t)
};
H.useId = function () {
    return _e.current.useId()
};
H.useImperativeHandle = function (e, t, n) {
    return _e.current.useImperativeHandle(e, t, n)
};
H.useInsertionEffect = function (e, t) {
    return _e.current.useInsertionEffect(e, t)
};
H.useLayoutEffect = function (e, t) {
    return _e.current.useLayoutEffect(e, t)
};
H.useMemo = function (e, t) {
    return _e.current.useMemo(e, t)
};
H.useReducer = function (e, t, n) {
    return _e.current.useReducer(e, t, n)
};
H.useRef = function (e) {
    return _e.current.useRef(e)
};
H.useState = function (e) {
    return _e.current.useState(e)
};
H.useSyncExternalStore = function (e, t, n) {
    return _e.current.useSyncExternalStore(e, t, n)
};
H.useTransition = function () {
    return _e.current.useTransition()
};
H.version = "18.1.0";
A.exports = H;
var Ai = {exports: {}}, zi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd = A.exports, qd = Symbol.for("react.element"), Zd = Symbol.for("react.fragment"),
    Jd = Object.prototype.hasOwnProperty, bd = Xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    ef = {key: !0, ref: !0, __self: !0, __source: !0};

function ou(e, t, n) {
    var r, i = {}, l = null, o = null;
    n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) Jd.call(t, r) && !ef.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {$$typeof: qd, type: e, key: l, ref: o, props: i, _owner: bd.current}
}

zi.Fragment = Zd;
zi.jsx = ou;
zi.jsxs = ou;
Ai.exports = zi;
const g = Ai.exports.jsx, I = Ai.exports.jsxs, tf = Ai.exports.Fragment, rl = 50, Ll = ({
                                                                                            sidebarSize: e,
                                                                                            sidebarHidden: t = !1,
                                                                                            sidebarIsFirst: n = !1,
                                                                                            orientation: r = "vertical",
                                                                                            children: i
                                                                                        }) => {
    const [l, o] = A.exports.useState(Math.max(rl, e)), [s, a] = A.exports.useState(null),
        u = A.exports.Children.toArray(i);
    document.body.style.userSelect = s ? "none" : "inherit";
    let d = {};
    return r === "vertical" ? n ? d = {
        top: s ? 0 : l - 4,
        bottom: s ? 0 : void 0,
        height: s ? "initial" : 8
    } : d = {bottom: s ? 0 : l - 4, top: s ? 0 : void 0, height: s ? "initial" : 8} : n ? d = {
        left: s ? 0 : l - 4,
        right: s ? 0 : void 0,
        width: s ? "initial" : 8
    } : d = {
        right: s ? 0 : l - 4,
        left: s ? 0 : void 0,
        width: s ? "initial" : 8
    }, I("div", {
        className: "split-view " + r + (n ? " sidebar-first" : ""),
        children: [g("div", {className: "split-view-main", children: u[0]}), !t && g("div", {
            style: {flexBasis: l},
            className: "split-view-sidebar",
            children: u[1]
        }), !t && g("div", {
            style: d,
            className: "split-view-resizer",
            onMouseDown: h => a({offset: r === "vertical" ? h.clientY : h.clientX, size: l}),
            onMouseUp: () => a(null),
            onMouseMove: h => {
                if (!h.buttons) a(null); else if (s) {
                    const S = (r === "vertical" ? h.clientY : h.clientX) - s.offset, w = n ? s.size + S : s.size - S,
                        L = h.target.parentElement.getBoundingClientRect(),
                        f = Math.min(Math.max(rl, w), (r === "vertical" ? L.height : L.width) - rl);
                    o(f)
                }
            }
        })]
    })
};

function er(e) {
    if (!isFinite(e)) return "-";
    if (e === 0) return "0";
    if (e < 1e3) return e.toFixed(0) + "ms";
    const t = e / 1e3;
    if (t < 60) return t.toFixed(1) + "s";
    const n = t / 60;
    if (n < 60) return n.toFixed(1) + "m";
    const r = n / 60;
    return r < 24 ? r.toFixed(1) + "h" : (r / 24).toFixed(1) + "d"
}

function su(e, t, n, r, i) {
    let l = r || 0, o = i !== void 0 ? i : e.length;
    for (; l < o;) {
        const s = l + o >> 1;
        n(t, e[s]) >= 0 ? l = s + 1 : o = s
    }
    return o
}

const br = Symbol("context"), au = Symbol("next"), Ms = Symbol("events"), Os = Symbol("resources");

class uu {
    constructor(t) {
        $e(this, "startTime");
        $e(this, "endTime");
        $e(this, "browserName");
        $e(this, "platform");
        $e(this, "wallTime");
        $e(this, "title");
        $e(this, "options");
        $e(this, "pages");
        $e(this, "actions");
        $e(this, "events");
        $e(this, "hasSource");
        var n, r, i, l;
        t.forEach(o => nf(o)), this.browserName = ((n = t[0]) == null ? void 0 : n.browserName) || "", this.platform = ((r = t[0]) == null ? void 0 : r.platform) || "", this.title = ((i = t[0]) == null ? void 0 : i.title) || "", this.options = ((l = t[0]) == null ? void 0 : l.options) || {}, this.wallTime = t.map(o => o.wallTime).reduce((o, s) => Math.min(o || Number.MAX_VALUE, s), Number.MAX_VALUE), this.startTime = t.map(o => o.startTime).reduce((o, s) => Math.min(o, s), Number.MAX_VALUE), this.endTime = t.map(o => o.endTime).reduce((o, s) => Math.max(o, s), Number.MIN_VALUE), this.pages = [].concat(...t.map(o => o.pages)), this.actions = [].concat(...t.map(o => o.actions)), this.events = [].concat(...t.map(o => o.events)), this.hasSource = t.some(o => o.hasSource), this.actions.sort((o, s) => o.metadata.startTime - s.metadata.startTime), this.events.sort((o, s) => o.metadata.startTime - s.metadata.startTime)
    }
}

function nf(e) {
    for (const t of e.pages) t[br] = e;
    for (let t = 0; t < e.actions.length; ++t) {
        const n = e.actions[t];
        n[br] = e, n[au] = e.actions[t + 1]
    }
    for (const t of e.events) t[br] = e
}

function Sr(e) {
    return e[br]
}

function cu(e) {
    return e[au]
}

function du(e) {
    var i;
    let t = 0, n = 0;
    const r = Sr(e);
    for (const l of fu(e)) {
        if (l.metadata.method === "console") {
            const {guid: o} = l.metadata.params.message, s = (i = r.objects[o]) == null ? void 0 : i.type;
            s === "warning" ? ++n : s === "error" && ++t
        }
        l.metadata.method === "pageError" && ++t
    }
    return {errors: t, warnings: n}
}

function fu(e) {
    let t = e[Ms];
    if (t) return t;
    const n = cu(e);
    return t = Sr(e).events.filter(r => r.metadata.startTime >= e.metadata.startTime && (!n || r.metadata.startTime < n.metadata.startTime)), e[Ms] = t, t
}

function pu(e) {
    let t = e[Os];
    if (t) return t;
    const n = cu(e);
    return t = Sr(e).resources.filter(r => typeof r._monotonicTime == "number" && r._monotonicTime > e.metadata.startTime && (!n || r._monotonicTime < n.metadata.startTime)), e[Os] = t, t
}

const rf = ({
                actions: e = [], selectedAction: t = void 0, highlightedAction: n = void 0, onSelected: r = () => {
    }, onHighlighted: i = () => {
    }, setSelectedTab: l = () => {
    }
            }) => {
    const o = A.exports.createRef();
    return A.exports.useEffect(() => {
        var s;
        (s = o.current) == null || s.focus()
    }, [t, o]), g("div", {
        className: "action-list vbox", children: I("div", {
            className: "action-list-content",
            tabIndex: 0,
            onKeyDown: s => {
                var h;
                if (s.key !== "ArrowDown" && s.key !== "ArrowUp") return;
                s.stopPropagation(), s.preventDefault();
                const a = t ? e.indexOf(t) : -1;
                let u = a;
                s.key === "ArrowDown" && (a === -1 ? u = 0 : u = Math.min(a + 1, e.length - 1)), s.key === "ArrowUp" && (a === -1 ? u = e.length - 1 : u = Math.max(a - 1, 0));
                const d = (h = o.current) == null ? void 0 : h.children.item(u);
                d != null && d.scrollIntoViewIfNeeded ? d.scrollIntoViewIfNeeded(!1) : d == null || d.scrollIntoView(), r(e[u])
            },
            ref: o,
            children: [e.length === 0 && g("div", {
                className: "no-actions-entry",
                children: "No actions recorded"
            }), e.map(s => {
                var w, k;
                const {metadata: a} = s, u = s === t ? " selected" : "", d = s === n ? " highlighted" : "",
                    h = (k = (w = a.error) == null ? void 0 : w.error) == null ? void 0 : k.message, {
                        errors: p,
                        warnings: S
                    } = du(s);
                return I("div", {
                    className: "action-entry" + u + d,
                    onClick: () => r(s),
                    onMouseEnter: () => i(s),
                    onMouseLeave: () => n === s && i(void 0),
                    children: [I("div", {
                        className: "action-title",
                        children: [g("span", {children: a.apiName}), a.params.selector && g("div", {
                            className: "action-selector",
                            title: a.params.selector,
                            children: a.params.selector
                        }), a.method === "goto" && a.params.url && g("div", {
                            className: "action-url",
                            title: a.params.url,
                            children: a.params.url
                        })]
                    }), g("div", {
                        className: "action-duration",
                        style: {flex: "none"},
                        children: a.endTime ? er(a.endTime - a.startTime) : "Timed Out"
                    }), I("div", {
                        className: "action-icons",
                        onClick: () => l("console"),
                        children: [!!p && I("div", {
                            className: "action-icon",
                            children: [g("span", {className: "codicon codicon-error"}), g("span", {
                                className: "action-icon-value",
                                children: p
                            })]
                        }), !!S && I("div", {
                            className: "action-icon",
                            children: [g("span", {className: "codicon codicon-warning"}), g("span", {
                                className: "action-icon-value",
                                children: S
                            })]
                        })]
                    }), h && g("div", {className: "codicon codicon-issues", title: h})]
                }, a.id)
            })]
        })
    })
};
const lf = ({action: e}) => {
    var s, a;
    if (!e) return null;
    const t = e.metadata.log, n = (a = (s = e.metadata.error) == null ? void 0 : s.error) == null ? void 0 : a.message,
        r = {...e.metadata.params};
    delete r.info;
    const i = Object.keys(r), l = new Date(e.metadata.wallTime).toLocaleString(),
        o = e.metadata.endTime ? er(e.metadata.endTime - e.metadata.startTime) : "Timed Out";
    return I("div", {
        className: "call-tab",
        children: [I("div", {
            className: "call-error",
            hidden: !n,
            children: [g("div", {className: "codicon codicon-issues"}), n]
        }, "error"), g("div", {
            className: "call-line",
            children: e.metadata.apiName
        }), I(tf, {
            children: [g("div", {
                className: "call-section",
                children: "Time"
            }), e.metadata.wallTime && I("div", {
                className: "call-line",
                children: ["wall time: ", g("span", {className: "datetime", title: l, children: l})]
            }), I("div", {
                className: "call-line",
                children: ["duration: ", g("span", {className: "datetime", title: o, children: o})]
            })]
        }), !!i.length && g("div", {
            className: "call-section",
            children: "Parameters"
        }), !!i.length && i.map((u, d) => Ls(e.metadata, u, r[u], "param-" + d)), !!e.metadata.result && g("div", {
            className: "call-section",
            children: "Return value"
        }), !!e.metadata.result && Object.keys(e.metadata.result).map((u, d) => Ls(e.metadata, u, e.metadata.result[u], "result-" + d)), g("div", {
            className: "call-section",
            children: "Log"
        }), t.map((u, d) => g("div", {className: "call-line", children: u}, d))]
    })
};

function Ls(e, t, n, r) {
    const {title: i, type: l} = of(e, t, n);
    let o = i.replace(/\n/g, "\u21B5");
    return l === "string" && (o = `"${o}"`), I("div", {
        className: "call-line",
        children: [t, ": ", g("span", {className: l, title: i, children: o})]
    }, r)
}

function of(e, t, n) {
    e.method.includes("eval") && (t === "arg" && (n = ui(n.value, new Array(10).fill({handle: "<handle>"}))), t === "value" && (n = ui(n, new Array(10).fill({handle: "<handle>"}))));
    const r = typeof n;
    return r !== "object" || n === null ? {title: String(n), type: r} : n.guid ? {
        title: "<handle>",
        type: "handle"
    } : {title: JSON.stringify(n), type: "object"}
}

function ui(e, t) {
    if (e.n !== void 0) return e.n;
    if (e.s !== void 0) return e.s;
    if (e.b !== void 0) return e.b;
    if (e.v !== void 0) {
        if (e.v === "undefined") return;
        if (e.v === "null") return null;
        if (e.v === "NaN") return NaN;
        if (e.v === "Infinity") return 1 / 0;
        if (e.v === "-Infinity") return -1 / 0;
        if (e.v === "-0") return -0
    }
    if (e.d !== void 0) return new Date(e.d);
    if (e.r !== void 0) return new RegExp(e.r.p, e.r.f);
    if (e.a !== void 0) return e.a.map(n => ui(n, t));
    if (e.o !== void 0) {
        const n = {};
        for (const {k: r, v: i} of e.o) n[r] = ui(i, t);
        return n
    }
    return e.h !== void 0 ? t === void 0 ? "<object>" : t[e.h] : "<object>"
}

const sf = ({action: e}) => {
    const t = A.exports.useMemo(() => {
        if (!e) return [];
        const n = [], r = Sr(e);
        for (const i of fu(e)) if (!(i.metadata.method !== "console" && i.metadata.method !== "pageError")) {
            if (i.metadata.method === "console") {
                const {guid: l} = i.metadata.params.message;
                n.push({message: r.objects[l]})
            }
            i.metadata.method === "pageError" && n.push({error: i.metadata.params.error})
        }
        return n
    }, [e]);
    return g("div", {
        className: "console-tab", children: t.map((n, r) => {
            const {message: i, error: l} = n;
            if (i) {
                const o = i.location.url, s = o ? o.substring(o.lastIndexOf("/") + 1) : "<anonymous>";
                return I("div", {
                    className: "console-line " + i.type,
                    children: [I("span", {
                        className: "console-location",
                        children: [s, ":", i.location.lineNumber]
                    }), g("span", {className: "codicon codicon-" + af(i)}), g("span", {
                        className: "console-line-message",
                        children: i.text
                    })]
                }, r)
            }
            if (l) {
                const {error: o, value: s} = l;
                return o ? I("div", {
                    className: "console-line error",
                    children: [g("span", {className: "codicon codicon-error"}), g("span", {
                        className: "console-line-message",
                        children: o.message
                    }), g("div", {className: "console-stack", children: o.stack})]
                }, r) : I("div", {
                    className: "console-line error",
                    children: [g("span", {className: "codicon codicon-error"}), g("span", {
                        className: "console-line-message",
                        children: String(s)
                    })]
                }, r)
            }
            return null
        })
    })
};

function af(e) {
    switch (e.type) {
        case"error":
            return "error";
        case"warning":
            return "warning"
    }
    return "blank"
}

const uf = ({title: e, children: t, setExpanded: n, expanded: r, style: i}) => I("div", {
    style: {
        ...i,
        display: "flex",
        flexDirection: "column"
    },
    children: [I("div", {
        style: {display: "flex", flexDirection: "row", alignItems: "center", whiteSpace: "nowrap"},
        children: [g("div", {
            className: "codicon codicon-" + (r ? "chevron-down" : "chevron-right"),
            style: {cursor: "pointer", color: "var(--color)", marginRight: "4px"},
            onClick: () => n(!r)
        }), e]
    }), r && g("div", {style: {display: "flex", flex: "auto", margin: "5px 0 5px 20px"}, children: t})]
});
const cf = ({resource: e, index: t, selected: n, setSelected: r}) => {
    const [i, l] = A.exports.useState(!1), [o, s] = A.exports.useState(null), [a, u] = A.exports.useState(null);
    A.exports.useEffect(() => {
        l(!1), r(-1)
    }, [e, r]), A.exports.useEffect(() => {
        (async () => {
            if (e.request.postData) if (e.request.postData._sha1) {
                const v = await (await fetch(`sha1/${e.request.postData._sha1}`)).text();
                s(v)
            } else s(e.request.postData.text);
            if (e.response.content._sha1) {
                const m = e.response.content.mimeType.includes("image"),
                    v = await fetch(`sha1/${e.response.content._sha1}`);
                if (m) {
                    const y = await v.blob(), N = new FileReader, C = new Promise(M => N.onload = M);
                    N.readAsDataURL(y), u({dataUrl: (await C).target.result})
                } else u({text: await v.text()})
            }
        })()
    }, [i, e]);

    function d(c, m) {
        if (c === null) return "Loading...";
        const v = c;
        if (v === "") return "<Empty>";
        if (m.includes("application/json")) try {
            return JSON.stringify(JSON.parse(v), null, 2)
        } catch {
            return v
        }
        return m.includes("application/x-www-form-urlencoded") ? decodeURIComponent(v) : v
    }

    function h(c) {
        return c >= 200 && c < 400 ? "status-success" : c >= 400 ? "status-failure" : "status-neutral"
    }

    const p = e.request.headers.find(c => c.name === "Content-Type"), S = p ? p.value : "",
        w = e.request.url.substring(e.request.url.lastIndexOf("/") + 1);
    let k = e.response.content.mimeType;
    const L = k.match(/^(.*);\s*charset=.*$/);
    L && (k = L[1]);
    const f = () => e.response._failureText ? I("div", {
        className: "network-request-title",
        children: [g("div", {
            className: "network-request-title-status status-failure",
            children: e.response._failureText
        }), g("div", {
            className: "network-request-title-method",
            children: e.request.method
        }), g("div", {className: "network-request-title-url", children: e.request.url})]
    }) : I("div", {
        className: "network-request-title",
        children: [g("div", {
            className: "network-request-title-status " + h(e.response.status),
            children: e.response.status
        }), g("div", {
            className: "network-request-title-method",
            children: e.request.method
        }), g("div", {
            className: "network-request-title-url",
            children: w
        }), g("div", {className: "network-request-title-content-type", children: k})]
    });
    return g("div", {
        className: "network-request " + (n ? "selected" : ""), onClick: () => r(t), children: g(uf, {
            expanded: i, setExpanded: l, style: {width: "100%"}, title: f(), children: I("div", {
                className: "network-request-details",
                children: [I("div", {
                    className: "network-request-details-time",
                    children: [e.time, "ms"]
                }), g("div", {
                    className: "network-request-details-header",
                    children: "URL"
                }), g("div", {
                    className: "network-request-details-url",
                    children: e.request.url
                }), g("div", {className: "network-request-details-header", children: "Request Headers"}), g("div", {
                    className: "network-request-headers",
                    children: e.request.headers.map(c => `${c.name}: ${c.value}`).join(`
`)
                }), g("div", {className: "network-request-details-header", children: "Response Headers"}), g("div", {
                    className: "network-request-headers",
                    children: e.response.headers.map(c => `${c.name}: ${c.value}`).join(`
`)
                }), e.request.postData ? g("div", {
                    className: "network-request-details-header",
                    children: "Request Body"
                }) : "", e.request.postData ? g("div", {
                    className: "network-request-body",
                    children: d(o, S)
                }) : "", g("div", {
                    className: "network-request-details-header",
                    children: "Response Body"
                }), e.response.content._sha1 ? "" : g("div", {
                    className: "network-request-response-body",
                    children: "Response body is not available for this request."
                }), a !== null && a.dataUrl ? g("img", {src: a.dataUrl}) : "", a !== null && a.text ? g("div", {
                    className: "network-request-response-body",
                    children: d(a.text, e.response.content.mimeType)
                }) : ""]
            })
        })
    })
};
const df = ({action: e}) => {
    const [t, n] = A.exports.useState(0), r = e ? pu(e) : [];
    return g("div", {
        className: "network-tab",
        children: r.map((i, l) => g(cf, {resource: i, index: l, selected: t === l, setSelected: n}, l))
    })
};

function ff(e, t, n, r) {
    const [i, l] = A.exports.useState(n);
    return A.exports.useEffect(() => {
        let o = !1;
        return r !== void 0 && l(r), e().then(s => {
            o || l(s)
        }), () => {
            o = !0
        }
    }, t), i
}

function Oo() {
    const e = A.exports.useRef(null), [t, n] = A.exports.useState(new DOMRect(0, 0, 10, 10));
    return A.exports.useLayoutEffect(() => {
        const r = e.current;
        if (!r) return;
        const i = new ResizeObserver(l => {
            const o = l[l.length - 1];
            o && o.contentRect && n(o.contentRect)
        });
        return i.observe(r), () => i.unobserve(r)
    }, [e]), [t, e]
}

const pf = ({action: e}) => {
    var c, m;
    const [t, n] = Oo(), [r, i] = A.exports.useState(0), l = new Map;
    for (const v of (e == null ? void 0 : e.metadata.snapshots) || []) l.set(v.title, v);
    const o = l.get("action") || l.get("after"),
        s = [o ? {...o, title: "action"} : void 0, l.get("before"), l.get("after")].filter(Boolean);
    let a = 'data:text/html,<body style="background: #ddd"></body>', u, d, h;
    if (e) {
        const v = s[r];
        if (v && v.snapshotName) {
            const y = new URLSearchParams;
            y.set("trace", Sr(e).traceUrl), y.set("name", v.snapshotName), a = new URL(`snapshot/${e.metadata.pageId}?${y.toString()}`, window.location.href).toString(), u = new URL(`snapshotInfo/${e.metadata.pageId}?${y.toString()}`, window.location.href).toString(), v.snapshotName.includes("action") && (d = (c = e.metadata.point) == null ? void 0 : c.x, h = (m = e.metadata.point) == null ? void 0 : m.y)
        }
    }
    A.exports.useEffect(() => {
        s.length >= 1 && r >= s.length && i(s.length - 1)
    }, [r, s]);
    const p = A.exports.useRef(null), [S, w] = A.exports.useState({viewport: Ps, url: ""});
    A.exports.useEffect(() => {
        (async () => {
            if (u) {
                const y = await (await fetch(u)).json();
                y.error || w(y)
            } else w({viewport: Ps, url: ""});
            if (!!p.current) try {
                p.current.src = a + (d === void 0 ? "" : `&pointX=${d}&pointY=${h}`)
            } catch {
            }
        })()
    }, [p, a, u, d, h]);
    const k = S.viewport, L = Math.min(t.width / k.width, t.height / k.height, 1),
        f = {width: k.width * L, height: k.height * L};
    return I("div", {
        className: "snapshot-tab",
        tabIndex: 0,
        onKeyDown: v => {
            v.key === "ArrowRight" && i(Math.min(r + 1, s.length - 1)), v.key === "ArrowLeft" && i(Math.max(r - 1, 0))
        },
        children: [g("div", {
            className: "tab-strip",
            children: s.map((v, y) => g("div", {
                className: "tab-element " + (r === y ? " selected" : ""),
                onClick: () => i(y),
                children: g("div", {className: "tab-label", children: mf(v.title)})
            }, v.title))
        }), g("div", {className: "snapshot-url", title: S.url, children: S.url}), g("div", {
            ref: n,
            className: "snapshot-wrapper",
            children: s.length ? g("div", {
                className: "snapshot-container",
                style: {
                    width: k.width + "px",
                    height: k.height + "px",
                    transform: `translate(${-k.width * (1 - L) / 2 + (t.width - f.width) / 2}px, ${-k.height * (1 - L) / 2 + (t.height - f.height) / 2}px) scale(${L})`
                },
                children: g("iframe", {ref: p, id: "snapshot", name: "snapshot"})
            }) : g("div", {className: "no-snapshot", children: "Action does not have snapshots"})
        })]
    })
};

function mf(e) {
    return e === "before" ? "Before" : e === "after" ? "After" : e === "action" ? "Action" : e
}

const Ps = {width: 1280, height: 720};

function Lo(e) {
    return e instanceof Map ? e.clear = e.delete = e.set = function () {
        throw new Error("map is read-only")
    } : e instanceof Set && (e.add = e.clear = e.delete = function () {
        throw new Error("set is read-only")
    }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach(function (t) {
        var n = e[t];
        typeof n == "object" && !Object.isFrozen(n) && Lo(n)
    }), e
}

var mu = Lo, hf = Lo;
mu.default = hf;

class Ds {
    constructor(t) {
        t.data === void 0 && (t.data = {}), this.data = t.data
    }

    ignoreMatch() {
        this.ignore = !0
    }
}

function hn(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
}

function Nt(e, ...t) {
    const n = Object.create(null);
    for (const r in e) n[r] = e[r];
    return t.forEach(function (r) {
        for (const i in r) n[i] = r[i]
    }), n
}

const gf = "</span>", Is = e => !!e.kind;

class vf {
    constructor(t, n) {
        this.buffer = "", this.classPrefix = n.classPrefix, t.walk(this)
    }

    addText(t) {
        this.buffer += hn(t)
    }

    openNode(t) {
        if (!Is(t)) return;
        let n = t.kind;
        t.sublanguage || (n = `${this.classPrefix}${n}`), this.span(n)
    }

    closeNode(t) {
        !Is(t) || (this.buffer += gf)
    }

    value() {
        return this.buffer
    }

    span(t) {
        this.buffer += `<span class="${t}">`
    }
}

class Po {
    constructor() {
        this.rootNode = {children: []}, this.stack = [this.rootNode]
    }

    get top() {
        return this.stack[this.stack.length - 1]
    }

    get root() {
        return this.rootNode
    }

    add(t) {
        this.top.children.push(t)
    }

    openNode(t) {
        const n = {kind: t, children: []};
        this.add(n), this.stack.push(n)
    }

    closeNode() {
        if (this.stack.length > 1) return this.stack.pop()
    }

    closeAllNodes() {
        for (; this.closeNode();) ;
    }

    toJSON() {
        return JSON.stringify(this.rootNode, null, 4)
    }

    walk(t) {
        return this.constructor._walk(t, this.rootNode)
    }

    static _walk(t, n) {
        return typeof n == "string" ? t.addText(n) : n.children && (t.openNode(n), n.children.forEach(r => this._walk(t, r)), t.closeNode(n)), t
    }

    static _collapse(t) {
        typeof t != "string" && (!t.children || (t.children.every(n => typeof n == "string") ? t.children = [t.children.join("")] : t.children.forEach(n => {
            Po._collapse(n)
        })))
    }
}

class yf extends Po {
    constructor(t) {
        super(), this.options = t
    }

    addKeyword(t, n) {
        t !== "" && (this.openNode(n), this.addText(t), this.closeNode())
    }

    addText(t) {
        t !== "" && this.add(t)
    }

    addSublanguage(t, n) {
        const r = t.root;
        r.kind = n, r.sublanguage = !0, this.add(r)
    }

    toHTML() {
        return new vf(this, this.options).value()
    }

    finalize() {
        return !0
    }
}

function wf(e) {
    return new RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")
}

function tr(e) {
    return e ? typeof e == "string" ? e : e.source : null
}

function Ef(...e) {
    return e.map(n => tr(n)).join("")
}

function Sf(...e) {
    return "(" + e.map(n => tr(n)).join("|") + ")"
}

function Nf(e) {
    return new RegExp(e.toString() + "|").exec("").length - 1
}

function _f(e, t) {
    const n = e && e.exec(t);
    return n && n.index === 0
}

function kf(e, t = "|") {
    const n = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
    let r = 0, i = "";
    for (let l = 0; l < e.length; l++) {
        r += 1;
        const o = r;
        let s = tr(e[l]);
        for (l > 0 && (i += t), i += "("; s.length > 0;) {
            const a = n.exec(s);
            if (a == null) {
                i += s;
                break
            }
            i += s.substring(0, a.index), s = s.substring(a.index + a[0].length), a[0][0] === "\\" && a[1] ? i += "\\" + String(Number(a[1]) + o) : (i += a[0], a[0] === "(" && r++)
        }
        i += ")"
    }
    return i
}

const hu = "[a-zA-Z]\\w*", Do = "[a-zA-Z_]\\w*", Io = "\\b\\d+(\\.\\d+)?",
    gu = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", vu = "\\b(0b[01]+)",
    xf = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    Tf = (e = {}) => {
        const t = /^#![ ]*\//;
        return e.binary && (e.begin = Ef(t, /.*\b/, e.binary, /\b.*/)), Nt({
            className: "meta",
            begin: t,
            end: /$/,
            relevance: 0,
            "on:begin": (n, r) => {
                n.index !== 0 && r.ignoreMatch()
            }
        }, e)
    }, nr = {begin: "\\\\[\\s\\S]", relevance: 0},
    Cf = {className: "string", begin: "'", end: "'", illegal: "\\n", contains: [nr]},
    Rf = {className: "string", begin: '"', end: '"', illegal: "\\n", contains: [nr]},
    yu = {begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},
    Bi = function (e, t, n = {}) {
        const r = Nt({className: "comment", begin: e, end: t, contains: []}, n);
        return r.contains.push(yu), r.contains.push({
            className: "doctag",
            begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
            relevance: 0
        }), r
    }, Mf = Bi("//", "$"), Of = Bi("/\\*", "\\*/"), Lf = Bi("#", "$"),
    Pf = {className: "number", begin: Io, relevance: 0}, Df = {className: "number", begin: gu, relevance: 0},
    If = {className: "number", begin: vu, relevance: 0}, Af = {
        className: "number",
        begin: Io + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        relevance: 0
    }, zf = {
        begin: /(?=\/[^/\n]*\/)/,
        contains: [{
            className: "regexp",
            begin: /\//,
            end: /\/[gimuy]*/,
            illegal: /\n/,
            contains: [nr, {begin: /\[/, end: /\]/, relevance: 0, contains: [nr]}]
        }]
    }, Bf = {className: "title", begin: hu, relevance: 0}, Uf = {className: "title", begin: Do, relevance: 0},
    Ff = {begin: "\\.\\s*" + Do, relevance: 0}, $f = function (e) {
        return Object.assign(e, {
            "on:begin": (t, n) => {
                n.data._beginMatch = t[1]
            }, "on:end": (t, n) => {
                n.data._beginMatch !== t[1] && n.ignoreMatch()
            }
        })
    };
var Lr = Object.freeze({
    __proto__: null,
    IDENT_RE: hu,
    UNDERSCORE_IDENT_RE: Do,
    NUMBER_RE: Io,
    C_NUMBER_RE: gu,
    BINARY_NUMBER_RE: vu,
    RE_STARTERS_RE: xf,
    SHEBANG: Tf,
    BACKSLASH_ESCAPE: nr,
    APOS_STRING_MODE: Cf,
    QUOTE_STRING_MODE: Rf,
    PHRASAL_WORDS_MODE: yu,
    COMMENT: Bi,
    C_LINE_COMMENT_MODE: Mf,
    C_BLOCK_COMMENT_MODE: Of,
    HASH_COMMENT_MODE: Lf,
    NUMBER_MODE: Pf,
    C_NUMBER_MODE: Df,
    BINARY_NUMBER_MODE: If,
    CSS_NUMBER_MODE: Af,
    REGEXP_MODE: zf,
    TITLE_MODE: Bf,
    UNDERSCORE_TITLE_MODE: Uf,
    METHOD_GUARD: Ff,
    END_SAME_AS_BEGIN: $f
});

function Hf(e, t) {
    e.input[e.index - 1] === "." && t.ignoreMatch()
}

function Vf(e, t) {
    !t || !e.beginKeywords || (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = Hf, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords)
}

function jf(e, t) {
    !Array.isArray(e.illegal) || (e.illegal = Sf(...e.illegal))
}

function Wf(e, t) {
    if (!!e.match) {
        if (e.begin || e.end) throw new Error("begin & end are not supported with match");
        e.begin = e.match, delete e.match
    }
}

function Kf(e, t) {
    e.relevance === void 0 && (e.relevance = 1)
}

const Qf = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

function Gf(e, t) {
    const n = {};
    return typeof e == "string" ? r("keyword", e) : Object.keys(e).forEach(function (i) {
        r(i, e[i])
    }), n;

    function r(i, l) {
        t && (l = l.toLowerCase()), l.split(" ").forEach(function (o) {
            const s = o.split("|");
            n[s[0]] = [i, Yf(s[0], s[1])]
        })
    }
}

function Yf(e, t) {
    return t ? Number(t) : Xf(e) ? 0 : 1
}

function Xf(e) {
    return Qf.includes(e.toLowerCase())
}

function qf(e, {plugins: t}) {
    function n(s, a) {
        return new RegExp(tr(s), "m" + (e.case_insensitive ? "i" : "") + (a ? "g" : ""))
    }

    class r {
        constructor() {
            this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
        }

        addRule(a, u) {
            u.position = this.position++, this.matchIndexes[this.matchAt] = u, this.regexes.push([u, a]), this.matchAt += Nf(a) + 1
        }

        compile() {
            this.regexes.length === 0 && (this.exec = () => null);
            const a = this.regexes.map(u => u[1]);
            this.matcherRe = n(kf(a), !0), this.lastIndex = 0
        }

        exec(a) {
            this.matcherRe.lastIndex = this.lastIndex;
            const u = this.matcherRe.exec(a);
            if (!u) return null;
            const d = u.findIndex((p, S) => S > 0 && p !== void 0), h = this.matchIndexes[d];
            return u.splice(0, d), Object.assign(u, h)
        }
    }

    class i {
        constructor() {
            this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
        }

        getMatcher(a) {
            if (this.multiRegexes[a]) return this.multiRegexes[a];
            const u = new r;
            return this.rules.slice(a).forEach(([d, h]) => u.addRule(d, h)), u.compile(), this.multiRegexes[a] = u, u
        }

        resumingScanAtSamePosition() {
            return this.regexIndex !== 0
        }

        considerAll() {
            this.regexIndex = 0
        }

        addRule(a, u) {
            this.rules.push([a, u]), u.type === "begin" && this.count++
        }

        exec(a) {
            const u = this.getMatcher(this.regexIndex);
            u.lastIndex = this.lastIndex;
            let d = u.exec(a);
            if (this.resumingScanAtSamePosition() && !(d && d.index === this.lastIndex)) {
                const h = this.getMatcher(0);
                h.lastIndex = this.lastIndex + 1, d = h.exec(a)
            }
            return d && (this.regexIndex += d.position + 1, this.regexIndex === this.count && this.considerAll()), d
        }
    }

    function l(s) {
        const a = new i;
        return s.contains.forEach(u => a.addRule(u.begin, {
            rule: u,
            type: "begin"
        })), s.terminatorEnd && a.addRule(s.terminatorEnd, {type: "end"}), s.illegal && a.addRule(s.illegal, {type: "illegal"}), a
    }

    function o(s, a) {
        const u = s;
        if (s.compiled) return u;
        [Wf].forEach(h => h(s, a)), e.compilerExtensions.forEach(h => h(s, a)), s.__beforeBegin = null, [Vf, jf, Kf].forEach(h => h(s, a)), s.compiled = !0;
        let d = null;
        if (typeof s.keywords == "object" && (d = s.keywords.$pattern, delete s.keywords.$pattern), s.keywords && (s.keywords = Gf(s.keywords, e.case_insensitive)), s.lexemes && d) throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
        return d = d || s.lexemes || /\w+/, u.keywordPatternRe = n(d, !0), a && (s.begin || (s.begin = /\B|\b/), u.beginRe = n(s.begin), s.endSameAsBegin && (s.end = s.begin), !s.end && !s.endsWithParent && (s.end = /\B|\b/), s.end && (u.endRe = n(s.end)), u.terminatorEnd = tr(s.end) || "", s.endsWithParent && a.terminatorEnd && (u.terminatorEnd += (s.end ? "|" : "") + a.terminatorEnd)), s.illegal && (u.illegalRe = n(s.illegal)), s.contains || (s.contains = []), s.contains = [].concat(...s.contains.map(function (h) {
            return Zf(h === "self" ? s : h)
        })), s.contains.forEach(function (h) {
            o(h, u)
        }), s.starts && o(s.starts, a), u.matcher = l(u), u
    }

    if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return e.classNameAliases = Nt(e.classNameAliases || {}), o(e)
}

function wu(e) {
    return e ? e.endsWithParent || wu(e.starts) : !1
}

function Zf(e) {
    return e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map(function (t) {
        return Nt(e, {variants: null}, t)
    })), e.cachedVariants ? e.cachedVariants : wu(e) ? Nt(e, {starts: e.starts ? Nt(e.starts) : null}) : Object.isFrozen(e) ? Nt(e) : e
}

var Jf = "10.5.0";

function bf(e) {
    return Boolean(e || e === "")
}

function ep(e) {
    const t = {
        props: ["language", "code", "autodetect"], data: function () {
            return {detectedLanguage: "", unknownLanguage: !1}
        }, computed: {
            className() {
                return this.unknownLanguage ? "" : "hljs " + this.detectedLanguage
            }, highlighted() {
                if (!this.autoDetect && !e.getLanguage(this.language)) return console.warn(`The language "${this.language}" you specified could not be found.`), this.unknownLanguage = !0, hn(this.code);
                let r = {};
                return this.autoDetect ? (r = e.highlightAuto(this.code), this.detectedLanguage = r.language) : (r = e.highlight(this.language, this.code, this.ignoreIllegals), this.detectedLanguage = this.language), r.value
            }, autoDetect() {
                return !this.language || bf(this.autodetect)
            }, ignoreIllegals() {
                return !0
            }
        }, render(r) {
            return r("pre", {}, [r("code", {class: this.className, domProps: {innerHTML: this.highlighted}})])
        }
    };
    return {
        Component: t, VuePlugin: {
            install(r) {
                r.component("highlightjs", t)
            }
        }
    }
}

const tp = {
    "after:highlightBlock": ({block: e, result: t, text: n}) => {
        const r = As(e);
        if (!r.length) return;
        const i = document.createElement("div");
        i.innerHTML = t.value, t.value = np(r, As(i), n)
    }
};

function Pl(e) {
    return e.nodeName.toLowerCase()
}

function As(e) {
    const t = [];
    return function n(r, i) {
        for (let l = r.firstChild; l; l = l.nextSibling) l.nodeType === 3 ? i += l.nodeValue.length : l.nodeType === 1 && (t.push({
            event: "start",
            offset: i,
            node: l
        }), i = n(l, i), Pl(l).match(/br|hr|img|input/) || t.push({event: "stop", offset: i, node: l}));
        return i
    }(e, 0), t
}

function np(e, t, n) {
    let r = 0, i = "";
    const l = [];

    function o() {
        return !e.length || !t.length ? e.length ? e : t : e[0].offset !== t[0].offset ? e[0].offset < t[0].offset ? e : t : t[0].event === "start" ? e : t
    }

    function s(d) {
        function h(p) {
            return " " + p.nodeName + '="' + hn(p.value) + '"'
        }

        i += "<" + Pl(d) + [].map.call(d.attributes, h).join("") + ">"
    }

    function a(d) {
        i += "</" + Pl(d) + ">"
    }

    function u(d) {
        (d.event === "start" ? s : a)(d.node)
    }

    for (; e.length || t.length;) {
        let d = o();
        if (i += hn(n.substring(r, d[0].offset)), r = d[0].offset, d === e) {
            l.reverse().forEach(a);
            do u(d.splice(0, 1)[0]), d = o(); while (d === e && d.length && d[0].offset === r);
            l.reverse().forEach(s)
        } else d[0].event === "start" ? l.push(d[0].node) : l.pop(), u(d.splice(0, 1)[0])
    }
    return i + hn(n.substr(r))
}

const il = e => {
    console.error(e)
}, zs = (e, ...t) => {
    console.log(`WARN: ${e}`, ...t)
}, bt = (e, t) => {
    console.log(`Deprecated as of ${e}. ${t}`)
}, ll = hn, Bs = Nt, Us = Symbol("nomatch"), rp = function (e) {
    const t = Object.create(null), n = Object.create(null), r = [];
    let i = !0;
    const l = /(^(<[^>]+>|\t|)+|\n)/gm,
        o = "Could not find the language '{}', did you forget to load/include a language module?",
        s = {disableAutodetect: !0, name: "Plain text", contains: []};
    let a = {
        noHighlightRe: /^(no-?highlight)$/i,
        languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: !1,
        languages: null,
        __emitter: yf
    };

    function u(x) {
        return a.noHighlightRe.test(x)
    }

    function d(x) {
        let E = x.className + " ";
        E += x.parentNode ? x.parentNode.className : "";
        const T = a.languageDetectRe.exec(E);
        if (T) {
            const R = G(T[1]);
            return R || (zs(o.replace("{}", T[1])), zs("Falling back to no-highlight mode for this block.", x)), R ? T[1] : "no-highlight"
        }
        return E.split(/\s+/).find(R => u(R) || G(R))
    }

    function h(x, E, T, R) {
        const P = {code: E, language: x};
        B("before:highlight", P);
        const W = P.result ? P.result : p(P.language, P.code, T, R);
        return W.code = P.code, B("after:highlight", W), W
    }

    function p(x, E, T, R) {
        const P = E;

        function W(D, z) {
            const $ = Zt.case_insensitive ? z[0].toLowerCase() : z[0];
            return Object.prototype.hasOwnProperty.call(D.keywords, $) && D.keywords[$]
        }

        function gt() {
            if (!F.keywords) {
                Ee.addText(ie);
                return
            }
            let D = 0;
            F.keywordPatternRe.lastIndex = 0;
            let z = F.keywordPatternRe.exec(ie), $ = "";
            for (; z;) {
                $ += ie.substring(D, z.index);
                const Q = W(F, z);
                if (Q) {
                    const [De, Mr] = Q;
                    Ee.addText($), $ = "", Rr += Mr;
                    const Od = Zt.classNameAliases[De] || De;
                    Ee.addKeyword(z[0], Od)
                } else $ += z[0];
                D = F.keywordPatternRe.lastIndex, z = F.keywordPatternRe.exec(ie)
            }
            $ += ie.substr(D), Ee.addText($)
        }

        function Fe() {
            if (ie === "") return;
            let D = null;
            if (typeof F.subLanguage == "string") {
                if (!t[F.subLanguage]) {
                    Ee.addText(ie);
                    return
                }
                D = p(F.subLanguage, ie, !0, xs[F.subLanguage]), xs[F.subLanguage] = D.top
            } else D = w(ie, F.subLanguage.length ? F.subLanguage : null);
            F.relevance > 0 && (Rr += D.relevance), Ee.addSublanguage(D.emitter, D.language)
        }

        function we() {
            F.subLanguage != null ? Fe() : gt(), ie = ""
        }

        function pe(D) {
            return D.className && Ee.openNode(Zt.classNameAliases[D.className] || D.className), F = Object.create(D, {parent: {value: F}}), F
        }

        function Bt(D, z, $) {
            let Q = _f(D.endRe, $);
            if (Q) {
                if (D["on:end"]) {
                    const De = new Ds(D);
                    D["on:end"](z, De), De.ignore && (Q = !1)
                }
                if (Q) {
                    for (; D.endsParent && D.parent;) D = D.parent;
                    return D
                }
            }
            if (D.endsWithParent) return Bt(D.parent, z, $)
        }

        function xd(D) {
            return F.matcher.regexIndex === 0 ? (ie += D[0], 1) : (tl = !0, 0)
        }

        function Td(D) {
            const z = D[0], $ = D.rule, Q = new Ds($), De = [$.__beforeBegin, $["on:begin"]];
            for (const Mr of De) if (!!Mr && (Mr(D, Q), Q.ignore)) return xd(z);
            return $ && $.endSameAsBegin && ($.endRe = wf(z)), $.skip ? ie += z : ($.excludeBegin && (ie += z), we(), !$.returnBegin && !$.excludeBegin && (ie = z)), pe($), $.returnBegin ? 0 : z.length
        }

        function Cd(D) {
            const z = D[0], $ = P.substr(D.index), Q = Bt(F, D, $);
            if (!Q) return Us;
            const De = F;
            De.skip ? ie += z : (De.returnEnd || De.excludeEnd || (ie += z), we(), De.excludeEnd && (ie = z));
            do F.className && Ee.closeNode(), !F.skip && !F.subLanguage && (Rr += F.relevance), F = F.parent; while (F !== Q.parent);
            return Q.starts && (Q.endSameAsBegin && (Q.starts.endRe = Q.endRe), pe(Q.starts)), De.returnEnd ? 0 : z.length
        }

        function Rd() {
            const D = [];
            for (let z = F; z !== Zt; z = z.parent) z.className && D.unshift(z.className);
            D.forEach(z => Ee.openNode(z))
        }

        let Cr = {};

        function ks(D, z) {
            const $ = z && z[0];
            if (ie += D, $ == null) return we(), 0;
            if (Cr.type === "begin" && z.type === "end" && Cr.index === z.index && $ === "") {
                if (ie += P.slice(z.index, z.index + 1), !i) {
                    const Q = new Error("0 width match regex");
                    throw Q.languageName = x, Q.badRule = Cr.rule, Q
                }
                return 1
            }
            if (Cr = z, z.type === "begin") return Td(z);
            if (z.type === "illegal" && !T) {
                const Q = new Error('Illegal lexeme "' + $ + '" for mode "' + (F.className || "<unnamed>") + '"');
                throw Q.mode = F, Q
            } else if (z.type === "end") {
                const Q = Cd(z);
                if (Q !== Us) return Q
            }
            if (z.type === "illegal" && $ === "") return 1;
            if (el > 1e5 && el > z.index * 3) throw new Error("potential infinite loop, way more iterations than matches");
            return ie += $, $.length
        }

        const Zt = G(x);
        if (!Zt) throw il(o.replace("{}", x)), new Error('Unknown language: "' + x + '"');
        const Md = qf(Zt, {plugins: r});
        let bi = "", F = R || Md;
        const xs = {}, Ee = new a.__emitter(a);
        Rd();
        let ie = "", Rr = 0, Jt = 0, el = 0, tl = !1;
        try {
            for (F.matcher.considerAll(); ;) {
                el++, tl ? tl = !1 : F.matcher.considerAll(), F.matcher.lastIndex = Jt;
                const D = F.matcher.exec(P);
                if (!D) break;
                const z = P.substring(Jt, D.index), $ = ks(z, D);
                Jt = D.index + $
            }
            return ks(P.substr(Jt)), Ee.closeAllNodes(), Ee.finalize(), bi = Ee.toHTML(), {
                relevance: Rr,
                value: bi,
                language: x,
                illegal: !1,
                emitter: Ee,
                top: F
            }
        } catch (D) {
            if (D.message && D.message.includes("Illegal")) return {
                illegal: !0,
                illegalBy: {msg: D.message, context: P.slice(Jt - 100, Jt + 100), mode: D.mode},
                sofar: bi,
                relevance: 0,
                value: ll(P),
                emitter: Ee
            };
            if (i) return {illegal: !1, relevance: 0, value: ll(P), emitter: Ee, language: x, top: F, errorRaised: D};
            throw D
        }
    }

    function S(x) {
        const E = {relevance: 0, emitter: new a.__emitter(a), value: ll(x), illegal: !1, top: s};
        return E.emitter.addText(x), E
    }

    function w(x, E) {
        E = E || a.languages || Object.keys(t);
        const T = S(x), R = E.filter(G).filter(ye).map(we => p(we, x, !1));
        R.unshift(T);
        const P = R.sort((we, pe) => {
            if (we.relevance !== pe.relevance) return pe.relevance - we.relevance;
            if (we.language && pe.language) {
                if (G(we.language).supersetOf === pe.language) return 1;
                if (G(pe.language).supersetOf === we.language) return -1
            }
            return 0
        }), [W, gt] = P, Fe = W;
        return Fe.second_best = gt, Fe
    }

    function k(x) {
        return a.tabReplace || a.useBR ? x.replace(l, E => E === `
` ? a.useBR ? "<br>" : E : a.tabReplace ? E.replace(/\t/g, a.tabReplace) : E) : x
    }

    function L(x, E, T) {
        const R = E ? n[E] : T;
        x.classList.add("hljs"), R && x.classList.add(R)
    }

    const f = {
        "before:highlightBlock": ({block: x}) => {
            a.useBR && (x.innerHTML = x.innerHTML.replace(/\n/g, "").replace(/<br[ /]*>/g, `
`))
        }, "after:highlightBlock": ({result: x}) => {
            a.useBR && (x.value = x.value.replace(/\n/g, "<br>"))
        }
    }, c = /^(<[^>]+>|\t)+/gm, m = {
        "after:highlightBlock": ({result: x}) => {
            a.tabReplace && (x.value = x.value.replace(c, E => E.replace(/\t/g, a.tabReplace)))
        }
    };

    function v(x) {
        let E = null;
        const T = d(x);
        if (u(T)) return;
        B("before:highlightBlock", {block: x, language: T}), E = x;
        const R = E.textContent, P = T ? h(T, R, !0) : w(R);
        B("after:highlightBlock", {
            block: x,
            result: P,
            text: R
        }), x.innerHTML = P.value, L(x, T, P.language), x.result = {
            language: P.language,
            re: P.relevance,
            relavance: P.relevance
        }, P.second_best && (x.second_best = {
            language: P.second_best.language,
            re: P.second_best.relevance,
            relavance: P.second_best.relevance
        })
    }

    function y(x) {
        x.useBR && (bt("10.3.0", "'useBR' will be removed entirely in v11.0"), bt("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559")), a = Bs(a, x)
    }

    const N = () => {
        if (N.called) return;
        N.called = !0, document.querySelectorAll("pre code").forEach(v)
    };

    function C() {
        window.addEventListener("DOMContentLoaded", N, !1)
    }

    function M(x, E) {
        let T = null;
        try {
            T = E(e)
        } catch (R) {
            if (il("Language definition for '{}' could not be registered.".replace("{}", x)), i) il(R); else throw R;
            T = s
        }
        T.name || (T.name = x), t[x] = T, T.rawDefinition = E.bind(null, e), T.aliases && Le(T.aliases, {languageName: x})
    }

    function V() {
        return Object.keys(t)
    }

    function U(x) {
        bt("10.4.0", "requireLanguage will be removed entirely in v11."), bt("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");
        const E = G(x);
        if (E) return E;
        throw new Error("The '{}' language is required, but not loaded.".replace("{}", x))
    }

    function G(x) {
        return x = (x || "").toLowerCase(), t[x] || t[n[x]]
    }

    function Le(x, {languageName: E}) {
        typeof x == "string" && (x = [x]), x.forEach(T => {
            n[T] = E
        })
    }

    function ye(x) {
        const E = G(x);
        return E && !E.disableAutodetect
    }

    function Pe(x) {
        r.push(x)
    }

    function B(x, E) {
        const T = x;
        r.forEach(function (R) {
            R[T] && R[T](E)
        })
    }

    function J(x) {
        return bt("10.2.0", "fixMarkup will be removed entirely in v11.0"), bt("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534"), k(x)
    }

    Object.assign(e, {
        highlight: h,
        highlightAuto: w,
        fixMarkup: J,
        highlightBlock: v,
        configure: y,
        initHighlighting: N,
        initHighlightingOnLoad: C,
        registerLanguage: M,
        listLanguages: V,
        getLanguage: G,
        registerAliases: Le,
        requireLanguage: U,
        autoDetection: ye,
        inherit: Bs,
        addPlugin: Pe,
        vuePlugin: ep(e).VuePlugin
    }), e.debugMode = function () {
        i = !1
    }, e.safeMode = function () {
        i = !0
    }, e.versionString = Jf;
    for (const x in Lr) typeof Lr[x] == "object" && mu(Lr[x]);
    return Object.assign(e, Lr), e.addPlugin(f), e.addPlugin(tp), e.addPlugin(m), e
};
var Nr = rp({});
const Fs = "[A-Za-z$_][0-9A-Za-z$_]*",
    ip = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
    lp = ["true", "false", "null", "undefined", "NaN", "Infinity"],
    op = ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer"],
    sp = ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
    ap = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
    up = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
    cp = [].concat(ap, up, op, sp);

function dp(e) {
    return e ? typeof e == "string" ? e : e.source : null
}

function $s(e) {
    return Dl("(?=", e, ")")
}

function Dl(...e) {
    return e.map(n => dp(n)).join("")
}

function fp(e) {
    const t = (v, {after: y}) => {
            const N = "</" + v[0].slice(1);
            return v.input.indexOf(N, y) !== -1
        }, n = Fs, r = {begin: "<>", end: "</>"}, i = {
            begin: /<[A-Za-z0-9\\._:-]+/, end: /\/[A-Za-z0-9\\._:-]+>|\/>/, isTrulyOpeningTag: (v, y) => {
                const N = v[0].length + v.index, C = v.input[N];
                if (C === "<") {
                    y.ignoreMatch();
                    return
                }
                C === ">" && (t(v, {after: N}) || y.ignoreMatch())
            }
        }, l = {$pattern: Fs, keyword: ip.join(" "), literal: lp.join(" "), built_in: cp.join(" ")}, o = "[0-9](_?[0-9])*",
        s = `\\.(${o})`, a = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", u = {
            className: "number",
            variants: [{begin: `(\\b(${a})((${s})|\\.)?|(${s}))[eE][+-]?(${o})\\b`}, {begin: `\\b(${a})\\b((${s})\\b|\\.)?|(${s})\\b`}, {begin: "\\b(0|[1-9](_?[0-9])*)n\\b"}, {begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"}, {begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"}, {begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"}, {begin: "\\b0[0-7]+n?\\b"}],
            relevance: 0
        }, d = {className: "subst", begin: "\\$\\{", end: "\\}", keywords: l, contains: []}, h = {
            begin: "html`",
            end: "",
            starts: {end: "`", returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, d], subLanguage: "xml"}
        }, p = {
            begin: "css`",
            end: "",
            starts: {end: "`", returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, d], subLanguage: "css"}
        }, S = {className: "string", begin: "`", end: "`", contains: [e.BACKSLASH_ESCAPE, d]},
        w = e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [{
                className: "doctag",
                begin: "@[A-Za-z]+",
                contains: [{className: "type", begin: "\\{", end: "\\}", relevance: 0}, {
                    className: "variable",
                    begin: n + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0
                }, {begin: /(?=[^\n])\s/, relevance: 0}]
            }]
        }), k = {className: "comment", variants: [w, e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]},
        L = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, h, p, S, u, e.REGEXP_MODE];
    d.contains = L.concat({begin: /\{/, end: /\}/, keywords: l, contains: ["self"].concat(L)});
    const f = [].concat(k, d.contains),
        c = f.concat([{begin: /\(/, end: /\)/, keywords: l, contains: ["self"].concat(f)}]),
        m = {className: "params", begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: l, contains: c};
    return {
        name: "Javascript",
        aliases: ["js", "jsx", "mjs", "cjs"],
        keywords: l,
        exports: {PARAMS_CONTAINS: c},
        illegal: /#(?![$_A-z])/,
        contains: [e.SHEBANG({label: "shebang", binary: "node", relevance: 5}), {
            label: "use_strict",
            className: "meta",
            relevance: 10,
            begin: /^\s*['"]use (strict|asm)['"]/
        }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, h, p, S, k, u, {
            begin: Dl(/[{,\n]\s*/, $s(Dl(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, n + "\\s*:"))),
            relevance: 0,
            contains: [{className: "attr", begin: n + $s("\\s*:"), relevance: 0}]
        }, {
            begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
            keywords: "return throw case",
            contains: [k, e.REGEXP_MODE, {
                className: "function",
                begin: "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>",
                returnBegin: !0,
                end: "\\s*=>",
                contains: [{
                    className: "params",
                    variants: [{begin: e.UNDERSCORE_IDENT_RE, relevance: 0}, {
                        className: null,
                        begin: /\(\s*\)/,
                        skip: !0
                    }, {begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: l, contains: c}]
                }]
            }, {begin: /,/, relevance: 0}, {
                className: "",
                begin: /\s/,
                end: /\s*/,
                skip: !0
            }, {
                variants: [{begin: r.begin, end: r.end}, {begin: i.begin, "on:begin": i.isTrulyOpeningTag, end: i.end}],
                subLanguage: "xml",
                contains: [{begin: i.begin, end: i.end, skip: !0, contains: ["self"]}]
            }],
            relevance: 0
        }, {
            className: "function",
            beginKeywords: "function",
            end: /[{;]/,
            excludeEnd: !0,
            keywords: l,
            contains: ["self", e.inherit(e.TITLE_MODE, {begin: n}), m],
            illegal: /%/
        }, {beginKeywords: "while if switch catch for"}, {
            className: "function",
            begin: e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
            returnBegin: !0,
            contains: [m, e.inherit(e.TITLE_MODE, {begin: n})]
        }, {variants: [{begin: "\\." + n}, {begin: "\\$" + n}], relevance: 0}, {
            className: "class",
            beginKeywords: "class",
            end: /[{;=]/,
            excludeEnd: !0,
            illegal: /[:"[\]]/,
            contains: [{beginKeywords: "extends"}, e.UNDERSCORE_TITLE_MODE]
        }, {
            begin: /\b(?=constructor)/,
            end: /[{;]/,
            excludeEnd: !0,
            contains: [e.inherit(e.TITLE_MODE, {begin: n}), "self", m]
        }, {
            begin: "(get|set)\\s+(?=" + n + "\\()",
            end: /\{/,
            keywords: "get set",
            contains: [e.inherit(e.TITLE_MODE, {begin: n}), {begin: /\(\)/}, m]
        }, {begin: /\$[(.]/}]
    }
}

function pp(e) {
    const t = ["and", "as", "assert", "async", "await", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "", "from", "global", "if", "import", "in", "is", "lambda", "nonlocal|10", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"],
        n = ["__import__", "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"],
        r = ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"],
        i = {keyword: t.join(" "), built_in: n.join(" "), literal: r.join(" ")},
        l = {className: "meta", begin: /^(>>>|\.\.\.) /},
        o = {className: "subst", begin: /\{/, end: /\}/, keywords: i, illegal: /#/}, s = {begin: /\{\{/, relevance: 0},
        a = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE],
            variants: [{
                begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
                end: /'''/,
                contains: [e.BACKSLASH_ESCAPE, l],
                relevance: 10
            }, {
                begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
                end: /"""/,
                contains: [e.BACKSLASH_ESCAPE, l],
                relevance: 10
            }, {
                begin: /([fF][rR]|[rR][fF]|[fF])'''/,
                end: /'''/,
                contains: [e.BACKSLASH_ESCAPE, l, s, o]
            }, {
                begin: /([fF][rR]|[rR][fF]|[fF])"""/,
                end: /"""/,
                contains: [e.BACKSLASH_ESCAPE, l, s, o]
            }, {begin: /([uU]|[rR])'/, end: /'/, relevance: 10}, {
                begin: /([uU]|[rR])"/,
                end: /"/,
                relevance: 10
            }, {begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/}, {
                begin: /([bB]|[bB][rR]|[rR][bB])"/,
                end: /"/
            }, {
                begin: /([fF][rR]|[rR][fF]|[fF])'/,
                end: /'/,
                contains: [e.BACKSLASH_ESCAPE, s, o]
            }, {
                begin: /([fF][rR]|[rR][fF]|[fF])"/,
                end: /"/,
                contains: [e.BACKSLASH_ESCAPE, s, o]
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
        }, u = "[0-9](_?[0-9])*", d = `(\\b(${u}))?\\.(${u})|\\b(${u})\\.`, h = {
            className: "number",
            relevance: 0,
            variants: [{begin: `(\\b(${u})|(${d}))[eE][+-]?(${u})[jJ]?\\b`}, {begin: `(${d})[jJ]?`}, {begin: "\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b"}, {begin: "\\b0[bB](_?[01])+[lL]?\\b"}, {begin: "\\b0[oO](_?[0-7])+[lL]?\\b"}, {begin: "\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b"}, {begin: `\\b(${u})[jJ]\\b`}]
        }, p = {
            className: "params",
            variants: [{begin: /\(\s*\)/, skip: !0, className: null}, {
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: i,
                contains: ["self", l, h, a, e.HASH_COMMENT_MODE]
            }]
        };
    return o.contains = [a, h, l], {
        name: "Python",
        aliases: ["py", "gyp", "ipython"],
        keywords: i,
        illegal: /(<\/|->|\?)|=>/,
        contains: [l, h, {begin: /\bself\b/}, {
            beginKeywords: "if",
            relevance: 0
        }, a, e.HASH_COMMENT_MODE, {
            variants: [{className: "function", beginKeywords: "def"}, {
                className: "class",
                beginKeywords: "class"
            }],
            end: /:/,
            illegal: /[${=;\n,]/,
            contains: [e.UNDERSCORE_TITLE_MODE, p, {begin: /->/, endsWithParent: !0, keywords: "None"}]
        }, {className: "meta", begin: /^[\t ]*@/, end: /(?=#)|$/, contains: [h, p, a]}, {begin: /\b(print|exec)\(/}]
    }
}

function mp(e) {
    var t = ["bool", "byte", "char", "decimal", "delegate", "double", "dynamic", "enum", "float", "int", "long", "nint", "nuint", "object", "sbyte", "short", "string", "ulong", "unit", "ushort"],
        n = ["public", "private", "protected", "static", "internal", "protected", "abstract", "async", "extern", "override", "unsafe", "virtual", "new", "sealed", "partial"],
        r = ["default", "false", "null", "true"],
        i = ["abstract", "as", "base", "break", "case", "class", "const", "continue", "do", "else", "event", "explicit", "extern", "finally", "fixed", "for", "foreach", "goto", "if", "implicit", "in", "interface", "internal", "is", "lock", "namespace", "new", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "record", "ref", "return", "sealed", "sizeof", "stackalloc", "static", "struct", "switch", "this", "throw", "try", "typeof", "unchecked", "unsafe", "using", "virtual", "void", "volatile", "while"],
        l = ["add", "alias", "and", "ascending", "async", "await", "by", "descending", "equals", "from", "get", "global", "group", "init", "into", "join", "let", "nameof", "not", "notnull", "on", "or", "orderby", "partial", "remove", "select", "set", "unmanaged", "value|0", "var", "when", "where", "with", "yield"],
        o = {keyword: i.concat(l).join(" "), built_in: t.join(" "), literal: r.join(" ")},
        s = e.inherit(e.TITLE_MODE, {begin: "[a-zA-Z](\\.?\\w)*"}), a = {
            className: "number",
            variants: [{begin: "\\b(0b[01']+)"}, {begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"}, {begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],
            relevance: 0
        }, u = {className: "string", begin: '@"', end: '"', contains: [{begin: '""'}]}, d = e.inherit(u, {illegal: /\n/}),
        h = {className: "subst", begin: /\{/, end: /\}/, keywords: o}, p = e.inherit(h, {illegal: /\n/}), S = {
            className: "string",
            begin: /\$"/,
            end: '"',
            illegal: /\n/,
            contains: [{begin: /\{\{/}, {begin: /\}\}/}, e.BACKSLASH_ESCAPE, p]
        }, w = {
            className: "string",
            begin: /\$@"/,
            end: '"',
            contains: [{begin: /\{\{/}, {begin: /\}\}/}, {begin: '""'}, h]
        }, k = e.inherit(w, {illegal: /\n/, contains: [{begin: /\{\{/}, {begin: /\}\}/}, {begin: '""'}, p]});
    h.contains = [w, S, u, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, a, e.C_BLOCK_COMMENT_MODE], p.contains = [k, S, d, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, a, e.inherit(e.C_BLOCK_COMMENT_MODE, {illegal: /\n/})];
    var L = {variants: [w, S, u, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]},
        f = {begin: "<", end: ">", contains: [{beginKeywords: "in out"}, s]},
        c = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?",
        m = {begin: "@" + e.IDENT_RE, relevance: 0};
    return {
        name: "C#",
        aliases: ["cs", "c#"],
        keywords: o,
        illegal: /::/,
        contains: [e.COMMENT("///", "$", {
            returnBegin: !0,
            contains: [{
                className: "doctag",
                variants: [{begin: "///", relevance: 0}, {begin: "<!--|-->"}, {begin: "</?", end: ">"}]
            }]
        }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
            className: "meta",
            begin: "#",
            end: "$",
            keywords: {"meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"}
        }, L, a, {
            beginKeywords: "class interface",
            relevance: 0,
            end: /[{;=]/,
            illegal: /[^\s:,]/,
            contains: [{beginKeywords: "where class"}, s, f, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }, {
            beginKeywords: "namespace",
            relevance: 0,
            end: /[{;=]/,
            illegal: /[^\s:]/,
            contains: [s, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }, {
            beginKeywords: "record",
            relevance: 0,
            end: /[{;=]/,
            illegal: /[^\s:]/,
            contains: [s, f, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }, {
            className: "meta",
            begin: "^\\s*\\[",
            excludeBegin: !0,
            end: "\\]",
            excludeEnd: !0,
            contains: [{className: "meta-string", begin: /"/, end: /"/}]
        }, {beginKeywords: "new return throw await else", relevance: 0}, {
            className: "function",
            begin: "(" + c + "\\s+)+" + e.IDENT_RE + "\\s*(<.+>\\s*)?\\(",
            returnBegin: !0,
            end: /\s*[{;=]/,
            excludeEnd: !0,
            keywords: o,
            contains: [{beginKeywords: n.join(" "), relevance: 0}, {
                begin: e.IDENT_RE + "\\s*(<.+>\\s*)?\\(",
                returnBegin: !0,
                contains: [e.TITLE_MODE, f],
                relevance: 0
            }, {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                keywords: o,
                relevance: 0,
                contains: [L, a, e.C_BLOCK_COMMENT_MODE]
            }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }, m]
    }
}

var tn = "[0-9](_*[0-9])*", Pr = `\\.(${tn})`, Dr = "[0-9a-fA-F](_*[0-9a-fA-F])*", hp = {
    className: "number",
    variants: [{begin: `(\\b(${tn})((${Pr})|\\.)?|(${Pr}))[eE][+-]?(${tn})[fFdD]?\\b`}, {begin: `\\b(${tn})((${Pr})[fFdD]?\\b|\\.([fFdD]\\b)?)`}, {begin: `(${Pr})[fFdD]?\\b`}, {begin: `\\b(${tn})[fFdD]\\b`}, {begin: `\\b0[xX]((${Dr})\\.?|(${Dr})?\\.(${Dr}))[pP][+-]?(${tn})[fFdD]?\\b`}, {begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"}, {begin: `\\b0[xX](${Dr})[lL]?\\b`}, {begin: "\\b0(_*[0-7])*[lL]?\\b"}, {begin: "\\b0[bB][01](_*[01])*[lL]?\\b"}],
    relevance: 0
};

function gp(e) {
    var t = "[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*", n = t + "(<" + t + "(\\s*,\\s*" + t + ")*>)?",
        r = "false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",
        i = {className: "meta", begin: "@" + t, contains: [{begin: /\(/, end: /\)/, contains: ["self"]}]};
    const l = hp;
    return {
        name: "Java",
        aliases: ["jsp"],
        keywords: r,
        illegal: /<\/|#/,
        contains: [e.COMMENT("/\\*\\*", "\\*/", {
            relevance: 0,
            contains: [{begin: /\w+@/, relevance: 0}, {className: "doctag", begin: "@[A-Za-z]+"}]
        }), {
            begin: /import java\.[a-z]+\./,
            keywords: "import",
            relevance: 2
        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
            className: "class",
            beginKeywords: "class interface enum",
            end: /[{;=]/,
            excludeEnd: !0,
            keywords: "class interface enum",
            illegal: /[:"\[\]]/,
            contains: [{beginKeywords: "extends implements"}, e.UNDERSCORE_TITLE_MODE]
        }, {beginKeywords: "new throw return else", relevance: 0}, {
            className: "class",
            begin: "record\\s+" + e.UNDERSCORE_IDENT_RE + "\\s*\\(",
            returnBegin: !0,
            excludeEnd: !0,
            end: /[{;=]/,
            keywords: r,
            contains: [{beginKeywords: "record"}, {
                begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                returnBegin: !0,
                relevance: 0,
                contains: [e.UNDERSCORE_TITLE_MODE]
            }, {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: r,
                relevance: 0,
                contains: [e.C_BLOCK_COMMENT_MODE]
            }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }, {
            className: "function",
            begin: "(" + n + "\\s+)+" + e.UNDERSCORE_IDENT_RE + "\\s*\\(",
            returnBegin: !0,
            end: /[{;=]/,
            excludeEnd: !0,
            keywords: r,
            contains: [{
                begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                returnBegin: !0,
                relevance: 0,
                contains: [e.UNDERSCORE_TITLE_MODE]
            }, {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: r,
                relevance: 0,
                contains: [i, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, l, e.C_BLOCK_COMMENT_MODE]
            }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }, l, i]
    }
}

Nr.registerLanguage("javascript", fp);
Nr.registerLanguage("python", pp);
Nr.registerLanguage("csharp", mp);
Nr.registerLanguage("java", gp);
const vp = ({text: e, language: t, highlight: n = [], revealLine: r}) => {
    const i = A.exports.useMemo(() => {
        const o = [];
        let s;
        for (const a of e.split(`
`)) {
            const u = Nr.highlight(t, a, !0, s);
            s = u.top, o.push(u.value)
        }
        return o
    }, [e, t]), l = A.exports.createRef();
    return A.exports.useLayoutEffect(() => {
        typeof r == "number" && l.current && l.current.scrollIntoView({block: "center", inline: "nearest"})
    }, [l, r]), g("div", {
        className: "source", children: i.map((o, s) => {
            const a = s + 1, u = n.find(h => h.line === a), d = u ? `source-line source-line-${u.type}` : "source-line";
            return I("div", {
                className: d,
                ref: r === a ? l : null,
                children: [g("div", {className: "source-line-number", children: a}), g("div", {
                    className: "source-code",
                    dangerouslySetInnerHTML: {__html: o}
                })]
            }, a)
        })
    })
};
const yp = ({action: e, setSelectedFrame: t, selectedFrame: n}) => {
    const r = (e == null ? void 0 : e.metadata.stack) || [];
    return g("div", {
        className: "stack-trace", children: r.map((i, l) => {
            const o = i.file[1] === ":" ? "\\" : "/";
            return I("div", {
                className: "stack-trace-frame" + (n === l ? " selected" : ""),
                onClick: () => {
                    t(l)
                },
                children: [g("span", {
                    className: "stack-trace-frame-function",
                    children: i.function || "(anonymous)"
                }), g("span", {
                    className: "stack-trace-frame-location",
                    children: i.file.split(o).pop()
                }), g("span", {className: "stack-trace-frame-line", children: ":" + i.line})]
            }, l)
        })
    })
}, wp = ({action: e}) => {
    var h;
    const [t, n] = A.exports.useState(), [r, i] = A.exports.useState(0), [l, o] = A.exports.useState(!1);
    t !== e && (n(e), i(0), o(!0));
    const s = A.exports.useMemo(() => {
            if (!e) return "";
            const {metadata: p} = e;
            return p.stack ? {frames: p.stack, fileContent: new Map} : ""
        }, [e]), a = ff(async () => {
            let p;
            if (typeof s == "string") p = s; else {
                const S = s.frames[r].file;
                if (!s.fileContent.has(S)) {
                    const w = await Ep(S);
                    s.fileContent.set(S, await fetch(`sha1/src@${w}.txt`).then(k => k.text()).catch(k => `<Unable to read "${S}">`))
                }
                p = s.fileContent.get(S)
            }
            return p
        }, [s, r], ""), u = typeof s == "string" ? 0 : ((h = s.frames[r]) == null ? void 0 : h.line) || 0,
        d = A.exports.createRef();
    return A.exports.useLayoutEffect(() => {
        l && d.current && (d.current.scrollIntoView({block: "center", inline: "nearest"}), o(!1))
    }, [l, d]), I(Ll, {
        sidebarSize: 100,
        orientation: "vertical",
        children: [g(vp, {
            text: a,
            language: "javascript",
            highlight: [{line: u, type: "running"}],
            revealLine: u
        }), g(yp, {action: e, selectedFrame: r, setSelectedFrame: i})]
    })
};

async function Ep(e) {
    const t = new TextEncoder().encode(e), n = await crypto.subtle.digest("SHA-1", t), r = [], i = new DataView(n);
    for (let l = 0; l < i.byteLength; l += 1) {
        const o = i.getUint8(l).toString(16).padStart(2, "0");
        r.push(o)
    }
    return r.join("")
}

const Hs = ({tabs: e, selectedTab: t, setSelectedTab: n}) => g("div", {
    className: "tabbed-pane",
    children: I("div", {
        className: "vbox",
        children: [g("div", {
            className: "hbox",
            style: {flex: "none"},
            children: g("div", {
                className: "tab-strip",
                children: e.map(r => I("div", {
                    className: "tab-element " + (t === r.id ? "selected" : ""),
                    onClick: () => n(r.id),
                    children: [g("div", {className: "tab-label", children: r.title}), g("div", {
                        className: "tab-count",
                        children: r.count || ""
                    })]
                }, r.id))
            })
        }), e.map(r => {
            if (t === r.id) return g("div", {className: "tab-content", children: r.render()}, r.id)
        })]
    })
});
const Eu = {width: 200, height: 45}, Sp = ({context: e, boundaries: t, previewPoint: n}) => {
    var u;
    const [r, i] = Oo();
    let l = 0;
    if (i.current && n) {
        const d = i.current.getBoundingClientRect();
        l = (n.clientY - d.top) / Eu.height | 0
    }
    const o = (u = e.pages[l]) == null ? void 0 : u.screencastFrames;
    let s, a;
    if (n !== void 0 && o) {
        const d = t.minimum + (t.maximum - t.minimum) * n.x / r.width;
        s = o[su(o, d, Su) - 1], a = s ? Nu({width: s.width, height: s.height}, {
            width: window.innerWidth * 3 / 4 | 0,
            height: window.innerHeight * 3 / 4 | 0
        }) : void 0
    }
    return I("div", {
        className: "film-strip",
        ref: i,
        children: [e.pages.filter(d => d.screencastFrames.length).map((d, h) => g(Np, {
            boundaries: t,
            page: d,
            width: r.width
        }, h)), s && a && (n == null ? void 0 : n.x) !== void 0 && g("div", {
            className: "film-strip-hover",
            style: {width: a.width, height: a.height, top: r.bottom + 5, left: Math.min(n.x, r.width - a.width - 10)},
            children: g("img", {src: `sha1/${s.sha1}`, width: a.width, height: a.height})
        })]
    })
}, Np = ({boundaries: e, page: t, width: n}) => {
    const r = {width: 0, height: 0}, i = t.screencastFrames;
    for (const L of i) r.width = Math.max(r.width, L.width), r.height = Math.max(r.height, L.height);
    const l = Nu(r, Eu), o = 2.5, s = i[0].timestamp, a = i[i.length - 1].timestamp, u = e.maximum - e.minimum,
        d = (s - e.minimum) / u * n, h = (e.maximum - a) / u * n, S = (a - s) / u * n / (l.width + 2 * o) | 0,
        w = (a - s) / S, k = [];
    for (let L = 0; s && w && L < S; ++L) {
        const f = s + w * L, c = su(i, f, Su) - 1;
        k.push(g("div", {
            className: "film-strip-frame",
            style: {
                width: l.width,
                height: l.height,
                backgroundImage: `url(sha1/${i[c].sha1})`,
                backgroundSize: `${l.width}px ${l.height}px`,
                margin: o,
                marginRight: o
            }
        }, L))
    }
    return k.push(g("div", {
        className: "film-strip-frame",
        style: {
            width: l.width,
            height: l.height,
            backgroundImage: `url(sha1/${i[i.length - 1].sha1})`,
            backgroundSize: `${l.width}px ${l.height}px`,
            margin: o,
            marginRight: o
        }
    }, k.length)), g("div", {
        className: "film-strip-lane",
        style: {marginLeft: d + "px", marginRight: h + "px"},
        children: k
    })
};

function Su(e, t) {
    return e - t.timestamp
}

function Nu(e, t) {
    const n = Math.max(e.width / t.width, e.height / t.height);
    return {width: e.width / n | 0, height: e.height / n | 0}
}

const _p = ({context: e, boundaries: t, selectedAction: n, highlightedAction: r, onSelected: i, onHighlighted: l}) => {
    const [o, s] = Oo(), a = A.exports.useRef(null), [u, d] = A.exports.useState(), [h, p] = A.exports.useState(),
        S = A.exports.useMemo(() => kp(o.width, t), [o.width, t]), w = A.exports.useMemo(() => {
            const y = [];
            for (const N of e.actions) {
                let C = Vs(N.metadata.params.selector || "", 50);
                N.metadata.method === "goto" && (C = Vs(N.metadata.params.url || "", 50)), y.push({
                    action: N,
                    leftTime: N.metadata.startTime,
                    rightTime: N.metadata.endTime,
                    leftPosition: $n(o.width, t, N.metadata.startTime),
                    rightPosition: $n(o.width, t, N.metadata.endTime),
                    label: N.metadata.apiName + " " + C,
                    type: N.metadata.type + "." + N.metadata.method,
                    className: `${N.metadata.type}_${N.metadata.method}`.toLowerCase()
                })
            }
            for (const N of e.events) {
                const C = N.metadata.startTime;
                y.push({
                    event: N,
                    leftTime: C,
                    rightTime: C,
                    leftPosition: $n(o.width, t, C),
                    rightPosition: $n(o.width, t, C),
                    label: N.metadata.method,
                    type: N.metadata.type + "." + N.metadata.method,
                    className: `${N.metadata.type}_${N.metadata.method}`.toLowerCase()
                })
            }
            return y
        }, [e, t, o.width]), k = h !== void 0 ? w[h] : void 0;
    let L = w.find(y => y.action === (r || n));
    L = k || L;
    const f = (y, N) => {
        const C = ol(o.width, t, y), M = ol(o.width, t, y - 5), V = ol(o.width, t, y + 5);
        let U, G, Le;
        for (let ye = 0; ye < w.length; ye++) {
            const Pe = w[ye], B = xp / 2 + js(Pe), J = Math.max(Pe.leftTime, M), x = Math.min(Pe.rightTime, V),
                E = (Pe.leftTime + Pe.rightTime) / 2, T = Math.abs(C - E), R = Math.abs(N - B);
            J > x || (U === void 0 || R < G || Math.abs(R - G) < .01 && T < Le) && (U = ye, Le = T, G = R)
        }
        return U
    }, c = y => {
        if (!s.current || !a.current) return;
        const N = y.clientX - s.current.getBoundingClientRect().left,
            C = y.clientY - a.current.getBoundingClientRect().top, M = f(N, C);
        d({x: N, clientY: y.clientY}), p(M), typeof M == "number" && l(w[M].action)
    };
    return I("div", {
        ref: s,
        className: "timeline-view",
        onMouseMove: c,
        onMouseOver: c,
        onMouseLeave: () => {
            d(void 0), p(void 0), l(void 0)
        },
        onClick: y => {
            if (d(void 0), !s.current || !a.current) return;
            const N = y.clientX - s.current.getBoundingClientRect().left,
                C = y.clientY - a.current.getBoundingClientRect().top, M = f(N, C);
            if (M === void 0) return;
            const V = w[M].action;
            V && i(V)
        },
        children: [g("div", {
            className: "timeline-grid",
            children: S.map((y, N) => g("div", {
                className: "timeline-divider",
                style: {left: y.position + "px"},
                children: g("div", {className: "timeline-time", children: er(y.time - t.minimum)})
            }, N))
        }), g("div", {
            className: "timeline-lane timeline-labels",
            children: w.map((y, N) => g("div", {
                className: "timeline-label " + y.className + (L === y ? " selected" : ""),
                style: {left: y.leftPosition, maxWidth: 100},
                children: y.label
            }, N))
        }), g("div", {
            className: "timeline-lane timeline-bars",
            ref: a,
            children: w.map((y, N) => g("div", {
                className: "timeline-bar " + (y.action ? "action " : "") + (y.event ? "event " : "") + y.className + (L === y ? " selected" : ""),
                style: {
                    left: y.leftPosition + "px",
                    width: Math.max(1, y.rightPosition - y.leftPosition) + "px",
                    top: js(y) + "px"
                }
            }, N))
        }), g(Sp, {
            context: e,
            boundaries: t,
            previewPoint: u
        }), g("div", {
            className: "timeline-marker timeline-marker-hover",
            style: {display: u !== void 0 ? "block" : "none", left: ((u == null ? void 0 : u.x) || 0) + "px"}
        })]
    })
};

function kp(e, t) {
    let r = e / 64;
    const i = t.maximum - t.minimum, l = e / i;
    let o = i / r;
    const s = Math.ceil(Math.log(o) / Math.LN10);
    o = Math.pow(10, s), o * l >= 5 * 64 && (o = o / 5), o * l >= 2 * 64 && (o = o / 2);
    const a = t.minimum;
    let u = t.maximum;
    u += 64 / l, r = Math.ceil((u - a) / o), o || (r = 0);
    const d = [];
    for (let h = 0; h < r; ++h) {
        const p = a + o * h;
        d.push({position: $n(e, t, p), time: p})
    }
    return d
}

function $n(e, t, n) {
    return (n - t.minimum) / (t.maximum - t.minimum) * e
}

function ol(e, t, n) {
    return n / e * (t.maximum - t.minimum) + t.minimum
}

function Vs(e, t) {
    return e.length <= t ? e : e.substring(0, t - 1) + "\u2026"
}

const xp = 11;

function js(e) {
    var t;
    return e.event ? 22 : ((t = e.action) == null ? void 0 : t.metadata.method) === "waitForEventInfo" ? 0 : 11
}

const Tp = () => {
    const [e, t] = A.exports.useState([]), [n, r] = A.exports.useState([]), [i, l] = A.exports.useState(Ws), [o, s] = A.exports.useState(), [a, u] = A.exports.useState(), [d, h] = A.exports.useState("actions"), [p, S] = A.exports.useState("logs"), [w, k] = A.exports.useState({
            done: 0,
            total: 0
        }), [L, f] = A.exports.useState(!1), [c, m] = A.exports.useState(null), [v, y] = A.exports.useState(null),
        N = B => {
            const J = [], x = [], E = new URL(window.location.href);
            for (let R = 0; R < B.length; R++) {
                const P = B.item(R);
                if (!P) continue;
                const W = URL.createObjectURL(P);
                J.push(W), x.push(P.name), E.searchParams.append("trace", W), E.searchParams.append("traceFileName", P.name)
            }
            const T = E.toString();
            window.history.pushState({}, "", T), t(J), r(x), s(void 0), f(!1), m(null)
        }, C = B => {
            B.preventDefault(), N(B.dataTransfer.files)
        }, M = B => {
            B.preventDefault(), B.target.files && N(B.target.files)
        };
    A.exports.useEffect(() => {
        const B = new URL(window.location.href).searchParams.getAll("trace");
        for (const J of B) if (J.startsWith("file:")) {
            y(J || null);
            return
        }
        B.some(J => J.startsWith("blob:")) || t(B)
    }, [t]), A.exports.useEffect(() => {
        (async () => {
            if (e.length) {
                const B = E => {
                    E.data.method === "progress" && k(E.data.params)
                };
                navigator.serviceWorker.addEventListener("message", B), k({done: 0, total: 1});
                const J = [];
                for (let E = 0; E < e.length; E++) {
                    const T = e[E], R = new URLSearchParams;
                    R.set("trace", T), n.length && R.set("traceFileName", n[E]);
                    const P = await fetch(`context?${R.toString()}`);
                    if (!P.ok) {
                        t([]), m((await P.json()).error);
                        return
                    }
                    const W = await P.json();
                    J.push(W)
                }
                navigator.serviceWorker.removeEventListener("message", B);
                const x = new uu(J);
                k({done: 0, total: 0}), l(x)
            } else l(Ws)
        })()
    }, [e, n]);
    const V = {minimum: i.startTime, maximum: i.endTime};
    V.maximum += (V.maximum - V.minimum) / 20;
    const {errors: U, warnings: G} = o ? du(o) : {errors: 0, warnings: 0}, Le = U + G, ye = o ? pu(o).length : 0,
        Pe = [{id: "logs", title: "Call", count: 0, render: () => g(lf, {action: o})}, {
            id: "console",
            title: "Console",
            count: Le,
            render: () => g(sf, {action: o})
        }, {id: "network", title: "Network", count: ye, render: () => g(df, {action: o})}];
    return i.hasSource && Pe.push({
        id: "source",
        title: "Source",
        count: 0,
        render: () => g(wp, {action: o})
    }), I("div", {
        className: "vbox workbench",
        onDragOver: B => {
            B.preventDefault(), f(!0)
        },
        children: [I("div", {
            className: "hbox header",
            children: [g("div", {className: "logo", children: "\u{1F3AD}"}), g("div", {
                className: "product",
                children: "Playwright"
            }), i.title && g("div", {className: "title", children: i.title}), g("div", {className: "spacer"})]
        }), g("div", {
            style: {background: "white", paddingLeft: "20px", flex: "none", borderBottom: "1px solid #ddd"},
            children: g(_p, {
                context: i,
                boundaries: V,
                selectedAction: o,
                highlightedAction: a,
                onSelected: B => s(B),
                onHighlighted: B => u(B)
            })
        }), I(Ll, {
            sidebarSize: 300,
            orientation: "horizontal",
            sidebarIsFirst: !0,
            children: [I(Ll, {
                sidebarSize: 300,
                orientation: "horizontal",
                children: [g(pf, {action: o}), g(Hs, {tabs: Pe, selectedTab: p, setSelectedTab: S})]
            }), g(Hs, {
                tabs: [{
                    id: "actions",
                    title: "Actions",
                    count: 0,
                    render: () => g(rf, {
                        actions: i.actions, selectedAction: o, highlightedAction: a, onSelected: B => {
                            s(B)
                        }, onHighlighted: B => u(B), setSelectedTab: S
                    })
                }, {
                    id: "metadata", title: "Metadata", count: 0, render: () => {
                        var B, J;
                        return I("div", {
                            className: "vbox",
                            children: [g("div", {
                                className: "call-section",
                                style: {paddingTop: 2},
                                children: "Time"
                            }), i.wallTime && I("div", {
                                className: "call-line",
                                children: ["start time: ", g("span", {
                                    className: "datetime",
                                    title: new Date(i.wallTime).toLocaleString(),
                                    children: new Date(i.wallTime).toLocaleString()
                                })]
                            }), I("div", {
                                className: "call-line",
                                children: ["duration: ", g("span", {
                                    className: "number",
                                    title: er(i.endTime - i.startTime),
                                    children: er(i.endTime - i.startTime)
                                })]
                            }), g("div", {
                                className: "call-section",
                                children: "Browser"
                            }), I("div", {
                                className: "call-line",
                                children: ["engine: ", g("span", {
                                    className: "string",
                                    title: i.browserName,
                                    children: i.browserName
                                })]
                            }), i.platform && I("div", {
                                className: "call-line",
                                children: ["platform: ", g("span", {
                                    className: "string",
                                    title: i.platform,
                                    children: i.platform
                                })]
                            }), i.options.userAgent && I("div", {
                                className: "call-line",
                                children: ["user agent: ", g("span", {
                                    className: "datetime",
                                    title: i.options.userAgent,
                                    children: i.options.userAgent
                                })]
                            }), g("div", {
                                className: "call-section",
                                children: "Viewport"
                            }), i.options.viewport && I("div", {
                                className: "call-line",
                                children: ["width: ", g("span", {
                                    className: "number",
                                    title: String(!!((B = i.options.viewport) != null && B.width)),
                                    children: i.options.viewport.width
                                })]
                            }), i.options.viewport && I("div", {
                                className: "call-line",
                                children: ["height: ", g("span", {
                                    className: "number",
                                    title: String(!!((J = i.options.viewport) != null && J.height)),
                                    children: i.options.viewport.height
                                })]
                            }), I("div", {
                                className: "call-line",
                                children: ["is mobile: ", g("span", {
                                    className: "boolean",
                                    title: String(!!i.options.isMobile),
                                    children: String(!!i.options.isMobile)
                                })]
                            }), i.options.deviceScaleFactor && I("div", {
                                className: "call-line",
                                children: ["device scale: ", g("span", {
                                    className: "number",
                                    title: String(i.options.deviceScaleFactor),
                                    children: String(i.options.deviceScaleFactor)
                                })]
                            }), g("div", {
                                className: "call-section",
                                children: "Counts"
                            }), I("div", {
                                className: "call-line",
                                children: ["pages: ", g("span", {className: "number", children: i.pages.length})]
                            }), I("div", {
                                className: "call-line",
                                children: ["actions: ", g("span", {className: "number", children: i.actions.length})]
                            }), I("div", {
                                className: "call-line",
                                children: ["events: ", g("span", {className: "number", children: i.events.length})]
                            })]
                        })
                    }
                }], selectedTab: d, setSelectedTab: h
            })]
        }), !!w.total && g("div", {
            className: "progress",
            children: g("div", {className: "inner-progress", style: {width: 100 * w.done / w.total + "%"}})
        }), v && I("div", {
            className: "drop-target",
            children: [g("div", {children: "Trace Viewer uses Service Workers to show traces. To view trace:"}), I("div", {
                style: {paddingTop: 20},
                children: [I("div", {
                    children: ["1. Click ", g("a", {
                        href: v,
                        children: "here"
                    }), " to put your trace into the download shelf"]
                }), I("div", {
                    children: ["2. Go to ", g("a", {
                        href: "https://trace.playwright.dev",
                        children: "trace.playwright.dev"
                    })]
                }), g("div", {children: "3. Drop the trace from the download shelf into the page"})]
            })]
        }), !L && !v && (!e.length || c) && I("div", {
            className: "drop-target",
            children: [g("div", {className: "processing-error", children: c}), g("div", {
                className: "title",
                children: "Drop Playwright Trace to load"
            }), g("div", {children: "or"}), g("button", {
                onClick: () => {
                    const B = document.createElement("input");
                    B.type = "file", B.click(), B.addEventListener("change", J => M(J))
                }, children: "Select file"
            }), g("div", {
                style: {maxWidth: 400},
                children: "Playwright Trace Viewer is a Progressive Web App, it does not send your trace anywhere, it opens it locally."
            })]
        }), L && g("div", {
            className: "drop-target",
            onDragLeave: () => {
                f(!1)
            },
            onDrop: B => C(B),
            children: g("div", {className: "title", children: "Release to analyse the Playwright Trace"})
        })]
    })
}, Ws = new uu([]);
var _u = {exports: {}}, Be = {}, ku = {exports: {}}, xu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function (e) {
    function t(E, T) {
        var R = E.length;
        E.push(T);
        e:for (; 0 < R;) {
            var P = R - 1 >>> 1, W = E[P];
            if (0 < i(W, T)) E[P] = T, E[R] = W, R = P; else break e
        }
    }

    function n(E) {
        return E.length === 0 ? null : E[0]
    }

    function r(E) {
        if (E.length === 0) return null;
        var T = E[0], R = E.pop();
        if (R !== T) {
            E[0] = R;
            e:for (var P = 0, W = E.length, gt = W >>> 1; P < gt;) {
                var Fe = 2 * (P + 1) - 1, we = E[Fe], pe = Fe + 1, Bt = E[pe];
                if (0 > i(we, R)) pe < W && 0 > i(Bt, we) ? (E[P] = Bt, E[pe] = R, P = pe) : (E[P] = we, E[Fe] = R, P = Fe); else if (pe < W && 0 > i(Bt, R)) E[P] = Bt, E[pe] = R, P = pe; else break e
            }
        }
        return T
    }

    function i(E, T) {
        var R = E.sortIndex - T.sortIndex;
        return R !== 0 ? R : E.id - T.id
    }

    if (typeof performance == "object" && typeof performance.now == "function") {
        var l = performance;
        e.unstable_now = function () {
            return l.now()
        }
    } else {
        var o = Date, s = o.now();
        e.unstable_now = function () {
            return o.now() - s
        }
    }
    var a = [], u = [], d = 1, h = null, p = 3, S = !1, w = !1, k = !1,
        L = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate != "undefined" ? setImmediate : null;
    typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function m(E) {
        for (var T = n(u); T !== null;) {
            if (T.callback === null) r(u); else if (T.startTime <= E) r(u), T.sortIndex = T.expirationTime, t(a, T); else break;
            T = n(u)
        }
    }

    function v(E) {
        if (k = !1, m(E), !w) if (n(a) !== null) w = !0, J(y); else {
            var T = n(u);
            T !== null && x(v, T.startTime - E)
        }
    }

    function y(E, T) {
        w = !1, k && (k = !1, f(M), M = -1), S = !0;
        var R = p;
        try {
            for (m(T), h = n(a); h !== null && (!(h.expirationTime > T) || E && !G());) {
                var P = h.callback;
                if (typeof P == "function") {
                    h.callback = null, p = h.priorityLevel;
                    var W = P(h.expirationTime <= T);
                    T = e.unstable_now(), typeof W == "function" ? h.callback = W : h === n(a) && r(a), m(T)
                } else r(a);
                h = n(a)
            }
            if (h !== null) var gt = !0; else {
                var Fe = n(u);
                Fe !== null && x(v, Fe.startTime - T), gt = !1
            }
            return gt
        } finally {
            h = null, p = R, S = !1
        }
    }

    var N = !1, C = null, M = -1, V = 5, U = -1;

    function G() {
        return !(e.unstable_now() - U < V)
    }

    function Le() {
        if (C !== null) {
            var E = e.unstable_now();
            U = E;
            var T = !0;
            try {
                T = C(!0, E)
            } finally {
                T ? ye() : (N = !1, C = null)
            }
        } else N = !1
    }

    var ye;
    if (typeof c == "function") ye = function () {
        c(Le)
    }; else if (typeof MessageChannel != "undefined") {
        var Pe = new MessageChannel, B = Pe.port2;
        Pe.port1.onmessage = Le, ye = function () {
            B.postMessage(null)
        }
    } else ye = function () {
        L(Le, 0)
    };

    function J(E) {
        C = E, N || (N = !0, ye())
    }

    function x(E, T) {
        M = L(function () {
            E(e.unstable_now())
        }, T)
    }

    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (E) {
        E.callback = null
    }, e.unstable_continueExecution = function () {
        w || S || (w = !0, J(y))
    }, e.unstable_forceFrameRate = function (E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < E ? Math.floor(1e3 / E) : 5
    }, e.unstable_getCurrentPriorityLevel = function () {
        return p
    }, e.unstable_getFirstCallbackNode = function () {
        return n(a)
    }, e.unstable_next = function (E) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var T = 3;
                break;
            default:
                T = p
        }
        var R = p;
        p = T;
        try {
            return E()
        } finally {
            p = R
        }
    }, e.unstable_pauseExecution = function () {
    }, e.unstable_requestPaint = function () {
    }, e.unstable_runWithPriority = function (E, T) {
        switch (E) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                E = 3
        }
        var R = p;
        p = E;
        try {
            return T()
        } finally {
            p = R
        }
    }, e.unstable_scheduleCallback = function (E, T, R) {
        var P = e.unstable_now();
        switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? P + R : P) : R = P, E) {
            case 1:
                var W = -1;
                break;
            case 2:
                W = 250;
                break;
            case 5:
                W = 1073741823;
                break;
            case 4:
                W = 1e4;
                break;
            default:
                W = 5e3
        }
        return W = R + W, E = {
            id: d++,
            callback: T,
            priorityLevel: E,
            startTime: R,
            expirationTime: W,
            sortIndex: -1
        }, R > P ? (E.sortIndex = R, t(u, E), n(a) === null && E === n(u) && (k ? (f(M), M = -1) : k = !0, x(v, R - P))) : (E.sortIndex = W, t(a, E), w || S || (w = !0, J(y))), E
    }, e.unstable_shouldYield = G, e.unstable_wrapCallback = function (E) {
        var T = p;
        return function () {
            var R = p;
            p = T;
            try {
                return E.apply(this, arguments)
            } finally {
                p = R
            }
        }
    }
})(xu);
ku.exports = xu;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu = A.exports, ze = ku.exports;

function _(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}

var Cu = new Set, rr = {};

function Xt(e, t) {
    Nn(e, t), Nn(e + "Capture", t)
}

function Nn(e, t) {
    for (rr[e] = t, e = 0; e < t.length; e++) Cu.add(t[e])
}

var ft = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"),
    Il = Object.prototype.hasOwnProperty,
    Cp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ks = {}, Qs = {};

function Rp(e) {
    return Il.call(Qs, e) ? !0 : Il.call(Ks, e) ? !1 : Cp.test(e) ? Qs[e] = !0 : (Ks[e] = !0, !1)
}

function Mp(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case"function":
        case"symbol":
            return !0;
        case"boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Op(e, t, n, r) {
    if (t === null || typeof t == "undefined" || Mp(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ke(e, t, n, r, i, l, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = o
}

var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    fe[e] = new ke(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
    var t = e[0];
    fe[t] = new ke(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    fe[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    fe[e] = new ke(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    fe[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    fe[e] = new ke(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    fe[e] = new ke(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    fe[e] = new ke(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    fe[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Ao = /[\-:]([a-z])/g;

function zo(e) {
    return e[1].toUpperCase()
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(Ao, zo);
    fe[t] = new ke(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Ao, zo);
    fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Ao, zo);
    fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
fe.xlinkHref = new ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Bo(e, t, n, r) {
    var i = fe.hasOwnProperty(t) ? fe[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Op(t, n, i, r) && (n = null), r || i === null ? Rp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}

var ht = Tu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ir = Symbol.for("react.element"),
    nn = Symbol.for("react.portal"), rn = Symbol.for("react.fragment"), Uo = Symbol.for("react.strict_mode"),
    Al = Symbol.for("react.profiler"), Ru = Symbol.for("react.provider"), Mu = Symbol.for("react.context"),
    Fo = Symbol.for("react.forward_ref"), zl = Symbol.for("react.suspense"), Bl = Symbol.for("react.suspense_list"),
    $o = Symbol.for("react.memo"), yt = Symbol.for("react.lazy"), Ou = Symbol.for("react.offscreen"),
    Gs = Symbol.iterator;

function Ln(e) {
    return e === null || typeof e != "object" ? null : (e = Gs && e[Gs] || e["@@iterator"], typeof e == "function" ? e : null)
}

var te = Object.assign, sl;

function Hn(e) {
    if (sl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        sl = t && t[1] || ""
    }
    return `
` + sl + e
}

var al = !1;

function ul(e, t) {
    if (!e || al) return "";
    al = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t) if (t = function () {
            throw Error()
        }, Object.defineProperty(t.prototype, "props", {
            set: function () {
                throw Error()
            }
        }), typeof Reflect == "object" && Reflect.construct) {
            try {
                Reflect.construct(t, [])
            } catch (u) {
                var r = u
            }
            Reflect.construct(e, [], t)
        } else {
            try {
                t.call()
            } catch (u) {
                r = u
            }
            e.call(t.prototype)
        } else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), l = r.stack.split(`
`), o = i.length - 1, s = l.length - 1; 1 <= o && 0 <= s && i[o] !== l[s];) s--;
            for (; 1 <= o && 0 <= s; o--, s--) if (i[o] !== l[s]) {
                if (o !== 1 || s !== 1) do if (o--, s--, 0 > s || i[o] !== l[s]) {
                    var a = `
` + i[o].replace(" at new ", " at ");
                    return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                } while (1 <= o && 0 <= s);
                break
            }
        }
    } finally {
        al = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Hn(e) : ""
}

function Lp(e) {
    switch (e.tag) {
        case 5:
            return Hn(e.type);
        case 16:
            return Hn("Lazy");
        case 13:
            return Hn("Suspense");
        case 19:
            return Hn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = ul(e.type, !1), e;
        case 11:
            return e = ul(e.type.render, !1), e;
        case 1:
            return e = ul(e.type, !0), e;
        default:
            return ""
    }
}

function Ul(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case rn:
            return "Fragment";
        case nn:
            return "Portal";
        case Al:
            return "Profiler";
        case Uo:
            return "StrictMode";
        case zl:
            return "Suspense";
        case Bl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Mu:
            return (e.displayName || "Context") + ".Consumer";
        case Ru:
            return (e._context.displayName || "Context") + ".Provider";
        case Fo:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case $o:
            return t = e.displayName || null, t !== null ? t : Ul(e.type) || "Memo";
        case yt:
            t = e._payload, e = e._init;
            try {
                return Ul(e(t))
            } catch {
            }
    }
    return null
}

function Pp(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ul(t);
        case 8:
            return t === Uo ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Lt(e) {
    switch (typeof e) {
        case"boolean":
        case"number":
        case"string":
        case"undefined":
            return e;
        case"object":
            return e;
        default:
            return ""
    }
}

function Lu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Dp(e) {
    var t = Lu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n != "undefined" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get, l = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0, get: function () {
                return i.call(this)
            }, set: function (o) {
                r = "" + o, l.call(this, o)
            }
        }), Object.defineProperty(e, t, {enumerable: n.enumerable}), {
            getValue: function () {
                return r
            }, setValue: function (o) {
                r = "" + o
            }, stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Ar(e) {
    e._valueTracker || (e._valueTracker = Dp(e))
}

function Pu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Lu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function ci(e) {
    if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Fl(e, t) {
    var n = t.checked;
    return te({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n != null ? n : e._wrapperState.initialChecked
    })
}

function Ys(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Lt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Du(e, t) {
    t = t.checked, t != null && Bo(e, "checked", t, !1)
}

function $l(e, t) {
    Du(e, t);
    var n = Lt(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n); else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Hl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Hl(e, t.type, Lt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Xs(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Hl(e, t, n) {
    (t !== "number" || ci(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}

var Vn = Array.isArray;

function gn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Lt(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function Vl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
    return te({}, t, {value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue})
}

function qs(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(_(92));
            if (Vn(n)) {
                if (1 < n.length) throw Error(_(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {initialValue: Lt(n)}
}

function Iu(e, t) {
    var n = Lt(t.value), r = Lt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Zs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Au(e) {
    switch (e) {
        case"svg":
            return "http://www.w3.org/2000/svg";
        case"math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function jl(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Au(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}

var zr, zu = function (e) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function (t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
        })
    } : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t; else {
        for (zr = zr || document.createElement("div"), zr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = zr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function ir(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}

var Kn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, Ip = ["Webkit", "ms", "Moz", "O"];
Object.keys(Kn).forEach(function (e) {
    Ip.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Kn[t] = Kn[e]
    })
});

function Bu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Kn.hasOwnProperty(e) && Kn[e] ? ("" + t).trim() : t + "px"
}

function Uu(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = Bu(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
    }
}

var Ap = te({menuitem: !0}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Wl(e, t) {
    if (t) {
        if (Ap[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(_(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(_(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(_(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(_(62))
    }
}

function Kl(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case"annotation-xml":
        case"color-profile":
        case"font-face":
        case"font-face-src":
        case"font-face-uri":
        case"font-face-format":
        case"font-face-name":
        case"missing-glyph":
            return !1;
        default:
            return !0
    }
}

var Ql = null;

function Ho(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}

var Gl = null, vn = null, yn = null;

function Js(e) {
    if (e = xr(e)) {
        if (typeof Gl != "function") throw Error(_(280));
        var t = e.stateNode;
        t && (t = Vi(t), Gl(e.stateNode, e.type, t))
    }
}

function Fu(e) {
    vn ? yn ? yn.push(e) : yn = [e] : vn = e
}

function $u() {
    if (vn) {
        var e = vn, t = yn;
        if (yn = vn = null, Js(e), t) for (e = 0; e < t.length; e++) Js(t[e])
    }
}

function Hu(e, t) {
    return e(t)
}

function Vu() {
}

var cl = !1;

function ju(e, t, n) {
    if (cl) return e(t, n);
    cl = !0;
    try {
        return Hu(e, t, n)
    } finally {
        cl = !1, (vn !== null || yn !== null) && (Vu(), $u())
    }
}

function lr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Vi(n);
    if (r === null) return null;
    n = r[t];
    e:switch (t) {
        case"onClick":
        case"onClickCapture":
        case"onDoubleClick":
        case"onDoubleClickCapture":
        case"onMouseDown":
        case"onMouseDownCapture":
        case"onMouseMove":
        case"onMouseMoveCapture":
        case"onMouseUp":
        case"onMouseUpCapture":
        case"onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(_(231, t, typeof n));
    return n
}

var Yl = !1;
if (ft) try {
    var Pn = {};
    Object.defineProperty(Pn, "passive", {
        get: function () {
            Yl = !0
        }
    }), window.addEventListener("test", Pn, Pn), window.removeEventListener("test", Pn, Pn)
} catch {
    Yl = !1
}

function zp(e, t, n, r, i, l, o, s, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}

var Qn = !1, di = null, fi = !1, Xl = null, Bp = {
    onError: function (e) {
        Qn = !0, di = e
    }
};

function Up(e, t, n, r, i, l, o, s, a) {
    Qn = !1, di = null, zp.apply(Bp, arguments)
}

function Fp(e, t, n, r, i, l, o, s, a) {
    if (Up.apply(this, arguments), Qn) {
        if (Qn) {
            var u = di;
            Qn = !1, di = null
        } else throw Error(_(198));
        fi || (fi = !0, Xl = u)
    }
}

function qt(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return;) t = t.return; else {
        e = t;
        do t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Wu(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function bs(e) {
    if (qt(e) !== e) throw Error(_(188))
}

function $p(e) {
    var t = e.alternate;
    if (!t) {
        if (t = qt(e), t === null) throw Error(_(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var i = n.return;
        if (i === null) break;
        var l = i.alternate;
        if (l === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === l.child) {
            for (l = i.child; l;) {
                if (l === n) return bs(i), e;
                if (l === r) return bs(i), t;
                l = l.sibling
            }
            throw Error(_(188))
        }
        if (n.return !== r.return) n = i, r = l; else {
            for (var o = !1, s = i.child; s;) {
                if (s === n) {
                    o = !0, n = i, r = l;
                    break
                }
                if (s === r) {
                    o = !0, r = i, n = l;
                    break
                }
                s = s.sibling
            }
            if (!o) {
                for (s = l.child; s;) {
                    if (s === n) {
                        o = !0, n = l, r = i;
                        break
                    }
                    if (s === r) {
                        o = !0, r = l, n = i;
                        break
                    }
                    s = s.sibling
                }
                if (!o) throw Error(_(189))
            }
        }
        if (n.alternate !== r) throw Error(_(190))
    }
    if (n.tag !== 3) throw Error(_(188));
    return n.stateNode.current === n ? e : t
}

function Ku(e) {
    return e = $p(e), e !== null ? Qu(e) : null
}

function Qu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Qu(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}

var Gu = ze.unstable_scheduleCallback, ea = ze.unstable_cancelCallback, Hp = ze.unstable_shouldYield,
    Vp = ze.unstable_requestPaint, re = ze.unstable_now, jp = ze.unstable_getCurrentPriorityLevel,
    Vo = ze.unstable_ImmediatePriority, Yu = ze.unstable_UserBlockingPriority, pi = ze.unstable_NormalPriority,
    Wp = ze.unstable_LowPriority, Xu = ze.unstable_IdlePriority, Ui = null, it = null;

function Kp(e) {
    if (it && typeof it.onCommitFiberRoot == "function") try {
        it.onCommitFiberRoot(Ui, e, void 0, (e.current.flags & 128) === 128)
    } catch {
    }
}

var be = Math.clz32 ? Math.clz32 : Yp, Qp = Math.log, Gp = Math.LN2;

function Yp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Qp(e) / Gp | 0) | 0
}

var Br = 64, Ur = 4194304;

function jn(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function mi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, i = e.suspendedLanes, l = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
        var s = o & ~i;
        s !== 0 ? r = jn(s) : (l &= o, l !== 0 && (r = jn(l)))
    } else o = n & ~i, o !== 0 ? r = jn(o) : l !== 0 && (r = jn(l));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & i) === 0 && (i = r & -r, l = t & -t, i >= l || i === 16 && (l & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t;) n = 31 - be(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function Xp(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function qp(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
        var o = 31 - be(l), s = 1 << o, a = i[o];
        a === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Xp(s, t)) : a <= t && (e.expiredLanes |= s), l &= ~s
    }
}

function ql(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function qu() {
    var e = Br;
    return Br <<= 1, (Br & 4194240) === 0 && (Br = 64), e
}

function dl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function _r(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - be(t), e[t] = n
}

function Zp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - be(n), l = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~l
    }
}

function jo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - be(n), i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}

var K = 0;

function Zu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
}

var Ju, Wo, bu, ec, tc, Zl = !1, Fr = [], xt = null, Tt = null, Ct = null, or = new Map, sr = new Map, Et = [],
    Jp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function ta(e, t) {
    switch (e) {
        case"focusin":
        case"focusout":
            xt = null;
            break;
        case"dragenter":
        case"dragleave":
            Tt = null;
            break;
        case"mouseover":
        case"mouseout":
            Ct = null;
            break;
        case"pointerover":
        case"pointerout":
            or.delete(t.pointerId);
            break;
        case"gotpointercapture":
        case"lostpointercapture":
            sr.delete(t.pointerId)
    }
}

function Dn(e, t, n, r, i, l) {
    return e === null || e.nativeEvent !== l ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i]
    }, t !== null && (t = xr(t), t !== null && Wo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function bp(e, t, n, r, i) {
    switch (t) {
        case"focusin":
            return xt = Dn(xt, e, t, n, r, i), !0;
        case"dragenter":
            return Tt = Dn(Tt, e, t, n, r, i), !0;
        case"mouseover":
            return Ct = Dn(Ct, e, t, n, r, i), !0;
        case"pointerover":
            var l = i.pointerId;
            return or.set(l, Dn(or.get(l) || null, e, t, n, r, i)), !0;
        case"gotpointercapture":
            return l = i.pointerId, sr.set(l, Dn(sr.get(l) || null, e, t, n, r, i)), !0
    }
    return !1
}

function nc(e) {
    var t = $t(e.target);
    if (t !== null) {
        var n = qt(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Wu(n), t !== null) {
                    e.blockedOn = t, tc(e.priority, function () {
                        bu(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function ei(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Jl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Ql = r, n.target.dispatchEvent(r), Ql = null
        } else return t = xr(n), t !== null && Wo(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function na(e, t, n) {
    ei(e) && n.delete(t)
}

function em() {
    Zl = !1, xt !== null && ei(xt) && (xt = null), Tt !== null && ei(Tt) && (Tt = null), Ct !== null && ei(Ct) && (Ct = null), or.forEach(na), sr.forEach(na)
}

function In(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Zl || (Zl = !0, ze.unstable_scheduleCallback(ze.unstable_NormalPriority, em)))
}

function ar(e) {
    function t(i) {
        return In(i, e)
    }

    if (0 < Fr.length) {
        In(Fr[0], e);
        for (var n = 1; n < Fr.length; n++) {
            var r = Fr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (xt !== null && In(xt, e), Tt !== null && In(Tt, e), Ct !== null && In(Ct, e), or.forEach(t), sr.forEach(t), n = 0; n < Et.length; n++) r = Et[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Et.length && (n = Et[0], n.blockedOn === null);) nc(n), n.blockedOn === null && Et.shift()
}

var wn = ht.ReactCurrentBatchConfig, hi = !0;

function tm(e, t, n, r) {
    var i = K, l = wn.transition;
    wn.transition = null;
    try {
        K = 1, Ko(e, t, n, r)
    } finally {
        K = i, wn.transition = l
    }
}

function nm(e, t, n, r) {
    var i = K, l = wn.transition;
    wn.transition = null;
    try {
        K = 4, Ko(e, t, n, r)
    } finally {
        K = i, wn.transition = l
    }
}

function Ko(e, t, n, r) {
    if (hi) {
        var i = Jl(e, t, n, r);
        if (i === null) Sl(e, t, r, gi, n), ta(e, r); else if (bp(i, e, t, n, r)) r.stopPropagation(); else if (ta(e, r), t & 4 && -1 < Jp.indexOf(e)) {
            for (; i !== null;) {
                var l = xr(i);
                if (l !== null && Ju(l), l = Jl(e, t, n, r), l === null && Sl(e, t, r, gi, n), l === i) break;
                i = l
            }
            i !== null && r.stopPropagation()
        } else Sl(e, t, r, null, n)
    }
}

var gi = null;

function Jl(e, t, n, r) {
    if (gi = null, e = Ho(r), e = $t(e), e !== null) if (t = qt(e), t === null) e = null; else if (n = t.tag, n === 13) {
        if (e = Wu(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return gi = e, null
}

function rc(e) {
    switch (e) {
        case"cancel":
        case"click":
        case"close":
        case"contextmenu":
        case"copy":
        case"cut":
        case"auxclick":
        case"dblclick":
        case"dragend":
        case"dragstart":
        case"drop":
        case"focusin":
        case"focusout":
        case"input":
        case"invalid":
        case"keydown":
        case"keypress":
        case"keyup":
        case"mousedown":
        case"mouseup":
        case"paste":
        case"pause":
        case"play":
        case"pointercancel":
        case"pointerdown":
        case"pointerup":
        case"ratechange":
        case"reset":
        case"resize":
        case"seeked":
        case"submit":
        case"touchcancel":
        case"touchend":
        case"touchstart":
        case"volumechange":
        case"change":
        case"selectionchange":
        case"textInput":
        case"compositionstart":
        case"compositionend":
        case"compositionupdate":
        case"beforeblur":
        case"afterblur":
        case"beforeinput":
        case"blur":
        case"fullscreenchange":
        case"focus":
        case"hashchange":
        case"popstate":
        case"select":
        case"selectstart":
            return 1;
        case"drag":
        case"dragenter":
        case"dragexit":
        case"dragleave":
        case"dragover":
        case"mousemove":
        case"mouseout":
        case"mouseover":
        case"pointermove":
        case"pointerout":
        case"pointerover":
        case"scroll":
        case"toggle":
        case"touchmove":
        case"wheel":
        case"mouseenter":
        case"mouseleave":
        case"pointerenter":
        case"pointerleave":
            return 4;
        case"message":
            switch (jp()) {
                case Vo:
                    return 1;
                case Yu:
                    return 4;
                case pi:
                case Wp:
                    return 16;
                case Xu:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}

var _t = null, Qo = null, ti = null;

function ic() {
    if (ti) return ti;
    var e, t = Qo, n = t.length, r, i = "value" in _t ? _t.value : _t.textContent, l = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[l - r]; r++) ;
    return ti = i.slice(e, 1 < r ? 1 - r : void 0)
}

function ni(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function $r() {
    return !0
}

function ra() {
    return !1
}

function Ue(e) {
    function t(n, r, i, l, o) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = l, this.target = o, this.currentTarget = null;
        for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
        return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? $r : ra, this.isPropagationStopped = ra, this
    }

    return te(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = $r)
        }, stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = $r)
        }, persist: function () {
        }, isPersistent: $r
    }), t
}

var Mn = {
        eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) {
            return e.timeStamp || Date.now()
        }, defaultPrevented: 0, isTrusted: 0
    }, Go = Ue(Mn), kr = te({}, Mn, {view: 0, detail: 0}), rm = Ue(kr), fl, pl, An, Fi = te({}, kr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Yo,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== An && (An && e.type === "mousemove" ? (fl = e.screenX - An.screenX, pl = e.screenY - An.screenY) : pl = fl = 0, An = e), fl)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : pl
        }
    }), ia = Ue(Fi), im = te({}, Fi, {dataTransfer: 0}), lm = Ue(im), om = te({}, kr, {relatedTarget: 0}), ml = Ue(om),
    sm = te({}, Mn, {animationName: 0, elapsedTime: 0, pseudoElement: 0}), am = Ue(sm), um = te({}, Mn, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), cm = Ue(um), dm = te({}, Mn, {data: 0}), la = Ue(dm), fm = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, pm = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, mm = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

function hm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = mm[e]) ? !!t[e] : !1
}

function Yo() {
    return hm
}

var gm = te({}, kr, {
    key: function (e) {
        if (e.key) {
            var t = fm[e.key] || e.key;
            if (t !== "Unidentified") return t
        }
        return e.type === "keypress" ? (e = ni(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? pm[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Yo,
    charCode: function (e) {
        return e.type === "keypress" ? ni(e) : 0
    },
    keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
        return e.type === "keypress" ? ni(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
}), vm = Ue(gm), ym = te({}, Fi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
}), oa = Ue(ym), wm = te({}, kr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Yo
}), Em = Ue(wm), Sm = te({}, Mn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}), Nm = Ue(Sm), _m = te({}, Fi, {
    deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    }, deltaY: function (e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    }, deltaZ: 0, deltaMode: 0
}), km = Ue(_m), xm = [9, 13, 27, 32], Xo = ft && "CompositionEvent" in window, Gn = null;
ft && "documentMode" in document && (Gn = document.documentMode);
var Tm = ft && "TextEvent" in window && !Gn, lc = ft && (!Xo || Gn && 8 < Gn && 11 >= Gn), sa = String.fromCharCode(32),
    aa = !1;

function oc(e, t) {
    switch (e) {
        case"keyup":
            return xm.indexOf(t.keyCode) !== -1;
        case"keydown":
            return t.keyCode !== 229;
        case"keypress":
        case"mousedown":
        case"focusout":
            return !0;
        default:
            return !1
    }
}

function sc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}

var ln = !1;

function Cm(e, t) {
    switch (e) {
        case"compositionend":
            return sc(t);
        case"keypress":
            return t.which !== 32 ? null : (aa = !0, sa);
        case"textInput":
            return e = t.data, e === sa && aa ? null : e;
        default:
            return null
    }
}

function Rm(e, t) {
    if (ln) return e === "compositionend" || !Xo && oc(e, t) ? (e = ic(), ti = Qo = _t = null, ln = !1, e) : null;
    switch (e) {
        case"paste":
            return null;
        case"keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case"compositionend":
            return lc && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}

var Mm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function ua(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Mm[e.type] : t === "textarea"
}

function ac(e, t, n, r) {
    Fu(r), t = vi(t, "onChange"), 0 < t.length && (n = new Go("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}

var Yn = null, ur = null;

function Om(e) {
    wc(e, 0)
}

function $i(e) {
    var t = an(e);
    if (Pu(t)) return e
}

function Lm(e, t) {
    if (e === "change") return t
}

var uc = !1;
if (ft) {
    var hl;
    if (ft) {
        var gl = "oninput" in document;
        if (!gl) {
            var ca = document.createElement("div");
            ca.setAttribute("oninput", "return;"), gl = typeof ca.oninput == "function"
        }
        hl = gl
    } else hl = !1;
    uc = hl && (!document.documentMode || 9 < document.documentMode)
}

function da() {
    Yn && (Yn.detachEvent("onpropertychange", cc), ur = Yn = null)
}

function cc(e) {
    if (e.propertyName === "value" && $i(ur)) {
        var t = [];
        ac(t, ur, e, Ho(e)), ju(Om, t)
    }
}

function Pm(e, t, n) {
    e === "focusin" ? (da(), Yn = t, ur = n, Yn.attachEvent("onpropertychange", cc)) : e === "focusout" && da()
}

function Dm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return $i(ur)
}

function Im(e, t) {
    if (e === "click") return $i(t)
}

function Am(e, t) {
    if (e === "input" || e === "change") return $i(t)
}

function zm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}

var et = typeof Object.is == "function" ? Object.is : zm;

function cr(e, t) {
    if (et(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Il.call(t, i) || !et(e[i], t[i])) return !1
    }
    return !0
}

function fa(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function pa(e, t) {
    var n = fa(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {node: n, offset: t - e};
            e = r
        }
        e:{
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = fa(n)
    }
}

function dc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? dc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function fc() {
    for (var e = window, t = ci(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow; else break;
        t = ci(e.document)
    }
    return t
}

function qo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Bm(e) {
    var t = fc(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && dc(n.ownerDocument.documentElement, n)) {
        if (r !== null && qo(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length); else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length, l = Math.min(r.start, i);
                r = r.end === void 0 ? l : Math.min(r.end, i), !e.extend && l > r && (i = r, r = l, l = i), i = pa(n, l);
                var o = pa(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}

var Um = ft && "documentMode" in document && 11 >= document.documentMode, on = null, bl = null, Xn = null, eo = !1;

function ma(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    eo || on == null || on !== ci(r) || (r = on, "selectionStart" in r && qo(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Xn && cr(Xn, r) || (Xn = r, r = vi(bl, "onSelect"), 0 < r.length && (t = new Go("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = on)))
}

function Hr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}

var sn = {
    animationend: Hr("Animation", "AnimationEnd"),
    animationiteration: Hr("Animation", "AnimationIteration"),
    animationstart: Hr("Animation", "AnimationStart"),
    transitionend: Hr("Transition", "TransitionEnd")
}, vl = {}, pc = {};
ft && (pc = document.createElement("div").style, "AnimationEvent" in window || (delete sn.animationend.animation, delete sn.animationiteration.animation, delete sn.animationstart.animation), "TransitionEvent" in window || delete sn.transitionend.transition);

function Hi(e) {
    if (vl[e]) return vl[e];
    if (!sn[e]) return e;
    var t = sn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in pc) return vl[e] = t[n];
    return e
}

var mc = Hi("animationend"), hc = Hi("animationiteration"), gc = Hi("animationstart"), vc = Hi("transitionend"),
    yc = new Map,
    ha = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function It(e, t) {
    yc.set(e, t), Xt(t, [e])
}

for (var yl = 0; yl < ha.length; yl++) {
    var wl = ha[yl], Fm = wl.toLowerCase(), $m = wl[0].toUpperCase() + wl.slice(1);
    It(Fm, "on" + $m)
}
It(mc, "onAnimationEnd");
It(hc, "onAnimationIteration");
It(gc, "onAnimationStart");
It("dblclick", "onDoubleClick");
It("focusin", "onFocus");
It("focusout", "onBlur");
It(vc, "onTransitionEnd");
Nn("onMouseEnter", ["mouseout", "mouseover"]);
Nn("onMouseLeave", ["mouseout", "mouseover"]);
Nn("onPointerEnter", ["pointerout", "pointerover"]);
Nn("onPointerLeave", ["pointerout", "pointerover"]);
Xt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Xt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Xt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Xt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Xt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Wn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Hm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wn));

function ga(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Fp(r, t, void 0, e), e.currentTarget = null
}

function wc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n], i = r.event;
        r = r.listeners;
        e:{
            var l = void 0;
            if (t) for (var o = r.length - 1; 0 <= o; o--) {
                var s = r[o], a = s.instance, u = s.currentTarget;
                if (s = s.listener, a !== l && i.isPropagationStopped()) break e;
                ga(i, s, u), l = a
            } else for (o = 0; o < r.length; o++) {
                if (s = r[o], a = s.instance, u = s.currentTarget, s = s.listener, a !== l && i.isPropagationStopped()) break e;
                ga(i, s, u), l = a
            }
        }
    }
    if (fi) throw e = Xl, fi = !1, Xl = null, e
}

function X(e, t) {
    var n = t[lo];
    n === void 0 && (n = t[lo] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Ec(t, e, 2, !1), n.add(r))
}

function El(e, t, n) {
    var r = 0;
    t && (r |= 4), Ec(n, e, r, t)
}

var Vr = "_reactListening" + Math.random().toString(36).slice(2);

function dr(e) {
    if (!e[Vr]) {
        e[Vr] = !0, Cu.forEach(function (n) {
            n !== "selectionchange" && (Hm.has(n) || El(n, !1, e), El(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Vr] || (t[Vr] = !0, El("selectionchange", !1, t))
    }
}

function Ec(e, t, n, r) {
    switch (rc(t)) {
        case 1:
            var i = tm;
            break;
        case 4:
            i = nm;
            break;
        default:
            i = Ko
    }
    n = i.bind(null, t, n, e), i = void 0, !Yl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {passive: i}) : e.addEventListener(t, n, !1)
}

function Sl(e, t, n, r, i) {
    var l = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e:for (; ;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var s = r.stateNode.containerInfo;
            if (s === i || s.nodeType === 8 && s.parentNode === i) break;
            if (o === 4) for (o = r.return; o !== null;) {
                var a = o.tag;
                if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
                o = o.return
            }
            for (; s !== null;) {
                if (o = $t(s), o === null) return;
                if (a = o.tag, a === 5 || a === 6) {
                    r = l = o;
                    continue e
                }
                s = s.parentNode
            }
        }
        r = r.return
    }
    ju(function () {
        var u = l, d = Ho(n), h = [];
        e:{
            var p = yc.get(e);
            if (p !== void 0) {
                var S = Go, w = e;
                switch (e) {
                    case"keypress":
                        if (ni(n) === 0) break e;
                    case"keydown":
                    case"keyup":
                        S = vm;
                        break;
                    case"focusin":
                        w = "focus", S = ml;
                        break;
                    case"focusout":
                        w = "blur", S = ml;
                        break;
                    case"beforeblur":
                    case"afterblur":
                        S = ml;
                        break;
                    case"click":
                        if (n.button === 2) break e;
                    case"auxclick":
                    case"dblclick":
                    case"mousedown":
                    case"mousemove":
                    case"mouseup":
                    case"mouseout":
                    case"mouseover":
                    case"contextmenu":
                        S = ia;
                        break;
                    case"drag":
                    case"dragend":
                    case"dragenter":
                    case"dragexit":
                    case"dragleave":
                    case"dragover":
                    case"dragstart":
                    case"drop":
                        S = lm;
                        break;
                    case"touchcancel":
                    case"touchend":
                    case"touchmove":
                    case"touchstart":
                        S = Em;
                        break;
                    case mc:
                    case hc:
                    case gc:
                        S = am;
                        break;
                    case vc:
                        S = Nm;
                        break;
                    case"scroll":
                        S = rm;
                        break;
                    case"wheel":
                        S = km;
                        break;
                    case"copy":
                    case"cut":
                    case"paste":
                        S = cm;
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                    case"pointercancel":
                    case"pointerdown":
                    case"pointermove":
                    case"pointerout":
                    case"pointerover":
                    case"pointerup":
                        S = oa
                }
                var k = (t & 4) !== 0, L = !k && e === "scroll", f = k ? p !== null ? p + "Capture" : null : p;
                k = [];
                for (var c = u, m; c !== null;) {
                    m = c;
                    var v = m.stateNode;
                    if (m.tag === 5 && v !== null && (m = v, f !== null && (v = lr(c, f), v != null && k.push(fr(c, v, m)))), L) break;
                    c = c.return
                }
                0 < k.length && (p = new S(p, w, null, n, d), h.push({event: p, listeners: k}))
            }
        }
        if ((t & 7) === 0) {
            e:{
                if (p = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", p && n !== Ql && (w = n.relatedTarget || n.fromElement) && ($t(w) || w[pt])) break e;
                if ((S || p) && (p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window, S ? (w = n.relatedTarget || n.toElement, S = u, w = w ? $t(w) : null, w !== null && (L = qt(w), w !== L || w.tag !== 5 && w.tag !== 6) && (w = null)) : (S = null, w = u), S !== w)) {
                    if (k = ia, v = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (k = oa, v = "onPointerLeave", f = "onPointerEnter", c = "pointer"), L = S == null ? p : an(S), m = w == null ? p : an(w), p = new k(v, c + "leave", S, n, d), p.target = L, p.relatedTarget = m, v = null, $t(d) === u && (k = new k(f, c + "enter", w, n, d), k.target = m, k.relatedTarget = L, v = k), L = v, S && w) t:{
                        for (k = S, f = w, c = 0, m = k; m; m = en(m)) c++;
                        for (m = 0, v = f; v; v = en(v)) m++;
                        for (; 0 < c - m;) k = en(k), c--;
                        for (; 0 < m - c;) f = en(f), m--;
                        for (; c--;) {
                            if (k === f || f !== null && k === f.alternate) break t;
                            k = en(k), f = en(f)
                        }
                        k = null
                    } else k = null;
                    S !== null && va(h, p, S, k, !1), w !== null && L !== null && va(h, L, w, k, !0)
                }
            }
            e:{
                if (p = u ? an(u) : window, S = p.nodeName && p.nodeName.toLowerCase(), S === "select" || S === "input" && p.type === "file") var y = Lm; else if (ua(p)) if (uc) y = Am; else {
                    y = Dm;
                    var N = Pm
                } else (S = p.nodeName) && S.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (y = Im);
                if (y && (y = y(e, u))) {
                    ac(h, y, n, d);
                    break e
                }
                N && N(e, p, u), e === "focusout" && (N = p._wrapperState) && N.controlled && p.type === "number" && Hl(p, "number", p.value)
            }
            switch (N = u ? an(u) : window, e) {
                case"focusin":
                    (ua(N) || N.contentEditable === "true") && (on = N, bl = u, Xn = null);
                    break;
                case"focusout":
                    Xn = bl = on = null;
                    break;
                case"mousedown":
                    eo = !0;
                    break;
                case"contextmenu":
                case"mouseup":
                case"dragend":
                    eo = !1, ma(h, n, d);
                    break;
                case"selectionchange":
                    if (Um) break;
                case"keydown":
                case"keyup":
                    ma(h, n, d)
            }
            var C;
            if (Xo) e:{
                switch (e) {
                    case"compositionstart":
                        var M = "onCompositionStart";
                        break e;
                    case"compositionend":
                        M = "onCompositionEnd";
                        break e;
                    case"compositionupdate":
                        M = "onCompositionUpdate";
                        break e
                }
                M = void 0
            } else ln ? oc(e, n) && (M = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
            M && (lc && n.locale !== "ko" && (ln || M !== "onCompositionStart" ? M === "onCompositionEnd" && ln && (C = ic()) : (_t = d, Qo = "value" in _t ? _t.value : _t.textContent, ln = !0)), N = vi(u, M), 0 < N.length && (M = new la(M, e, null, n, d), h.push({
                event: M,
                listeners: N
            }), C ? M.data = C : (C = sc(n), C !== null && (M.data = C)))), (C = Tm ? Cm(e, n) : Rm(e, n)) && (u = vi(u, "onBeforeInput"), 0 < u.length && (d = new la("onBeforeInput", "beforeinput", null, n, d), h.push({
                event: d,
                listeners: u
            }), d.data = C))
        }
        wc(h, t)
    })
}

function fr(e, t, n) {
    return {instance: e, listener: t, currentTarget: n}
}

function vi(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e, l = i.stateNode;
        i.tag === 5 && l !== null && (i = l, l = lr(e, n), l != null && r.unshift(fr(e, l, i)), l = lr(e, t), l != null && r.push(fr(e, l, i))), e = e.return
    }
    return r
}

function en(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function va(e, t, n, r, i) {
    for (var l = t._reactName, o = []; n !== null && n !== r;) {
        var s = n, a = s.alternate, u = s.stateNode;
        if (a !== null && a === r) break;
        s.tag === 5 && u !== null && (s = u, i ? (a = lr(n, l), a != null && o.unshift(fr(n, a, s))) : i || (a = lr(n, l), a != null && o.push(fr(n, a, s)))), n = n.return
    }
    o.length !== 0 && e.push({event: t, listeners: o})
}

var Vm = /\r\n?/g, jm = /\u0000|\uFFFD/g;

function ya(e) {
    return (typeof e == "string" ? e : "" + e).replace(Vm, `
`).replace(jm, "")
}

function jr(e, t, n) {
    if (t = ya(t), ya(e) !== t && n) throw Error(_(425))
}

function yi() {
}

var to = null, no = null;

function ro(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}

var io = typeof setTimeout == "function" ? setTimeout : void 0,
    Wm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    wa = typeof Promise == "function" ? Promise : void 0,
    Km = typeof queueMicrotask == "function" ? queueMicrotask : typeof wa != "undefined" ? function (e) {
        return wa.resolve(null).then(e).catch(Qm)
    } : io;

function Qm(e) {
    setTimeout(function () {
        throw e
    })
}

function Nl(e, t) {
    var n = t, r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
            if (r === 0) {
                e.removeChild(i), ar(t);
                return
            }
            r--
        } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    ar(t)
}

function at(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Ea(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}

var On = Math.random().toString(36).slice(2), rt = "__reactFiber$" + On, pr = "__reactProps$" + On,
    pt = "__reactContainer$" + On, lo = "__reactEvents$" + On, Gm = "__reactListeners$" + On,
    Ym = "__reactHandles$" + On;

function $t(e) {
    var t = e[rt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[pt] || n[rt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ea(e); e !== null;) {
                if (n = e[rt]) return n;
                e = Ea(e)
            }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function xr(e) {
    return e = e[rt] || e[pt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function an(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(_(33))
}

function Vi(e) {
    return e[pr] || null
}

var oo = [], un = -1;

function At(e) {
    return {current: e}
}

function q(e) {
    0 > un || (e.current = oo[un], oo[un] = null, un--)
}

function Y(e, t) {
    un++, oo[un] = e.current, e.current = t
}

var Pt = {}, ve = At(Pt), Re = At(!1), Wt = Pt;

function _n(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Pt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, l;
    for (l in n) i[l] = t[l];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function Me(e) {
    return e = e.childContextTypes, e != null
}

function wi() {
    q(Re), q(ve)
}

function Sa(e, t, n) {
    if (ve.current !== Pt) throw Error(_(168));
    Y(ve, t), Y(Re, n)
}

function Sc(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(_(108, Pp(e) || "Unknown", i));
    return te({}, n, r)
}

function Ei(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pt, Wt = ve.current, Y(ve, e), Y(Re, Re.current), !0
}

function Na(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(_(169));
    n ? (e = Sc(e, t, Wt), r.__reactInternalMemoizedMergedChildContext = e, q(Re), q(ve), Y(ve, e)) : q(Re), Y(Re, n)
}

var st = null, ji = !1, _l = !1;

function Nc(e) {
    st === null ? st = [e] : st.push(e)
}

function Xm(e) {
    ji = !0, Nc(e)
}

function zt() {
    if (!_l && st !== null) {
        _l = !0;
        var e = 0, t = K;
        try {
            var n = st;
            for (K = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            st = null, ji = !1
        } catch (i) {
            throw st !== null && (st = st.slice(e + 1)), Gu(Vo, zt), i
        } finally {
            K = t, _l = !1
        }
    }
    return null
}

var qm = ht.ReactCurrentBatchConfig;

function Xe(e, t) {
    if (e && e.defaultProps) {
        t = te({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

var Si = At(null), Ni = null, cn = null, Zo = null;

function Jo() {
    Zo = cn = Ni = null
}

function bo(e) {
    var t = Si.current;
    q(Si), e._currentValue = t
}

function so(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function En(e, t) {
    Ni = e, Zo = cn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (Ce = !0), e.firstContext = null)
}

function Qe(e) {
    var t = e._currentValue;
    if (Zo !== e) if (e = {context: e, memoizedValue: t, next: null}, cn === null) {
        if (Ni === null) throw Error(_(308));
        cn = e, Ni.dependencies = {lanes: 0, firstContext: e}
    } else cn = cn.next = e;
    return t
}

var Je = null, wt = !1;

function es(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {pending: null, interleaved: null, lanes: 0},
        effects: null
    }
}

function _c(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function dt(e, t) {
    return {eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null}
}

function Rt(e, t) {
    var n = e.updateQueue;
    n !== null && (n = n.shared, fd(e) ? (e = n.interleaved, e === null ? (t.next = t, Je === null ? Je = [n] : Je.push(n)) : (t.next = e.next, e.next = t), n.interleaved = t) : (e = n.pending, e === null ? t.next = t : (t.next = e.next, e.next = t), n.pending = t))
}

function ri(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, jo(e, n)
    }
}

function _a(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null, l = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                l === null ? i = l = o : l = l.next = o, n = n.next
            } while (n !== null);
            l === null ? i = l = t : l = l.next = t
        } else i = l = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: l,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function _i(e, t, n, r) {
    var i = e.updateQueue;
    wt = !1;
    var l = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
    if (s !== null) {
        i.shared.pending = null;
        var a = s, u = a.next;
        a.next = null, o === null ? l = u : o.next = u, o = a;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, s = d.lastBaseUpdate, s !== o && (s === null ? d.firstBaseUpdate = u : s.next = u, d.lastBaseUpdate = a))
    }
    if (l !== null) {
        var h = i.baseState;
        o = 0, d = u = a = null, s = l;
        do {
            var p = s.lane, S = s.eventTime;
            if ((r & p) === p) {
                d !== null && (d = d.next = {
                    eventTime: S,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e:{
                    var w = e, k = s;
                    switch (p = t, S = n, k.tag) {
                        case 1:
                            if (w = k.payload, typeof w == "function") {
                                h = w.call(S, h, p);
                                break e
                            }
                            h = w;
                            break e;
                        case 3:
                            w.flags = w.flags & -65537 | 128;
                        case 0:
                            if (w = k.payload, p = typeof w == "function" ? w.call(S, h, p) : w, p == null) break e;
                            h = te({}, h, p);
                            break e;
                        case 2:
                            wt = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64, p = i.effects, p === null ? i.effects = [s] : p.push(s))
            } else S = {
                eventTime: S,
                lane: p,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
            }, d === null ? (u = d = S, a = h) : d = d.next = S, o |= p;
            if (s = s.next, s === null) {
                if (s = i.shared.pending, s === null) break;
                p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null
            }
        } while (1);
        if (d === null && (a = h), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = d, t = i.shared.interleaved, t !== null) {
            i = t;
            do o |= i.lane, i = i.next; while (i !== t)
        } else l === null && (i.shared.lanes = 0);
        Gt |= o, e.lanes = o, e.memoizedState = h
    }
}

function ka(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
        var r = e[t], i = r.callback;
        if (i !== null) {
            if (r.callback = null, r = n, typeof i != "function") throw Error(_(191, i));
            i.call(r)
        }
    }
}

var kc = new Tu.Component().refs;

function ao(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : te({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}

var Wi = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? qt(e) === e : !1
    }, enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ne(), i = Ot(e), l = dt(r, i);
        l.payload = t, n != null && (l.callback = n), Rt(e, l), t = Ke(e, i, r), t !== null && ri(t, e, i)
    }, enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ne(), i = Ot(e), l = dt(r, i);
        l.tag = 1, l.payload = t, n != null && (l.callback = n), Rt(e, l), t = Ke(e, i, r), t !== null && ri(t, e, i)
    }, enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Ne(), r = Ot(e), i = dt(n, r);
        i.tag = 2, t != null && (i.callback = t), Rt(e, i), t = Ke(e, r, n), t !== null && ri(t, e, r)
    }
};

function xa(e, t, n, r, i, l, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, o) : t.prototype && t.prototype.isPureReactComponent ? !cr(n, r) || !cr(i, l) : !0
}

function xc(e, t, n) {
    var r = !1, i = Pt, l = t.contextType;
    return typeof l == "object" && l !== null ? l = Qe(l) : (i = Me(t) ? Wt : ve.current, r = t.contextTypes, l = (r = r != null) ? _n(e, i) : Pt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Wi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = l), t
}

function Ta(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Wi.enqueueReplaceState(t, t.state, null)
}

function uo(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = kc, es(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? i.context = Qe(l) : (l = Me(t) ? Wt : ve.current, i.context = _n(e, l)), i.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (ao(e, t, l, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Wi.enqueueReplaceState(i, i.state, null), _i(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

var dn = [], fn = 0, ki = null, xi = 0, He = [], Ve = 0, Kt = null, ut = 1, ct = "";

function Ut(e, t) {
    dn[fn++] = xi, dn[fn++] = ki, ki = e, xi = t
}

function Tc(e, t, n) {
    He[Ve++] = ut, He[Ve++] = ct, He[Ve++] = Kt, Kt = e;
    var r = ut;
    e = ct;
    var i = 32 - be(r) - 1;
    r &= ~(1 << i), n += 1;
    var l = 32 - be(t) + i;
    if (30 < l) {
        var o = i - i % 5;
        l = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, ut = 1 << 32 - be(t) + i | n << i | r, ct = l + e
    } else ut = 1 << l | n << i | r, ct = e
}

function ts(e) {
    e.return !== null && (Ut(e, 1), Tc(e, 1, 0))
}

function ns(e) {
    for (; e === ki;) ki = dn[--fn], dn[fn] = null, xi = dn[--fn], dn[fn] = null;
    for (; e === Kt;) Kt = He[--Ve], He[Ve] = null, ct = He[--Ve], He[Ve] = null, ut = He[--Ve], He[Ve] = null
}

var Ae = null, Te = null, Z = !1, Ze = null;

function Cc(e, t) {
    var n = je(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Ca(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ae = e, Te = at(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ae = e, Te = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Kt !== null ? {
                id: ut,
                overflow: ct
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ae = e, Te = null, !0) : !1;
        default:
            return !1
    }
}

function co(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function fo(e) {
    if (Z) {
        var t = Te;
        if (t) {
            var n = t;
            if (!Ca(e, t)) {
                if (co(e)) throw Error(_(418));
                t = at(n.nextSibling);
                var r = Ae;
                t && Ca(e, t) ? Cc(r, n) : (e.flags = e.flags & -4097 | 2, Z = !1, Ae = e)
            }
        } else {
            if (co(e)) throw Error(_(418));
            e.flags = e.flags & -4097 | 2, Z = !1, Ae = e
        }
    }
}

function Ra(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ae = e
}

function zn(e) {
    if (e !== Ae) return !1;
    if (!Z) return Ra(e), Z = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ro(e.type, e.memoizedProps)), t && (t = Te)) {
        if (co(e)) {
            for (e = Te; e;) e = at(e.nextSibling);
            throw Error(_(418))
        }
        for (; t;) Cc(e, t), t = at(t.nextSibling)
    }
    if (Ra(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(_(317));
        e:{
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Te = at(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Te = null
        }
    } else Te = Ae ? at(e.stateNode.nextSibling) : null;
    return !0
}

function kn() {
    Te = Ae = null, Z = !1
}

function rs(e) {
    Ze === null ? Ze = [e] : Ze.push(e)
}

function Bn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(_(309));
                var r = n.stateNode
            }
            if (!r) throw Error(_(147, e));
            var i = r, l = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function (o) {
                var s = i.refs;
                s === kc && (s = i.refs = {}), o === null ? delete s[l] : s[l] = o
            }, t._stringRef = l, t)
        }
        if (typeof e != "string") throw Error(_(284));
        if (!n._owner) throw Error(_(290, e))
    }
    return e
}

function Wr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Ma(e) {
    var t = e._init;
    return t(e._payload)
}

function Rc(e) {
    function t(f, c) {
        if (e) {
            var m = f.deletions;
            m === null ? (f.deletions = [c], f.flags |= 16) : m.push(c)
        }
    }

    function n(f, c) {
        if (!e) return null;
        for (; c !== null;) t(f, c), c = c.sibling;
        return null
    }

    function r(f, c) {
        for (f = new Map; c !== null;) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
        return f
    }

    function i(f, c) {
        return f = Dt(f, c), f.index = 0, f.sibling = null, f
    }

    function l(f, c, m) {
        return f.index = m, e ? (m = f.alternate, m !== null ? (m = m.index, m < c ? (f.flags |= 2, c) : m) : (f.flags |= 2, c)) : (f.flags |= 1048576, c)
    }

    function o(f) {
        return e && f.alternate === null && (f.flags |= 2), f
    }

    function s(f, c, m, v) {
        return c === null || c.tag !== 6 ? (c = Ml(m, f.mode, v), c.return = f, c) : (c = i(c, m), c.return = f, c)
    }

    function a(f, c, m, v) {
        var y = m.type;
        return y === rn ? d(f, c, m.props.children, v, m.key) : c !== null && (c.elementType === y || typeof y == "object" && y !== null && y.$$typeof === yt && Ma(y) === c.type) ? (v = i(c, m.props), v.ref = Bn(f, c, m), v.return = f, v) : (v = ai(m.type, m.key, m.props, null, f.mode, v), v.ref = Bn(f, c, m), v.return = f, v)
    }

    function u(f, c, m, v) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = Ol(m, f.mode, v), c.return = f, c) : (c = i(c, m.children || []), c.return = f, c)
    }

    function d(f, c, m, v, y) {
        return c === null || c.tag !== 7 ? (c = jt(m, f.mode, v, y), c.return = f, c) : (c = i(c, m), c.return = f, c)
    }

    function h(f, c, m) {
        if (typeof c == "string" && c !== "" || typeof c == "number") return c = Ml("" + c, f.mode, m), c.return = f, c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case Ir:
                    return m = ai(c.type, c.key, c.props, null, f.mode, m), m.ref = Bn(f, null, c), m.return = f, m;
                case nn:
                    return c = Ol(c, f.mode, m), c.return = f, c;
                case yt:
                    var v = c._init;
                    return h(f, v(c._payload), m)
            }
            if (Vn(c) || Ln(c)) return c = jt(c, f.mode, m, null), c.return = f, c;
            Wr(f, c)
        }
        return null
    }

    function p(f, c, m, v) {
        var y = c !== null ? c.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number") return y !== null ? null : s(f, c, "" + m, v);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Ir:
                    return m.key === y ? a(f, c, m, v) : null;
                case nn:
                    return m.key === y ? u(f, c, m, v) : null;
                case yt:
                    return y = m._init, p(f, c, y(m._payload), v)
            }
            if (Vn(m) || Ln(m)) return y !== null ? null : d(f, c, m, v, null);
            Wr(f, m)
        }
        return null
    }

    function S(f, c, m, v, y) {
        if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(m) || null, s(c, f, "" + v, y);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Ir:
                    return f = f.get(v.key === null ? m : v.key) || null, a(c, f, v, y);
                case nn:
                    return f = f.get(v.key === null ? m : v.key) || null, u(c, f, v, y);
                case yt:
                    var N = v._init;
                    return S(f, c, m, N(v._payload), y)
            }
            if (Vn(v) || Ln(v)) return f = f.get(m) || null, d(c, f, v, y, null);
            Wr(c, v)
        }
        return null
    }

    function w(f, c, m, v) {
        for (var y = null, N = null, C = c, M = c = 0, V = null; C !== null && M < m.length; M++) {
            C.index > M ? (V = C, C = null) : V = C.sibling;
            var U = p(f, C, m[M], v);
            if (U === null) {
                C === null && (C = V);
                break
            }
            e && C && U.alternate === null && t(f, C), c = l(U, c, M), N === null ? y = U : N.sibling = U, N = U, C = V
        }
        if (M === m.length) return n(f, C), Z && Ut(f, M), y;
        if (C === null) {
            for (; M < m.length; M++) C = h(f, m[M], v), C !== null && (c = l(C, c, M), N === null ? y = C : N.sibling = C, N = C);
            return Z && Ut(f, M), y
        }
        for (C = r(f, C); M < m.length; M++) V = S(C, f, M, m[M], v), V !== null && (e && V.alternate !== null && C.delete(V.key === null ? M : V.key), c = l(V, c, M), N === null ? y = V : N.sibling = V, N = V);
        return e && C.forEach(function (G) {
            return t(f, G)
        }), Z && Ut(f, M), y
    }

    function k(f, c, m, v) {
        var y = Ln(m);
        if (typeof y != "function") throw Error(_(150));
        if (m = y.call(m), m == null) throw Error(_(151));
        for (var N = y = null, C = c, M = c = 0, V = null, U = m.next(); C !== null && !U.done; M++, U = m.next()) {
            C.index > M ? (V = C, C = null) : V = C.sibling;
            var G = p(f, C, U.value, v);
            if (G === null) {
                C === null && (C = V);
                break
            }
            e && C && G.alternate === null && t(f, C), c = l(G, c, M), N === null ? y = G : N.sibling = G, N = G, C = V
        }
        if (U.done) return n(f, C), Z && Ut(f, M), y;
        if (C === null) {
            for (; !U.done; M++, U = m.next()) U = h(f, U.value, v), U !== null && (c = l(U, c, M), N === null ? y = U : N.sibling = U, N = U);
            return Z && Ut(f, M), y
        }
        for (C = r(f, C); !U.done; M++, U = m.next()) U = S(C, f, M, U.value, v), U !== null && (e && U.alternate !== null && C.delete(U.key === null ? M : U.key), c = l(U, c, M), N === null ? y = U : N.sibling = U, N = U);
        return e && C.forEach(function (Le) {
            return t(f, Le)
        }), Z && Ut(f, M), y
    }

    function L(f, c, m, v) {
        if (typeof m == "object" && m !== null && m.type === rn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Ir:
                    e:{
                        for (var y = m.key, N = c; N !== null;) {
                            if (N.key === y) {
                                if (y = m.type, y === rn) {
                                    if (N.tag === 7) {
                                        n(f, N.sibling), c = i(N, m.props.children), c.return = f, f = c;
                                        break e
                                    }
                                } else if (N.elementType === y || typeof y == "object" && y !== null && y.$$typeof === yt && Ma(y) === N.type) {
                                    n(f, N.sibling), c = i(N, m.props), c.ref = Bn(f, N, m), c.return = f, f = c;
                                    break e
                                }
                                n(f, N);
                                break
                            } else t(f, N);
                            N = N.sibling
                        }
                        m.type === rn ? (c = jt(m.props.children, f.mode, v, m.key), c.return = f, f = c) : (v = ai(m.type, m.key, m.props, null, f.mode, v), v.ref = Bn(f, c, m), v.return = f, f = v)
                    }
                    return o(f);
                case nn:
                    e:{
                        for (N = m.key; c !== null;) {
                            if (c.key === N) if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
                                n(f, c.sibling), c = i(c, m.children || []), c.return = f, f = c;
                                break e
                            } else {
                                n(f, c);
                                break
                            } else t(f, c);
                            c = c.sibling
                        }
                        c = Ol(m, f.mode, v), c.return = f, f = c
                    }
                    return o(f);
                case yt:
                    return N = m._init, L(f, c, N(m._payload), v)
            }
            if (Vn(m)) return w(f, c, m, v);
            if (Ln(m)) return k(f, c, m, v);
            Wr(f, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, c !== null && c.tag === 6 ? (n(f, c.sibling), c = i(c, m), c.return = f, f = c) : (n(f, c), c = Ml(m, f.mode, v), c.return = f, f = c), o(f)) : n(f, c)
    }

    return L
}

var xn = Rc(!0), Mc = Rc(!1), Tr = {}, lt = At(Tr), mr = At(Tr), hr = At(Tr);

function Ht(e) {
    if (e === Tr) throw Error(_(174));
    return e
}

function is(e, t) {
    switch (Y(hr, t), Y(mr, e), Y(lt, Tr), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : jl(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = jl(t, e)
    }
    q(lt), Y(lt, t)
}

function Tn() {
    q(lt), q(mr), q(hr)
}

function Oc(e) {
    Ht(hr.current);
    var t = Ht(lt.current), n = jl(t, e.type);
    t !== n && (Y(mr, e), Y(lt, n))
}

function ls(e) {
    mr.current === e && (q(lt), q(mr))
}

var b = At(0);

function Ti(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if ((t.flags & 128) !== 0) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}

var kl = [];

function os() {
    for (var e = 0; e < kl.length; e++) kl[e]._workInProgressVersionPrimary = null;
    kl.length = 0
}

var ii = ht.ReactCurrentDispatcher, xl = ht.ReactCurrentBatchConfig, Qt = 0, ee = null, oe = null, ue = null, Ci = !1,
    qn = !1, gr = 0, Zm = 0;

function me() {
    throw Error(_(321))
}

function ss(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!et(e[n], t[n])) return !1;
    return !0
}

function as(e, t, n, r, i, l) {
    if (Qt = l, ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ii.current = e === null || e.memoizedState === null ? th : nh, e = n(r, i), qn) {
        l = 0;
        do {
            if (qn = !1, gr = 0, 25 <= l) throw Error(_(301));
            l += 1, ue = oe = null, t.updateQueue = null, ii.current = rh, e = n(r, i)
        } while (qn)
    }
    if (ii.current = Ri, t = oe !== null && oe.next !== null, Qt = 0, ue = oe = ee = null, Ci = !1, t) throw Error(_(300));
    return e
}

function us() {
    var e = gr !== 0;
    return gr = 0, e
}

function nt() {
    var e = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
    return ue === null ? ee.memoizedState = ue = e : ue = ue.next = e, ue
}

function Ge() {
    if (oe === null) {
        var e = ee.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = oe.next;
    var t = ue === null ? ee.memoizedState : ue.next;
    if (t !== null) ue = t, oe = e; else {
        if (e === null) throw Error(_(310));
        oe = e, e = {
            memoizedState: oe.memoizedState,
            baseState: oe.baseState,
            baseQueue: oe.baseQueue,
            queue: oe.queue,
            next: null
        }, ue === null ? ee.memoizedState = ue = e : ue = ue.next = e
    }
    return ue
}

function vr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Tl(e) {
    var t = Ge(), n = t.queue;
    if (n === null) throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = oe, i = r.baseQueue, l = n.pending;
    if (l !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = l.next, l.next = o
        }
        r.baseQueue = i = l, n.pending = null
    }
    if (i !== null) {
        l = i.next, r = r.baseState;
        var s = o = null, a = null, u = l;
        do {
            var d = u.lane;
            if ((Qt & d) === d) a !== null && (a = a.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action); else {
                var h = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (s = a = h, o = r) : a = a.next = h, ee.lanes |= d, Gt |= d
            }
            u = u.next
        } while (u !== null && u !== l);
        a === null ? o = r : a.next = s, et(r, t.memoizedState) || (Ce = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do l = i.lane, ee.lanes |= l, Gt |= l, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Cl(e) {
    var t = Ge(), n = t.queue;
    if (n === null) throw Error(_(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, l = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do l = e(l, o.action), o = o.next; while (o !== i);
        et(l, t.memoizedState) || (Ce = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l
    }
    return [l, r]
}

function Lc() {
}

function Pc(e, t) {
    var n = ee, r = Ge(), i = t(), l = !et(r.memoizedState, i);
    if (l && (r.memoizedState = i, Ce = !0), r = r.queue, cs(Ac.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || ue !== null && ue.memoizedState.tag & 1) {
        if (n.flags |= 2048, yr(9, Ic.bind(null, n, r, i, t), void 0, null), ae === null) throw Error(_(349));
        (Qt & 30) !== 0 || Dc(n, t, i)
    }
    return i
}

function Dc(e, t, n) {
    e.flags |= 16384, e = {getSnapshot: t, value: n}, t = ee.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ee.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Ic(e, t, n, r) {
    t.value = n, t.getSnapshot = r, zc(t) && Ke(e, 1, -1)
}

function Ac(e, t, n) {
    return n(function () {
        zc(t) && Ke(e, 1, -1)
    })
}

function zc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !et(e, n)
    } catch {
        return !0
    }
}

function Oa(e) {
    var t = nt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = eh.bind(null, ee, e), [t.memoizedState, e]
}

function yr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = ee.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ee.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Bc() {
    return Ge().memoizedState
}

function li(e, t, n, r) {
    var i = nt();
    ee.flags |= e, i.memoizedState = yr(1 | t, n, void 0, r === void 0 ? null : r)
}

function Ki(e, t, n, r) {
    var i = Ge();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (oe !== null) {
        var o = oe.memoizedState;
        if (l = o.destroy, r !== null && ss(r, o.deps)) {
            i.memoizedState = yr(t, n, l, r);
            return
        }
    }
    ee.flags |= e, i.memoizedState = yr(1 | t, n, l, r)
}

function La(e, t) {
    return li(8390656, 8, e, t)
}

function cs(e, t) {
    return Ki(2048, 8, e, t)
}

function Uc(e, t) {
    return Ki(4, 2, e, t)
}

function Fc(e, t) {
    return Ki(4, 4, e, t)
}

function $c(e, t) {
    if (typeof t == "function") return e = e(), t(e), function () {
        t(null)
    };
    if (t != null) return e = e(), t.current = e, function () {
        t.current = null
    }
}

function Hc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ki(4, 4, $c.bind(null, t, e), n)
}

function ds() {
}

function Vc(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ss(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function jc(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ss(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Wc(e, t, n) {
    return (Qt & 21) === 0 ? (e.baseState && (e.baseState = !1, Ce = !0), e.memoizedState = n) : (et(n, t) || (n = qu(), ee.lanes |= n, Gt |= n, e.baseState = !0), t)
}

function Jm(e, t) {
    var n = K;
    K = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = xl.transition;
    xl.transition = {};
    try {
        e(!1), t()
    } finally {
        K = n, xl.transition = r
    }
}

function Kc() {
    return Ge().memoizedState
}

function bm(e, t, n) {
    var r = Ot(e);
    n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, Qc(e) ? Gc(t, n) : (Yc(e, t, n), n = Ne(), e = Ke(e, r, n), e !== null && Xc(e, t, r))
}

function eh(e, t, n) {
    var r = Ot(e), i = {lane: r, action: n, hasEagerState: !1, eagerState: null, next: null};
    if (Qc(e)) Gc(t, i); else {
        Yc(e, t, i);
        var l = e.alternate;
        if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
            var o = t.lastRenderedState, s = l(o, n);
            if (i.hasEagerState = !0, i.eagerState = s, et(s, o)) return
        } catch {
        } finally {
        }
        n = Ne(), e = Ke(e, r, n), e !== null && Xc(e, t, r)
    }
}

function Qc(e) {
    var t = e.alternate;
    return e === ee || t !== null && t === ee
}

function Gc(e, t) {
    qn = Ci = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Yc(e, t, n) {
    fd(e) ? (e = t.interleaved, e === null ? (n.next = n, Je === null ? Je = [t] : Je.push(t)) : (n.next = e.next, e.next = n), t.interleaved = n) : (e = t.pending, e === null ? n.next = n : (n.next = e.next, e.next = n), t.pending = n)
}

function Xc(e, t, n) {
    if ((n & 4194240) !== 0) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, jo(e, n)
    }
}

var Ri = {
    readContext: Qe,
    useCallback: me,
    useContext: me,
    useEffect: me,
    useImperativeHandle: me,
    useInsertionEffect: me,
    useLayoutEffect: me,
    useMemo: me,
    useReducer: me,
    useRef: me,
    useState: me,
    useDebugValue: me,
    useDeferredValue: me,
    useTransition: me,
    useMutableSource: me,
    useSyncExternalStore: me,
    useId: me,
    unstable_isNewReconciler: !1
}, th = {
    readContext: Qe, useCallback: function (e, t) {
        return nt().memoizedState = [e, t === void 0 ? null : t], e
    }, useContext: Qe, useEffect: La, useImperativeHandle: function (e, t, n) {
        return n = n != null ? n.concat([e]) : null, li(4194308, 4, $c.bind(null, t, e), n)
    }, useLayoutEffect: function (e, t) {
        return li(4194308, 4, e, t)
    }, useInsertionEffect: function (e, t) {
        return li(4, 2, e, t)
    }, useMemo: function (e, t) {
        var n = nt();
        return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    }, useReducer: function (e, t, n) {
        var r = nt();
        return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        }, r.queue = e, e = e.dispatch = bm.bind(null, ee, e), [r.memoizedState, e]
    }, useRef: function (e) {
        var t = nt();
        return e = {current: e}, t.memoizedState = e
    }, useState: Oa, useDebugValue: ds, useDeferredValue: function (e) {
        return nt().memoizedState = e
    }, useTransition: function () {
        var e = Oa(!1), t = e[0];
        return e = Jm.bind(null, e[1]), nt().memoizedState = e, [t, e]
    }, useMutableSource: function () {
    }, useSyncExternalStore: function (e, t, n) {
        var r = ee, i = nt();
        if (Z) {
            if (n === void 0) throw Error(_(407));
            n = n()
        } else {
            if (n = t(), ae === null) throw Error(_(349));
            (Qt & 30) !== 0 || Dc(r, t, n)
        }
        i.memoizedState = n;
        var l = {value: n, getSnapshot: t};
        return i.queue = l, La(Ac.bind(null, r, l, e), [e]), r.flags |= 2048, yr(9, Ic.bind(null, r, l, n, t), void 0, null), n
    }, useId: function () {
        var e = nt(), t = ae.identifierPrefix;
        if (Z) {
            var n = ct, r = ut;
            n = (r & ~(1 << 32 - be(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = gr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
        } else n = Zm++, t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    }, unstable_isNewReconciler: !1
}, nh = {
    readContext: Qe,
    useCallback: Vc,
    useContext: Qe,
    useEffect: cs,
    useImperativeHandle: Hc,
    useInsertionEffect: Uc,
    useLayoutEffect: Fc,
    useMemo: jc,
    useReducer: Tl,
    useRef: Bc,
    useState: function () {
        return Tl(vr)
    },
    useDebugValue: ds,
    useDeferredValue: function (e) {
        var t = Ge();
        return Wc(t, oe.memoizedState, e)
    },
    useTransition: function () {
        var e = Tl(vr)[0], t = Ge().memoizedState;
        return [e, t]
    },
    useMutableSource: Lc,
    useSyncExternalStore: Pc,
    useId: Kc,
    unstable_isNewReconciler: !1
}, rh = {
    readContext: Qe,
    useCallback: Vc,
    useContext: Qe,
    useEffect: cs,
    useImperativeHandle: Hc,
    useInsertionEffect: Uc,
    useLayoutEffect: Fc,
    useMemo: jc,
    useReducer: Cl,
    useRef: Bc,
    useState: function () {
        return Cl(vr)
    },
    useDebugValue: ds,
    useDeferredValue: function (e) {
        var t = Ge();
        return oe === null ? t.memoizedState = e : Wc(t, oe.memoizedState, e)
    },
    useTransition: function () {
        var e = Cl(vr)[0], t = Ge().memoizedState;
        return [e, t]
    },
    useMutableSource: Lc,
    useSyncExternalStore: Pc,
    useId: Kc,
    unstable_isNewReconciler: !1
};

function fs(e, t) {
    try {
        var n = "", r = t;
        do n += Lp(r), r = r.return; while (r);
        var i = n
    } catch (l) {
        i = `
Error generating stack: ` + l.message + `
` + l.stack
    }
    return {value: e, source: t, stack: i}
}

function po(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}

var ih = typeof WeakMap == "function" ? WeakMap : Map;

function qc(e, t, n) {
    n = dt(-1, n), n.tag = 3, n.payload = {element: null};
    var r = t.value;
    return n.callback = function () {
        Oi || (Oi = !0, No = r), po(e, t)
    }, n
}

function Zc(e, t, n) {
    n = dt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function () {
            return r(i)
        }, n.callback = function () {
            po(e, t)
        }
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function () {
        po(e, t), typeof r != "function" && (Mt === null ? Mt = new Set([this]) : Mt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {componentStack: o !== null ? o : ""})
    }), n
}

function Pa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new ih;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = vh.bind(null, e, t, n), t.then(e, e))
}

function Da(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Ia(e, t, n, r, i) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = dt(-1, 1), t.tag = 2, Rt(n, t))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = i, e)
}

var Jc, mo, bc, ed;
Jc = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode); else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
mo = function () {
};
bc = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, Ht(lt.current);
        var l = null;
        switch (n) {
            case"input":
                i = Fl(e, i), r = Fl(e, r), l = [];
                break;
            case"select":
                i = te({}, i, {value: void 0}), r = te({}, r, {value: void 0}), l = [];
                break;
            case"textarea":
                i = Vl(e, i), r = Vl(e, r), l = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = yi)
        }
        Wl(n, r);
        var o;
        n = null;
        for (u in i) if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
            var s = i[u];
            for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (rr.hasOwnProperty(u) ? l || (l = []) : (l = l || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (s = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== s && (a != null || s != null)) if (u === "style") if (s) {
                for (o in s) !s.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                for (o in a) a.hasOwnProperty(o) && s[o] !== a[o] && (n || (n = {}), n[o] = a[o])
            } else n || (l || (l = []), l.push(u, n)), n = a; else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, a != null && s !== a && (l = l || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (l = l || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (rr.hasOwnProperty(u) ? (a != null && u === "onScroll" && X("scroll", e), l || s === a || (l = [])) : (l = l || []).push(u, a))
        }
        n && (l = l || []).push("style", n);
        var u = l;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
ed = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Un(e, t) {
    if (!Z) switch (e.tailMode) {
        case"hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case"collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function he(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling; else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function lh(e, t, n) {
    var r = t.pendingProps;
    switch (ns(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return he(t), null;
        case 1:
            return Me(t.type) && wi(), he(t), null;
        case 3:
            return r = t.stateNode, Tn(), q(Re), q(ve), os(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (zn(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ze !== null && (xo(Ze), Ze = null))), mo(e, t), he(t), null;
        case 5:
            ls(t);
            var i = Ht(hr.current);
            if (n = t.type, e !== null && t.stateNode != null) bc(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152); else {
                if (!r) {
                    if (t.stateNode === null) throw Error(_(166));
                    return he(t), null
                }
                if (e = Ht(lt.current), zn(t)) {
                    r = t.stateNode, n = t.type;
                    var l = t.memoizedProps;
                    switch (r[rt] = t, r[pr] = l, e = (t.mode & 1) !== 0, n) {
                        case"dialog":
                            X("cancel", r), X("close", r);
                            break;
                        case"iframe":
                        case"object":
                        case"embed":
                            X("load", r);
                            break;
                        case"video":
                        case"audio":
                            for (i = 0; i < Wn.length; i++) X(Wn[i], r);
                            break;
                        case"source":
                            X("error", r);
                            break;
                        case"img":
                        case"image":
                        case"link":
                            X("error", r), X("load", r);
                            break;
                        case"details":
                            X("toggle", r);
                            break;
                        case"input":
                            Ys(r, l), X("invalid", r);
                            break;
                        case"select":
                            r._wrapperState = {wasMultiple: !!l.multiple}, X("invalid", r);
                            break;
                        case"textarea":
                            qs(r, l), X("invalid", r)
                    }
                    Wl(n, l), i = null;
                    for (var o in l) if (l.hasOwnProperty(o)) {
                        var s = l[o];
                        o === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && jr(r.textContent, s, e), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && jr(r.textContent, s, e), i = ["children", "" + s]) : rr.hasOwnProperty(o) && s != null && o === "onScroll" && X("scroll", r)
                    }
                    switch (n) {
                        case"input":
                            Ar(r), Xs(r, l, !0);
                            break;
                        case"textarea":
                            Ar(r), Zs(r);
                            break;
                        case"select":
                        case"option":
                            break;
                        default:
                            typeof l.onClick == "function" && (r.onclick = yi)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Au(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {is: r.is}) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[rt] = t, e[pr] = r, Jc(e, t, !1, !1), t.stateNode = e;
                    e:{
                        switch (o = Kl(n, r), n) {
                            case"dialog":
                                X("cancel", e), X("close", e), i = r;
                                break;
                            case"iframe":
                            case"object":
                            case"embed":
                                X("load", e), i = r;
                                break;
                            case"video":
                            case"audio":
                                for (i = 0; i < Wn.length; i++) X(Wn[i], e);
                                i = r;
                                break;
                            case"source":
                                X("error", e), i = r;
                                break;
                            case"img":
                            case"image":
                            case"link":
                                X("error", e), X("load", e), i = r;
                                break;
                            case"details":
                                X("toggle", e), i = r;
                                break;
                            case"input":
                                Ys(e, r), i = Fl(e, r), X("invalid", e);
                                break;
                            case"option":
                                i = r;
                                break;
                            case"select":
                                e._wrapperState = {wasMultiple: !!r.multiple}, i = te({}, r, {value: void 0}), X("invalid", e);
                                break;
                            case"textarea":
                                qs(e, r), i = Vl(e, r), X("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        Wl(n, i), s = i;
                        for (l in s) if (s.hasOwnProperty(l)) {
                            var a = s[l];
                            l === "style" ? Uu(e, a) : l === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && zu(e, a)) : l === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && ir(e, a) : typeof a == "number" && ir(e, "" + a) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (rr.hasOwnProperty(l) ? a != null && l === "onScroll" && X("scroll", e) : a != null && Bo(e, l, a, o))
                        }
                        switch (n) {
                            case"input":
                                Ar(e), Xs(e, r, !1);
                                break;
                            case"textarea":
                                Ar(e), Zs(e);
                                break;
                            case"option":
                                r.value != null && e.setAttribute("value", "" + Lt(r.value));
                                break;
                            case"select":
                                e.multiple = !!r.multiple, l = r.value, l != null ? gn(e, !!r.multiple, l, !1) : r.defaultValue != null && gn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = yi)
                        }
                        switch (n) {
                            case"button":
                            case"input":
                            case"select":
                            case"textarea":
                                r = !!r.autoFocus;
                                break e;
                            case"img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return he(t), null;
        case 6:
            if (e && t.stateNode != null) ed(e, t, e.memoizedProps, r); else {
                if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
                if (n = Ht(hr.current), Ht(lt.current), zn(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[rt] = t, (l = r.nodeValue !== n) && (e = Ae, e !== null)) switch (e.tag) {
                        case 3:
                            jr(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && jr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    l && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rt] = t, t.stateNode = r
            }
            return he(t), null;
        case 13:
            if (q(b), r = t.memoizedState, Z && Te !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) {
                for (r = Te; r;) r = at(r.nextSibling);
                return kn(), t.flags |= 98560, t
            }
            if (r !== null && r.dehydrated !== null) {
                if (r = zn(t), e === null) {
                    if (!r) throw Error(_(318));
                    if (r = t.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(_(317));
                    r[rt] = t
                } else kn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                return he(t), null
            }
            return Ze !== null && (xo(Ze), Ze = null), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, n = !1, e === null ? zn(t) : n = e.memoizedState !== null, r !== n && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (b.current & 1) !== 0 ? se === 0 && (se = 3) : ys())), t.updateQueue !== null && (t.flags |= 4), he(t), null);
        case 4:
            return Tn(), mo(e, t), e === null && dr(t.stateNode.containerInfo), he(t), null;
        case 10:
            return bo(t.type._context), he(t), null;
        case 17:
            return Me(t.type) && wi(), he(t), null;
        case 19:
            if (q(b), l = t.memoizedState, l === null) return he(t), null;
            if (r = (t.flags & 128) !== 0, o = l.rendering, o === null) if (r) Un(l, !1); else {
                if (se !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null;) {
                    if (o = Ti(e), o !== null) {
                        for (t.flags |= 128, Un(l, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) l = n, e = r, l.flags &= 14680066, o = l.alternate, o === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = o.childLanes, l.lanes = o.lanes, l.child = o.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = o.memoizedProps, l.memoizedState = o.memoizedState, l.updateQueue = o.updateQueue, l.type = o.type, e = o.dependencies, l.dependencies = e === null ? null : {
                            lanes: e.lanes,
                            firstContext: e.firstContext
                        }), n = n.sibling;
                        return Y(b, b.current & 1 | 2), t.child
                    }
                    e = e.sibling
                }
                l.tail !== null && re() > Cn && (t.flags |= 128, r = !0, Un(l, !1), t.lanes = 4194304)
            } else {
                if (!r) if (e = Ti(o), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Un(l, !0), l.tail === null && l.tailMode === "hidden" && !o.alternate && !Z) return he(t), null
                } else 2 * re() - l.renderingStartTime > Cn && n !== 1073741824 && (t.flags |= 128, r = !0, Un(l, !1), t.lanes = 4194304);
                l.isBackwards ? (o.sibling = t.child, t.child = o) : (n = l.last, n !== null ? n.sibling = o : t.child = o, l.last = o)
            }
            return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = re(), t.sibling = null, n = b.current, Y(b, r ? n & 1 | 2 : n & 1), t) : (he(t), null);
        case 22:
        case 23:
            return vs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (Ie & 1073741824) !== 0 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : he(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(_(156, t.tag))
}

var oh = ht.ReactCurrentOwner, Ce = !1;

function Se(e, t, n, r) {
    t.child = e === null ? Mc(t, null, n, r) : xn(t, e.child, n, r)
}

function Aa(e, t, n, r, i) {
    n = n.render;
    var l = t.ref;
    return En(t, i), r = as(e, t, n, r, l, i), n = us(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, mt(e, t, i)) : (Z && n && ts(t), t.flags |= 1, Se(e, t, r, i), t.child)
}

function za(e, t, n, r, i) {
    if (e === null) {
        var l = n.type;
        return typeof l == "function" && !ws(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, td(e, t, l, r, i)) : (e = ai(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (l = e.child, (e.lanes & i) === 0) {
        var o = l.memoizedProps;
        if (n = n.compare, n = n !== null ? n : cr, n(o, r) && e.ref === t.ref) return mt(e, t, i)
    }
    return t.flags |= 1, e = Dt(l, r), e.ref = t.ref, e.return = t, t.child = e
}

function td(e, t, n, r, i) {
    if (e !== null) {
        var l = e.memoizedProps;
        if (cr(l, r) && e.ref === t.ref) if (Ce = !1, t.pendingProps = r = l, (e.lanes & i) !== 0) (e.flags & 131072) !== 0 && (Ce = !0); else return t.lanes = e.lanes, mt(e, t, i)
    }
    return ho(e, t, n, r, i)
}

function nd(e, t, n) {
    var r = t.pendingProps, i = r.children, l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
    }, Y(mn, Ie), Ie |= n; else if ((n & 1073741824) !== 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
    }, r = l !== null ? l.baseLanes : n, Y(mn, Ie), Ie |= r; else return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }, t.updateQueue = null, Y(mn, Ie), Ie |= e, null; else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, Y(mn, Ie), Ie |= r;
    return Se(e, t, i, n), t.child
}

function rd(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function ho(e, t, n, r, i) {
    var l = Me(n) ? Wt : ve.current;
    return l = _n(t, l), En(t, i), n = as(e, t, n, r, l, i), r = us(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, mt(e, t, i)) : (Z && r && ts(t), t.flags |= 1, Se(e, t, n, i), t.child)
}

function Ba(e, t, n, r, i) {
    if (Me(n)) {
        var l = !0;
        Ei(t)
    } else l = !1;
    if (En(t, i), t.stateNode === null) e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), xc(t, n, r), uo(t, n, r, i), r = !0; else if (e === null) {
        var o = t.stateNode, s = t.memoizedProps;
        o.props = s;
        var a = o.context, u = n.contextType;
        typeof u == "object" && u !== null ? u = Qe(u) : (u = Me(n) ? Wt : ve.current, u = _n(t, u));
        var d = n.getDerivedStateFromProps,
            h = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || a !== u) && Ta(t, o, r, u), wt = !1;
        var p = t.memoizedState;
        o.state = p, _i(t, r, o, i), a = t.memoizedState, s !== r || p !== a || Re.current || wt ? (typeof d == "function" && (ao(t, n, d, r), a = t.memoizedState), (s = wt || xa(t, n, s, r, p, a, u)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = u, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, _c(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : Xe(t.type, s), o.props = u, h = t.pendingProps, p = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = Qe(a) : (a = Me(n) ? Wt : ve.current, a = _n(t, a));
        var S = n.getDerivedStateFromProps;
        (d = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== h || p !== a) && Ta(t, o, r, a), wt = !1, p = t.memoizedState, o.state = p, _i(t, r, o, i);
        var w = t.memoizedState;
        s !== h || p !== w || Re.current || wt ? (typeof S == "function" && (ao(t, n, S, r), w = t.memoizedState), (u = wt || xa(t, n, u, r, p, w, a) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), o.props = r, o.state = w, o.context = a, r = u) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return go(e, t, n, r, l, i)
}

function go(e, t, n, r, i, l) {
    rd(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return i && Na(t, n, !1), mt(e, t, l);
    r = t.stateNode, oh.current = t;
    var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = xn(t, e.child, null, l), t.child = xn(t, null, s, l)) : Se(e, t, s, l), t.memoizedState = r.state, i && Na(t, n, !0), t.child
}

function id(e) {
    var t = e.stateNode;
    t.pendingContext ? Sa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Sa(e, t.context, !1), is(e, t.containerInfo)
}

function Ua(e, t, n, r, i) {
    return kn(), rs(i), t.flags |= 256, Se(e, t, n, r), t.child
}

var Kr = {dehydrated: null, treeContext: null, retryLane: 0};

function Qr(e) {
    return {baseLanes: e, cachePool: null, transitions: null}
}

function Fa(e, t) {
    return {baseLanes: e.baseLanes | t, cachePool: null, transitions: e.transitions}
}

function ld(e, t, n) {
    var r = t.pendingProps, i = b.current, l = !1, o = (t.flags & 128) !== 0, s;
    if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Y(b, i & 1), e === null) return fo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
        mode: "hidden",
        children: i
    }, (r & 1) === 0 && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Di(i, r, 0, null), e = jt(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Qr(n), t.memoizedState = Kr, e) : vo(t, i));
    if (i = e.memoizedState, i !== null) {
        if (s = i.dehydrated, s !== null) {
            if (o) return t.flags & 256 ? (t.flags &= -257, Gr(e, t, n, Error(_(422)))) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, i = t.mode, r = Di({
                mode: "visible",
                children: r.children
            }, i, 0, null), l = jt(l, i, n, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, (t.mode & 1) !== 0 && xn(t, e.child, null, n), t.child.memoizedState = Qr(n), t.memoizedState = Kr, l);
            if ((t.mode & 1) === 0) t = Gr(e, t, n, null); else if (s.data === "$!") t = Gr(e, t, n, Error(_(419))); else if (r = (n & e.childLanes) !== 0, Ce || r) {
                if (r = ae, r !== null) {
                    switch (n & -n) {
                        case 4:
                            l = 2;
                            break;
                        case 16:
                            l = 8;
                            break;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            l = 32;
                            break;
                        case 536870912:
                            l = 268435456;
                            break;
                        default:
                            l = 0
                    }
                    r = (l & (r.suspendedLanes | n)) !== 0 ? 0 : l, r !== 0 && r !== i.retryLane && (i.retryLane = r, Ke(e, r, -1))
                }
                ys(), t = Gr(e, t, n, Error(_(421)))
            } else s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = yh.bind(null, e), s._reactRetry = t, t = null) : (n = i.treeContext, Te = at(s.nextSibling), Ae = t, Z = !0, Ze = null, n !== null && (He[Ve++] = ut, He[Ve++] = ct, He[Ve++] = Kt, ut = n.id, ct = n.overflow, Kt = t), t = vo(t, t.pendingProps.children), t.flags |= 4096);
            return t
        }
        return l ? (r = Ha(e, t, r.children, r.fallback, n), l = t.child, i = e.child.memoizedState, l.memoizedState = i === null ? Qr(n) : Fa(i, n), l.childLanes = e.childLanes & ~n, t.memoizedState = Kr, r) : (n = $a(e, t, r.children, n), t.memoizedState = null, n)
    }
    return l ? (r = Ha(e, t, r.children, r.fallback, n), l = t.child, i = e.child.memoizedState, l.memoizedState = i === null ? Qr(n) : Fa(i, n), l.childLanes = e.childLanes & ~n, t.memoizedState = Kr, r) : (n = $a(e, t, r.children, n), t.memoizedState = null, n)
}

function vo(e, t) {
    return t = Di({mode: "visible", children: t}, e.mode, 0, null), t.return = e, e.child = t
}

function $a(e, t, n, r) {
    var i = e.child;
    return e = i.sibling, n = Dt(i, {
        mode: "visible",
        children: n
    }), (t.mode & 1) === 0 && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = n
}

function Ha(e, t, n, r, i) {
    var l = t.mode;
    e = e.child;
    var o = e.sibling, s = {mode: "hidden", children: n};
    return (l & 1) === 0 && t.child !== e ? (n = t.child, n.childLanes = 0, n.pendingProps = s, t.deletions = null) : (n = Dt(e, s), n.subtreeFlags = e.subtreeFlags & 14680064), o !== null ? r = Dt(o, r) : (r = jt(r, l, i, null), r.flags |= 2), r.return = t, n.return = t, n.sibling = r, t.child = n, r
}

function Gr(e, t, n, r) {
    return r !== null && rs(r), xn(t, e.child, null, n), e = vo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Va(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), so(e.return, t, n)
}

function Rl(e, t, n, r, i) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = i)
}

function od(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, l = r.tail;
    if (Se(e, t, r.children, n), r = b.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128; else {
        if (e !== null && (e.flags & 128) !== 0) e:for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Va(e, n, t); else if (e.tag === 19) Va(e, n, t); else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (Y(b, r), (t.mode & 1) === 0) t.memoizedState = null; else switch (i) {
        case"forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Ti(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Rl(t, !1, i, n, l);
            break;
        case"backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && Ti(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            Rl(t, !0, n, null, l);
            break;
        case"together":
            Rl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function mt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Gt |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(_(153));
    if (t.child !== null) {
        for (e = t.child, n = Dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Dt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function sh(e, t, n) {
    switch (t.tag) {
        case 3:
            id(t), kn();
            break;
        case 5:
            Oc(t);
            break;
        case 1:
            Me(t.type) && Ei(t);
            break;
        case 4:
            is(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context, i = t.memoizedProps.value;
            Y(Si, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Y(b, b.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ld(e, t, n) : (Y(b, b.current & 1), e = mt(e, t, n), e !== null ? e.sibling : null);
            Y(b, b.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
                if (r) return od(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Y(b, b.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, nd(e, t, n)
    }
    return mt(e, t, n)
}

function ah(e, t) {
    switch (ns(t), t.tag) {
        case 1:
            return Me(t.type) && wi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Tn(), q(Re), q(ve), os(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return ls(t), null;
        case 13:
            if (q(b), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(_(340));
                kn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return q(b), null;
        case 4:
            return Tn(), null;
        case 10:
            return bo(t.type._context), null;
        case 22:
        case 23:
            return vs(), null;
        case 24:
            return null;
        default:
            return null
    }
}

var Yr = !1, ge = !1, uh = typeof WeakSet == "function" ? WeakSet : Set, O = null;

function pn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
        n(null)
    } catch (r) {
        ne(e, t, r)
    } else n.current = null
}

function yo(e, t, n) {
    try {
        n()
    } catch (r) {
        ne(e, t, r)
    }
}

var ja = !1;

function ch(e, t) {
    if (to = hi, e = fc(), qo(e)) {
        if ("selectionStart" in e) var n = {start: e.selectionStart, end: e.selectionEnd}; else e:{
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset, l = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, l.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0, s = -1, a = -1, u = 0, d = 0, h = e, p = null;
                t:for (; ;) {
                    for (var S; h !== n || i !== 0 && h.nodeType !== 3 || (s = o + i), h !== l || r !== 0 && h.nodeType !== 3 || (a = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (S = h.firstChild) !== null;) p = h, h = S;
                    for (; ;) {
                        if (h === e) break t;
                        if (p === n && ++u === i && (s = o), p === l && ++d === r && (a = o), (S = h.nextSibling) !== null) break;
                        h = p, p = h.parentNode
                    }
                    h = S
                }
                n = s === -1 || a === -1 ? null : {start: s, end: a}
            } else n = null
        }
        n = n || {start: 0, end: 0}
    } else n = null;
    for (no = {
        focusedElem: e,
        selectionRange: n
    }, hi = !1, O = t; O !== null;) if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, O = e; else for (; O !== null;) {
        t = O;
        try {
            var w = t.alternate;
            if ((t.flags & 1024) !== 0) switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    break;
                case 1:
                    if (w !== null) {
                        var k = w.memoizedProps, L = w.memoizedState, f = t.stateNode,
                            c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Xe(t.type, k), L);
                        f.__reactInternalSnapshotBeforeUpdate = c
                    }
                    break;
                case 3:
                    var m = t.stateNode.containerInfo;
                    if (m.nodeType === 1) m.textContent = ""; else if (m.nodeType === 9) {
                        var v = m.body;
                        v != null && (v.textContent = "")
                    }
                    break;
                case 5:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    throw Error(_(163))
            }
        } catch (y) {
            ne(t, t.return, y)
        }
        if (e = t.sibling, e !== null) {
            e.return = t.return, O = e;
            break
        }
        O = t.return
    }
    return w = ja, ja = !1, w
}

function Zn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var l = i.destroy;
                i.destroy = void 0, l !== void 0 && yo(t, n, l)
            }
            i = i.next
        } while (i !== r)
    }
}

function Qi(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function wo(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function sd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, sd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rt], delete t[pr], delete t[lo], delete t[Gm], delete t[Ym])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function ad(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Wa(e) {
    e:for (; ;) {
        for (; e.sibling === null;) {
            if (e.return === null || ad(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Eo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = yi)); else if (r !== 4 && (e = e.child, e !== null)) for (Eo(e, t, n), e = e.sibling; e !== null;) Eo(e, t, n), e = e.sibling
}

function So(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e); else if (r !== 4 && (e = e.child, e !== null)) for (So(e, t, n), e = e.sibling; e !== null;) So(e, t, n), e = e.sibling
}

var ce = null, qe = !1;

function vt(e, t, n) {
    for (n = n.child; n !== null;) ud(e, t, n), n = n.sibling
}

function ud(e, t, n) {
    if (it && typeof it.onCommitFiberUnmount == "function") try {
        it.onCommitFiberUnmount(Ui, n)
    } catch {
    }
    switch (n.tag) {
        case 5:
            ge || pn(n, t);
        case 6:
            var r = ce, i = qe;
            ce = null, vt(e, t, n), ce = r, qe = i, ce !== null && (qe ? (e = ce, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
            break;
        case 18:
            ce !== null && (qe ? (e = ce, n = n.stateNode, e.nodeType === 8 ? Nl(e.parentNode, n) : e.nodeType === 1 && Nl(e, n), ar(e)) : Nl(ce, n.stateNode));
            break;
        case 4:
            r = ce, i = qe, ce = n.stateNode.containerInfo, qe = !0, vt(e, t, n), ce = r, qe = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var l = i, o = l.destroy;
                    l = l.tag, o !== void 0 && ((l & 2) !== 0 || (l & 4) !== 0) && yo(n, t, o), i = i.next
                } while (i !== r)
            }
            vt(e, t, n);
            break;
        case 1:
            if (!ge && (pn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (s) {
                ne(n, t, s)
            }
            vt(e, t, n);
            break;
        case 21:
            vt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ge = (r = ge) || n.memoizedState !== null, vt(e, t, n), ge = r) : vt(e, t, n);
            break;
        default:
            vt(e, t, n)
    }
}

function Ka(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new uh), t.forEach(function (r) {
            var i = wh.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function Ye(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
            var l = e, o = t, s = o;
            e:for (; s !== null;) {
                switch (s.tag) {
                    case 5:
                        ce = s.stateNode, qe = !1;
                        break e;
                    case 3:
                        ce = s.stateNode.containerInfo, qe = !0;
                        break e;
                    case 4:
                        ce = s.stateNode.containerInfo, qe = !0;
                        break e
                }
                s = s.return
            }
            if (ce === null) throw Error(_(160));
            ud(l, o, i), ce = null, qe = !1;
            var a = i.alternate;
            a !== null && (a.return = null), i.return = null
        } catch (u) {
            ne(i, t, u)
        }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null;) cd(t, e), t = t.sibling
}

function cd(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Ye(t, e), tt(e), r & 4) {
                try {
                    Zn(3, e, e.return), Qi(3, e)
                } catch (w) {
                    ne(e, e.return, w)
                }
                try {
                    Zn(5, e, e.return)
                } catch (w) {
                    ne(e, e.return, w)
                }
            }
            break;
        case 1:
            Ye(t, e), tt(e), r & 512 && n !== null && pn(n, n.return);
            break;
        case 5:
            if (Ye(t, e), tt(e), r & 512 && n !== null && pn(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    ir(i, "")
                } catch (w) {
                    ne(e, e.return, w)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var l = e.memoizedProps, o = n !== null ? n.memoizedProps : l, s = e.type, a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    s === "input" && l.type === "radio" && l.name != null && Du(i, l), Kl(s, o);
                    var u = Kl(s, l);
                    for (o = 0; o < a.length; o += 2) {
                        var d = a[o], h = a[o + 1];
                        d === "style" ? Uu(i, h) : d === "dangerouslySetInnerHTML" ? zu(i, h) : d === "children" ? ir(i, h) : Bo(i, d, h, u)
                    }
                    switch (s) {
                        case"input":
                            $l(i, l);
                            break;
                        case"textarea":
                            Iu(i, l);
                            break;
                        case"select":
                            var p = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!l.multiple;
                            var S = l.value;
                            S != null ? gn(i, !!l.multiple, S, !1) : p !== !!l.multiple && (l.defaultValue != null ? gn(i, !!l.multiple, l.defaultValue, !0) : gn(i, !!l.multiple, l.multiple ? [] : "", !1))
                    }
                    i[pr] = l
                } catch (w) {
                    ne(e, e.return, w)
                }
            }
            break;
        case 6:
            if (Ye(t, e), tt(e), r & 4) {
                if (e.stateNode === null) throw Error(_(162));
                u = e.stateNode, d = e.memoizedProps;
                try {
                    u.nodeValue = d
                } catch (w) {
                    ne(e, e.return, w)
                }
            }
            break;
        case 3:
            if (Ye(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                ar(t.containerInfo)
            } catch (w) {
                ne(e, e.return, w)
            }
            break;
        case 4:
            Ye(t, e), tt(e);
            break;
        case 13:
            Ye(t, e), tt(e), u = e.child, u.flags & 8192 && u.memoizedState !== null && (u.alternate === null || u.alternate.memoizedState === null) && (hs = re()), r & 4 && Ka(e);
            break;
        case 22:
            if (u = n !== null && n.memoizedState !== null, e.mode & 1 ? (ge = (d = ge) || u, Ye(t, e), ge = d) : Ye(t, e), tt(e), r & 8192) {
                d = e.memoizedState !== null;
                e:for (h = null, p = e; ;) {
                    if (p.tag === 5) {
                        if (h === null) {
                            h = p;
                            try {
                                i = p.stateNode, d ? (l = i.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = p.stateNode, a = p.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, s.style.display = Bu("display", o))
                            } catch (w) {
                                ne(e, e.return, w)
                            }
                        }
                    } else if (p.tag === 6) {
                        if (h === null) try {
                            p.stateNode.nodeValue = d ? "" : p.memoizedProps
                        } catch (w) {
                            ne(e, e.return, w)
                        }
                    } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                        p.child.return = p, p = p.child;
                        continue
                    }
                    if (p === e) break e;
                    for (; p.sibling === null;) {
                        if (p.return === null || p.return === e) break e;
                        h === p && (h = null), p = p.return
                    }
                    h === p && (h = null), p.sibling.return = p.return, p = p.sibling
                }
                if (d && !u && (e.mode & 1) !== 0) for (O = e, e = e.child; e !== null;) {
                    for (u = O = e; O !== null;) {
                        switch (d = O, h = d.child, d.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Zn(4, d, d.return);
                                break;
                            case 1:
                                if (pn(d, d.return), l = d.stateNode, typeof l.componentWillUnmount == "function") {
                                    p = d, S = d.return;
                                    try {
                                        i = p, l.props = i.memoizedProps, l.state = i.memoizedState, l.componentWillUnmount()
                                    } catch (w) {
                                        ne(p, S, w)
                                    }
                                }
                                break;
                            case 5:
                                pn(d, d.return);
                                break;
                            case 22:
                                if (d.memoizedState !== null) {
                                    Ga(u);
                                    continue
                                }
                        }
                        h !== null ? (h.return = d, O = h) : Ga(u)
                    }
                    e = e.sibling
                }
            }
            break;
        case 19:
            Ye(t, e), tt(e), r & 4 && Ka(e);
            break;
        case 21:
            break;
        default:
            Ye(t, e), tt(e)
    }
}

function tt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e:{
                for (var n = e.return; n !== null;) {
                    if (ad(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(_(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (ir(i, ""), r.flags &= -33);
                    var l = Wa(e);
                    So(e, l, i);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo, s = Wa(e);
                    Eo(e, s, o);
                    break;
                default:
                    throw Error(_(161))
            }
        } catch (a) {
            ne(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function dh(e, t, n) {
    O = e, dd(e)
}

function dd(e, t, n) {
    for (var r = (e.mode & 1) !== 0; O !== null;) {
        var i = O, l = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Yr;
            if (!o) {
                var s = i.alternate, a = s !== null && s.memoizedState !== null || ge;
                s = Yr;
                var u = ge;
                if (Yr = o, (ge = a) && !u) for (O = i; O !== null;) o = O, a = o.child, o.tag === 22 && o.memoizedState !== null ? Ya(i) : a !== null ? (a.return = o, O = a) : Ya(i);
                for (; l !== null;) O = l, dd(l), l = l.sibling;
                O = i, Yr = s, ge = u
            }
            Qa(e)
        } else (i.subtreeFlags & 8772) !== 0 && l !== null ? (l.return = i, O = l) : Qa(e)
    }
}

function Qa(e) {
    for (; O !== null;) {
        var t = O;
        if ((t.flags & 8772) !== 0) {
            var n = t.alternate;
            try {
                if ((t.flags & 8772) !== 0) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ge || Qi(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ge) if (n === null) r.componentDidMount(); else {
                            var i = t.elementType === t.type ? n.memoizedProps : Xe(t.type, n.memoizedProps);
                            r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                        }
                        var l = t.updateQueue;
                        l !== null && ka(t, l, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            ka(t, o, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case"button":
                                case"input":
                                case"select":
                                case"textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case"img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var h = d.dehydrated;
                                    h !== null && ar(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                        break;
                    default:
                        throw Error(_(163))
                }
                ge || t.flags & 512 && wo(t)
            } catch (p) {
                ne(t, t.return, p)
            }
        }
        if (t === e) {
            O = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, O = n;
            break
        }
        O = t.return
    }
}

function Ga(e) {
    for (; O !== null;) {
        var t = O;
        if (t === e) {
            O = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, O = n;
            break
        }
        O = t.return
    }
}

function Ya(e) {
    for (; O !== null;) {
        var t = O;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Qi(4, t)
                    } catch (a) {
                        ne(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            ne(t, i, a)
                        }
                    }
                    var l = t.return;
                    try {
                        wo(t)
                    } catch (a) {
                        ne(t, l, a)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        wo(t)
                    } catch (a) {
                        ne(t, o, a)
                    }
            }
        } catch (a) {
            ne(t, t.return, a)
        }
        if (t === e) {
            O = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return, O = s;
            break
        }
        O = t.return
    }
}

var fh = Math.ceil, Mi = ht.ReactCurrentDispatcher, ps = ht.ReactCurrentOwner, We = ht.ReactCurrentBatchConfig, j = 0,
    ae = null, le = null, de = 0, Ie = 0, mn = At(0), se = 0, wr = null, Gt = 0, Gi = 0, ms = 0, Jn = null, xe = null,
    hs = 0, Cn = 1 / 0, ot = null, Oi = !1, No = null, Mt = null, Xr = !1, kt = null, Li = 0, bn = 0, _o = null,
    oi = -1, si = 0;

function Ne() {
    return (j & 6) !== 0 ? re() : oi !== -1 ? oi : oi = re()
}

function Ot(e) {
    return (e.mode & 1) === 0 ? 1 : (j & 2) !== 0 && de !== 0 ? de & -de : qm.transition !== null ? (si === 0 && (si = qu()), si) : (e = K, e !== 0 || (e = window.event, e = e === void 0 ? 16 : rc(e.type)), e)
}

function Ke(e, t, n) {
    if (50 < bn) throw bn = 0, _o = null, Error(_(185));
    var r = Yi(e, t);
    return r === null ? null : (_r(r, t, n), ((j & 2) === 0 || r !== ae) && (r === ae && ((j & 2) === 0 && (Gi |= t), se === 4 && St(r, de)), Oe(r, n), t === 1 && j === 0 && (e.mode & 1) === 0 && (Cn = re() + 500, ji && zt())), r)
}

function Yi(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}

function fd(e) {
    return (ae !== null || Je !== null) && (e.mode & 1) !== 0 && (j & 2) === 0
}

function Oe(e, t) {
    var n = e.callbackNode;
    qp(e, t);
    var r = mi(e, e === ae ? de : 0);
    if (r === 0) n !== null && ea(n), e.callbackNode = null, e.callbackPriority = 0; else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && ea(n), t === 1) e.tag === 0 ? Xm(Xa.bind(null, e)) : Nc(Xa.bind(null, e)), Km(function () {
            j === 0 && zt()
        }), n = null; else {
            switch (Zu(r)) {
                case 1:
                    n = Vo;
                    break;
                case 4:
                    n = Yu;
                    break;
                case 16:
                    n = pi;
                    break;
                case 536870912:
                    n = Xu;
                    break;
                default:
                    n = pi
            }
            n = Ed(n, pd.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function pd(e, t) {
    if (oi = -1, si = 0, (j & 6) !== 0) throw Error(_(327));
    var n = e.callbackNode;
    if (Sn() && e.callbackNode !== n) return null;
    var r = mi(e, e === ae ? de : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Pi(e, r); else {
        t = r;
        var i = j;
        j |= 2;
        var l = hd();
        (ae !== e || de !== t) && (ot = null, Cn = re() + 500, Vt(e, t));
        do try {
            hh();
            break
        } catch (s) {
            md(e, s)
        } while (1);
        Jo(), Mi.current = l, j = i, le !== null ? t = 0 : (ae = null, de = 0, t = se)
    }
    if (t !== 0) {
        if (t === 2 && (i = ql(e), i !== 0 && (r = i, t = ko(e, i))), t === 1) throw n = wr, Vt(e, 0), St(e, r), Oe(e, re()), n;
        if (t === 6) St(e, r); else {
            if (i = e.current.alternate, (r & 30) === 0 && !ph(i) && (t = Pi(e, r), t === 2 && (l = ql(e), l !== 0 && (r = l, t = ko(e, l))), t === 1)) throw n = wr, Vt(e, 0), St(e, r), Oe(e, re()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(_(345));
                case 2:
                    Ft(e, xe, ot);
                    break;
                case 3:
                    if (St(e, r), (r & 130023424) === r && (t = hs + 500 - re(), 10 < t)) {
                        if (mi(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            Ne(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = io(Ft.bind(null, e, xe, ot), t);
                        break
                    }
                    Ft(e, xe, ot);
                    break;
                case 4:
                    if (St(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var o = 31 - be(r);
                        l = 1 << o, o = t[o], o > i && (i = o), r &= ~l
                    }
                    if (r = i, r = re() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * fh(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = io(Ft.bind(null, e, xe, ot), r);
                        break
                    }
                    Ft(e, xe, ot);
                    break;
                case 5:
                    Ft(e, xe, ot);
                    break;
                default:
                    throw Error(_(329))
            }
        }
    }
    return Oe(e, re()), e.callbackNode === n ? pd.bind(null, e) : null
}

function ko(e, t) {
    var n = Jn;
    return e.current.memoizedState.isDehydrated && (Vt(e, t).flags |= 256), e = Pi(e, t), e !== 2 && (t = xe, xe = n, t !== null && xo(t)), e
}

function xo(e) {
    xe === null ? xe = e : xe.push.apply(xe, e)
}

function ph(e) {
    for (var t = e; ;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
                var i = n[r], l = i.getSnapshot;
                i = i.value;
                try {
                    if (!et(l(), i)) return !1
                } catch {
                    return !1
                }
            }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n; else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function St(e, t) {
    for (t &= ~ms, t &= ~Gi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - be(t), r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Xa(e) {
    if ((j & 6) !== 0) throw Error(_(327));
    Sn();
    var t = mi(e, 0);
    if ((t & 1) === 0) return Oe(e, re()), null;
    var n = Pi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ql(e);
        r !== 0 && (t = r, n = ko(e, r))
    }
    if (n === 1) throw n = wr, Vt(e, 0), St(e, t), Oe(e, re()), n;
    if (n === 6) throw Error(_(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ft(e, xe, ot), Oe(e, re()), null
}

function gs(e, t) {
    var n = j;
    j |= 1;
    try {
        return e(t)
    } finally {
        j = n, j === 0 && (Cn = re() + 500, ji && zt())
    }
}

function Yt(e) {
    kt !== null && kt.tag === 0 && (j & 6) === 0 && Sn();
    var t = j;
    j |= 1;
    var n = We.transition, r = K;
    try {
        if (We.transition = null, K = 1, e) return e()
    } finally {
        K = r, We.transition = n, j = t, (j & 6) === 0 && zt()
    }
}

function vs() {
    Ie = mn.current, q(mn)
}

function Vt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Wm(n)), le !== null) for (n = le.return; n !== null;) {
        var r = n;
        switch (ns(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && wi();
                break;
            case 3:
                Tn(), q(Re), q(ve), os();
                break;
            case 5:
                ls(r);
                break;
            case 4:
                Tn();
                break;
            case 13:
                q(b);
                break;
            case 19:
                q(b);
                break;
            case 10:
                bo(r.type._context);
                break;
            case 22:
            case 23:
                vs()
        }
        n = n.return
    }
    if (ae = e, le = e = Dt(e.current, null), de = Ie = t, se = 0, wr = null, ms = Gi = Gt = 0, xe = Jn = null, Je !== null) {
        for (t = 0; t < Je.length; t++) if (n = Je[t], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var i = r.next, l = n.pending;
            if (l !== null) {
                var o = l.next;
                l.next = i, r.next = o
            }
            n.pending = r
        }
        Je = null
    }
    return e
}

function md(e, t) {
    do {
        var n = le;
        try {
            if (Jo(), ii.current = Ri, Ci) {
                for (var r = ee.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                Ci = !1
            }
            if (Qt = 0, ue = oe = ee = null, qn = !1, gr = 0, ps.current = null, n === null || n.return === null) {
                se = 1, wr = t, le = null;
                break
            }
            e:{
                var l = e, o = n.return, s = n, a = t;
                if (t = de, s.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a, d = s, h = d.tag;
                    if ((d.mode & 1) === 0 && (h === 0 || h === 11 || h === 15)) {
                        var p = d.alternate;
                        p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var S = Da(o);
                    if (S !== null) {
                        S.flags &= -257, Ia(S, o, s, l, t), S.mode & 1 && Pa(l, u, t), t = S, a = u;
                        var w = t.updateQueue;
                        if (w === null) {
                            var k = new Set;
                            k.add(a), t.updateQueue = k
                        } else w.add(a);
                        break e
                    } else {
                        if ((t & 1) === 0) {
                            Pa(l, u, t), ys();
                            break e
                        }
                        a = Error(_(426))
                    }
                } else if (Z && s.mode & 1) {
                    var L = Da(o);
                    if (L !== null) {
                        (L.flags & 65536) === 0 && (L.flags |= 256), Ia(L, o, s, l, t), rs(a);
                        break e
                    }
                }
                l = a, se !== 4 && (se = 2), Jn === null ? Jn = [l] : Jn.push(l), a = fs(a, s), s = o;
                do {
                    switch (s.tag) {
                        case 3:
                            s.flags |= 65536, t &= -t, s.lanes |= t;
                            var f = qc(s, a, t);
                            _a(s, f);
                            break e;
                        case 1:
                            l = a;
                            var c = s.type, m = s.stateNode;
                            if ((s.flags & 128) === 0 && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Mt === null || !Mt.has(m)))) {
                                s.flags |= 65536, t &= -t, s.lanes |= t;
                                var v = Zc(s, l, t);
                                _a(s, v);
                                break e
                            }
                    }
                    s = s.return
                } while (s !== null)
            }
            vd(n)
        } catch (y) {
            t = y, le === n && n !== null && (le = n = n.return);
            continue
        }
        break
    } while (1)
}

function hd() {
    var e = Mi.current;
    return Mi.current = Ri, e === null ? Ri : e
}

function ys() {
    (se === 0 || se === 3 || se === 2) && (se = 4), ae === null || (Gt & 268435455) === 0 && (Gi & 268435455) === 0 || St(ae, de)
}

function Pi(e, t) {
    var n = j;
    j |= 2;
    var r = hd();
    (ae !== e || de !== t) && (ot = null, Vt(e, t));
    do try {
        mh();
        break
    } catch (i) {
        md(e, i)
    } while (1);
    if (Jo(), j = n, Mi.current = r, le !== null) throw Error(_(261));
    return ae = null, de = 0, se
}

function mh() {
    for (; le !== null;) gd(le)
}

function hh() {
    for (; le !== null && !Hp();) gd(le)
}

function gd(e) {
    var t = wd(e.alternate, e, Ie);
    e.memoizedProps = e.pendingProps, t === null ? vd(e) : le = t, ps.current = null
}

function vd(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, (t.flags & 32768) === 0) {
            if (n = lh(n, t, Ie), n !== null) {
                le = n;
                return
            }
        } else {
            if (n = ah(n, t), n !== null) {
                n.flags &= 32767, le = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null; else {
                se = 6, le = null;
                return
            }
        }
        if (t = t.sibling, t !== null) {
            le = t;
            return
        }
        le = t = e
    } while (t !== null);
    se === 0 && (se = 5)
}

function Ft(e, t, n) {
    var r = K, i = We.transition;
    try {
        We.transition = null, K = 1, gh(e, t, n, r)
    } finally {
        We.transition = i, K = r
    }
    return null
}

function gh(e, t, n, r) {
    do Sn(); while (kt !== null);
    if ((j & 6) !== 0) throw Error(_(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(_(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (Zp(e, l), e === ae && (le = ae = null, de = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Xr || (Xr = !0, Ed(pi, function () {
        return Sn(), null
    })), l = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || l) {
        l = We.transition, We.transition = null;
        var o = K;
        K = 1;
        var s = j;
        j |= 4, ps.current = null, ch(e, n), cd(n, e), Bm(no), hi = !!to, no = to = null, e.current = n, dh(n), Vp(), j = s, K = o, We.transition = l
    } else e.current = n;
    if (Xr && (Xr = !1, kt = e, Li = i), l = e.pendingLanes, l === 0 && (Mt = null), Kp(n.stateNode), Oe(e, re()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) r(t[n]);
    if (Oi) throw Oi = !1, e = No, No = null, e;
    return (Li & 1) !== 0 && e.tag !== 0 && Sn(), l = e.pendingLanes, (l & 1) !== 0 ? e === _o ? bn++ : (bn = 0, _o = e) : bn = 0, zt(), null
}

function Sn() {
    if (kt !== null) {
        var e = Zu(Li), t = We.transition, n = K;
        try {
            if (We.transition = null, K = 16 > e ? 16 : e, kt === null) var r = !1; else {
                if (e = kt, kt = null, Li = 0, (j & 6) !== 0) throw Error(_(331));
                var i = j;
                for (j |= 4, O = e.current; O !== null;) {
                    var l = O, o = l.child;
                    if ((O.flags & 16) !== 0) {
                        var s = l.deletions;
                        if (s !== null) {
                            for (var a = 0; a < s.length; a++) {
                                var u = s[a];
                                for (O = u; O !== null;) {
                                    var d = O;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Zn(8, d, l)
                                    }
                                    var h = d.child;
                                    if (h !== null) h.return = d, O = h; else for (; O !== null;) {
                                        d = O;
                                        var p = d.sibling, S = d.return;
                                        if (sd(d), d === u) {
                                            O = null;
                                            break
                                        }
                                        if (p !== null) {
                                            p.return = S, O = p;
                                            break
                                        }
                                        O = S
                                    }
                                }
                            }
                            var w = l.alternate;
                            if (w !== null) {
                                var k = w.child;
                                if (k !== null) {
                                    w.child = null;
                                    do {
                                        var L = k.sibling;
                                        k.sibling = null, k = L
                                    } while (k !== null)
                                }
                            }
                            O = l
                        }
                    }
                    if ((l.subtreeFlags & 2064) !== 0 && o !== null) o.return = l, O = o; else e:for (; O !== null;) {
                        if (l = O, (l.flags & 2048) !== 0) switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Zn(9, l, l.return)
                        }
                        var f = l.sibling;
                        if (f !== null) {
                            f.return = l.return, O = f;
                            break e
                        }
                        O = l.return
                    }
                }
                var c = e.current;
                for (O = c; O !== null;) {
                    o = O;
                    var m = o.child;
                    if ((o.subtreeFlags & 2064) !== 0 && m !== null) m.return = o, O = m; else e:for (o = c; O !== null;) {
                        if (s = O, (s.flags & 2048) !== 0) try {
                            switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Qi(9, s)
                            }
                        } catch (y) {
                            ne(s, s.return, y)
                        }
                        if (s === o) {
                            O = null;
                            break e
                        }
                        var v = s.sibling;
                        if (v !== null) {
                            v.return = s.return, O = v;
                            break e
                        }
                        O = s.return
                    }
                }
                if (j = i, zt(), it && typeof it.onPostCommitFiberRoot == "function") try {
                    it.onPostCommitFiberRoot(Ui, e)
                } catch {
                }
                r = !0
            }
            return r
        } finally {
            K = n, We.transition = t
        }
    }
    return !1
}

function qa(e, t, n) {
    t = fs(n, t), t = qc(e, t, 1), Rt(e, t), t = Ne(), e = Yi(e, 1), e !== null && (_r(e, 1, t), Oe(e, t))
}

function ne(e, t, n) {
    if (e.tag === 3) qa(e, e, n); else for (; t !== null;) {
        if (t.tag === 3) {
            qa(t, e, n);
            break
        } else if (t.tag === 1) {
            var r = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Mt === null || !Mt.has(r))) {
                e = fs(n, e), e = Zc(t, e, 1), Rt(t, e), e = Ne(), t = Yi(t, 1), t !== null && (_r(t, 1, e), Oe(t, e));
                break
            }
        }
        t = t.return
    }
}

function vh(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ne(), e.pingedLanes |= e.suspendedLanes & n, ae === e && (de & n) === n && (se === 4 || se === 3 && (de & 130023424) === de && 500 > re() - hs ? Vt(e, 0) : ms |= n), Oe(e, t)
}

function yd(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Ur, Ur <<= 1, (Ur & 130023424) === 0 && (Ur = 4194304)));
    var n = Ne();
    e = Yi(e, t), e !== null && (_r(e, t, n), Oe(e, n))
}

function yh(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), yd(e, n)
}

function wh(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode, i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(_(314))
    }
    r !== null && r.delete(t), yd(e, n)
}

var wd;
wd = function (e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Re.current) Ce = !0; else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return Ce = !1, sh(e, t, n);
        Ce = (e.flags & 131072) !== 0
    } else Ce = !1, Z && (t.flags & 1048576) !== 0 && Tc(t, xi, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps;
            var i = _n(t, ve.current);
            En(t, n), i = as(null, t, r, e, i, n);
            var l = us();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Me(r) ? (l = !0, Ei(t)) : l = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, es(t), i.updater = Wi, t.stateNode = i, i._reactInternals = t, uo(t, r, e, n), t = go(null, t, r, !0, l, n)) : (t.tag = 0, Z && l && ts(t), Se(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e:{
                switch (e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Sh(r), e = Xe(r, e), i) {
                    case 0:
                        t = ho(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Ba(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Aa(null, t, r, e, n);
                        break e;
                    case 14:
                        t = za(null, t, r, Xe(r.type, e), n);
                        break e
                }
                throw Error(_(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), ho(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), Ba(e, t, r, i, n);
        case 3:
            e:{
                if (id(t), e === null) throw Error(_(387));
                r = t.pendingProps, l = t.memoizedState, i = l.element, _c(e, t), _i(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, l.isDehydrated) if (l = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                    i = Error(_(423)), t = Ua(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Error(_(424)), t = Ua(e, t, r, n, i);
                    break e
                } else for (Te = at(t.stateNode.containerInfo.firstChild), Ae = t, Z = !0, Ze = null, n = Mc(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling; else {
                    if (kn(), r === i) {
                        t = mt(e, t, n);
                        break e
                    }
                    Se(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Oc(t), e === null && fo(t), r = t.type, i = t.pendingProps, l = e !== null ? e.memoizedProps : null, o = i.children, ro(r, i) ? o = null : l !== null && ro(r, l) && (t.flags |= 32), rd(e, t), Se(e, t, o, n), t.child;
        case 6:
            return e === null && fo(t), null;
        case 13:
            return ld(e, t, n);
        case 4:
            return is(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = xn(t, null, r, n) : Se(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), Aa(e, t, r, i, n);
        case 7:
            return Se(e, t, t.pendingProps, n), t.child;
        case 8:
            return Se(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Se(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e:{
                if (r = t.type._context, i = t.pendingProps, l = t.memoizedProps, o = i.value, Y(Si, r._currentValue), r._currentValue = o, l !== null) if (et(l.value, o)) {
                    if (l.children === i.children && !Re.current) {
                        t = mt(e, t, n);
                        break e
                    }
                } else for (l = t.child, l !== null && (l.return = t); l !== null;) {
                    var s = l.dependencies;
                    if (s !== null) {
                        o = l.child;
                        for (var a = s.firstContext; a !== null;) {
                            if (a.context === r) {
                                if (l.tag === 1) {
                                    a = dt(-1, n & -n), a.tag = 2;
                                    var u = l.updateQueue;
                                    if (u !== null) {
                                        u = u.shared;
                                        var d = u.pending;
                                        d === null ? a.next = a : (a.next = d.next, d.next = a), u.pending = a
                                    }
                                }
                                l.lanes |= n, a = l.alternate, a !== null && (a.lanes |= n), so(l.return, n, t), s.lanes |= n;
                                break
                            }
                            a = a.next
                        }
                    } else if (l.tag === 10) o = l.type === t.type ? null : l.child; else if (l.tag === 18) {
                        if (o = l.return, o === null) throw Error(_(341));
                        o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), so(o, n, t), o = l.sibling
                    } else o = l.child;
                    if (o !== null) o.return = l; else for (o = l; o !== null;) {
                        if (o === t) {
                            o = null;
                            break
                        }
                        if (l = o.sibling, l !== null) {
                            l.return = o.return, o = l;
                            break
                        }
                        o = o.return
                    }
                    l = o
                }
                Se(e, t, i.children, n), t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, En(t, n), i = Qe(i), r = r(i), t.flags |= 1, Se(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = Xe(r, t.pendingProps), i = Xe(r.type, i), za(e, t, r, i, n);
        case 15:
            return td(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, Me(r) ? (e = !0, Ei(t)) : e = !1, En(t, n), xc(t, r, i), uo(t, r, i, n), go(null, t, r, !0, e, n);
        case 19:
            return od(e, t, n);
        case 22:
            return nd(e, t, n)
    }
    throw Error(_(156, t.tag))
};

function Ed(e, t) {
    return Gu(e, t)
}

function Eh(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function je(e, t, n, r) {
    return new Eh(e, t, n, r)
}

function ws(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Sh(e) {
    if (typeof e == "function") return ws(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Fo) return 11;
        if (e === $o) return 14
    }
    return 2
}

function Dt(e, t) {
    var n = e.alternate;
    return n === null ? (n = je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function ai(e, t, n, r, i, l) {
    var o = 2;
    if (r = e, typeof e == "function") ws(e) && (o = 1); else if (typeof e == "string") o = 5; else e:switch (e) {
        case rn:
            return jt(n.children, i, l, t);
        case Uo:
            o = 8, i |= 8;
            break;
        case Al:
            return e = je(12, n, t, i | 2), e.elementType = Al, e.lanes = l, e;
        case zl:
            return e = je(13, n, t, i), e.elementType = zl, e.lanes = l, e;
        case Bl:
            return e = je(19, n, t, i), e.elementType = Bl, e.lanes = l, e;
        case Ou:
            return Di(n, i, l, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Ru:
                    o = 10;
                    break e;
                case Mu:
                    o = 9;
                    break e;
                case Fo:
                    o = 11;
                    break e;
                case $o:
                    o = 14;
                    break e;
                case yt:
                    o = 16, r = null;
                    break e
            }
            throw Error(_(130, e == null ? e : typeof e, ""))
    }
    return t = je(o, n, t, i), t.elementType = e, t.type = r, t.lanes = l, t
}

function jt(e, t, n, r) {
    return e = je(7, e, r, t), e.lanes = n, e
}

function Di(e, t, n, r) {
    return e = je(22, e, r, t), e.elementType = Ou, e.lanes = n, e.stateNode = {}, e
}

function Ml(e, t, n) {
    return e = je(6, e, null, t), e.lanes = n, e
}

function Ol(e, t, n) {
    return t = je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Nh(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = dl(0), this.expirationTimes = dl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = dl(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Es(e, t, n, r, i, l, o, s, a) {
    return e = new Nh(e, t, n, s, a), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = je(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, es(l), e
}

function _h(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {$$typeof: nn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n}
}

function Sd(e) {
    if (!e) return Pt;
    e = e._reactInternals;
    e:{
        if (qt(e) !== e || e.tag !== 1) throw Error(_(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Me(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(_(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Me(n)) return Sc(e, n, t)
    }
    return t
}

function Nd(e, t, n, r, i, l, o, s, a) {
    return e = Es(n, r, !0, e, i, l, o, s, a), e.context = Sd(null), n = e.current, r = Ne(), i = Ot(n), l = dt(r, i), l.callback = t != null ? t : null, Rt(n, l), e.current.lanes = i, _r(e, i, r), Oe(e, r), e
}

function Xi(e, t, n, r) {
    var i = t.current, l = Ne(), o = Ot(i);
    return n = Sd(n), t.context === null ? t.context = n : t.pendingContext = n, t = dt(l, o), t.payload = {element: e}, r = r === void 0 ? null : r, r !== null && (t.callback = r), Rt(i, t), e = Ke(i, o, l), e !== null && ri(e, i, o), o
}

function Ii(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Za(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Ss(e, t) {
    Za(e, t), (e = e.alternate) && Za(e, t)
}

function kh() {
    return null
}

var _d = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
};

function Ns(e) {
    this._internalRoot = e
}

qi.prototype.render = Ns.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(_(409));
    Xi(e, t, null, null)
};
qi.prototype.unmount = Ns.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Yt(function () {
            Xi(null, e, null, null)
        }), t[pt] = null
    }
};

function qi(e) {
    this._internalRoot = e
}

qi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = ec();
        e = {blockedOn: null, target: e, priority: t};
        for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++) ;
        Et.splice(n, 0, e), n === 0 && nc(e)
    }
};

function _s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Zi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Ja() {
}

function xh(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var l = r;
            r = function () {
                var u = Ii(o);
                l.call(u)
            }
        }
        var o = Nd(t, r, e, 0, null, !1, !1, "", Ja);
        return e._reactRootContainer = o, e[pt] = o.current, dr(e.nodeType === 8 ? e.parentNode : e), Yt(), o
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var s = r;
        r = function () {
            var u = Ii(a);
            s.call(u)
        }
    }
    var a = Es(e, 0, !1, null, null, !1, !1, "", Ja);
    return e._reactRootContainer = a, e[pt] = a.current, dr(e.nodeType === 8 ? e.parentNode : e), Yt(function () {
        Xi(t, a, n, r)
    }), a
}

function Ji(e, t, n, r, i) {
    var l = n._reactRootContainer;
    if (l) {
        var o = l;
        if (typeof i == "function") {
            var s = i;
            i = function () {
                var a = Ii(o);
                s.call(a)
            }
        }
        Xi(t, o, e, i)
    } else o = xh(n, t, e, i, r);
    return Ii(o)
}

Ju = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = jn(t.pendingLanes);
                n !== 0 && (jo(t, n | 1), Oe(t, re()), (j & 6) === 0 && (Cn = re() + 500, zt()))
            }
            break;
        case 13:
            var r = Ne();
            Yt(function () {
                return Ke(e, 1, r)
            }), Ss(e, 1)
    }
};
Wo = function (e) {
    if (e.tag === 13) {
        var t = Ne();
        Ke(e, 134217728, t), Ss(e, 134217728)
    }
};
bu = function (e) {
    if (e.tag === 13) {
        var t = Ne(), n = Ot(e);
        Ke(e, n, t), Ss(e, n)
    }
};
ec = function () {
    return K
};
tc = function (e, t) {
    var n = K;
    try {
        return K = e, t()
    } finally {
        K = n
    }
};
Gl = function (e, t, n) {
    switch (t) {
        case"input":
            if ($l(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Vi(r);
                        if (!i) throw Error(_(90));
                        Pu(r), $l(r, i)
                    }
                }
            }
            break;
        case"textarea":
            Iu(e, n);
            break;
        case"select":
            t = n.value, t != null && gn(e, !!n.multiple, t, !1)
    }
};
Hu = gs;
Vu = Yt;
var Th = {usingClientEntryPoint: !1, Events: [xr, an, Vi, Fu, $u, gs]},
    Fn = {findFiberByHostInstance: $t, bundleType: 0, version: "18.1.0", rendererPackageName: "react-dom"}, Ch = {
        bundleType: Fn.bundleType,
        version: Fn.version,
        rendererPackageName: Fn.rendererPackageName,
        rendererConfig: Fn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: ht.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = Ku(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Fn.findFiberByHostInstance || kh,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.1.0-next-22edb9f77-20220426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qr.isDisabled && qr.supportsFiber) try {
        Ui = qr.inject(Ch), it = qr
    } catch {
    }
}
Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Th;
Be.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_s(t)) throw Error(_(200));
    return _h(e, t, null, n)
};
Be.createRoot = function (e, t) {
    if (!_s(e)) throw Error(_(299));
    var n = !1, r = "", i = _d;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Es(e, 1, !1, null, null, n, !1, r, i), e[pt] = t.current, dr(e.nodeType === 8 ? e.parentNode : e), new Ns(t)
};
Be.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","), Error(_(268, e)));
    return e = Ku(t), e = e === null ? null : e.stateNode, e
};
Be.flushSync = function (e) {
    return Yt(e)
};
Be.hydrate = function (e, t, n) {
    if (!Zi(t)) throw Error(_(200));
    return Ji(null, e, t, !0, n)
};
Be.hydrateRoot = function (e, t, n) {
    if (!_s(e)) throw Error(_(405));
    var r = n != null && n.hydratedSources || null, i = !1, l = "", o = _d;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Nd(t, null, e, 1, n != null ? n : null, i, !1, l, o), e[pt] = t.current, dr(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new qi(t)
};
Be.render = function (e, t, n) {
    if (!Zi(t)) throw Error(_(200));
    return Ji(null, e, t, !1, n)
};
Be.unmountComponentAtNode = function (e) {
    if (!Zi(e)) throw Error(_(40));
    return e._reactRootContainer ? (Yt(function () {
        Ji(null, null, e, !1, function () {
            e._reactRootContainer = null, e[pt] = null
        })
    }), !0) : !1
};
Be.unstable_batchedUpdates = gs;
Be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Zi(n)) throw Error(_(200));
    if (e == null || e._reactInternals === void 0) throw Error(_(38));
    return Ji(e, t, n, !1, r)
};
Be.version = "18.1.0-next-22edb9f77-20220426";

function kd() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kd)
    } catch (e) {
        console.error(e)
    }
}

kd(), _u.exports = Be;

function Rh() {
    document.playwrightThemeInitialized || (document.playwrightThemeInitialized = !0, document.defaultView.addEventListener("focus", e => {
        e.target.document.nodeType === Node.DOCUMENT_NODE && document.body.classList.remove("inactive")
    }, !1), document.defaultView.addEventListener("blur", e => {
        document.body.classList.add("inactive")
    }, !1))
}

(async () => (Rh(), window.location.protocol !== "file:" && (window.location.href.includes("isUnderTest=true") && await new Promise(e => setTimeout(e, 1e3)), navigator.serviceWorker.register("sw.bundle.js"), navigator.serviceWorker.controller || await new Promise(e => {
    navigator.serviceWorker.oncontrollerchange = () => e()
}), setInterval(function () {
    fetch("ping")
}, 1e4)), _u.exports.render(g(Tp, {}), document.querySelector("#root"))))();
