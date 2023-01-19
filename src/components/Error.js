import React from "react";
import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	VStack,
} from "@chakra-ui/react";

const ResultsDisplayer = () => {
	return (
		<Alert status="error">
			<AlertIcon />
			<VStack>
				<AlertTitle alignSelf="flex-start">Something went wrong.</AlertTitle>
				<AlertDescription>
					Please make sure you have provided correct ID. Probably there is no
					product under provided ID.
				</AlertDescription>
			</VStack>
		</Alert>
	);
};

export default ResultsDisplayer;
