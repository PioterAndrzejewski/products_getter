import React from "react";
import { Heading, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

const SearchForm = () => {
	const [url, setUrl] = useState("https://reqres.in/api/products?per_page=5");
	const { data, loading, error } = useFetch(url);

	const handleChange = (e) => {
		e.preventDefault();
		setUrl(`https://reqres.in/api/products?per_page=5&id=${e.target.value}`);
		console.log("submitted");
	};

	return (
		<>
			<Heading as="h2" id="contactme-section">
				Search your dream products by typing its ID
			</Heading>
			<form>
				<InputGroup>
					<InputLeftAddon children="Product ID" />
					<Input
						type="number"
						name="id"
						borderRadius="0"
						onChange={handleChange}
					></Input>
					<Input type="submit" value="Submit" bgColor="gray.100" />
				</InputGroup>
			</form>
		</>
	);
};

export default SearchForm;
