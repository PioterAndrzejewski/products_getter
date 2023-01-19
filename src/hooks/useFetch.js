import { useEffect, useState } from "react";
import axios from "axios";
import { useResults } from "../context/resultsContext";

export default function useFetch() {
	const [isLoading, setIsLoading] = useState(true);
	const { updateResults, setError, id, page } = useResults();

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			setError(false);
			try {
				const result = await axios(
					`https://reqres.in/api/products?per_page=5&id=${id}&page=${page}`
				);
				updateResults(result.data);
			} catch (error) {
				setError(true);
			}
			setIsLoading(false);
		};

		fetchData();
	}, [id, page]);

	return { isLoading };
}
