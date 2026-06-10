


export const BAG_VALUE = "BAG_VALUE";
export  function bag(id,img){
    return {
        type: BAG_VALUE,
        payload:{id,img},
    }
}
export const BAG_PLUS = "BAG_PLUS";
export function bagPlus(id,value){
    return {
        type: BAG_PLUS,
        payload:{id,value},
    }
}

export const DELETE = "DELETE";
export  function deleteFromBag(id){
    return {
        type: DELETE,
        payload:{id}
    }
}

export const CART_ADD = "CART_ADD";
export  function cartPlus(id){
    return {
        type: CART_ADD,
        payload:{id}
    }
}
export const CART_MINUS = "CART_MINUS";
export  function cartMinus(id){
    return {
        type: CART_MINUS,
        payload:{id}
    }
}
export const CLEAR_CART = "CLEAR_CART";
export  function clear_cart(){
    return {
        type: CLEAR_CART,
    }
}