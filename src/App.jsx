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
require("./sass/app.sass");
var ru_1 = require("./translation/ru");
var logo = require("./img/logo.svg");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (<div className="app">
				<div className="header">
					<react_router_1.IndexLink to="/" className="logo" href="">
						<img src={logo} className="image" alt={ru_1.TRANSLATION.ALT.LOGO}/>
						<h1 className="text">{ru_1.TRANSLATION.PAGE_HEADER}</h1>
					</react_router_1.IndexLink>
					<ul className="menu">
						<li className="item"><react_router_1.Link to="/users/list" activeClassName="active">{ru_1.TRANSLATION.MENU.GET_USERS}</react_router_1.Link></li>
						<li className="item"><react_router_1.Link to="/users/add" activeClassName="active">{ru_1.TRANSLATION.MENU.ADD_USER}</react_router_1.Link></li>
					</ul>
				</div>
				<div className="content" id="content">
					{this.props.children}
				</div>
			</div>);
    };
    return App;
}(react_1.Component));
exports.App = App;
