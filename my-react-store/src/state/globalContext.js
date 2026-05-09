import { createContext } from 'react';


//globalContext defines context structure
const GlobalContext = createContext({
    user: {}, //deafult user is an empty object, can store info like name, email, etc.
    cart: [],

    //addProductToCart: funtion(){}
    addProductToCart: () => {},
    removeProductFromCart: () => {}

})

// export the context so it can be used in other components
export default GlobalContext;