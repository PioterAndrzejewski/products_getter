import { useEffect, useState } from "react";
import { useResults } from "../context/resultsContext";

export default function useUrl() {
	const [id, setId] = useState("");
	const [page, setPage] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	const { setResults } = useResults();

	async function fetchData(id) {
		try {
			setIsLoading(true);
			const response = await fetch(
				`https://reqres.in/api/products?per_page=5&id=${id}`
			);
			const fetchedData = await response.json();
			console.log(fetchedData);
			setResults(fetchedData);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		fetchData(id);
	}, [id]);

	return { setId, setPage, isLoading };
}
