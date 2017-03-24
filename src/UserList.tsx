import * as React from "react";
import {CONSTANT} from "./constant";
import {TRANSLATION} from "./translation/ru";
import {User} from "./User";
import {UserRow} from "./UserRow";

let userArray: User[] = [];

export const UserList = React.createClass({
	render()
	{
		if (!this.state.response) {
			if (this.state.error)
			{
				return <span className="loading error">{TRANSLATION.USER_LIST.ERROR}</span>;
			}
			else
			{
				return <span className="loading waiting">{TRANSLATION.USER_LIST.WAITING}</span>;
			}
		}
		if (this.state.response.length === 0) {
			return <span className="loading empty">{TRANSLATION.USER_LIST.EMPTY}</span>;
		}
		return (
			<div id="userList" className="user_list">
				<img src="" />
				<table className="table" id="userListTable">
					<thead>
					<tr>
						<th>{TRANSLATION.USER_LIST.TABLE_HEAD.LAST_NAME}</th>
						<th>{TRANSLATION.USER_LIST.TABLE_HEAD.FIRST_NAME}</th>
						<th>{TRANSLATION.USER_LIST.TABLE_HEAD.MIDDLE_NAME}</th>
						<th>{TRANSLATION.USER_LIST.TABLE_HEAD.BIRTHDAY}</th>
						<th>{TRANSLATION.USER_LIST.TABLE_HEAD.EMAIL}</th>
						<th>{TRANSLATION.USER_LIST.TABLE_HEAD.PHONE_NUMBER}</th>
						<th>{TRANSLATION.USER_LIST.TABLE_HEAD.PHOTO}</th>
						<th>{TRANSLATION.USER_LIST.TABLE_HEAD.EDIT}</th>
						<th>{TRANSLATION.USER_LIST.TABLE_HEAD.REMOVE}</th>
					</tr>
					</thead>
					<UserRow users={userArray} userList={this}/>
				</table>
			</div>
		);
	},

	getInitialState()
	{
		return { response: undefined, error: false };
	},

	componentDidMount()
	{
		fetch(CONSTANT.SERVER.URL + ":" + CONSTANT.SERVER.PORT + CONSTANT.SERVER.ACTION_URL.USERS_LIST, {
			method: "GET"
		}).then((response) => {
			if (response.ok)
			{
				return response.text();
			}
		}).then((body) => {
			userArray = JSON.parse(body);
			this.setState({response: userArray, error: false});
		}).catch(() => {
			this.setState({response: undefined, error: true});
		});
	}
});
