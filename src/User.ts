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
	return (
		user.lastName !== "" &&
		user.firstName !== "" &&
		user.middleName !== "" &&
		user.birthday !== "" &&
		user.email !== "" &&
		user.phoneNumber !== "" &&
		(user.photo !== "" || !photoRequired)
	);
}
