import { Grid, GridItem, Button, Text } from "@chakra-ui/react";
import { useResults } from "../context/resultsContext";

const SearchForm = () => {
	const { currentPage, totalPages, setPage } = useResults();

	const handlePreviousPageButton = () => {
		setPage(-1);
	};

	const handleNextPageButton = () => {
		setPage(1);
	};

	return (
		<Grid
			mb="60px"
			templateColumns="1fr 1fr 1fr"
			alignItems="center"
			alignContent="center"
		>
			<GridItem>
				<Button
					display={Number(currentPage) === Number("1") && "none"}
					onClick={handlePreviousPageButton}
					bgColor="gray.400"
				>
					Prev page
				</Button>
			</GridItem>
			<GridItem>
				<Text padding="10px">{`Page ${currentPage} / ${totalPages}`}</Text>
			</GridItem>
			<GridItem>
				<Button
					display={Number(currentPage) === Number(totalPages) && "none"}
					onClick={handleNextPageButton}
					bgColor="gray.400"
				>
					Next page
				</Button>
			</GridItem>
		</Grid>
	);
};

export default SearchForm;
