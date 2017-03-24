"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var React = require("react");
var DatePicker = require("react-datepicker");
require("react-datepicker/dist/react-datepicker.css");
var ReactDOM = require("react-dom");
var constant_1 = require("./constant");
var ru_1 = require("./translation/ru");
exports.UserAdd = React.createClass({
    render: function () {
        return (<div className="user_add">
				<h2 className="header_text">{ru_1.TRANSLATION.USER_ADD.HEADER}</h2>
				<div className="form_msg" id="formMsg"/>
				<form className="form" id="form">
					<input className="row" type="text" name="last_name" id="lastName" placeholder={ru_1.TRANSLATION.USER_ADD.FORM.LAST_NAME}/>
					<input className="row" type="text" name="first_name" id="firstName" placeholder={ru_1.TRANSLATION.USER_ADD.FORM.FIRST_NAME}/>
					<input className="row" type="text" name="middle_name" id="middleName" placeholder={ru_1.TRANSLATION.USER_ADD.FORM.MIDDLE_NAME}/>
					<label className="row choose_date_label" htmlFor="birthday">{ru_1.TRANSLATION.USER_ADD.FORM.BIRTHDAY}</label>
					<DatePicker className="row choose_date" dateFormat="DD.MM.YYYY" name="birthday" id="birthday" selected={this.state.startDate} onChange={this.onDatePickerChange}/>
					<input className="row" type="email" name="email" id="email" placeholder={ru_1.TRANSLATION.USER_ADD.FORM.EMAIL}/>
					<input className="row" type="text" name="phone_number" id="phoneNumber" placeholder={ru_1.TRANSLATION.USER_ADD.FORM.PHONE_NUMBER}/>
					<label className="row choose_file_label" htmlFor="photo" id="photoLabel">{ru_1.TRANSLATION.USER_ADD.FORM.PHOTO}</label>
					<input className="row choose_file" type="file" name="photo" id="photo" onChange={onChooseFileChange.bind(this)}/>
					<input className="submit" type="button" value={ru_1.TRANSLATION.USER_ADD.FORM.SUBMIT} onClick={onSubmitClick}/>
				</form>
			</div>);
    },
    getInitialState: function () {
        return {
            startDate: moment()
        };
    },
    onDatePickerChange: function (date) {
        this.setState({
            startDate: date
        });
    }
});
function onChooseFileChange(event) {
    event.preventDefault();
    var chooseFileElement = event.target;
    var chooseFileLabelElement = document.getElementById("photoLabel");
    chooseFileLabelElement.innerHTML = chooseFileElement.files[0].name;
}
function onSubmitClick(event) {
    var formMsg = document.getElementById("formMsg");
    formMsg.classList.remove("error");
    formMsg.classList.remove("processing");
    formMsg.classList.remove("success");
    var submitButton = event.target;
    function onUserAddError() {
        formMsg.classList.remove("processing");
        formMsg.classList.add("error");
        formMsg.innerHTML = "";
        ReactDOM.render(<span>{ru_1.TRANSLATION.USER_ADD.FORM_MSG.FAILED}</span>, formMsg);
        submitButton.disabled = false;
    }
    var lastNameELement = document.getElementById("lastName");
    var firstNameELement = document.getElementById("firstName");
    var middleNameELement = document.getElementById("middleName");
    var birthdayELement = document.getElementById("birthday");
    var emailELement = document.getElementById("email");
    var phoneNumberELement = document.getElementById("phoneNumber");
    var chooseFileElement = document.getElementById("photo");
    if (lastNameELement.value === "" ||
        firstNameELement.value === "" ||
        middleNameELement.value === "" ||
        birthdayELement.value === "" ||
        emailELement.value === "" ||
        phoneNumberELement.value === "" ||
        chooseFileElement.value === "") {
        ReactDOM.render(<span>{ru_1.TRANSLATION.USER_ADD.FORM_MSG.FILL_ALL_FIELDS}</span>, formMsg);
        formMsg.classList.add("error");
        formMsg.style.display = "block";
        return;
    }
    formMsg.style.display = "none";
    formMsg.innerHTML = "";
    submitButton.disabled = true;
    ReactDOM.render(<span>{ru_1.TRANSLATION.USER_ADD.FORM_MSG.PROCESSING}</span>, formMsg);
    formMsg.classList.add("processing");
    formMsg.style.display = "block";
    var formElement = document.getElementById("form");
    var form = new FormData(formElement);
    fetch("http://usermanager-server.local:1507/add_user", {
        method: "POST",
        body: form
    }).then(function (response) {
        if (response.status === constant_1.constant.HTTP_STATUS_CODE.OK) {
            formMsg.classList.remove("processing");
            formMsg.classList.add("success");
            formMsg.innerHTML = "";
            ReactDOM.render(<span>{ru_1.TRANSLATION.USER_ADD.FORM_MSG.SUCCESS}</span>, formMsg);
            lastNameELement.value = "";
            firstNameELement.value = "";
            middleNameELement.value = "";
            birthdayELement.value = "";
            emailELement.value = "";
            phoneNumberELement.value = "";
            chooseFileElement.value = "";
            var chooseFileLabelElement = document.getElementById("photoLabel");
            chooseFileLabelElement.innerHTML = ru_1.TRANSLATION.USER_ADD.FORM.PHOTO;
            submitButton.disabled = false;
        }
        else {
            onUserAddError();
        }
    }).catch(function () {
        onUserAddError();
    });
}
