import * as productType from '../../constants/actionConstants';

export default function cartProductAction(product){
    return dispatch => {
        dispatch({
            type: productType.ADD_PRODUCT_TO_CART,
            payload: product
        })
    }

}