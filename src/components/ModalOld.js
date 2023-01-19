import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogOverlay,
} from "@chakra-ui/react";
import { useModalContext } from "../context/modalContext";
import { useRef } from "react";

function Alert() {
	const { isOpen, onClose, id, name, year, color, pantone_value } =
		useModalContext();
	const cancelRef = useRef();

	return (
		<AlertDialog
			isOpen={isOpen}
			leastDestructiveRef={cancelRef}
			onClose={onClose}
		>
			<AlertDialogOverlay>
				<AlertDialogContent py={4}>
					<AlertDialogHeader fontSize="lg" fontWeight="bold">
						Additional info:
					</AlertDialogHeader>
					<AlertDialogBody>Info bla bla</AlertDialogBody>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	);
}

export default Alert;
