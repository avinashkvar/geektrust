export const ADD_DATA = 'ADD_DATA'
export const ADD_TO_CART = 'ADD_TO_CART'
export const EDIT_COUNT = 'EDIT_COUNT'
export const ADD_FILTER = 'ADD_FILTER'
export const DELETE_CART = 'DELETE_CART'

export const createCount = (value)=>{
     return {
         type:EDIT_COUNT,
         payload:value
     }
}

export const createDelete = (value)=>{
      return {
          type:DELETE_CART,
          payload:value
      }
}

export const createFilter = (value)=>{
     return {
			type: ADD_FILTER,
			payload: value,
		}; 
}

export const createCart = (value)=>{
     return {
        type:ADD_TO_CART,
        payload:value
     }
}

export const createData = (value)=>{
     return {
        type:ADD_DATA,
        payload:value
     }
}

export const getData = () => async (dispatch) => {
	let data = await fetch(
		'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json',
	).then((res) => res.json());
    dispatch(createData(data))
	return data;
};
