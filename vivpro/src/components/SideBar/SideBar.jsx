import React from 'react';
import { Text, Checkbox, Card, CardHeader, CardBody } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { createFilter } from '../../redux/action';
const SideBar = () => {
	const dispatch = useDispatch();
	const filterData = [
		{
			type: 'Color',
			data: ['red', 'blue', 'green'],
		},
		{
			type: 'Gender',
			data: ['men', 'women'],
		},
		{
			type: 'Price',
			data: ['0-250', '251-450', '450'],
		},
		{
			type: 'Type',
			data: ['polo', 'hoodie', 'basic'],
		},
	];
	const handleChange = (e,type) => {
		dispatch(
			createFilter({
				checked: e.target.checked,
				filter: e.target.value,
                type:type
            }),
		);
	};
	return (
		<div style={{}}>
			{filterData.map((e) => {
				return (
					<Card margin="10px">
						<CardHeader>
							<Text fontSize="18px" fontWeight="bold">
								{e.type}
							</Text>
						</CardHeader>
						<CardBody>
							{e.data.map((el) => (
								<Checkbox
									display="block"
									colorScheme="green"
									onChange={(event)=>handleChange(event,e.type)}
									value={el}
								>
									{el}
								</Checkbox>
							))}
						</CardBody>
					</Card>
				);
			})}
		</div>
	);
};

export default SideBar;
