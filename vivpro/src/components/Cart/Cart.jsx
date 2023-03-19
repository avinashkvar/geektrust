import React from 'react';
import { useSelector } from 'react-redux';
import Cards from './Cards';
import { Text, Center } from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';
const Cart = () => {
	const data = useSelector((store) => store.data);
	const [total, setTotal] = useState(0);
	useEffect(() => {
		let sum = 0;
		for (let i = 0; i < data.length; i++) {
			if (data[i].q) sum += +data[i].price * +data[i].q;
		}
		setTotal(sum);
	}, [data]);
	return (
		<div>
			{data.map((e) => e.q && <Cards key={e.id} element={e} />)}
			<Center>
				<Text fontWeight="bold">Total amount Rs{total}</Text>
			</Center>
		</div>
	);
};

export default Cart;
