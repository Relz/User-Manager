import * as React from "react";
import * as ReactDOM from "react-dom";
import {browserHistory, IndexRoute, Route, Router} from "react-router";
import {App} from "./App";
import {CONSTANT} from "./constant";
import {Page404} from "./Page404";
import "./sass/index.sass";
import {UserAdd} from "./UserAdd";
import {UserEdit} from "./UserEdit";
import {UserList} from "./UserList";

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={UserList} />
			<Route path={CONSTANT.PATH.USERS_LIST} component={UserList} />
			<Route path={CONSTANT.PATH.USERS_ADD} component={UserAdd} />
			<Route path={CONSTANT.PATH.USERS_EDIT} component={UserEdit} />
		</Route>
		<Route path="*" component={Page404} />
	</Router>,
	document.getElementById("root")
);
