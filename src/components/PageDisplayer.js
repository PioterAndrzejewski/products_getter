import { HStack, Button, Text } from "@chakra-ui/react";
import { useResults } from "../context/resultsContext";
import useFetch from "../hooks/useFetch";

const SearchForm = () => {
	const { currentPage, totalPages, changePage } = useResults();

	const handlePreviousPageButton = () => {
		changePage(-1);
	};

	const handleNextPageButton = () => {
		changePage(1);
	};

	return (
		<HStack>
			<Button
				display={Number(currentPage) === Number("1") && "none"}
				onClick={handlePreviousPageButton}
			>
				Previous page
			</Button>
			<Text>{`Page ${currentPage} / ${totalPages}`}</Text>
			<Button
				display={Number(currentPage) === Number(totalPages) && "none"}
				onClick={handleNextPageButton}
			>
				Next page
			</Button>
		</HStack>
	);
};

export default SearchForm;
