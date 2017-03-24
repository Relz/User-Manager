const USER = {
	LAST_NAME: "Фамилия",
	FIRST_NAME: "Имя",
	MIDDLE_NAME: "Отчество",
	BIRTHDAY: "Дата рождения",
	EMAIL: "Email",
	PHONE_NUMBER: "Номер телефона",
	PHOTO: "Фотография"
};

const FORM_MSG = {
	FILL_ALL_FIELDS: "Пожалуйста, заполните все поля",
	PROCESSING: "Идёт обработка запроса...",
	ADD: {
		SUCCESS: "Пользователь успешно добавлен",
		FAILED: "Не удалось добавить пользователя"
	},
	EDIT: {
		SUCCESS: "Пользователь успешно обновлен",
		FAILED: "Не удалось обновить пользователя"
	}
};

export const TRANSLATION = {
	PAGE_HEADER: "User manager",
	ALT: {
		LOGO: "",
		USER_LIST: {
			EDIT: "Edit user",
			REMOVE: "Remove user"
		}
	},
	MENU: {
		GET_USERS: "Список пользователей",
		ADD_USER: "Добавить пользователя",
		EDIT_USER: "Редактировать пользователя",
		REMOVE_USER: "Удалить пользователя"
	},
	USER_LIST: {
		WAITING: "Загрузка списка пользователей...",
		ERROR: "Не удалось загрузить список пользователей",
		EMPTY: "Список пользователей пуст",
		TABLE_HEAD: {
			LAST_NAME: USER.LAST_NAME,
			FIRST_NAME: USER.FIRST_NAME,
			MIDDLE_NAME: USER.MIDDLE_NAME,
			BIRTHDAY: USER.BIRTHDAY,
			EMAIL: USER.EMAIL,
			PHONE_NUMBER: USER.PHONE_NUMBER,
			PHOTO: USER.PHOTO,
			EDIT: "",
			REMOVE: ""
		}
	},
	USER_ADD: {
		HEADER: "Добавить нового пользователя",
		FORM_MSG: {
			FILL_ALL_FIELDS: FORM_MSG.FILL_ALL_FIELDS,
			PROCESSING: FORM_MSG.PROCESSING,
			SUCCESS: FORM_MSG.ADD.SUCCESS,
			FAILED: FORM_MSG.ADD.FAILED
		},
		FORM: {
			LAST_NAME: USER.LAST_NAME,
			FIRST_NAME: USER.FIRST_NAME,
			MIDDLE_NAME: USER.MIDDLE_NAME,
			BIRTHDAY: USER.BIRTHDAY,
			EMAIL: USER.EMAIL,
			PHONE_NUMBER: USER.PHONE_NUMBER,
			PHOTO: USER.PHOTO,
			SUBMIT: "Отправить"
		}
	},
	USER_EDIT: {
		HEADER: "Редактировать пользователя",
		FORM_MSG: {
			FILL_ALL_FIELDS: FORM_MSG.FILL_ALL_FIELDS,
			PROCESSING_EDIT: FORM_MSG.PROCESSING,
			SUCCESS_EDIT: FORM_MSG.EDIT.SUCCESS,
			FAILED_EDIT: FORM_MSG.EDIT.FAILED,
			FAILED_TO_GET_USER_DATA: "Не удалось получить данные пользователя"
		},
		FORM: {
			LAST_NAME: USER.LAST_NAME,
			FIRST_NAME: USER.FIRST_NAME,
			MIDDLE_NAME: USER.MIDDLE_NAME,
			BIRTHDAY: USER.BIRTHDAY,
			EMAIL: USER.EMAIL,
			PHONE_NUMBER: USER.PHONE_NUMBER,
			PHOTO: "Изменить фотографию",
			SUBMIT: "Применить изменения"
		}
	},
	PAGE404: {
		ERROR_CODE: "404",
		HEADER: "Страница не найдена",
		BACK_TO_MAIN_PAGE: "Вернуться на главную страницу"
	}
};
