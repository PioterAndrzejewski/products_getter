import { useState } from "react";

export default function useUrl() {
	const [url, setUrl] = useState(`https://reqres.in/api/products?per_page=5`);

	return { url, setUrl };
}
