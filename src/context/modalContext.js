import { createContext, useContext, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

const ModalContext = createContext(undefined);

export const ModalProvider = ({ children }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [modalState, setModalState] = useState({
		id: "",
		name: "",
		year: "",
		color: "",
		pantone_value: "",
	});

	return (
		<ModalContext.Provider
			value={{
				modalState,
				setModalState,
				onOpen,
				isOpen,
				onClose,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

export const useModalContext = () => useContext(ModalContext);
