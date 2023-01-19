import React from "react";
import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
} from "@chakra-ui/react";

const ResultsDisplayer = () => {
	return (
		<Alert status="error">
			<AlertIcon />
			<AlertTitle>Something went wrong.</AlertTitle>
			<AlertDescription>
				Please make sure you have provided correct ID. Probably there is no
				product under provided ID.
			</AlertDescription>
		</Alert>
	);
};

export default ResultsDisplayer;
