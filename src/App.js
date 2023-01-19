import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ModalProvider } from "./context/modalContext";
import { ResultsProvider } from "./context/resultsContext";

import SearchForm from "./components/SearchForm";
import ResultsDisplayer from "./components/ResultsDisplayer";

function App() {
	return (
		<ChakraProvider>
			<ModalProvider>
				<main>
					<ResultsProvider>
						<SearchForm />
						<ResultsDisplayer />
					</ResultsProvider>
				</main>
			</ModalProvider>
		</ChakraProvider>
	);
}

export default App;
