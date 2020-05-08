import React, {useState} from "react";
import firebase from "../firebase";

const AddProductForm = () => {
    const [productName, setProductName] = useState("")
    const [photoOfProduct, setphotoOfProduct] = useState("")
    const [productDescription, setproductDescription] = useState("")
    const [productPrice, setproductPrice] = useState("")

    function onSubmit(e) {
        e.preventDefault()
        
        firebase
            .firestore()
            .collection("products")
            .add({
                name: productName,
                photoUrl: photoOfProduct,
                description: productDescription,
                price: productPrice
            })
            .then(() =>{
                setProductName("")
                setphotoOfProduct("")
                setproductDescription("")
                setproductPrice("")
            })
    }

    return (
        <div className="addProducts">
        <form onSubmit={onSubmit} className="forms">
            <h2 className="h2">Add new product</h2>
            <div>
                <label>Name product</label>
                <input className="inputAdd" type="text" value={productName} onChange={e => setProductName(e.currentTarget.value)} required/>
            </div>
            <div>
                <label>Url link on Product</label>
                <input className="inputAdd" type="text" file value={photoOfProduct} onChange={e => setphotoOfProduct(e.currentTarget.value)} required/>
            </div>
            <div>
                <label>Product description</label>
                <input className="inputAdd" type="text" value={productDescription} onChange={e => setproductDescription(e.currentTarget.value)} required/>
            </div>
            <div>
                <label>Price</label>
                <input className="inputAdd" type="number" value={productPrice} onChange={e => setproductPrice(e.currentTarget.value)} required/>
            </div>
            <button className="button">Add</button>
        </form>
        </div>
    )
}

export default AddProductForm