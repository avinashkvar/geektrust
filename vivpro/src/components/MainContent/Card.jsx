import React from 'react';
import {
	Card,
	Image,
	Text,
	Button,
	CardHeader,
	CardFooter,
	CardBody,
	Flex,
	useToast,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { createCart, createCount } from '../../redux/action';
const Cards = ({ properties }) => {
	const toast = useToast();
	const dispatch = useDispatch();
	return (
		<Card p={3}>
			<CardHeader>
				<Image src={properties.imageURL} width="100%"></Image>
				<Text fontWeight="bold" fontSize="19px">
					{properties.name}
				</Text>
			</CardHeader>
			<CardBody>
				<Text>{properties.type}</Text>
				<Text>{properties.color}</Text>
				<Text>{properties.genter}</Text>
			</CardBody>
			<CardFooter>
				<Flex justifyContent="space-between" alignItems="center">
					<Text fontWeight="bold" mr={4}>
						Rs {properties.price}
					</Text>
					{properties.q ? (
						<Flex>
							<Button
								fontWeight="bold"
								onClick={() => {
									dispatch(
										createCount({ id: properties.id, value: -1 }),
									);
								}}
							>
								-
							</Button>
							<Text fontWeight="bold" margin="10px">
								{properties.q}
							</Text>
							<Button
								fontWeight="bold"
								onClick={() => {
									if (properties.q === properties.quantity) {
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
											id: properties.id,
											value: 1,
										}),
									);
								}}
							>
								+
							</Button>
						</Flex>
					) : (
						<Button
							colorScheme="blue"
							onClick={() => {
								dispatch(createCart(properties.id));
							}}
						>
							Add To Cart
						</Button>
					)}
				</Flex>
			</CardFooter>
		</Card>
	);
};

export default Cards;
