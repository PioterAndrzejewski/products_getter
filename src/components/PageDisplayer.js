import { HStack, Button, Text } from "@chakra-ui/react";

import useUrl from "../hooks/useUrl";

const SearchForm = () => {
	const { setPage } = useUrl();
	const { results } = useResults();

	const handlePageChange = (e) => {
		setPage(e.target.value);
	};

	return (
        <Hstack>
            <Button value={<}>
            <Text>Page </Text>
            <Button>
        </Hstack>
	);
};

export default SearchForm;
