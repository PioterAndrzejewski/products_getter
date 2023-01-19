import React from "react";

import { ChakraProvider, VStack } from "@chakra-ui/react";
import { ModalProvider } from "./context/modalContext";
import { ResultsProvider } from "./context/resultsContext";

import ModalElement from "./components/Modal";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import ResultsDisplayer from "./components/ResultsDisplayer";

function App() {
	return (
		<ChakraProvider>
			<VStack backgroundColor="rgb(42, 67, 101)" color="white">
				<VStack width="600px" minHeight="100vh">
					<Header />
					<ResultsProvider>
						<ModalProvider>
							<SearchForm />
							<ResultsDisplayer />
							<ModalElement />
						</ModalProvider>
					</ResultsProvider>
				</VStack>
			</VStack>
		</ChakraProvider>
	);
}

export default App;
