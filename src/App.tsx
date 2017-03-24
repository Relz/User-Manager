import * as React from "react";
import {Component} from "react";
import {Header} from "./Header";
import {Menu} from "./Menu";
import "./sass/app.sass";

export class App extends Component<{}, {}>
{
	public render()
	{
		return (
			<div className="app">
				<Header menu={Menu} />
				<div className="content" id="content">
					{this.props.children}
				</div>
			</div>
		);
	}
}
