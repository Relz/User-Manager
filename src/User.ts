import * as _ from "lodash";

export class User
{
	public id: number;
	public lastName: string;
	public firstName: string;
	public middleName: string;
	public birthday: string;
	public email: string;
	public phoneNumber: string;
	public photo: string;
}

export function isValid(user: User, photoRequired: boolean): boolean
{
	const values: string[] = [user.lastName, user.firstName, user.middleName, user.birthday, user.email, user.phoneNumber];
	const isValid: boolean = _.all(values, (value: string) => value !== "");
	return (
		isValid &&
		(user.photo !== "" || !photoRequired)
	);
}
