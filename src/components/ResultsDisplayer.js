import React from "react";
import {
	Heading,
	Grid,
	Text,
	Center,
	Spacer,
	GridItem,
} from "@chakra-ui/react";
import { useResults } from "../context/resultsContext";
import { useModalContext } from "../context/modalContext";
import useFetch from "../hooks/useFetch";
import ResultRow from "./ResultRow";

import PageDisplayer from "./PageDisplayer";
import Error from "./Error";

const ResultsDisplayer = () => {
	const { products, error } = useResults();
	const { isLoading } = useFetch();

	const { onOpen, setModalState } = useModalContext();

	if (error) {
		return <Error />;
	}

	return (
		<>
			<Heading as="h1" size="md" pb="30px">
				Your query results:
			</Heading>
			<Grid gap={6}>
				<ResultRow key="firstRow" id="id" name="name" year="year" />
				{isLoading ? (
					<Text>Loading</Text>
				) : (
					products.map((product) => {
						return (
							<GridItem
								h="20"
								width="600px"
								cursor="pointer"
								onClick={() => {
									setModalState(product);
									onOpen();
								}}
							>
								<ResultRow
									key={product.name}
									id={product.id}
									name={product.name}
									year={product.year}
									color={product.color}
								/>
							</GridItem>
						);
					})
				)}
			</Grid>
			<Spacer />
			<Center>
				<PageDisplayer />
			</Center>
		</>
	);
};

export default ResultsDisplayer;
