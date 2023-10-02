const basePath = "https:/finnhub.io/api/v1";

export const searchSymbols = async (query) => {
	const url = `${basePath}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`;
	const response = await fetch(url);
	// searchs for the best matching symbols of the query

	if (!response.ok) {
		const message = `An error has happened: ${response.status}`;
		throw new Error(message);
	}

	return await response.json();
	//parses our response as a json and reutrns an js object
};

export const fetchStockDetails = async (stockSymbol) => {
	const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
	const response = await fetch(url);
	// searches for the specific stock

	if (!response.ok) {
		const message = `An error has happened: ${response.status}`;
		throw new Error(message);
	}
	return await response.json();
};

export const fetchQuote = async (stockSymbol) => {
	const url = `${basePath}/quotes?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
	const response = await fetch(url);
	//searches for the most recent stock price

	if (!response.ok) {
		const message = `An error has happened: ${response.status}`;
		throw new Error(message);
	}

	return await response.json();
};

export const fetchHistoricalData = async (
	stockSymbol,
	resolution,
	from,
	to
) => {
	const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_API_KEY}`;
	const response = await fetch(url);
	//searches for the stocks histroical data

	if (!response.ok) {
		const message = `An error has happened: ${response.status}`;
		throw new Error(message);
	}

	return await response.json();
};
