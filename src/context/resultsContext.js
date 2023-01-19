import { createContext, useContext, useState } from "react";

const ResultsContext = createContext(undefined);

export const ResultsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [error, setError] = useState(false);
	const [id, setId] = useState("");

	const updateResults = (fetchedData) => {
		if (Array.isArray(fetchedData.data)) {
			setProducts(fetchedData.data);
		} else {
			setProducts([fetchedData.data]);
		}

		if (typeof fetchedData.page === "undefined") {
			setCurrentPage(1);
			setTotalPages(1);
		} else {
			setCurrentPage(fetchedData.page);
			setTotalPages(fetchedData.total_pages);
		}
	};

	const changePage = (change) => {
		setCurrentPage((currentPage) => Number(currentPage) + change);
	};

	return (
		<ResultsContext.Provider
			value={{
				products,
				currentPage,
				changePage,
				totalPages,
				updateResults,
				error,
				setError,
				id,
				setId,
			}}
		>
			{children}
		</ResultsContext.Provider>
	);
};

export const useResults = () => useContext(ResultsContext);
