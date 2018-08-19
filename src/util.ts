export const getDayFormat = (date = new Date()) => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	return `${year}/${month}/${day}`;
};

export const isMonday = (date = new Date()) => {
	if (date.getDay() == 1) {
		return false;
	}
	return true;
};
