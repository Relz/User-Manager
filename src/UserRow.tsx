import * as React from "react";
import {Component} from "react";
import {Link} from "react-router";
import {User} from "./User";
const downloadSVG = "/" + require("./img/download.svg");
const editSVG = "/" + require("./img/edit.svg");
const removeSVG = "/" + require("./img/remove.svg");
import {CONSTANT} from "./constant";
import {TRANSLATION} from "./translation/ru";

export class UserRow extends Component<any, any>
{
	public render()
	{
		const userComponents = this.props.users.map((user: User) => {
			const userIdStr: string = (user.id).toString();
			return (
				<tr className="user" key={user.id} id={userIdStr}>
					<td>{user.lastName}</td>
					<td>{user.firstName}</td>
					<td>{user.middleName}</td>
					<td>{user.birthday}</td>
					<td>{user.email}</td>
					<td>{user.phoneNumber}</td>
					<td className="user_download_photo">
						<a
							className="user_download_photo_link"
							href={CONSTANT.SERVER.URL + ":" + CONSTANT.SERVER.PORT + "/" + user.photo}
						>
							<img
								src={downloadSVG}
								className="user_download_photo_img"
								width="32"
								height="32"
								alt={TRANSLATION.ALT.USER_LIST.EDIT}
							/>
						</a>
					</td>
					<td>
						<Link to={CONSTANT.PATH.USERS_EDIT + "?userId=" + user.id}>
							<img
								src={editSVG}
								className="user_edit_img"
								width="32"
								height="32"
								alt={TRANSLATION.ALT.USER_LIST.EDIT}
							/>
						</Link>
					</td>
					<td>
						<img
							src={removeSVG}
							className="user_remove_img"
							width="32"
							height="32"
							alt={TRANSLATION.ALT.USER_LIST.REMOVE}
							onClick={onUserRemoveClick.bind(undefined, user.id, this.props.userList)}
						/>
					</td>
				</tr>
			);
		});
		return <tbody>{userComponents}</tbody>;
	}
}

function onUserRemoveClick(userId: number, userList: any)
{
	fetch(CONSTANT.SERVER.URL + ":" + CONSTANT.SERVER.PORT + CONSTANT.SERVER.ACTION_URL.USER_REMOVE + "/" + userId, {
		method: "DELETE"
	}).then((response) => {
		if (response.ok)
		{
			document.getElementById(userId.toString()).outerHTML = "";
			const tableElement = document.getElementById("userListTable");
			const rowCount = tableElement.getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
			if (rowCount === 0)
			{
				userList.setState({response: [], error: false});
			}
		}
	});
}
