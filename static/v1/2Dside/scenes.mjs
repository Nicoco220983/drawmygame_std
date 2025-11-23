function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _Manager2, _Manager3, _BorderManager2, _BorderManager3, _BlockBorderManager2, _BorderManager5, _DamageBorderManager2, _BorderManager7, _LoopBorderManager2, _Manager5, _HerosLivesManager2, _Manager7, _ViewManager2, _ViewManager3, _ViewHerosCenterManager, _ViewManager5, _ViewFirstHeroManager2, _Manager9, _PhysicsManager2, _Manager1, _AttackManager2, _Background2, _Background3, _GreenLandscapeBackground, _Background5, _RockMountainsBackground, _Background7, _SnowMountainsBackground, _Background9, _DarkForestBackground2, _Background1, _DarkCityBackground2, _StandardScene2, _TagScene2, _Tag2, _StealTreasures2, _StarsBar2, _WaitingScene2;
var _initClass, _classDecs, _initClass2, _classDecs2, _initClass3, _classDecs3, _initClass4, _classDecs4, _initClass5, _classDecs5, _initClass6, _classDecs6, _initClass7, _classDecs7, _initClass8, _classDecs8, _initClass9, _classDecs9, _initClass0, _classDecs0, _initClass1, _classDecs1, _initClass10, _classDecs10, _initClass11, _classDecs11, _initClass12, _classDecs12, _initClass13, _classDecs13, _initClass14, _classDecs14, _initClass15, _classDecs15, _initClass16, _classDecs16, _initClass17, _classDecs17, _initClass18, _classDecs18, _initClass19, _classDecs19, _initClass20, _classDecs20, _initClass21, _classDecs21;
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _applyDecs(e, t, r, n, o, a) { function i(e, t, r) { return function (n, o) { return r && r(n), e[t].call(n, o); }; } function c(e, t) { for (var r = 0; r < e.length; r++) e[r].call(t); return t; } function s(e, t, r, n) { if ("function" != typeof e && (n || void 0 !== e)) throw new TypeError(t + " must " + (r || "be") + " a function" + (n ? "" : " or undefined")); return e; } function applyDec(e, t, r, n, o, a, c, u, l, f, p, d, h) { function m(e) { if (!h(e)) throw new TypeError("Attempted to access private element on non-instance"); } var y, v = t[0], g = t[3], b = !u; if (!b) { r || Array.isArray(v) || (v = [v]); var w = {}, S = [], A = 3 === o ? "get" : 4 === o || d ? "set" : "value"; f ? (p || d ? w = { get: _setFunctionName(function () { return g(this); }, n, "get"), set: function set(e) { t[4](this, e); } } : w[A] = g, p || _setFunctionName(w[A], n, 2 === o ? "" : A)) : p || (w = Object.getOwnPropertyDescriptor(e, n)); } for (var P = e, j = v.length - 1; j >= 0; j -= r ? 2 : 1) { var D = v[j], E = r ? v[j - 1] : void 0, I = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o], name: n, metadata: a, addInitializer: function (e, t) { if (e.v) throw Error("attempted to call addInitializer after decoration was finished"); s(t, "An initializer", "be", !0), c.push(t); }.bind(null, I) }; try { if (b) (y = s(D.call(E, P, O), "class decorators", "return")) && (P = y);else { var k, F; O["static"] = l, O["private"] = f, f ? 2 === o ? k = function k(e) { return m(e), w.value; } : (o < 4 && (k = i(w, "get", m)), 3 !== o && (F = i(w, "set", m))) : (k = function k(e) { return e[n]; }, (o < 2 || 4 === o) && (F = function F(e, t) { e[n] = t; })); var N = O.access = { has: f ? h.bind() : function (e) { return n in e; } }; if (k && (N.get = k), F && (N.set = F), P = D.call(E, d ? { get: w.get, set: w.set } : w[A], O), d) { if ("object" == _typeof(P) && P) (y = s(P.get, "accessor.get")) && (w.get = y), (y = s(P.set, "accessor.set")) && (w.set = y), (y = s(P.init, "accessor.init")) && S.push(y);else if (void 0 !== P) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0"); } else s(P, (p ? "field" : "method") + " decorators", "return") && (p ? S.push(P) : w[A] = P); } } finally { I.v = !0; } } return (p || d) && u.push(function (e, t) { for (var r = S.length - 1; r >= 0; r--) t = S[r].call(e, t); return t; }), p || b || (f ? d ? u.push(i(w, "get"), i(w, "set")) : u.push(2 === o ? w[A] : i.call.bind(w[A])) : Object.defineProperty(e, n, w)), P; } function u(e, t) { return Object.defineProperty(e, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: !0, enumerable: !0, value: t }); } if (arguments.length >= 6) var l = a[Symbol.metadata || Symbol["for"]("Symbol.metadata")]; var f = Object.create(null == l ? null : l), p = function (e, t, r, n) { var o, a, i = [], s = function s(t) { return _checkInRHS(t) === e; }, u = new Map(); function l(e) { e && i.push(c.bind(null, e)); } for (var f = 0; f < t.length; f++) { var p = t[f]; if (Array.isArray(p)) { var d = p[1], h = p[2], m = p.length > 3, y = 16 & d, v = !!(8 & d), g = 0 == (d &= 7), b = h + "/" + v; if (!g && !m) { var w = u.get(b); if (!0 === w || 3 === w && 4 !== d || 4 === w && 3 !== d) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h); u.set(b, !(d > 2) || d); } applyDec(v ? e : e.prototype, p, y, m ? "#" + h : _toPropertyKey(h), d, n, v ? a = a || [] : o = o || [], i, v, m, g, 1 === d, v && m ? s : r); } } return l(o), l(a), i; }(e, t, o, f); return r.length || u(e, f), { e: p, get c() { var t = []; return r.length && [u(applyDec(e, [r], n, e.name, 5, f, t), f), c.bind(null, t, e)]; } }; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _setFunctionName(e, t, n) { "symbol" == _typeof(t) && (t = (t = t.description) ? "[" + t + "]" : ""); try { Object.defineProperty(e, "name", { configurable: !0, value: n ? n + " " + t : t }); } catch (e) {} return e; }
function _checkInRHS(e) { if (Object(e) !== e) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e ? _typeof(e) : "null")); return e; }
var assign = Object.assign;
var floor = Math.floor,
  round = Math.round,
  ceil = Math.ceil,
  min = Math.min,
  max = Math.max;
import { sumTo, newCanvas, newTextCanvas, addCanvas, cloneCanvas, colorizeCanvas, newDomEl, addNewDomEl, importJs, hasKeys, nbKeys, GraphicsProps, CatalogContext, CATALOG, StateProperty, StateBool, StateNumber, Dependencies, SceneCommon, GameScene, GameObject, Category, Mixin, OwnerableMixin, Text, hackMethod, GameObjectGroup, PlayerIcon, PlayerText, Img } from '../../../../core/v1/index.mjs';
import { Hero, Wall, Star, HeroSpawnPoint } from './objects.mjs';
var CATCTX = new CatalogContext(import.meta.url, {
  version: "v1",
  perspective: "2Dside"
});
var IS_SERVER_ENV = typeof window === 'undefined';
_classDecs = [StateNumber.undefine("z"), StateNumber.undefine("y"), StateNumber.undefine("x"), Category.append("manager")];
var _Manager;
var Manager = /*#__PURE__*/function (_GameObject) {
  function Manager() {
    _classCallCheck(this, Manager);
    return _callSuper(this, Manager, arguments);
  }
  _inherits(Manager, _GameObject);
  return _createClass(Manager);
}(GameObject);
_Manager2 = Manager;
var _applyDecs$c = _slicedToArray(_applyDecs(_Manager2, [], _classDecs, 0, void 0, GameObject).c, 2);
_Manager = _applyDecs$c[0];
_initClass = _applyDecs$c[1];
_initClass();
export { _Manager as Manager };
_classDecs2 = [Category.append("border")];
var _BorderManager;
var BorderManager = /*#__PURE__*/function (_Manager4) {
  function BorderManager() {
    _classCallCheck(this, BorderManager);
    return _callSuper(this, BorderManager, arguments);
  }
  _inherits(BorderManager, _Manager4);
  return _createClass(BorderManager);
}(_Manager3 = _Manager);
_BorderManager2 = BorderManager;
var _applyDecs$c2 = _slicedToArray(_applyDecs(_BorderManager2, [], _classDecs2, 0, void 0, _Manager3).c, 2);
_BorderManager = _applyDecs$c2[0];
_initClass2 = _applyDecs$c2[1];
_initClass2();
export { _BorderManager as BorderManager };
_classDecs3 = [CATALOG.registerObject(CATCTX, {
  label: "Block Border",
  showInBuilder: true
})];
var _BlockBorderManager;
var BlockBorderManager = /*#__PURE__*/function (_BorderManager4) {
  function BlockBorderManager() {
    _classCallCheck(this, BlockBorderManager);
    return _callSuper(this, BlockBorderManager, arguments);
  }
  _inherits(BlockBorderManager, _BorderManager4);
  return _createClass(BlockBorderManager, [{
    key: "update",
    value: function update() {
      _superPropGet(BlockBorderManager, "update", this, 3)([]);
      this.initWalls();
    }
  }, {
    key: "initWalls",
    value: function initWalls() {
      if (this._initWallsDone) return;
      this._initWallsDone = true;
      var scene = this.scene,
        width = scene.width,
        height = scene.height;
      scene.addObject(Wall, {
        x1: 0,
        y1: 0,
        x2: width,
        y2: 0,
        visibility: 0
      });
      scene.addObject(Wall, {
        x1: width,
        y1: 0,
        x2: width,
        y2: height,
        visibility: 0
      });
      scene.addObject(Wall, {
        x1: width,
        y1: height,
        x2: 0,
        y2: height,
        visibility: 0
      });
      scene.addObject(Wall, {
        x1: 0,
        y1: height,
        x2: 0,
        y2: 0,
        visibility: 0
      });
    }
  }]);
}(_BorderManager3 = _BorderManager);
_BlockBorderManager2 = BlockBorderManager;
var _applyDecs$c3 = _slicedToArray(_applyDecs(_BlockBorderManager2, [], _classDecs3, 0, void 0, _BorderManager3).c, 2);
_BlockBorderManager = _applyDecs$c3[0];
_initClass3 = _applyDecs$c3[1];
_initClass3();
export { _BlockBorderManager as BlockBorderManager };
_classDecs4 = [CATALOG.registerObject(CATCTX, {
  label: "Damage Border",
  showInBuilder: true
}), StateNumber.define("heroOutDamages", {
  "default": 10,
  nullableWith: Infinity,
  showInBuilder: true
}), StateNumber.define("limit", {
  "default": 100,
  precision: 50,
  showInBuilder: true
})];
var _DamageBorderManager;
var DamageBorderManager = /*#__PURE__*/function (_BorderManager6) {
  function DamageBorderManager() {
    _classCallCheck(this, DamageBorderManager);
    return _callSuper(this, DamageBorderManager, arguments);
  }
  _inherits(DamageBorderManager, _BorderManager6);
  return _createClass(DamageBorderManager, [{
    key: "update",
    value: function update() {
      var _this = this;
      _superPropGet(DamageBorderManager, "update", this, 3)([]);
      var scene = this.scene,
        limit = this.limit;
      var width = scene.width,
        height = scene.height;
      scene.objects.forEach(function (obj) {
        var x = obj.x,
          y = obj.y;
        if (x < -limit || x > width + limit || y < -limit || y > height + limit) {
          _this.handleObjectOut(obj);
        }
      });
    }
  }, {
    key: "handleObjectOut",
    value: function handleObjectOut(obj) {
      if (obj instanceof Hero) {
        obj.getDamaged(this.heroOutDamages);
        if (obj.getHealth() > 0) this.scene.spawnHero(obj);
      } else {
        obj.remove();
      }
    }
  }]);
}(_BorderManager5 = _BorderManager);
_DamageBorderManager2 = DamageBorderManager;
var _applyDecs$c4 = _slicedToArray(_applyDecs(_DamageBorderManager2, [], _classDecs4, 0, void 0, _BorderManager5).c, 2);
_DamageBorderManager = _applyDecs$c4[0];
_initClass4 = _applyDecs$c4[1];
_initClass4();
export { _DamageBorderManager as DamageBorderManager };
_classDecs5 = [CATALOG.registerObject(CATCTX, {
  label: "Loop Border",
  showInBuilder: true
})];
var _LoopBorderManager;
var LoopBorderManager = /*#__PURE__*/function (_BorderManager8) {
  function LoopBorderManager() {
    _classCallCheck(this, LoopBorderManager);
    return _callSuper(this, LoopBorderManager, arguments);
  }
  _inherits(LoopBorderManager, _BorderManager8);
  return _createClass(LoopBorderManager, [{
    key: "update",
    value: function update() {
      _superPropGet(LoopBorderManager, "update", this, 3)([]);
      var scene = this.scene,
        width = scene.width,
        height = scene.height;
      scene.objects.forEach(function (obj) {
        var x = obj.x,
          y = obj.y;
        if (x > width) obj.x -= width;else if (x < 0) obj.x += width;
        if (y > height) obj.y -= height;else if (y < 0) obj.y += height;
      });
    }
  }]);
}(_BorderManager7 = _BorderManager);
_LoopBorderManager2 = LoopBorderManager;
var _applyDecs$c5 = _slicedToArray(_applyDecs(_LoopBorderManager2, [], _classDecs5, 0, void 0, _BorderManager7).c, 2);
_LoopBorderManager = _applyDecs$c5[0];
_initClass5 = _applyDecs$c5[1];
_initClass5();
export { _LoopBorderManager as LoopBorderManager };
_classDecs6 = [CATALOG.registerObject(CATCTX, {
  label: "Hero Lives",
  showInBuilder: true
}), Category.append("heroslives"), StateProperty.define("deathsIts"), StateNumber.define("delay", {
  "default": 1,
  precision: .5,
  showInBuilder: true
}), StateNumber.define("lives", {
  "default": 3,
  nullableWith: Infinity,
  showInBuilder: true
})];
var _HerosLivesManager;
var HerosLivesManager = /*#__PURE__*/function (_Manager6) {
  function HerosLivesManager() {
    _classCallCheck(this, HerosLivesManager);
    return _callSuper(this, HerosLivesManager, arguments);
  }
  _inherits(HerosLivesManager, _Manager6);
  return _createClass(HerosLivesManager, [{
    key: "init",
    value: function init(kwargs) {
      var _this2 = this;
      _superPropGet(HerosLivesManager, "init", this, 3)([kwargs]);
      var scene = this.scene;
      hackMethod(scene, "onAddObject", -1, function (evt) {
        var obj = evt.inputArgs[0];
        if (!(obj instanceof Hero)) return;
        hackMethod(obj, "die", -1, function (evt) {
          var deathsIts = _this2.deathsIts || (_this2.deathsIts = {});
          deathsIts[obj.playerId] = scene.iteration;
        });
      });
    }
  }, {
    key: "update",
    value: function update() {
      var scene = this.scene,
        deathsIts = this.deathsIts,
        delay = this.delay;
      var game = scene.game,
        iteration = scene.iteration;
      var fps = game.fps;
      if (deathsIts) {
        for (var playerId in deathsIts) {
          if (this.lives <= 0) break;
          if (iteration >= deathsIts[playerId] + delay * fps) {
            scene.addHero(playerId);
            delete deathsIts[playerId];
            this.lives -= 1;
          }
        }
        if (!hasKeys(deathsIts)) this.deathsIts = null;
      }
    }
  }]);
}(_Manager5 = _Manager);
_HerosLivesManager2 = HerosLivesManager;
var _applyDecs$c6 = _slicedToArray(_applyDecs(_HerosLivesManager2, [], _classDecs6, 0, void 0, _Manager5).c, 2);
_HerosLivesManager = _applyDecs$c6[0];
_initClass6 = _applyDecs$c6[1];
_initClass6();
export { _HerosLivesManager as HerosLivesManager };
_classDecs7 = [Category.append("view")];
var _ViewManager;
var ViewManager = /*#__PURE__*/function (_Manager8) {
  function ViewManager() {
    _classCallCheck(this, ViewManager);
    return _callSuper(this, ViewManager, arguments);
  }
  _inherits(ViewManager, _Manager8);
  return _createClass(ViewManager);
}(_Manager7 = _Manager);
_ViewManager2 = ViewManager;
var _applyDecs$c7 = _slicedToArray(_applyDecs(_ViewManager2, [], _classDecs7, 0, void 0, _Manager7).c, 2);
_ViewManager = _applyDecs$c7[0];
_initClass7 = _applyDecs$c7[1];
_initClass7();
export { _ViewManager as ViewManager };
_classDecs8 = [CATALOG.registerObject(CATCTX, {
  label: "View Heros Center",
  showInBuilder: true
})];
var _ViewHerosCenterManag;
var ViewHerosCenterManager = /*#__PURE__*/function (_ViewManager4) {
  function ViewHerosCenterManager() {
    _classCallCheck(this, ViewHerosCenterManager);
    return _callSuper(this, ViewHerosCenterManager, arguments);
  }
  _inherits(ViewHerosCenterManager, _ViewManager4);
  return _createClass(ViewHerosCenterManager, [{
    key: "update",
    value: function update() {
      _superPropGet(ViewHerosCenterManager, "update", this, 3)([]);
      this.updateSceneView();
    }
  }, {
    key: "updateSceneView",
    value: function updateSceneView() {
      var scn = this.scene;
      var heros = scn.heros,
        localHero = scn.localHero,
        viewWidth = scn.viewWidth,
        viewHeight = scn.viewHeight;
      if (!hasKeys(heros)) return;
      if (localHero) {
        scn.setView(localHero.x - viewWidth / 2, localHero.y - viewHeight / 2);
      } else {
        var sumX = 0,
          sumY = 0,
          nbHeros = 0;
        for (var playerId in heros) {
          var hero = heros[playerId];
          sumX += hero.x;
          sumY += hero.y;
          nbHeros += 1;
        }
        scn.setView(sumX / nbHeros - viewWidth / 2, sumY / nbHeros - viewHeight / 2);
      }
    }
  }]);
}(_ViewManager3 = _ViewManager);
_ViewHerosCenterManager = ViewHerosCenterManager;
var _applyDecs$c8 = _slicedToArray(_applyDecs(_ViewHerosCenterManager, [], _classDecs8, 0, void 0, _ViewManager3).c, 2);
_ViewHerosCenterManag = _applyDecs$c8[0];
_initClass8 = _applyDecs$c8[1];
_initClass8();
export { _ViewHerosCenterManag as ViewHerosCenterManager };
_classDecs9 = [CATALOG.registerObject(CATCTX, {
  label: "View First Hero",
  showInBuilder: true
})];
var _ViewFirstHeroManager;
var ViewFirstHeroManager = /*#__PURE__*/function (_ViewManager6) {
  function ViewFirstHeroManager() {
    _classCallCheck(this, ViewFirstHeroManager);
    return _callSuper(this, ViewFirstHeroManager, arguments);
  }
  _inherits(ViewFirstHeroManager, _ViewManager6);
  return _createClass(ViewFirstHeroManager, [{
    key: "init",
    value: function init(kwargs) {
      var _this3 = this;
      _superPropGet(ViewFirstHeroManager, "init", this, 3)([kwargs]);
      var scene = this.scene;
      hackMethod(scene, "spawnHero", 1, function (evt) {
        var hero = evt.inputArgs[0];
        _this3.spawnHero(hero);
        evt.stopPropagation();
      });
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(ViewFirstHeroManager, "update", this, 3)([]);
      this.updateSceneView();
      this.spawnFarHeros();
    }
  }, {
    key: "updateSceneView",
    value: function updateSceneView() {
      var scn = this.scene;
      var heros = scn.heros,
        localHero = scn.localHero,
        viewWidth = scn.viewWidth,
        viewHeight = scn.viewHeight;
      if (!hasKeys(heros)) return;
      if (localHero) {
        scn.setView(localHero.x - viewWidth / 2, localHero.y - viewHeight / 2);
      } else {
        var firstHero = scn.getFirstHero();
        if (firstHero) scn.setView(firstHero.x - viewWidth / 2, firstHero.y - viewHeight / 2);
      }
    }
  }, {
    key: "spawnFarHeros",
    value: function spawnFarHeros() {
      var scn = this.scene;
      var heros = scn.heros,
        viewWidth = scn.viewWidth,
        viewHeight = scn.viewHeight;
      var firstHero = scn.getFirstHero();
      if (!firstHero) return;
      var fhx = firstHero.x,
        fhy = firstHero.y;
      for (var playerId in heros) {
        if (playerId === firstHero.playerId) continue;
        var hero = heros[playerId];
        var dx = hero.x - fhx,
          dy = hero.y - fhy;
        if (dx < -viewWidth * .7 || dx > viewWidth * .7 || dy < -viewHeight * .7 || dy > viewHeight * .7) {
          this.spawnHero(hero);
        }
      }
    }
  }, {
    key: "spawnHero",
    value: function spawnHero(hero) {
      var scn = this.scene;
      var firstHero = scn.getFirstHero();
      var spawnX, spawnY;
      if (!firstHero || hero === firstHero) {
        spawnX = scn.herosSpawnX;
        spawnY = scn.herosSpawnY;
      } else {
        spawnX = firstHero.x;
        spawnY = firstHero.y;
      }
      hero.spawn(spawnX, spawnY);
    }
  }]);
}(_ViewManager5 = _ViewManager);
_ViewFirstHeroManager2 = ViewFirstHeroManager;
var _applyDecs$c9 = _slicedToArray(_applyDecs(_ViewFirstHeroManager2, [], _classDecs9, 0, void 0, _ViewManager5).c, 2);
_ViewFirstHeroManager = _applyDecs$c9[0];
_initClass9 = _applyDecs$c9[1];
_initClass9();
export { _ViewFirstHeroManager as ViewFirstHeroManager };
_classDecs0 = [CATALOG.registerObject(CATCTX, {
  label: "Physics"
}), StateNumber.define("gravityAcc", {
  "default": 1000,
  precision: 100
}), StateNumber.define("gravityMaxSpeed", {
  "default": 1000,
  precision: 100
}), Category.append("physics")];
var _PhysicsManager;
var PhysicsManager = /*#__PURE__*/function (_Manager0) {
  function PhysicsManager() {
    _classCallCheck(this, PhysicsManager);
    return _callSuper(this, PhysicsManager, arguments);
  }
  _inherits(PhysicsManager, _Manager0);
  return _createClass(PhysicsManager);
}(_Manager9 = _Manager);
_PhysicsManager2 = PhysicsManager;
var _applyDecs$c0 = _slicedToArray(_applyDecs(_PhysicsManager2, [], _classDecs0, 0, void 0, _Manager9).c, 2);
_PhysicsManager = _applyDecs$c0[0];
_initClass0 = _applyDecs$c0[1];
_initClass0();
export { _PhysicsManager as PhysicsManager };
_classDecs1 = [CATALOG.registerObject(CATCTX, {
  label: "Attack"
}), Category.append("attack")];
var _AttackManager;
var AttackManager = /*#__PURE__*/function (_Manager10) {
  function AttackManager() {
    _classCallCheck(this, AttackManager);
    return _callSuper(this, AttackManager, arguments);
  }
  _inherits(AttackManager, _Manager10);
  return _createClass(AttackManager, [{
    key: "canTeamAttack",
    value: function canTeamAttack(team1, team2) {
      return true;
    }
  }, {
    key: "canTeamDamage",
    value: function canTeamDamage(team1, team2) {
      return team1 != team2;
    }
  }]);
}(_Manager1 = _Manager);
_AttackManager2 = AttackManager;
var _applyDecs$c1 = _slicedToArray(_applyDecs(_AttackManager2, [], _classDecs1, 0, void 0, _Manager1).c, 2);
_AttackManager = _applyDecs$c1[0];
_initClass1 = _applyDecs$c1[1];
_initClass1();
export { _AttackManager as AttackManager };
export var HeadsUpDisplay = /*#__PURE__*/function (_GameObject2) {
  function HeadsUpDisplay() {
    _classCallCheck(this, HeadsUpDisplay);
    return _callSuper(this, HeadsUpDisplay, arguments);
  }
  _inherits(HeadsUpDisplay, _GameObject2);
  return _createClass(HeadsUpDisplay, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(HeadsUpDisplay, "init", this, 3)([kwargs]);
      this.margin = 5;
      this.barWidth = 100;
      this.barHeight = 20;
      this.heroLineMinHeight = 20;
      this.textArgs = {
        font: "bold 20px arial",
        fillStyle: "black"
      };
      this.globalElems = new GameObjectGroup(this.scene);
      this.playersElems = new Map();
      this.showHerosHealths = kwargs?.showHerosHealths ?? true;
      this.showPlayersScores = kwargs?.showPlayersScores ?? true;
      this.playersLinesSorter = kwargs?.playersLinesSorter ?? null;
    }
  }, {
    key: "addGlobalHudElem",
    value: function addGlobalHudElem(cls, args) {
      this.globalElems.add(cls, args);
    }
  }, {
    key: "initPlayerElements",
    value: function initPlayerElements(hero) {
      var _this4 = this;
      var game = this.game,
        playersElems = this.playersElems,
        textArgs = this.textArgs,
        margin = this.margin,
        barWidth = this.barWidth,
        barHeight = this.barHeight,
        heroLineMinHeight = this.heroLineMinHeight;
      var _loop = function _loop() {
        if (playersElems.has(playerId)) return 1; // continue
        var grp = new GameObjectGroup(_this4.scene);
        playersElems.set(playerId, grp);
        //grp.nbBarElems = 0
        grp.add(PlayerIcon, {
          x: heroLineMinHeight / 2,
          y: heroLineMinHeight / 2,
          width: heroLineMinHeight,
          height: heroLineMinHeight,
          playerId: playerId
        });
        if (_this4.showHerosHealths) grp.add(HealthBar, {
          playerId: playerId,
          width: barWidth,
          height: barHeight
        });
        if (_this4.showPlayersScores) grp.add(PlayerScoreText, _objectSpread({
          playerId: playerId
        }, textArgs));
        grp.sync = function () {
          var hasBars = false,
            elemsX = heroLineMinHeight + margin,
            barsY = 0;
          grp.forEach(function (elem) {
            if (elem instanceof BarNotif) {
              elem.x = elemsX + elem.width / 2, elem.y = barsY + elem.height / 2;
              hasBars = true;
              barsY = elem.y + elem.height / 2 + margin;
            }
          });
          if (hasBars) elemsX += barWidth + margin;
          grp.forEach(function (elem) {
            if (!(elem instanceof BarNotif || elem instanceof PlayerIcon)) {
              elem.x = elemsX + elem.width / 2;
              elem.y = elem.height / 2;
              elemsX = elem.x + elem.width + margin;
            }
          });
          grp.height = max(heroLineMinHeight, barsY);
        };
        grp.sync();
        hackMethod(grp, "update", 0, function (evt) {
          return grp.sync();
        });
      };
      for (var playerId in game.players) {
        if (_loop()) continue;
      }
      return playersElems;
    }
  }, {
    key: "update",
    value: function update() {
      this.initPlayerElements();
      this.globalElems.update();
      this.playersElems.forEach(function (elems) {
        return elems.update();
      });
      this.syncPlayersElems();
    }
  }, {
    key: "syncPlayersElems",
    value: function syncPlayersElems() {
      var margin = this.margin;
      var prevGrp = null;
      var playerIds = Array.from(this.playersElems.keys());
      if (this.playersLinesSorter) playerIds.sort(this.playersLinesSorter);
      for (var _i = 0, _playerIds = playerIds; _i < _playerIds.length; _i++) {
        var playerId = _playerIds[_i];
        var grp = this.playersElems.get(playerId);
        grp.x = margin;
        grp.y = (prevGrp ? prevGrp.y + prevGrp.height : 0) + margin;
        prevGrp = grp;
      }
    }
  }, {
    key: "draw",
    value: function draw(drawer) {
      _superPropGet(HeadsUpDisplay, "draw", this, 3)([drawer]);
      this.globalElems.draw(drawer);
      this.playersElems.forEach(function (elems) {
        return elems.draw(drawer);
      });
    }
  }]);
}(GameObject);
var BarNotif = /*#__PURE__*/function (_GameObject3) {
  function BarNotif() {
    _classCallCheck(this, BarNotif);
    return _callSuper(this, BarNotif, arguments);
  }
  _inherits(BarNotif, _GameObject3);
  return _createClass(BarNotif, [{
    key: "init",
    value: function init(args) {
      _superPropGet(BarNotif, "init", this, 3)([args]);
      this.barColor = "white";
      this.value = 1; // from 0 to 1
      this.width = 100;
      this.height = 10;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      var width = this.width,
        height = this.height;
      var can = this._baseImg || newCanvas(width, height);
      assign(can, {
        width: width,
        height: height
      });
      var ctx = can.getContext("2d");
      var valWidth = ~~(width * this.value);
      ctx.fillStyle = "grey";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = this.barColor;
      ctx.fillRect(0, 0, valWidth, height);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      ctx.strokeRect(0, 0, width, height);
      return can;
    }
  }]);
}(GameObject);
var HealthBar = /*#__PURE__*/function (_BarNotif) {
  function HealthBar() {
    _classCallCheck(this, HealthBar);
    return _callSuper(this, HealthBar, arguments);
  }
  _inherits(HealthBar, _BarNotif);
  return _createClass(HealthBar, [{
    key: "init",
    value: function init(args) {
      _superPropGet(HealthBar, "init", this, 3)([args]);
      this.barColor = "red";
      this.playerId = args.playerId;
    }
  }, {
    key: "update",
    value: function update() {
      var hero = this.scene.getHero(this.playerId);
      this.value = hero ? hero.getHealth() / hero.maxHealth : 0;
    }
  }]);
}(BarNotif);
var PlayerScoreText = /*#__PURE__*/function (_Text) {
  function PlayerScoreText() {
    _classCallCheck(this, PlayerScoreText);
    return _callSuper(this, PlayerScoreText, arguments);
  }
  _inherits(PlayerScoreText, _Text);
  return _createClass(PlayerScoreText, [{
    key: "init",
    value: function init(args) {
      _superPropGet(PlayerScoreText, "init", this, 3)([args]);
      this.playerId = args.playerId;
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(PlayerScoreText, "update", this, 3)([]);
      var scores = this.scene.scores;
      this.updateText(floor(scores.get(this.playerId) ?? 0));
    }
  }]);
}(Text); // Background
_classDecs10 = [Category.append("background"), StateNumber.undefine("z"), StateNumber.undefine("y"), StateNumber.undefine("x")];
var _Background;
var Background = /*#__PURE__*/function (_GameObject4) {
  function Background() {
    _classCallCheck(this, Background);
    return _callSuper(this, Background, arguments);
  }
  _inherits(Background, _GameObject4);
  return _createClass(Background, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Background, "init", this, 3)([kwargs]);
      this.z = -1000;
      this.updatePosAndSize();
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(Background, "update", this, 3)([]);
      this.updatePosAndSize();
    }
  }, {
    key: "updatePosAndSize",
    value: function updatePosAndSize() {
      var scene = this.scene;
      this.width = scene.viewWidth;
      this.height = scene.viewHeight;
      this.x = this.width / 2;
      this.y = this.height / 2;
    }
  }]);
}(GameObject);
_Background2 = Background;
var _applyDecs$c10 = _slicedToArray(_applyDecs(_Background2, [], _classDecs10, 0, void 0, GameObject).c, 2);
_Background = _applyDecs$c10[0];
_initClass10 = _applyDecs$c10[1];
_initClass10();
export { _Background as Background };
var GreenLandscapeImg = new Img("/static/catalogs/std/v1/2Dside/assets/backgrounds/green_landscape.jpg");
_classDecs11 = [CATALOG.registerObject(CATCTX, {
  label: "Green Landscape"
}), Dependencies.add(GreenLandscapeImg)];
var _GreenLandscapeBackgr;
var GreenLandscapeBackground = /*#__PURE__*/function (_Background4) {
  function GreenLandscapeBackground() {
    _classCallCheck(this, GreenLandscapeBackground);
    return _callSuper(this, GreenLandscapeBackground, arguments);
  }
  _inherits(GreenLandscapeBackground, _Background4);
  return _createClass(GreenLandscapeBackground, [{
    key: "getBaseImg",
    value: function getBaseImg() {
      return GreenLandscapeImg;
    }
  }]);
}(_Background3 = _Background);
_GreenLandscapeBackground = GreenLandscapeBackground;
var _applyDecs$c11 = _slicedToArray(_applyDecs(_GreenLandscapeBackground, [], _classDecs11, 0, void 0, _Background3).c, 2);
_GreenLandscapeBackgr = _applyDecs$c11[0];
_initClass11 = _applyDecs$c11[1];
_initClass11();
export { _GreenLandscapeBackgr as GreenLandscapeBackground };
var RockMountainsImg = new Img("/static/catalogs/std/v1/2Dside/assets/backgrounds/rock_mountains.jpg");
_classDecs12 = [CATALOG.registerObject(CATCTX, {
  label: "Rock Mountains"
}), Dependencies.add(RockMountainsImg)];
var _RockMountainsBackgro;
var RockMountainsBackground = /*#__PURE__*/function (_Background6) {
  function RockMountainsBackground() {
    _classCallCheck(this, RockMountainsBackground);
    return _callSuper(this, RockMountainsBackground, arguments);
  }
  _inherits(RockMountainsBackground, _Background6);
  return _createClass(RockMountainsBackground, [{
    key: "getBaseImg",
    value: function getBaseImg() {
      return RockMountainsImg;
    }
  }]);
}(_Background5 = _Background);
_RockMountainsBackground = RockMountainsBackground;
var _applyDecs$c12 = _slicedToArray(_applyDecs(_RockMountainsBackground, [], _classDecs12, 0, void 0, _Background5).c, 2);
_RockMountainsBackgro = _applyDecs$c12[0];
_initClass12 = _applyDecs$c12[1];
_initClass12();
export { _RockMountainsBackgro as RockMountainsBackground };
var SnowMountainsImg = new Img("/static/catalogs/std/v1/2Dside/assets/backgrounds/snow_mountains.jpg");
_classDecs13 = [CATALOG.registerObject(CATCTX, {
  label: "Snow Mountains"
}), Dependencies.add(SnowMountainsImg)];
var _SnowMountainsBackgro;
var SnowMountainsBackground = /*#__PURE__*/function (_Background8) {
  function SnowMountainsBackground() {
    _classCallCheck(this, SnowMountainsBackground);
    return _callSuper(this, SnowMountainsBackground, arguments);
  }
  _inherits(SnowMountainsBackground, _Background8);
  return _createClass(SnowMountainsBackground, [{
    key: "getBaseImg",
    value: function getBaseImg() {
      return SnowMountainsImg;
    }
  }]);
}(_Background7 = _Background);
_SnowMountainsBackground = SnowMountainsBackground;
var _applyDecs$c13 = _slicedToArray(_applyDecs(_SnowMountainsBackground, [], _classDecs13, 0, void 0, _Background7).c, 2);
_SnowMountainsBackgro = _applyDecs$c13[0];
_initClass13 = _applyDecs$c13[1];
_initClass13();
export { _SnowMountainsBackgro as SnowMountainsBackground };
var DarkForestImg = new Img("/static/catalogs/std/v1/2Dside/assets/backgrounds/dark_forest.jpg");
_classDecs14 = [CATALOG.registerObject(CATCTX, {
  label: "Dark Forest"
}), Dependencies.add(DarkForestImg)];
var _DarkForestBackground;
var DarkForestBackground = /*#__PURE__*/function (_Background0) {
  function DarkForestBackground() {
    _classCallCheck(this, DarkForestBackground);
    return _callSuper(this, DarkForestBackground, arguments);
  }
  _inherits(DarkForestBackground, _Background0);
  return _createClass(DarkForestBackground, [{
    key: "getBaseImg",
    value: function getBaseImg() {
      return DarkForestImg;
    }
  }]);
}(_Background9 = _Background);
_DarkForestBackground2 = DarkForestBackground;
var _applyDecs$c14 = _slicedToArray(_applyDecs(_DarkForestBackground2, [], _classDecs14, 0, void 0, _Background9).c, 2);
_DarkForestBackground = _applyDecs$c14[0];
_initClass14 = _applyDecs$c14[1];
_initClass14();
export { _DarkForestBackground as DarkForestBackground };
var DarkCityImg = new Img("/static/catalogs/std/v1/2Dside/assets/backgrounds/dark_city.jpg");
_classDecs15 = [CATALOG.registerObject(CATCTX, {
  label: "Dark City"
}), Dependencies.add(DarkCityImg)];
var _DarkCityBackground;
var DarkCityBackground = /*#__PURE__*/function (_Background10) {
  function DarkCityBackground() {
    _classCallCheck(this, DarkCityBackground);
    return _callSuper(this, DarkCityBackground, arguments);
  }
  _inherits(DarkCityBackground, _Background10);
  return _createClass(DarkCityBackground, [{
    key: "getBaseImg",
    value: function getBaseImg() {
      return DarkCityImg;
    }
  }]);
}(_Background1 = _Background); // Standard
_DarkCityBackground2 = DarkCityBackground;
var _applyDecs$c15 = _slicedToArray(_applyDecs(_DarkCityBackground2, [], _classDecs15, 0, void 0, _Background1).c, 2);
_DarkCityBackground = _applyDecs$c15[0];
_initClass15 = _applyDecs$c15[1];
_initClass15();
export { _DarkCityBackground as DarkCityBackground };
_classDecs16 = [CATALOG.registerScene(CATCTX), Dependencies.add(_GreenLandscapeBackgr), StateBool.define("killAllEnemies", {
  "default": false,
  showInBuilder: true
}), StateBool.define("catchAllStars", {
  "default": false,
  showInBuilder: true
}), GameObject.StateProperty.define("attackManager", {
  filter: {
    category: "manager/attack"
  },
  "default": {
    key: "std:AttackManager"
  },
  showInBuilder: true
}), GameObject.StateProperty.define("physicsManager", {
  filter: {
    category: "manager/physics"
  },
  "default": {
    key: "std:PhysicsManager"
  },
  showInBuilder: true
}), GameObject.StateProperty.define("viewManager", {
  filter: {
    category: "manager/view"
  },
  "default": {
    key: "std:ViewHerosCenterManager"
  },
  showInBuilder: true
}), GameObject.StateProperty.define("herosLivesManager", {
  filter: {
    category: "manager/heroslives"
  },
  "default": {
    key: "std:HerosLivesManager"
  },
  showInBuilder: true
}), GameObject.StateProperty.define("borderManager", {
  filter: {
    category: "manager/border"
  },
  "default": {
    key: "std:BlockBorderManager"
  },
  showInBuilder: true
}), GameObject.StateProperty.define("background", {
  filter: {
    category: "background"
  },
  "default": {
    key: "std:GreenLandscapeBackground"
  },
  showInBuilder: true
})];
var _StandardScene;
var StandardScene = /*#__PURE__*/function (_GameScene) {
  function StandardScene() {
    _classCallCheck(this, StandardScene);
    return _callSuper(this, StandardScene, arguments);
  }
  _inherits(StandardScene, _GameScene);
  return _createClass(StandardScene, [{
    key: "init",
    value: function init(args) {
      _superPropGet(StandardScene, "init", this, 3)([args]);
      this.hud = new HeadsUpDisplay(this);
    }
  }, {
    key: "initHerosSpawnPos",
    value: function initHerosSpawnPos() {
      var points = this.filterObjects("heroSpawnPoints", function (obj) {
        return obj instanceof HeroSpawnPoint;
      });
      if (points.length == 0) return;
      var firstPoint = points[0];
      this.setHerosSpawnPos(firstPoint.x, firstPoint.y);
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(StandardScene, "update", this, 3)([]);
      this.background.update();
      this.borderManager.update();
      this.viewManager.update();
      this.herosLivesManager.update();
      this.physicsManager.update();
      this.attackManager.update();
      this.hud.update();
      if (this.step == "GAME") {
        var allOk = null;
        if (allOk !== false && this.catchAllStars) {
          var stars = this.filterObjects("stars", function (obj) {
            return obj instanceof Star;
          });
          allOk = stars.length == 0;
        }
        if (allOk !== false && this.killAllEnemies) {
          var enemies = this.filterObjects("enemies", function (obj) {
            return obj instanceof Enemy;
          });
          allOk = enemies.length == 0;
        }
        if (allOk) this.step = "VICTORY";
      }
    }
  }, {
    key: "loadJoypadScene",
    value: function () {
      var _loadJoypadScene = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$import, JoypadGameScene;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return import("/static/catalogs/std/v1/2Dside/joypad.mjs");
            case 1:
              _yield$import = _context.v;
              JoypadGameScene = _yield$import.JoypadGameScene;
              return _context.a(2, new JoypadGameScene(this.game));
          }
        }, _callee, this);
      }));
      function loadJoypadScene() {
        return _loadJoypadScene.apply(this, arguments);
      }
      return loadJoypadScene;
    }()
  }, {
    key: "draw",
    value: function draw() {
      var res = _superPropGet(StandardScene, "draw", this, 3)([]);
      var drawer = this.graphicsEngine;
      this.hud.draw(drawer);
      return res;
    }
  }, {
    key: "drawBackground",
    value: function drawBackground(drawer) {
      this.background.draw(drawer);
    }
  }]);
}(GameScene); // TAG
_StandardScene2 = StandardScene;
var _applyDecs$c16 = _slicedToArray(_applyDecs(_StandardScene2, [], _classDecs16, 0, void 0, GameScene).c, 2);
_StandardScene = _applyDecs$c16[0];
_initClass16 = _applyDecs$c16[1];
_initClass16();
export { _StandardScene as StandardScene };
_classDecs17 = [CATALOG.registerScene(CATCTX), Dependencies.add(_GreenLandscapeBackgr), StateNumber.define("duration", {
  "default": 3 * 60,
  precision: 30,
  showInBuilder: true
}), GameObject.StateProperty.define("attackManager", {
  filter: {
    category: "manager/attack"
  },
  "default": {
    key: "std:AttackManager"
  },
  showInBuilder: true
}), GameObject.StateProperty.define("physicsManager", {
  filter: {
    category: "manager/physics"
  },
  "default": {
    key: "std:PhysicsManager"
  },
  showInBuilder: true
}), GameObject.StateProperty.define("borderManager", {
  filter: {
    category: "manager/border"
  },
  "default": {
    key: "std:LoopBorderManager"
  },
  showInBuilder: true
}), GameObject.StateProperty.define("background", {
  filter: {
    category: "background"
  },
  "default": {
    key: "std:GreenLandscapeBackground"
  },
  showInBuilder: true
})];
var _TagScene;
var TagScene = /*#__PURE__*/function (_GameScene2) {
  function TagScene() {
    _classCallCheck(this, TagScene);
    return _callSuper(this, TagScene, arguments);
  }
  _inherits(TagScene, _GameScene2);
  return _createClass(TagScene, [{
    key: "init",
    value: function init(args) {
      _superPropGet(TagScene, "init", this, 3)([args]);
      this.step = "INIT";
      this.initDuration = 3;
      this.hud = new HeadsUpDisplay(this, {
        showHerosHealths: false
      });
    }
  }, {
    key: "initHerosSpawnPos",
    value: function initHerosSpawnPos() {
      var points = this.filterObjects("heroSpawnPoints", function (obj) {
        return obj instanceof HeroSpawnPoint;
      });
      if (points.length == 0) return;
      var firstPoint = points[0];
      this.setHerosSpawnPos(firstPoint.x, firstPoint.y);
    }
  }, {
    key: "loadMap",
    value: function loadMap(map) {
      _superPropGet(TagScene, "loadMap", this, 3)([map]);
      this.addObject(_Tag);
    }
  }, {
    key: "onAddObject",
    value: function onAddObject(obj) {
      _superPropGet(TagScene, "onAddObject", this, 3)([obj]);
      if (obj instanceof Hero) this.hackHero(obj);
    }
  }, {
    key: "hackHero",
    value: function hackHero(hero) {
      var _this5 = this;
      hero.maxHealth = Infinity;
      hackMethod(hero, "onGetAttacked", 0, function (evt) {
        var attackProps = evt.inputArgs[0];
        var attacker = attackProps.attacker;
        var tag = _this5.tag;
        if (!tag || !attacker || tag.owner != attacker) return;
        tag.owner = hero;
      });
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(TagScene, "update", this, 3)([]);
      this.background.update();
      this.borderManager.update();
      this.physicsManager.update();
      this.attackManager.update();
      this.hud.update();
      this.checkTaggedHero();
      this.preventTaggedHeroToMove(this.step == "INIT");
      if (this.step == "INIT") this.updateStepInit();
    }
  }, {
    key: "checkTaggedHero",
    value: function checkTaggedHero() {
      var taggedHero = this.tag.owner;
      if (taggedHero && !taggedHero.removed) return;
      var heros = [];
      this.objects.forEach(function (ent) {
        if (ent instanceof Hero) heros.push(ent);
      });
      if (heros.length == 0) return;
      var numHero = floor(this.rand("tag") * heros.length);
      this.tag.owner = heros[numHero];
    }
  }, {
    key: "preventTaggedHeroToMove",
    value: function preventTaggedHeroToMove(val) {
      var taggedHero = this.tag.owner;
      if (!taggedHero || taggedHero.removed) return;
      if (val) {
        this.taggedHeroPreventMoveHack || (this.taggedHeroPreventMoveHack = hackMethod(taggedHero, "getInputState", 1, function (evt) {
          evt.stopPropagation();
        }));
      } else if (this.taggedHeroPreventMoveHack) {
        this.taggedHeroPreventMoveHack.remove();
        this.taggedHeroPreventMoveHack = null;
      }
    }
  }, {
    key: "updateStepInit",
    value: function updateStepInit() {
      var iteration = this.iteration,
        initDuration = this.initDuration;
      var fps = this.game.fps;
      this.initCountDown();
      this.updateWorld();
      if (iteration > initDuration * fps) {
        this.step = "GAME";
        delete this.countDown;
      }
    }
  }, {
    key: "initCountDown",
    value: function initCountDown() {
      this.countDown || (this.countDown = this.notifs.add(CountDown, {
        x: this.width / 2,
        y: this.height / 2,
        duration: 3,
        font: "bold 200px arial",
        fillStyle: "black"
      }));
    }
  }, {
    key: "updateStepGame",
    value: function updateStepGame() {
      var iteration = this.iteration,
        initDuration = this.initDuration,
        duration = this.duration;
      var fps = this.game.fps;
      _superPropGet(TagScene, "updateStepGame", this, 3)([]);
      if (iteration % fps == 0) this.incrNonTaggedPlayerScores();
      if (iteration > (initDuration + duration) * fps) this.step = "GAMEOVER";
    }
  }, {
    key: "incrNonTaggedPlayerScores",
    value: function incrNonTaggedPlayerScores() {
      var tag = this.tag;
      var taggedHero = tag.owner;
      if (!taggedHero) return;
      var taggedPlayerId = taggedHero.playerId;
      for (var playerId in this.game.players) {
        if (playerId == taggedPlayerId) continue;
        this.incrScore(playerId, 1);
      }
    }
  }, {
    key: "updateStepGameOver",
    value: function updateStepGameOver() {
      var scores = this.scores;
      if (!this.scoresBoard) this.scoresBoard = this.notifs.add(ScoresBoard, {
        x: this.width / 2,
        y: this.height / 2,
        scores: scores
      });
    }
  }, {
    key: "loadJoypadScene",
    value: function () {
      var _loadJoypadScene2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$import2, JoypadGameScene;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return import("/static/catalogs/std/v1/2Dside/joypad.mjs");
            case 1:
              _yield$import2 = _context2.v;
              JoypadGameScene = _yield$import2.JoypadGameScene;
              return _context2.a(2, new JoypadGameScene(this.game));
          }
        }, _callee2, this);
      }));
      function loadJoypadScene() {
        return _loadJoypadScene2.apply(this, arguments);
      }
      return loadJoypadScene;
    }()
  }, {
    key: "draw",
    value: function draw() {
      var res = _superPropGet(TagScene, "draw", this, 3)([]);
      var drawer = this.graphicsEngine;
      this.hud.draw(drawer);
      return res;
    }
  }, {
    key: "drawBackground",
    value: function drawBackground(drawer) {
      this.background.draw(drawer);
    }
  }]);
}(GameScene);
_TagScene2 = TagScene;
var _applyDecs$c17 = _slicedToArray(_applyDecs(_TagScene2, [], _classDecs17, 0, void 0, GameScene).c, 2);
_TagScene = _applyDecs$c17[0];
_initClass17 = _applyDecs$c17[1];
_initClass17();
export { _TagScene as TagScene };
var TagImg = new Img("/static/catalogs/std/v1/2Dside/assets/tag.png");
_classDecs18 = [CATALOG.registerObject(CATCTX, {
  showInBuilder: false
}), Dependencies.add(TagImg), OwnerableMixin.add({
  removedWithOwner: false
})];
var _Tag;
var Tag = /*#__PURE__*/function (_GameObject5) {
  function Tag() {
    _classCallCheck(this, Tag);
    return _callSuper(this, Tag, arguments);
  }
  _inherits(Tag, _GameObject5);
  return _createClass(Tag, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Tag, "init", this, 3)([kwargs]);
      this.width = 30;
      this.height = 30;
      // self register in scene
      this.scene.tag = this;
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(Tag, "update", this, 3)([]);
      this.sync();
    }
  }, {
    key: "sync",
    value: function sync() {
      var owner = this.owner;
      if (!owner) return;
      this.x = owner.x;
      this.y = owner.y - 50;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return this.owner ? TagImg : null;
    }
  }]);
}(GameObject);
_Tag2 = Tag;
var _applyDecs$c18 = _slicedToArray(_applyDecs(_Tag2, [], _classDecs18, 0, void 0, GameObject).c, 2);
_Tag = _applyDecs$c18[0];
_initClass18 = _applyDecs$c18[1];
_initClass18();
export { _Tag as Tag };
_classDecs19 = [CATALOG.registerScene(CATCTX), Dependencies.add(_GreenLandscapeBackgr), StateNumber.define("duration", {
  "default": 3 * 60,
  precision: 30,
  showInBuilder: true
}), GameObject.StateProperty.define("attackManager", {
  filter: {
    category: "manager/attack"
  },
  "default": {
    key: "std:AttackManager"
  },
  showInBuilder: true
}), GameObject.StateProperty.define("physicsManager", {
  filter: {
    category: "manager/physics"
  },
  "default": {
    key: "std:PhysicsManager"
  },
  showInBuilder: true
}), GameObject.StateProperty.define("borderManager", {
  filter: {
    category: "manager/border"
  },
  "default": {
    key: "std:LoopBorderManager"
  },
  showInBuilder: true
}), GameObject.StateProperty.define("background", {
  filter: {
    category: "background"
  },
  "default": {
    key: "std:GreenLandscapeBackground"
  },
  showInBuilder: true
})];
var _StealTreasures;
var StealTreasures = /*#__PURE__*/function (_GameScene3) {
  function StealTreasures() {
    _classCallCheck(this, StealTreasures);
    return _callSuper(this, StealTreasures, arguments);
  }
  _inherits(StealTreasures, _GameScene3);
  return _createClass(StealTreasures, [{
    key: "init",
    value: function init(args) {
      _superPropGet(StealTreasures, "init", this, 3)([args]);
      var scores = this.scores;
      this.hud = new HeadsUpDisplay(this, {
        showHerosHealths: false,
        playersLinesSorter: function playersLinesSorter(pid1, pid2) {
          return (scores.get(pid2) ?? 0) - (scores.get(pid1) ?? 0);
        }
      });
    }
  }, {
    key: "initHerosSpawnPos",
    value: function initHerosSpawnPos() {
      var points = this.filterObjects("heroSpawnPoints", function (obj) {
        return obj instanceof HeroSpawnPoint;
      });
      if (points.length == 0) return;
      var firstPoint = points[0];
      this.setHerosSpawnPos(firstPoint.x, firstPoint.y);
    }
  }, {
    key: "onAddObject",
    value: function onAddObject(obj) {
      _superPropGet(StealTreasures, "onAddObject", this, 3)([obj]);
      if (obj instanceof Hero) this.hackHero(obj);
    }
  }, {
    key: "hackHero",
    value: function hackHero(hero) {
      hero.maxHealth = Infinity;
      hackMethod(hero, "onGetAttacked", 0, function (evt) {
        var oneDropped = false;
        if (hero.extras) hero.extras.forEach(function (extra) {
          if (oneDropped) return;
          if (extra instanceof Star) {
            extra.drop();
            oneDropped = true;
          }
        });
      });
      this.addObject(_StarsBar, {
        owner: hero
      });
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(StealTreasures, "update", this, 3)([]);
      this.background.update();
      this.borderManager.update();
      this.physicsManager.update();
      this.attackManager.update();
      this.hud.update();
    }
  }, {
    key: "updateStepGame",
    value: function updateStepGame() {
      _superPropGet(StealTreasures, "updateStepGame", this, 3)([]);
      this.updatePlayersScore();
      if (this.iteration > this.duration * this.game.fps) this.step = "GAMEOVER";
    }
  }, {
    key: "updatePlayersScore",
    value: function updatePlayersScore() {
      for (var playerId in this.game.players) {
        var hero = this.getHero(playerId);
        if (!hero) continue;
        var nbStars = countStarExtras(hero);
        this.incrScore(playerId, nbStars / this.game.fps);
      }
    }
  }, {
    key: "updateStepGameOver",
    value: function updateStepGameOver() {
      var scores = this.scores;
      if (!this.scoresBoard) this.scoresBoard = this.notifs.add(ScoresBoard, {
        x: this.width / 2,
        y: this.height / 2,
        scores: scores
      });
    }
  }, {
    key: "loadJoypadScene",
    value: function () {
      var _loadJoypadScene3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$import3, JoypadGameScene;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return import("/static/catalogs/std/v1/2Dside/joypad.mjs");
            case 1:
              _yield$import3 = _context3.v;
              JoypadGameScene = _yield$import3.JoypadGameScene;
              return _context3.a(2, new JoypadGameScene(this.game));
          }
        }, _callee3, this);
      }));
      function loadJoypadScene() {
        return _loadJoypadScene3.apply(this, arguments);
      }
      return loadJoypadScene;
    }()
  }, {
    key: "draw",
    value: function draw() {
      var res = _superPropGet(StealTreasures, "draw", this, 3)([]);
      var drawer = this.graphicsEngine;
      this.hud.draw(drawer);
      return res;
    }
  }, {
    key: "drawBackground",
    value: function drawBackground(drawer) {
      this.background.draw(drawer);
    }
  }]);
}(GameScene);
_StealTreasures2 = StealTreasures;
var _applyDecs$c19 = _slicedToArray(_applyDecs(_StealTreasures2, [], _classDecs19, 0, void 0, GameScene).c, 2);
_StealTreasures = _applyDecs$c19[0];
_initClass19 = _applyDecs$c19[1];
_initClass19();
export { _StealTreasures as StealTreasures };
var StarImg = new Img("/static/catalogs/std/v1/2Dside/assets/star.png");
_classDecs20 = [Dependencies.add(StarImg), OwnerableMixin.add()];
var _StarsBar;
var StarsBar = /*#__PURE__*/function (_GameObject6) {
  function StarsBar() {
    _classCallCheck(this, StarsBar);
    return _callSuper(this, StarsBar, arguments);
  }
  _inherits(StarsBar, _GameObject6);
  return _createClass(StarsBar, [{
    key: "update",
    value: function update() {
      _superPropGet(StarsBar, "update", this, 3)([]);
      var owner = this.owner;
      if (owner) {
        this.x = owner.x;
        this.y = owner.y - owner.height / 2 - 10;
      }
    }
  }, {
    key: "draw",
    value: function draw(drawer) {
      var owner = this.owner;
      if (!owner) return;
      var nbStars = countStarExtras(owner);
      var props = this._starsProps || (this._starsProps = []);
      for (var i = 0; i < nbStars; ++i) {
        if (i >= props.length) props.push(new GraphicsProps({
          img: StarImg,
          width: 10,
          height: 10
        }));
        var prop = props[i];
        prop.x = this.x + i * 5 - (nbStars - 1) * 5 / 2;
        prop.y = this.y;
        prop.draw(drawer);
      }
    }
  }]);
}(GameObject);
_StarsBar2 = StarsBar;
var _applyDecs$c21 = _slicedToArray(_applyDecs(_StarsBar2, [], _classDecs20, 0, void 0, GameObject).c, 2);
_StarsBar = _applyDecs$c21[0];
_initClass20 = _applyDecs$c21[1];
_initClass20();
function countStarExtras(hero) {
  var nbStars = 0;
  if (hero.extras) hero.extras.forEach(function (extra) {
    if (extra instanceof Star) nbStars += 1;
  });
  return nbStars;
}

// WAIGTING
_classDecs21 = [CATALOG.registerScene(CATCTX, {
  showInBuilder: false
})];
var _WaitingScene;
var WaitingScene = /*#__PURE__*/function (_SceneCommon) {
  function WaitingScene() {
    _classCallCheck(this, WaitingScene);
    return _callSuper(this, WaitingScene, arguments);
  }
  _inherits(WaitingScene, _SceneCommon);
  return _createClass(WaitingScene, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(WaitingScene, "init", this, 3)([kwargs]);
      this.backgroundColor = "black";
      this.playerObjs = new Map();
      this.initTitleText();
      this.initQrcodeImg();
    }
  }, {
    key: "initTitleText",
    value: function initTitleText() {
      var _this6 = this;
      var titleTxt = this.addNotif(Text, {
        text: "WAITING PLAYERS",
        font: "bold 50px arial",
        fillStyle: "white"
      });
      titleTxt.syncPos = function () {
        titleTxt.x = _this6.viewWidth / 2;
        titleTxt.y = _this6.viewHeight / 6;
      };
      hackMethod(titleTxt, "update", 0, function (evt) {
        return titleTxt.syncPos();
      });
      titleTxt.syncPos();
    }
  }, {
    key: "update",
    value: function update() {
      this.notifs.update();
      this.syncPlayerObjs();
      this.playerObjs.forEach(function (objs) {
        return objs.update();
      });
    }
  }, {
    key: "syncPlayerObjs",
    value: function syncPlayerObjs() {
      var playerObjs = this.playerObjs,
        viewWidth = this.viewWidth,
        viewHeight = this.viewHeight;
      var players = this.game.players;
      // add & place players
      var numPlayer = 0;
      for (var playerId in players) {
        var grp = this.initPlayerObjGroup(playerId);
        grp.x = viewWidth / 2;
        grp.y = viewHeight / 3 + numPlayer * 40;
        numPlayer += 1;
      }
      // rm removed players
      for (var _playerId in playerObjs) if (!(_playerId in players)) playerObjs.remove(_playerId);
    }
  }, {
    key: "initPlayerObjGroup",
    value: function initPlayerObjGroup(playerId) {
      var game = this.game,
        playerObjs = this.playerObjs;
      var grp = playerObjs.get(playerId);
      if (!grp) {
        grp = new GameObjectGroup(this);
        playerObjs.set(playerId, grp);
        grp.add(PlayerIcon, {
          x: 15,
          y: 15,
          playerId: playerId,
          width: 30,
          height: 30,
          strokeColor: "white"
        });
        var txt = grp.add(PlayerText, {
          y: 15,
          playerId: playerId,
          font: "bold 30px arial",
          fillStyle: "white"
        });
        txt.sync = function () {
          txt.x = 35 + txt.width / 2;
          txt.updateText(game.players[playerId]?.name ?? "");
        };
        txt.sync();
        hackMethod(txt, "update", 0, function (evt) {
          return txt.sync();
        });
      }
      return grp;
    }
  }, {
    key: "draw",
    value: function draw() {
      var can = this.canvas;
      can.width = this.viewWidth;
      can.height = this.viewHeight;
      var ctx = can.getContext("2d");
      ctx.reset();
      var drawer = this.graphicsEngine;
      this.drawBackground(drawer);
      this.notifs.draw(drawer);
      this.playerObjs.forEach(function (objs) {
        return objs.draw(drawer);
      });
      var qrcodeProps = this.getQrcodeGraphicsProps();
      if (qrcodeProps) drawer.draw(qrcodeProps);
      return can;
    }
  }, {
    key: "getQrcodeGraphicsProps",
    value: function getQrcodeGraphicsProps() {
      var qrcodeImg = this._qrcodeImg;
      if (!qrcodeImg) return null;
      var qrcodeProps = this._qrcodeGraphicsProps || (this._qrcodeGraphicsProps = new GraphicsProps({
        img: qrcodeImg,
        width: 200,
        height: 200,
        x: 150,
        y: this.viewHeight / 2
      }));
      return qrcodeProps;
    }
  }, {
    key: "initQrcodeImg",
    value: function () {
      var _initQrcodeImg = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var res, qrcodeImg, can, ctx;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              if (!IS_SERVER_ENV) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              res = this._qrcodeImg;
              if (res) {
                _context4.n = 3;
                break;
              }
              _context4.n = 2;
              return this.game.initQrcodeImg();
            case 2:
              qrcodeImg = this._qrcodeImg = _context4.v;
              can = newCanvas(ceil(qrcodeImg.width * 1.2), ceil(qrcodeImg.height * 1.2));
              ctx = can.getContext("2d");
              ctx.fillStyle = "white";
              ctx.fillRect(0, 0, can.width, can.height);
              ctx.drawImage(qrcodeImg, floor((can.width - qrcodeImg.width) / 2), floor((can.height - qrcodeImg.height) / 2));
              res = this._qrcodeImg = can;
            case 3:
              return _context4.a(2, res);
          }
        }, _callee4, this);
      }));
      function initQrcodeImg() {
        return _initQrcodeImg.apply(this, arguments);
      }
      return initQrcodeImg;
    }()
  }, {
    key: "loadJoypadScene",
    value: function () {
      var _loadJoypadScene4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _yield$import4, JoypadWaitingScene;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return import("/static/catalogs/std/v1/2Dside/joypad.mjs");
            case 1:
              _yield$import4 = _context5.v;
              JoypadWaitingScene = _yield$import4.JoypadWaitingScene;
              return _context5.a(2, new JoypadWaitingScene(this.game));
          }
        }, _callee5, this);
      }));
      function loadJoypadScene() {
        return _loadJoypadScene4.apply(this, arguments);
      }
      return loadJoypadScene;
    }()
  }]);
}(SceneCommon); // UTILS
_WaitingScene2 = WaitingScene;
var _applyDecs$c20 = _slicedToArray(_applyDecs(_WaitingScene2, [], _classDecs21, 0, void 0, SceneCommon).c, 2);
_WaitingScene = _applyDecs$c20[0];
_initClass21 = _applyDecs$c20[1];
_initClass21();
export { _WaitingScene as WaitingScene };
export var ScoresBoard = /*#__PURE__*/function (_GameObject7) {
  function ScoresBoard() {
    _classCallCheck(this, ScoresBoard);
    return _callSuper(this, ScoresBoard, arguments);
  }
  _inherits(ScoresBoard, _GameObject7);
  return _createClass(ScoresBoard, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(ScoresBoard, "init", this, 3)([kwargs]);
      this.scores = kwargs.scores;
      this.width = 300;
      this.headerHeight = 80;
      this.lineHeight = 40;
      this.height = this.headerHeight + nbKeys(this.game.players) * this.lineHeight;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      var baseImg = this._baseImg || (this._baseImg = document.createElement("canvas"));
      baseImg.width = this.width;
      baseImg.height = this.height;
      this.drawBackground(baseImg);
      this.drawScores(baseImg);
      return baseImg;
    }
  }, {
    key: "drawBackground",
    value: function drawBackground(can) {
      var width = can.width,
        height = can.height;
      var ctx = can.getContext("2d");
      ctx.fillStyle = "lightgrey";
      ctx.globalAlpha = .8;
      ctx.fillRect(0, 0, width, height);
      ctx.globalAlpha = 1;
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      ctx.strokeRect(0, 0, width, height);
    }
  }, {
    key: "drawScores",
    value: function drawScores(can) {
      var headerHeight = this.headerHeight,
        lineHeight = this.lineHeight,
        scores = this.scores;
      var width = can.width;
      var players = this.game.players;
      var ctx = can.getContext("2d");
      var fontHeight = floor(lineHeight * .7);
      var fontArgs = {
        font: "".concat(fontHeight, "px arial"),
        fillStyle: "black"
      };
      var titleCan = newTextCanvas("Scores:", _objectSpread(_objectSpread({}, fontArgs), {}, {
        font: "bold ".concat(fontHeight, "px arial")
      }));
      ctx.drawImage(titleCan, (width - titleCan.width) / 2, lineHeight / 4);
      var sortedPlayerScores = Object.keys(players).map(function (pid) {
        return [pid, scores.get(pid) ?? 0];
      }).sort(function (a, b) {
        return b[1] - a[1];
      });
      for (var i in sortedPlayerScores) {
        var _sortedPlayerScores$i = _slicedToArray(sortedPlayerScores[i], 2),
          playerId = _sortedPlayerScores$i[0],
          score = _sortedPlayerScores$i[1];
        var playerName = players[playerId].name;
        var lineCan = newTextCanvas("".concat(playerName, ": ").concat(floor(score)), fontArgs);
        ctx.drawImage(lineCan, (width - lineCan.width) / 2, headerHeight + i * lineHeight);
      }
    }
  }]);
}(GameObject);
export var CountDown = /*#__PURE__*/function (_Text2) {
  function CountDown() {
    _classCallCheck(this, CountDown);
    return _callSuper(this, CountDown, arguments);
  }
  _inherits(CountDown, _Text2);
  return _createClass(CountDown, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(CountDown, "init", this, 3)([kwargs]);
      this.duration = kwargs && kwargs.duration || 3;
      this.startIt = this.scene.iteration;
      this.syncText();
    }
  }, {
    key: "update",
    value: function update() {
      var iteration = this.scene.iteration;
      var fps = this.game.fps;
      if ((iteration - this.startIt) / fps > this.duration) this.remove();
      this.syncText();
    }
  }, {
    key: "syncText",
    value: function syncText() {
      var iteration = this.scene.iteration;
      var fps = this.game.fps;
      this.updateText(ceil(this.duration - (iteration - this.startIt) / fps));
    }
  }]);
}(Text);
