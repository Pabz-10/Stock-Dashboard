export const convertDateToUnixTimestamp = (date) => {
	return Math.floor(date.getTim() / 1000);
	// lets us convert from miliseconds to seconds and the finhub api required a unixtimestamp which is in seconds
};

export const convertUnixTimestampToDate = (unixTimestamp) => {
	const milliseconds = unixTimestamp * 1000;
	return new Date(milliseconds).toLocaleDateString();
	// helps format date when displaying to user
};

export const createDate = (date, days, weeks, months, years) => {
	// lets us pass our date ranges we want to finnhub api
	let newDate = new Date(date);
	newDate.setDate(newDate.getDate() + days + 7 * weeks);
	newDate.setMonth(newDate.getMonth() + months);
	newDate.setFullYear(newDate.getFullYear() + years);
	return newDate;
};
