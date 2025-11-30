function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _Class, _ActivableMixin3, _applyDecs$c, _Class2, _HitMixin3, _applyDecs$c2, _Class3, _PhysicsMixin3, _applyDecs$c3, _Class4, _OwnerableMixin3, _applyDecs$c4, _AttackProps, _Class5, _AttackMixin3, _applyDecs$c5, _Class6, _CollectMixin3, _applyDecs$c6;
var _initClass, _classDecs, _ActivableMixin2, _initClass2, _classDecs2, _HitMixin2, _initClass3, _classDecs3, _PhysicsMixin2, _initClass4, _classDecs4, _OwnerableMixin2, _initClass5, _classDecs5, _AttackMixin2, _initClass6, _classDecs6, _CollectMixin2;
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
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _applyDecs(e, t, r, n, o, a) { function i(e, t, r) { return function (n, o) { return r && r(n), e[t].call(n, o); }; } function c(e, t) { for (var r = 0; r < e.length; r++) e[r].call(t); return t; } function s(e, t, r, n) { if ("function" != typeof e && (n || void 0 !== e)) throw new TypeError(t + " must " + (r || "be") + " a function" + (n ? "" : " or undefined")); return e; } function applyDec(e, t, r, n, o, a, c, u, l, f, p, d, h) { function m(e) { if (!h(e)) throw new TypeError("Attempted to access private element on non-instance"); } var y, v = t[0], g = t[3], b = !u; if (!b) { r || Array.isArray(v) || (v = [v]); var w = {}, S = [], A = 3 === o ? "get" : 4 === o || d ? "set" : "value"; f ? (p || d ? w = { get: _setFunctionName(function () { return g(this); }, n, "get"), set: function set(e) { t[4](this, e); } } : w[A] = g, p || _setFunctionName(w[A], n, 2 === o ? "" : A)) : p || (w = Object.getOwnPropertyDescriptor(e, n)); } for (var P = e, j = v.length - 1; j >= 0; j -= r ? 2 : 1) { var D = v[j], E = r ? v[j - 1] : void 0, I = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o], name: n, metadata: a, addInitializer: function (e, t) { if (e.v) throw Error("attempted to call addInitializer after decoration was finished"); s(t, "An initializer", "be", !0), c.push(t); }.bind(null, I) }; try { if (b) (y = s(D.call(E, P, O), "class decorators", "return")) && (P = y);else { var k, F; O["static"] = l, O["private"] = f, f ? 2 === o ? k = function k(e) { return m(e), w.value; } : (o < 4 && (k = i(w, "get", m)), 3 !== o && (F = i(w, "set", m))) : (k = function k(e) { return e[n]; }, (o < 2 || 4 === o) && (F = function F(e, t) { e[n] = t; })); var N = O.access = { has: f ? h.bind() : function (e) { return n in e; } }; if (k && (N.get = k), F && (N.set = F), P = D.call(E, d ? { get: w.get, set: w.set } : w[A], O), d) { if ("object" == _typeof(P) && P) (y = s(P.get, "accessor.get")) && (w.get = y), (y = s(P.set, "accessor.set")) && (w.set = y), (y = s(P.init, "accessor.init")) && S.push(y);else if (void 0 !== P) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0"); } else s(P, (p ? "field" : "method") + " decorators", "return") && (p ? S.push(P) : w[A] = P); } } finally { I.v = !0; } } return (p || d) && u.push(function (e, t) { for (var r = S.length - 1; r >= 0; r--) t = S[r].call(e, t); return t; }), p || b || (f ? d ? u.push(i(w, "get"), i(w, "set")) : u.push(2 === o ? w[A] : i.call.bind(w[A])) : Object.defineProperty(e, n, w)), P; } function u(e, t) { return Object.defineProperty(e, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: !0, enumerable: !0, value: t }); } if (arguments.length >= 6) var l = a[Symbol.metadata || Symbol["for"]("Symbol.metadata")]; var f = Object.create(null == l ? null : l), p = function (e, t, r, n) { var o, a, i = [], s = function s(t) { return _checkInRHS(t) === e; }, u = new Map(); function l(e) { e && i.push(c.bind(null, e)); } for (var f = 0; f < t.length; f++) { var p = t[f]; if (Array.isArray(p)) { var d = p[1], h = p[2], m = p.length > 3, y = 16 & d, v = !!(8 & d), g = 0 == (d &= 7), b = h + "/" + v; if (!g && !m) { var w = u.get(b); if (!0 === w || 3 === w && 4 !== d || 4 === w && 3 !== d) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h); u.set(b, !(d > 2) || d); } applyDec(v ? e : e.prototype, p, y, m ? "#" + h : _toPropertyKey(h), d, n, v ? a = a || [] : o = o || [], i, v, m, g, 1 === d, v && m ? s : r); } } return l(o), l(a), i; }(e, t, o, f); return r.length || u(e, f), { e: p, get c() { var t = []; return r.length && [u(applyDec(e, [r], n, e.name, 5, f, t), f), c.bind(null, t, e)]; } }; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _setFunctionName(e, t, n) { "symbol" == _typeof(t) && (t = (t = t.description) ? "[" + t + "]" : ""); try { Object.defineProperty(e, "name", { configurable: !0, value: n ? n + " " + t : t }); } catch (e) {} return e; }
function _checkInRHS(e) { if (Object(e) !== e) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e ? _typeof(e) : "null")); return e; }
function _identity(t) { return t; }
var values = Object.values,
  assign = Object.assign,
  getPrototypeOf = Object.getPrototypeOf;
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
import { now, sumTo, newCanvas, addCanvas, cloneCanvas, colorizeCanvas, newTextCanvas, newDomEl, addNewDomEl, importJs, hasKeys, nbKeys, StateProperty, StateBool, StateNumber, StateObjectRef, LinkReaction, Mixin } from '../../../core/v1/index.mjs';
_classDecs = [LinkReaction.add("reactToggle", {
  label: "Toggle",
  isDefault: true
}), StateBool.define("activated", {
  showInBuilder: true,
  "default": true
})];
var _ActivableMixin;
new (_ActivableMixin2 = (_ActivableMixin3 = /*#__PURE__*/function (_Mixin) {
  function ActivableMixin() {
    _classCallCheck(this, ActivableMixin);
    return _callSuper(this, ActivableMixin, arguments);
  }
  _inherits(ActivableMixin, _Mixin);
  return _createClass(ActivableMixin, [{
    key: "initClass",
    value: function initClass(cls, kwargs) {
      _superPropGet(ActivableMixin, "initClass", this, 3)([cls, kwargs]);
      var proto = cls.prototype;
      proto.origActivated = true;
      proto.reactToggle = this.reactToggle;
    }
  }, {
    key: "init",
    value: function init(kwargs) {
      _superPropGet(ActivableMixin, "init", this, 3)([kwargs]);
      this.origActivated = this.activated;
    }
  }, {
    key: "reactToggle",
    value: function reactToggle(resp) {
      this.activated = resp.value >= .5 ? !this.origActivated : this.origActivated;
    }
  }]);
}(Mixin), _applyDecs$c = _slicedToArray(_applyDecs(_ActivableMixin3, [], _classDecs, 0, void 0, Mixin).c, 2), _ActivableMixin = _applyDecs$c[0], _initClass = _applyDecs$c[1], _ActivableMixin3), _Class = /*#__PURE__*/function (_identity2) {
  function _Class() {
    var _this;
    _classCallCheck(this, _Class);
    _this = _callSuper(this, _Class, [_ActivableMixin]), _defineProperty(_assertThisInitialized(_this), "KEY", "activable"), _initClass();
    return _this;
  }
  _inherits(_Class, _identity2);
  return _createClass(_Class);
}(_identity), _defineProperty(_Class, _ActivableMixin2, void 0), _Class)();
export { _ActivableMixin as ActivableMixin };
export var BodyMixin = /*#__PURE__*/function (_Mixin2) {
  function BodyMixin() {
    _classCallCheck(this, BodyMixin);
    return _callSuper(this, BodyMixin, arguments);
  }
  _inherits(BodyMixin, _Mixin2);
  return _createClass(BodyMixin, [{
    key: "initClass",
    value: function initClass(cls, kwargs) {
      _superPropGet(BodyMixin, "initClass", this, 3)([cls, kwargs]);
      var proto = cls.prototype;
      proto.shape = kwargs?.shape ?? "box";
      proto.width = kwargs?.width ?? 50;
      proto.height = kwargs?.height ?? 50;
      proto.radius = kwargs?.radius ?? 50;
      proto.getBodyPolygon || (proto.getBodyPolygon = this.getBodyPolygon);
    }
  }, {
    key: "getBodyPolygon",
    value: function getBodyPolygon() {
      var pol = this._bodyPolygons || (this._bodyPolygons = []);
      pol.length = 0;
      if (this.shape == "box") {
        var x = this.x,
          y = this.y,
          width = this.width,
          height = this.height;
        var hWidth = width / 2,
          hHeight = height / 2;
        var xMin = x - hWidth,
          yMin = y - hHeight,
          xMax = x + hWidth,
          yMax = y + hHeight;
        pol.push(xMin, yMin, xMax, yMin, xMax, yMax, xMin, yMax);
      }
      return pol;
    }
  }]);
}(Mixin);
_defineProperty(BodyMixin, "KEY", "body");
_classDecs2 = [BodyMixin.addIfAbsent()];
var _HitMixin;
new (_HitMixin2 = (_HitMixin3 = /*#__PURE__*/function (_Mixin3) {
  function HitMixin() {
    _classCallCheck(this, HitMixin);
    return _callSuper(this, HitMixin, arguments);
  }
  _inherits(HitMixin, _Mixin3);
  return _createClass(HitMixin, [{
    key: "initClass",
    value: function initClass(cls, kwargs) {
      _superPropGet(HitMixin, "initClass", this, 3)([cls, kwargs]);
      var proto = cls.prototype;
      proto.canHitGroup || (proto.canHitGroup = function (group) {
        return false;
      });
      proto.canBeHitAsGroup || (proto.canBeHitAsGroup = function (group) {
        return false;
      });
      proto.canHitObject || (proto.canHitObject = function (obj) {
        return false;
      });
      proto.hit || (proto.hit = function (obj, details) {});
      proto.getHitProps || (proto.getHitProps = this.getHitProps);
    }
  }, {
    key: "getHitProps",
    value: function getHitProps(dt) {
      var props = this._hitProps || (this._hitProps = {});
      props.polygon = this.getBodyPolygon();
      props.dx = (this.speedX ?? 0) * dt;
      props.dy = (this.speedY ?? 0) * dt;
      props.uniDirX = props.uniDirY = null;
      return props;
    }
  }]);
}(Mixin), _applyDecs$c2 = _slicedToArray(_applyDecs(_HitMixin3, [], _classDecs2, 0, void 0, Mixin).c, 2), _HitMixin = _applyDecs$c2[0], _initClass2 = _applyDecs$c2[1], _HitMixin3), _Class2 = /*#__PURE__*/function (_identity3) {
  function _Class2() {
    var _this2;
    _classCallCheck(this, _Class2);
    _this2 = _callSuper(this, _Class2, [_HitMixin]), _defineProperty(_assertThisInitialized(_this2), "KEY", "hit"), _initClass2();
    return _this2;
  }
  _inherits(_Class2, _identity3);
  return _createClass(_Class2);
}(_identity), _defineProperty(_Class2, _HitMixin2, void 0), _Class2)();
export { _HitMixin as HitMixin };
_classDecs3 = [StateNumber.define("speedY"), StateNumber.define("speedX"), _HitMixin.addIfAbsent(), BodyMixin.addIfAbsent()];
var _PhysicsMixin;
new (_PhysicsMixin2 = (_PhysicsMixin3 = /*#__PURE__*/function (_Mixin4) {
  function PhysicsMixin() {
    _classCallCheck(this, PhysicsMixin);
    return _callSuper(this, PhysicsMixin, arguments);
  }
  _inherits(PhysicsMixin, _Mixin4);
  return _createClass(PhysicsMixin, [{
    key: "initClass",
    value: function initClass(cls, kwargs) {
      _superPropGet(PhysicsMixin, "initClass", this, 3)([cls, kwargs]);
      var proto = cls.prototype;
      proto.canMove = kwargs?.canMove ?? true;
      proto.affectedByGravity = kwargs?.affectedByGravity ?? proto.canMove;
      proto.canBlock = kwargs?.canBlock ?? false;
      proto.canGetBlocked = kwargs?.canGetBlocked ?? proto.canMove;
      proto.checkBlockAnyway = kwargs?.checkBlockAnyway ?? false;
      proto.checkGetBlockedAnyway = kwargs?.checkGetBlockedAnyway ?? false;
      proto.physicsBounciness = kwargs?.physicsBounciness ?? 0;
      proto.physicsStaticFriction = kwargs?.physicsStaticFriction ?? Infinity;
      proto.physicsDynamicFriction = kwargs?.physicsDynamicFriction ?? Infinity;
      proto.onBlock || (proto.onBlock = function (obj, details) {});
      proto.onGetBlocked || (proto.onGetBlocked = function (obj, details) {});
      var origCanHitGroup = proto.canHitGroup;
      proto.canHitGroup = function (group) {
        if (group == "physics" && (this.canBlock || this.checkBlockAnyway)) return true;
        return origCanHitGroup.call(this, group);
      };
      var origCanBeHitAsGroup = proto.canBeHitAsGroup;
      proto.canBeHitAsGroup = function (group) {
        if (group == "physics" && (this.canGetBlocked || this.checkGetBlockedAnyway)) return true;
        return origCanBeHitAsGroup.call(this, group);
      };
      proto.canReallyBlockObject = function (obj) {
        return (this.canBlock || this.checkBlockAnyway) && (obj.canGetBlocked || obj.checkGetBlockedAnyway) && !(this.canBlock && obj.canGetBlocked) // in this case the check is already done by physics engine
        ;
      };
      var origCanHitObject = proto.canHitObject;
      proto.canHitObject = function (obj) {
        return this.canReallyBlockObject(obj) || origCanHitObject.call(this, obj);
      };
      var origHit = proto.hit;
      proto.hit = function (obj, details) {
        origHit.call(this, obj, details);
        if ((this.canBlock || this.checkBlockAnyway) && obj.canGetBlocked) this.onBlock(obj, details);
        if ((obj.canGetBlocked || obj.checkGetBlockedAnyway) && this.canBlock) obj.onGetBlocked(this, details);
      };
    }
  }, {
    key: "init",
    value: function init(kwargs) {
      _superPropGet(PhysicsMixin, "init", this, 3)([kwargs]);
      if (kwargs?.speedX !== undefined) this.speedX = kwargs.speedX;
      if (kwargs?.speedY !== undefined) this.speedY = kwargs.speedY;
    }
  }, {
    key: "update",
    value: function update() {
      // done by physics engine
    }
  }]);
}(Mixin), _applyDecs$c3 = _slicedToArray(_applyDecs(_PhysicsMixin3, [], _classDecs3, 0, void 0, Mixin).c, 2), _PhysicsMixin = _applyDecs$c3[0], _initClass3 = _applyDecs$c3[1], _PhysicsMixin3), _Class3 = /*#__PURE__*/function (_identity4) {
  function _Class3() {
    var _this3;
    _classCallCheck(this, _Class3);
    _this3 = _callSuper(this, _Class3, [_PhysicsMixin]), _defineProperty(_assertThisInitialized(_this3), "KEY", "physics"), _initClass3();
    return _this3;
  }
  _inherits(_Class3, _identity4);
  return _createClass(_Class3);
}(_identity), _defineProperty(_Class3, _PhysicsMixin2, void 0), _Class3)();
export { _PhysicsMixin as PhysicsMixin };
_classDecs4 = [StateObjectRef.define("owner")];
var _OwnerableMixin;
new (_OwnerableMixin2 = (_OwnerableMixin3 = /*#__PURE__*/function (_Mixin5) {
  function OwnerableMixin() {
    _classCallCheck(this, OwnerableMixin);
    return _callSuper(this, OwnerableMixin, arguments);
  }
  _inherits(OwnerableMixin, _Mixin5);
  return _createClass(OwnerableMixin, [{
    key: "initClass",
    value: function initClass(cls, kwargs) {
      _superPropGet(OwnerableMixin, "initClass", this, 3)([cls, kwargs]);
      var proto = cls.prototype;
      proto.removedWithOwner = kwargs?.removedWithOwner ?? true;
    }
  }, {
    key: "init",
    value: function init(kwargs) {
      _superPropGet(OwnerableMixin, "init", this, 3)([kwargs]);
      this.owner = kwargs?.owner ?? null;
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(OwnerableMixin, "update", this, 3)([]);
      var owner = this.owner;
      if (owner && owner.removed) {
        this.owner = null;
        if (this.removedWithOwner) this.remove();
      }
    }
  }]);
}(Mixin), _applyDecs$c4 = _slicedToArray(_applyDecs(_OwnerableMixin3, [], _classDecs4, 0, void 0, Mixin).c, 2), _OwnerableMixin = _applyDecs$c4[0], _initClass4 = _applyDecs$c4[1], _OwnerableMixin3), _Class4 = /*#__PURE__*/function (_identity5) {
  function _Class4() {
    var _this4;
    _classCallCheck(this, _Class4);
    _this4 = _callSuper(this, _Class4, [_OwnerableMixin]), _defineProperty(_assertThisInitialized(_this4), "KEY", "ownerable"), _initClass4();
    return _this4;
  }
  _inherits(_Class4, _identity5);
  return _createClass(_Class4);
}(_identity), _defineProperty(_Class4, _OwnerableMixin2, void 0), _Class4)();
export { _OwnerableMixin as OwnerableMixin };
var AttackProps = /*#__PURE__*/_createClass(function AttackProps(attacker, kwargs) {
  _classCallCheck(this, AttackProps);
  this.attacker = attacker;
  assign(this, kwargs);
});
_AttackProps = AttackProps;
assign(_AttackProps.prototype, {
  damages: 0,
  knockback: 0,
  knockbackAngle: 0
});
_classDecs5 = [_HitMixin.addIfAbsent(), StateNumber.define("damages"), StateProperty.define("attackAges")];
var _AttackMixin;
new (_AttackMixin2 = (_AttackMixin3 = /*#__PURE__*/function (_Mixin6) {
  function AttackMixin() {
    _classCallCheck(this, AttackMixin);
    return _callSuper(this, AttackMixin, arguments);
  }
  _inherits(AttackMixin, _Mixin6);
  return _createClass(AttackMixin, [{
    key: "initClass",
    value: function initClass(cls, kwargs) {
      _superPropGet(AttackMixin, "initClass", this, 3)([cls, kwargs]);
      var proto = cls.prototype;
      proto.canAttack = kwargs?.canAttack ?? true;
      proto.canGetAttacked = kwargs?.canGetAttacked ?? true;
      proto.maxHealth = kwargs?.maxHealth ?? 100;
      proto.attackDamages = kwargs?.attackDamages ?? 0;
      proto.attackKnockback = kwargs?.attackKnockback ?? 0;
      proto.attackPeriod = kwargs?.attackPeriod ?? 1;
      proto.getDamagedAge = Infinity;
      var origCanHitGroup = proto.canHitGroup;
      proto.canHitGroup = function (group) {
        if (group == "health" && this.canAttack) return true;
        return origCanHitGroup.call(this, group);
      };
      var origCanBeHitAsGroup = proto.canBeHitAsGroup;
      proto.canBeHitAsGroup = function (group) {
        if (group == "health" && this.canGetAttacked) return true;
        return origCanBeHitAsGroup.call(this, group);
      };
      proto.getHealth || (proto.getHealth = this.getHealth);
      var canReallyAttackObject = function canReallyAttackObject(obj) {
        if (!this.canAttack) return false;
        if (!this.scene.attackManager.canTeamAttack(this.team, obj.team)) return false;
        var attackPeriod = this.attackPeriod,
          attackAges = this.attackAges;
        if (attackPeriod != 0 && attackAges) {
          var attackAge = attackAges[obj.id];
          if (attackAge !== undefined && attackAge <= attackPeriod * this.game.fps) return false;
        }
        if (!(obj.canGetAttacked && obj.canGetAttackedByObject(this))) return false;
        return this.canAttackObject(obj);
      };
      proto.canGetAttackedByObject || (proto.canGetAttackedByObject = function (obj) {
        return true;
      });
      proto.canAttackObject || (proto.canAttackObject = function (obj) {
        return true;
      });
      var origCanHitObject = proto.canHitObject;
      proto.canHitObject = function (obj) {
        return canReallyAttackObject.call(this, obj) || origCanHitObject.call(this, obj);
      };
      var origHit = proto.hit;
      proto.hit = function (obj, details) {
        origHit.call(this, obj, details);
        if (canReallyAttackObject.call(this, obj)) this.attack(obj);
      };
      proto.getAttackProps || (proto.getAttackProps = _AttackMixin.getAttackProps);
      proto.attack = this.attack;
      proto.onAttack || (proto.onAttack = function (obj, props) {});
      proto.getAttacked || (proto.getAttacked = this.getAttacked);
      proto.onGetAttacked || (proto.onGetAttacked = function (props) {});
      proto.getDamaged || (proto.getDamaged = this.getDamaged);
      proto.die || (proto.die = this.die);
      var origGetGraphicsProps = proto.getGraphicsProps;
      proto.getGraphicsProps = function () {
        var props = origGetGraphicsProps.call(this);
        if (this.getDamagedAge <= 5) props.colorize = "red";
        return props;
      };
    }
  }, {
    key: "update",
    value: function update() {
      var attackPeriod = this.attackPeriod,
        attackAges = this.attackAges;
      if (attackPeriod != 0 && attackAges) {
        var attackPeriodIt = attackPeriod * this.game.fps;
        var atLeastOneId = false;
        for (var id in attackAges) {
          var age = attackAges[id];
          if (age > attackPeriodIt) delete attackAges[id];else {
            attackAges[id] = age + 1;
            atLeastOneId = true;
          }
        }
        if (!atLeastOneId) this.attackAges = null;
      }
      this.getDamagedAge += 1;
    }
  }, {
    key: "getHealth",
    value: function getHealth() {
      return this.maxHealth - this.damages;
    }
  }, {
    key: "attack",
    value: function attack(obj) {
      if (this.attackPeriod != 0) {
        var attackAges = this.attackAges || (this.attackAges = {});
        attackAges[obj.id] = 0;
      }
      var props = this.getAttackProps(obj);
      obj.getAttacked(props);
      this.onAttack(obj, props);
    }
  }, {
    key: "getAttacked",
    value: function getAttacked(props) {
      if (this.getHealth() <= 0) return;
      var attacker = props.attacker,
        damages = props.damages;
      if (this.scene.attackManager.canTeamDamage(attacker.team, this.team)) {
        this.getDamaged(damages, props);
      }
      var knockback = props?.knockback;
      if (knockback) {
        var knockbackAngle = props.knockbackAngle * PI / 180;
        this.speedX = knockback * cos(knockbackAngle);
        this.speedY = knockback * sin(knockbackAngle);
      }
      this.onGetAttacked(props);
    }
  }, {
    key: "getDamaged",
    value: function getDamaged(damages, props) {
      this.damages += damages;
      this.getDamagedAge = 0;
      var attacker = props?.attacker;
      if (this.getHealth() <= 0) {
        this.die(attacker);
      } else if (attacker) {
        this.speedY = -200;
        this.speedX = 200 * (this.x > attacker.x ? 1 : -1);
      }
    }
  }, {
    key: "die",
    value: function die(killer) {
      this.remove();
    }
  }]);
}(Mixin), _applyDecs$c5 = _slicedToArray(_applyDecs(_AttackMixin3, [], _classDecs5, 0, void 0, Mixin).c, 2), _AttackMixin = _applyDecs$c5[0], _initClass5 = _applyDecs$c5[1], _AttackMixin3), _Class5 = /*#__PURE__*/function (_identity6) {
  function _Class5() {
    var _this5;
    _classCallCheck(this, _Class5);
    _this5 = _callSuper(this, _Class5, [_AttackMixin]), _defineProperty(_assertThisInitialized(_this5), "KEY", "attack"), _initClass5();
    return _this5;
  }
  _inherits(_Class5, _identity6);
  return _createClass(_Class5);
}(_identity), _defineProperty(_Class5, _AttackMixin2, void 0), _Class5)();
export { _AttackMixin as AttackMixin };
_AttackMixin.getAttackProps = function (obj) {
  var props = this._attackProps || (this._attackProps = new AttackProps(this, {
    damages: this.attackDamages,
    knockback: this.attackKnockback,
    knockbackAngle: atan2(obj.y - this.y, obj.x - this.x) * 180 / PI
  }));
  return props;
};
_classDecs6 = [_HitMixin.addIfAbsent(), _OwnerableMixin.addIfAbsent()];
var _CollectMixin;
new (_CollectMixin2 = (_CollectMixin3 = /*#__PURE__*/function (_Mixin7) {
  function CollectMixin() {
    _classCallCheck(this, CollectMixin);
    return _callSuper(this, CollectMixin, arguments);
  }
  _inherits(CollectMixin, _Mixin7);
  return _createClass(CollectMixin, [{
    key: "initClass",
    value: function initClass(cls, kwargs) {
      _superPropGet(CollectMixin, "initClass", this, 3)([cls, kwargs]);
      var proto = cls.prototype;
      proto.canCollect = kwargs?.canCollect ?? true;
      proto.canGetCollected = kwargs?.canGetCollected ?? true;
      var origCanHitGroup = proto.canHitGroup;
      proto.canHitGroup = function (group) {
        if (group == "collect" && this.canCollect) return true;
        return origCanHitGroup.call(this, group);
      };
      var origCanBeHitAsGroup = proto.canBeHitAsGroup;
      proto.canBeHitAsGroup = function (group) {
        if (group == "collect" && this.canGetCollected) return true;
        return origCanBeHitAsGroup.call(this, group);
      };
      var canReallyCollectObject = function canReallyCollectObject(obj) {
        if (!this.canCollect) return false;
        if (obj.owner) return false;
        if (!(obj.canGetCollected && obj.canGetCollectedByObject(this))) return false;
        return this.canCollectObject(obj);
      };
      proto.canGetCollectedByObject || (proto.canGetCollectedByObject = function (obj) {
        return true;
      });
      proto.canCollectObject || (proto.canCollectObject = function (obj) {
        return true;
      });
      var origCanHitObject = proto.canHitObject;
      proto.canHitObject = function (obj) {
        return canReallyCollectObject.call(this, obj) || origCanHitObject.call(this, obj);
      };
      var origHit = proto.hit;
      proto.hit = function (obj, details) {
        origHit.call(this, obj, details);
        if (canReallyCollectObject.call(this, obj)) this.collect(obj);
      };
      proto.collect = this.collect;
      proto.onCollect || (proto.onCollect = function (obj) {});
      proto.getCollected || (proto.getCollected = this.getCollected);
      proto.onGetCollected || (proto.onGetCollected = function (collector) {});
      proto.drop = this.drop;
      proto.onDrop || (proto.onDrop = function (owner) {});
      var origRemove = proto.remove;
      proto.remove = function () {
        origRemove.call(this);
        this.drop();
      };
    }
  }, {
    key: "collect",
    value: function collect(obj) {
      if (obj.getCollected) obj.getCollected(this);
      this.onCollect(obj);
    }
  }, {
    key: "getCollected",
    value: function getCollected(collector) {
      this.owner = collector;
      this.onGetCollected(collector);
    }
  }, {
    key: "drop",
    value: function drop() {
      var owner = this.owner;
      if (!owner) return;
      this.owner = null;
      this.onDrop(owner);
    }
  }]);
}(Mixin), _applyDecs$c6 = _slicedToArray(_applyDecs(_CollectMixin3, [], _classDecs6, 0, void 0, Mixin).c, 2), _CollectMixin = _applyDecs$c6[0], _initClass6 = _applyDecs$c6[1], _CollectMixin3), _Class6 = /*#__PURE__*/function (_identity7) {
  function _Class6() {
    var _this6;
    _classCallCheck(this, _Class6);
    _this6 = _callSuper(this, _Class6, [_CollectMixin]), _defineProperty(_assertThisInitialized(_this6), "KEY", "collect"), _initClass6();
    return _this6;
  }
  _inherits(_Class6, _identity7);
  return _createClass(_Class6);
}(_identity), _defineProperty(_Class6, _CollectMixin2, void 0), _Class6)();
export { _CollectMixin as CollectMixin };
