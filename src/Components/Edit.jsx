import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import Add from "./Add";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const Edit = ({ product }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const onDelete = () => {
        firebase
            .firestore()
            .collection("products")
            .doc(product.id)
            .delete()
    }


    const [productName, setProductName] = useState("")
    const [photoOfProduct, setphotoOfProduct] = useState("")
    const [productDescription, setproductDescription] = useState("")
    const [productPrice, setproductPrice] = useState("")

    const onSubmit = () => {
        firebase
            .firestore()
            .collection("products")
            .doc(product.id)
            .set({name: productName,
                photoUrl: photoOfProduct,
                description: productDescription,
                price: productPrice})
    }

    return (
        <div>
            <button className="buttonAnother" onClick={handleClickOpen}>
                Edit
            </button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle className="title" id="form-dialog-title">{product.name}</DialogTitle>
                <DialogContent>
                    <form onSubmit={onSubmit}>
                        <h2>Edit the product</h2>
                        <div>
                            <label>Name product</label>
                            <input type="text" value={productName} onChange={e => setProductName(e.currentTarget.value)} required/>
                        </div>
                        <div>
                            <label>Url link on Product</label>
                            <input type="text" file value={photoOfProduct} onChange={e => setphotoOfProduct(e.currentTarget.value)} required/>
                        </div>
                        <div>
                            <label>Product description</label>
                            <input type="text" value={productDescription} onChange={e => setproductDescription(e.currentTarget.value)} required/>
                        </div>
                        <div>
                            <label>Price</label>
                            <input type="number" value={productPrice} onChange={e => setproductPrice(e.currentTarget.value)} required/>
                        </div>
                        <button className="buttonAnother">Edit</button>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            <button className="buttonGoogle" onClick={onDelete}>Delete</button>
        </div>
    );
}

export default Edit;