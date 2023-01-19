import { createContext, useContext, useState } from "react";

const ResultsContext = createContext(undefined);

export const ResultsProvider = ({ children }) => {
	const [results, setResults] = useState();
	console.log(`results: `, results);

	return (
		<ResultsContext.Provider value={{ results, setResults }}>
			{children}
		</ResultsContext.Provider>
	);
};

export const useResults = () => useContext(ResultsContext);
