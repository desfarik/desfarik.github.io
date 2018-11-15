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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_directive__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_input_directive__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__numberTree_number_tree_directive__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants_number_expression_constants__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__numberTree_services_constants_tree_classes_constants__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__input_services_number_expression_validator_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__input_services_number_expression_transformer__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_number_expression_parser_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_polish_expression_parser_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_tree_expression_parser_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__numberTree_services_tree_builder_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__numberTree_services_line_arrow_builder_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__numberTree_services_ellipse_point_calculator_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__numberTree_services_line_params_calculator_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_expression_calculate_servise__ = __webpack_require__(22);



















/* unused harmony default export */ var _unused_webpack_default_export = (angular.module('mainPage', ['ngMessages'])
    .config(__WEBPACK_IMPORTED_MODULE_0__main_router__["a" /* default */])
    .directive('ntHeader', __WEBPACK_IMPORTED_MODULE_1__header_header_directive__["a" /* default */])
    .directive('ntInput', __WEBPACK_IMPORTED_MODULE_2__input_input_directive__["a" /* default */])
    .directive('numberTree', __WEBPACK_IMPORTED_MODULE_3__numberTree_number_tree_directive__["a" /* default */])
    .constant('ExpressionConstants', __WEBPACK_IMPORTED_MODULE_4__services_constants_number_expression_constants__["a" /* default */])
    .constant('TreeConstants', __WEBPACK_IMPORTED_MODULE_5__numberTree_services_constants_tree_classes_constants__["a" /* default */])
    .service('NumberExpressionValidator', __WEBPACK_IMPORTED_MODULE_6__input_services_number_expression_validator_service__["a" /* default */])
    .service('NumberExpressionTransformer', __WEBPACK_IMPORTED_MODULE_7__input_services_number_expression_transformer__["a" /* default */])
    .service('NumberExpressionParser', __WEBPACK_IMPORTED_MODULE_8__services_number_expression_parser_service__["a" /* default */])
    .service('PolishExpressionParser', __WEBPACK_IMPORTED_MODULE_9__services_polish_expression_parser_service__["a" /* default */])
    .service('TreeExpressionParser', __WEBPACK_IMPORTED_MODULE_10__services_tree_expression_parser_service__["a" /* default */])
    .service('TreeBuilder', __WEBPACK_IMPORTED_MODULE_11__numberTree_services_tree_builder_service__["a" /* default */])
    .service('LineArrowBuilder', __WEBPACK_IMPORTED_MODULE_12__numberTree_services_line_arrow_builder_service__["a" /* default */])
    .service('EllipsePointCalculator', __WEBPACK_IMPORTED_MODULE_13__numberTree_services_ellipse_point_calculator_service__["a" /* default */])
    .service('LineParamsCalculator', __WEBPACK_IMPORTED_MODULE_14__numberTree_services_line_params_calculator_service__["a" /* default */])
    .service('ExpressionCalculateService', __WEBPACK_IMPORTED_MODULE_15__services_expression_calculate_servise__["a" /* default */])
    .name);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<div class=header-container flex layout=row layout-align=\"start center\">\n    <div class=header-title>\n        NUMBER TREE\n    </div>\n</div>";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "<div class=input-container layout=column layout-align=end>\n    <form name=numberForm flex layout=row layout-align=\"center end\">\n        <md-input-container class=md-block flex-sm=60 flex-md=50 flex-gt-md=40>\n            <label>Input the number expression</label>\n            <input name=input ng-model=inputNumber ng-pattern=numberExpression required ng-change=verifyExpression(numberForm.input)>\n            <div ng-messages=numberForm.input.$error>\n                <div ng-message=required>This field is required</div>\n                <div ng-message=customErrorPattern>Must be a valid numeric arithmetic symbols!</div>\n                <div ng-message=customErrorNumberExpression>Must be a valid number expression!</div>\n            </div>\n        </md-input-container>\n    </form>\n    <div layout=row layout-align=center ng-class=\"numberForm.input.$valid ? 'valid' : 'invalid'\">\n        <div ng-show=inputNumber>\n            {{getResult(inputNumber)}}\n        </div>\n    </div>\n</div>\n";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<nt-header></nt-header>\n<md-content layout=column>\n    <nt-input input-control=inputControl></nt-input>\n    <number-tree class=number-tree input-tree=getNumberTree() layout=row layout-align=center></number-tree>\n</md-content>";

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<div id=tree-wrapper>\n    <div class=child-container></div>\n    <svg id=lines-container>\n    </svg>\n</div>";

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = HeaderDirective;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_html__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__header_html__);

__webpack_require__(1);

function HeaderDirective() {
    return {
        restrict: 'E',
        template: __WEBPACK_IMPORTED_MODULE_0__header_html___default.a,
    };
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = InputDirective;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_html__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__input_html__);


__webpack_require__(2);

const DEFAULT_ERRORS = ['pattern'];

function InputDirective(NumberExpressionValidator, NumberExpressionTransformer) {
    return {
        restrict: 'E',
        template: __WEBPACK_IMPORTED_MODULE_0__input_html___default.a,
        scope: {
            inputControl: '='
        },
        link: function ($scope) {
            $scope.inputNumber = '';
            $scope.result = null;

            $scope.verifyExpression = (form) => {
                if (!NumberExpressionValidator.isValidExpressionForPattern(form.$viewValue)) {
                    form.$setValidity('customErrorPattern', false);
                } else {
                    form.$setValidity('customErrorPattern', true);
                    if (NumberExpressionValidator.isValidExpression(form.$viewValue)) {
                        form.$setValidity('customErrorNumberExpression', true);
                        $scope.result = $scope.inputControl.onCalculateResult($scope.inputNumber);
                        $scope.inputControl.onProcess(NumberExpressionTransformer.transform($scope.inputNumber));
                    } else {
                        form.$setValidity('customErrorNumberExpression', false);
                    }

                }
            };

            $scope.getResult = (expression) => {
                return expression + (!!$scope.result ? ` = ${$scope.result}` : '');
            };

            $scope.getTransformerText = (text) => text ? NumberExpressionTransformer.transform(text) : '';
        }
    };
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NumberExpressionTransformer;
function NumberExpressionTransformer(ExpressionConstants) {
    this.transform = (expression) => {
        return transformExpression(expression);
    };

    function transformExpression(expression) {
        let newExpression = deleteAllSpaces(expression);
        return wrapExpression(newExpression)
    }

    function deleteAllSpaces(expression) {
        expression = deleteSpaceBefore(expression);
        return deleteSpaceAfter(expression);
    }

    function deleteSpaceBefore(expression) {
        return expression.replace(ExpressionConstants.SPACE_BEFORE, '');
    }

    function deleteSpaceAfter(expression) {
        _.forEach(expression.match(ExpressionConstants.SPACE_AFTER), (space) => {
            expression = expression.replace(space, space[0])
        });
        return expression;
    }

    function wrapExpression(expression) {
        return `(${expression})`
    }
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NumberExpressionValidator;
function NumberExpressionValidator(NumberExpressionTransformer, ExpressionConstants) {

    this.isValidExpression = (expression) => {
        const clearExpression = NumberExpressionTransformer.transform(expression);
        return verifyCountsBrackets(clearExpression)
            && verifyNumbers(clearExpression)
            && verifyLeftBrackets(clearExpression)
            && verifyRightBrackets(clearExpression)
            && verifyOperators(clearExpression);
    };

    this.isValidExpressionForPattern  = (expression) => {
        return !expression.match(ExpressionConstants.ALL_SYMBOLS);
    };

    function verifyCountsBrackets(expression) {
        return getSizeLeftBrackets(expression) === getSizeRightBrackets(expression);
    }

    function verifyLeftBrackets(expression) {
        return getSizeVerifiedLeftBrackets(expression) === getSizeLeftBrackets(expression);
    }

    function verifyRightBrackets(expression) {
        return getSizeVerifiedRightBrackets(expression) === getSizeRightBrackets(expression);
    }

    function getSizeVerifiedLeftBrackets(expression) {
        return _.size(expression.match(ExpressionConstants.VERIFY_LEFT_BRACKETS)) + getDuplicateBrackets(expression, ExpressionConstants.DUPLICATE_LEFT_BRACKETS);
    }

    function getSizeVerifiedRightBrackets(expression) {
        return _.size(expression.match(ExpressionConstants.VERIFY_RIGHT_BRACKETS)) + getDuplicateBrackets(expression, ExpressionConstants.DUPLICATE_RIGHT_BRACKETS);
    }

    function getDuplicateBrackets(expression, regex) {
        return _.size(expression.match(regex));
    }

    function verifyNumbers(expression) {
        return _.size(expression.match(ExpressionConstants.VERIFY_NUMBERS)) === _.size(expression.match(ExpressionConstants.NUMBERS));
    }

    function verifyOperators(expression) {
        return _.size(expression.match(ExpressionConstants.VERIFY_OPERATORS)) === _.size(expression.match(ExpressionConstants.OPERATORS));
    }

    function getSizeLeftBrackets(expression) {
        return _.size(expression.match(ExpressionConstants.LEFT_BRACKETS))
    }

    function getSizeRightBrackets(expression) {
        return _.size(expression.match(ExpressionConstants.RIGHT_BRACKETS))
    }
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MainController;
__webpack_require__(3);

function MainController($scope, NumberExpressionParser, PolishExpressionParser, ExpressionCalculateService) {
    let vm = $scope;

    vm.getNumberTree = ()=> vm.numberTree;

    vm.inputControl = {
        onProcess: (expression)=>{
            vm.numberTree = NumberExpressionParser.parse(expression);
        },
        onCalculateResult: (expression) => {
            return ExpressionCalculateService.calculate(PolishExpressionParser.parse(NumberExpressionParser.transformExpression(expression)));
        }
    }
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MainRouter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_html__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_controller__ = __webpack_require__(13);



function MainRouter($stateProvider) {
    return $stateProvider.state('mainPage', {
        template: __WEBPACK_IMPORTED_MODULE_0__main_html___default.a,
        controller: __WEBPACK_IMPORTED_MODULE_1__main_controller__["a" /* default */],
    })
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NumberTreeDirective;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number_tree_html__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number_tree_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__number_tree_html__);


__webpack_require__(4);

function NumberTreeDirective(TreeBuilder, TreeConstants, LineArrowBuilder, $compile) {
    return {
        restrict: 'E',
        template: __WEBPACK_IMPORTED_MODULE_0__number_tree_html___default.a,
        scope: {
            inputTree: '='
        },
        link: function (scope, element) {
            scope.$watch('inputTree', (tree) => {
                refreshTree(tree, element,scope);
            });
        }
    };

    function refreshTree(tree, element,scope) {
        if (tree) {
            refreshTreeBody(tree);
            $compile(element.contents())(scope);
            refreshConnectionsTreeContainer();
            LineArrowBuilder.buildConnectionsLines();
        }
    }

    function refreshTreeBody(tree) {
        let treeWrapper = document.getElementById(TreeConstants.TREE_WRAPPER_ELEMENT_ID);
        treeWrapper.removeChild(getTree(treeWrapper));
        treeWrapper.appendChild(TreeBuilder.build(tree));
    }

    function refreshConnectionsTreeContainer() {
        let treeWrapper = document.getElementById(TreeConstants.TREE_WRAPPER_ELEMENT_ID);
        treeWrapper.removeChild(getConnectionsTreeContainer(treeWrapper));
        treeWrapper.insertBefore(LineArrowBuilder.buildConnectionContainerElement(angular.element(treeWrapper)[0]), treeWrapper.firstChild);
    }

    function getTree(treeWrapper) {
        return _.find(treeWrapper.children, {className: TreeConstants.CHILD_CONTAINER_CLASS});
    }

    function getConnectionsTreeContainer(treeWrapper) {
        return _.find(treeWrapper.children, {id: TreeConstants.TREE_CONNECTIONS_CONTAINER});
    }
};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    CHILD_CLASS: "child",
    CHILD_CONTENT_CLASS: "child-content",
    CHILD_CONTAINER_CLASS: "child-container",
    CHILD_PAIR_CLASS: "child-pair",
    PAIR_OPERAND_CLASS: "pair-operand",
    TREE_WRAPPER_ELEMENT_ID: 'tree-wrapper',
    TREE_CONNECTIONS_CONTAINER: 'lines-container',
    HAS_CHILDREN: "has-children",
    PAIR_OPERAND: 'nt-operand'
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = EllipsePointCalculatorService;
function EllipsePointCalculatorService() {

    this.calculatePoint = (child, parent, ellipse, isRightChild) => getPointOnEllipse(child, parent, ellipse, isRightChild);

    function getPointOnEllipse(child, parent, ellipse, isRightChild) {
        let angular = getAngularBetweenVectors(child, parent);
        let ellipseRadius = getEllipseRadius(ellipse, (angular + 90) * Math.PI / 180) + 3;
        if (isRightChild) {
            angular = (angular) * Math.PI / 180;
        } else {
            angular = (-angular) * Math.PI / 180;
        }
        return {
            parentTop: parent.top + ellipseRadius * Math.cos(angular),
            parentLeft: parent.left + ellipseRadius * Math.sin(angular)
        }
    }

    function getAngularBetweenVectors(child, parent) {
        const leg1 = Math.abs(child.left - parent.left);
        const let2 = Math.abs(child.top - parent.top);
        const hypotenuse = Math.sqrt(raiseToSecondPow(leg1) + raiseToSecondPow(let2));
        return Math.asin(leg1 / hypotenuse) * 180 / Math.PI;
    }

    function getEllipseRadius(ellipse, angular) {
        const halfHeight = ellipse.clientHeight / 2;
        const halfWidth = ellipse.clientWidth / 2;
        return (halfHeight * halfWidth) /
            Math.sqrt(raiseToSecondPow(halfHeight) * raiseToSecondPow(Math.cos(angular))
                + raiseToSecondPow(halfWidth) * raiseToSecondPow(Math.sin(angular)));
    }

    function raiseToSecondPow(num) {
        return Math.pow(num, 2)
    }
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = LineArrowBuilderService;
function LineArrowBuilderService(TreeConstants, EllipsePointCalculator, LineParamsCalculator) {

    this.buildConnectionsLines = () => refreshConnectionsTree();

    this.buildConnectionContainerElement = (style) => createConnectionContainerElement(style);

    function refreshConnectionsTree() {
        const pairs = document.getElementsByClassName(TreeConstants.CHILD_PAIR_CLASS);
        let linesContainer = document.getElementById(TreeConstants.TREE_CONNECTIONS_CONTAINER);
        _.forEach(pairs, (pair) => {
            let linesParams = LineParamsCalculator.calculate(pair, linesContainer.getBoundingClientRect());
            _.forEach(linesParams, (line) => linesContainer.appendChild(createLineElement(line)));
            linesContainer.appendChild(createOperandElement(pair, linesContainer.getBoundingClientRect()));
        })
    }

    function createOperandElement(pair, lineContainerContent) {
        const children = _.map(pair.children, (child) => {
            const coor = child.firstChild.getBoundingClientRect();
            return {
                x: coor.x - lineContainerContent.x + coor.width / 2,
                y: coor.y - lineContainerContent.y + 25,
                halfWidth: coor.width /2,
            };
        });
        return create(children, angular.element(pair)[0].attributes[TreeConstants.PAIR_OPERAND].value);
    }

    function create(params, operand) {
        const x =  params[0].x + params[0].halfWidth + (params[1].x- params[1].halfWidth - params[0].x - params[0].halfWidth)/2 - 16;
        const y = params[0].y - 14;
        let image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
        image.setAttribute('x', x);
        image.setAttribute('y', y);
        image.setAttribute('href', `src/icons/${getOperator(operand)}.png`);
        return image;
    }

    function getOperator(operand) {
        return operands[operand];
    }

    const operands = {
        '+' : 'plus',
        '-' : 'minus',
        '*' : 'umn',
        '/' : 'del',
    };

    function createLineElement(lineParams) {
        let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', lineParams.childX);
        line.setAttribute('y1', lineParams.childY);
        line.setAttribute('x2', lineParams.parentX);
        line.setAttribute('y2', lineParams.parentY);
        line.setAttribute('class', lineParams.class);
        line.setAttribute('stroke-width', '2');
        line.setAttribute("marker-end", "url(#arrow)");
        return line;
    }

    function createConnectionContainerElement(style) {
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('id', TreeConstants.TREE_CONNECTIONS_CONTAINER);
        svg.innerHTML = `<defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="#3f51b5"/></marker></defs>`;
        svg.style.width = style.scrollWidth;
        svg.style.height = style.scrollHeight;
        return svg;
    }
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = LineParamsCalculatorService;
function LineParamsCalculatorService(TreeConstants, EllipsePointCalculator) {

    const CIRCLE_RADIUS = 25;

    this.calculate = (pair, containerParams) => calculateLinesParams(pair, containerParams);

    function calculateLinesParams(pair, containerParams) {
        let parentParams = calculate(getPairParent(pair), containerParams);
        let childrenParams = calculateChild(pair, containerParams);
        childrenParams = _.merge(childrenParams, divideParent(childrenParams, parentParams[0], getFirstChildPairParent(pair)));
        return _.map(childrenParams, childParams => transformParams(childParams));
    }

    function calculate(children, containerParams) {
        let params = getChildContainersParams(_.concat([], children));
        return _.map(params, (param) => {
            return {
                top: param.top - containerParams.top + CIRCLE_RADIUS,
                left: param.left - containerParams.left + param.halfWidth,
            };
        })
    }

    function calculateChild(children, containerParams) {
        children = _.filter(children.children, {className: TreeConstants.CHILD_CONTAINER_CLASS});
        return calculate(children, containerParams);
    }

    function getChildContainersParams(children) {
        return _.map(children, (child) => {
            const params = child.getBoundingClientRect();
            return {
                top: params.top,
                left: params.left,
                halfWidth: angular.element(child)[0].clientWidth / 2,
            }
        });
    }

    function divideParent(children, parent, parentElement) {
        let counter = 0;
        return _.map(children, child => getNewPointForParent(child, parent, parentElement, counter++));
    }

    function getNewPointForParent(child, parent, parentElement, counter) {
        return EllipsePointCalculator.calculatePoint(child, parent, parentElement, counter);
    }

    function getPairParent(pair) {
        return angular.element(pair)[0].parentElement;
    }

    function getFirstChildPairParent(pair) {
        return angular.element(angular.element(getPairParent(pair))[0].firstChild)[0]
    }

    function transformParams(child) {
        return {
            childY: child.top,
            childX: child.left,
            parentY: child.parentTop,
            parentX: child.parentLeft
        }
    }
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TreeBuilderService;
function TreeBuilderService(TreeConstants) {

    this.build = (treeObject) => {
        return createChildContainerElement(treeObject);
    };

    function createChildContainerElement(child) {
        if (child.expression) {
            let div = document.createElement('div');
            div.className = TreeConstants.CHILD_CONTAINER_CLASS;
            div.appendChild(createChildElement(child));

            if (hasChild(child)) {
                div.appendChild(createChildPair(child.expression));
            }
            return div;
        }
    }

    function createChildElement(child) {
        let div = document.createElement('div');
        if (child.expression.descriptionValue) {
            let tooTip = document.createElement('md-tooltip');
            tooTip.setAttribute('md-z-index', '200');
            tooTip.setAttribute('md-delay', '300');
            tooTip.setAttribute('md-direction', 'top');
            tooTip.innerHTML = child.expression.descriptionValue;
            //tooTip.style.width = tooTip.style.height = '50';
            div.appendChild(tooTip);
            div.className = TreeConstants.HAS_CHILDREN;
        } else {
            div.className = TreeConstants.CHILD_CLASS;
        }
        div.innerHTML += `<div class="${TreeConstants.CHILD_CONTENT_CLASS}">${getChildValue(child)}</div>`;

        return div
    }

    function createChildPair(pair) {
        let div = document.createElement('div');
        div.className = TreeConstants.CHILD_PAIR_CLASS;
        div.setAttribute(TreeConstants.PAIR_OPERAND, pair.operand);
        div.appendChild(createChildContainerElement(pair.left));
        div.appendChild(createChildContainerElement(pair.right));
        return div;
    }

    function getChildValue(child) {
        return child.expression.left ? child.expression.fullValue : child.expression;
    }

    function hasChild(child) {
        return child.expression.left;
    }

}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    SPACE_AFTER: /(?:[\(\)\+\-\*\/]?)\s+/g,
    SPACE_BEFORE: /\s+(?=[\(\)\+\-\*\/])/g,
    LEFT_BRACKETS: /\(/g,
    RIGHT_BRACKETS: /\)/g,
    VERIFY_LEFT_BRACKETS: /\([\(\d\-]/g,
    VERIFY_RIGHT_BRACKETS: /\)[\)\-\/\+\*]|\)$/g,
    DUPLICATE_LEFT_BRACKETS: /\({2}/g,
    DUPLICATE_RIGHT_BRACKETS: /\){2}/g,
    NUMBER: /\d+/,
    NUMBERS: /\d+/g,
    CHECK_NUMBER: /\d+|\-\d+/,
    VERIFY_NUMBERS: /\d+[\)\-\/\+\*]/g,
    OPERATORS: /[\-\/\+\*]/g,
    VERIFY_OPERATORS: /[\-\/\+\*][\d\(]/g,
    PARSE_EXPRESSION: /\d+| \-\d+|[\(\)\+\-\*\/]/g,
    PARSE_EXCEPTION_MINUS: /\(\-/g,
    NO_NUMBERS: /\D$/,
    ALL_SYMBOLS: /[^\(\)\+\-\*\/ \ \d]/,
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ExpressionCalculateService;
function ExpressionCalculateService(ExpressionConstants) {
    this.calculate = (expression)=> {
        return calculateExpression(expression);
    };

    function calculateExpression(expression) {
        while (expression.length > 1) {
            const operatorIndex = _.findIndex(expression, (element) => checkOperator(element));
            expression = calculate(expression, operatorIndex);
        }
        return expression[0];
    }

    function checkOperator(element) {
        return _.toString(element).match(ExpressionConstants.NO_NUMBERS);
    }

    function calculate(expression, operatorIndex) {
        if(isNaN(operatorIndex)){
            alert("expression is so big");
        }
        const value = operations[expression[operatorIndex]](_.toNumber(expression[operatorIndex - 2]), _.toNumber(expression[operatorIndex - 1]));
        return _.concat(expression.slice(0, operatorIndex - 2), value, expression.slice(operatorIndex + 1));
    }

    const operations = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => x / y,
        "^": (x, y) => Math.pow(x, y),
    };
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NumberExpressionParser;
function NumberExpressionParser(TreeExpressionParser, PolishExpressionParser, ExpressionConstants) {

    this.parse = (expression) => {
        const parsedExpression = this.transformExpression(expression);
        const polishExpression = PolishExpressionParser.parse(parsedExpression);
        return TreeExpressionParser.parse(polishExpression);
    };

    this.transformExpression = (expression) => {
        expression = addSpaceBetweenBracketAndMinus(expression); //fixed situation with (-
        const parsedExpression = expression.match(ExpressionConstants.PARSE_EXPRESSION);
        return trimExpression(parsedExpression);
    };

    function addSpaceBetweenBracketAndMinus(expression) {
        return expression.replace(ExpressionConstants.PARSE_EXCEPTION_MINUS, '( -');
    }

    function trimExpression(expression) {
        return _.map(expression, (symbol) => _.trim(symbol));
    }
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PolishExpressionParser;
function PolishExpressionParser(ExpressionConstants) {

    let outputExpression = [];
    let operandStack = [];

    const NUMBER = "NUMBER";
    const OPERAND = "OPERAND";
    const BRACKET = "BRACKET";
    const FIRST_BRACKET = "(";
    const LAST_BRACKET = ")";

    const OPERAND_PRIORITY = {
        "(": 1,
        "+": 2,
        "-": 3,
        "*": 4,
        "/": 5,
        "^": 6,
    };

    this.parse = (expression) => {
        clearData();
        return parseExpression(expression);
    };

    function clearData() {
        operandStack = [];
        outputExpression = [];
    }

    function parseExpression(expression) {
        _.forEach(expression, (symbol) =>
            SYMBOL_CALLBACKS[getTypeSymbol(symbol)].callback(symbol));
        return concatExpressionAndOperands();
    }

    function concatExpressionAndOperands() {
        return _.concat(outputExpression, _.reverse(operandStack));
    }

    function getTypeSymbol(symbol) {
        if (symbol.match(ExpressionConstants.CHECK_NUMBER)) {
            return NUMBER;
        } else if (symbol === LAST_BRACKET) {
            return BRACKET;
        } else {
            return OPERAND;
        }
    }

    const SYMBOL_CALLBACKS = {
        NUMBER: {
            callback: (number) => outputExpression.push(number)
        },
        OPERAND: {
            callback: (currentOperand) => operandCallBack(currentOperand)
        },
        BRACKET: {
            callback: () => bracketCallBack()
        }
    };

    function operandCallBack(currentOperand) {
        operandStack = _.dropRightWhile(operandStack, (operand) => {
            if (OPERAND_PRIORITY[operand] === OPERAND_PRIORITY[currentOperand] && OPERAND_PRIORITY[currentOperand] === 3) { // if current and first minus
                outputExpression.push(operand);
                operandStack.pop();
                return false;
            }
            if (OPERAND_PRIORITY[operand] > OPERAND_PRIORITY[currentOperand] && OPERAND_PRIORITY[currentOperand] !== 1) { //if first bracket need push
                outputExpression.push(operand);
                return true;
            } else {
                return false;
            }
        });
        operandStack.push(currentOperand);
    }

    function bracketCallBack() {
        operandStack = _.dropRightWhile(operandStack, (operand) => {
            if (operand !== FIRST_BRACKET) {
                outputExpression.push(operand);
                return true
            } else {
                return false;
            }
        });
        operandStack.pop(); //delete FIRST_BRACKET;
    }
};

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = TreeExpressionParser;
function TreeExpressionParser(ExpressionConstants) {

    this.parse = (expression) => parseExpression(expression);

    function parseExpression(expression) {
        while (expression.length > 1) {
            const operatorIndex = _.findIndex(expression, (element) => checkOperator(element));
            expression = addBranchToExpression(expression, operatorIndex);
        }
        return wrapTreeObject(expression);
    }

    function checkOperator(element) {
        return isNotBranch(element) && element.match(ExpressionConstants.NO_NUMBERS);
    }

    function isNotBranch(element) {
        return !_.isObjectLike(element);
    }

    function addBranchToExpression(expression, operatorIndex) {
        const branch = createBranch(expression[operatorIndex - 2], expression[operatorIndex - 1], expression[operatorIndex]);
        return _.concat(expression.slice(0, operatorIndex - 2), branch, expression.slice(operatorIndex + 1));
    }

    function createBranch(left, right, operand) {
        let branch = {};
        branch.left = {expression: left};
        branch.right = {expression: right};
        branch.operand = operand;
        branch.fullValue = getBranchValue(branch);
        branch.descriptionValue = getDescriptionValue(branch);
        return branch;
    }

    function getBranchValue(branch) {
        let left = getValue(branch.left);
        let right = getValue(branch.right);
        return operations[branch.operand](_.toNumber(left), _.toNumber(right));
    }

    function getDescriptionValue(branch) {
        return isNotLastChild(branch) ? `${branch.fullValue} = ${getValue(branch.left)} ${branch.operand} ${getValue(branch.right)}` : null;
    }

    function getValue(branch) {
        return hasChild(branch) ? branch.expression.fullValue : branch.expression;
    }

    function isNotLastChild(branch){
        return branch.left;
    }

    function hasChild(branch) {
        return  branch.expression && branch.expression.left;
    }

    function wrapTreeObject(expression) {
        return {expression: expression[0]};
    }

    const operations = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => x / y,
        "^": (x, y) => Math.pow(x, y),
    };
};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_main_module__ = __webpack_require__(0);


angular.module('app', ['ngMaterial', 'ui.router', 'mainPage'])
    .controller("ctrl", $state => $state.go('mainPage'));



/***/ })
/******/ ]);