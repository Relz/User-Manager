"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Request = require("request");
var constant_1 = require("./constant");
var ru_1 = require("./translation/ru");
var UserRow_1 = require("./UserRow");
var userArray = [];
exports.UserList = React.createClass({
    render: function () {
        if (!this.state.response) {
            if (this.state.error) {
                return <span className="loading error">{ru_1.TRANSLATION.USER_LIST.ERROR}</span>;
            }
            else {
                return <span className="loading waiting">{ru_1.TRANSLATION.USER_LIST.WAITING}</span>;
            }
        }
        if (this.state.response.length === 0) {
            return <span className="loading empty">{ru_1.TRANSLATION.USER_LIST.EMPTY}</span>;
        }
        return (<div id="userList" className="user_list">
				<table className="table">
					<thead>
					<tr>
						<th>{ru_1.TRANSLATION.USER_LIST.TABLE_HEAD.LAST_NAME}</th>
						<th>{ru_1.TRANSLATION.USER_LIST.TABLE_HEAD.FIRST_NAME}</th>
						<th>{ru_1.TRANSLATION.USER_LIST.TABLE_HEAD.MIDDLE_NAME}</th>
						<th>{ru_1.TRANSLATION.USER_LIST.TABLE_HEAD.BIRTHDAY}</th>
						<th>{ru_1.TRANSLATION.USER_LIST.TABLE_HEAD.EMAIL}</th>
						<th>{ru_1.TRANSLATION.USER_LIST.TABLE_HEAD.PHONE_NUMBER}</th>
						<th>{ru_1.TRANSLATION.USER_LIST.TABLE_HEAD.PHOTO}</th>
						<th>{ru_1.TRANSLATION.USER_LIST.TABLE_HEAD.EDIT}</th>
						<th>{ru_1.TRANSLATION.USER_LIST.TABLE_HEAD.REMOVE}</th>
					</tr>
					</thead>
					<UserRow_1.UserRow users={userArray}/>
				</table>
			</div>);
    },
    getInitialState: function () {
        return { response: undefined, error: false };
    },
    componentDidMount: function () {
        var _this = this;
        Request("http://usermanager-server.local:1507/get_users", function (error, response, body) {
            if (error || !response || response.statusCode !== constant_1.constant.HTTP_STATUS_CODE.OK) {
                console.log("error:", error);
                console.log("statusCode:", response && response.statusCode);
                _this.setState({ response: undefined, error: true });
            }
            userArray = JSON.parse(body);
            _this.setState({ response: userArray, error: false });
        });
    }
});
