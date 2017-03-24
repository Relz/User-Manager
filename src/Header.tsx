import * as React from "react";
import {Component} from "react";
import {IndexLink} from "react-router";
import {TRANSLATION} from "./translation/ru";
const logo = "/" + require("./img/logo.svg");

export class Header extends Component<{menu: any}, any>
{
	public render()
	{
		const Menu: any = this.props.menu;
		return (
			<div className="header">
				<IndexLink to="/" className="logo">
					<img src={logo} className="image" alt={TRANSLATION.ALT.LOGO}/>
					<h1 className="text">{TRANSLATION.PAGE_HEADER}</h1>
				</IndexLink>
				<Menu />
			</div>
		);
	}
}
