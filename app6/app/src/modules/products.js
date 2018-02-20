export const PRODUCTS_REQUESTED = 'products/PRODUCTS_REQUESTED'
export const PRODUCTS_COMPLETED = 'products/PRODUCTS_COMPLETED'
export const PRODUCT_ADD_REQUESTED = 'products/PRODUCT_ADD_REQUESTED'
export const PRODUCT_ADD_COMPLETED = 'products/PRODUCT_ADD_COMPLETED'
export const PRODUCT_REMOVE_REQUESTED = 'products/PRODUCT_REMOVE_REQUESTED'
export const PRODUCT_REMOVE_COMPLETED = 'products/PRODUCT_REMOVE_COMPLETED'

const initialState = {}

export default ( state = initialState, action ) => {
    switch (action.type) {
        case PRODUCTS_REQUESTED:
            return {
                ...state
            }

        case PRODUCTS_COMPLETED:
            return {
                ...state
            }

        case PRODUCT_ADD_REQUESTED:
            return {
                ...state
            }

        case PRODUCT_ADD_COMPLETED:
            return {
                ...state
            }

        case PRODUCT_REMOVE_REQUESTED:
            return {
                ...state
            }

        case PRODUCT_REMOVE_COMPLETED:
            return {
                ...state
            }

        default:
            return state
    }
}