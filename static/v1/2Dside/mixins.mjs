function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _JumpMixin2, _JumpMixinBlockChecker;
var _initClass, _classDecs, _initClass2, _classDecs2;
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
var min = Math.min,
  max = Math.max,
  cos = Math.cos,
  sin = Math.sin,
  PI = Math.PI;
import { sign, normAngle, isAngleInRange, GameObject, Dependencies, Mixin, Aud } from '../../../../core/v1/index.mjs';
import { BodyMixin, PhysicsMixin, OwnerableMixin } from '../mixins.mjs';
var JumpAud = new Aud("/static/catalogs/std/v1/2Dside/assets/jump.opus");
_classDecs = [PhysicsMixin.addIfAbsent(), Dependencies.add(JumpAud)];
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
      proto.jumpPeriod = kwargs?.jumpPeriod ?? .2;
      proto.initJumpBlockChecker = this.initJumpBlockChecker;
      proto.canJump = this.canJump;
      proto.mayJump = this.mayJump;
      proto.jump = this.jump;
      proto._jumpLastIt = -Infinity;
    }
  }, {
    key: "initJumpBlockChecker",
    value: function initJumpBlockChecker() {
      var checker = this._jumpBlockChecker || (this._jumpBlockChecker = this.scene.addObject(_JumpMixinBlockChecke, {
        owner: this
      }));
      return checker;
    }
  }, {
    key: "update",
    value: function update() {
      this.initJumpBlockChecker();
    }
  }, {
    key: "canJump",
    value: function canJump() {
      if ((this.scene.iteration - this._jumpLastIt) * this.game.dt < this.jumpPeriod) return;
      var blockAngle = this.initJumpBlockChecker().getBlockedAngle();
      if (blockAngle === null) return false;
      var maxJumpBlockAngle = this.maxJumpBlockAngle;
      return isAngleInRange(blockAngle, -90 - maxJumpBlockAngle, -90 + maxJumpBlockAngle);
    }
  }, {
    key: "mayJump",
    value: function mayJump() {
      if (this.canJump()) {
        this.jump();
        return true;
      }
      return false;
    }
  }, {
    key: "jump",
    value: function jump() {
      var jumpSpeed = this.jumpSpeed,
        nullJumpSpeed = this.nullJumpSpeed;
      var blockAngle = this.initJumpBlockChecker().getBlockedAngle();
      var jumpAngle = -90 - normAngle(-90 - blockAngle) / 2;
      if (jumpAngle != -90) {
        var jumpSpeedX = jumpSpeed * cos(jumpAngle * PI / 180);
        if (jumpSpeedX > 0) this.speedX = min(this.speedX + jumpSpeedX, jumpSpeedX);else this.speedX = max(this.speedX + jumpSpeedX, jumpSpeedX);
        this.dirX = sign(jumpSpeedX);
      }
      var jumpSpeedY = jumpSpeed * sin(jumpAngle * PI / 180); // < 0
      this.speedY += max(jumpSpeedY, min(0, jumpSpeedY * (1 + this.speedY / nullJumpSpeed)));
      this.game.audio.playSound(JumpAud);
      this._jumpLastIt = this.scene.iteration;
    }
  }]);
}(Mixin);
_JumpMixin2 = JumpMixin;
var _applyDecs$c = _slicedToArray(_applyDecs(_JumpMixin2, [], _classDecs, 0, void 0, Mixin).c, 2);
_JumpMixin = _applyDecs$c[0];
_initClass = _applyDecs$c[1];
_initClass();
export { _JumpMixin as JumpMixin };
_classDecs2 = [OwnerableMixin.add(), PhysicsMixin.add({
  canMove: false,
  checkGetBlockedAnyway: true
}), BodyMixin.add()];
var _JumpMixinBlockChecke;
var JumpMixinBlockChecker = /*#__PURE__*/function (_GameObject) {
  function JumpMixinBlockChecker() {
    _classCallCheck(this, JumpMixinBlockChecker);
    return _callSuper(this, JumpMixinBlockChecker, arguments);
  }
  _inherits(JumpMixinBlockChecker, _GameObject);
  return _createClass(JumpMixinBlockChecker, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(JumpMixinBlockChecker, "init", this, 3)([kwargs]);
      this.lastGetBlockedIteration = -Infinity;
      this.sync();
    }
  }, {
    key: "sync",
    value: function sync() {
      var owner = this.owner;
      if (!owner) return;
      this.x = owner.x;
      this.y = owner.y;
      this.width = owner.width + 2;
      this.height = owner.height + 2;
    }
  }, {
    key: "getBlockedAngle",
    value: function getBlockedAngle() {
      if (this.lastGetBlockedIteration < this.scene.iteration) return null;
      return this.lastGetBlockedAngle;
    }
  }, {
    key: "onGetBlocked",
    value: function onGetBlocked(obj, details) {
      if (obj === this.owner) return;
      this.lastGetBlockedIteration = this.scene.iteration;
      this.lastGetBlockedAngle = details.angle;
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(JumpMixinBlockChecker, "update", this, 3)([]);
      this.sync();
    }
  }]);
}(GameObject);
_JumpMixinBlockChecker = JumpMixinBlockChecker;
var _applyDecs$c2 = _slicedToArray(_applyDecs(_JumpMixinBlockChecker, [], _classDecs2, 0, void 0, GameObject).c, 2);
_JumpMixinBlockChecke = _applyDecs$c2[0];
_initClass2 = _applyDecs$c2[1];
_initClass2();
