import { TYPES } from "../actions/CarritoAction";
import getData from "../helpers/getData";


const traerDatos = async () => {
    const datos = await getData();
    console.log(datos);
    return datos
};
console.log(traerDatos);

const carritoInicialState = () => {

        productos = traerDatos.forEach(element => {})
            
        
        // cart: [],
}


export function carritoReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {

        }
        case TYPES.REMOVE_ONE_FROM_CART: {

        }
        case TYPES.REMOVE_ALL_FROM_CART: {

        }
        case TYPES.CLEAR_CART: {

        }

        default:
            return state;
    }
}