import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

const Header = () => {
	return (
		<Box alignSelf="flex-start" pt="50">
			<Heading fontWeight="extrabold" color="cyan.500" size="3xl">
				Product getter
			</Heading>
			<Text fontSize="1xl" color="gray.100">
				Takes from API whatever you want
			</Text>
		</Box>
	);
};

export default Header;
