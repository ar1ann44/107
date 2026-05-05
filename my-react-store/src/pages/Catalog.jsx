
import Product from "../components/Product";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Catalog() {
    //const products = [];
    const [products, setProduts] = useState([]);
    const [categories, setCategories] = useState([]);// to hold the catogaries 
    const [prodsToDisplay, setProdsToDisplay] = useState([]);//to hold the products to show

    //useEffect runs when the component loads
    useEffect(function(){
        console.log("Component Loaded");
        let service = new DataService();
        let data = service.getProducts();
        setProduts(data);
        loadCatalog();
    },[]// the empty array [] means: "run this funcion only once"
);

function loadCatalog(){
    let service = new DataService();
    let data = service.getProducts();
    setProdsToDisplay(data); //initially, display all the producs
    let cats = ["Alternative", "Classic Rock", "Pop", "Metal"];
    setCategories(cats);
}

function filter(category){
    let list = [];
    // find the products that match the category
    for(let i=0; i<products.length; i++)
    {
        let prod = products[i];
        if(prod.category === category)
        {
            list.push(prod);
        }
    }

setProdsToDisplay(list);
}

    return (
        <div>
            <h1>Check our amazing products</h1>


            <div className= "row">
                <div className="d-flex gap-2 mb-4 flex-wrap">
                    {categories.map( cats => <button className="btn btn-dark rounded-pill" onClick={() => filter(cats)}> {cats} </button>)}
                    <button className="btn btn-dark rounded-pill" onClick={loadCatalog}>Show All</button>
                </div>
                <br/>
                {prodsToDisplay.map(prod => <Product key={prod._id} data={prod}/>)}
                <br/>
                


            </div>

        </div>
    )

}

export default Catalog;