import React from "react";
import AddProductForm from "../../components/add-product-form/AddProductForm";
import Defaultlayout from "../../components/layout/Defaultlayout";
import { Card } from "react-bootstrap";

const AddProduct = () => {
  return (
    <Defaultlayout>
      <h1>Add New Product</h1>
      <hr />
      <div>
        <Card Classname="p-4">
          <AddProductForm />
        </Card>
      </div>
    </Defaultlayout>
  );
};

export default AddProduct;
