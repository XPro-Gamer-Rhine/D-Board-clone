(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [2],
  {
    Lnxd: function (t, r, n) {
      "use strict";
      n.d(r, "a", function () {
        return l;
      }),
        n.d(r, "b", function () {
          return a;
        });
      var e = n("q1tI"),
        o = n.n(e),
        i = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        a = o.a.createContext && o.a.createContext(i),
        c = function () {
          return (c =
            Object.assign ||
            function (t) {
              for (var r, n = 1, e = arguments.length; n < e; n++)
                for (var o in (r = arguments[n]))
                  Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
              return t;
            }).apply(this, arguments);
        },
        u = function (t, r) {
          var n = {};
          for (var e in t)
            Object.prototype.hasOwnProperty.call(t, e) &&
              r.indexOf(e) < 0 &&
              (n[e] = t[e]);
          if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (e = Object.getOwnPropertySymbols(t); o < e.length; o++)
              r.indexOf(e[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, e[o]) &&
                (n[e[o]] = t[e[o]]);
          }
          return n;
        };
      function l(t) {
        return function (r) {
          return o.a.createElement(
            s,
            c({ attr: c({}, t.attr) }, r),
            (function t(r) {
              return (
                r &&
                r.map(function (r, n) {
                  return o.a.createElement(
                    r.tag,
                    c({ key: n }, r.attr),
                    t(r.child)
                  );
                })
              );
            })(t.child)
          );
        };
      }
      function s(t) {
        var r = function (r) {
          var n,
            e = t.attr,
            i = t.size,
            a = t.title,
            l = u(t, ["attr", "size", "title"]),
            s = i || r.size || "1em";
          return (
            r.className && (n = r.className),
            t.className && (n = (n ? n + " " : "") + t.className),
            o.a.createElement(
              "svg",
              c(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                r.attr,
                e,
                l,
                {
                  className: n,
                  style: c(c({ color: t.color || r.color }, r.style), t.style),
                  height: s,
                  width: s,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              a && o.a.createElement("title", null, a),
              t.children
            )
          );
        };
        return void 0 !== a
          ? o.a.createElement(a.Consumer, null, function (t) {
              return r(t);
            })
          : r(i);
      }
    },
    Qetd: function (t, r, n) {
      "use strict";
      var e = Object.assign.bind(Object);
      (t.exports = e), (t.exports.default = t.exports);
    },
    Tgqd: function (t, r, n) {
      "use strict";
      n.d(r, "a", function () {
        return o;
      }),
        n.d(r, "b", function () {
          return i;
        }),
        n.d(r, "c", function () {
          return a;
        }),
        n.d(r, "d", function () {
          return c;
        }),
        n.d(r, "e", function () {
          return u;
        }),
        n.d(r, "f", function () {
          return l;
        }),
        n.d(r, "g", function () {
          return s;
        }),
        n.d(r, "h", function () {
          return d;
        }),
        n.d(r, "i", function () {
          return g;
        }),
        n.d(r, "j", function () {
          return k;
        }),
        n.d(r, "k", function () {
          return h;
        }),
        n.d(r, "l", function () {
          return f;
        }),
        n.d(r, "m", function () {
          return p;
        }),
        n.d(r, "n", function () {
          return v;
        }),
        n.d(r, "o", function () {
          return x;
        }),
        n.d(r, "p", function () {
          return y;
        }),
        n.d(r, "q", function () {
          return j;
        }),
        n.d(r, "r", function () {
          return L;
        }),
        n.d(r, "s", function () {
          return b;
        }),
        n.d(r, "t", function () {
          return w;
        }),
        n.d(r, "u", function () {
          return O;
        }),
        n.d(r, "v", function () {
          return C;
        }),
        n.d(r, "w", function () {
          return W;
        }),
        n.d(r, "x", function () {
          return B;
        }),
        n.d(r, "y", function () {
          return M;
        }),
        n.d(r, "z", function () {
          return z;
        }),
        n.d(r, "A", function () {
          return H;
        }),
        n.d(r, "B", function () {
          return m;
        }),
        n.d(r, "C", function () {
          return V;
        }),
        n.d(r, "D", function () {
          return A;
        }),
        n.d(r, "E", function () {
          return E;
        }),
        n.d(r, "F", function () {
          return N;
        }),
        n.d(r, "G", function () {
          return S;
        }),
        n.d(r, "H", function () {
          return P;
        }),
        n.d(r, "I", function () {
          return _;
        }),
        n.d(r, "J", function () {
          return q;
        }),
        n.d(r, "K", function () {
          return I;
        }),
        n.d(r, "L", function () {
          return J;
        }),
        n.d(r, "M", function () {
          return Q;
        }),
        n.d(r, "N", function () {
          return T;
        }),
        n.d(r, "O", function () {
          return D;
        }),
        n.d(r, "P", function () {
          return F;
        }),
        n.d(r, "Q", function () {
          return G;
        }),
        n.d(r, "R", function () {
          return K;
        }),
        n.d(r, "S", function () {
          return R;
        }),
        n.d(r, "T", function () {
          return U;
        }),
        n.d(r, "U", function () {
          return X;
        }),
        n.d(r, "V", function () {
          return Y;
        }),
        n.d(r, "W", function () {
          return Z;
        }),
        n.d(r, "X", function () {
          return $;
        }),
        n.d(r, "Y", function () {
          return tt;
        }),
        n.d(r, "Z", function () {
          return rt;
        }),
        n.d(r, "ab", function () {
          return nt;
        }),
        n.d(r, "bb", function () {
          return et;
        }),
        n.d(r, "cb", function () {
          return ot;
        }),
        n.d(r, "db", function () {
          return it;
        }),
        n.d(r, "eb", function () {
          return at;
        }),
        n.d(r, "fb", function () {
          return ct;
        }),
        n.d(r, "gb", function () {
          return ut;
        }),
        n.d(r, "hb", function () {
          return lt;
        }),
        n.d(r, "ib", function () {
          return st;
        });
      var e = n("Lnxd");
      function o(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "polyline",
              attr: { points: "22 12 18 12 15 21 9 3 6 12 2 12" },
            },
          ],
        })(t);
      }
      function i(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "circle", attr: { cx: "12", cy: "12", r: "10" } },
            { tag: "line", attr: { x1: "12", y1: "8", x2: "12", y2: "12" } },
            {
              tag: "line",
              attr: { x1: "12", y1: "16", x2: "12.01", y2: "16" },
            },
          ],
        })(t);
      }
      function a(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "line", attr: { x1: "19", y1: "12", x2: "5", y2: "12" } },
            { tag: "polyline", attr: { points: "12 19 5 12 12 5" } },
          ],
        })(t);
      }
      function c(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "line", attr: { x1: "5", y1: "12", x2: "19", y2: "12" } },
            { tag: "polyline", attr: { points: "12 5 19 12 12 19" } },
          ],
        })(t);
      }
      function u(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "line", attr: { x1: "18", y1: "20", x2: "18", y2: "10" } },
            { tag: "line", attr: { x1: "12", y1: "20", x2: "12", y2: "4" } },
            { tag: "line", attr: { x1: "6", y1: "20", x2: "6", y2: "14" } },
          ],
        })(t);
      }
      function l(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: { d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" },
            },
            { tag: "path", attr: { d: "M13.73 21a2 2 0 0 1-3.46 0" } },
          ],
        })(t);
      }
      function s(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
              },
            },
            {
              tag: "polyline",
              attr: { points: "3.27 6.96 12 12.01 20.73 6.96" },
            },
            {
              tag: "line",
              attr: { x1: "12", y1: "22.08", x2: "12", y2: "12" },
            },
          ],
        })(t);
      }
      function d(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "rect",
              attr: {
                x: "2",
                y: "7",
                width: "20",
                height: "14",
                rx: "2",
                ry: "2",
              },
            },
            {
              tag: "path",
              attr: { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" },
            },
          ],
        })(t);
      }
      function g(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "rect",
              attr: {
                x: "3",
                y: "4",
                width: "18",
                height: "18",
                rx: "2",
                ry: "2",
              },
            },
            { tag: "line", attr: { x1: "16", y1: "2", x2: "16", y2: "6" } },
            { tag: "line", attr: { x1: "8", y1: "2", x2: "8", y2: "6" } },
            { tag: "line", attr: { x1: "3", y1: "10", x2: "21", y2: "10" } },
          ],
        })(t);
      }
      function k(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z",
              },
            },
            { tag: "circle", attr: { cx: "12", cy: "13", r: "4" } },
          ],
        })(t);
      }
      function h(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [{ tag: "polyline", attr: { points: "20 6 9 17 4 12" } }],
        })(t);
      }
      function f(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [{ tag: "polyline", attr: { points: "6 9 12 15 18 9" } }],
        })(t);
      }
      function p(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [{ tag: "polyline", attr: { points: "15 18 9 12 15 6" } }],
        })(t);
      }
      function v(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [{ tag: "polyline", attr: { points: "9 18 15 12 9 6" } }],
        })(t);
      }
      function x(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [{ tag: "polyline", attr: { points: "18 15 12 9 6 15" } }],
        })(t);
      }
      function y(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "polyline", attr: { points: "11 17 6 12 11 7" } },
            { tag: "polyline", attr: { points: "18 17 13 12 18 7" } },
          ],
        })(t);
      }
      function j(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "polyline", attr: { points: "13 17 18 12 13 7" } },
            { tag: "polyline", attr: { points: "6 17 11 12 6 7" } },
          ],
        })(t);
      }
      function L(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [{ tag: "circle", attr: { cx: "12", cy: "12", r: "10" } }],
        })(t);
      }
      function b(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "circle", attr: { cx: "12", cy: "12", r: "10" } },
            { tag: "polyline", attr: { points: "12 6 12 12 16 14" } },
          ],
        })(t);
      }
      function w(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "circle", attr: { cx: "12", cy: "12", r: "10" } },
            {
              tag: "polygon",
              attr: {
                points:
                  "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",
              },
            },
          ],
        })(t);
      }
      function O(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "rect",
              attr: {
                x: "9",
                y: "9",
                width: "13",
                height: "13",
                rx: "2",
                ry: "2",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",
              },
            },
          ],
        })(t);
      }
      function C(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: { d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" },
            },
          ],
        })(t);
      }
      function W(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
              },
            },
            { tag: "polyline", attr: { points: "15 3 21 3 21 9" } },
            { tag: "line", attr: { x1: "10", y1: "14", x2: "21", y2: "3" } },
          ],
        })(t);
      }
      function B(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
              },
            },
          ],
        })(t);
      }
      function M(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z",
              },
            },
            { tag: "polyline", attr: { points: "13 2 13 9 20 9" } },
          ],
        })(t);
      }
      function z(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
              },
            },
          ],
        })(t);
      }
      function H(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "rect", attr: { x: "3", y: "3", width: "7", height: "7" } },
            { tag: "rect", attr: { x: "14", y: "3", width: "7", height: "7" } },
            {
              tag: "rect",
              attr: { x: "14", y: "14", width: "7", height: "7" },
            },
            { tag: "rect", attr: { x: "3", y: "14", width: "7", height: "7" } },
          ],
        })(t);
      }
      function m(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
              },
            },
          ],
        })(t);
      }
      function V(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "circle", attr: { cx: "12", cy: "12", r: "10" } },
            {
              tag: "path",
              attr: { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" },
            },
            {
              tag: "line",
              attr: { x1: "12", y1: "17", x2: "12.01", y2: "17" },
            },
          ],
        })(t);
      }
      function A(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
            },
            { tag: "polyline", attr: { points: "9 22 9 12 15 12 15 22" } },
          ],
        })(t);
      }
      function E(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "polyline",
              attr: { points: "22 12 16 12 14 15 10 15 8 12 2 12" },
            },
            {
              tag: "path",
              attr: {
                d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
              },
            },
          ],
        })(t);
      }
      function N(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "rect",
              attr: {
                x: "2",
                y: "2",
                width: "20",
                height: "20",
                rx: "5",
                ry: "5",
              },
            },
            {
              tag: "path",
              attr: { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" },
            },
            {
              tag: "line",
              attr: { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" },
            },
          ],
        })(t);
      }
      function S(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "polygon", attr: { points: "12 2 2 7 12 12 22 7 12 2" } },
            { tag: "polyline", attr: { points: "2 17 12 22 22 17" } },
            { tag: "polyline", attr: { points: "2 12 12 17 22 12" } },
          ],
        })(t);
      }
      function P(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
              },
            },
            { tag: "rect", attr: { x: "2", y: "9", width: "4", height: "12" } },
            { tag: "circle", attr: { cx: "4", cy: "4", r: "2" } },
          ],
        })(t);
      }
      function _(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "line", attr: { x1: "8", y1: "6", x2: "21", y2: "6" } },
            { tag: "line", attr: { x1: "8", y1: "12", x2: "21", y2: "12" } },
            { tag: "line", attr: { x1: "8", y1: "18", x2: "21", y2: "18" } },
            { tag: "line", attr: { x1: "3", y1: "6", x2: "3.01", y2: "6" } },
            { tag: "line", attr: { x1: "3", y1: "12", x2: "3.01", y2: "12" } },
            { tag: "line", attr: { x1: "3", y1: "18", x2: "3.01", y2: "18" } },
          ],
        })(t);
      }
      function q(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" },
            },
            { tag: "polyline", attr: { points: "10 17 15 12 10 7" } },
            { tag: "line", attr: { x1: "15", y1: "12", x2: "3", y2: "12" } },
          ],
        })(t);
      }
      function I(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
              },
            },
            { tag: "polyline", attr: { points: "22,6 12,13 2,6" } },
          ],
        })(t);
      }
      function J(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" },
            },
            { tag: "circle", attr: { cx: "12", cy: "10", r: "3" } },
          ],
        })(t);
      }
      function Q(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "line", attr: { x1: "3", y1: "12", x2: "21", y2: "12" } },
            { tag: "line", attr: { x1: "3", y1: "6", x2: "21", y2: "6" } },
            { tag: "line", attr: { x1: "3", y1: "18", x2: "21", y2: "18" } },
          ],
        })(t);
      }
      function T(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
              },
            },
          ],
        })(t);
      }
      function D(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
              },
            },
          ],
        })(t);
      }
      function F(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z",
              },
            },
            { tag: "path", attr: { d: "M19 10v2a7 7 0 0 1-14 0v-2" } },
            { tag: "line", attr: { x1: "12", y1: "19", x2: "12", y2: "23" } },
            { tag: "line", attr: { x1: "8", y1: "23", x2: "16", y2: "23" } },
          ],
        })(t);
      }
      function G(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "circle", attr: { cx: "12", cy: "12", r: "1" } },
            { tag: "circle", attr: { cx: "12", cy: "5", r: "1" } },
            { tag: "circle", attr: { cx: "12", cy: "19", r: "1" } },
          ],
        })(t);
      }
      function K(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48",
              },
            },
          ],
        })(t);
      }
      function R(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "path", attr: { d: "M21.21 15.89A10 10 0 1 1 8 2.83" } },
            { tag: "path", attr: { d: "M22 12A10 10 0 0 0 12 2v10z" } },
          ],
        })(t);
      }
      function U(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "line", attr: { x1: "12", y1: "5", x2: "12", y2: "19" } },
            { tag: "line", attr: { x1: "5", y1: "12", x2: "19", y2: "12" } },
          ],
        })(t);
      }
      function X(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "circle", attr: { cx: "11", cy: "11", r: "8" } },
            {
              tag: "line",
              attr: { x1: "21", y1: "21", x2: "16.65", y2: "16.65" },
            },
          ],
        })(t);
      }
      function Y(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "line", attr: { x1: "22", y1: "2", x2: "11", y2: "13" } },
            { tag: "polygon", attr: { points: "22 2 15 22 11 13 2 9 22 2" } },
          ],
        })(t);
      }
      function Z(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "circle", attr: { cx: "12", cy: "12", r: "3" } },
            {
              tag: "path",
              attr: {
                d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z",
              },
            },
          ],
        })(t);
      }
      function $(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "circle", attr: { cx: "18", cy: "5", r: "3" } },
            { tag: "circle", attr: { cx: "6", cy: "12", r: "3" } },
            { tag: "circle", attr: { cx: "18", cy: "19", r: "3" } },
            {
              tag: "line",
              attr: { x1: "8.59", y1: "13.51", x2: "15.42", y2: "17.49" },
            },
            {
              tag: "line",
              attr: { x1: "15.41", y1: "6.51", x2: "8.59", y2: "10.49" },
            },
          ],
        })(t);
      }
      function tt(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "circle", attr: { cx: "9", cy: "21", r: "1" } },
            { tag: "circle", attr: { cx: "20", cy: "21", r: "1" } },
            {
              tag: "path",
              attr: {
                d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6",
              },
            },
          ],
        })(t);
      }
      function rt(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z",
              },
            },
          ],
        })(t);
      }
      function nt(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "polygon",
              attr: {
                points:
                  "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
              },
            },
          ],
        })(t);
      }
      function et(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z",
              },
            },
            { tag: "line", attr: { x1: "7", y1: "7", x2: "7.01", y2: "7" } },
          ],
        })(t);
      }
      function ot(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3",
              },
            },
          ],
        })(t);
      }
      function it(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "rect",
              attr: {
                x: "1",
                y: "5",
                width: "22",
                height: "14",
                rx: "7",
                ry: "7",
              },
            },
            { tag: "circle", attr: { cx: "8", cy: "12", r: "3" } },
          ],
        })(t);
      }
      function at(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "polyline", attr: { points: "3 6 5 6 21 6" } },
            {
              tag: "path",
              attr: {
                d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
              },
            },
            { tag: "line", attr: { x1: "10", y1: "11", x2: "10", y2: "17" } },
            { tag: "line", attr: { x1: "14", y1: "11", x2: "14", y2: "17" } },
          ],
        })(t);
      }
      function ct(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
              },
            },
          ],
        })(t);
      }
      function ut(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" },
            },
            { tag: "circle", attr: { cx: "12", cy: "7", r: "4" } },
          ],
        })(t);
      }
      function lt(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" },
            },
            { tag: "circle", attr: { cx: "9", cy: "7", r: "4" } },
            { tag: "path", attr: { d: "M23 21v-2a4 4 0 0 0-3-3.87" } },
            { tag: "path", attr: { d: "M16 3.13a4 4 0 0 1 0 7.75" } },
          ],
        })(t);
      }
      function st(t) {
        return Object(e.a)({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "line", attr: { x1: "18", y1: "6", x2: "6", y2: "18" } },
            { tag: "line", attr: { x1: "6", y1: "6", x2: "18", y2: "18" } },
          ],
        })(t);
      }
    },
  },
]);
