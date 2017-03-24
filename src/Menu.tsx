import * as React from "react";
import {Component} from "react";
import {Link} from "react-router";
import {CONSTANT} from "./constant";
import {TRANSLATION} from "./translation/ru";

export class Menu extends Component<{}, {}>
{
	public render()
	{
		return (
			<ul className="menu">
				<li className="item">
					<Link to={CONSTANT.PATH.USERS_LIST} activeClassName="active">{TRANSLATION.MENU.GET_USERS}</Link>
				</li>
				<li className="item">
					<Link to={CONSTANT.PATH.USERS_ADD} activeClassName="active">{TRANSLATION.MENU.ADD_USER}</Link>
				</li>
			</ul>
		);
	}
}
