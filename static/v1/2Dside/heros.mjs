function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _Class, _Hero3, _applyDecs$c, _NicoHand2, _Hero4, _Nico2;
var _initClass, _classDecs, _Hero2, _initClass2, _classDecs2, _initClass3, _classDecs3;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _applyDecs(e, t, r, n, o, a) { function i(e, t, r) { return function (n, o) { return r && r(n), e[t].call(n, o); }; } function c(e, t) { for (var r = 0; r < e.length; r++) e[r].call(t); return t; } function s(e, t, r, n) { if ("function" != typeof e && (n || void 0 !== e)) throw new TypeError(t + " must " + (r || "be") + " a function" + (n ? "" : " or undefined")); return e; } function applyDec(e, t, r, n, o, a, c, u, l, f, p, d, h) { function m(e) { if (!h(e)) throw new TypeError("Attempted to access private element on non-instance"); } var y, v = t[0], g = t[3], b = !u; if (!b) { r || Array.isArray(v) || (v = [v]); var w = {}, S = [], A = 3 === o ? "get" : 4 === o || d ? "set" : "value"; f ? (p || d ? w = { get: _setFunctionName(function () { return g(this); }, n, "get"), set: function set(e) { t[4](this, e); } } : w[A] = g, p || _setFunctionName(w[A], n, 2 === o ? "" : A)) : p || (w = Object.getOwnPropertyDescriptor(e, n)); } for (var P = e, j = v.length - 1; j >= 0; j -= r ? 2 : 1) { var D = v[j], E = r ? v[j - 1] : void 0, I = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o], name: n, metadata: a, addInitializer: function (e, t) { if (e.v) throw Error("attempted to call addInitializer after decoration was finished"); s(t, "An initializer", "be", !0), c.push(t); }.bind(null, I) }; try { if (b) (y = s(D.call(E, P, O), "class decorators", "return")) && (P = y);else { var k, F; O["static"] = l, O["private"] = f, f ? 2 === o ? k = function k(e) { return m(e), w.value; } : (o < 4 && (k = i(w, "get", m)), 3 !== o && (F = i(w, "set", m))) : (k = function k(e) { return e[n]; }, (o < 2 || 4 === o) && (F = function F(e, t) { e[n] = t; })); var N = O.access = { has: f ? h.bind() : function (e) { return n in e; } }; if (k && (N.get = k), F && (N.set = F), P = D.call(E, d ? { get: w.get, set: w.set } : w[A], O), d) { if ("object" == _typeof(P) && P) (y = s(P.get, "accessor.get")) && (w.get = y), (y = s(P.set, "accessor.set")) && (w.set = y), (y = s(P.init, "accessor.init")) && S.push(y);else if (void 0 !== P) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0"); } else s(P, (p ? "field" : "method") + " decorators", "return") && (p ? S.push(P) : w[A] = P); } } finally { I.v = !0; } } return (p || d) && u.push(function (e, t) { for (var r = S.length - 1; r >= 0; r--) t = S[r].call(e, t); return t; }), p || b || (f ? d ? u.push(i(w, "get"), i(w, "set")) : u.push(2 === o ? w[A] : i.call.bind(w[A])) : Object.defineProperty(e, n, w)), P; } function u(e, t) { return Object.defineProperty(e, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: !0, enumerable: !0, value: t }); } if (arguments.length >= 6) var l = a[Symbol.metadata || Symbol["for"]("Symbol.metadata")]; var f = Object.create(null == l ? null : l), p = function (e, t, r, n) { var o, a, i = [], s = function s(t) { return _checkInRHS(t) === e; }, u = new Map(); function l(e) { e && i.push(c.bind(null, e)); } for (var f = 0; f < t.length; f++) { var p = t[f]; if (Array.isArray(p)) { var d = p[1], h = p[2], m = p.length > 3, y = 16 & d, v = !!(8 & d), g = 0 == (d &= 7), b = h + "/" + v; if (!g && !m) { var w = u.get(b); if (!0 === w || 3 === w && 4 !== d || 4 === w && 3 !== d) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h); u.set(b, !(d > 2) || d); } applyDec(v ? e : e.prototype, p, y, m ? "#" + h : _toPropertyKey(h), d, n, v ? a = a || [] : o = o || [], i, v, m, g, 1 === d, v && m ? s : r); } } return l(o), l(a), i; }(e, t, o, f); return r.length || u(e, f), { e: p, get c() { var t = []; return r.length && [u(applyDec(e, [r], n, e.name, 5, f, t), f), c.bind(null, t, e)]; } }; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _setFunctionName(e, t, n) { "symbol" == _typeof(t) && (t = (t = t.description) ? "[" + t + "]" : ""); try { Object.defineProperty(e, "name", { configurable: !0, value: n ? n + " " + t : t }); } catch (e) {} return e; }
function _checkInRHS(e) { if (Object(e) !== e) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e ? _typeof(e) : "null")); return e; }
function _identity(t) { return t; }
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
import { sign, sumTo, newCanvas, addCanvas, cloneCanvas, colorizeCanvas, newDomEl, importJs, cachedTransform, hasKeys, GraphicsProps, CATALOG, StateProperty, StateBool, StateNumber, GameObject, Category, Dependencies, LinkTrigger, LinkReaction, Mixin, Img, SpriteSheet, Aud, ObjectRefs, now, hackMethod } from '../../../../core/v1/index.mjs';
import { ActivableMixin, CollectMixin, OwnerableMixin, BodyMixin, PhysicsMixin, AttackMixin, applyForce } from '../mixins.mjs';
import { JumpMixin } from './mixins.mjs';
import { SlashAud, HandHitAud, Pop, SmokeExplosion, Weapon } from './objects.mjs';
var REGISTER_COMMON_ARGS = {
  url: import.meta.url,
  version: "v1",
  perspective: "2Dside"
};
_classDecs = [Category.append("hero"), Dependencies.add(SmokeExplosion, Pop), CollectMixin.add({
  canCollect: true,
  canGetCollected: false
}), AttackMixin.add({
  canAttack: false,
  canGetAttacked: true
}), StateNumber.define("lastSpawnIt", {
  "default": -Infinity,
  nullableWith: -Infinity
})];
var _Hero;
new (_Hero2 = (_Hero3 = /*#__PURE__*/function (_GameObject) {
  function Hero() {
    _classCallCheck(this, Hero);
    return _callSuper(this, Hero, arguments);
  }
  _inherits(Hero, _GameObject);
  return _createClass(Hero, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Hero, "init", this, 3)([kwargs]);
      this.team = "hero";
      if (kwargs && kwargs.playerId !== undefined) this.setPlayerId(kwargs.playerId);
    }
  }, {
    key: "setPlayerId",
    value: function setPlayerId(playerId) {
      if (playerId === this.playerId) return;
      this.playerId = playerId;
      this.scene.syncHero(this);
    }
  }, {
    key: "isLocalHero",
    value: function isLocalHero() {
      return this === this.scene.localHero;
    }
  }, {
    key: "initExtras",
    value: function initExtras() {
      var extras = this.extras || (this.extras = new ObjectRefs(this.scene));
      return extras;
    }
  }, {
    key: "addExtra",
    value: function addExtra(extra) {
      var extras = this.initExtras();
      extras.add(extra.id);
    }
  }, {
    key: "onExtraDrop",
    value: function onExtraDrop(extra) {
      var extras = this.extras;
      if (extras) extras["delete"](extra.id);
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(Hero, "update", this, 3)([]);
      this.updateSpawnEffect();
    }
  }, {
    key: "updateSpawnEffect",
    value: function updateSpawnEffect() {
      var lastSpawnIt = this.lastSpawnIt;
      var iteration = this.scene.iteration;
      var fps = this.game.fps;
      if (lastSpawnIt + fps > iteration) {
        if (!this._spawnEnt) this._spawnEnt = this.addSpawnEffect();
      } else {
        delete this._spawnEnt;
        this.lastSpawnIt = -Infinity;
      }
    }
  }, {
    key: "addSpawnEffect",
    value: function addSpawnEffect() {
      return this.scene.addVisual(Pop, {
        x: this.x,
        y: this.y
      });
    }
  }, {
    key: "getState",
    value: function getState() {
      var state = _superPropGet(Hero, "getState", this, 3)([]);
      state.pid = this.playerId;
      state.liv = this.lives;
      var inputState = this.inputState;
      if (inputState && hasKeys(inputState)) state.ist = inputState;else delete state.ist;
      var extras = this.extras;
      if (extras && extras.size > 0) {
        var stExtras = state.extras || (state.extras = []);
        stExtras.length = 0;
        var _iterator = _createForOfIteratorHelper(extras),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var exId = _step.value;
            stExtras.push(exId);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else if (state.extras) state.extras.length = 0;
      return state;
    }
  }, {
    key: "setState",
    value: function setState(state) {
      _superPropGet(Hero, "setState", this, 3)([state]);
      this.setPlayerId(state.pid);
      this.inputState = state.ist;
      if (this.extras || state.extras) {
        var extras = this.initExtras();
        extras.clear();
        if (state.extras) {
          var _iterator2 = _createForOfIteratorHelper(state.extras),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var exId = _step2.value;
              extras.add(exId);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    }
  }, {
    key: "getInputState",
    value: function getInputState() {
      var inputState = this._inputState || (this._inputState = {});
      return inputState;
    }
  }, {
    key: "setInputState",
    value: function setInputState(inputState) {
      this.inputState = inputState;
      this.inputStateTime = now();
      this._isStateToSend = true;
    }
  }, {
    key: "initJoypadButtons",
    value: function initJoypadButtons(joypadScn) {}
  }, {
    key: "spawn",
    value: function spawn(x, y) {
      this.x = x + floor((this.scene.rand("spawn") - .5) * 50);
      this.y = y;
      this.speedX = 0;
      this.speedY = -200;
      this.lastSpawnIt = this.scene.iteration;
    }
  }, {
    key: "die",
    value: function die(killer) {
      this.remove();
      var x = this.x,
        y = this.y;
      this.scene.addVisual(SmokeExplosion, {
        x: x,
        y: y
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      _superPropGet(Hero, "remove", this, 3)([]);
      this.scene.syncHero(this);
    }
  }]);
}(GameObject), _applyDecs$c = _slicedToArray(_applyDecs(_Hero3, [], _classDecs, 0, void 0, GameObject).c, 2), _Hero = _applyDecs$c[0], _initClass = _applyDecs$c[1], _Hero3), _Class = /*#__PURE__*/function (_identity2) {
  function _Class() {
    var _this;
    _classCallCheck(this, _Class);
    _this = _callSuper(this, _Class, [_Hero]), _defineProperty(_assertThisInitialized(_this), "IS_HERO", true), _initClass();
    return _this;
  }
  _inherits(_Class, _identity2);
  return _createClass(_Class);
}(_identity), _defineProperty(_Class, _Hero2, void 0), _Class)(); // NICO
export { _Hero as Hero };
var HandImg = new Img("/static/catalogs/std/v1/2Dside/assets/hand.png");
_classDecs2 = [BodyMixin.add({
  width: 25,
  height: 25
}), Dependencies.add(HandImg, SlashAud, HandHitAud)];
var _NicoHand;
var NicoHand = /*#__PURE__*/function (_Weapon) {
  function NicoHand() {
    _classCallCheck(this, NicoHand);
    return _callSuper(this, NicoHand, arguments);
  }
  _inherits(NicoHand, _Weapon);
  return _createClass(NicoHand, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(NicoHand, "init", this, 3)([kwargs]);
      this.syncPos();
      this.attackKnockback = 200;
      this.initIt = this.scene.iteration;
      this.game.audio.playSound(SlashAud);
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(NicoHand, "update", this, 3)([]);
      this.syncPos();
      this.canAttack = this.scene.iteration == this.initIt;
    }
  }, {
    key: "syncPos",
    value: function syncPos() {
      var owner = this.owner;
      if (!owner) return;
      this.x = owner.x + owner.dirX * 28;
      this.y = owner.y;
      this.dirX = owner.dirX;
    }
  }, {
    key: "getAttackProps",
    value: function getAttackProps(obj) {
      var props = _superPropGet(NicoHand, "getAttackProps", this, 3)([obj]);
      props.knockbackAngle = this.dirX > 0 ? -45 : -135;
      return props;
    }
  }, {
    key: "onAttack",
    value: function onAttack(obj, props) {
      this.game.audio.playSound(HandHitAud);
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return HandImg;
    }
  }]);
}(Weapon);
_NicoHand2 = NicoHand;
var _applyDecs$c3 = _slicedToArray(_applyDecs(_NicoHand2, [], _classDecs2, 0, void 0, Weapon).c, 2);
_NicoHand = _applyDecs$c3[0];
_initClass2 = _applyDecs$c3[1];
_initClass2();
var ArrowsSpriteSheetImg = new Img("/static/catalogs/std/v1/2Dside/assets/arrows.png");
var ArrowsSpriteSheet = new SpriteSheet(ArrowsSpriteSheetImg, 4, 1);
var OuchAud = new Aud("/static/catalogs/std/v1/2Dside/assets/ouch.opus");
var NicoImg = new Img("/static/catalogs/std/v1/2Dside/assets/nico.png");
var NicoBaseSpriteSheet = new Img("/static/catalogs/std/v1/2Dside/assets/nico_full.png");
var NicoColorableSpriteSheet = new Img("/static/catalogs/std/v1/2Dside/assets/nico_full_colorable.png");
var NicoSpriteSheets = {
  spritesheets: {},
  get: function get(color) {
    var _this$spritesheets;
    return (_this$spritesheets = this.spritesheets)[color] || (_this$spritesheets[color] = new SpriteSheet(function () {
      if (!color) return NicoBaseSpriteSheet;
      var coloredImg = colorizeCanvas(cloneCanvas(NicoColorableSpriteSheet), color);
      return addCanvas(cloneCanvas(NicoBaseSpriteSheet), coloredImg);
    }(), 4, 1));
  }
};
_classDecs3 = [CATALOG.registerObject(_objectSpread(_objectSpread({}, REGISTER_COMMON_ARGS), {}, {
  label: "Nico",
  icon: NicoImg
})), Dependencies.add(NicoBaseSpriteSheet, NicoColorableSpriteSheet, OuchAud, ArrowsSpriteSheetImg, _NicoHand), JumpMixin.add({
  jumpSpeed: 500,
  nullJumpSpeed: 800,
  maxJumpBlockAngle: 90
}), AttackMixin.modify({
  maxHealth: 100
}), PhysicsMixin.add(), BodyMixin.add({
  width: 40,
  height: 45
}), StateNumber.define("handRemIt", {
  nullableWith: null,
  "default": null
}), StateProperty.modify("dirX", {
  showInBuilder: true
})];
var _Nico;
var Nico = /*#__PURE__*/function (_Hero5) {
  function Nico() {
    _classCallCheck(this, Nico);
    return _callSuper(this, Nico, arguments);
  }
  _inherits(Nico, _Hero5);
  return _createClass(Nico, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Nico, "init", this, 3)([kwargs]);
      this.handDur = ceil(.1 * this.game.fps);
      this.hand = null;
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(Nico, "update", this, 3)([]);
      this.applyInputState();
      this.updateHand();
    }
  }, {
    key: "updateHand",
    value: function updateHand() {
      if (this.handRemIt == this.handDur) {
        this.hand || (this.hand = this.scene.addObject(_NicoHand, {
          owner: this
        }));
      } else if (this.hand && !this.handRemIt) {
        this.hand.remove();
        this.hand = null;
      }
    }
  }, {
    key: "getGraphicsProps",
    value: function getGraphicsProps() {
      var props = _superPropGet(Nico, "getGraphicsProps", this, 3)([]);
      props.width = 50;
      props.height = 50;
      return props;
    }
  }, {
    key: "applyInputState",
    value: function applyInputState() {
      var dt = this.game.dt;
      if (this.getHealth() == 0) return;
      var inputState = this.inputState;
      if (!inputState || !inputState.walkX) {
        this.physicsStaticFriction = 500;
        this.physicsDynamicFriction = 2;
      } else if (inputState.walkX > 0) {
        this.dirX = 1;
        this.speedX = sumTo(this.speedX, 1000 * dt, 300);
        this.physicsStaticFriction = this.physicsDynamicFriction = 0;
      } else if (inputState.walkX < 0) {
        this.dirX = -1;
        this.speedX = sumTo(this.speedX, 1000 * dt, -300);
        this.physicsStaticFriction = this.physicsDynamicFriction = 0;
      }
      if (inputState && inputState.jump) this.mayJump();
      if (this.handRemIt) this.handRemIt -= 1;
      if (inputState && inputState.obj) this.act();else if (this.handRemIt === 0) this.handRemIt = null;
    }
  }, {
    key: "act",
    value: function act() {
      var actionExtra = this.getActionExtra();
      if (actionExtra) actionExtra.act();else if (this.handRemIt === null) this.handRemIt = this.handDur;
    }
  }, {
    key: "getHitBox",
    value: function getHitBox() {
      return {
        left: this.x - 20,
        width: 40,
        top: this.y - 25,
        height: 50
      };
    }
  }, {
    key: "onGetAttacked",
    value: function onGetAttacked(val, damager) {
      this.game.audio.playSound(OuchAud);
    }
  }, {
    key: "initJoypadButtons",
    value: function initJoypadButtons(joypadScn) {
      var width = joypadScn.width,
        height = joypadScn.height;
      var size = height * .45;
      joypadScn.addButton({
        inputKey: "ArrowLeft",
        x: width * .15,
        y: height * .27,
        size: size,
        icon: ArrowsSpriteSheet.get(3)
      });
      joypadScn.addButton({
        inputKey: "ArrowRight",
        x: width * .3,
        y: height * .73,
        size: size,
        icon: ArrowsSpriteSheet.get(1)
      });
      joypadScn.addButton({
        inputKey: "ArrowUp",
        x: width * .85,
        y: height * .27,
        size: size,
        icon: ArrowsSpriteSheet.get(0)
      });
      joypadScn.actionButton = joypadScn.addButton({
        inputKey: " ",
        x: width * .7,
        y: height * .73,
        size: size,
        icon: HandImg
      });
      this.syncJoypadActionButton();
    }
  }, {
    key: "syncJoypadActionButton",
    value: function syncJoypadActionButton() {
      var scenes = this.game.scenes;
      var actionButton = scenes.joypad && scenes.joypad.actionButton;
      if (!actionButton) return;
      var actionExtra = this.getActionExtra();
      actionButton.icon = actionExtra ? actionExtra.getBaseImg() : HandImg;
    }
  }, {
    key: "addExtra",
    value: function addExtra(extra) {
      _superPropGet(Nico, "addExtra", this, 3)([extra]);
      if (extra.isActionExtra) this.syncJoypadActionButton();
    }
  }, {
    key: "getActionExtra",
    value: function getActionExtra() {
      var extras = this.extras;
      if (!extras) return null;
      var actionExtra = null;
      extras.forEach(function (extra) {
        if (extra.isActionExtra) actionExtra = extra;
      });
      return actionExtra;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      var iteration = this.scene.iteration;
      var _this$game = this.game,
        dt = _this$game.dt,
        players = _this$game.players;
      var player = players && players[this.playerId];
      var color = player && player.color;
      var spriteSheet = NicoSpriteSheets.get(color);
      if (iteration > 0 && (this.handRemIt || !this.canJump())) return spriteSheet.get(1);else if (this.speedX == 0) return spriteSheet.get(0);else return spriteSheet.get(1 + floor(iteration * dt * 6 % 3));
    }
  }, {
    key: "getInputState",
    value: function getInputState() {
      var game = this.game;
      var inputState = _superPropGet(Nico, "getInputState", this, 3)([]);
      if (game.isKeyPressed("ArrowRight")) inputState.walkX = 1;else if (game.isKeyPressed("ArrowLeft")) inputState.walkX = -1;else delete inputState.walkX;
      if (game.isKeyPressed("ArrowUp")) inputState.jump = true;else delete inputState.jump;
      if (game.isKeyPressed(" ")) inputState.obj = true;else delete inputState.obj;
      return inputState;
    }
  }]);
}(_Hero4 = _Hero);
_Nico2 = Nico;
var _applyDecs$c2 = _slicedToArray(_applyDecs(_Nico2, [], _classDecs3, 0, void 0, _Hero4).c, 2);
_Nico = _applyDecs$c2[0];
_initClass3 = _applyDecs$c2[1];
_initClass3();
export { _Nico as Nico };
