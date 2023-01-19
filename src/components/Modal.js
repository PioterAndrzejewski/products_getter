import React from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	useModal,
} from "@chakra-ui/react";

import { useModalContext } from "../context/modalContext";

export default function ModalElement() {
	const { onOpen, isOpen, onClose, modalState } = useModalContext();
	const { id, name, year, color, pantone_value } = modalState;
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Additional info:</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						id: {id}, name: {name}, year: {year}, color: {color}, pantone value:{" "}
						{pantone_value}
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
