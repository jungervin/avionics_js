/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _avionics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _websocket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _websocket_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_websocket_js__WEBPACK_IMPORTED_MODULE_1__);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _template_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_template_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prints_coffee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);




class Avionics {
  constructor(elem) {
    this.elem = elem;
    elem.innerHTML = _template_html__WEBPACK_IMPORTED_MODULE_0___default.a;

    this.airspeedElem = elem.querySelector("#airspeed_value");
    this.altitudeElem = elem.querySelector("#altitude_value");
    this.rotor = elem.querySelector("#rotor");
    this.horizont = elem.querySelector("#horizont");
    this.pitchElem = elem.querySelector("#pitch");
    this.roll_triangle = elem.querySelector("#roll_triangle");
    this.heading_scale = elem.querySelector("#heading_scale");
    this.heading_current_value = elem.querySelector("#heading_current_value");

    Object(_prints_coffee__WEBPACK_IMPORTED_MODULE_2__["printPitch"])(this.pitchElem);
    Object(_prints_coffee__WEBPACK_IMPORTED_MODULE_2__["printHeading"])(elem.querySelector("#heading_scale"));

    this._rollValue = 0;
    this._pitchValue = 0;
    this._airspeed = 0;
    this._altitube = 0;
    this._currentHeading = 360;
  }

  horizontTransform() {
    if (this.pitch > 90) {
      this.horizont.setAttribute("transform", `rotate(${this.roll}) scale(1,-1) translate(0 ${parseInt(720 - this.pitch*4)})`)
    }
    else if (this.pitch < -90) {
      this.horizont.setAttribute("transform", `rotate(${this.roll}) scale(1,-1) translate(0 ${parseInt(-720 - this.pitch*4)})`)
    }
    else {
      this.horizont.setAttribute("transform", `rotate(${this.roll}) translate(0 ${parseInt(this.pitch*4)})`)
    }
  }

  _pad(number, n) {
    const arr = number.toString().split("");
    return (new Array(n - arr.length)).fill('0').concat(arr).join("");
  }

  set airspeed(value) {
    this._airspeed = value;
    this.airspeedElem.textContent = this._pad(value, 3);
  }

  set altitude(value) {
    this._altitude = value;
    this.altitudeElem.textContent = this._pad(value, 5);
  }

  set roll(value) {
    this._rollValue = parseInt(value);
    this.horizontTransform();
    this.rotor.setAttribute("transform", `rotate(${this._rollValue})`);
    this.pitchElem.setAttribute("transform", `translate(0 ${this._pitchValue*8})`);
    this.roll_triangle.setAttribute("transform", `rotate(${this._rollValue})`);
  }

  get roll() {
    return this._rollValue;
  }

  set pitch(value) {
    this._pitchValue = parseInt(value);
    this.horizontTransform();
    this.rotor.setAttribute("transform", `rotate(${this._rollValue})`);
    this.pitchElem.setAttribute('transform', `translate(0 ${this._pitchValue*8})`);
  }

  get pitch() {
    return this._pitchValue;
  }

  set currentHeading(value) {
    this._currentHeading = (value == 0) ? 360 : value;
    this.heading_current_value.textContent = this._pad(this._currentHeading, 3)

    let delta;
    if (this._currentHeading > 180) {
      delta = (360 - this._currentHeading)*10
    }
    else {
      delta = -this._currentHeading*10
    }
    this.heading_scale.setAttribute("transform", `translate(${delta},22.5)`)
  }

  set groundSpeed (value) {
    ground_speed_value.textContent = value;
  }

  set selectedAltitude (value) {
    selected_altitude_value.textContent = value;
  }

}

global.Avionics = Avionics;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"500\" height=\"500\" viewBox=\"-250 -250 500 500\">\n  <defs>\n    <clipPath id=\"pitchClip\">\n      <path d=\"M-100 400 -100 -100 C -50 -160, 50 -160, 100 -100 L 100 400z\" transform=\"translate(0, -40)\" />\n    </clipPath>\n    <clipPath id=\"headingClip\">\n      <rect x=\"-150\" y=\"-15\" width=\"266\" height=\"38\" fill=\"black\" />\n    </clipPath>\n  </defs>\n  <g id='horizont'>\n    <defs>\n      <linearGradient id=\"backHorizon\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"100%\">\n        <stop offset=\"0.5\" stop-color=\"#558EBB\" />\n        <stop offset=\"0.5\" stop-color=\"#503723\" />\n      </linearGradient>\n    </defs>\n    <rect x=\"-1000\" y=\"-1000\" width=\"2000\" height=\"2000\" fill=\"url(#backHorizon)\" />\n    <line x1=\"-1000\" y1=\"0\" x2=\"1000\" y2=\"0\" stroke=\"white\" stroke-width=\"2\" />\n  </g>\n\n  <g id=\"rotor\" clip-path=\"url(#pitchClip)\">\n    <g id='pitch'>\n      <line id=\"small-pitch\" x1=\"-14\" y1=\"0\" x2=\"14\" y2=\"0\" stroke=\"white\" stroke-width=\"2\" />\n      <line id=\"medium-pitch\" x1=\"-29\" y1=\"0\" x2=\"29\" y2=\"0\" stroke=\"white\" stroke-width=\"2\" />\n      <line id=\"large-pitch\" x1=\"-41\" y1=\"0\" x2=\"41\" y2=\"0\" stroke=\"white\" stroke-width=\"3\" />\n    </g>\n  </g>\n\n  <g transform=\"translate(0,-235)\" clip-path=\"url(#headingClip)\">\n    <defs>\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-2\" stroke=\"#fff\" stroke-width=\"1.5\" id=\"heading_scale_marker\" />\n      <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-5\" stroke=\"#fff\" stroke-width=\"1.5\" id=\"heading_scale_large_marker\" />\n    </defs>\n    <g id=\"heading_scale\" transform=\"translate(0,5)\"></g>\n    <g transform=\"translate(0,17)\">\n      <polyline points=\"0,0 10,-10 20,-10 20,-30 -20,-30 -20,-10, -10,-10 0,0\" fill=\"#000\" stroke=\"#fff\" stroke-width=\"1\" />\n      <text fill=\"#fff\" style=\"font-size:18px;font-weight:bold;\" text-anchor='middle' dy=\"-14\" id=\"heading_current_value\">360</text>\n    </g>\n  </g>\n\n  <defs>\n    <g id=\"triangles\">\n      <line x1=\"-129\" y1=\"0\" x2=\"-88\" y2=\"0\" stroke=\"yellow\" stroke-width=\"2\"/>\n      <polyline points=\"0,0 -79,42 -54,42 0,0\" fill=\"yellow\" stroke=\"black\" stroke-width=\"1\"/>\n      <polyline points=\"0,0 -54,42 -33,42 0,0\" fill=\"none\" stroke=\"black\" stroke-width=\"1\"/>\n    </g>\n\n    <g id=\"altitude\">\n      <polyline points=\"0,0 10,-10 10,-21 68,-21 68,-38 110,-38 110,38 68,38 68,21 10,21 10,10 0,0\" fill=\"black\" stroke=\"white\" stroke-width=\"1\" />\n      <text dx=\"16\" dy=\"10\" fill=\"white\" class='altitude-value' id='altitude_value'>95336</text>\n    </g>\n\n    <g id=\"airspeed\">\n      <polyline points=\"0,-24 55,-24, 55,-48, 80,-48 80,-10 90,0 80,10 80,48, 55,48, 55,24 0,24 0,-24\" fill=\"black\" stroke=\"white\" stroke-width=\"1\" />\n      <text dx=\"6\" dy=\"13\" fill=\"white\" class=\"airspeed-value\" id=\"airspeed_value\">999</text>\n    </g>\n  </defs>\n\n  <g transform=\"translate(-250, -250)\">\n    <rect id=\"airspeed_background\" x=\"0\" y=\"0\" width=\"100\" height=\"500\" fill=\"black\" stroke=\"white\" stroke-width=\"1\" opacity=\"0.1\" />\n    <rect id=\"heading_background\" x=\"100\" y=\"0\" width=\"266\" height=\"38\" fill=\"black\" stroke=\"white\" stroke-width=\"2\" opacity=\"0.1\" />\n    <rect id=\"altitude_background\" x=\"366\" y=\"32\" width=\"134\" height=\"468\" fill=\"black\" stroke=\"white\" stroke-width=\"1\" opacity=\"0.1\" />\n    <rect id=\"barometric_setting\" x=\"366\" y=\"468\" width=\"132\" height=\"30\" fill=\"black\" stroke=\"blue\" stroke-width=\"2\" opacity=\"0.1\" />\n\n    <use x=\"250\" y=\"250\" xlink:href=\"#triangles\"/>\n    <use x=\"250\" y=\"250\" xlink:href=\"#triangles\" transform=\"scale(-1,1) translate(-500,0)\"/>\n    <g transform='translate(250, 250)'>\n      <defs>\n        <clipPath id=\"cut-off-bottom\">\n          <rect x=\"-200\" y=\"-250\" width=\"400\" height=\"150\" />\n        </clipPath>\n      </defs>\n      <circle cx=\"0\" cy=\"0\" r=\"200\"/ fill=\"none\" stroke=\"white\" clip-path=\"url(#cut-off-bottom)\" />\n      <line x1=\"0\" y1=\"-200\" x2=\"0\" y2=\"-190\" stroke=\"white\" stroke-width=\"1.5\" id=\"degree\" />\n      <use xlink:href=\"#degree\" transform=\"rotate(-60)\"/>\n      <use xlink:href=\"#degree\" transform=\"rotate(-50)\"/>\n      <use xlink:href=\"#degree\" transform=\"rotate(-40)\"/>\n      <use xlink:href=\"#degree\" transform=\"rotate(-30)\"/>\n      <use xlink:href=\"#degree\" transform=\"rotate(-20)\"/>\n      <use xlink:href=\"#degree\" transform=\"rotate(-10)\"/>\n      <use xlink:href=\"#degree\" transform=\"rotate(10)\"/>\n      <use xlink:href=\"#degree\" transform=\"rotate(20)\"/>\n      <use xlink:href=\"#degree\" transform=\"rotate(30)\"/>\n      <use xlink:href=\"#degree\" transform=\"rotate(40)\"/>\n      <use xlink:href=\"#degree\" transform=\"rotate(50)\"/>\n      <use xlink:href=\"#degree\" transform=\"rotate(60)\"/>\n      <polygon points=\"0,-200 -7.5,-215 7.5,-215\" fill=\"white\" />\n      <polygon points=\"0,-200 -7.5,-185 7.5,-185\" fill=\"white\" id=\"roll_triangle\" />\n    </g>\n    <use x=\"380\" y=\"250\" xlink:href=\"#altitude\"/>\n    <use x=\"12\" y=\"250\" xlink:href=\"#airspeed\"/>\n  </g>\n  <g transform=\"translate(116,-250)\">\n    <rect id=\"selected_altitude\" x=\"0\" y=\"0\" width=\"134\" height=\"32\" fill=\"black\" stroke=\"white\" stroke-width=\"1\" />\n    <text dx='129' dy='26' id='selected_altitude_value'>0</text>\n  </g>\n  <g transform=\"translate(-250,218)\">\n    <rect id=\"ground_speed\" x=\"0\" y=\"0\" width=\"100\" height=\"32\" fill=\"black\" stroke=\"white\" stroke-width=\"1\" />\n    <text dx='95' dy='26' id='ground_speed_value'>0</text>\n  </g>\n</svg>\n";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(5);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(7)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// Module
exports.push([module.i, "html, body, svg {\n  width: 100%; height: 100%;\n}\nsvg {\n  display: block;\n}\nbody {\n  margin: 0;\n}\n.airspeed-value {\n  font-size: 40px;\n  letter-spacing: 5px;\n}\n.altitude-value {\n  font-size:30px;\n  letter-spacing: 3px;\n}\n\n#ground_speed_value {\n  font-size: 30px;\n  font-weight: bold;\n  fill: #c748a2;\n  text-anchor: end;\n}\n\n#selected_altitude_value {\n  font-size: 30px;\n  font-weight: bold;\n  fill: #47cfe0;\n  text-anchor: end;\n}\n", ""]);



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printPitch", function() { return printPitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printHeading", function() { return printHeading; });
var printHeading, printPitch;

printPitch = function(elem) {
  var i, large, medium, results, small, textLeft, textRight, texts, use;
  large = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  large.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#large-pitch');
  medium = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  medium.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#medium-pitch');
  small = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  small.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#small-pitch');
  textLeft = document.createElementNS("http://www.w3.org/2000/svg", 'text');
  textLeft.style.fill = 'white';
  textLeft.style.fontWeight = 'bold';
  textLeft.setAttribute('dy', 5);
  textRight = textLeft.cloneNode();
  textLeft.setAttribute('text-anchor', 'end');
  textLeft.setAttribute('x', -45);
  textRight.setAttribute('x', 45);
  i = -220;
  results = [];
  while (i <= 220) {
    if (i === 0) {
      i += 2.5;
      continue;
    } else if (i % 10 === 0) {
      use = large.cloneNode();
      texts = [textLeft.cloneNode(), textRight.cloneNode()];
      texts.forEach(function(text) {
        var value;
        value = Math.abs(i);
        text.textContent = value > 180 ? 360 - value : value;
        text.setAttribute('y', -i * 8);
        elem.appendChild(text);
      });
    } else if (i % 5 === 0) {
      use = medium.cloneNode();
    } else if (i % 2.5 === 0) {
      use = small.cloneNode();
    }
    use.setAttribute('y', i * 8);
    elem.appendChild(use);
    results.push(i += 2.5);
  }
  return results;
};

printHeading = function(elem) {
  var clone, cloneText, i, large_marker, marker, results, text;
  marker = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  marker.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#heading_scale_marker');
  large_marker = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  large_marker.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#heading_scale_large_marker');
  text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
  text.style.fill = '#fff';
  text.style.fontSize = '16px';
  text.style.fontWeight = 'bold';
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('y', -10);
  i = -200;
  results = [];
  while (i <= 200) {
    if (i % 10 === 0) {
      clone = large_marker.cloneNode();
      cloneText = text.cloneNode();
      cloneText.setAttribute('x', i * 10);
      cloneText.textContent = i <= 0 ? 360 + i : i;
      elem.appendChild(cloneText);
    } else if (i % 5 === 0) {
      clone = large_marker.cloneNode();
      cloneText = text.cloneNode();
    } else {
      clone = marker.cloneNode();
    }
    clone.setAttribute('x', i * 10);
    elem.appendChild(clone);
    results.push(i += 1);
  }
  return results;
};




/***/ }),
/* 10 */
/***/ (function(module, exports) {

var websocket = new WebSocket('ws://'+location.hostname+'/');

websocket.onopen = function(evt) {
  console.log('WebSocket connection opened');
}

websocket.onmessage = function(evt) {
  console.log(evt.data);
  var data = JSON.parse(evt.data);
  avionics.roll = data.roll;
  avionics.pitch = data.pitch;
  avionics.currentHeading = data.heading;
}

websocket.onclose = function(evt) {
  console.log('Websocket connection closed');
}

websocket.onerror = function(evt) {
  console.log('Websocket error: ' + evt);
}


/***/ })
/******/ ]);