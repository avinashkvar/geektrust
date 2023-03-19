import React, { useState } from 'react';
import { Flex, Text, Icon } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Navbar = () => {
	const [cart, setCart] = useState(0);
	const data = useSelector((store) => store.data);
	useEffect(() => {
		let sum = 0;
        for(let i=0;i<data.length;i++){
             if(data[i].q){
                sum++;
             }
        }
		setCart(sum);
	}, [data]);
	
	return (
		<>
			<Flex
				justifyContent="space-between"
				alignItems="center"
				p={3}
				background="rgb(198,200,202)"
			>
				<Link to="/">
					<Text
						p={3}
						fontWeight="bold"
						fontSize="20px"
						ml={10}
						background="rgb(12,17,27)"
						color="white"
						borderRadius="5px"
					>
						TeeRex Store
					</Text>
				</Link>
				<Flex mr={10}>
					<Text mr={5} fontWeight="bold" fontSize="20px">
						Products
					</Text>
					<Link to="/cart">
						<Flex>
							<Icon as={FaShoppingCart} w={10} h={7} />
							<Text fontWeight="bold">{cart}</Text>
						</Flex>
					</Link>
				</Flex>
			</Flex>

			<Outlet />
		</>
	);
};

export default Navbar;
