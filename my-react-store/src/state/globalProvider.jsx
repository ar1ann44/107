import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props){
    //const [state, setState] = useState(initilValue);
    const [user, setUser] = useState({name: 'ariana', id: 66, email: 'osuna.jenifer@uabc.edu.mx'});
    const [cart, setCart] = useState([]);

    function addProductToCart(product){
        setCart([...cart, product])
    }

//return the context provider, passing down state and functions as value
    return (
        <GlobalContext.Provider value={{
            user: user, //current user state
            cart: cart, //current cart state
            addProductToCart: addProductToCart //function to add a product to the cart
        }}>
            {props.children} {/* render any child components inside the provider */}
        </GlobalContext.Provider>

    )

}

//export the global provider component so it can be used in other files
export default GlobalProvider;