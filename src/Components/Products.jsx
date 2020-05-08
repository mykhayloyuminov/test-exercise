import React, { useEffect,useState } from "react";
import firebase from "../firebase";
import Edit from "./Edit";

function useProducts() {
  const [products, setProducts] = useState([])
    
  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .onSnapshot((snapchot) => {
        const newProducts = snapchot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setProducts(newProducts)
    })
  }, [])
  
  return products
}



const Products = () => {
    const products = useProducts()
    return (
        <div className="allProducts">
            {products.map((product) =>
            <div key={product.id} className="product">
                <h2 className="productName">{product.name}</h2>
                <img src={product.photoUrl} className="image"/>
                <div className="productDescription">{product.description}</div>
                <div className="productPrice">{product.price}$</div>
                <Edit product={product}/>
            </div>
            )}
    </div>
   );
}
    
    export default Products;