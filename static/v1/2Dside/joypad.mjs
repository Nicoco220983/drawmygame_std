function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _JoypadButton2;
var _initClass, _classDecs;
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _applyDecs(e, t, r, n, o, a) { function i(e, t, r) { return function (n, o) { return r && r(n), e[t].call(n, o); }; } function c(e, t) { for (var r = 0; r < e.length; r++) e[r].call(t); return t; } function s(e, t, r, n) { if ("function" != typeof e && (n || void 0 !== e)) throw new TypeError(t + " must " + (r || "be") + " a function" + (n ? "" : " or undefined")); return e; } function applyDec(e, t, r, n, o, a, c, u, l, f, p, d, h) { function m(e) { if (!h(e)) throw new TypeError("Attempted to access private element on non-instance"); } var y, v = t[0], g = t[3], b = !u; if (!b) { r || Array.isArray(v) || (v = [v]); var w = {}, S = [], A = 3 === o ? "get" : 4 === o || d ? "set" : "value"; f ? (p || d ? w = { get: _setFunctionName(function () { return g(this); }, n, "get"), set: function set(e) { t[4](this, e); } } : w[A] = g, p || _setFunctionName(w[A], n, 2 === o ? "" : A)) : p || (w = Object.getOwnPropertyDescriptor(e, n)); } for (var P = e, j = v.length - 1; j >= 0; j -= r ? 2 : 1) { var D = v[j], E = r ? v[j - 1] : void 0, I = {}, O = { kind: ["field", "accessor", "method", "getter", "setter", "class"][o], name: n, metadata: a, addInitializer: function (e, t) { if (e.v) throw Error("attempted to call addInitializer after decoration was finished"); s(t, "An initializer", "be", !0), c.push(t); }.bind(null, I) }; try { if (b) (y = s(D.call(E, P, O), "class decorators", "return")) && (P = y);else { var k, F; O["static"] = l, O["private"] = f, f ? 2 === o ? k = function k(e) { return m(e), w.value; } : (o < 4 && (k = i(w, "get", m)), 3 !== o && (F = i(w, "set", m))) : (k = function k(e) { return e[n]; }, (o < 2 || 4 === o) && (F = function F(e, t) { e[n] = t; })); var N = O.access = { has: f ? h.bind() : function (e) { return n in e; } }; if (k && (N.get = k), F && (N.set = F), P = D.call(E, d ? { get: w.get, set: w.set } : w[A], O), d) { if ("object" == _typeof(P) && P) (y = s(P.get, "accessor.get")) && (w.get = y), (y = s(P.set, "accessor.set")) && (w.set = y), (y = s(P.init, "accessor.init")) && S.push(y);else if (void 0 !== P) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0"); } else s(P, (p ? "field" : "method") + " decorators", "return") && (p ? S.push(P) : w[A] = P); } } finally { I.v = !0; } } return (p || d) && u.push(function (e, t) { for (var r = S.length - 1; r >= 0; r--) t = S[r].call(e, t); return t; }), p || b || (f ? d ? u.push(i(w, "get"), i(w, "set")) : u.push(2 === o ? w[A] : i.call.bind(w[A])) : Object.defineProperty(e, n, w)), P; } function u(e, t) { return Object.defineProperty(e, Symbol.metadata || Symbol["for"]("Symbol.metadata"), { configurable: !0, enumerable: !0, value: t }); } if (arguments.length >= 6) var l = a[Symbol.metadata || Symbol["for"]("Symbol.metadata")]; var f = Object.create(null == l ? null : l), p = function (e, t, r, n) { var o, a, i = [], s = function s(t) { return _checkInRHS(t) === e; }, u = new Map(); function l(e) { e && i.push(c.bind(null, e)); } for (var f = 0; f < t.length; f++) { var p = t[f]; if (Array.isArray(p)) { var d = p[1], h = p[2], m = p.length > 3, y = 16 & d, v = !!(8 & d), g = 0 == (d &= 7), b = h + "/" + v; if (!g && !m) { var w = u.get(b); if (!0 === w || 3 === w && 4 !== d || 4 === w && 3 !== d) throw Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + h); u.set(b, !(d > 2) || d); } applyDec(v ? e : e.prototype, p, y, m ? "#" + h : _toPropertyKey(h), d, n, v ? a = a || [] : o = o || [], i, v, m, g, 1 === d, v && m ? s : r); } } return l(o), l(a), i; }(e, t, o, f); return r.length || u(e, f), { e: p, get c() { var t = []; return r.length && [u(applyDec(e, [r], n, e.name, 5, f, t), f), c.bind(null, t, e)]; } }; }
function _setFunctionName(e, t, n) { "symbol" == _typeof(t) && (t = (t = t.description) ? "[" + t + "]" : ""); try { Object.defineProperty(e, "name", { configurable: !0, value: n ? n + " " + t : t }); } catch (e) {} return e; }
function _checkInRHS(e) { if (Object(e) !== e) throw TypeError("right-hand side of 'in' should be an object, got " + (null !== e ? _typeof(e) : "null")); return e; }
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
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var abs = Math.abs,
  floor = Math.floor,
  ceil = Math.ceil,
  min = Math.min,
  max = Math.max,
  sqrt = Math.sqrt,
  atan2 = Math.atan2,
  PI = Math.PI,
  random = Math.random;
var assign = Object.assign;
import { GraphicsEngine, GraphicsProps } from "../../../../core/v1/graphics.mjs";
import { CATALOG } from '../../../../core/v1/catalog.mjs';
import { Dependencies, GameObject, Text, GameObjectGroup, Img } from "../../../../core/v1/game.mjs";
import { cachedTransform, newCanvas, cloneCanvas, colorizeCanvas, newTextCanvas } from "../../../../core/v1/utils.mjs";
var MOD_CATALOG = CATALOG.getModuleCatalog(import.meta.url, {
  version: "v1",
  perspective: "2Dside"
});
export var JoypadScene = /*#__PURE__*/function () {
  function JoypadScene(game) {
    _classCallCheck(this, JoypadScene);
    this.scene = this;
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.width = 800;
    this.height = floor(this.width * 9 / 16);
    this.syncPosSize();
    this.backgroundColor = "black";
    this.backgroundAlpha = 1;
    if (!this.game.isServerEnv) {
      this.canvas = document.createElement("canvas");
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.graphicsEngine = new GraphicsEngine(this);
    }
    this.game.initTouches();
    this.buttons = new GameObjectGroup(this);
  }
  return _createClass(JoypadScene, [{
    key: "isPausable",
    value: function isPausable() {
      return false;
    }
  }, {
    key: "pause",
    value: function pause(val) {
      if (!this.isPausable()) return;
      this.paused = val;
    }
  }, {
    key: "update",
    value: function update() {
      this.syncPosSize();
      this.buttons.update();
    }
  }, {
    key: "syncPosSize",
    value: function syncPosSize() {
      var _this$game$scenesPosS = this.game.scenesPosSizes.joypad,
        visible = _this$game$scenesPosS.visible,
        x = _this$game$scenesPosS.x,
        y = _this$game$scenesPosS.y,
        viewWidth = _this$game$scenesPosS.viewWidth,
        viewHeight = _this$game$scenesPosS.viewHeight;
      assign(this, {
        visible: visible,
        x: x,
        y: y,
        viewWidth: viewWidth,
        viewHeight: viewHeight
      });
    }
  }, {
    key: "onTouch",
    value: function onTouch() {
      this.buttons.forEach(function (but) {
        return but.checkClick();
      });
    }
  }, {
    key: "addButton",
    value: function addButton(kwargs) {
      return this.buttons.add(_JoypadButton, kwargs);
    }
  }, {
    key: "createPauseScene",
    value: function createPauseScene() {
      return new JoypadPauseScene(this.game);
    }
  }, {
    key: "draw",
    value: function draw() {
      var viewWidth = this.viewWidth,
        viewHeight = this.viewHeight;
      var can = this.canvas;
      can.width = viewWidth;
      can.height = viewHeight;
      var ctx = can.getContext("2d");
      ctx.reset();
      var drawer = this.graphicsEngine;
      this.drawBackground(drawer);
      this.buttons.draw(drawer);
      return can;
    }
  }, {
    key: "drawBackground",
    value: function drawBackground(drawer) {
      drawer.draw(this.getBackgroundGraphicsProps());
    }
  }, {
    key: "getBackgroundGraphicsProps",
    value: function getBackgroundGraphicsProps() {
      var props = this._backgroundGraphicsProps || (this._backgroundGraphicsProps = new GraphicsProps());
      props.color = this.backgroundColor;
      props.x = this.viewWidth / 2;
      props.y = this.viewHeight / 2;
      props.width = this.viewWidth;
      props.height = this.viewHeight;
      props.visibility = this.backgroundAlpha;
      return props;
    }
  }]);
}();
export var JoypadGameScene = /*#__PURE__*/function (_JoypadScene) {
  function JoypadGameScene() {
    _classCallCheck(this, JoypadGameScene);
    return _callSuper(this, JoypadGameScene, arguments);
  }
  _inherits(JoypadGameScene, _JoypadScene);
  return _createClass(JoypadGameScene, [{
    key: "update",
    value: function update() {
      _superPropGet(JoypadGameScene, "update", this, 3)([]);
      this.syncLocalPlayerButtons();
    }
  }, {
    key: "syncLocalPlayerButtons",
    value: function syncLocalPlayerButtons() {
      var hero = this.game.scenes.game.getHero(this.game.localPlayerId);
      if (hero && hero == this._lastHeroSynced) return;
      this.buttons.clear();
      if (!hero) return;
      this.addPauseButton();
      hero.initJoypadButtons(this);
      this._lastHeroSynced = hero;
    }
  }, {
    key: "addPauseButton",
    value: function addPauseButton() {
      var _this = this;
      this.pauseButton = this.addButton({
        x: this.width / 2,
        y: 40,
        width: 200,
        height: 60,
        text: "PAUSE"
      });
      this.pauseButton.onClickUp = function () {
        return _this.game.pause(true);
      };
    }
  }, {
    key: "newPauseScene",
    value: function newPauseScene() {
      return new JoypadPauseScene(this.game);
    }
  }]);
}(JoypadScene);
export var JoypadWaitingScene = /*#__PURE__*/function (_JoypadScene2) {
  function JoypadWaitingScene() {
    _classCallCheck(this, JoypadWaitingScene);
    return _callSuper(this, JoypadWaitingScene, arguments);
  }
  _inherits(JoypadWaitingScene, _JoypadScene2);
  return _createClass(JoypadWaitingScene, [{
    key: "update",
    value: function update() {
      _superPropGet(JoypadWaitingScene, "update", this, 3)([]);
      this.initStartButton();
    }
  }, {
    key: "initStartButton",
    value: function initStartButton() {
      var _this2 = this;
      var game = this.game,
        width = this.width,
        height = this.height,
        localPlayerId = game.localPlayerId;
      if (!localPlayerId || !game.players[localPlayerId] || this.startButton) return;
      this.startButton = this.addButton({
        x: width / 2,
        y: height / 2,
        width: 300,
        height: 100,
        text: "START"
      });
      this.startButton.onClickUp = function () {
        return _this2.game.startGame();
      };
    }
  }]);
}(JoypadScene);
var JoypadPauseScene = /*#__PURE__*/function (_JoypadScene3) {
  function JoypadPauseScene(game) {
    var _this3;
    _classCallCheck(this, JoypadPauseScene);
    _this3 = _callSuper(this, JoypadPauseScene, [game]);
    _this3.backgroundColor = "lightgrey";
    _this3.backgroundAlpha = .5;
    _this3.notifs = new GameObjectGroup(_this3);
    _this3.pauseText = _this3.notifs.add(Text, {
      text: "PAUSE",
      font: "bold 50px arial",
      fillStyle: "white"
    });
    _this3.syncPosSize();
    _this3.initButtons();
    _this3.syncObjectsPos();
    return _this3;
  }
  _inherits(JoypadPauseScene, _JoypadScene3);
  return _createClass(JoypadPauseScene, [{
    key: "initButtons",
    value: function initButtons() {
      var _this4 = this;
      this.resumeButton = this.addButton({
        width: 300,
        height: 100,
        text: "RESUME"
      });
      this.resumeButton.onClickUp = function () {
        return _this4.game.pause(false);
      };
      this.restartButton = this.addButton({
        width: 300,
        height: 100,
        text: "RESTART"
      });
      this.restartButton.onClickUp = function () {
        return _this4.game.restartGame();
      };
    }
  }, {
    key: "update",
    value: function update() {
      _superPropGet(JoypadPauseScene, "update", this, 3)([]);
      this.syncObjectsPos();
    }
  }, {
    key: "syncObjectsPos",
    value: function syncObjectsPos() {
      var width = this.width,
        height = this.height;
      assign(this.pauseText, {
        x: floor(width / 2),
        y: floor(height / 6)
      });
      assign(this.resumeButton, {
        x: floor(width / 2),
        y: floor(height / 2)
      });
      assign(this.restartButton, {
        x: floor(width / 2),
        y: floor(height / 2) + 120
      });
    }
  }, {
    key: "draw",
    value: function draw() {
      var res = _superPropGet(JoypadPauseScene, "draw", this, 3)([]);
      var drawer = this.graphicsEngine;
      this.notifs.draw(drawer);
      return res;
    }
  }]);
}(JoypadScene);
var ButtonSpriteSheetImg = new Img("/static/catalogs/std/v1/2Dside/assets/button_spritesheet.png");
var ButtonColorableSpriteSheetImg = new Img("/static/catalogs/std/v1/2Dside/assets/button_colorable.png");
_classDecs = [Dependencies.add(ButtonSpriteSheetImg, ButtonColorableSpriteSheetImg)];
var _JoypadButton;
var JoypadButton = /*#__PURE__*/function (_GameObject) {
  function JoypadButton() {
    _classCallCheck(this, JoypadButton);
    return _callSuper(this, JoypadButton, arguments);
  }
  _inherits(JoypadButton, _GameObject);
  return _createClass(JoypadButton, [{
    key: "init",
    value: function init(kwargs) {
      _superPropGet(JoypadButton, "init", this, 3)([kwargs]);
      this.inputKey = kwargs?.inputKey;
      this.isDown = false;
      this.disabled = kwargs?.disabled;
      this.text = kwargs?.text;
      this.icon = kwargs?.icon;
    }
  }, {
    key: "checkClick",
    value: function checkClick() {
      if (this.disabled) return;
      var isDown = this.checkHitTouches();
      if (isDown != this.isDown) {
        this.isDown = isDown;
        if (isDown) this.onClickDown();else this.onClickUp();
      }
    }
  }, {
    key: "onClickDown",
    value: function onClickDown() {
      if (this.inputKey) this.game.setInputKey(this.inputKey, true);
    }
  }, {
    key: "onClickUp",
    value: function onClickUp() {
      if (this.inputKey) this.game.setInputKey(this.inputKey, false);
    }
  }, {
    key: "draw",
    value: function draw(drawer) {
      if (this.disabled) return;
      _superPropGet(JoypadButton, "draw", this, 3)([drawer]);
      if (this.icon) {
        var iconProps = this._iconGraphicsProps || (this._iconGraphicsProps = new GraphicsProps());
        iconProps.img = this.icon;
        iconProps.x = this.x;
        iconProps.y = this.y;
        iconProps.width = this.width * .5;
        iconProps.height = this.height * .5;
        iconProps.draw(drawer);
      }
      if (this.text) {
        var textProps = this._textGraphicsProps || (this._textGraphicsProps = new GraphicsProps({
          img: this.createTextImg(this.text)
        }));
        textProps.x = this.x;
        textProps.y = this.y;
        textProps.width = this.width * .5;
        textProps.height = this.width * .5 / textProps.img.width * textProps.img.height, textProps.draw(drawer);
      }
    }
  }, {
    key: "getBaseImg",
    value: function getBaseImg() {
      var game = this.game;
      if (ButtonSpriteSheetImg.unloaded || ButtonColorableSpriteSheetImg.unloaded) return;
      var img = ButtonSpriteSheetImg,
        colorImg = ButtonColorableSpriteSheetImg;
      var localPlayer = game.players[game.localPlayerId];
      var color = localPlayer ? localPlayer.color : null;
      var numCol = this.isDown ? 1 : 0;
      colorImg = cachedTransform(colorImg, numCol, function () {
        return cloneCanvas(colorImg, {
          col: [numCol, 2]
        });
      });
      colorImg = cachedTransform(colorImg, color, function () {
        var res = cloneCanvas(colorImg);
        return color ? colorizeCanvas(res, color) : res;
      });
      img = cachedTransform(img, numCol, function () {
        var res = cloneCanvas(img, {
          col: [numCol, 2]
        });
        var ctx = res.getContext("2d");
        ctx.drawImage(colorImg, 0, 0, res.width, res.height);
        return res;
      });
      var sizeRatio = this.width / this.height;
      img = cachedTransform(img, sizeRatio, function () {
        if (sizeRatio == 1) return cloneCanvas(img);
        var _img = img,
          iw = _img.width,
          ih = _img.height,
          iw2 = ceil(iw / 2);
        var rw = ceil(ih * sizeRatio),
          rh = ih;
        var res = newCanvas(rw, rh),
          ctx = res.getContext("2d");
        ctx.drawImage(img, 0, 0, iw2, ih, 0, 0, iw2, ih);
        ctx.drawImage(img, iw2, 0, iw2, ih, rw - iw2, 0, iw2, ih);
        for (var x = iw2; x < rw - iw2; ++x) ctx.drawImage(img, iw2, 0, 1, ih, x, 0, 1, ih);
        return res;
      });
      return img;
    }
  }, {
    key: "createTextImg",
    value: function createTextImg(text) {
      var fontSize = floor(this.height / 2);
      return newTextCanvas(text, {
        fillStyle: "white",
        font: "bold ".concat(fontSize, "px serif")
      });
    }
  }]);
}(GameObject);
_JoypadButton2 = JoypadButton;
var _applyDecs$c = _slicedToArray(_applyDecs(_JoypadButton2, [], _classDecs, 0, void 0, GameObject).c, 2);
_JoypadButton = _applyDecs$c[0];
_initClass = _applyDecs$c[1];
_initClass();
