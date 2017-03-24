"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_1 = require("react-router");
var App_1 = require("./App");
var Page404_1 = require("./Page404");
require("./sass/index.sass");
var UserAdd_1 = require("./UserAdd");
var UserList_1 = require("./UserList");
ReactDOM.render(<react_router_1.Router history={react_router_1.browserHistory}>
		<react_router_1.Route path="/" component={App_1.App}>
			<react_router_1.IndexRoute component={UserList_1.UserList}/>
			<react_router_1.Route path="users/list" component={UserList_1.UserList}/>
			<react_router_1.Route path="users/add" component={UserAdd_1.UserAdd}/>
		</react_router_1.Route>
		<react_router_1.Route path="*" component={Page404_1.Page404}/>
	</react_router_1.Router>, document.getElementById("root"));
