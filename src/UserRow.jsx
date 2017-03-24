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
var editSVG = "/" + require("./img/edit.svg");
var removeSVG = "/" + require("./img/remove.svg");
var constant_1 = require("./constant");
var ru_1 = require("./translation/ru");
var UserRow = (function (_super) {
    __extends(UserRow, _super);
    function UserRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserRow.prototype.render = function () {
        var userComponents = this.props.users.map(function (user) {
            return (<tr className="user" key={user.id}>
					<td>{user.lastName}</td>
					<td>{user.firstName}</td>
					<td>{user.middleName}</td>
					<td>{user.birthday}</td>
					<td>{user.email}</td>
					<td>{user.phoneNumber}</td>
					<td>{user.photo}</td>
					<td>
						<img src={editSVG} className="user_edit" width="32" height="32" alt={ru_1.TRANSLATION.ALT.USER_LIST.EDIT} onClick={onUserEditClick}/>
					</td>
					<td>
						<img src={removeSVG} className="user_remove" width="32" height="32" alt={ru_1.TRANSLATION.ALT.USER_LIST.REMOVE} onClick={onUserRemoveClick.bind(null, user.id)}/>
					</td>
				</tr>);
        });
        return <tbody>{userComponents}</tbody>;
    };
    return UserRow;
}(react_1.Component));
exports.UserRow = UserRow;
function onUserEditClick() {
}
function onUserRemoveClick(userId) {
    function onUserRemoveError() {
        console.log("ERROR");
    }
    console.log(userId);
    fetch("http://usermanager-server.local:1507/remove_user/" + userId, {
        method: "DELETE"
    }).then(function (response) {
        if (response.status === constant_1.constant.HTTP_STATUS_CODE.OK) {
            console.log("SUCCESS");
        }
        else {
            onUserRemoveError();
        }
    }).catch(function () {
        onUserRemoveError();
    });
}
