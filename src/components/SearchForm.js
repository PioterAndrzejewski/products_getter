import React from "react";
import { Heading, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

const SearchForm = () => {
	const handleSubmit = () => {
		return;
	};

	return (
		<>
			<Heading as="h2" id="contactme-section">
				Search your dream products by typing its ID
			</Heading>
			<form onSubmit={handleSubmit}>
				<InputGroup>
					<InputLeftAddon children="ID" />
					<Input type="number"></Input>
				</InputGroup>
			</form>
		</>
	);
};

export default SearchForm;
