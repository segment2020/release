/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (t, e) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? (exports.LinkTool = e()) : (t.LinkTool = e());
})(window, function () {
    return (function (t) {
        var e = {};
        function n(r) {
            if (e[r]) return e[r].exports;
            var o = (e[r] = { i: r, l: !1, exports: {} });
            return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
            }),
            (n.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (n.t = function (t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var r = Object.create(null);
                if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                    for (var o in t)
                        n.d(
                            r,
                            o,
                            function (e) {
                                return t[e];
                            }.bind(null, o)
                        );
                return r;
            }),
            (n.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return n.d(e, "a", e), e;
            }),
            (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = "/"),
            n((n.s = 8))
        );
    })([
        function (t, e, n) {
            t.exports = n(13);
        },
        function (t, e) {
            function n(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            t.exports = function (t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t;
            };
        },
        function (t, e) {
            t.exports = function (t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            };
        },
        function (t, e, n) {
            var r = n(9),
                o = n(10),
                i = n(11),
                a = n(12);
            t.exports = function (t) {
                return r(t) || o(t) || i(t) || a();
            };
        },
        function (t, e) {
            function n(t, e, n, r, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(c) : Promise.resolve(c).then(r, o);
            }
            t.exports = function (t) {
                return function () {
                    var e = this,
                        r = arguments;
                    return new Promise(function (o, i) {
                        var a = t.apply(e, r);
                        function s(t) {
                            n(a, o, i, s, c, "next", t);
                        }
                        function c(t) {
                            n(a, o, i, s, c, "throw", t);
                        }
                        s(void 0);
                    });
                };
            };
        },
        function (t, e) {
            t.exports = function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            };
        },
        function (t, e) {
            t.exports =
                '<svg width="13" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M8.567 13.629c.728.464 1.581.65 2.41.558l-.873.873A3.722 3.722 0 1 1 4.84 9.794L6.694 7.94a3.722 3.722 0 0 1 5.256-.008L10.484 9.4a5.209 5.209 0 0 1-.017.016 1.625 1.625 0 0 0-2.29.009l-1.854 1.854a1.626 1.626 0 0 0 2.244 2.35zm2.766-7.358a3.722 3.722 0 0 0-2.41-.558l.873-.873a3.722 3.722 0 1 1 5.264 5.266l-1.854 1.854a3.722 3.722 0 0 1-5.256.008L9.416 10.5a5.2 5.2 0 0 1 .017-.016 1.625 1.625 0 0 0 2.29-.009l1.854-1.854a1.626 1.626 0 0 0-2.244-2.35z" transform="translate(-3.667 -2.7)"></path></svg>';
        },
        function (t, e, n) {
            window,
                (t.exports = (function (t) {
                    var e = {};
                    function n(r) {
                        if (e[r]) return e[r].exports;
                        var o = (e[r] = { i: r, l: !1, exports: {} });
                        return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
                    }
                    return (
                        (n.m = t),
                        (n.c = e),
                        (n.d = function (t, e, r) {
                            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
                        }),
                        (n.r = function (t) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
                        }),
                        (n.t = function (t, e) {
                            if ((1 & e && (t = n(t)), 8 & e)) return t;
                            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                            var r = Object.create(null);
                            if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                                for (var o in t)
                                    n.d(
                                        r,
                                        o,
                                        function (e) {
                                            return t[e];
                                        }.bind(null, o)
                                    );
                            return r;
                        }),
                        (n.n = function (t) {
                            var e =
                                t && t.__esModule
                                    ? function () {
                                          return t.default;
                                      }
                                    : function () {
                                          return t;
                                      };
                            return n.d(e, "a", e), e;
                        }),
                        (n.o = function (t, e) {
                            return Object.prototype.hasOwnProperty.call(t, e);
                        }),
                        (n.p = ""),
                        n((n.s = 3))
                    );
                })([
                    function (t, e) {
                        var n;
                        n = (function () {
                            return this;
                        })();
                        try {
                            n = n || new Function("return this")();
                        } catch (t) {
                            "object" == typeof window && (n = window);
                        }
                        t.exports = n;
                    },
                    function (t, e, n) {
                        "use strict";
                        (function (t) {
                            var r = n(2),
                                o = setTimeout;
                            function i() {}
                            function a(t) {
                                if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
                                if ("function" != typeof t) throw new TypeError("not a function");
                                (this._state = 0), (this._handled = !1), (this._value = void 0), (this._deferreds = []), h(t, this);
                            }
                            function s(t, e) {
                                for (; 3 === t._state; ) t = t._value;
                                0 !== t._state
                                    ? ((t._handled = !0),
                                      a._immediateFn(function () {
                                          var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                                          if (null !== n) {
                                              var r;
                                              try {
                                                  r = n(t._value);
                                              } catch (t) {
                                                  return void u(e.promise, t);
                                              }
                                              c(e.promise, r);
                                          } else (1 === t._state ? c : u)(e.promise, t._value);
                                      }))
                                    : t._deferreds.push(e);
                            }
                            function c(t, e) {
                                try {
                                    if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                                    if (e && ("object" == typeof e || "function" == typeof e)) {
                                        var n = e.then;
                                        if (e instanceof a) return (t._state = 3), (t._value = e), void l(t);
                                        if ("function" == typeof n)
                                            return void h(
                                                ((r = n),
                                                (o = e),
                                                function () {
                                                    r.apply(o, arguments);
                                                }),
                                                t
                                            );
                                    }
                                    (t._state = 1), (t._value = e), l(t);
                                } catch (e) {
                                    u(t, e);
                                }
                                var r, o;
                            }
                            function u(t, e) {
                                (t._state = 2), (t._value = e), l(t);
                            }
                            function l(t) {
                                2 === t._state &&
                                    0 === t._deferreds.length &&
                                    a._immediateFn(function () {
                                        t._handled || a._unhandledRejectionFn(t._value);
                                    });
                                for (var e = 0, n = t._deferreds.length; e < n; e++) s(t, t._deferreds[e]);
                                t._deferreds = null;
                            }
                            function f(t, e, n) {
                                (this.onFulfilled = "function" == typeof t ? t : null), (this.onRejected = "function" == typeof e ? e : null), (this.promise = n);
                            }
                            function h(t, e) {
                                var n = !1;
                                try {
                                    t(
                                        function (t) {
                                            n || ((n = !0), c(e, t));
                                        },
                                        function (t) {
                                            n || ((n = !0), u(e, t));
                                        }
                                    );
                                } catch (t) {
                                    if (n) return;
                                    (n = !0), u(e, t);
                                }
                            }
                            (a.prototype.catch = function (t) {
                                return this.then(null, t);
                            }),
                                (a.prototype.then = function (t, e) {
                                    var n = new this.constructor(i);
                                    return s(this, new f(t, e, n)), n;
                                }),
                                (a.prototype.finally = r.a),
                                (a.all = function (t) {
                                    return new a(function (e, n) {
                                        if (!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array");
                                        var r = Array.prototype.slice.call(t);
                                        if (0 === r.length) return e([]);
                                        var o = r.length;
                                        function i(t, a) {
                                            try {
                                                if (a && ("object" == typeof a || "function" == typeof a)) {
                                                    var s = a.then;
                                                    if ("function" == typeof s)
                                                        return void s.call(
                                                            a,
                                                            function (e) {
                                                                i(t, e);
                                                            },
                                                            n
                                                        );
                                                }
                                                (r[t] = a), 0 == --o && e(r);
                                            } catch (t) {
                                                n(t);
                                            }
                                        }
                                        for (var a = 0; a < r.length; a++) i(a, r[a]);
                                    });
                                }),
                                (a.resolve = function (t) {
                                    return t && "object" == typeof t && t.constructor === a
                                        ? t
                                        : new a(function (e) {
                                              e(t);
                                          });
                                }),
                                (a.reject = function (t) {
                                    return new a(function (e, n) {
                                        n(t);
                                    });
                                }),
                                (a.race = function (t) {
                                    return new a(function (e, n) {
                                        for (var r = 0, o = t.length; r < o; r++) t[r].then(e, n);
                                    });
                                }),
                                (a._immediateFn =
                                    ("function" == typeof t &&
                                        function (e) {
                                            t(e);
                                        }) ||
                                    function (t) {
                                        o(t, 0);
                                    }),
                                (a._unhandledRejectionFn = function (t) {
                                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
                                }),
                                (e.a = a);
                        }.call(this, n(5).setImmediate));
                    },
                    function (t, e, n) {
                        "use strict";
                        e.a = function (t) {
                            var e = this.constructor;
                            return this.then(
                                function (n) {
                                    return e.resolve(t()).then(function () {
                                        return n;
                                    });
                                },
                                function (n) {
                                    return e.resolve(t()).then(function () {
                                        return e.reject(n);
                                    });
                                }
                            );
                        };
                    },
                    function (t, e, n) {
                        "use strict";
                        function r(t) {
                            return (r =
                                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                    ? function (t) {
                                          return typeof t;
                                      }
                                    : function (t) {
                                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                      })(t);
                        }
                        n(4);
                        var o,
                            i,
                            a,
                            s,
                            c,
                            u,
                            l = n(8),
                            f =
                                ((i = function (t) {
                                    return new Promise(function (e, n) {
                                        (t = s(t)), (t = c(t));
                                        var r = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
                                        r.open(t.method, t.url),
                                            r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                                            Object.keys(t.headers).forEach(function (e) {
                                                var n = t.headers[e];
                                                r.setRequestHeader(e, n);
                                            });
                                        var o = t.ratio;
                                        r.upload.addEventListener(
                                            "progress",
                                            function (e) {
                                                var n = Math.round((e.loaded / e.total) * 100),
                                                    r = Math.ceil((n * o) / 100);
                                                t.progress(r);
                                            },
                                            !1
                                        ),
                                            r.addEventListener(
                                                "progress",
                                                function (e) {
                                                    var n = Math.round((e.loaded / e.total) * 100),
                                                        r = Math.ceil((n * (100 - o)) / 100) + o;
                                                    t.progress(r);
                                                },
                                                !1
                                            ),
                                            (r.onreadystatechange = function () {
                                                if (4 === r.readyState) {
                                                    var t = r.response;
                                                    try {
                                                        t = JSON.parse(t);
                                                    } catch (t) {}
                                                    var o = l.parseHeaders(r.getAllResponseHeaders()),
                                                        i = { body: t, code: r.status, headers: o };
                                                    200 === r.status ? e(i) : n(i);
                                                }
                                            }),
                                            r.send(t.data);
                                    });
                                }),
                                (a = function (t) {
                                    return (t.method = "POST"), i(t);
                                }),
                                (s = function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    if (t.url && "string" != typeof t.url) throw new Error("Url must be a string");
                                    if (((t.url = t.url || ""), t.method && "string" != typeof t.method)) throw new Error("`method` must be a string or null");
                                    if (((t.method = t.method ? t.method.toUpperCase() : "GET"), t.headers && "object" !== r(t.headers))) throw new Error("`headers` must be an object or null");
                                    if (((t.headers = t.headers || {}), t.type && ("string" != typeof t.type || !Object.values(o).includes(t.type)))) throw new Error("`type` must be taken from module's «contentType» library");
                                    if (t.progress && "function" != typeof t.progress) throw new Error("`progress` must be a function or null");
                                    if (((t.progress = t.progress || function (t) {}), (t.beforeSend = t.beforeSend || function (t) {}), t.ratio && "number" != typeof t.ratio)) throw new Error("`ratio` must be a number");
                                    if (t.ratio < 0 || t.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
                                    if (((t.ratio = t.ratio || 90), t.accept && "string" != typeof t.accept)) throw new Error("`accept` must be a string with a list of allowed mime-types");
                                    if (((t.accept = t.accept || "*/*"), t.multiple && "boolean" != typeof t.multiple)) throw new Error("`multiple` must be a true or false");
                                    if (((t.multiple = t.multiple || !1), t.fieldName && "string" != typeof t.fieldName)) throw new Error("`fieldName` must be a string");
                                    return (t.fieldName = t.fieldName || "files"), t;
                                }),
                                (c = function (t) {
                                    switch (t.method) {
                                        case "GET":
                                            var e = u(t.data, o.URLENCODED);
                                            delete t.data, (t.url = /\?/.test(t.url) ? t.url + "&" + e : t.url + "?" + e);
                                            break;
                                        case "POST":
                                        case "PUT":
                                        case "DELETE":
                                        case "UPDATE":
                                            var n = (function () {
                                                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).type || o.JSON;
                                            })(t);
                                            (l.isFormData(t.data) || l.isFormElement(t.data)) && (n = o.FORM), (t.data = u(t.data, n)), n !== f.contentType.FORM && (t.headers["content-type"] = n);
                                    }
                                    return t;
                                }),
                                (u = function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    switch (arguments.length > 1 ? arguments[1] : void 0) {
                                        case o.URLENCODED:
                                            return l.urlEncode(t);
                                        case o.JSON:
                                            return l.jsonEncode(t);
                                        case o.FORM:
                                            return l.formEncode(t);
                                        default:
                                            return t;
                                    }
                                }),
                                {
                                    contentType: (o = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }),
                                    request: i,
                                    get: function (t) {
                                        return (t.method = "GET"), i(t);
                                    },
                                    post: a,
                                    transport: function (t) {
                                        return (
                                            (t = s(t)),
                                            l.selectFiles(t).then(function (e) {
                                                for (var n = new FormData(), r = 0; r < e.length; r++) n.append(t.fieldName, e[r], e[r].name);
                                                return (
                                                    l.isObject(t.data) &&
                                                        Object.keys(t.data).forEach(function (e) {
                                                            var r = t.data[e];
                                                            n.append(e, r);
                                                        }),
                                                    t.beforeSend && t.beforeSend(e),
                                                    (t.data = n),
                                                    a(t)
                                                );
                                            })
                                        );
                                    },
                                    selectFiles: function (t) {
                                        return delete (t = s(t)).beforeSend, l.selectFiles(t);
                                    },
                                });
                        t.exports = f;
                    },
                    function (t, e, n) {
                        "use strict";
                        n.r(e);
                        var r = n(1);
                        window.Promise = window.Promise || r.a;
                    },
                    function (t, e, n) {
                        (function (t) {
                            var r = (void 0 !== t && t) || ("undefined" != typeof self && self) || window,
                                o = Function.prototype.apply;
                            function i(t, e) {
                                (this._id = t), (this._clearFn = e);
                            }
                            (e.setTimeout = function () {
                                return new i(o.call(setTimeout, r, arguments), clearTimeout);
                            }),
                                (e.setInterval = function () {
                                    return new i(o.call(setInterval, r, arguments), clearInterval);
                                }),
                                (e.clearTimeout = e.clearInterval = function (t) {
                                    t && t.close();
                                }),
                                (i.prototype.unref = i.prototype.ref = function () {}),
                                (i.prototype.close = function () {
                                    this._clearFn.call(r, this._id);
                                }),
                                (e.enroll = function (t, e) {
                                    clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
                                }),
                                (e.unenroll = function (t) {
                                    clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
                                }),
                                (e._unrefActive = e.active = function (t) {
                                    clearTimeout(t._idleTimeoutId);
                                    var e = t._idleTimeout;
                                    e >= 0 &&
                                        (t._idleTimeoutId = setTimeout(function () {
                                            t._onTimeout && t._onTimeout();
                                        }, e));
                                }),
                                n(6),
                                (e.setImmediate = ("undefined" != typeof self && self.setImmediate) || (void 0 !== t && t.setImmediate) || (this && this.setImmediate)),
                                (e.clearImmediate = ("undefined" != typeof self && self.clearImmediate) || (void 0 !== t && t.clearImmediate) || (this && this.clearImmediate));
                        }.call(this, n(0)));
                    },
                    function (t, e, n) {
                        (function (t, e) {
                            !(function (t, n) {
                                "use strict";
                                if (!t.setImmediate) {
                                    var r,
                                        o,
                                        i,
                                        a,
                                        s,
                                        c = 1,
                                        u = {},
                                        l = !1,
                                        f = t.document,
                                        h = Object.getPrototypeOf && Object.getPrototypeOf(t);
                                    (h = h && h.setTimeout ? h : t),
                                        "[object process]" === {}.toString.call(t.process)
                                            ? (r = function (t) {
                                                  e.nextTick(function () {
                                                      p(t);
                                                  });
                                              })
                                            : (function () {
                                                  if (t.postMessage && !t.importScripts) {
                                                      var e = !0,
                                                          n = t.onmessage;
                                                      return (
                                                          (t.onmessage = function () {
                                                              e = !1;
                                                          }),
                                                          t.postMessage("", "*"),
                                                          (t.onmessage = n),
                                                          e
                                                      );
                                                  }
                                              })()
                                            ? ((a = "setImmediate$" + Math.random() + "$"),
                                              (s = function (e) {
                                                  e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(a) && p(+e.data.slice(a.length));
                                              }),
                                              t.addEventListener ? t.addEventListener("message", s, !1) : t.attachEvent("onmessage", s),
                                              (r = function (e) {
                                                  t.postMessage(a + e, "*");
                                              }))
                                            : t.MessageChannel
                                            ? (((i = new MessageChannel()).port1.onmessage = function (t) {
                                                  p(t.data);
                                              }),
                                              (r = function (t) {
                                                  i.port2.postMessage(t);
                                              }))
                                            : f && "onreadystatechange" in f.createElement("script")
                                            ? ((o = f.documentElement),
                                              (r = function (t) {
                                                  var e = f.createElement("script");
                                                  (e.onreadystatechange = function () {
                                                      p(t), (e.onreadystatechange = null), o.removeChild(e), (e = null);
                                                  }),
                                                      o.appendChild(e);
                                              }))
                                            : (r = function (t) {
                                                  setTimeout(p, 0, t);
                                              }),
                                        (h.setImmediate = function (t) {
                                            "function" != typeof t && (t = new Function("" + t));
                                            for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                                            var o = { callback: t, args: e };
                                            return (u[c] = o), r(c), c++;
                                        }),
                                        (h.clearImmediate = d);
                                }
                                function d(t) {
                                    delete u[t];
                                }
                                function p(t) {
                                    if (l) setTimeout(p, 0, t);
                                    else {
                                        var e = u[t];
                                        if (e) {
                                            l = !0;
                                            try {
                                                !(function (t) {
                                                    var e = t.callback,
                                                        n = t.args;
                                                    switch (n.length) {
                                                        case 0:
                                                            e();
                                                            break;
                                                        case 1:
                                                            e(n[0]);
                                                            break;
                                                        case 2:
                                                            e(n[0], n[1]);
                                                            break;
                                                        case 3:
                                                            e(n[0], n[1], n[2]);
                                                            break;
                                                        default:
                                                            e.apply(void 0, n);
                                                    }
                                                })(e);
                                            } finally {
                                                d(t), (l = !1);
                                            }
                                        }
                                    }
                                }
                            })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
                        }.call(this, n(0), n(7)));
                    },
                    function (t, e) {
                        var n,
                            r,
                            o = (t.exports = {});
                        function i() {
                            throw new Error("setTimeout has not been defined");
                        }
                        function a() {
                            throw new Error("clearTimeout has not been defined");
                        }
                        function s(t) {
                            if (n === setTimeout) return setTimeout(t, 0);
                            if ((n === i || !n) && setTimeout) return (n = setTimeout), setTimeout(t, 0);
                            try {
                                return n(t, 0);
                            } catch (e) {
                                try {
                                    return n.call(null, t, 0);
                                } catch (e) {
                                    return n.call(this, t, 0);
                                }
                            }
                        }
                        !(function () {
                            try {
                                n = "function" == typeof setTimeout ? setTimeout : i;
                            } catch (t) {
                                n = i;
                            }
                            try {
                                r = "function" == typeof clearTimeout ? clearTimeout : a;
                            } catch (t) {
                                r = a;
                            }
                        })();
                        var c,
                            u = [],
                            l = !1,
                            f = -1;
                        function h() {
                            l && c && ((l = !1), c.length ? (u = c.concat(u)) : (f = -1), u.length && d());
                        }
                        function d() {
                            if (!l) {
                                var t = s(h);
                                l = !0;
                                for (var e = u.length; e; ) {
                                    for (c = u, u = []; ++f < e; ) c && c[f].run();
                                    (f = -1), (e = u.length);
                                }
                                (c = null),
                                    (l = !1),
                                    (function (t) {
                                        if (r === clearTimeout) return clearTimeout(t);
                                        if ((r === a || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(t);
                                        try {
                                            r(t);
                                        } catch (e) {
                                            try {
                                                return r.call(null, t);
                                            } catch (e) {
                                                return r.call(this, t);
                                            }
                                        }
                                    })(t);
                            }
                        }
                        function p(t, e) {
                            (this.fun = t), (this.array = e);
                        }
                        function m() {}
                        (o.nextTick = function (t) {
                            var e = new Array(arguments.length - 1);
                            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                            u.push(new p(t, e)), 1 !== u.length || l || s(d);
                        }),
                            (p.prototype.run = function () {
                                this.fun.apply(null, this.array);
                            }),
                            (o.title = "browser"),
                            (o.browser = !0),
                            (o.env = {}),
                            (o.argv = []),
                            (o.version = ""),
                            (o.versions = {}),
                            (o.on = m),
                            (o.addListener = m),
                            (o.once = m),
                            (o.off = m),
                            (o.removeListener = m),
                            (o.removeAllListeners = m),
                            (o.emit = m),
                            (o.prependListener = m),
                            (o.prependOnceListener = m),
                            (o.listeners = function (t) {
                                return [];
                            }),
                            (o.binding = function (t) {
                                throw new Error("process.binding is not supported");
                            }),
                            (o.cwd = function () {
                                return "/";
                            }),
                            (o.chdir = function (t) {
                                throw new Error("process.chdir is not supported");
                            }),
                            (o.umask = function () {
                                return 0;
                            });
                    },
                    function (t, e, n) {
                        function r(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                            }
                        }
                        var o = n(9);
                        t.exports = (function () {
                            function t() {
                                !(function (t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                                })(this, t);
                            }
                            var e, n;
                            return (
                                (e = t),
                                (n = [
                                    {
                                        key: "urlEncode",
                                        value: function (t) {
                                            return o(t);
                                        },
                                    },
                                    {
                                        key: "jsonEncode",
                                        value: function (t) {
                                            return JSON.stringify(t);
                                        },
                                    },
                                    {
                                        key: "formEncode",
                                        value: function (t) {
                                            if (this.isFormData(t)) return t;
                                            if (this.isFormElement(t)) return new FormData(t);
                                            if (this.isObject(t)) {
                                                var e = new FormData();
                                                return (
                                                    Object.keys(t).forEach(function (n) {
                                                        var r = t[n];
                                                        e.append(n, r);
                                                    }),
                                                    e
                                                );
                                            }
                                            throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
                                        },
                                    },
                                    {
                                        key: "isObject",
                                        value: function (t) {
                                            return "[object Object]" === Object.prototype.toString.call(t);
                                        },
                                    },
                                    {
                                        key: "isFormData",
                                        value: function (t) {
                                            return t instanceof FormData;
                                        },
                                    },
                                    {
                                        key: "isFormElement",
                                        value: function (t) {
                                            return t instanceof HTMLFormElement;
                                        },
                                    },
                                    {
                                        key: "selectFiles",
                                        value: function () {
                                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            return new Promise(function (e, n) {
                                                var r = document.createElement("INPUT");
                                                (r.type = "file"),
                                                    t.multiple && r.setAttribute("multiple", "multiple"),
                                                    t.accept && r.setAttribute("accept", t.accept),
                                                    (r.style.display = "none"),
                                                    document.body.appendChild(r),
                                                    r.addEventListener(
                                                        "change",
                                                        function (t) {
                                                            var n = t.target.files;
                                                            e(n), document.body.removeChild(r);
                                                        },
                                                        !1
                                                    ),
                                                    r.click();
                                            });
                                        },
                                    },
                                    {
                                        key: "parseHeaders",
                                        value: function (t) {
                                            var e = t.trim().split(/[\r\n]+/),
                                                n = {};
                                            return (
                                                e.forEach(function (t) {
                                                    var e = t.split(": "),
                                                        r = e.shift(),
                                                        o = e.join(": ");
                                                    r && (n[r] = o);
                                                }),
                                                n
                                            );
                                        },
                                    },
                                ]) && r(e, n),
                                t
                            );
                        })();
                    },
                    function (t, e) {
                        var n = function (t) {
                                return encodeURIComponent(t)
                                    .replace(/[!'()*]/g, escape)
                                    .replace(/%20/g, "+");
                            },
                            r = function (t, e, o, i) {
                                return (
                                    (e = e || null),
                                    (o = o || "&"),
                                    (i = i || null),
                                    t
                                        ? (function (t) {
                                              for (var e = new Array(), n = 0; n < t.length; n++) t[n] && e.push(t[n]);
                                              return e;
                                          })(
                                              Object.keys(t).map(function (a) {
                                                  var s,
                                                      c,
                                                      u = a;
                                                  if ((i && (u = i + "[" + u + "]"), "object" == typeof t[a] && null !== t[a])) s = r(t[a], null, o, u);
                                                  else {
                                                      e && ((c = u), (u = !isNaN(parseFloat(c)) && isFinite(c) ? e + Number(u) : u));
                                                      var l = t[a];
                                                      (l = (l = 0 === (l = !1 === (l = !0 === l ? "1" : l) ? "0" : l) ? "0" : l) || ""), (s = n(u) + "=" + n(l));
                                                  }
                                                  return s;
                                              })
                                          )
                                              .join(o)
                                              .replace(/[!'()*]/g, "")
                                        : ""
                                );
                            };
                        t.exports = r;
                    },
                ]));
        },
        function (t, e, n) {
            "use strict";
            n.r(e),
                n.d(e, "default", function () {
                    return y;
                });
            var r = n(3),
                o = n.n(r),
                i = n(0),
                a = n.n(i),
                s = n(4),
                c = n.n(s),
                u = n(5),
                l = n.n(u),
                f = n(1),
                h = n.n(f),
                d = (n(14), n(6)),
                p = n.n(d),
                m = n(7),
                v = n.n(m),
                y =
                    (n(18),
                    (function () {
                        function t(e) {
                            var n = e.data,
                                r = e.config,
                                o = e.api,
                                i = e.readOnly;
                            l()(this, t),
                                (this.api = o),
                                (this.readOnly = i),
                                (this.config = { endpoint: r.endpoint || "" }),
                                (this.nodes = { wrapper: null, container: null, progress: null, input: null, inputHolder: null, linkContent: null, linkImage: null, linkTitle: null, linkDescription: null, linkText: null }),
                                (this._data = { link: "", meta: {} }),
                                (this.data = n);
                        }
                        var e;
                        return (
                            h()(t, null, [
                                {
                                    key: "isReadOnlySupported",
                                    get: function () {
                                        return !0;
                                    },
                                },
                                {
                                    key: "toolbox",
                                    get: function () {
                                        return { icon: p.a, title: "Link" };
                                    },
                                },
                                {
                                    key: "enableLineBreaks",
                                    get: function () {
                                        return !0;
                                    },
                                },
                            ]),
                            h()(t, [
                                {
                                    key: "render",
                                    value: function () {
                                        return (
                                            (this.nodes.wrapper = this.make("div", this.CSS.baseClass)),
                                            (this.nodes.container = this.make("div", this.CSS.container)),
                                            (this.nodes.inputHolder = this.makeInputHolder()),
                                            (this.nodes.linkContent = this.prepareLinkPreview()),
                                            Object.keys(this.data.meta).length ? (this.nodes.container.appendChild(this.nodes.linkContent), this.showLinkPreview(this.data.meta)) : this.nodes.container.appendChild(this.nodes.inputHolder),
                                            this.nodes.wrapper.appendChild(this.nodes.container),
                                            this.nodes.wrapper
                                        );
                                    },
                                },
                                {
                                    key: "save",
                                    value: function () {
                                        return this.data;
                                    },
                                },
                                {
                                    key: "validate",
                                    value: function () {
                                        return "" !== this.data.link.trim();
                                    },
                                },
                                {
                                    key: "makeInputHolder",
                                    value: function () {
                                        var t = this,
                                            e = this.make("div", this.CSS.inputHolder);
                                        return (
                                            (this.nodes.progress = this.make("label", this.CSS.progress)),
                                            (this.nodes.input = this.make("div", [this.CSS.input, this.CSS.inputEl], { contentEditable: !this.readOnly })),
                                            (this.nodes.input.dataset.placeholder = this.api.i18n.t("Ссылка")),
                                            this.readOnly ||
                                                (this.nodes.input.addEventListener("paste", function (e) {
                                                    t.startFetching(e);
                                                }),
                                                this.nodes.input.addEventListener("keydown", function (e) {
                                                    var n = e.ctrlKey || e.metaKey;
                                                    switch (e.keyCode) {
                                                        case 13:
                                                            e.preventDefault(), e.stopPropagation(), t.startFetching(e);
                                                            break;
                                                        case 65:
                                                            n && t.selectLinkUrl(e);
                                                    }
                                                })),
                                            e.appendChild(this.nodes.progress),
                                            e.appendChild(this.nodes.input),
                                            e
                                        );
                                    },
                                },
                                {
                                    key: "startFetching",
                                    value: function (t) {
                                        var e = this.nodes.input.textContent;
                                        "paste" === t.type && (e = (t.clipboardData || window.clipboardData).getData("text")), this.removeErrorStyle(), this.fetchLinkData(e);
                                    },
                                },
                                {
                                    key: "removeErrorStyle",
                                    value: function () {
                                        this.nodes.inputHolder.classList.remove(this.CSS.inputError), this.nodes.inputHolder.insertBefore(this.nodes.progress, this.nodes.input);
                                    },
                                },
                                {
                                    key: "selectLinkUrl",
                                    value: function (t) {
                                        t.preventDefault(), t.stopPropagation();
                                        var e = window.getSelection(),
                                            n = new Range(),
                                            r = e.anchorNode.parentNode.closest(".".concat(this.CSS.inputHolder)).querySelector(".".concat(this.CSS.inputEl));
                                        n.selectNodeContents(r), e.removeAllRanges(), e.addRange(n);
                                    },
                                },
                                {
                                    key: "prepareLinkPreview",
                                    value: function () {
                                        var t = this.make("a", this.CSS.linkContent, { target: "_blank", rel: "nofollow noindex noreferrer" });
                                        return (
                                            (this.nodes.linkImage = this.make("div", this.CSS.linkImage)),
                                            (this.nodes.linkTitle = this.make("div", this.CSS.linkTitle)),
                                            (this.nodes.linkDescription = this.make("p", this.CSS.linkDescription)),
                                            (this.nodes.linkText = this.make("span", this.CSS.linkText)),
                                            t
                                        );
                                    },
                                },
                                {
                                    key: "showLinkPreview",
                                    value: function (t) {
                                        var e = t.image,
                                            n = t.title,
                                            r = t.description;
                                        this.nodes.container.appendChild(this.nodes.linkContent),
                                            e && e.url && ((this.nodes.linkImage.style.backgroundImage = "url(" + e.url + ")"), this.nodes.linkContent.appendChild(this.nodes.linkImage)),
                                            n && ((this.nodes.linkTitle.textContent = n), this.nodes.linkContent.appendChild(this.nodes.linkTitle)),
                                            r && ((this.nodes.linkDescription.textContent = r), this.nodes.linkContent.appendChild(this.nodes.linkDescription)),
                                            this.nodes.linkContent.classList.add(this.CSS.linkContentRendered),
                                            this.nodes.linkContent.setAttribute("href", this.data.link),
                                            this.nodes.linkContent.appendChild(this.nodes.linkText);
                                        try {
                                            this.nodes.linkText.textContent = new URL(this.data.link).hostname;
                                        } catch (t) {
                                            this.nodes.linkText.textContent = this.data.link;
                                        }
                                    },
                                },
                                {
                                    key: "showProgress",
                                    value: function () {
                                        this.nodes.progress.classList.add(this.CSS.progressLoading);
                                    },
                                },
                                {
                                    key: "hideProgress",
                                    value: function () {
                                        var t = this;
                                        return new Promise(function (e) {
                                            t.nodes.progress.classList.remove(t.CSS.progressLoading), t.nodes.progress.classList.add(t.CSS.progressLoaded), setTimeout(e, 500);
                                        });
                                    },
                                },
                                {
                                    key: "applyErrorStyle",
                                    value: function () {
                                        this.nodes.inputHolder.classList.add(this.CSS.inputError), this.nodes.progress.remove();
                                    },
                                },
                                {
                                    key: "fetchLinkData",
                                    value:
                                        ((e = c()(
                                            a.a.mark(function t(e) {
                                                var n, r;
                                                return a.a.wrap(
                                                    function (t) {
                                                        for (;;)
                                                            switch ((t.prev = t.next)) {
                                                                case 0:
                                                                    return this.showProgress(), (this.data = { link: e }), (t.prev = 2), (t.next = 5), v.a.get({ url: this.config.endpoint, data: { url: e } });
                                                                case 5:
                                                                    (n = t.sent), (r = n.body), this.onFetch(r), (t.next = 13);
                                                                    break;
                                                                case 10:
                                                                    (t.prev = 10), (t.t0 = t.catch(2)), this.fetchingFailed(this.api.i18n.t("Couldn't fetch the link data"));
                                                                case 13:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t,
                                                    this,
                                                    [[2, 10]]
                                                );
                                            })
                                        )),
                                        function (t) {
                                            return e.apply(this, arguments);
                                        }),
                                },
                                {
                                    key: "onFetch",
                                    value: function (t) {
                                        var e = this;
                                        if (t && t.success) {
                                            var n = t.meta;
                                            (this.data = { meta: n }),
                                                n
                                                    ? this.hideProgress().then(function () {
                                                          e.nodes.inputHolder.remove(), e.showLinkPreview(n);
                                                      })
                                                    : this.fetchingFailed(this.api.i18n.t("Wrong response format from the server"));
                                        } else this.fetchingFailed(this.api.i18n.t("Couldn't get this link data, try the other one"));
                                    },
                                },
                                {
                                    key: "fetchingFailed",
                                    value: function (t) {
                                        this.api.notifier.show({ message: t, style: "error" }), this.applyErrorStyle();
                                    },
                                },
                                {
                                    key: "make",
                                    value: function (t) {
                                        var e,
                                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                            i = document.createElement(t);
                                        Array.isArray(n) ? (e = i.classList).add.apply(e, o()(n)) : n && i.classList.add(n);
                                        for (var a in r) i[a] = r[a];
                                        return i;
                                    },
                                },
                                {
                                    key: "data",
                                    set: function (t) {
                                        this._data = Object.assign({}, { link: t.link || this._data.link, meta: t.meta || this._data.meta });
                                    },
                                    get: function () {
                                        return this._data;
                                    },
                                },
                                {
                                    key: "CSS",
                                    get: function () {
                                        return {
                                            baseClass: this.api.styles.block,
                                            input: this.api.styles.input,
                                            container: "link-tool",
                                            inputEl: "link-tool__input",
                                            inputHolder: "link-tool__input-holder",
                                            inputError: "link-tool__input-holder--error",
                                            linkContent: "link-tool__content",
                                            linkContentRendered: "link-tool__content--rendered",
                                            linkImage: "link-tool__image",
                                            linkTitle: "link-tool__title",
                                            linkDescription: "link-tool__description",
                                            linkText: "link-tool__anchor",
                                            progress: "link-tool__progress",
                                            progressLoading: "link-tool__progress--loading",
                                            progressLoaded: "link-tool__progress--loaded",
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })());
        },
        function (t, e, n) {
            var r = n(2);
            t.exports = function (t) {
                if (Array.isArray(t)) return r(t);
            };
        },
        function (t, e) {
            t.exports = function (t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
            };
        },
        function (t, e, n) {
            var r = n(2);
            t.exports = function (t, e) {
                if (t) {
                    if ("string" == typeof t) return r(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0;
                }
            };
        },
        function (t, e) {
            t.exports = function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            };
        },
        function (t, e, n) {
            var r = (function (t) {
                "use strict";
                var e = Object.prototype,
                    n = e.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    a = r.toStringTag || "@@toStringTag";
                function s(t, e, n, r) {
                    var o = e && e.prototype instanceof l ? e : l,
                        i = Object.create(o.prototype),
                        a = new _(r || []);
                    return (
                        (i._invoke = (function (t, e, n) {
                            var r = "suspendedStart";
                            return function (o, i) {
                                if ("executing" === r) throw new Error("Generator is already running");
                                if ("completed" === r) {
                                    if ("throw" === o) throw i;
                                    return x();
                                }
                                for (n.method = o, n.arg = i; ; ) {
                                    var a = n.delegate;
                                    if (a) {
                                        var s = b(a, n);
                                        if (s) {
                                            if (s === u) continue;
                                            return s;
                                        }
                                    }
                                    if ("next" === n.method) n.sent = n._sent = n.arg;
                                    else if ("throw" === n.method) {
                                        if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                                        n.dispatchException(n.arg);
                                    } else "return" === n.method && n.abrupt("return", n.arg);
                                    r = "executing";
                                    var l = c(t, e, n);
                                    if ("normal" === l.type) {
                                        if (((r = n.done ? "completed" : "suspendedYield"), l.arg === u)) continue;
                                        return { value: l.arg, done: n.done };
                                    }
                                    "throw" === l.type && ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
                                }
                            };
                        })(t, n, a)),
                        i
                    );
                }
                function c(t, e, n) {
                    try {
                        return { type: "normal", arg: t.call(e, n) };
                    } catch (t) {
                        return { type: "throw", arg: t };
                    }
                }
                t.wrap = s;
                var u = {};
                function l() {}
                function f() {}
                function h() {}
                var d = {};
                d[o] = function () {
                    return this;
                };
                var p = Object.getPrototypeOf,
                    m = p && p(p(E([])));
                m && m !== e && n.call(m, o) && (d = m);
                var v = (h.prototype = l.prototype = Object.create(d));
                function y(t) {
                    ["next", "throw", "return"].forEach(function (e) {
                        t[e] = function (t) {
                            return this._invoke(e, t);
                        };
                    });
                }
                function g(t, e) {
                    var r;
                    this._invoke = function (o, i) {
                        function a() {
                            return new e(function (r, a) {
                                !(function r(o, i, a, s) {
                                    var u = c(t[o], t, i);
                                    if ("throw" !== u.type) {
                                        var l = u.arg,
                                            f = l.value;
                                        return f && "object" == typeof f && n.call(f, "__await")
                                            ? e.resolve(f.__await).then(
                                                  function (t) {
                                                      r("next", t, a, s);
                                                  },
                                                  function (t) {
                                                      r("throw", t, a, s);
                                                  }
                                              )
                                            : e.resolve(f).then(
                                                  function (t) {
                                                      (l.value = t), a(l);
                                                  },
                                                  function (t) {
                                                      return r("throw", t, a, s);
                                                  }
                                              );
                                    }
                                    s(u.arg);
                                })(o, i, r, a);
                            });
                        }
                        return (r = r ? r.then(a, a) : a());
                    };
                }
                function b(t, e) {
                    var n = t.iterator[e.method];
                    if (void 0 === n) {
                        if (((e.delegate = null), "throw" === e.method)) {
                            if (t.iterator.return && ((e.method = "return"), (e.arg = void 0), b(t, e), "throw" === e.method)) return u;
                            (e.method = "throw"), (e.arg = new TypeError("The iterator does not provide a 'throw' method"));
                        }
                        return u;
                    }
                    var r = c(n, t.iterator, e.arg);
                    if ("throw" === r.type) return (e.method = "throw"), (e.arg = r.arg), (e.delegate = null), u;
                    var o = r.arg;
                    return o
                        ? o.done
                            ? ((e[t.resultName] = o.value), (e.next = t.nextLoc), "return" !== e.method && ((e.method = "next"), (e.arg = void 0)), (e.delegate = null), u)
                            : o
                        : ((e.method = "throw"), (e.arg = new TypeError("iterator result is not an object")), (e.delegate = null), u);
                }
                function w(t) {
                    var e = { tryLoc: t[0] };
                    1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
                }
                function k(t) {
                    var e = t.completion || {};
                    (e.type = "normal"), delete e.arg, (t.completion = e);
                }
                function _(t) {
                    (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(w, this), this.reset(!0);
                }
                function E(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var r = -1,
                                i = function e() {
                                    for (; ++r < t.length; ) if (n.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                                    return (e.value = void 0), (e.done = !0), e;
                                };
                            return (i.next = i);
                        }
                    }
                    return { next: x };
                }
                function x() {
                    return { value: void 0, done: !0 };
                }
                return (
                    (f.prototype = v.constructor = h),
                    (h.constructor = f),
                    (h[a] = f.displayName = "GeneratorFunction"),
                    (t.isGeneratorFunction = function (t) {
                        var e = "function" == typeof t && t.constructor;
                        return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name));
                    }),
                    (t.mark = function (t) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : ((t.__proto__ = h), a in t || (t[a] = "GeneratorFunction")), (t.prototype = Object.create(v)), t;
                    }),
                    (t.awrap = function (t) {
                        return { __await: t };
                    }),
                    y(g.prototype),
                    (g.prototype[i] = function () {
                        return this;
                    }),
                    (t.AsyncIterator = g),
                    (t.async = function (e, n, r, o, i) {
                        void 0 === i && (i = Promise);
                        var a = new g(s(e, n, r, o), i);
                        return t.isGeneratorFunction(n)
                            ? a
                            : a.next().then(function (t) {
                                  return t.done ? t.value : a.next();
                              });
                    }),
                    y(v),
                    (v[a] = "Generator"),
                    (v[o] = function () {
                        return this;
                    }),
                    (v.toString = function () {
                        return "[object Generator]";
                    }),
                    (t.keys = function (t) {
                        var e = [];
                        for (var n in t) e.push(n);
                        return (
                            e.reverse(),
                            function n() {
                                for (; e.length; ) {
                                    var r = e.pop();
                                    if (r in t) return (n.value = r), (n.done = !1), n;
                                }
                                return (n.done = !0), n;
                            }
                        );
                    }),
                    (t.values = E),
                    (_.prototype = {
                        constructor: _,
                        reset: function (t) {
                            if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = void 0), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = void 0), this.tryEntries.forEach(k), !t))
                                for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
                        },
                        stop: function () {
                            this.done = !0;
                            var t = this.tryEntries[0].completion;
                            if ("throw" === t.type) throw t.arg;
                            return this.rval;
                        },
                        dispatchException: function (t) {
                            if (this.done) throw t;
                            var e = this;
                            function r(n, r) {
                                return (a.type = "throw"), (a.arg = t), (e.next = n), r && ((e.method = "next"), (e.arg = void 0)), !!r;
                            }
                            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                                var i = this.tryEntries[o],
                                    a = i.completion;
                                if ("root" === i.tryLoc) return r("end");
                                if (i.tryLoc <= this.prev) {
                                    var s = n.call(i, "catchLoc"),
                                        c = n.call(i, "finallyLoc");
                                    if (s && c) {
                                        if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                        if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                                    } else if (s) {
                                        if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                    } else {
                                        if (!c) throw new Error("try statement without catch or finally");
                                        if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                                    }
                                }
                            }
                        },
                        abrupt: function (t, e) {
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var o = this.tryEntries[r];
                                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                    var i = o;
                                    break;
                                }
                            }
                            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                            var a = i ? i.completion : {};
                            return (a.type = t), (a.arg = e), i ? ((this.method = "next"), (this.next = i.finallyLoc), u) : this.complete(a);
                        },
                        complete: function (t, e) {
                            if ("throw" === t.type) throw t.arg;
                            return (
                                "break" === t.type || "continue" === t.type
                                    ? (this.next = t.arg)
                                    : "return" === t.type
                                    ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                                    : "normal" === t.type && e && (this.next = e),
                                u
                            );
                        },
                        finish: function (t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var n = this.tryEntries[e];
                                if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), k(n), u;
                            }
                        },
                        catch: function (t) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var n = this.tryEntries[e];
                                if (n.tryLoc === t) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var o = r.arg;
                                        k(n);
                                    }
                                    return o;
                                }
                            }
                            throw new Error("illegal catch attempt");
                        },
                        delegateYield: function (t, e, n) {
                            return (this.delegate = { iterator: E(t), resultName: e, nextLoc: n }), "next" === this.method && (this.arg = void 0), u;
                        },
                    }),
                    t
                );
            })(t.exports);
            try {
                regeneratorRuntime = r;
            } catch (t) {
                Function("r", "regeneratorRuntime = r")(r);
            }
        },
        function (t, e, n) {
            var r = n(15),
                o = n(16);
            "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[t.i, o, ""]]);
            var i = { insert: "head", singleton: !1 };
            r(o, i);
            t.exports = o.locals || {};
        },
        function (t, e, n) {
            "use strict";
            var r,
                o = function () {
                    return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r;
                },
                i = (function () {
                    var t = {};
                    return function (e) {
                        if (void 0 === t[e]) {
                            var n = document.querySelector(e);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                                try {
                                    n = n.contentDocument.head;
                                } catch (t) {
                                    n = null;
                                }
                            t[e] = n;
                        }
                        return t[e];
                    };
                })(),
                a = [];
            function s(t) {
                for (var e = -1, n = 0; n < a.length; n++)
                    if (a[n].identifier === t) {
                        e = n;
                        break;
                    }
                return e;
            }
            function c(t, e) {
                for (var n = {}, r = [], o = 0; o < t.length; o++) {
                    var i = t[o],
                        c = e.base ? i[0] + e.base : i[0],
                        u = n[c] || 0,
                        l = "".concat(c, " ").concat(u);
                    n[c] = u + 1;
                    var f = s(l),
                        h = { css: i[1], media: i[2], sourceMap: i[3] };
                    -1 !== f ? (a[f].references++, a[f].updater(h)) : a.push({ identifier: l, updater: v(h, e), references: 1 }), r.push(l);
                }
                return r;
            }
            function u(t) {
                var e = document.createElement("style"),
                    r = t.attributes || {};
                if (void 0 === r.nonce) {
                    var o = n.nc;
                    o && (r.nonce = o);
                }
                if (
                    (Object.keys(r).forEach(function (t) {
                        e.setAttribute(t, r[t]);
                    }),
                    "function" == typeof t.insert)
                )
                    t.insert(e);
                else {
                    var a = i(t.insert || "head");
                    if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    a.appendChild(e);
                }
                return e;
            }
            var l,
                f =
                    ((l = []),
                    function (t, e) {
                        return (l[t] = e), l.filter(Boolean).join("\n");
                    });
            function h(t, e, n, r) {
                var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                if (t.styleSheet) t.styleSheet.cssText = f(e, o);
                else {
                    var i = document.createTextNode(o),
                        a = t.childNodes;
                    a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
                }
            }
            function d(t, e, n) {
                var r = n.css,
                    o = n.media,
                    i = n.sourceMap;
                if (
                    (o ? t.setAttribute("media", o) : t.removeAttribute("media"), i && btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleSheet)
                )
                    t.styleSheet.cssText = r;
                else {
                    for (; t.firstChild; ) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(r));
                }
            }
            var p = null,
                m = 0;
            function v(t, e) {
                var n, r, o;
                if (e.singleton) {
                    var i = m++;
                    (n = p || (p = u(e))), (r = h.bind(null, n, i, !1)), (o = h.bind(null, n, i, !0));
                } else
                    (n = u(e)),
                        (r = d.bind(null, n, e)),
                        (o = function () {
                            !(function (t) {
                                if (null === t.parentNode) return !1;
                                t.parentNode.removeChild(t);
                            })(n);
                        });
                return (
                    r(t),
                    function (e) {
                        if (e) {
                            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                            r((t = e));
                        } else o();
                    }
                );
            }
            t.exports = function (t, e) {
                (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = o());
                var n = c((t = t || []), e);
                return function (t) {
                    if (((t = t || []), "[object Array]" === Object.prototype.toString.call(t))) {
                        for (var r = 0; r < n.length; r++) {
                            var o = s(n[r]);
                            a[o].references--;
                        }
                        for (var i = c(t, e), u = 0; u < n.length; u++) {
                            var l = s(n[u]);
                            0 === a[l].references && (a[l].updater(), a.splice(l, 1));
                        }
                        n = i;
                    }
                };
            };
        },
        function (t, e, n) {
            (e = n(17)(!1)).push([
                t.i,
                ".link-tool {\n  position: relative;\n}\n\n  .link-tool__input {\n    padding-left: 38px;\n    background-image: url(\"data:image/svg+xml,%3Csvg width='13' height='14' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.567 13.629c.728.464 1.581.65 2.41.558l-.873.873A3.722 3.722 0 1 1 4.84 9.794L6.694 7.94a3.722 3.722 0 0 1 5.256-.008L10.484 9.4a5.209 5.209 0 0 1-.017.016 1.625 1.625 0 0 0-2.29.009l-1.854 1.854a1.626 1.626 0 0 0 2.244 2.35zm2.766-7.358a3.722 3.722 0 0 0-2.41-.558l.873-.873a3.722 3.722 0 1 1 5.264 5.266l-1.854 1.854a3.722 3.722 0 0 1-5.256.008L9.416 10.5a5.2 5.2 0 0 1 .017-.016 1.625 1.625 0 0 0 2.29-.009l1.854-1.854a1.626 1.626 0 0 0-2.244-2.35z' fill='rgba(0, 0, 0, 0.6)' transform='translate(-3.667 -2.7)'/%3E%3C/svg%3E%0A\");\n    background-repeat: no-repeat;\n    background-position: 15px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n\n  .link-tool__input-holder {\n      position: relative;\n    }\n\n  .link-tool__input-holder--error .link-tool__input {\n          background-image: url(\"data:image/svg+xml,%3Csvg width='13' height='14' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.567 13.629c.728.464 1.581.65 2.41.558l-.873.873A3.722 3.722 0 1 1 4.84 9.794L6.694 7.94a3.722 3.722 0 0 1 5.256-.008L10.484 9.4a5.209 5.209 0 0 1-.017.016 1.625 1.625 0 0 0-2.29.009l-1.854 1.854a1.626 1.626 0 0 0 2.244 2.35zm2.766-7.358a3.722 3.722 0 0 0-2.41-.558l.873-.873a3.722 3.722 0 1 1 5.264 5.266l-1.854 1.854a3.722 3.722 0 0 1-5.256.008L9.416 10.5a5.2 5.2 0 0 1 .017-.016 1.625 1.625 0 0 0 2.29-.009l1.854-1.854a1.626 1.626 0 0 0-2.244-2.35z' fill='rgb(224, 147, 147)' transform='translate(-3.667 -2.7)'/%3E%3C/svg%3E%0A\");\n          background-color: #fff3f6;\n          border-color: #f3e0e0;\n          color: #a95a5a;\n          box-shadow: inset 0 1px 3px 0 rgba(146, 62, 62, .05);\n        }\n\n  .link-tool__input[contentEditable=true][data-placeholder]::before{\n      position: absolute;\n      content: attr(data-placeholder);\n      color: #707684;\n      font-weight: normal;\n      opacity: 0;\n    }\n\n  .link-tool__input[contentEditable=true][data-placeholder]:empty::before {\n        opacity: 1;\n      }\n\n  .link-tool__input[contentEditable=true][data-placeholder]:empty:focus::before {\n         opacity: 0;\n       }\n\n  .link-tool__progress {\n    position: absolute;\n    box-shadow: inset 0 1px 3px 0 rgba(102, 85, 107, 0.04);\n    height: 100%;\n    width: 0;\n    background-color: #f4f5f7;\n    z-index: -1;\n  }\n\n  .link-tool__progress--loading {\n      -webkit-animation: progress 500ms ease-in;\n      -webkit-animation-fill-mode: forwards;\n    }\n\n  .link-tool__progress--loaded {\n      width: 100%;\n    }\n\n  .link-tool__content {\n    display: block;\n    padding: 25px;\n    border-radius: 2px;\n    box-shadow: 0 0 0 2px #fff;\n    color: initial !important;\n    text-decoration: none !important;\n  }\n\n  .link-tool__content::after {\n      content: \"\";\n      clear: both;\n      display: table;\n    }\n\n  .link-tool__content--rendered {\n      background: #fff;\n      border: 1px solid rgba(201, 201, 204, 0.48);\n      box-shadow: 0 1px 3px rgba(0,0,0, .1);\n      border-radius: 6px;\n      will-change: filter;\n      animation: link-in 450ms 1 cubic-bezier(0.215, 0.61, 0.355, 1);\n    }\n\n  .link-tool__content--rendered:hover {\n        box-shadow: 0 0 3px rgba(0,0,0, .16);\n      }\n\n  .link-tool__image {\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin: 0 0 0 30px;\n    width: 65px;\n    height: 65px;\n    border-radius: 3px;\n    float: right;\n  }\n\n  .link-tool__title {\n    font-size: 17px;\n    font-weight: 600;\n    line-height: 1.5em;\n    margin: 0 0 10px 0;\n  }\n\n  .link-tool__title + .link-tool__anchor {\n      margin-top: 25px;\n    }\n\n  .link-tool__description {\n    margin: 0 0 20px 0;\n    font-size: 15px;\n    line-height: 1.55em;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n\n  .link-tool__anchor {\n    display: block;\n    font-size: 15px;\n    line-height: 1em;\n    color: #888 !important;\n    border: 0 !important;\n    padding: 0 !important;\n  }\n\n@keyframes link-in {\n  from {\n    filter: blur(5px);\n  }\n\n  to {\n    filter: none;\n  }\n}\n\n.codex-editor--narrow .link-tool__image {\n  display: none;\n}\n\n@-webkit-keyframes progress {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 85%;\n  }\n}\n",
                "",
            ]),
                (t.exports = e);
        },
        function (t, e, n) {
            "use strict";
            t.exports = function (t) {
                var e = [];
                return (
                    (e.toString = function () {
                        return this.map(function (e) {
                            var n = (function (t, e) {
                                var n = t[1] || "",
                                    r = t[3];
                                if (!r) return n;
                                if (e && "function" == typeof btoa) {
                                    var o = ((a = r), (s = btoa(unescape(encodeURIComponent(JSON.stringify(a))))), (c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s)), "/*# ".concat(c, " */")),
                                        i = r.sources.map(function (t) {
                                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */");
                                        });
                                    return [n].concat(i).concat([o]).join("\n");
                                }
                                var a, s, c;
                                return [n].join("\n");
                            })(e, t);
                            return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
                        }).join("");
                    }),
                    (e.i = function (t, n, r) {
                        "string" == typeof t && (t = [[null, t, ""]]);
                        var o = {};
                        if (r)
                            for (var i = 0; i < this.length; i++) {
                                var a = this[i][0];
                                null != a && (o[a] = !0);
                            }
                        for (var s = 0; s < t.length; s++) {
                            var c = [].concat(t[s]);
                            (r && o[c[0]]) || (n && (c[2] ? (c[2] = "".concat(n, " and ").concat(c[2])) : (c[2] = n)), e.push(c));
                        }
                    }),
                    e
                );
            };
        },
        function (t, e, n) {
            (function (t) {
                !(function (t) {
                    var e = (function () {
                            try {
                                return !!Symbol.iterator;
                            } catch (t) {
                                return !1;
                            }
                        })(),
                        n = function (t) {
                            var n = {
                                next: function () {
                                    var e = t.shift();
                                    return { done: void 0 === e, value: e };
                                },
                            };
                            return (
                                e &&
                                    (n[Symbol.iterator] = function () {
                                        return n;
                                    }),
                                n
                            );
                        },
                        r = function (t) {
                            return encodeURIComponent(t).replace(/%20/g, "+");
                        },
                        o = function (t) {
                            return decodeURIComponent(String(t).replace(/\+/g, " "));
                        };
                    (function () {
                        try {
                            var e = t.URLSearchParams;
                            return "a=1" === new e("?a=1").toString() && "function" == typeof e.prototype.set;
                        } catch (t) {
                            return !1;
                        }
                    })() ||
                        (function () {
                            var o = function (t) {
                                    Object.defineProperty(this, "_entries", { writable: !0, value: {} });
                                    var e = typeof t;
                                    if ("undefined" === e);
                                    else if ("string" === e) "" !== t && this._fromString(t);
                                    else if (t instanceof o) {
                                        var n = this;
                                        t.forEach(function (t, e) {
                                            n.append(e, t);
                                        });
                                    } else {
                                        if (null === t || "object" !== e) throw new TypeError("Unsupported input's type for URLSearchParams");
                                        if ("[object Array]" === Object.prototype.toString.call(t))
                                            for (var r = 0; r < t.length; r++) {
                                                var i = t[r];
                                                if ("[object Array]" !== Object.prototype.toString.call(i) && 2 === i.length) throw new TypeError("Expected [string, any] as entry at index " + r + " of URLSearchParams's input");
                                                this.append(i[0], i[1]);
                                            }
                                        else for (var a in t) t.hasOwnProperty(a) && this.append(a, t[a]);
                                    }
                                },
                                i = o.prototype;
                            (i.append = function (t, e) {
                                t in this._entries ? this._entries[t].push(String(e)) : (this._entries[t] = [String(e)]);
                            }),
                                (i.delete = function (t) {
                                    delete this._entries[t];
                                }),
                                (i.get = function (t) {
                                    return t in this._entries ? this._entries[t][0] : null;
                                }),
                                (i.getAll = function (t) {
                                    return t in this._entries ? this._entries[t].slice(0) : [];
                                }),
                                (i.has = function (t) {
                                    return t in this._entries;
                                }),
                                (i.set = function (t, e) {
                                    this._entries[t] = [String(e)];
                                }),
                                (i.forEach = function (t, e) {
                                    var n;
                                    for (var r in this._entries)
                                        if (this._entries.hasOwnProperty(r)) {
                                            n = this._entries[r];
                                            for (var o = 0; o < n.length; o++) t.call(e, n[o], r, this);
                                        }
                                }),
                                (i.keys = function () {
                                    var t = [];
                                    return (
                                        this.forEach(function (e, n) {
                                            t.push(n);
                                        }),
                                        n(t)
                                    );
                                }),
                                (i.values = function () {
                                    var t = [];
                                    return (
                                        this.forEach(function (e) {
                                            t.push(e);
                                        }),
                                        n(t)
                                    );
                                }),
                                (i.entries = function () {
                                    var t = [];
                                    return (
                                        this.forEach(function (e, n) {
                                            t.push([n, e]);
                                        }),
                                        n(t)
                                    );
                                }),
                                e && (i[Symbol.iterator] = i.entries),
                                (i.toString = function () {
                                    var t = [];
                                    return (
                                        this.forEach(function (e, n) {
                                            t.push(r(n) + "=" + r(e));
                                        }),
                                        t.join("&")
                                    );
                                }),
                                (t.URLSearchParams = o);
                        })();
                    var i = t.URLSearchParams.prototype;
                    "function" != typeof i.sort &&
                        (i.sort = function () {
                            var t = this,
                                e = [];
                            this.forEach(function (n, r) {
                                e.push([r, n]), t._entries || t.delete(r);
                            }),
                                e.sort(function (t, e) {
                                    return t[0] < e[0] ? -1 : t[0] > e[0] ? 1 : 0;
                                }),
                                t._entries && (t._entries = {});
                            for (var n = 0; n < e.length; n++) this.append(e[n][0], e[n][1]);
                        }),
                        "function" != typeof i._fromString &&
                            Object.defineProperty(i, "_fromString", {
                                enumerable: !1,
                                configurable: !1,
                                writable: !1,
                                value: function (t) {
                                    if (this._entries) this._entries = {};
                                    else {
                                        var e = [];
                                        this.forEach(function (t, n) {
                                            e.push(n);
                                        });
                                        for (var n = 0; n < e.length; n++) this.delete(e[n]);
                                    }
                                    var r,
                                        i = (t = t.replace(/^\?/, "")).split("&");
                                    for (n = 0; n < i.length; n++) (r = i[n].split("=")), this.append(o(r[0]), r.length > 1 ? o(r[1]) : "");
                                },
                            });
                })(void 0 !== t ? t : "undefined" != typeof window ? window : "undefined" != typeof self ? self : this),
                    (function (t) {
                        if (
                            ((function () {
                                try {
                                    var e = new t.URL("b", "http://a");
                                    return (e.pathname = "c d"), "http://a/c%20d" === e.href && e.searchParams;
                                } catch (t) {
                                    return !1;
                                }
                            })() ||
                                (function () {
                                    var e = t.URL,
                                        n = function (e, n) {
                                            "string" != typeof e && (e = String(e));
                                            var r,
                                                o = document;
                                            if (n && (void 0 === t.location || n !== t.location.href)) {
                                                ((r = (o = document.implementation.createHTMLDocument("")).createElement("base")).href = n), o.head.appendChild(r);
                                                try {
                                                    if (0 !== r.href.indexOf(n)) throw new Error(r.href);
                                                } catch (t) {
                                                    throw new Error("URL unable to set base " + n + " due to " + t);
                                                }
                                            }
                                            var i = o.createElement("a");
                                            (i.href = e), r && (o.body.appendChild(i), (i.href = i.href));
                                            var a = o.createElement("input");
                                            if (((a.type = "url"), (a.value = e), ":" === i.protocol || !/:/.test(i.href) || (!a.checkValidity() && !n))) throw new TypeError("Invalid URL");
                                            Object.defineProperty(this, "_anchorElement", { value: i });
                                            var s = new t.URLSearchParams(this.search),
                                                c = !0,
                                                u = !0,
                                                l = this;
                                            ["append", "delete", "set"].forEach(function (t) {
                                                var e = s[t];
                                                s[t] = function () {
                                                    e.apply(s, arguments), c && ((u = !1), (l.search = s.toString()), (u = !0));
                                                };
                                            }),
                                                Object.defineProperty(this, "searchParams", { value: s, enumerable: !0 });
                                            var f = void 0;
                                            Object.defineProperty(this, "_updateSearchParams", {
                                                enumerable: !1,
                                                configurable: !1,
                                                writable: !1,
                                                value: function () {
                                                    this.search !== f && ((f = this.search), u && ((c = !1), this.searchParams._fromString(this.search), (c = !0)));
                                                },
                                            });
                                        },
                                        r = n.prototype;
                                    ["hash", "host", "hostname", "port", "protocol"].forEach(function (t) {
                                        !(function (t) {
                                            Object.defineProperty(r, t, {
                                                get: function () {
                                                    return this._anchorElement[t];
                                                },
                                                set: function (e) {
                                                    this._anchorElement[t] = e;
                                                },
                                                enumerable: !0,
                                            });
                                        })(t);
                                    }),
                                        Object.defineProperty(r, "search", {
                                            get: function () {
                                                return this._anchorElement.search;
                                            },
                                            set: function (t) {
                                                (this._anchorElement.search = t), this._updateSearchParams();
                                            },
                                            enumerable: !0,
                                        }),
                                        Object.defineProperties(r, {
                                            toString: {
                                                get: function () {
                                                    var t = this;
                                                    return function () {
                                                        return t.href;
                                                    };
                                                },
                                            },
                                            href: {
                                                get: function () {
                                                    return this._anchorElement.href.replace(/\?$/, "");
                                                },
                                                set: function (t) {
                                                    (this._anchorElement.href = t), this._updateSearchParams();
                                                },
                                                enumerable: !0,
                                            },
                                            pathname: {
                                                get: function () {
                                                    return this._anchorElement.pathname.replace(/(^\/?)/, "/");
                                                },
                                                set: function (t) {
                                                    this._anchorElement.pathname = t;
                                                },
                                                enumerable: !0,
                                            },
                                            origin: {
                                                get: function () {
                                                    var t = { "http:": 80, "https:": 443, "ftp:": 21 }[this._anchorElement.protocol],
                                                        e = this._anchorElement.port != t && "" !== this._anchorElement.port;
                                                    return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (e ? ":" + this._anchorElement.port : "");
                                                },
                                                enumerable: !0,
                                            },
                                            password: {
                                                get: function () {
                                                    return "";
                                                },
                                                set: function (t) {},
                                                enumerable: !0,
                                            },
                                            username: {
                                                get: function () {
                                                    return "";
                                                },
                                                set: function (t) {},
                                                enumerable: !0,
                                            },
                                        }),
                                        (n.createObjectURL = function (t) {
                                            return e.createObjectURL.apply(e, arguments);
                                        }),
                                        (n.revokeObjectURL = function (t) {
                                            return e.revokeObjectURL.apply(e, arguments);
                                        }),
                                        (t.URL = n);
                                })(),
                            void 0 !== t.location && !("origin" in t.location))
                        ) {
                            var e = function () {
                                return t.location.protocol + "//" + t.location.hostname + (t.location.port ? ":" + t.location.port : "");
                            };
                            try {
                                Object.defineProperty(t.location, "origin", { get: e, enumerable: !0 });
                            } catch (n) {
                                setInterval(function () {
                                    t.location.origin = e();
                                }, 100);
                            }
                        }
                    })(void 0 !== t ? t : "undefined" != typeof window ? window : "undefined" != typeof self ? self : this);
            }.call(this, n(19)));
        },
        function (t, e) {
            var n;
            n = (function () {
                return this;
            })();
            try {
                n = n || new Function("return this")();
            } catch (t) {
                "object" == typeof window && (n = window);
            }
            t.exports = n;
        },
    ]).default;
});
