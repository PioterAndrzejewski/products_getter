import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { ModalProvider } from "./context/modalContext";

import SearchForm from "./components/SearchForm";
import ResultsDisplayer from "./components/ResultsDisplayer";

function App() {
	return (
		<ChakraProvider>
			<ModalProvider>
				<main>
					<SearchForm />
					<ResultsDisplayer />
				</main>
			</ModalProvider>
		</ChakraProvider>
	);
}

export default App;
