import * as React from "react";
import {CONSTANT} from "./constant";
import {TRANSLATION} from "./translation/ru";
import {isValid, User} from "./User";
import {hideMessage, showMessage, UserForm} from "./UserForm";

export const UserAdd = React.createClass({
	render()
	{
		const userId: number = -1;
		return (
			<UserForm
				containerClassName="user_add"
				translation={TRANSLATION.USER_ADD}
				userId={userId}
				onFormSubmit={onFormSubmit}
			/>
		);
	}
});

function onFormSubmit(userId: number)
{
	const submitButton: any = document.getElementById("submit");
	const lastNameElement: any = document.getElementById("lastName");
	const firstNameElement: any = document.getElementById("firstName");
	const middleNameElement: any = document.getElementById("middleName");
	const birthdayElement: any = document.getElementById("birthday");
	const emailElement: any = document.getElementById("email");
	const phoneNumberElement: any = document.getElementById("phoneNumber");
	const chooseFileElement: any = document.getElementById("photo");

	const user: User = {
		id: 0,
		lastName: lastNameElement.value.toString(),
		firstName: firstNameElement.value.toString(),
		middleName: middleNameElement.value.toString(),
		birthday: birthdayElement.value.toString(),
		email: emailElement.value.toString(),
		phoneNumber: phoneNumberElement.value.toString(),
		photo: chooseFileElement.value.toString()
	};

	if (!isValid(user, true))
	{
		showMessage(TRANSLATION.USER_ADD.FORM_MSG.FILL_ALL_FIELDS, "error");
		return;
	}
	hideMessage();

	submitButton.disabled = true;

	showMessage(TRANSLATION.USER_ADD.FORM_MSG.PROCESSING, "processing");

	const formElement: any = document.getElementById("form");
	const form: any = new FormData(formElement);

	fetch(CONSTANT.SERVER.URL + ":" + CONSTANT.SERVER.PORT + CONSTANT.SERVER.ACTION_URL.USER_ADD, {
		method: "POST",
		body: form
	}).then((response) => {
		if (response.ok)
		{
			showMessage(TRANSLATION.USER_ADD.FORM_MSG.SUCCESS, "success");
			formElement.reset();
			const chooseFileLabelElement: any = document.getElementById("photoLabel");
			chooseFileLabelElement.innerHTML = TRANSLATION.USER_ADD.FORM.PHOTO;
			submitButton.disabled = false;
		}
	}).catch(() => {
		showMessage(TRANSLATION.USER_ADD.FORM_MSG.FAILED, "error");
		submitButton.disabled = false;
	});
}
