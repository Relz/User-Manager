import * as moment from "moment";
import {Moment} from "moment";
import * as React from "react";
import {Component} from "react";
import * as DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as ReactDOM from "react-dom";
import {CONSTANT} from "./constant";
const logo = "/" + require("./img/logo.svg");
import {isValid, User} from "./User";

interface Props
{
	containerClassName: string;
	translation: any;
	userId: number;
	onFormSubmit(userId: number): void;
}

interface State
{
	date: Moment;
}

export class UserForm extends Component<Props, State>
{
	public constructor(props: Props)
	{
		super(props);
		this.state = {date: undefined};

		if (this.props.userId !== -1)
		{
			this.fillUserForm(this.props.userId);
		}
	}

	public render()
	{
		const translation: any = this.props.translation;
		return (
			<div className={this.props.containerClassName}>
				<h2 className="header_text">{translation.HEADER}</h2>
				<div className="form_msg" id="formMsg" />
				<form className="form" id="form">
					<input
						className="row"
						type="text"
						name="last_name"
						id="lastName"
						placeholder={translation.FORM.LAST_NAME}
					/>
					<input
						className="row"
						type="text"
						name="first_name"
						id="firstName"
						placeholder={translation.FORM.FIRST_NAME}
					/>
					<input
						className="row"
						type="text"
						name="middle_name"
						id="middleName"
						placeholder={translation.FORM.MIDDLE_NAME}
					/>
					<label className="row choose_date_label" htmlFor="birthday">{translation.FORM.BIRTHDAY}</label>
					<DatePicker
						className="row choose_date"
						dateFormat={CONSTANT.DATE_FORMAT}
						name="birthday"
						id="birthday"
						selected={this.state.date}
						onChange={this.onDatePickerChange.bind(this)}
					/>
					<input
						className="row"
						type="email"
						name="email"
						id="email"
						placeholder={translation.FORM.EMAIL}
					/>
					<input
						className="row"
						type="text"
						name="phone_number"
						id="phoneNumber"
						placeholder={translation.FORM.PHONE_NUMBER}
					/>
					<label
						className="row choose_file_label"
						htmlFor="photo"
						id="photoLabel"
						tabIndex={0}
					>
						{translation.FORM.PHOTO}
					</label>
					<input
						className="row choose_file"
						type="file"
						name="photo"
						id="photo"
						onChange={onChooseFileChange.bind(this)}
					/>
					<input
						className="submit"
						id="submit"
						type="button"
						value={translation.FORM.SUBMIT}
						onClick={this.props.onFormSubmit.bind(undefined, this.props.userId)}
					/>
				</form>
			</div>
		);
	};

	private onDatePickerChange(newDate: any)
	{
		console.log(this);
		this.setState({date: newDate});
	};

	private fillUserForm(userId: number)
	{
		function setHtmlValue(htmlElement: any, value: string)
		{
			htmlElement.value = value;
			htmlElement.setAttribute("value", value);
		}

		fetch(
			CONSTANT.SERVER.URL + ":" +
			CONSTANT.SERVER.PORT +
			CONSTANT.SERVER.ACTION_URL.USER_GET_DATA +
			"?userId=" +
			userId,
			{ method: "GET"	}
		).then((response) => {
			if (response.ok)
			{
				return response.json();
			}
		})
		.then((jsonResponse: any) => {
			const user: User = {
				id: jsonResponse.id,
				lastName: jsonResponse.lastName,
				firstName: jsonResponse.firstName,
				middleName: jsonResponse.middleName,
				birthday: jsonResponse.birthday,
				email: jsonResponse.email,
				phoneNumber: jsonResponse.phoneNumber,
				photo: jsonResponse.photo
			};

			setHtmlValue(document.getElementById("lastName"), user.lastName);
			setHtmlValue(document.getElementById("firstName"), user.firstName);
			setHtmlValue(document.getElementById("middleName"), user.middleName);
			setHtmlValue(document.getElementById("email"), user.email);
			setHtmlValue(document.getElementById("phoneNumber"), user.phoneNumber);

			this.setState({date: moment(user.birthday, CONSTANT.DATE_FORMAT)});
		}).catch(() => {
			showMessage(this.props.translation.FORM_MSG.FAILED_TO_GET_USER_DATA, "error");
		});
	}
}

function onChooseFileChange(event: any)
{
	event.preventDefault();
	const chooseFileElement = event.target;
	const chooseFileLabelElement = document.getElementById("photoLabel");
	chooseFileLabelElement.innerHTML = chooseFileElement.files[0].name;
}

export function hideMessage()
{
	const formMsg = document.getElementById("formMsg");
	formMsg.style.display = "none";
	formMsg.innerHTML = "";
}

export function showMessage(msg: string, className: string)
{
	const formMsg = document.getElementById("formMsg");
	formMsg.innerHTML = "";
	ReactDOM.render(<span>{msg}</span>, formMsg);
	formMsg.classList.remove("error");
	formMsg.classList.remove("processing");
	formMsg.classList.remove("success");
	formMsg.classList.add(className);
	formMsg.style.display = "block";
}
