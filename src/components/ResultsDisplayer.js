import React from "react";
import { Heading, VStack } from "@chakra-ui/react";

import useFetch from "../hooks/useFetch";

import ResultRow from "./ResultRow";

const searchResults = [
	{
		id: 1,
		name: "cerulean",
		year: 2000,
		color: "#98B2D1",
		pantone_value: "15-4020",
	},
	{
		id: 2,
		name: "fuchsia rose",
		year: 2001,
		color: "#C74375",
		pantone_value: "17-2031",
	},
	{
		id: 3,
		name: "true red",
		year: 2002,
		color: "#BF1932",
		pantone_value: "19-1664",
	},
	{
		id: 4,
		name: "aqua sky",
		year: 2003,
		color: "#7BC4C4",
		pantone_value: "14-4811",
	},
	{
		id: 5,
		name: "tigerlily",
		year: 2004,
		color: "#E2583E",
		pantone_value: "17-1456",
	},
];

const ResultsDisplayer = () => {
	const { data } = useFetch();
	return (
		<>
			<Heading as="h1">Results:</Heading>
			<VStack>
				{data.data.map((product) => (
					<ResultRow
						key={product.name}
						id={product.id}
						name={product.name}
						year={product.year}
						color={product.color}
						pantoneValue={product.pantone_value}
					/>
				))}
			</VStack>
		</>
	);
};

export default ResultsDisplayer;
