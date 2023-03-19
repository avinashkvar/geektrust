import React from 'react';
import { CircularProgress, Center } from '@chakra-ui/react';
const Loader = () => {
	return (
		<Center>
			<CircularProgress isIndeterminate color="blue.300" />;
		</Center>
	);
};

export default Loader;
