import React from 'react';
import {
	Card,
	Button,
	Text,
	Image,
	HStack,
	VStack,
	Flex,
	useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { createCount, createDelete } from '../../redux/action';
const Cards = ({ element }) => {
	const dispatch = useDispatch();
	const toast = useToast();
	return (
		<Card width={['100%', '100%', '70%']} margin="15px" padding="15px">
			<Flex justifyContent="space-between" alignItems="center">
				<HStack>
					<Image width="100px" src={element.imageURL}></Image>
				</HStack>
				<VStack>
					<Text>{element.name}</Text>
					<Text>Rs {element.price}</Text>
				</VStack>
				<HStack>
					<Button
						onClick={() => {
							dispatch(createCount({ id: element.id, value: -1 }));
						}}
					>
						-
					</Button>
					<Text fontWeight="bold">{element.q}</Text>
					<Button
						onClick={() => {
							if (element.q === element.quantity) {
								toast({
									title: 'Out Of Stock',
									status: 'error',
									duration: 2000,
									isClosable: true,
								});
								return;
							}
							dispatch(
								createCount({
									id: element.id,
									value: 1,
								}),
							);
						}}
					>
						+
					</Button>
				</HStack>
				<Button
					colorScheme="red"
					onClick={() => {
						dispatch(createDelete(element.id));
					}}
				>
					Delete
				</Button>
			</Flex>
		</Card>
	);
};

export default Cards;
