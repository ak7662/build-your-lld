import { ADD_PRODUCTS, SET_PRODUCTS } from "../constants/product"

const initialState = {
    product: []
}

const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                product: action.payload
            }
        case ADD_PRODUCTS:
            return {
                ...state,
                product: [...state.product, action.payload]
            }
        default:
            return state
    }

}

export default productReducer