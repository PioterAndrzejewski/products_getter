import { useState } from "react";
import { Heading, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

import useUrl from "../hooks/useFetch";
import { useResults } from "../context/resultsContext";

const SearchForm = () => {
	const { setId, id } = useResults();

	const handleURLChange = (e) => {
		setId(e.target.value.replace(/[^0-9]/g, ""));
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
						type="text"
						name="id"
						value={id}
						borderRadius="0"
						placeholder="Please specify ID if needed"
						onChange={handleURLChange}
					></Input>
				</InputGroup>
			</form>
		</>
	);
};

export default SearchForm;
