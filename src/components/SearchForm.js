import React from "react";
import { Heading, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

// import useFetch from "../hooks/useFetch";
import useUrl from "../hooks/useUrl";

const SearchForm = () => {
	const { setId } = useUrl();

	const handleURLChange = (e) => {
		setId(e.target.value);
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
						onChange={handleURLChange}
					></Input>
				</InputGroup>
			</form>
		</>
	);
};

export default SearchForm;
