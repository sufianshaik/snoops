import { Navigate } from "react-router-dom";

const carts = [];

const cartreducer = (state = carts, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADD_CART":
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            }
            else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
        // break;

        case "DELITEM":
            // const obj=state.carts.filter((x)=>x.id!=action.payload)

            const obj1 = state.find((x) => x.id == action.payload)
            if (obj1.qty === 1) {
                return state.filter((x) => x.id != obj1.id);
            }
            else {
                return state.map((x) =>
                    x.id === obj1.id ? { ...x, qty: x.qty - 1 } : x
                );
            }

        // return {
        //     ...state,
        //     carts:obj
        // }
        // break;

        default:
            return state;
            break;
    }

}

// export default cartreducer;
