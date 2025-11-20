function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _SmokeExplosion2, _Pop2, _Class, _Hero3, _applyDecs$c2, _Extra2, _Extra3, _Weapon2, _Projectile2, _JumpMixin2, _Weapon3, _NicoHand2, _Hero4, _Nico2, _Weapon5, _Sword2, _Weapon7, _BoxingGlove2, _Extra5, _ShurikenPack2, _Projectile3, _Shuriken2, _Extra7, _Bomb2, _Explosion2, _Extra9, _JetPack2, _Enemy2, _Enemy3, _Spiky2, _Enemy5, _BlobEnemy2, _BlobEnemyBlockChecker, _Enemy7, _Ghost2, _Heart2, _Extra1, _Star2, _Checkpoint2, _Portal2, _HeroSpawnPoint2, _ObjectSpawner2, _Wall2, _Wall3, _PlatformWall2, _Wall5, _BouncingWall2, _Wall7, _GlidingWall2;
var _initClass, _classDecs, _initClass2, _classDecs2, _initClass3, _classDecs3, _Hero2, _initClass4, _classDecs4, _initClass5, _classDecs5, _initClass6, _classDecs6, _initClass7, _classDecs7, _initClass8, _classDecs8, _initClass9, _classDecs9, _initClass0, _classDecs0, _initClass1, _classDecs1, _initClass10, _classDecs10, _initClass11, _classDecs11, _initClass12, _classDecs12, _initClass13, _classDecs13, _initClass14, _classDecs14, _initClass15, _classDecs15, _initClass16, _classDecs16, _initClass17, _classDecs17, _initClass18, _classDecs18, _initClass19, _classDecs19, _initClass20, _classDecs20, _initClass21, _classDecs21, _initClass22, _classDecs22, _initClass23, _classDecs23, _initClass24, _classDecs24, _initClass25, _classDecs25, _initClass26, _classDecs26, _initClass27, _classDecs27, _initClass28, _classDecs28, _initClass29, _classDecs29;
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _identity(t) { return t; }
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
import { sign, sumTo, newCanvas, addCanvas, cloneCanvas, colorizeCanvas, newDomEl, importJs, cachedTransform, hasKeys, GraphicsProps, CATALOG, StateProperty, StateBool, StateNumber, GameObject, Category, Dependencies, LinkTrigger, LinkReaction, Mixin, BodyMixin, PhysicsMixin, AttackMixin, Img, SpriteSheet, Aud, ObjectRefs, ActivableMixin, CollectMixin, OwnerableMixin, now, hackMethod } from '../../../../core/v1/index.mjs';
var MOD_CATALOG = CATALOG.getModuleCatalog(import.meta.url, {
  version: "v1",
  perspective: "2Dside"
});
export var PuffAud = new Aud("/static/catalogs/std/v1/2Dside/assets/puff.opus");
var SmokeExplosionSpriteSheetImg = new Img("/static/catalogs/std/v1/2Dside/assets/smoke_explosion.png");
var SmokeExplosionSpriteSheet = new SpriteSheet(SmokeExplosionSpriteSheetImg, 4, 1);
_classDecs = [MOD_CATALOG.registerObject({
  showInBuilder: false
}), Dependencies.add(SmokeExplosionSpriteSheetImg, PuffAud), StateNumber.define("iteration")];
var _SmokeExplosion;
var SmokeExplosion = /*#__PURE__*/function (_GameObject) {
  function SmokeExplosion() {
    _classCallCheck(this, SmokeExplosion);
    return _callSuper(this, SmokeExplosion, arguments);
  }
  _inherits(SmokeExplosion, _GameObject);
  return _createClass(SmokeExplosion, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(SmokeExplosion, "init", this, 3)([kwargs]);
      this.width = this.height = 100;
      this.game.audio.playSound(PuffAud);
    }
  }, {
    key: "update",
    value: function update() {
      this.iteration += 1;
      var time = this.iteration * this.game.dt;
      if (time > .5) {
        this.remove();
        return;
      }
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      var time = this.iteration * this.game.dt;
      return SmokeExplosionSpriteSheet.get(floor(time / .5 * 4));
    }
  }]);
}(GameObject);
_SmokeExplosion2 = SmokeExplosion;
var _applyDecs$c = _slicedToArray(_applyDecs(_SmokeExplosion2, [], _classDecs, 0, void 0, GameObject).c, 2);
_SmokeExplosion = _applyDecs$c[0];
_initClass = _applyDecs$c[1];
_initClass();
export { _SmokeExplosion as SmokeExplosion };
var PopImg = new Img("/static/catalogs/std/v1/2Dside/assets/pop.png");
var PopAud = new Aud("/static/catalogs/std/v1/2Dside/assets/pop.opus");
_classDecs2 = [Dependencies.add(PopImg, PopAud)];
var _Pop;
var Pop = /*#__PURE__*/function (_GameObject2) {
  function Pop() {
    _classCallCheck(this, Pop);
    return _callSuper(this, Pop, arguments);
  }
  _inherits(Pop, _GameObject2);
  return _createClass(Pop, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Pop, "init", this, 3)([kwargs]);
      this.width = this.height = 10;
      this.duration = floor(this.game.fps * .25);
      this.remIt = this.duration;
    }
  }, {
    key: "update",
    value: function update() {
      if (!this._soundPlayed) {
        this.game.audio.playSound(PopAud);
        this._soundPlayed = true;
      }
      this.width = this.height = 10 + 100 * (1 - this.remIt / this.duration);
      this.remIt -= 1;
      if (this.remIt <= 0) this.remove();
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return PopImg;
    }
  }]);
}(GameObject);
_Pop2 = Pop;
var _applyDecs$c27 = _slicedToArray(_applyDecs(_Pop2, [], _classDecs2, 0, void 0, GameObject).c, 2);
_Pop = _applyDecs$c27[0];
_initClass2 = _applyDecs$c27[1];
_initClass2();
_classDecs3 = [Category.append("hero"), Dependencies.add(_SmokeExplosion, _Pop), CollectMixin.add({
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
new (_Hero2 = (_Hero3 = /*#__PURE__*/function (_GameObject3) {
  function Hero() {
    _classCallCheck(this, Hero);
    return _callSuper(this, Hero, arguments);
  }
  _inherits(Hero, _GameObject3);
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
      return this.scene.addVisual(_Pop, {
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
      this.scene.addVisual(_SmokeExplosion, {
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
}(GameObject), _applyDecs$c2 = _slicedToArray(_applyDecs(_Hero3, [], _classDecs3, 0, void 0, GameObject).c, 2), _Hero = _applyDecs$c2[0], _initClass3 = _applyDecs$c2[1], _Hero3), _Class = /*#__PURE__*/function (_identity2) {
  function _Class() {
    var _this;
    _classCallCheck(this, _Class);
    _this = _callSuper(this, _Class, [_Hero]), _defineProperty(_assertThisInitialized(_this), "IS_HERO", true), _initClass3();
    return _this;
  }
  _inherits(_Class, _identity2);
  return _createClass(_Class);
}(_identity), _defineProperty(_Class, _Hero2, void 0), _Class)();
export { _Hero as Hero };
export var ItemAud = new Aud("/static/catalogs/std/v1/2Dside/assets/item.opus");
_classDecs4 = [Category.append("extra"), Dependencies.add(ItemAud), CollectMixin.add({
  canCollect: false,
  canGetCollected: true
}), StateNumber.define("dropAge", {
  "default": Infinity,
  nullableWith: Infinity
})];
var _Extra;
var Extra = /*#__PURE__*/function (_GameObject4) {
  function Extra() {
    _classCallCheck(this, Extra);
    return _callSuper(this, Extra, arguments);
  }
  _inherits(Extra, _GameObject4);
  return _createClass(Extra, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Extra, "init", this, 3)([kwargs]);
      this.stuckToOwner = true;
      this.extraKey = null;
    }
  }, {
    key: "getPriority",
    value: function getPriority() {
      var owner = this.owner;
      if (owner) return owner.getPriority() - 1;else _superPropGet(Extra, "getPriority", this, 3)([]);
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(Extra, "update", this, 3)([]);
      var owner = this.owner;
      if (owner && this.stuckToOwner) {
        this.x = owner.x;
        this.y = owner.y;
        this.z = owner.z + 1;
      }
      this.dropAge += 1;
      if (this.dropAge > this.game.fps) this.dropAge = Infinity;
    }
  }, {
    key: "canGetCollectedByObject",
    value: function canGetCollectedByObject(obj) {
      return this.dropAge == Infinity;
    }
  }, {
    key: "onGetCollected",
    value: function onGetCollected(owner) {
      this.removeOwnerExtraWithSameKey(owner);
      owner.addExtra(this);
    }
  }, {
    key: "removeOwnerExtraWithSameKey",
    value: function removeOwnerExtraWithSameKey(owner) {
      var extraKey = this.extraKey;
      if (!this.extraKey) return;
      var extras = owner.extras;
      if (!extras) return;
      extras.forEach(function (extra2) {
        if (extra2.extraKey = extraKey) {
          extra2.drop();
          extra2.remove(); // TODO rm when infinite drop/collect solved
        }
      });
    }
  }, {
    key: "onDrop",
    value: function onDrop(owner) {
      this.dropAge = 0;
      owner.onExtraDrop(this);
    }
  }]);
}(GameObject);
_Extra2 = Extra;
var _applyDecs$c3 = _slicedToArray(_applyDecs(_Extra2, [], _classDecs4, 0, void 0, GameObject).c, 2);
_Extra = _applyDecs$c3[0];
_initClass4 = _applyDecs$c3[1];
_initClass4();
export { _Extra as Extra };
_classDecs5 = [AttackMixin.add({
  canAttack: true,
  canGetAttacked: false
})];
var _Weapon;
var Weapon = /*#__PURE__*/function (_Extra4) {
  function Weapon() {
    _classCallCheck(this, Weapon);
    return _callSuper(this, Weapon, arguments);
  }
  _inherits(Weapon, _Extra4);
  return _createClass(Weapon, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Weapon, "init", this, 3)([kwargs]);
      this.team = null;
    }
  }, {
    key: "onGetCollected",
    value: function onGetCollected(owner) {
      _superPropGet(Weapon, "onGetCollected", this, 3)([owner]);
      this.team = owner.team;
    }
  }, {
    key: "onDrop",
    value: function onDrop(owner) {
      _superPropGet(Weapon, "onDrop", this, 3)([owner]);
      this.team = null;
    }
  }, {
    key: "canAttackObject",
    value: function canAttackObject(obj) {
      var owner = this.owner;
      return owner ? obj != owner && owner.canAttackObject(obj) : true;
    }
  }, {
    key: "getAttackProps",
    value: function getAttackProps(obj) {
      var props = AttackMixin.getAttackProps.call(this, obj);
      props.attacker = this.owner ?? this;
      return props;
    }
  }]);
}(_Extra3 = _Extra);
_Weapon2 = Weapon;
var _applyDecs$c4 = _slicedToArray(_applyDecs(_Weapon2, [], _classDecs5, 0, void 0, _Extra3).c, 2);
_Weapon = _applyDecs$c4[0];
_initClass5 = _applyDecs$c4[1];
_initClass5();
export { _Weapon as Weapon };
_classDecs6 = [Category.append("projectile"), AttackMixin.add({
  canAttack: true,
  canGetAttacked: false
}), PhysicsMixin.add({
  affectedByGravity: false
}), OwnerableMixin.add()];
var _Projectile;
var Projectile = /*#__PURE__*/function (_GameObject5) {
  function Projectile() {
    _classCallCheck(this, Projectile);
    return _callSuper(this, Projectile, arguments);
  }
  _inherits(Projectile, _GameObject5);
  return _createClass(Projectile, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Projectile, "init", this, 3)([kwargs]);
      this.syncTeam();
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(Projectile, "update", this, 3)([]);
      this.syncTeam();
    }
  }, {
    key: "syncTeam",
    value: function syncTeam() {
      this.team = this.owner?.team ?? null;
    }
  }, {
    key: "canAttackObject",
    value: function canAttackObject(obj) {
      var owner = this.owner;
      return owner ? obj != owner && owner.canAttackObject(obj) : true;
    }
  }, {
    key: "getAttackProps",
    value: function getAttackProps(obj) {
      var props = AttackMixin.getAttackProps.call(this, obj);
      props.attacker = this.owner ?? this;
      return props;
    }
  }, {
    key: "onAttack",
    value: function onAttack(obj, props) {
      this.remove();
    }
  }]);
}(GameObject); // NICO
_Projectile2 = Projectile;
var _applyDecs$c5 = _slicedToArray(_applyDecs(_Projectile2, [], _classDecs6, 0, void 0, GameObject).c, 2);
_Projectile = _applyDecs$c5[0];
_initClass6 = _applyDecs$c5[1];
_initClass6();
export { _Projectile as Projectile };
_classDecs7 = [PhysicsMixin.addIfAbsent()];
var _JumpMixin;
var JumpMixin = /*#__PURE__*/function (_Mixin) {
  function JumpMixin() {
    _classCallCheck(this, JumpMixin);
    return _callSuper(this, JumpMixin, arguments);
  }
  _inherits(JumpMixin, _Mixin);
  return _createClass(JumpMixin, [{
    key: "initClass",
    value: function initClass(cls, kwargs) {
      _superPropGet(JumpMixin, "initClass", this, 3)([cls, kwargs]);
      var proto = cls.prototype;
      proto.jumpSpeed = kwargs?.jumpSpeed ?? 500;
      proto.nullJumpSpeed = kwargs?.nullJumpSpeed ?? 800;
      proto.maxJumpBlockAngle = kwargs?.maxJumpBlockAngle ?? 70;
      proto.jumpBlockLastIt = -Infinity;
      proto.jumpBlockLastAngle = -90;
      proto.canJump = false;
      proto.onGetBlocked = this.onGetBlocked;
      proto.mayJump = this.mayJump;
      proto.jump = this.jump;
    }
  }, {
    key: "onGetBlocked",
    value: function onGetBlocked(obj, details) {
      var maxJumpBlockAngle = this.maxJumpBlockAngle;
      var angle = details.angle;
      if (angle <= -90 + maxJumpBlockAngle && angle >= -90 - maxJumpBlockAngle) {
        this.jumpBlockLastIt = this.scene.iteration;
        this.jumpBlockLastAngle = angle;
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.canJump = this.jumpBlockLastIt == this.scene.iteration;
    }
  }, {
    key: "mayJump",
    value: function mayJump() {
      if (this.canJump) {
        this.jump();
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "jump",
    value: function jump() {
      var jumpSpeed = this.jumpSpeed,
        nullJumpSpeed = this.nullJumpSpeed,
        jumpBlockLastAngle = this.jumpBlockLastAngle;
      var jumpAngle = -90 - (-90 - jumpBlockLastAngle) / 2;
      //const angleJumpSpeed = jumpSpeed*sin(jumpBlockLastAngle * PI / 180)  // < 0
      if (jumpAngle != -90) {
        var jumpSpeedX = jumpSpeed * cos(jumpAngle * PI / 180);
        this.speedX += jumpSpeedX;
        this.dirX = sign(jumpSpeedX);
      }
      var jumpSpeedY = jumpSpeed * sin(jumpAngle * PI / 180); // < 0
      this.speedY += max(jumpSpeedY, min(0, jumpSpeedY * (1 + this.speedY / nullJumpSpeed)));
      this.game.audio.playSound(JumpAud);
    }
  }]);
}(Mixin);
_JumpMixin2 = JumpMixin;
var _applyDecs$c6 = _slicedToArray(_applyDecs(_JumpMixin2, [], _classDecs7, 0, void 0, Mixin).c, 2);
_JumpMixin = _applyDecs$c6[0];
_initClass7 = _applyDecs$c6[1];
_initClass7();
export { _JumpMixin as JumpMixin };
var HandImg = new Img("/static/catalogs/std/v1/2Dside/assets/hand.png");
var SlashAud = new Aud("/static/catalogs/std/v1/2Dside/assets/slash.opus");
var HandHitAud = new Aud("/static/catalogs/std/v1/2Dside/assets/hand_hit.opus");
_classDecs8 = [BodyMixin.add({
  width: 25,
  height: 25
}), Dependencies.add(HandImg, SlashAud, HandHitAud)];
var _NicoHand;
var NicoHand = /*#__PURE__*/function (_Weapon4) {
  function NicoHand() {
    _classCallCheck(this, NicoHand);
    return _callSuper(this, NicoHand, arguments);
  }
  _inherits(NicoHand, _Weapon4);
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
}(_Weapon3 = _Weapon);
_NicoHand2 = NicoHand;
var _applyDecs$c28 = _slicedToArray(_applyDecs(_NicoHand2, [], _classDecs8, 0, void 0, _Weapon3).c, 2);
_NicoHand = _applyDecs$c28[0];
_initClass8 = _applyDecs$c28[1];
_initClass8();
var ArrowsSpriteSheetImg = new Img("/static/catalogs/std/v1/2Dside/assets/arrows.png");
var ArrowsSpriteSheet = new SpriteSheet(ArrowsSpriteSheetImg, 4, 1);
var OuchAud = new Aud("/static/catalogs/std/v1/2Dside/assets/ouch.opus");
var JumpAud = new Aud("/static/catalogs/std/v1/2Dside/assets/jump.opus");
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
_classDecs9 = [MOD_CATALOG.registerObject({
  label: "Nico",
  icon: NicoImg
}), Dependencies.add(NicoBaseSpriteSheet, NicoColorableSpriteSheet, OuchAud, JumpAud, ArrowsSpriteSheetImg, _NicoHand), _JumpMixin.add({
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
      if (iteration > 0 && (this.handRemIt || !this.canJump)) return spriteSheet.get(1);else if (this.speedX == 0) return spriteSheet.get(0);else return spriteSheet.get(1 + floor(iteration * dt * 6 % 3));
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
}(_Hero4 = _Hero); // weapons
_Nico2 = Nico;
var _applyDecs$c7 = _slicedToArray(_applyDecs(_Nico2, [], _classDecs9, 0, void 0, _Hero4).c, 2);
_Nico = _applyDecs$c7[0];
_initClass9 = _applyDecs$c7[1];
_initClass9();
export { _Nico as Nico };
var SWORD_ATTACK_PERIOD = .5;
var SwordImg = new Img("/static/catalogs/std/v1/2Dside/assets/sword.png");
var SwordSlashSpriteSheet = new SpriteSheet(new Img("/static/catalogs/std/v1/2Dside/assets/slash.png"), 3, 2);
var SwordHitAud = new Aud("/static/catalogs/std/v1/2Dside/assets/sword_hit.opus");
_classDecs0 = [MOD_CATALOG.registerObject({
  label: "Sword",
  icon: SwordImg
}), Dependencies.add(SwordImg, SwordSlashSpriteSheet, SlashAud, SwordHitAud), BodyMixin.add({
  width: 40,
  height: 40
}), StateNumber.define("lastAttackAge", {
  "default": Infinity
})];
var _Sword;
var Sword = /*#__PURE__*/function (_Weapon6) {
  function Sword() {
    _classCallCheck(this, Sword);
    return _callSuper(this, Sword, arguments);
  }
  _inherits(Sword, _Weapon6);
  return _createClass(Sword, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Sword, "init", this, 3)([kwargs]);
      this.extraKey = "hands";
      this.isActionExtra = true;
      this.attackDamages = 100;
      this.attackPeriod = SWORD_ATTACK_PERIOD;
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(Sword, "update", this, 3)([]);
      this.syncPos();
      if (this.lastAttackAge == 0) this.game.audio.playSound(SlashAud);
      this.lastAttackAge += 1;
      if (this.lastAttackAge > SWORD_ATTACK_PERIOD * this.game.fps) this.lastAttackAge = Infinity;
    }
  }, {
    key: "syncPos",
    value: function syncPos() {
      var owner = this.owner;
      if (!owner) return;
      this.dirX = owner.dirX;
      this.y = owner.y;
      if (this.isAttacking()) {
        this.x = owner.x + 40 * owner.dirX;
        this.width = this.height = 60;
      } else {
        this.x = owner.x + 25 * owner.dirX;
        this.width = this.height = 40;
      }
    }
  }, {
    key: "act",
    value: function act() {
      if (this.isAttacking()) return;
      this.lastAttackAge = 0;
    }
  }, {
    key: "canAttackObject",
    value: function canAttackObject(obj) {
      if (!this.isAttacking()) return false;
      return _superPropGet(Sword, "canAttackObject", this, 3)([obj]);
    }
  }, {
    key: "onAttack",
    value: function onAttack(obj, props) {
      this.game.audio.playSound(SwordHitAud);
    }
  }, {
    key: "isAttacking",
    value: function isAttacking() {
      return this.lastAttackAge < SWORD_ATTACK_PERIOD * this.game.fps;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      var ratioSinceLastAttack = this.lastAttackAge / (SWORD_ATTACK_PERIOD * this.game.fps);
      if (ratioSinceLastAttack <= 1) {
        return SwordSlashSpriteSheet.get(floor(6 * ratioSinceLastAttack));
      } else {
        return SwordImg;
      }
    }
  }]);
}(_Weapon5 = _Weapon);
_Sword2 = Sword;
var _applyDecs$c8 = _slicedToArray(_applyDecs(_Sword2, [], _classDecs0, 0, void 0, _Weapon5).c, 2);
_Sword = _applyDecs$c8[0];
_initClass0 = _applyDecs$c8[1];
_initClass0();
export { _Sword as Sword };
var BoxingGloveImg = new Img("/static/catalogs/std/v1/2Dside/assets/boxing_glove.png");
_classDecs1 = [MOD_CATALOG.registerObject({
  label: "Boxing Glove",
  icon: BoxingGloveImg
}), BodyMixin.add({
  width: 25,
  height: 20
}), StateNumber.define("lastAttackAge", {
  "default": Infinity
})];
var _BoxingGlove;
var BoxingGlove = /*#__PURE__*/function (_Weapon8) {
  function BoxingGlove() {
    _classCallCheck(this, BoxingGlove);
    return _callSuper(this, BoxingGlove, arguments);
  }
  _inherits(BoxingGlove, _Weapon8);
  return _createClass(BoxingGlove, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(BoxingGlove, "init", this, 3)([kwargs]);
      this.extraKey = "hands";
      this.isActionExtra = true;
      this.attackDamages = 0;
      this.attackKnockback = 500;
      this.attackPeriod = .1;
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(BoxingGlove, "update", this, 3)([]);
      this.syncPos();
      if (this.lastAttackAge == 0) this.game.audio.playSound(SlashAud);
      this.lastAttackAge += 1;
      if (this.lastAttackAge > this.attackPeriod * this.game.fps) this.lastAttackAge = Infinity;
    }
  }, {
    key: "syncPos",
    value: function syncPos() {
      var owner = this.owner;
      if (!owner) return;
      this.dirX = owner.dirX;
      this.y = owner.y;
      if (this.isAttacking()) {
        this.x = owner.x + 40 * owner.dirX;
        this.width = 40;
        this.height = 32;
      } else {
        this.x = owner.x + 25 * owner.dirX;
        this.width = 25;
        this.height = 20;
      }
    }
  }, {
    key: "isAttacking",
    value: function isAttacking() {
      return this.lastAttackAge <= this.attackPeriod * this.game.fps;
    }
  }, {
    key: "act",
    value: function act() {
      if (this.isAttacking()) return;
      this.lastAttackAge = 0;
    }
  }, {
    key: "canAttackObject",
    value: function canAttackObject(obj) {
      if (!this.isAttacking()) return false;
      return _superPropGet(BoxingGlove, "canAttackObject", this, 3)([obj]);
    }
  }, {
    key: "getAttackProps",
    value: function getAttackProps(obj) {
      var props = _superPropGet(BoxingGlove, "getAttackProps", this, 3)([obj]);
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
      return BoxingGloveImg;
    }
  }]);
}(_Weapon7 = _Weapon);
_BoxingGlove2 = BoxingGlove;
var _applyDecs$c9 = _slicedToArray(_applyDecs(_BoxingGlove2, [], _classDecs1, 0, void 0, _Weapon7).c, 2);
_BoxingGlove = _applyDecs$c9[0];
_initClass1 = _applyDecs$c9[1];
_initClass1();
export { _BoxingGlove as BoxingGlove };
var ShurikenImg = new Img("/static/catalogs/std/v1/2Dside/assets/shuriken.png");
_classDecs10 = [MOD_CATALOG.registerObject({
  label: "ShurikenPack",
  icon: ShurikenImg
}), BodyMixin.add({
  width: 30,
  height: 30
}), StateNumber.define("nb", {
  "default": 10,
  nullableWith: Infinity,
  showInBuilder: true
})];
var _ShurikenPack;
var ShurikenPack = /*#__PURE__*/function (_Extra6) {
  function ShurikenPack() {
    _classCallCheck(this, ShurikenPack);
    return _callSuper(this, ShurikenPack, arguments);
  }
  _inherits(ShurikenPack, _Extra6);
  return _createClass(ShurikenPack, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(ShurikenPack, "init", this, 3)([kwargs]);
      this.extraKey = "hands";
      this.isActionExtra = true;
      this.actLastTryIt = -Infinity;
      this.actRemIt = 0;
      if (kwargs?.nb !== undefined) this.nb = kwargs.nb;
      this.throwPeriod = .3;
    }
  }, {
    key: "act",
    value: function act() {
      var prevActLastTryIt = this.actLastTryIt;
      this.actLastTryIt = this.scene.iteration;
      if (this.actLastTryIt <= prevActLastTryIt + 1 || this.actRemIt > 0) return;
      this.actRemIt = ceil(this.throwPeriod * this.game.fps);
      this.throwOneShuriken();
      this.nb -= 1;
      if (this.nb <= 0) this.remove();
    }
  }, {
    key: "throwOneShuriken",
    value: function throwOneShuriken() {
      var x = this.x,
        y = this.y,
        owner = this.owner;
      if (!owner) return;
      this.scene.addObject(_Shuriken, {
        x: x,
        y: y,
        owner: owner
      });
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(ShurikenPack, "update", this, 3)([]);
      var owner = this.owner;
      if (owner) {
        this.x = owner.x;
        this.y = owner.y;
      }
      if (this.actRemIt > 0) this.actRemIt -= 1;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return ShurikenImg;
    }
  }]);
}(_Extra5 = _Extra);
_ShurikenPack2 = ShurikenPack;
var _applyDecs$c0 = _slicedToArray(_applyDecs(_ShurikenPack2, [], _classDecs10, 0, void 0, _Extra5).c, 2);
_ShurikenPack = _applyDecs$c0[0];
_initClass10 = _applyDecs$c0[1];
_initClass10();
export { _ShurikenPack as ShurikenPack };
_classDecs11 = [MOD_CATALOG.registerObject({
  label: "Shuriken",
  icon: ShurikenImg,
  showInBuilder: false
}), BodyMixin.add({
  width: 30,
  height: 30
}), StateNumber.define("itToLive", {
  "default": null
})];
var _Shuriken;
var Shuriken = /*#__PURE__*/function (_Projectile4) {
  function Shuriken() {
    _classCallCheck(this, Shuriken);
    return _callSuper(this, Shuriken, arguments);
  }
  _inherits(Shuriken, _Projectile4);
  return _createClass(Shuriken, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Shuriken, "init", this, 3)([kwargs]);
      if (this.owner) this.dirX = this.owner.dirX;
      this.speedX = this.dirX * 500;
      this.itToLive = 2 * this.game.fps;
      this.attackDamages = 35;
      this.game.audio.playSound(SlashAud);
    }
  }, {
    key: "onGetBlocked",
    value: function onGetBlocked() {
      this.remove();
    }
  }, {
    key: "update",
    value: function update() {
      this.angle += 30;
      this.itToLive -= 1;
      if (this.itToLive <= 0) this.remove();
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return ShurikenImg;
    }
  }]);
}(_Projectile3 = _Projectile);
_Shuriken2 = Shuriken;
var _applyDecs$c1 = _slicedToArray(_applyDecs(_Shuriken2, [], _classDecs11, 0, void 0, _Projectile3).c, 2);
_Shuriken = _applyDecs$c1[0];
_initClass11 = _applyDecs$c1[1];
_initClass11();
export { _Shuriken as Shuriken };
var BombImg = new Img("/static/catalogs/std/v1/2Dside/assets/bomb.png");
var BombSpriteSheet = new SpriteSheet(new Img("/static/catalogs/std/v1/2Dside/assets/bomb_spritesheet.png"), 2, 1);
_classDecs12 = [MOD_CATALOG.registerObject({
  label: "Bomb",
  icon: BombImg
}), PhysicsMixin.add({
  affectedByGravity: false,
  physicsBounciness: .5,
  physicsStaticFriction: 100,
  physicsDynamicFriction: 2
}), BodyMixin.add({
  width: 40,
  height: 40
}), StateNumber.define("countdown", {
  "default": 2,
  precision: .5,
  showInBuilder: true
}), StateNumber.define("itToLive", {
  "default": null
})];
var _Bomb;
var Bomb = /*#__PURE__*/function (_Extra8) {
  function Bomb() {
    _classCallCheck(this, Bomb);
    return _callSuper(this, Bomb, arguments);
  }
  _inherits(Bomb, _Extra8);
  return _createClass(Bomb, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Bomb, "init", this, 3)([kwargs]);
      this.width = this.height = 40;
      this.extraKey = "hands";
      this.isActionExtra = true;
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(Bomb, "update", this, 3)([]);
      this.canBeHit = this.owner == null && this.itToLive == null;
      var dt = this.game.dt;
      var x = this.x,
        y = this.y,
        owner = this.owner;
      this.affectedByGravity = this.canGetBlocked = this.itToLive !== null;
      if (this.itToLive !== null) {
        if (this.itToLive <= 0) {
          this.scene.addObject(_Explosion, {
            x: x,
            y: y,
            owner: owner
          });
          this.remove();
        }
        this.itToLive -= 1;
      } else if (owner) {
        this.x = owner.x;
        this.y = owner.y;
      }
    }
  }, {
    key: "act",
    value: function act() {
      var owner = this.owner;
      if (!owner) return;
      this.drop();
      this.owner = owner;
      this.stuckToOwner = false;
      this.speedX = owner.dirX * 200;
      this.speedY = -500;
      this.itToLive = this.countdown * this.game.fps;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      var itToLive = this.itToLive,
        countdown = this.countdown;
      if (itToLive === null) return BombSpriteSheet.get(0);
      return BombSpriteSheet.get(floor(pow(3 * (1 - itToLive / this.game.fps / countdown), 2) * 2) % 2);
    }
  }]);
}(_Extra7 = _Extra);
_Bomb2 = Bomb;
var _applyDecs$c10 = _slicedToArray(_applyDecs(_Bomb2, [], _classDecs12, 0, void 0, _Extra7).c, 2);
_Bomb = _applyDecs$c10[0];
_initClass12 = _applyDecs$c10[1];
_initClass12();
export { _Bomb as Bomb };
var ExplosionSpriteSheet = new SpriteSheet(new Img("/static/catalogs/std/v1/2Dside/assets/explosion.png"), 4, 2);
_classDecs13 = [MOD_CATALOG.registerObject({
  showInBuilder: false
}), AttackMixin.add({
  canAttack: true,
  canGetAttacked: false,
  attackDamages: 100,
  attackPeriod: Infinity
}), OwnerableMixin.add({
  removedWithOwner: false
}), BodyMixin.add({
  width: 300,
  height: 300
}), StateNumber.define("iteration")];
var _Explosion;
var Explosion = /*#__PURE__*/function (_GameObject6) {
  function Explosion() {
    _classCallCheck(this, Explosion);
    return _callSuper(this, Explosion, arguments);
  }
  _inherits(Explosion, _GameObject6);
  return _createClass(Explosion, [{
    key: "getAttackProps",
    value: function getAttackProps(obj) {
      var props = AttackMixin.getAttackProps.call(this, obj);
      props.attacker = this.owner || this;
      return props;
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(Explosion, "update", this, 3)([]);
      var age = this.iteration / this.game.fps;
      if (age >= 1) return this.remove();
      this.iteration += 1;
    }
  }, {
    key: "getGraphicsProps",
    value: function getGraphicsProps() {
      var props = _superPropGet(Explosion, "getGraphicsProps", this, 3)([]);
      if (!props) return null;
      props.width = 500;
      props.height = 500;
      return props;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return ExplosionSpriteSheet.get(floor(this.iteration / this.game.fps * 15));
    }
  }]);
}(GameObject);
_Explosion2 = Explosion;
var _applyDecs$c11 = _slicedToArray(_applyDecs(_Explosion2, [], _classDecs13, 0, void 0, GameObject).c, 2);
_Explosion = _applyDecs$c11[0];
_initClass13 = _applyDecs$c11[1];
_initClass13();
export { _Explosion as Explosion };
var JetPackImg = new Img("/static/catalogs/std/v1/2Dside/assets/jetpack.png");
var JetPackSpriteSheet = new SpriteSheet(new Img("/static/catalogs/std/v1/2Dside/assets/jetpack_spritesheet.png"), 2, 1);
var JetPackAud = new Aud("/static/catalogs/std/v1/2Dside/assets/jetpack.opus");
_classDecs14 = [MOD_CATALOG.registerObject({
  label: "JetPack",
  icon: JetPackImg
}), BodyMixin.add({
  width: 20,
  height: 50
}), StateNumber.define("duration", {
  "default": 10,
  nullableWith: Infinity,
  showInBuilder: true
}), StateNumber.define("useIt")];
var _JetPack;
var JetPack = /*#__PURE__*/function (_Extra0) {
  function JetPack() {
    _classCallCheck(this, JetPack);
    return _callSuper(this, JetPack, arguments);
  }
  _inherits(JetPack, _Extra0);
  return _createClass(JetPack, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(JetPack, "init", this, 3)([kwargs]);
      this.acc = 1200;
      this.dec = 3000;
      this.flyLastIt = -Infinity;
      this.extraKey = "back";
    }
  }, {
    key: "onGetCollected",
    value: function onGetCollected(owner) {
      var _this2 = this;
      var dt = this.game.dt;
      _superPropGet(JetPack, "onGetCollected", this, 3)([owner]);
      hackMethod(owner, "mayJump", -1, function (evt) {
        if (_this2.owner != owner) return;
        var jumped = evt.returnValue;
        if (jumped) return;
        if (_this2.duration != Infinity) {
          if (_this2.useIt >= _this2.duration * _this2.game.fps) return;
          _this2.useIt += 1;
        }
        if (owner.speedY > 0) owner.speedY -= _this2.dec * dt;else owner.speedY -= _this2.acc * dt;
        _this2.audPrm || (_this2.audPrm = _this2.game.audio.playSound(JetPackAud, 1.0, true));
        _this2.flyLastIt = _this2.scene.iteration;
      });
    }
  }, {
    key: "isFlying",
    value: function isFlying() {
      return this.flyLastIt == this.scene.iteration;
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(JetPack, "update", this, 3)([]);
      this.syncWithOwner();
      if (!this.isFlying()) this.stopAud();
    }
  }, {
    key: "stopAud",
    value: function stopAud() {
      if (!this.audPrm) return;
      this.audPrm.then(function (aud) {
        return aud && aud.stop();
      });
      this.audPrm = null;
    }
  }, {
    key: "syncWithOwner",
    value: function syncWithOwner() {
      var owner = this.owner;
      if (!owner) return;
      this.dirX = owner.dirX;
      this.x = owner.x - owner.dirX * 15;
      this.y = owner.y + 10;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return JetPackSpriteSheet.get(this.isFlying() ? 1 : 0);
    }
  }, {
    key: "remove",
    value: function remove() {
      _superPropGet(JetPack, "remove", this, 3)([]);
      this.stopAud();
    }
  }]);
}(_Extra9 = _Extra); // ENEMIES
_JetPack2 = JetPack;
var _applyDecs$c12 = _slicedToArray(_applyDecs(_JetPack2, [], _classDecs14, 0, void 0, _Extra9).c, 2);
_JetPack = _applyDecs$c12[0];
_initClass14 = _applyDecs$c12[1];
_initClass14();
export { _JetPack as JetPack };
_classDecs15 = [AttackMixin.add({
  canAttack: false,
  canGetAttacked: true
}), Category.append("npc/enemy")];
var _Enemy;
var Enemy = /*#__PURE__*/function (_GameObject7) {
  function Enemy() {
    _classCallCheck(this, Enemy);
    return _callSuper(this, Enemy, arguments);
  }
  _inherits(Enemy, _GameObject7);
  return _createClass(Enemy, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Enemy, "init", this, 3)([kwargs]);
      this.team = "enemy";
    }
  }, {
    key: "die",
    value: function die(killer) {
      this.remove();
      var x = this.x,
        y = this.y;
      this.scene.addVisual(_SmokeExplosion, {
        x: x,
        y: y
      });
    }
  }]);
}(GameObject);
_Enemy2 = Enemy;
var _applyDecs$c13 = _slicedToArray(_applyDecs(_Enemy2, [], _classDecs15, 0, void 0, GameObject).c, 2);
_Enemy = _applyDecs$c13[0];
_initClass15 = _applyDecs$c13[1];
_initClass15();
export { _Enemy as Enemy };
var SpikyImg = new Img("/static/catalogs/std/v1/2Dside/assets/spiky.png");
_classDecs16 = [MOD_CATALOG.registerObject({
  label: "Spiky",
  icon: SpikyImg
}), Dependencies.add(SpikyImg), AttackMixin.modify({
  canAttack: true,
  maxHealth: 100,
  attackDamages: 10,
  attackKnockback: 200
}), BodyMixin.add({
  width: 45,
  height: 45
})];
var _Spiky;
var Spiky = /*#__PURE__*/function (_Enemy4) {
  function Spiky() {
    _classCallCheck(this, Spiky);
    return _callSuper(this, Spiky, arguments);
  }
  _inherits(Spiky, _Enemy4);
  return _createClass(Spiky, [{
    key: "canAttackObject",
    value: function canAttackObject(obj) {
      return obj instanceof _Hero;
    }
  }, {
    key: "getGraphicsProps",
    value: function getGraphicsProps() {
      var fps = this.game.fps,
        iteration = this.scene.iteration;
      var props = _superPropGet(Spiky, "getGraphicsProps", this, 3)([]);
      var rand = this._graphicsRand || (this._graphicsRand = floor(random() * fps));
      var angle = PI * (rand + iteration) / fps,
        cosAngle = cos(angle);
      props.y += props.height * .05 * cosAngle;
      return props;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return SpikyImg;
    }
  }]);
}(_Enemy3 = _Enemy);
_Spiky2 = Spiky;
var _applyDecs$c14 = _slicedToArray(_applyDecs(_Spiky2, [], _classDecs16, 0, void 0, _Enemy3).c, 2);
_Spiky = _applyDecs$c14[0];
_initClass16 = _applyDecs$c14[1];
_initClass16();
export { _Spiky as Spiky };
var BlobImg = new Img("/static/catalogs/std/v1/2Dside/assets/blob.png");
_classDecs17 = [MOD_CATALOG.registerObject({
  label: "Blob",
  icon: BlobImg
}), Dependencies.add(BlobImg), StateProperty.modify("dirX", {
  showInBuilder: true
}), AttackMixin.modify({
  canAttack: true,
  maxHealth: 100,
  attackDamages: 10,
  attackKnockback: 200
}), PhysicsMixin.add(), BodyMixin.add({
  width: 40,
  height: 36
}), StateNumber.define("lastChangeDirAge")];
var _BlobEnemy;
var BlobEnemy = /*#__PURE__*/function (_Enemy6) {
  function BlobEnemy() {
    _classCallCheck(this, BlobEnemy);
    return _callSuper(this, BlobEnemy, arguments);
  }
  _inherits(BlobEnemy, _Enemy6);
  return _createClass(BlobEnemy, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(BlobEnemy, "init", this, 3)([kwargs]);
      this.maxSpeed = 30;
      this.acc = 1000;
      this.physicsStaticFriction = 100;
      this.physicsDynamicFriction = 1;
      this.onFloorLastIt = -Infinity;
    }
  }, {
    key: "onGetBlocked",
    value: function onGetBlocked(obj, details) {
      var angle = details.angle;
      if (angle < 0) this.onFloorLastIt = this.scene.iteration;
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(BlobEnemy, "update", this, 3)([]);
      var dt = this.game.dt;
      this.initGetBlockedChecker();
      // move
      if (abs(this.speedX) < 10) this.mayChangeDir();
      if (this.onFloorLastIt == this.scene.iteration) this.speedX = sumTo(this.speedX, this.acc * dt, this.dirX * this.maxSpeed);
      this.lastChangeDirAge += 1;
    }
  }, {
    key: "initGetBlockedChecker",
    value: function initGetBlockedChecker() {
      this._blockChecker || (this._blockChecker = this.scene.addObject(_BlobEnemyBlockChecke, {
        owner: this
      }));
    }
  }, {
    key: "mayChangeDir",
    value: function mayChangeDir() {
      if (this.onFloorLastIt != this.scene.iteration) return;
      if (this.lastChangeDirAge < this.game.fps) return;
      this.lastChangeDirAge = 0;
      this.dirX *= -1;
      this.speedX *= -1;
    }
  }, {
    key: "canAttackObject",
    value: function canAttackObject(obj) {
      return obj instanceof _Hero;
    }
  }, {
    key: "getAttackProps",
    value: function getAttackProps(obj) {
      var props = _superPropGet(BlobEnemy, "getAttackProps", this, 3)([obj]);
      props.knockbackAngle = this.x < obj.x ? -45 : -135;
      return props;
    }
  }, {
    key: "getGraphicsProps",
    value: function getGraphicsProps() {
      var fps = this.game.fps,
        iteration = this.scene.iteration;
      var props = _superPropGet(BlobEnemy, "getGraphicsProps", this, 3)([]);
      var rand = this._graphicsRand || (this._graphicsRand = floor(random() * fps));
      var angle = 2 * PI * (rand + iteration) / fps,
        cosAngle = cos(angle),
        sinAngle = sin(angle);
      props.width = 50 * (1 + .1 * cosAngle);
      props.height = 35 * (1 + .1 * sinAngle);
      props.y -= 35 * .1 * sinAngle / 2;
      return props;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return BlobImg;
    }
  }, {
    key: "getHitBox",
    value: function getHitBox() {
      return {
        left: this.x - 10,
        width: 20,
        top: this.y - 30,
        height: 60
      };
    }
  }]);
}(_Enemy5 = _Enemy);
_BlobEnemy2 = BlobEnemy;
var _applyDecs$c15 = _slicedToArray(_applyDecs(_BlobEnemy2, [], _classDecs17, 0, void 0, _Enemy5).c, 2);
_BlobEnemy = _applyDecs$c15[0];
_initClass17 = _applyDecs$c15[1];
_initClass17();
export { _BlobEnemy as BlobEnemy };
_classDecs18 = [PhysicsMixin.add({
  canMove: false,
  checkGetBlockedAnyway: true
}), BodyMixin.add({
  width: 10,
  height: 50
})];
var _BlobEnemyBlockChecke;
var BlobEnemyBlockChecker = /*#__PURE__*/function (_GameObject8) {
  function BlobEnemyBlockChecker() {
    _classCallCheck(this, BlobEnemyBlockChecker);
    return _callSuper(this, BlobEnemyBlockChecker, arguments);
  }
  _inherits(BlobEnemyBlockChecker, _GameObject8);
  return _createClass(BlobEnemyBlockChecker, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(BlobEnemyBlockChecker, "init", this, 3)([kwargs]);
      this.owner = kwargs.owner;
      this.lastGetBlockedIteration = 0;
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(BlobEnemyBlockChecker, "update", this, 3)([]);
      var owner = this.owner;
      this.x = owner.x + owner.dirX * owner.width / 2;
      this.y = owner.y + owner.height / 2;
      if (this.lastGetBlockedIteration < this.scene.iteration) {
        owner.mayChangeDir();
      }
      if (this.owner.removed) this.remove();
    }
  }, {
    key: "onGetBlocked",
    value: function onGetBlocked(obj, details) {
      this.lastGetBlockedIteration = this.scene.iteration;
    }
  }]);
}(GameObject);
_BlobEnemyBlockChecker = BlobEnemyBlockChecker;
var _applyDecs$c29 = _slicedToArray(_applyDecs(_BlobEnemyBlockChecker, [], _classDecs18, 0, void 0, GameObject).c, 2);
_BlobEnemyBlockChecke = _applyDecs$c29[0];
_initClass18 = _applyDecs$c29[1];
_initClass18();
var GhostImg = new Img("/static/catalogs/std/v1/2Dside/assets/ghost.png");
_classDecs19 = [MOD_CATALOG.registerObject({
  label: "Ghost",
  icon: GhostImg
}), Dependencies.add(GhostImg), StateProperty.modify("dirX", {
  showInBuilder: true
}), AttackMixin.modify({
  canAttack: true,
  maxHealth: 100,
  attackDamages: 10,
  attackKnockback: 200
}), PhysicsMixin.add({
  affectedByGravity: false
}), BodyMixin.add({
  width: 45,
  height: 45
}), StateNumber.define("lastChangeDirAge")];
var _Ghost;
var Ghost = /*#__PURE__*/function (_Enemy8) {
  function Ghost() {
    _classCallCheck(this, Ghost);
    return _callSuper(this, Ghost, arguments);
  }
  _inherits(Ghost, _Enemy8);
  return _createClass(Ghost, [{
    key: "update",
    value: function update() {
      _superPropGet(Ghost, "update", this, 3)([]);
      var dt = this.game.dt;
      var width = this.scene.map.width;
      // move
      if (this.x < 0 && this.dirX < 0 || this.x > width && this.dirX > 0 || abs(this.speedX) < 10) this.mayChangeDir();
      this.speedX = sumTo(this.speedX, 1000 * dt, this.dirX * 2000 * dt);
      this.speedY = sumTo(this.speedY, 1000 * dt, 0);
      this.lastChangeDirAge += 1;
    }
  }, {
    key: "mayChangeDir",
    value: function mayChangeDir() {
      if (this.lastChangeDirAge < this.game.fps) return;
      this.lastChangeDirAge = 0;
      this.dirX *= -1;
      this.speedX *= -1;
    }
  }, {
    key: "canAttackObject",
    value: function canAttackObject(obj) {
      return obj instanceof _Hero;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return GhostImg;
    }
  }, {
    key: "getGraphicsProps",
    value: function getGraphicsProps() {
      var fps = this.game.fps,
        iteration = this.scene.iteration;
      var props = _superPropGet(Ghost, "getGraphicsProps", this, 3)([]);
      var rand = this._graphicsRand || (this._graphicsRand = floor(random() * fps));
      var angle = PI * (rand + iteration) / fps,
        cosAngle = cos(angle);
      props.y += props.height * .1 * cosAngle;
      return props;
    }
  }, {
    key: "getHitBox",
    value: function getHitBox() {
      return {
        left: this.x - 30,
        width: 60,
        top: this.y - 10,
        height: 20
      };
    }
  }]);
}(_Enemy7 = _Enemy); // COLLECTABLES
_Ghost2 = Ghost;
var _applyDecs$c16 = _slicedToArray(_applyDecs(_Ghost2, [], _classDecs19, 0, void 0, _Enemy7).c, 2);
_Ghost = _applyDecs$c16[0];
_initClass19 = _applyDecs$c16[1];
_initClass19();
export { _Ghost as Ghost };
var HeartImg = new Img("/static/catalogs/std/v1/2Dside/assets/heart.png");
_classDecs20 = [MOD_CATALOG.registerObject({
  label: "Heart",
  icon: HeartImg
}), CollectMixin.add({
  canCollect: false,
  canGetCollected: true
})];
var _Heart;
var Heart = /*#__PURE__*/function (_GameObject9) {
  function Heart() {
    _classCallCheck(this, Heart);
    return _callSuper(this, Heart, arguments);
  }
  _inherits(Heart, _GameObject9);
  return _createClass(Heart, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Heart, "init", this, 3)([kwargs]);
      this.width = this.height = 30;
    }
  }, {
    key: "canGetCollectedByObject",
    value: function canGetCollectedByObject(obj) {
      return obj instanceof _Hero;
    }
  }, {
    key: "onGetCollected",
    value: function onGetCollected(hero) {
      this.remove();
      hero.damages = 0;
    }
  }, {
    key: "getGraphicsProps",
    value: function getGraphicsProps() {
      var fps = this.game.fps,
        iteration = this.scene.iteration;
      var props = _superPropGet(Heart, "getGraphicsProps", this, 3)([]);
      var rand = this._graphicsRand || (this._graphicsRand = floor(random() * fps));
      var angle = PI * (rand + iteration) / fps,
        cosAngle = cos(angle);
      props.y += props.height * .05 * cosAngle;
      return props;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return HeartImg;
    }
  }]);
}(GameObject);
_Heart2 = Heart;
var _applyDecs$c17 = _slicedToArray(_applyDecs(_Heart2, [], _classDecs20, 0, void 0, GameObject).c, 2);
_Heart = _applyDecs$c17[0];
_initClass20 = _applyDecs$c17[1];
_initClass20();
export { _Heart as Heart };
var StarImg = new Img("/static/catalogs/std/v1/2Dside/assets/star.png");
_classDecs21 = [MOD_CATALOG.registerObject({
  label: "Star",
  icon: StarImg
}), PhysicsMixin.add({
  affectedByGravity: false,
  canGetBlocked: true,
  physicsBounciness: 1,
  physicsStaticFriction: 0,
  physicsDynamicFriction: 0
}), BodyMixin.add({
  width: 30,
  height: 30
}), StateNumber.define("speed", {
  precision: 100,
  showInBuilder: true
})];
var _Star;
var Star = /*#__PURE__*/function (_Extra10) {
  function Star() {
    _classCallCheck(this, Star);
    return _callSuper(this, Star, arguments);
  }
  _inherits(Star, _Extra10);
  return _createClass(Star, [{
    key: "update",
    value: function update() {
      _superPropGet(Star, "update", this, 3)([]);
      var speed = this.speed,
        owner = this.owner,
        speedX = this.speedX,
        speedY = this.speedY,
        scene = this.scene;
      if (owner) {
        this.speedX = this.speedY = 0;
      } else if (speed > 0) {
        if (this.speedX == 0 && this.speedY == 0) {
          // first speed
          var angle = floor(this.scene.rand("starangle") * 4) * 90 + 45;
          this.speedX = this.speed * cos(angle * PI / 180);
          this.speedY = this.speed * sin(angle * PI / 180);
        } else {
          // maintain constant speed
          var curSpd = hypot(this.speedX, this.speedY);
          this.speedX *= speed / curSpd;
          this.speedY *= speed / curSpd;
        }
      }
      // scene border
      if (speedX > 0 && this.x > scene.width) this.speedX *= -1;else if (speedX < 0 && this.x < 0) this.speedX *= -1;
      if (speedY > 0 && this.y > scene.height) this.speedY *= -1;else if (speedY < 0 && this.y < 0) this.speedY *= -1;
    }
  }, {
    key: "getGraphicsProps",
    value: function getGraphicsProps() {
      var fps = this.game.fps,
        iteration = this.scene.iteration;
      var props = _superPropGet(Star, "getGraphicsProps", this, 3)([]);
      if (!props) return null;
      var rand = this._graphicsRand || (this._graphicsRand = floor(random() * fps));
      var angle = PI * (rand + iteration) / fps,
        cosAngle = cos(angle);
      props.y += props.height * .05 * cosAngle;
      return props;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return this.owner ? null : StarImg;
    }
  }]);
}(_Extra1 = _Extra);
_Star2 = Star;
var _applyDecs$c18 = _slicedToArray(_applyDecs(_Star2, [], _classDecs21, 0, void 0, _Extra1).c, 2);
_Star = _applyDecs$c18[0];
_initClass21 = _applyDecs$c18[1];
_initClass21();
export { _Star as Star };
var CheckpointImg = new Img("/static/catalogs/std/v1/2Dside/assets/checkpoint.png");
_classDecs22 = [MOD_CATALOG.registerObject({
  label: "CheckPoint",
  icon: CheckpointImg
}), CollectMixin.add({
  canGetCollected: true
}), BodyMixin.add({
  width: 40,
  height: 40
})];
var _Checkpoint;
var Checkpoint = /*#__PURE__*/function (_GameObject0) {
  function Checkpoint() {
    _classCallCheck(this, Checkpoint);
    return _callSuper(this, Checkpoint, arguments);
  }
  _inherits(Checkpoint, _GameObject0);
  return _createClass(Checkpoint, [{
    key: "onGetCollected",
    value: function onGetCollected(hero) {
      this.remove();
      this.scene.herosSpawnX = this.x;
      this.scene.herosSpawnY = this.y;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return CheckpointImg;
    }
  }]);
}(GameObject);
_Checkpoint2 = Checkpoint;
var _applyDecs$c19 = _slicedToArray(_applyDecs(_Checkpoint2, [], _classDecs22, 0, void 0, GameObject).c, 2);
_Checkpoint = _applyDecs$c19[0];
_initClass22 = _applyDecs$c19[1];
_initClass22();
export { _Checkpoint as Checkpoint };
var PortalImg = new Img("/static/catalogs/std/v1/2Dside/assets/portal.png");
var PortalJumpAud = new Aud("/static/catalogs/std/v1/2Dside/assets/portal_jump.opus");
_classDecs23 = [MOD_CATALOG.registerObject({
  label: "Portal",
  icon: PortalImg
}), ActivableMixin.add(), StateBool.define("isOutput", {
  "default": true,
  showInBuilder: true
}), StateBool.define("isInput", {
  "default": true,
  showInBuilder: true
})];
var _Portal;
var Portal = /*#__PURE__*/function (_GameObject1) {
  function Portal() {
    _classCallCheck(this, Portal);
    return _callSuper(this, Portal, arguments);
  }
  _inherits(Portal, _GameObject1);
  return _createClass(Portal, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Portal, "init", this, 3)([kwargs]);
      this.width = this.height = 50;
    }
  }, {
    key: "update",
    value: function update() {
      var _this3 = this;
      _superPropGet(Portal, "update", this, 3)([]);
      if (this.activated && this.isInput) {
        this.scene.objects.forEach(function (obj) {
          if (hypot(obj.x - _this3.x, obj.y - _this3.y) < 30 && obj.speedX * (_this3.x - obj.x) + obj.speedY * (_this3.y - obj.y) > 0) {
            _this3.teleport(obj);
          }
        });
      }
    }
  }, {
    key: "teleport",
    value: function teleport(obj) {
      var _this4 = this;
      var scene = this.scene;
      var portals = scene.filterObjects("portals", function (obj) {
        return obj instanceof _Portal;
      });
      var candidates = portals.filter(function (port) {
        return port != _this4 && port.activated && port.isOutput;
      });
      if (candidates.length == 0) return;
      var targetPortal = candidates[floor(scene.rand("teleport") * candidates.length)];
      obj.x = targetPortal.x + (this.x - obj.x);
      obj.y = targetPortal.y + (this.y - obj.y);
      this.game.audio.playSound(PortalJumpAud);
    }
  }, {
    key: "getGraphicsProps",
    value: function getGraphicsProps() {
      var props = _superPropGet(Portal, "getGraphicsProps", this, 3)([]);
      props.visibility = this.activated ? 1 : .5;
      props.angle = this.scene.iteration;
      return props;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return PortalImg;
    }
  }]);
}(GameObject); // SPAWNER
_Portal2 = Portal;
var _applyDecs$c20 = _slicedToArray(_applyDecs(_Portal2, [], _classDecs23, 0, void 0, GameObject).c, 2);
_Portal = _applyDecs$c20[0];
_initClass23 = _applyDecs$c20[1];
_initClass23();
export { _Portal as Portal };
_classDecs24 = [MOD_CATALOG.registerObject({
  label: "Hero",
  icon: PopImg
})];
var _HeroSpawnPoint;
var HeroSpawnPoint = /*#__PURE__*/function (_GameObject10) {
  function HeroSpawnPoint() {
    _classCallCheck(this, HeroSpawnPoint);
    return _callSuper(this, HeroSpawnPoint, arguments);
  }
  _inherits(HeroSpawnPoint, _GameObject10);
  return _createClass(HeroSpawnPoint, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(HeroSpawnPoint, "init", this, 3)([kwargs]);
      this.width = this.height = 50;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return this.game.isBuilder ? PopImg : null;
    }
  }]);
}(GameObject);
_HeroSpawnPoint2 = HeroSpawnPoint;
var _applyDecs$c21 = _slicedToArray(_applyDecs(_HeroSpawnPoint2, [], _classDecs24, 0, void 0, GameObject).c, 2);
_HeroSpawnPoint = _applyDecs$c21[0];
_initClass24 = _applyDecs$c21[1];
_initClass24();
export { _HeroSpawnPoint as HeroSpawnPoint };
_classDecs25 = [MOD_CATALOG.registerObject({
  label: "ObjectSpawner",
  icon: PopImg
}), ActivableMixin.add(), BodyMixin.add({
  width: 50,
  height: 50
}), ObjectRefs.StateProperty.define("spawnedObjects"), StateNumber.define("lastSpawnAge", {
  "default": Infinity
}), StateNumber.define("nbSpawn"), StateNumber.define("prevFuther", {
  precision: 50,
  showInBuilder: true
}), StateNumber.define("maxLiving", {
  "default": 5,
  nullableWith: Infinity,
  showInBuilder: true
}), StateNumber.define("max", {
  "default": Infinity,
  nullableWith: Infinity,
  showInBuilder: true
}), StateNumber.define("period", {
  "default": 1,
  precision: .1,
  showInBuilder: true
}), GameObject.StateProperty.define("model", {
  showInBuilder: true,
  filter: {
    not: {
      or: [{
        category: "hero"
      }, {
        category: "manager"
      }, {
        category: "background"
      }, {
        category: "wall"
      }]
    }
  }
})];
var _ObjectSpawner;
var ObjectSpawner = /*#__PURE__*/function (_GameObject11) {
  function ObjectSpawner() {
    _classCallCheck(this, ObjectSpawner);
    return _callSuper(this, ObjectSpawner, arguments);
  }
  _inherits(ObjectSpawner, _GameObject11);
  return _createClass(ObjectSpawner, [{
    key: "update",
    value: function update() {
      _superPropGet(ObjectSpawner, "update", this, 3)([]);
      this.spawnedObjects.update();
      if (this.nbSpawn >= this.max && this.spawnedObjects.size == 0) this.remove();
      this.maySpawnObject();
    }
  }, {
    key: "maySpawnObject",
    value: function maySpawnObject() {
      if (!this.activated) return;
      if (this.nbSpawn >= this.max) return;
      if (this.spawnedObjects.size >= this.maxLiving) return;
      var x = this.x,
        y = this.y,
        prevFuther = this.prevFuther;
      if (prevFuther > 0) {
        var allFar = true;
        this.spawnedObjects.forEach(function (obj) {
          if (hypot(x - obj.x, y - obj.y) <= prevFuther) allFar = false;
        });
        if (!allFar) return;
      }
      this.lastSpawnAge += 1;
      if (this.lastSpawnAge < ceil(this.period * this.game.fps)) return;
      this.spawnObject();
    }
  }, {
    key: "spawnObject",
    value: function spawnObject() {
      var scene = this.scene,
        model = this.model;
      if (!model) return;
      var obj = scene.addObject(model.getKey());
      obj.setState(model.getState());
      obj.x = this.x;
      obj.y = this.y;
      this.nbSpawn += 1;
      this.spawnedObjects.add(obj.id);
      this.lastSpawnAge = 0;
      scene.addVisual(_Pop, {
        x: this.x,
        y: this.y
      });
      return obj;
    }
  }, {
    key: "draw",
    value: function draw(drawer) {
      if (!this.game.isBuilder) return;
      _superPropGet(ObjectSpawner, "draw", this, 3)([drawer]);
      var model = this.model;
      if (!model) return;
      var modelProps = model.getGraphicsProps();
      var modelProps2 = this._modelGraphicsProps || (this._modelGraphicsProps = new GraphicsProps({
        visibility: .5
      }));
      modelProps2.img = modelProps.img;
      modelProps2.x = this.x;
      modelProps2.y = this.y;
      modelProps2.width = modelProps.width;
      modelProps2.height = modelProps.height;
      modelProps2.draw(drawer);
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return PopImg;
    }
  }]);
}(GameObject); // WALL
_ObjectSpawner2 = ObjectSpawner;
var _applyDecs$c22 = _slicedToArray(_applyDecs(_ObjectSpawner2, [], _classDecs25, 0, void 0, GameObject).c, 2);
_ObjectSpawner = _applyDecs$c22[0];
_initClass25 = _applyDecs$c22[1];
_initClass25();
export { _ObjectSpawner as ObjectSpawner };
_classDecs26 = [MOD_CATALOG.registerObject({
  stateful: false
}), Category.append("wall"), PhysicsMixin.add({
  canMove: false,
  canBlock: true
})];
var _Wall;
var Wall = /*#__PURE__*/function (_GameObject12) {
  function Wall() {
    _classCallCheck(this, Wall);
    return _callSuper(this, Wall, arguments);
  }
  _inherits(Wall, _GameObject12);
  return _createClass(Wall, [{
    key: "init",
    value: function init(kwargs) {
      if (kwargs?.x1 !== undefined) this.x1 = kwargs.x1;
      if (kwargs?.y1 !== undefined) this.y1 = kwargs.y1;
      if (kwargs?.x2 !== undefined) this.x2 = kwargs.x2;
      if (kwargs?.y2 !== undefined) this.y2 = kwargs.y2;
      if (kwargs?.visibility !== undefined) this.visibility = kwargs.visibility;
      this.color = "black";
    }
  }, {
    key: "getBodyPolygon",
    value: function getBodyPolygon() {
      var pol = this.bodyPolygons || (this.bodyPolygons = []);
      pol.length = 0;
      var x1 = this.x1,
        x2 = this.x2,
        y1 = this.y1,
        y2 = this.y2;
      pol.push(x1, y1, x2, y2);
      return pol;
    }
  }, {
    key: "getGraphicsProps",
    value: function getGraphicsProps() {
      var x1 = this.x1,
        y1 = this.y1,
        x2 = this.x2,
        y2 = this.y2;
      var img = this.getBaseImg();
      var props = this._graphicsProps || (this._graphicsProps = new GraphicsProps());
      var lineWidth = 5;
      props.img = img;
      props.x = (x1 + x2) / 2;
      props.y = (y1 + y2) / 2;
      props.width = abs(x1 - x2) + 2 * lineWidth;
      props.height = abs(y1 - y2) + 2 * lineWidth;
      props.visibility = this.visibility;
      return props;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      var x1 = this.x1,
        y1 = this.y1,
        x2 = this.x2,
        y2 = this.y2;
      var baseImg = this._baseImg;
      if (baseImg && baseImg.x1 == x1 && baseImg.y1 == y1 && baseImg.x2 == x2 && baseImg.y2 == y2) return baseImg;
      var lineWidth = 5;
      baseImg = this._baseImg = newCanvas(abs(x1 - x2) + 2 * lineWidth, abs(y1 - y2) + 2 * lineWidth);
      assign(baseImg, {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      });
      var ctx = baseImg.getContext("2d");
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = this.color;
      ctx.beginPath();
      var minX = min(x1, x2),
        minY = min(y1, y2);
      ctx.moveTo(lineWidth + x1 - minX, lineWidth + y1 - minY);
      ctx.lineTo(lineWidth + x2 - minX, lineWidth + y2 - minY);
      ctx.stroke();
      return baseImg;
    }
  }, {
    key: "getState",
    value: function getState() {
      var isInitState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var state = _superPropGet(Wall, "getState", this, 3)([isInitState]);
      var x1 = this.x1,
        y1 = this.y1,
        x2 = this.x2,
        y2 = this.y2;
      assign(state, {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      });
      return state;
    }
  }, {
    key: "setState",
    value: function setState(state) {
      _superPropGet(Wall, "setState", this, 3)([state]);
      var x1 = state.x1,
        y1 = state.y1,
        x2 = state.x2,
        y2 = state.y2;
      assign(this, {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      });
    }
  }]);
}(GameObject);
_Wall2 = Wall;
var _applyDecs$c23 = _slicedToArray(_applyDecs(_Wall2, [], _classDecs26, 0, void 0, GameObject).c, 2);
_Wall = _applyDecs$c23[0];
_initClass26 = _applyDecs$c23[1];
_initClass26();
export { _Wall as Wall };
_classDecs27 = [MOD_CATALOG.registerObject({
  stateful: false
})];
var _PlatformWall;
var PlatformWall = /*#__PURE__*/function (_Wall4) {
  function PlatformWall() {
    _classCallCheck(this, PlatformWall);
    return _callSuper(this, PlatformWall, arguments);
  }
  _inherits(PlatformWall, _Wall4);
  return _createClass(PlatformWall, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(PlatformWall, "init", this, 3)([kwargs]);
      this.color = "grey";
    }
  }, {
    key: "getHitProps",
    value: function getHitProps(dt) {
      var props = _superPropGet(PlatformWall, "getHitProps", this, 3)([dt]);
      var x1 = this.x1,
        x2 = this.x2,
        y1 = this.y1,
        y2 = this.y2;
      var dx = x2 - x1,
        dy = y2 - y1,
        dd = hypot(dx, dy);
      props.uniDirX = dy / dd;
      props.uniDirY = -dx / dd;
      return props;
    }
  }]);
}(_Wall3 = _Wall);
_PlatformWall2 = PlatformWall;
var _applyDecs$c24 = _slicedToArray(_applyDecs(_PlatformWall2, [], _classDecs27, 0, void 0, _Wall3).c, 2);
_PlatformWall = _applyDecs$c24[0];
_initClass27 = _applyDecs$c24[1];
_initClass27();
export { _PlatformWall as PlatformWall };
_classDecs28 = [MOD_CATALOG.registerObject({
  stateful: false
})];
var _BouncingWall;
var BouncingWall = /*#__PURE__*/function (_Wall6) {
  function BouncingWall() {
    _classCallCheck(this, BouncingWall);
    return _callSuper(this, BouncingWall, arguments);
  }
  _inherits(BouncingWall, _Wall6);
  return _createClass(BouncingWall, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(BouncingWall, "init", this, 3)([kwargs]);
      this.color = "green";
      this.physicsBounciness = 1;
    }
  }]);
}(_Wall5 = _Wall);
_BouncingWall2 = BouncingWall;
var _applyDecs$c25 = _slicedToArray(_applyDecs(_BouncingWall2, [], _classDecs28, 0, void 0, _Wall5).c, 2);
_BouncingWall = _applyDecs$c25[0];
_initClass28 = _applyDecs$c25[1];
_initClass28();
export { _BouncingWall as BouncingWall };
_classDecs29 = [MOD_CATALOG.registerObject({
  stateful: false
})];
var _GlidingWall;
var GlidingWall = /*#__PURE__*/function (_Wall8) {
  function GlidingWall() {
    _classCallCheck(this, GlidingWall);
    return _callSuper(this, GlidingWall, arguments);
  }
  _inherits(GlidingWall, _Wall8);
  return _createClass(GlidingWall, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(GlidingWall, "init", this, 3)([kwargs]);
      this.color = "lightblue";
      this.physicsStaticFriction = 0;
      this.physicsDynamicFriction = 0;
    }
  }]);
}(_Wall7 = _Wall);
_GlidingWall2 = GlidingWall;
var _applyDecs$c26 = _slicedToArray(_applyDecs(_GlidingWall2, [], _classDecs29, 0, void 0, _Wall7).c, 2);
_GlidingWall = _applyDecs$c26[0];
_initClass29 = _applyDecs$c26[1];
_initClass29();
export { _GlidingWall as GlidingWall };
