"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var react_router_1 = require("react-router");
require("./sass/page_404.sass");
var ru_1 = require("./translation/ru");
var Page404 = (function (_super) {
    __extends(Page404, _super);
    function Page404() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page404.prototype.render = function () {
        return (<div className="page_not_found">
				<span className="error_code">{ru_1.TRANSLATION.PAGE404.ERROR_CODE}</span>
				<h1 className="header">{ru_1.TRANSLATION.PAGE404.HEADER}</h1>
				<react_router_1.IndexLink to="/" className="back_to_main_page" href="">
					<span>{ru_1.TRANSLATION.PAGE404.BACK_TO_MAIN_PAGE}</span>
				</react_router_1.IndexLink>
			</div>);
    };
    return Page404;
}(react_1.Component));
exports.Page404 = Page404;
