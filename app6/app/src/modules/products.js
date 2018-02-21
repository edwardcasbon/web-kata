import 'whatwg-fetch'

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

export const fetchProducts = () => {
    return dispatch => {
        dispatch({ type: PRODUCTS_REQUESTED })
        const url = '/api/products/get'
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        }).then(response => {
            return response.json()
        }).then(json => {
            dispatch({
                type: PRODUCTS_COMPLETED,
                payload: { products: json }
            })
        })
    }
}

export const addProduct = newProduct => {
    return dispatch => {
        dispatch({ type: PRODUCT_ADD_REQUESTED })
        const url = '/api/products/add'
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
            body: JSON.stringify(newProduct)
        }).then(response => {
            return response.json()
        }).then(json => {
            dispatch({
                type: PRODUCT_ADD_COMPLETED,
                payload: { products: json }
            })
        })
    }
}

export const removeProduct = product => {
    return dispatch => {
        dispatch({ type: PRODUCT_REMOVE_REQUESTED })
        const url = `/api/products/delete/${product}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        }).then(response => {
            return response.json()
        }).then(json => {
            dispatch({
                type: PRODUCT_REMOVE_COMPLETED,
                payload: { products: json }
            })
        })
    }
}