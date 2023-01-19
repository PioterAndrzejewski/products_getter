import { useState, useEffect } from "react";
import useUrl from "./useUrl";

export default function useFetch() {
	// const { url } = useUrl();

	const url = "https://reqres.in/api/products?per_page=5";

	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	async function fetchData() {
		const response = await fetch(url);
		const data = await response.json();
		setData(data);
		console.log(data);
	}

	useEffect(() => {
		setLoading(true);
		try {
			fetchData();
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
			console.log(data);
		}
	}, [url]);

	return { data, loading, error };
}
