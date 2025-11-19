function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _Trigger2, _Trigger3, _Button2, _Trigger5, _Clock2, _Trigger7, _Viewer2, _Trigger9, _InverterTrigger2, _Trigger1, _AggregatorTrigger2, _AggregatorTrigger3, _MinTrigger2, _AggregatorTrigger5, _MaxTrigger2, _AggregatorTrigger7, _XorTrigger2, _Trigger11, _DelayTrigger2;
var _initClass, _classDecs, _initClass2, _classDecs2, _initClass3, _classDecs3, _initClass4, _classDecs4, _initClass5, _classDecs5, _initClass6, _classDecs6, _initClass7, _classDecs7, _initClass8, _classDecs8, _initClass9, _classDecs9, _initClass0, _classDecs0;
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _applyDecs(e, t, r, n, o, a) { function i(e, t, r) { return function (n, o) { return r && r(n), e[t].call(n, o); }; } function c(e, t) { for (var r = 0; r < e.length; r++) e[r].call(t); return t; } function s(e, t, r, n) { if ("function" != typeof e && (n || void 0 !== e)) throw new TypeError(t + " must " + (r || "be") + " a function" + (n ? "" : " or undefined")); return e; } function applyDec(e, t, r, n, o, a, c, u, l, f, p, d, h) { function m(e) { if (!h(e)) throw new TypeError("Attempted to access private element on non-instance"); } var y, v = t[0], g = t[3], b = !u; if (!b) { r || Array.isArray(v) || (v = [v]); var w = {}, S = [], A = 3 === o ? "get" : 4 === o || d ? "set" : "value"; f ? (p || d ? w = { get: _setFunctionName(function () { return g(this); }, n, "get"), set: function set(e) { t[4](this, e); } } : w[A] = g, p || _setFunctionName(w[A], n, 2 === o ? "" : A)) : p || (w = Object.getOwnPropertyDescriptor(e, n)); } for (var P = e, j = v.length - 1; j >= 0; j -= r ? 2 : 1) { var D = v[j], E = r ? v[j - 1] : void 0, I = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o], name: n, metadata: a, addInitializer: function (e, t) { if (e.v) throw Error("attempted to call addInitializer after decoration was finished"); s(t, "An initializer", "be", !0), c.push(t); }.bind(null, I) }; try { if (b) (y = s(D.call(E, P, O), "class decorators", "return")) && (P = y);else { var k, F; O["static"] = l, O["private"] = f, f ? 2 === o ? k = function k(e) { return m(e), w.value; } : (o < 4 && (k = i(w, "get", m)), 3 !== o && (F = i(w, "set", m))) : (k = function k(e) { return e[n]; }, (o < 2 || 4 === o) && (F = function F(e, t) { e[n] = t; })); var N = O.access = { has: f ? h.bind() : function (e) { return n in e; } }; if (k && (N.get = k), F && (N.set = F), P = D.call(E, d ? { get: w.get, set: w.set } : w[A], O), d) { if ("object" == _typeof(P) && P) (y = s(P.get, "accessor.get")) && (w.get = y), (y = s(P.set, "accessor.set")) && (w.set = y), (y = s(P.init, "accessor.init")) && S.push(y);else if (void 0 !== P) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0"); } else s(P, (p ? "field" : "method") + " decorators", "return") && (p ? S.push(P) : w[A] = P); } } finally { I.v = !0; } } return (p || d) && u.push(function (e, t) { for (var r = S.length - 1; r >= 0; r--) t = S[r].call(e, t); return t; }), p || b || (f ? d ? u.push(i(w, "get"), i(w, "set")) : u.push(2 === o ? w[A] : i.call.bind(w[A])) : Object.defineProperty(e, n, w)), P; } function u(e, t) { return Object.defineProperty(e, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: !0, enumerable: !0, value: t }); } if (arguments.length >= 6) var l = a[Symbol.metadata || Symbol["for"]("Symbol.metadata")]; var f = Object.create(null == l ? null : l), p = function (e, t, r, n) { var o, a, i = [], s = function s(t) { return _checkInRHS(t) === e; }, u = new Map(); function l(e) { e && i.push(c.bind(null, e)); } for (var f = 0; f < t.length; f++) { var p = t[f]; if (Array.isArray(p)) { var d = p[1], h = p[2], m = p.length > 3, y = 16 & d, v = !!(8 & d), g = 0 == (d &= 7), b = h + "/" + v; if (!g && !m) { var w = u.get(b); if (!0 === w || 3 === w && 4 !== d || 4 === w && 3 !== d) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h); u.set(b, !(d > 2) || d); } applyDec(v ? e : e.prototype, p, y, m ? "#" + h : _toPropertyKey(h), d, n, v ? a = a || [] : o = o || [], i, v, m, g, 1 === d, v && m ? s : r); } } return l(o), l(a), i; }(e, t, o, f); return r.length || u(e, f), { e: p, get c() { var t = []; return r.length && [u(applyDec(e, [r], n, e.name, 5, f, t), f), c.bind(null, t, e)]; } }; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _setFunctionName(e, t, n) { "symbol" == _typeof(t) && (t = (t = t.description) ? "[" + t + "]" : ""); try { Object.defineProperty(e, "name", { configurable: !0, value: n ? n + " " + t : t }); } catch (e) {} return e; }
function _checkInRHS(e) { if (Object(e) !== e) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e ? _typeof(e) : "null")); return e; }
var assign = Object.assign;
var abs = Math.abs,
  floor = Math.floor,
  ceil = Math.ceil,
  min = Math.min,
  max = Math.max,
  pow = Math.pow,
  sqrt = Math.sqrt,
  cos = Math.cos,
  sin = Math.sin,
  atan2 = Math.atan2,
  PI = Math.PI,
  random = Math.random,
  hypot = Math.hypot;
import * as utils from '../../../../core/v1/utils.mjs';
var checkHit = utils.checkHit,
  urlAbsPath = utils.urlAbsPath,
  sumTo = utils.sumTo,
  newCanvas = utils.newCanvas,
  addCanvas = utils.addCanvas,
  cloneCanvas = utils.cloneCanvas,
  colorizeCanvas = utils.colorizeCanvas,
  newDomEl = utils.newDomEl,
  importJs = utils.importJs,
  cachedTransform = utils.cachedTransform;
import { CATALOG } from '../../../../core/v1/catalog.mjs';
import { Dependencies, GameObject, Category, StateProperty, StateBool, StateNumber, LinkTrigger, LinkReaction, BodyMixin, PhysicsMixin, AttackMixin, Img, SpriteSheet, Aud, ObjectRefs, ActivableMixin, CollectMixin, OwnerableMixin } from '../../../../core/v1/game.mjs';
var MOD_CATALOG = CATALOG.getModuleCatalog(import.meta.url, {
  version: "v1",
  perspective: "2Dside"
});
_classDecs = [LinkTrigger.add("isTriggered", {
  isDefault: true
})];
var _Trigger;
var Trigger = /*#__PURE__*/function (_GameObject) {
  function Trigger() {
    _classCallCheck(this, Trigger);
    return _callSuper(this, Trigger, arguments);
  }
  _inherits(Trigger, _GameObject);
  return _createClass(Trigger, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Trigger, "init", this, 3)([kwargs]);
      this.triggerValue = 0;
    }
  }, {
    key: "isTriggered",
    value: function isTriggered() {
      return this.triggerValue;
    }
  }]);
}(GameObject);
_Trigger2 = Trigger;
var _applyDecs$c = _slicedToArray(_applyDecs(_Trigger2, [], _classDecs, 0, void 0, GameObject).c, 2);
_Trigger = _applyDecs$c[0];
_initClass = _applyDecs$c[1];
_initClass();
export { _Trigger as Trigger };
var BurronImg = new Img("/static/catalogs/std/v1/2Dside/assets/button.png");
var ButtonSpriteSheet = new SpriteSheet(new Img("/static/catalogs/std/v1/2Dside/assets/button_spritesheet.png"), 2, 1);
_classDecs2 = [MOD_CATALOG.registerObject({
  label: "Button",
  icon: BurronImg
}), Dependencies.add(ButtonSpriteSheet), Category.append("engine/trigger"), StateNumber.define("pushAge", {
  "default": null,
  nullableWith: null
}), StateNumber.define("duration", {
  "default": Infinity,
  precision: .1,
  nullableWith: Infinity,
  showInBuilder: true
}), StateBool.define("pushed", {
  showInBuilder: true
}), AttackMixin.add({
  canAttack: false,
  canGetAttacked: true,
  maxHealth: Infinity
}), BodyMixin.add({
  width: 30,
  height: 30
})];
var _Button;
var Button = /*#__PURE__*/function (_Trigger4) {
  function Button() {
    _classCallCheck(this, Button);
    return _callSuper(this, Button, arguments);
  }
  _inherits(Button, _Trigger4);
  return _createClass(Button, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Button, "init", this, 3)([kwargs]);
      this.team = "engine";
    }
  }, {
    key: "onGetAttacked",
    value: function onGetAttacked(attacker, damage) {
      this.pushed = !this.pushed;
      if (this.pushed && this.duration != Infinity) this.pushAge = 0;else this.pushAge = null;
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(Button, "update", this, 3)([]);
      if (this.pushAge !== null) {
        this.pushAge += 1;
        if (this.pushAge > this.duration * this.game.fps) {
          this.pushAge = null;
          this.pushed = false;
        }
      }
      this.triggerValue = this.pushed ? 1 : 0;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return ButtonSpriteSheet.get(this.pushed ? 1 : 0);
    }
  }]);
}(_Trigger3 = _Trigger);
_Button2 = Button;
var _applyDecs$c2 = _slicedToArray(_applyDecs(_Button2, [], _classDecs2, 0, void 0, _Trigger3).c, 2);
_Button = _applyDecs$c2[0];
_initClass2 = _applyDecs$c2[1];
_initClass2();
export { _Button as Button };
var ClockImg = new Img("/static/catalogs/std/v1/2Dside/assets/triggers/clock.png");
_classDecs3 = [MOD_CATALOG.registerObject({
  label: "Clock",
  icon: ClockImg,
  showInBuilder: true
}), Dependencies.add(ClockImg), StateNumber.define("iteration"), StateNumber.define("triggered_period", {
  "default": 1,
  precision: .1,
  showInBuilder: true
}), StateNumber.define("untriggered_period", {
  "default": 1,
  precision: .1,
  showInBuilder: true
})];
var _Clock;
var Clock = /*#__PURE__*/function (_Trigger6) {
  function Clock() {
    _classCallCheck(this, Clock);
    return _callSuper(this, Clock, arguments);
  }
  _inherits(Clock, _Trigger6);
  return _createClass(Clock, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Clock, "init", this, 3)([kwargs]);
      this.width = this.height = 30;
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(Clock, "update", this, 3)([]);
      var fps = this.game.fps;
      var untriggered_period = this.untriggered_period,
        triggered_period = this.triggered_period;
      var full_period = untriggered_period + triggered_period;
      var it = this.iteration % (full_period * fps);
      this.triggerValue = it > untriggered_period * fps ? 1 : 0;
      this.iteration += 1;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return this.game.isBuilder ? ClockImg : null;
    }
  }]);
}(_Trigger5 = _Trigger);
_Clock2 = Clock;
var _applyDecs$c3 = _slicedToArray(_applyDecs(_Clock2, [], _classDecs3, 0, void 0, _Trigger5).c, 2);
_Clock = _applyDecs$c3[0];
_initClass3 = _applyDecs$c3[1];
_initClass3();
export { _Clock as Clock };
var WatcherImg = new Img("/static/catalogs/std/v1/2Dside/assets/triggers/watcher.png");
_classDecs4 = [MOD_CATALOG.registerObject({
  label: "Watcher",
  icon: WatcherImg,
  showInBuilder: true
}), Dependencies.add(WatcherImg), StateBool.define("watchHeros", {
  "default": true,
  showInBuilder: true
}), StateNumber.define("watchDistance", {
  "default": 100,
  precision: 50,
  showInBuilder: true
})];
var _Viewer;
var Viewer = /*#__PURE__*/function (_Trigger8) {
  function Viewer() {
    _classCallCheck(this, Viewer);
    return _callSuper(this, Viewer, arguments);
  }
  _inherits(Viewer, _Trigger8);
  return _createClass(Viewer, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Viewer, "init", this, 3)([kwargs]);
      this.width = this.height = 30;
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(Viewer, "update", this, 3)([]);
      this.triggerValue = 0;
      if (this.watchHeros) {
        var _iterator = _createForOfIteratorHelper(this.scene.filterObjects("heros", function (obj) {
            return obj instanceof Hero;
          })),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var hero = _step.value;
            if (hypot(this.x - hero.x, this.y - hero.y) <= this.watchDistance) {
              this.triggerValue = 1;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return this.game.isBuilder ? WatcherImg : null;
    }
  }]);
}(_Trigger7 = _Trigger);
_Viewer2 = Viewer;
var _applyDecs$c4 = _slicedToArray(_applyDecs(_Viewer2, [], _classDecs4, 0, void 0, _Trigger7).c, 2);
_Viewer = _applyDecs$c4[0];
_initClass4 = _applyDecs$c4[1];
_initClass4();
export { _Viewer as Viewer };
var InvertTriggerImg = new Img("/static/catalogs/std/v1/2Dside/assets/triggers/invert_trigger.png");
_classDecs5 = [MOD_CATALOG.registerObject({
  label: "Invert (NOT)",
  icon: InvertTriggerImg,
  showInBuilder: true
}), Dependencies.add(InvertTriggerImg), LinkReaction.add("reactInvert", {
  label: "Invert",
  isDefault: true
})];
var _InverterTrigger;
var InverterTrigger = /*#__PURE__*/function (_Trigger0) {
  function InverterTrigger() {
    _classCallCheck(this, InverterTrigger);
    return _callSuper(this, InverterTrigger, arguments);
  }
  _inherits(InverterTrigger, _Trigger0);
  return _createClass(InverterTrigger, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(InverterTrigger, "init", this, 3)([kwargs]);
      this.width = this.height = 30;
      this.lastMsg = {
        value: 0
      };
    }
  }, {
    key: "reactInvert",
    value: function reactInvert(msg) {
      this.lastMsg.value = msg.value;
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(InverterTrigger, "update", this, 3)([]);
      this.triggerValue = 1 - this.lastMsg.value;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return this.game.isBuilder ? InvertTriggerImg : null;
    }
  }]);
}(_Trigger9 = _Trigger);
_InverterTrigger2 = InverterTrigger;
var _applyDecs$c5 = _slicedToArray(_applyDecs(_InverterTrigger2, [], _classDecs5, 0, void 0, _Trigger9).c, 2);
_InverterTrigger = _applyDecs$c5[0];
_initClass5 = _applyDecs$c5[1];
_initClass5();
export { _InverterTrigger as InverterTrigger };
_classDecs6 = [LinkReaction.add("reactAggregate", {
  label: "aggregate",
  isDefault: true
})];
var _AggregatorTrigger;
var AggregatorTrigger = /*#__PURE__*/function (_Trigger10) {
  function AggregatorTrigger() {
    _classCallCheck(this, AggregatorTrigger);
    return _callSuper(this, AggregatorTrigger, arguments);
  }
  _inherits(AggregatorTrigger, _Trigger10);
  return _createClass(AggregatorTrigger, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(AggregatorTrigger, "init", this, 3)([kwargs]);
      this.triggerValues = {};
    }
  }, {
    key: "getInitValue",
    value: function getInitValue() {
      return 0;
    }
  }, {
    key: "aggregate",
    value: function aggregate(vals) {
      // to be defined in child class
    }
  }, {
    key: "addObjectLink",
    value: function addObjectLink(trigObj, trigKey, reactKey, threshold) {
      _superPropGet(AggregatorTrigger, "addObjectLink", this, 3)([trigObj, trigKey, reactKey, threshold]);
      var trigVals = this.triggerValues;
      if (reactKey == "reactAggregate") {
        trigVals[trigObj.id] = this.getInitValue();
      }
    }
  }, {
    key: "reactAggregate",
    value: function reactAggregate(msg) {
      this.triggerValues[msg.triggerObject.id] = msg.value;
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(AggregatorTrigger, "update", this, 3)([]);
      this.updateTriggered();
    }
  }, {
    key: "updateTriggered",
    value: function updateTriggered() {
      this.triggerValue = this.aggregate(Object.values(this.triggerValues));
    }
  }]);
}(_Trigger1 = _Trigger);
_AggregatorTrigger2 = AggregatorTrigger;
var _applyDecs$c6 = _slicedToArray(_applyDecs(_AggregatorTrigger2, [], _classDecs6, 0, void 0, _Trigger1).c, 2);
_AggregatorTrigger = _applyDecs$c6[0];
_initClass6 = _applyDecs$c6[1];
_initClass6();
export { _AggregatorTrigger as AggregatorTrigger };
var MinTriggerImg = new Img("/static/catalogs/std/v1/2Dside/assets/triggers/min_trigger.png");
_classDecs7 = [MOD_CATALOG.registerObject({
  label: "Min (AND)",
  icon: MinTriggerImg,
  showInBuilder: true
}), Dependencies.add(MinTriggerImg)];
var _MinTrigger;
var MinTrigger = /*#__PURE__*/function (_AggregatorTrigger4) {
  function MinTrigger() {
    _classCallCheck(this, MinTrigger);
    return _callSuper(this, MinTrigger, arguments);
  }
  _inherits(MinTrigger, _AggregatorTrigger4);
  return _createClass(MinTrigger, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(MinTrigger, "init", this, 3)([kwargs]);
      this.width = this.height = 30;
    }
  }, {
    key: "aggregate",
    value: function aggregate(vals) {
      return min.apply(void 0, _toConsumableArray(vals));
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return this.game.isBuilder ? MinTriggerImg : null;
    }
  }]);
}(_AggregatorTrigger3 = _AggregatorTrigger);
_MinTrigger2 = MinTrigger;
var _applyDecs$c7 = _slicedToArray(_applyDecs(_MinTrigger2, [], _classDecs7, 0, void 0, _AggregatorTrigger3).c, 2);
_MinTrigger = _applyDecs$c7[0];
_initClass7 = _applyDecs$c7[1];
_initClass7();
export { _MinTrigger as MinTrigger };
var MaxTriggerImg = new Img("/static/catalogs/std/v1/2Dside/assets/triggers/max_trigger.png");
_classDecs8 = [MOD_CATALOG.registerObject({
  label: "Max (OR)",
  icon: MaxTriggerImg,
  showInBuilder: true
}), Dependencies.add(MaxTriggerImg)];
var _MaxTrigger;
var MaxTrigger = /*#__PURE__*/function (_AggregatorTrigger6) {
  function MaxTrigger() {
    _classCallCheck(this, MaxTrigger);
    return _callSuper(this, MaxTrigger, arguments);
  }
  _inherits(MaxTrigger, _AggregatorTrigger6);
  return _createClass(MaxTrigger, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(MaxTrigger, "init", this, 3)([kwargs]);
      this.width = this.height = 30;
    }
  }, {
    key: "aggregate",
    value: function aggregate(vals) {
      return max.apply(void 0, _toConsumableArray(vals));
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return this.game.isBuilder ? MaxTriggerImg : null;
    }
  }]);
}(_AggregatorTrigger5 = _AggregatorTrigger);
_MaxTrigger2 = MaxTrigger;
var _applyDecs$c8 = _slicedToArray(_applyDecs(_MaxTrigger2, [], _classDecs8, 0, void 0, _AggregatorTrigger5).c, 2);
_MaxTrigger = _applyDecs$c8[0];
_initClass8 = _applyDecs$c8[1];
_initClass8();
export { _MaxTrigger as MaxTrigger };
var XorTriggerImg = new Img("/static/catalogs/std/v1/2Dside/assets/triggers/xor_trigger.png");
_classDecs9 = [MOD_CATALOG.registerObject({
  label: "Xor",
  icon: XorTriggerImg,
  showInBuilder: true
}), Dependencies.add(XorTriggerImg)];
var _XorTrigger;
var XorTrigger = /*#__PURE__*/function (_AggregatorTrigger8) {
  function XorTrigger() {
    _classCallCheck(this, XorTrigger);
    return _callSuper(this, XorTrigger, arguments);
  }
  _inherits(XorTrigger, _AggregatorTrigger8);
  return _createClass(XorTrigger, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(XorTrigger, "init", this, 3)([kwargs]);
      this.width = this.height = 30;
    }
  }, {
    key: "aggregate",
    value: function aggregate(vals) {
      var aggVal = 0;
      var _iterator2 = _createForOfIteratorHelper(vals),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var val = _step2.value;
          aggVal = abs(aggVal - val);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return aggVal;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return this.game.isBuilder ? XorTriggerImg : null;
    }
  }]);
}(_AggregatorTrigger7 = _AggregatorTrigger);
_XorTrigger2 = XorTrigger;
var _applyDecs$c9 = _slicedToArray(_applyDecs(_XorTrigger2, [], _classDecs9, 0, void 0, _AggregatorTrigger7).c, 2);
_XorTrigger = _applyDecs$c9[0];
_initClass9 = _applyDecs$c9[1];
_initClass9();
export { _XorTrigger as XorTrigger };
var DelayTriggerImg = new Img("/static/catalogs/std/v1/2Dside/assets/triggers/delay_trigger.png");
_classDecs0 = [MOD_CATALOG.registerObject({
  label: "Delay",
  icon: DelayTriggerImg,
  showInBuilder: true
}), Dependencies.add(DelayTriggerImg), LinkReaction.add("reactDelay", {
  label: "delay",
  isDefault: true
}), StateProperty.define(), StateNumber.define("delay", {
  "default": 0,
  precision: .1,
  showInBuilder: true
}), StateNumber.define("preserve", {
  "default": 0,
  precision: .1,
  nullableWith: Infinity,
  showInBuilder: true
})];
var _DelayTrigger;
var DelayTrigger = /*#__PURE__*/function (_Trigger12) {
  function DelayTrigger() {
    _classCallCheck(this, DelayTrigger);
    return _callSuper(this, DelayTrigger, arguments);
  }
  _inherits(DelayTrigger, _Trigger12);
  return _createClass(DelayTrigger, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(DelayTrigger, "init", this, 3)([kwargs]);
      this.width = this.height = 30;
      this.history = [];
    }
  }, {
    key: "reactDelay",
    value: function reactDelay(msg) {
      var history = this.history,
        histLen = history.length;
      var value = msg.value;
      var iteration = this.scene.iteration;
      var prevValue = histLen > 0 ? history[histLen - 1].value : null;
      if (value != prevValue) {
        history.push({
          value: value,
          firstIteration: iteration,
          lastIteration: iteration
        });
      } else {
        history[histLen - 1].lastIteration = iteration;
      }
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(DelayTrigger, "update", this, 3)([]);
      this.updateTriggered();
    }
  }, {
    key: "updateTriggered",
    value: function updateTriggered() {
      var delay = this.delay,
        preserve = this.preserve,
        history = this.history;
      var iteration = this.scene.iteration;
      var fps = this.game.fps;
      var delayIt = delay * fps,
        preserveIt = preserve * fps;
      var idxToClean = -1,
        value = 0;
      for (var idx in history) {
        var _history$idx = history[idx],
          histVal = _history$idx.value,
          histFirstIt = _history$idx.firstIteration,
          histLastIt = _history$idx.lastIteration;
        if (histLastIt + delayIt + preserveIt < iteration) {
          idxToClean = idx;
          continue;
        }
        if (histFirstIt + delayIt > iteration) break;
        value = max(value, histVal);
      }
      if (idxToClean > -1) history.splice(0, idxToClean + 1);
      this.triggerValue = value;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return this.game.isBuilder ? DelayTriggerImg : null;
    }
  }]);
}(_Trigger11 = _Trigger);
_DelayTrigger2 = DelayTrigger;
var _applyDecs$c0 = _slicedToArray(_applyDecs(_DelayTrigger2, [], _classDecs0, 0, void 0, _Trigger11).c, 2);
_DelayTrigger = _applyDecs$c0[0];
_initClass0 = _applyDecs$c0[1];
_initClass0();
export { _DelayTrigger as DelayTrigger };
