import { Box, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

import { useResults } from "../context/resultsContext";

const SearchForm = () => {
	const { setId, id } = useResults();

	const handleURLChange = (e) => {
		setId(e.target.value.replace(/[^0-9]/g, ""));
	};

	return (
		<Box width="100%">
			<InputGroup mb="60px">
				<InputLeftAddon children="Product ID" bgColor="gray.300" />
				<Input
					type="text"
					name="id"
					value={id}
					borderRadius="8px"
					placeholder="Please specify ID if needed"
					onChange={handleURLChange}
					_placeholder={{ color: "rgba(255, 255, 255, 0.6)" }}
				></Input>
			</InputGroup>
		</Box>
	);
};

export default SearchForm;
