import React from "react";
import EditProductForm from "../../components/edit-product-form/EditProductForm";
import Defaultlayout from "../../components/layout/Defaultlayout";
import { Card } from "react-bootstrap";

const EditProduct = () => {
  return (
    <Defaultlayout>
      <h1>Update Product</h1>
      <hr />
      <div>
        <Card Classname="p-4">
          <EditProductForm />
        </Card>
      </div>
    </Defaultlayout>
  );
};

export default EditProduct;
