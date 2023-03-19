import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/action';
import SideBar from '../SideBar/SideBar';
import Cards from './Card';
import { Input, InputGroup, InputRightElement, Icon } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import './Product.css'

const Products = () => {
	const [text, setText] = useState('');
	const [loader, setLoader] = useState(false);
	const dispatch = useDispatch();
	const data = useSelector((store) => store.data);
	const color = useSelector((store) => store.Color);
	const type = useSelector((store) => store.Type);
	const gender = useSelector((store) => store.Gender);
	const price = useSelector((store) => store.Price);
	useEffect(() => {
		setLoader(true);
		data.length === 0
			? dispatch(getData()).then(() => setLoader(false))
			: setLoader(false);
		
	}, [dispatch]);

	const handleChange = (e) => {
		setText(e.target.value);
	};
	const calFilter = (el) => {
		let arr = [];
		for (let i = 0; i < price.length; i++) {
			if (price[i].includes('-')) {
				let a = price[i].split('-');
				arr.push(+a[0], +a[1]);
			} else {
				arr.push(+price[i]);
			}
		}
		return el.price >= arr[0] && el.price <= arr[arr.length - 1];
	};
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 3fr',
				gap: '20px',
				width: '100%',
			}}
		>
			<div>
				<SideBar />
			</div>
			<div>
				<div>
					<InputGroup>
						<Input
							placeholder="Search for Products..."
							m={3}
							w="50%"
							onChange={handleChange}
						/>
						<InputRightElement
							children={<Icon as={FaSearch} />}
							m={3}
							mr="50%"
						/>
					</InputGroup>
				</div>
				<div
					id='grid'
				>
					{loader ? (
						<Loader />
					) : (
						data
							.filter((e) => e.name.toLowerCase().includes(text))
							.filter((e) =>
								color.length === 0
									? e
									: color.includes(e.color.toLowerCase()),
							)
							.filter((e) =>
								type.length === 0
									? e
									: type.includes(e.type.toLowerCase()),
							)
							.filter((e) =>
								gender.length === 0
									? e
									: gender.includes(e.gender.toLowerCase()),
							)
							.filter((e) => (price.length === 0 ? e : calFilter(e)))
							.map((e) => <Cards key={e.id} properties={e} />)
					)}
				</div>
			</div>
		</div>
	);
};

export default Products;
