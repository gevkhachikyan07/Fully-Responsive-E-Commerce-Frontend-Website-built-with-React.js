const initialState = {
    bagData: JSON.parse(localStorage.getItem("bagData")) || [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'BAG_VALUE':{
            const{id,img} = action.payload;
            if (state.bagData.find(item => item.id === id)){
                return {...state};
            }
            const newItems = {
                id:id,
                img: img,
                num:0,
            }
           const updatedData= [...state.bagData,newItems];
            localStorage.setItem("bagData",JSON.stringify(updatedData));
            return {
                ...state,
                bagData:updatedData
            }
        }
        case 'BAG_PLUS':{

            const updatedData = state.bagData.map((item) => {
                if (item.id === action.payload.id && item.num < 10) {
                    item.num += action.payload.value;
                        return {
                            ...item,
                            num: item.num
                        };
                }
                return item;
            });
            localStorage.setItem("bagData",JSON.stringify(updatedData));
            return {
                ...state,
                bagData: updatedData,
            }
        }
        case 'DELETE':{
            const updatedData = state.bagData.filter(item => item.id !== action.payload.id);
            localStorage.setItem("bagData",JSON.stringify(updatedData));
            return {
                ...state,
                bagData: updatedData,
            }
        }
        case 'CART_ADD':{
            const updatedData = state.bagData.map(item => {
                if (item.id === action.payload.id && item.num < 9) {
                    item.num += 1;
                    return {
                        ...item,
                        num: item.num
                    };
                }
                return item;
            })
            localStorage.setItem("bagData",JSON.stringify(updatedData));
            return {
                ...state,
                bagData: updatedData,
            }
        }
        case 'CART_MINUS':{
            const updatedData = state.bagData.map(item => {
                if (item.id === action.payload.id && item.num > 1) {
                    item.num -= 1;
                    return {
                        ...item,
                        num: item.num
                    };
                }
                return item;
            })
            localStorage.setItem("bagData",JSON.stringify(updatedData));
            return {
                ...state,
                bagData: updatedData,
            }
        }
        case 'CLEAR_CART':{
            return {
                ...state,
                bagData: [],
            }
        }
        default:{
            return state;
        }
    }
}