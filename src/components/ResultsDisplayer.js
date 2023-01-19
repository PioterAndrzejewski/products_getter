import React from "react";
import { Heading, VStack, Text, Center } from "@chakra-ui/react";
import { useResults } from "../context/resultsContext";
import useFetch from "../hooks/useFetch";
import ResultRow from "./ResultRow";

import PageDisplayer from "./PageDisplayer";
import Error from "./Error";

const ResultsDisplayer = () => {
	const { products, error } = useResults();
	const { isLoading } = useFetch();
	if (error) {
		return <Error />;
	}

	return (
		<>
			<Heading as="h1" size="md">
				Your query results:
			</Heading>
			<VStack>
				{isLoading ? (
					<Text>Loading</Text>
				) : (
					products.map((product) => {
						return (
							<ResultRow
								key={product.name}
								id={product.id}
								name={product.name}
								year={product.year}
								color={product.color}
							/>
						);
					})
				)}
			</VStack>
			<Center>
				<PageDisplayer />
			</Center>
		</>
	);
};

export default ResultsDisplayer;
