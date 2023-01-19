import { useState, useEffect } from "react";

export default function useFetch() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	async function fetchData(url) {
		const response = await fetch(url);
		const data = await response.json();
		setData(data);
		console.log(data);
	}

	return { data, loading, error, fetchData };
}
