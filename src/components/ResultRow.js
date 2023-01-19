import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";

const ResultRow = ({ id, name, year, color }) => {
	return (
		<Grid
			backgroundColor={color}
			templateColumns="100px 1fr 1fr"
			gap={6}
			padding="15px"
		>
			<GridItem>{id}</GridItem>
			<GridItem>{name}</GridItem>
			<GridItem>{year}</GridItem>
		</Grid>
	);
};

export default ResultRow;
