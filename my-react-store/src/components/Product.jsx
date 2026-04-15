import QuantityPicker from "./QuantityPicker";

function Product() {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://plus.unsplash.com/premium_photo-1724249990837-f6dfcb7f3eaa?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="text-start">Apple</h5>
                <h6 className="text-start">$ 3.99</h6>


                <QuantityPicker/>


                <button href="#" className="btn btn-dark mt-4">Add to cart</button>
            </div>
        </div>
    )
}


export default Product;