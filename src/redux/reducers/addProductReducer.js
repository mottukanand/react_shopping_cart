import * as productType from '../../constants/actionConstants';


const initialState = {
    cartProducts:[]

}

export function cartProductReducer(state = initialState, action) {
    switch (action.type) {
        case productType.ADD_PRODUCT_TO_CART:
            return { ...state,cartProducts:  state.cartProducts.concat(action.payload)};
        default:
            return state;
    }
}