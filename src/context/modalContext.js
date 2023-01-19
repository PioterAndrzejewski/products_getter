import { createContext, useContext, useState } from "react";

const ModalContext = createContext(undefined);

export const ModalProvider = ({ children }) => {
	const [state, setState] = useState({});

	return (
		<ModalContext.Provider
			value={{
				...state,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export const useModalContext = () => useContext(ModalContext);
