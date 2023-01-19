import React from "react";
import { Heading, VStack, Text } from "@chakra-ui/react";
import { useResults } from "../context/resultsContext";
import useUrl from "../hooks/useUrl";
import ResultRow from "./ResultRow";

const ResultsDisplayer = () => {
	const { results } = useResults();
	const { isLoading } = useUrl();

	return (
		<>
			<Heading as="h1">Results:</Heading>
			<VStack>
				{isLoading ? (
					<Text>Loading</Text>
				) : results.data instanceof Array ? (
					results.data.map((result) => {
						return (
							<ResultRow
								key={result.name}
								id={result.id}
								name={result.name}
								year={result.year}
								color={result.color}
							/>
						);
					})
				) : (
					<ResultRow
						key={results.data.name}
						id={results.data.id}
						name={results.data.name}
						year={results.data.year}
						color={results.data.color}
					/>
				)}
			</VStack>
		</>
	);
};

export default ResultsDisplayer;
