import { useState } from "react";

function Admin() {

    //coupon state
    const [couponCode, setCouponCode] = useState("");
    const [couponDiscount, setCouponDiscount] = useState(0);
    const [coupons, setCoupons] = useState([]);

    function saveCoupon() {
        console.log(couponCode);
        console.log(couponDiscount);

        const newCoupon = {
            code: couponCode,
            discount: couponDiscount
        }


        setCoupons([...coupons, newCoupon]);
    }

    //Product state
    const [productTitle, setProductTitle] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productImage, setProductImage] = useState("");
    const [products, setProducts] = useState([]);

    function saveProduct() {
        console.log("Saving product...");

        const newProduct = {
            title: productTitle,
            category: productCategory,
            price: productPrice,
            image: productImage
        }

        setProducts([...products, newProduct]);
    }

    return (
        <div>
            <h1>Admin Page</h1>

            <div className="d-flex gap-4">
                <section className="w-50">
                    <h3>Add products</h3>

                    <div className="card">
                        <div className="card-body">
                            <div className="text-start mb-4">
                                <label className="form-label">Title</label>
                                <input
                                    className="form-control "
                                    type="text"
                                    value={productTitle}
                                    onChange={(event) => setProductTitle(event.target.value)}
                                />
                            </div>

                            <div className="text-start mb-4">
                                <label className="form-label">Category <span className="text-secondary">URL</span></label>
                                <input
                                    className="form-control"
                                    placeholder="rock, pop, jazz, etc"
                                    type="text"
                                    value={productCategory}
                                    onChange={(event) => setProductCategory(event.target.value)}
                                />
                            </div>

                            <div className="text-start mb-4">
                                <label className="form-label">Image</label>
                                <input
                                    className="form-control"
                                    placeholder="http://imageurl.com"
                                    type="text"
                                    value={productImage}
                                    onChange={(event) => setProductImage(event.target.value)}
                                />
                            </div>

                            <div className="text-start mb-4">
                                <label className="form-label">Price</label>
                                <input
                                    className="form-control"
                                    placeholder="image here"
                                    type="number"
                                    value={productPrice}
                                    onChange={(event) => setProductPrice(event.target.value)}
                                />
                            </div>

                            <div>
                                <button className="btn btn-dark " onClick={saveProduct}>Save product</button>
                            </div>
                        </div>
                    </div>

                    <div className="card d-flex flex-row gap-4" style={{ width: "30rem" }}>
                        {products.map(product => (
                            <div className="card mb-3" key={product.title}>
                                <img src={product.image} className="card-img-top img-fluid" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p>${product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </section>

                <section className="w-50">
                    <h3>Add cupons</h3>


                    <div className="card">
                        <div className="card-body">
                            <div className="text-start mb-4">
                                <label className="form-label">Code</label>
                                <input
                                    className="form-control "
                                    type="text"
                                    value={couponCode}
                                    onChange={(event) => setCouponCode(event.target.value)}
                                />
                            </div>

                            <div className="text-start mb-4">
                                <label className="form-label">Discount</label>
                                <input
                                    className="form-control"
                                    type="number"
                                    value={couponDiscount}
                                    onChange={(event) => setCouponDiscount(event.target.value)}
                                />
                            </div>

                            <div>
                                <button className="btn btn-dark " onClick={saveCoupon}>Save cupons</button>
                            </div>
                        </div>
                    </div>

                    {/*  */}
                    <div className="mt-4">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Discount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {coupons.map((coupon, index) => (
                                    <tr key={index}>
                                        <td>{coupon.code}</td>
                                        <td>{coupon.discount}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                </section>
            </div>
        </div>
    )
}

export default Admin;