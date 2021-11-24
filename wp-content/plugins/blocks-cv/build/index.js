/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about_us/index.js":
/*!*******************************!*\
  !*** ./src/about_us/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('blocks-cv/about-us', {
  title: 'About Us CV',
  category: 'common',
  icon: 'smiley',
  description: 'Bloque para mostrar primera parte del CV',
  attributes: {
    nameCv: {
      type: 'string',
      source: 'html',
      selector: '.nameCv'
    },
    addressCv: {
      type: 'string',
      source: 'html',
      selector: '.addressCv'
    },
    phoneCv: {
      type: 'string',
      source: 'html',
      selector: '.phoneCv'
    },
    emailCv: {
      type: 'string',
      source: 'html',
      selector: '.emailCv'
    },
    abstractCv: {
      type: 'string',
      source: 'html',
      selector: '.abstractCv'
    },
    linkedinCv: {
      type: 'string',
      source: 'html',
      selector: '.linkedinCv'
    },
    twitterCv: {
      type: 'string',
      source: 'html',
      selector: '.twitterCv'
    },
    githubCv: {
      type: 'string',
      source: 'html',
      selector: '.githubCv'
    },
    facebookCv: {
      type: 'string',
      source: 'html',
      selector: '.facebookCv'
    }
  },
  edit: props => {
    const {
      attributes: {
        nameCv,
        addressCv,
        phoneCv,
        emailCv,
        abstractCv,
        linkedinCv
      },
      setAttributes
    } = props;

    const onchangeName = newName => {
      setAttributes({
        nameCv: newName
      });
    };

    const onchangeAddress = newAddress => {
      setAttributes({
        addressCv: newAddress
      });
    };

    const onchangePhone = newPhone => {
      setAttributes({
        phoneCv: newPhone
      });
    };

    const onchangeEmail = newEmail => {
      setAttributes({
        emailCv: newEmail
      });
    };

    const onchangeAbstract = newAbstract => {
      setAttributes({
        abstractCv: newAbstract
      });
    };

    const onchangeLinkedIn = newLinkedIn => {
      setAttributes({
        linkedinCv: newLinkedIn
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      placeholder: "Indique el nombre del cv",
      onChange: onchangeName,
      value: nameCv
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      placeholder: "Indique la direcci\xF3n del cv",
      onChange: onchangeAddress,
      value: addressCv
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      placeholder: "Indique la telefono del cv",
      onChange: onchangePhone,
      value: phoneCv
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      placeholder: "Indique la email del cv",
      onChange: onchangeEmail,
      value: emailCv
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      placeholder: "Indique la resumen del cv",
      onChange: onchangeAbstract,
      value: abstractCv
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
      placeholder: "LinkedIn",
      onChange: onchangeLinkedIn,
      value: linkedinCv
    }));
  },
  save: props => {
    const {
      attributes: {
        nameCv,
        addressCv,
        phoneCv,
        emailCv,
        abstractCv,
        linkedinCv
      },
      setAttributes
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      class: "resume-section",
      id: "about"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "resume-section-content"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
      class: "mb-0"
    }, nameCv), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "subheading mb-5"
    }, addressCv, ", ", phoneCv, " \xB7", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "mailto:{emailCv}"
    }, emailCv)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      class: "lead mb-5"
    }, abstractCv), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "social-icons"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      class: "social-icon",
      href: linkedinCv,
      target: "_blank"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "fab fa-linkedin-in"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      class: "social-icon",
      href: "#!"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "fab fa-github"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      class: "social-icon",
      href: "#!"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "fab fa-twitter"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      class: "social-icon",
      href: "#!"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      class: "fab fa-facebook-f"
    })))));
  }
});

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_us__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about_us */ "./src/about_us/index.js");

}();
/******/ })()
;
//# sourceMappingURL=index.js.map