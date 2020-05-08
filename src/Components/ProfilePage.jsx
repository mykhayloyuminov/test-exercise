import React, { useEffect,useState } from "react";
import { Router } from "@reach/router";
import AddProductForm from "./Add";
import Navbar from "./Navbar";
import Edit from "./Edit";
import Products from "./Products";

const ProfilePage = () => {
    return (
      <div className="">
        <Navbar />
        <Router>
          <AddProductForm path="add"/>
          <Products path="products"/>
          <Edit path="edit"/>
        </Router>
        </div>
    );
}

export default ProfilePage;

