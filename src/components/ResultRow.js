import React from "react";
import { HStack, Text } from "@chakra-ui/react";

const ResultRow = ({ id, name, year, color }) => {
	return (
		<HStack backgroundColor={color}>
			<Text>{id}}</Text>
			<Text>{name}}</Text>
			<Text>{year}}</Text>
		</HStack>
	);
};

export default ResultRow;
