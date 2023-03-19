import {
	ADD_DATA,
	ADD_FILTER,
	ADD_TO_CART,
	DELETE_CART,
	EDIT_COUNT,
} from './action';

const init = {
	data: [],
	Color: [],
	Type: [],
	Gender: [],
	Price: [],
};

export const reducer = (store = init, { type, payload }) => {
	switch (type) {
		case ADD_DATA:
			return { ...store, data: payload };
		case ADD_TO_CART:
			return {
				...store,
				data: store.data.map((e) =>
					e.id === payload ? { ...e, q: 1 } : e,
				),
			};
		case EDIT_COUNT:
			return {
				...store,
				data: store.data.map((e) =>
					e.id === payload.id ? { ...e, q: e.q + payload.value } : e,
				),
			};
		case ADD_FILTER:
			return {
				...store,
				[payload.type]: payload.checked
					? [...store[`${payload.type}`], payload.filter]
					: store[`${payload.type}`].filter((e) => e !== payload.filter),
			};
		case DELETE_CART:
			return {
				...store,
				data: store.data.filter((e) => (e.id === payload ? (e.q = 0) : e)),
			};
		default:
			return store;
	}
};
