import { useContext } from "react";
import GlobalContext from "../state/globalContext";

function Cart() {
    const cart = useContext(GlobalContext).cart
    const removeProduct = useContext(GlobalContext).removeProductFromCart;

    function getTotalPrice(){
        let total = 0;

        for(let index = 0; index < cart.length; index++){
            total += cart[index].price * cart[index].quantity;
        }

        return total.toFixed(2);
    }

    return (
    <div>
        <h1>Ready to complete the purchase?</h1>

        {
            (cart.length < 1)
            ? <p>Your cart is empty</p>
            : <div>
                <ul className="list-unstyled">
                    {cart.map(product =>
                        <li key={product._id} className="d-flex gap-4 align-items-center justify-content-between mb-4">
                            <img width={150} src={"/images/" + product.image} alt="" />
                            <h6> {product.title}</h6>
                            <label> QTY: #{product.quantity}</label>
                            <label> Price: ${product.price}</label>
                            <label> Total: $ {product.price * product.quantity}</label>
                            <button className="btn btn-danger btn-small me-4" onClick={() => removeProduct(product._id)}>Remove</button>
                        </li>
                    )}
                </ul>
            </div>
        }
        <h4>Total: ${getTotalPrice()}</h4>
    </div>
    );
}

export default Cart;