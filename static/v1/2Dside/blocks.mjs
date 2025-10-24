function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _Class, _Block3, _applyDecs$c, _Class2, _BackgroundBlock3, _applyDecs$c2, _Block4, _DirtBlock2, _Block6, _StoneBlock2, _BackgroundBlock4, _BackgroundStoneBlock2, _Block8, _BricksBlock2, _BackgroundBlock6, _BackgroundBricksBlock, _Block0, _WoodBlock2, _BackgroundBlock8, _BackgroundWoodBlock2, _Block10, _PlatformBlock2, _Block12, _Door2, _Block14, _Cloud2, _CloudBlockChecker2, _Block16, _Trap2, _Trap3, _BoxingTrap2, _Block18, _BouncingBlock2, _Block20, _IceBlock2;
var _initClass, _classDecs, _Block2, _initClass2, _classDecs2, _BackgroundBlock2, _initClass3, _classDecs3, _initClass4, _classDecs4, _initClass5, _classDecs5, _initClass6, _classDecs6, _initClass7, _classDecs7, _initClass8, _classDecs8, _initClass9, _classDecs9, _initClass0, _classDecs0, _initClass1, _classDecs1, _initClass10, _classDecs10, _initClass11, _classDecs11, _initClass12, _classDecs12, _initClass13, _classDecs13, _initClass14, _classDecs14, _initClass15, _classDecs15;
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
import { cachedTransform, cloneCanvas, colorizeCanvas } from '../../../../core/v1/utils.mjs';
import { ModuleCatalog, GameObject, Category, StateProperty, StateBool, StateNumber, StateString, StateEnum, LinkTrigger, LinkReaction, BodyMixin, PhysicsMixin, AttackMixin, SpriteSheet, ObjectRefs, ActivableMixin, CollectMixin, OwnerableMixin } from '../../../../core/v1/game.mjs';
export var CATALOG = new ModuleCatalog(import.meta.url, {
  version: "v1",
  perspective: "2Dside"
});
_classDecs = [Category.append("block"), PhysicsMixin.add({
  canMove: false,
  canBlock: true
})];
var _Block;
new (_Block2 = (_Block3 = /*#__PURE__*/function (_GameObject) {
  function Block() {
    _classCallCheck(this, Block);
    return _callSuper(this, Block, arguments);
  }
  _inherits(Block, _GameObject);
  return _createClass(Block, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Block, "init", this, 3)([kwargs]);
      this.width = this.height = floor(this.scene.gridSize);
    }
  }, {
    key: "getGraphicsProps",
    value: function getGraphicsProps() {
      var props = _superPropGet(Block, "getGraphicsProps", this, 3)([]);
      props.width = this.width;
      props.height = this.height;
      return props;
    }
  }]);
}(GameObject), _applyDecs$c = _slicedToArray(_applyDecs(_Block3, [], _classDecs, 0, void 0, GameObject).c, 2), _Block = _applyDecs$c[0], _initClass = _applyDecs$c[1], _Block3), _Class = /*#__PURE__*/function (_identity2) {
  function _Class() {
    var _this;
    _classCallCheck(this, _Class);
    _this = _callSuper(this, _Class, [_Block]), _defineProperty(_assertThisInitialized(_this), "STATEFUL", false), _defineProperty(_assertThisInitialized(_this), "STUCK_TO_GRID", true), _initClass();
    return _this;
  }
  _inherits(_Class, _identity2);
  return _createClass(_Class);
}(_identity), _defineProperty(_Class, _Block2, void 0), _Class)();
export { _Block as Block };
_classDecs2 = [Category.append("background"), Category.append("block")];
var _BackgroundBlock;
new (_BackgroundBlock2 = (_BackgroundBlock3 = /*#__PURE__*/function (_GameObject2) {
  function BackgroundBlock() {
    _classCallCheck(this, BackgroundBlock);
    return _callSuper(this, BackgroundBlock, arguments);
  }
  _inherits(BackgroundBlock, _GameObject2);
  return _createClass(BackgroundBlock, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(BackgroundBlock, "init", this, 3)([kwargs]);
      this.z = -1;
      this.width = this.height = floor(this.scene.gridSize);
    }
  }, {
    key: "getGraphicsProps",
    value: function getGraphicsProps() {
      var props = _superPropGet(BackgroundBlock, "getGraphicsProps", this, 3)([]);
      props.width = this.width;
      props.height = this.height;
      return props;
    }
  }]);
}(GameObject), _applyDecs$c2 = _slicedToArray(_applyDecs(_BackgroundBlock3, [], _classDecs2, 0, void 0, GameObject).c, 2), _BackgroundBlock = _applyDecs$c2[0], _initClass2 = _applyDecs$c2[1], _BackgroundBlock3), _Class2 = /*#__PURE__*/function (_identity3) {
  function _Class2() {
    var _this2;
    _classCallCheck(this, _Class2);
    _this2 = _callSuper(this, _Class2, [_BackgroundBlock]), _defineProperty(_assertThisInitialized(_this2), "STATEFUL", false), _defineProperty(_assertThisInitialized(_this2), "STUCK_TO_GRID", true), _initClass2();
    return _this2;
  }
  _inherits(_Class2, _identity3);
  return _createClass(_Class2);
}(_identity), _defineProperty(_Class2, _BackgroundBlock2, void 0), _Class2)();
export { _BackgroundBlock as BackgroundBlock };
var DirtImg = CATALOG.registerImage("/static/catalogs/std/v1/2Dside/assets/blocks/dirt.png");
_classDecs3 = [CATALOG.registerObject({
  label: "Dirt",
  icon: DirtImg
}), StateString.define("color", {
  showInBuilder: true
})];
var _DirtBlock;
var DirtBlock = /*#__PURE__*/function (_Block5) {
  function DirtBlock() {
    _classCallCheck(this, DirtBlock);
    return _callSuper(this, DirtBlock, arguments);
  }
  _inherits(DirtBlock, _Block5);
  return _createClass(DirtBlock, [{
    key: "getBaseImg",
    value: function getBaseImg() {
      var _this3 = this;
      var img = DirtImg;
      if (this.color) {
        img = cachedTransform(img, this.color, function () {
          return colorizeCanvas(cloneCanvas(img), _this3.color, "#6f911b");
        });
      }
      return img;
    }
  }]);
}(_Block4 = _Block);
_DirtBlock2 = DirtBlock;
var _applyDecs$c3 = _slicedToArray(_applyDecs(_DirtBlock2, [], _classDecs3, 0, void 0, _Block4).c, 2);
_DirtBlock = _applyDecs$c3[0];
_initClass3 = _applyDecs$c3[1];
_initClass3();
export { _DirtBlock as DirtBlock };
var StoneImg = CATALOG.registerImage("/static/catalogs/std/v1/2Dside/assets/blocks/stone.png");
_classDecs4 = [CATALOG.registerObject({
  label: "Stone",
  icon: StoneImg
}), StateString.define("color", {
  showInBuilder: true
})];
var _StoneBlock;
var StoneBlock = /*#__PURE__*/function (_Block7) {
  function StoneBlock() {
    _classCallCheck(this, StoneBlock);
    return _callSuper(this, StoneBlock, arguments);
  }
  _inherits(StoneBlock, _Block7);
  return _createClass(StoneBlock, [{
    key: "getBaseImg",
    value: function getBaseImg() {
      var _this4 = this;
      var img = StoneImg;
      if (this.color) {
        img = cachedTransform(img, this.color, function () {
          return colorizeCanvas(cloneCanvas(img), _this4.color, "#877d71");
        });
      }
      return img;
    }
  }]);
}(_Block6 = _Block);
_StoneBlock2 = StoneBlock;
var _applyDecs$c4 = _slicedToArray(_applyDecs(_StoneBlock2, [], _classDecs4, 0, void 0, _Block6).c, 2);
_StoneBlock = _applyDecs$c4[0];
_initClass4 = _applyDecs$c4[1];
_initClass4();
export { _StoneBlock as StoneBlock };
var BackgroundStoneImg = CATALOG.registerImage("/static/catalogs/std/v1/2Dside/assets/blocks/background_stone.png");
_classDecs5 = [CATALOG.registerObject({
  label: "Background Stone",
  icon: BackgroundStoneImg
}), StateString.define("color", {
  showInBuilder: true
})];
var _BackgroundStoneBlock;
var BackgroundStoneBlock = /*#__PURE__*/function (_BackgroundBlock5) {
  function BackgroundStoneBlock() {
    _classCallCheck(this, BackgroundStoneBlock);
    return _callSuper(this, BackgroundStoneBlock, arguments);
  }
  _inherits(BackgroundStoneBlock, _BackgroundBlock5);
  return _createClass(BackgroundStoneBlock, [{
    key: "getBaseImg",
    value: function getBaseImg() {
      var _this5 = this;
      var img = BackgroundStoneImg;
      if (this.color) {
        img = cachedTransform(img, this.color, function () {
          return colorizeCanvas(cloneCanvas(img), _this5.color, "#877d71");
        });
      }
      return img;
    }
  }]);
}(_BackgroundBlock4 = _BackgroundBlock);
_BackgroundStoneBlock2 = BackgroundStoneBlock;
var _applyDecs$c5 = _slicedToArray(_applyDecs(_BackgroundStoneBlock2, [], _classDecs5, 0, void 0, _BackgroundBlock4).c, 2);
_BackgroundStoneBlock = _applyDecs$c5[0];
_initClass5 = _applyDecs$c5[1];
_initClass5();
export { _BackgroundStoneBlock as BackgroundStoneBlock };
var BricksImg = CATALOG.registerImage("/static/catalogs/std/v1/2Dside/assets/blocks/bricks.png");
_classDecs6 = [CATALOG.registerObject({
  label: "Bricks",
  icon: BricksImg
}), StateString.define("color", {
  showInBuilder: true
})];
var _BricksBlock;
var BricksBlock = /*#__PURE__*/function (_Block9) {
  function BricksBlock() {
    _classCallCheck(this, BricksBlock);
    return _callSuper(this, BricksBlock, arguments);
  }
  _inherits(BricksBlock, _Block9);
  return _createClass(BricksBlock, [{
    key: "getBaseImg",
    value: function getBaseImg() {
      var _this6 = this;
      var img = BricksImg;
      if (this.color) {
        img = cachedTransform(img, this.color, function () {
          return colorizeCanvas(cloneCanvas(img), _this6.color, "#b6a88e");
        });
      }
      return img;
    }
  }]);
}(_Block8 = _Block);
_BricksBlock2 = BricksBlock;
var _applyDecs$c6 = _slicedToArray(_applyDecs(_BricksBlock2, [], _classDecs6, 0, void 0, _Block8).c, 2);
_BricksBlock = _applyDecs$c6[0];
_initClass6 = _applyDecs$c6[1];
_initClass6();
export { _BricksBlock as BricksBlock };
var BackgroundBricksImg = CATALOG.registerImage("/static/catalogs/std/v1/2Dside/assets/blocks/background_bricks.png");
_classDecs7 = [CATALOG.registerObject({
  label: "Background Bricks",
  icon: BackgroundBricksImg
}), StateString.define("color", {
  showInBuilder: true
})];
var _BackgroundBricksBloc;
var BackgroundBricksBlock = /*#__PURE__*/function (_BackgroundBlock7) {
  function BackgroundBricksBlock() {
    _classCallCheck(this, BackgroundBricksBlock);
    return _callSuper(this, BackgroundBricksBlock, arguments);
  }
  _inherits(BackgroundBricksBlock, _BackgroundBlock7);
  return _createClass(BackgroundBricksBlock, [{
    key: "getBaseImg",
    value: function getBaseImg() {
      var _this7 = this;
      var img = BackgroundBricksImg;
      if (this.color) {
        img = cachedTransform(img, this.color, function () {
          return colorizeCanvas(cloneCanvas(img), _this7.color, "#b6a88e");
        });
      }
      return img;
    }
  }]);
}(_BackgroundBlock6 = _BackgroundBlock);
_BackgroundBricksBlock = BackgroundBricksBlock;
var _applyDecs$c7 = _slicedToArray(_applyDecs(_BackgroundBricksBlock, [], _classDecs7, 0, void 0, _BackgroundBlock6).c, 2);
_BackgroundBricksBloc = _applyDecs$c7[0];
_initClass7 = _applyDecs$c7[1];
_initClass7();
export { _BackgroundBricksBloc as BackgroundBricksBlock };
var WoodImg = CATALOG.registerImage("/static/catalogs/std/v1/2Dside/assets/blocks/wood.png");
_classDecs8 = [CATALOG.registerObject({
  label: "Wood",
  icon: WoodImg
}), StateString.define("color", {
  showInBuilder: true
})];
var _WoodBlock;
var WoodBlock = /*#__PURE__*/function (_Block1) {
  function WoodBlock() {
    _classCallCheck(this, WoodBlock);
    return _callSuper(this, WoodBlock, arguments);
  }
  _inherits(WoodBlock, _Block1);
  return _createClass(WoodBlock, [{
    key: "getBaseImg",
    value: function getBaseImg() {
      var _this8 = this;
      var img = WoodImg;
      if (this.color) {
        img = cachedTransform(img, this.color, function () {
          return colorizeCanvas(cloneCanvas(img), _this8.color, "#9b5f21");
        });
      }
      return img;
    }
  }]);
}(_Block0 = _Block);
_WoodBlock2 = WoodBlock;
var _applyDecs$c8 = _slicedToArray(_applyDecs(_WoodBlock2, [], _classDecs8, 0, void 0, _Block0).c, 2);
_WoodBlock = _applyDecs$c8[0];
_initClass8 = _applyDecs$c8[1];
_initClass8();
export { _WoodBlock as WoodBlock };
var BackgroundWoodImg = CATALOG.registerImage("/static/catalogs/std/v1/2Dside/assets/blocks/background_wood.png");
_classDecs9 = [CATALOG.registerObject({
  label: "Background Wood",
  icon: BackgroundWoodImg
}), StateString.define("color", {
  showInBuilder: true
})];
var _BackgroundWoodBlock;
var BackgroundWoodBlock = /*#__PURE__*/function (_BackgroundBlock9) {
  function BackgroundWoodBlock() {
    _classCallCheck(this, BackgroundWoodBlock);
    return _callSuper(this, BackgroundWoodBlock, arguments);
  }
  _inherits(BackgroundWoodBlock, _BackgroundBlock9);
  return _createClass(BackgroundWoodBlock, [{
    key: "getBaseImg",
    value: function getBaseImg() {
      var _this9 = this;
      var img = BackgroundWoodImg;
      if (this.color) {
        img = cachedTransform(img, this.color, function () {
          return colorizeCanvas(cloneCanvas(img), _this9.color, "#9b5f21");
        });
      }
      return img;
    }
  }]);
}(_BackgroundBlock8 = _BackgroundBlock);
_BackgroundWoodBlock2 = BackgroundWoodBlock;
var _applyDecs$c9 = _slicedToArray(_applyDecs(_BackgroundWoodBlock2, [], _classDecs9, 0, void 0, _BackgroundBlock8).c, 2);
_BackgroundWoodBlock = _applyDecs$c9[0];
_initClass9 = _applyDecs$c9[1];
_initClass9();
export { _BackgroundWoodBlock as BackgroundWoodBlock };
var PlatformImg = CATALOG.registerImage("/static/catalogs/std/v1/2Dside/assets/blocks/platform.png");
_classDecs0 = [CATALOG.registerObject({
  label: "Platform",
  icon: PlatformImg
}), StateString.define("color", {
  showInBuilder: true
})];
var _PlatformBlock;
var PlatformBlock = /*#__PURE__*/function (_Block11) {
  function PlatformBlock() {
    _classCallCheck(this, PlatformBlock);
    return _callSuper(this, PlatformBlock, arguments);
  }
  _inherits(PlatformBlock, _Block11);
  return _createClass(PlatformBlock, [{
    key: "getHitProps",
    value: function getHitProps(dt) {
      var props = _superPropGet(PlatformBlock, "getHitProps", this, 3)([dt]);
      props.uniDirX = 0;
      props.uniDirY = -1;
      return props;
    }
  }, {
    key: "getBodyPolygon",
    value: function getBodyPolygon() {
      var pol = this._bodyPolygons || (this._bodyPolygons = []);
      pol.length = 0;
      var x = this.x,
        y = this.y,
        width = this.width,
        height = this.height;
      var hWidth = width / 2,
        hHeight = height / 2;
      var xMin = x - hWidth,
        yMin = y - hHeight,
        xMax = x + hWidth;
      pol.push(xMin, yMin, xMax, yMin);
      return pol;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      var _this0 = this;
      var img = PlatformImg;
      if (this.color) {
        img = cachedTransform(img, this.color, function () {
          return colorizeCanvas(cloneCanvas(img), _this0.color, "#9b5f21");
        });
      }
      return img;
    }
  }]);
}(_Block10 = _Block);
_PlatformBlock2 = PlatformBlock;
var _applyDecs$c0 = _slicedToArray(_applyDecs(_PlatformBlock2, [], _classDecs0, 0, void 0, _Block10).c, 2);
_PlatformBlock = _applyDecs$c0[0];
_initClass0 = _applyDecs$c0[1];
_initClass0();
export { _PlatformBlock as PlatformBlock };
var DoorImg = CATALOG.registerImage("/static/catalogs/std/v1/2Dside/assets/blocks/door.png");
var DoorSpriteSheet = new SpriteSheet(CATALOG.registerImage("/static/catalogs/std/v1/2Dside/assets/blocks/door_spritesheet.png"), 2, 1);
_classDecs1 = [CATALOG.registerObject({
  label: "Door",
  icon: DoorImg,
  showInBuilder: true
}), LinkReaction.add("reactToggle", {
  label: "toggle",
  isDefault: true
}), StateBool.define("closed", {
  "default": true,
  showInBuilder: true
}), Category.append("engine")];
var _Door;
var Door = /*#__PURE__*/function (_Block13) {
  function Door() {
    _classCallCheck(this, Door);
    return _callSuper(this, Door, arguments);
  }
  _inherits(Door, _Block13);
  return _createClass(Door, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Door, "init", this, 3)([kwargs]);
      this.checkBlockAnyway = true;
      this.origClosed = this.closed;
      this.lastBlockIt = -Infinity;
    }
  }, {
    key: "reactToggle",
    value: function reactToggle(resp) {
      var shouldBeClosed = resp.value >= .5 ? !this.origClosed : this.origClosed;
      this.closed = shouldBeClosed && (this.closed || this.lastBlockIt < this.scene.iteration);
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(Door, "update", this, 3)([]);
      this.canBlock = this.closed;
    }
  }, {
    key: "onBlock",
    value: function onBlock(obj, details) {
      _superPropGet(Door, "onBlock", this, 3)([obj, details]);
      this.lastBlockIt = this.scene.iteration;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return DoorSpriteSheet.get(this.closed ? 0 : 1);
    }
  }]);
}(_Block12 = _Block);
_Door2 = Door;
var _applyDecs$c1 = _slicedToArray(_applyDecs(_Door2, [], _classDecs1, 0, void 0, _Block12).c, 2);
_Door = _applyDecs$c1[0];
_initClass1 = _applyDecs$c1[1];
_initClass1();
export { _Door as Door };
var CloudImg = CATALOG.registerImage("/static/catalogs/std/v1/2Dside/assets/blocks/cloud.png");
_classDecs10 = [CATALOG.registerObject({
  label: "Cloud",
  icon: CloudImg,
  showInBuilder: true
}), StateNumber.define("blockAge", {
  "default": Infinity,
  nullableWith: Infinity
}), StateNumber.define("timeToDisappear", {
  "default": 1,
  precision: .5,
  showInBuilder: true
}), StateNumber.define("timeToReappear", {
  "default": 3,
  precision: .5,
  nullableWith: Infinity,
  showInBuilder: true
})];
var _Cloud;
var Cloud = /*#__PURE__*/function (_Block15) {
  function Cloud() {
    _classCallCheck(this, Cloud);
    return _callSuper(this, Cloud, arguments);
  }
  _inherits(Cloud, _Block15);
  return _createClass(Cloud, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Cloud, "init", this, 3)([kwargs]);
      this.step = 0;
      this.lastBlockIt = -Infinity;
    }
  }, {
    key: "onBlock",
    value: function onBlock(obj, details) {
      _superPropGet(Cloud, "onBlock", this, 3)([obj, details]);
      if (this.blockAge === Infinity) this.blockAge = 0;
      this.lastBlockIt = this.scene.iteration;
    }
  }, {
    key: "update",
    value: function update() {
      var blockAge = this.blockAge,
        timeToDisappear = this.timeToDisappear,
        timeToReappear = this.timeToReappear;
      var fps = this.game.fps;
      this.initBlockChecker();
      if (blockAge === Infinity) this.step = 0;else if (blockAge < timeToDisappear * fps) this.step = 1;else if (blockAge < (timeToDisappear + timeToReappear) * fps) {
        this.step = 2;
      } else if (this.lastBlockIt < this.scene.iteration) {
        this.step = 0;
        this.blockAge = Infinity;
      }
      this.canBlock = this.step < 2;
      this.blockAge += 1;
    }
  }, {
    key: "initBlockChecker",
    value: function initBlockChecker() {
      this._blockChecker || (this._blockChecker = this.scene.addObject(_CloudBlockChecker, {
        owner: this
      }));
    }
  }, {
    key: "getGraphicsProps",
    value: function getGraphicsProps() {
      var step = this.step;
      var props = _superPropGet(Cloud, "getGraphicsProps", this, 3)([]);
      if (step == 0) props.visibility = 1;else if (step == 1) props.visibility = .75;else props.visibility = .5;
      return props;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return CloudImg;
    }
  }]);
}(_Block14 = _Block);
_Cloud2 = Cloud;
var _applyDecs$c10 = _slicedToArray(_applyDecs(_Cloud2, [], _classDecs10, 0, void 0, _Block14).c, 2);
_Cloud = _applyDecs$c10[0];
_initClass10 = _applyDecs$c10[1];
_initClass10();
export { _Cloud as Cloud };
_classDecs11 = [PhysicsMixin.add({
  canMove: false,
  checkBlockAnyway: true
})];
var _CloudBlockChecker;
var CloudBlockChecker = /*#__PURE__*/function (_GameObject3) {
  function CloudBlockChecker() {
    _classCallCheck(this, CloudBlockChecker);
    return _callSuper(this, CloudBlockChecker, arguments);
  }
  _inherits(CloudBlockChecker, _GameObject3);
  return _createClass(CloudBlockChecker, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(CloudBlockChecker, "init", this, 3)([kwargs]);
      this.owner = kwargs.owner;
      this.x = this.owner.x;
      this.y = this.owner.y;
      this.width = this.owner.width + 2;
      this.height = this.owner.height + 2;
    }
  }, {
    key: "onBlock",
    value: function onBlock(obj, details) {
      this.owner.onBlock(obj, details);
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(CloudBlockChecker, "update", this, 3)([]);
      if (this.owner.removed) this.remove();
    }
  }]);
}(GameObject);
_CloudBlockChecker2 = CloudBlockChecker;
var _applyDecs$c15 = _slicedToArray(_applyDecs(_CloudBlockChecker2, [], _classDecs11, 0, void 0, GameObject).c, 2);
_CloudBlockChecker = _applyDecs$c15[0];
_initClass11 = _applyDecs$c15[1];
_initClass11();
var DetectAud = CATALOG.registerAudio("/static/catalogs/std/v1/2Dside/assets/detect.wav");
_classDecs12 = [AttackMixin.add(), LinkReaction.add("reactTrigger", {
  label: "trigger",
  isDefault: true
}), StateNumber.define("lastDetectAge", {
  "default": Infinity,
  nulableWith: Infinity
}), StateNumber.define("duration", {
  "default": 2,
  precision: .1,
  showInBuilder: true
}), StateNumber.define("countdown", {
  "default": .5,
  precision: .1,
  showInBuilder: true
}), StateEnum.define("dir", {
  "default": "right",
  options: {
    "up": "Up",
    "down": "Down",
    "left": "Left",
    "right": "Right"
  },
  showInBuilder: true
})];
var _Trap;
var Trap = /*#__PURE__*/function (_Block17) {
  function Trap() {
    _classCallCheck(this, Trap);
    return _callSuper(this, Trap, arguments);
  }
  _inherits(Trap, _Block17);
  return _createClass(Trap, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(Trap, "init", this, 3)([kwargs]);
      this.canBlock = false;
      this.checkBlockAnyway = true;
      this.team = "engine";
      this.attackPeriod = this.duration;
    }
  }, {
    key: "getAngle",
    value: function getAngle() {
      var dir = this.dir;
      if (dir == "right") return 0;
      if (dir == "down") return 90;
      if (dir == "left") return 180;
      if (dir == "up") return 270;
    }
  }, {
    key: "onBlock",
    value: function onBlock(obj, details) {
      _superPropGet(Trap, "onBlock", this, 3)([obj, details]);
      if (this.lastDetectAge == Infinity) {
        this.lastDetectAge = 0;
        this.game.audio.playSound(DetectAud);
      }
    }
  }, {
    key: "update",
    value: function update() {
      var countdown = this.countdown,
        duration = this.duration;
      var fps = this.game.fps;
      _superPropGet(Trap, "update", this, 3)([]);
      this.canAttack = this.lastDetectAge > countdown * fps && this.lastDetectAge < (countdown + duration) * fps;
      this.lastDetectAge += 1;
      if (this.lastDetectAge > (countdown + duration) * fps) this.lastDetectAge = Infinity;
    }
  }, {
    key: "getAttackProps",
    value: function getAttackProps(obj) {
      var props = AttackMixin.getAttackProps.call(this, obj);
      props.knockbackAngle = this.getAngle();
      return props;
    }
  }, {
    key: "reactTrigger",
    value: function reactTrigger(msg) {
      if (msg.value >= .5 && this.lastDetectAge == Infinity) this.lastDetectAge = this.countdown * this.game.fps;
    }
  }, {
    key: "getGraphicsProps",
    value: function getGraphicsProps() {
      var props = _superPropGet(Trap, "getGraphicsProps", this, 3)([]);
      props.angle = this.getAngle();
      props.visibility = this.canAttack ? 1 : 0;
      return props;
    }
  }]);
}(_Block16 = _Block);
_Trap2 = Trap;
var _applyDecs$c11 = _slicedToArray(_applyDecs(_Trap2, [], _classDecs12, 0, void 0, _Block16).c, 2);
_Trap = _applyDecs$c11[0];
_initClass12 = _applyDecs$c11[1];
_initClass12();
export { _Trap as Trap };
var BoxingGloveImg = CATALOG.registerImage("/static/catalogs/std/v1/2Dside/assets/boxing_glove.png");
_classDecs13 = [CATALOG.registerObject({
  label: "Boxing Trap",
  icon: BoxingGloveImg,
  showInBuilder: true
})];
var _BoxingTrap;
var BoxingTrap = /*#__PURE__*/function (_Trap4) {
  function BoxingTrap() {
    _classCallCheck(this, BoxingTrap);
    return _callSuper(this, BoxingTrap, arguments);
  }
  _inherits(BoxingTrap, _Trap4);
  return _createClass(BoxingTrap, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(BoxingTrap, "init", this, 3)([kwargs]);
      this.attackDamages = 0;
      this.attackKnockback = 1000;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return BoxingGloveImg;
    }
  }]);
}(_Trap3 = _Trap);
_BoxingTrap2 = BoxingTrap;
var _applyDecs$c12 = _slicedToArray(_applyDecs(_BoxingTrap2, [], _classDecs13, 0, void 0, _Trap3).c, 2);
_BoxingTrap = _applyDecs$c12[0];
_initClass13 = _applyDecs$c12[1];
_initClass13();
export { _BoxingTrap as BoxingTrap };
var BouncingBlockImg = CATALOG.registerImage("/static/catalogs/std/v1/2Dside/assets/blocks/bouncing_block.png");
_classDecs14 = [CATALOG.registerObject({
  label: "Bouncing Block",
  icon: BouncingBlockImg,
  showInBuilder: true
})];
var _BouncingBlock;
var BouncingBlock = /*#__PURE__*/function (_Block19) {
  function BouncingBlock() {
    _classCallCheck(this, BouncingBlock);
    return _callSuper(this, BouncingBlock, arguments);
  }
  _inherits(BouncingBlock, _Block19);
  return _createClass(BouncingBlock, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(BouncingBlock, "init", this, 3)([kwargs]);
      this.physicsBounciness = 1;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return BouncingBlockImg;
    }
  }]);
}(_Block18 = _Block);
_BouncingBlock2 = BouncingBlock;
var _applyDecs$c13 = _slicedToArray(_applyDecs(_BouncingBlock2, [], _classDecs14, 0, void 0, _Block18).c, 2);
_BouncingBlock = _applyDecs$c13[0];
_initClass14 = _applyDecs$c13[1];
_initClass14();
export { _BouncingBlock as BouncingBlock };
var IceBlockImg = CATALOG.registerImage("/static/catalogs/std/v1/2Dside/assets/blocks/ice.png");
_classDecs15 = [CATALOG.registerObject({
  label: "Ice Block",
  icon: IceBlockImg,
  showInBuilder: true
})];
var _IceBlock;
var IceBlock = /*#__PURE__*/function (_Block21) {
  function IceBlock() {
    _classCallCheck(this, IceBlock);
    return _callSuper(this, IceBlock, arguments);
  }
  _inherits(IceBlock, _Block21);
  return _createClass(IceBlock, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(IceBlock, "init", this, 3)([kwargs]);
      this.physicsStaticFriction = 0;
      this.physicsDynamicFriction = 0;
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      return IceBlockImg;
    }
  }]);
}(_Block20 = _Block);
_IceBlock2 = IceBlock;
var _applyDecs$c14 = _slicedToArray(_applyDecs(_IceBlock2, [], _classDecs15, 0, void 0, _Block20).c, 2);
_IceBlock = _applyDecs$c14[0];
_initClass15 = _applyDecs$c14[1];
_initClass15();
export { _IceBlock as IceBlock };
