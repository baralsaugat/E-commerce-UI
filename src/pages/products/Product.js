import React from "react";
import Defaultlayout from "../../components/layout/Defaultlayout";
import ProductTable from "../../components/product-table/ProductTable";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Product = () => {
  const history = useHistory();
  return (
    <Defaultlayout>
      <div className="product">
        <h1>Products</h1>
        <Button variant="success" onClick={() => history.push("/product/new")}>
          Add New Form
        </Button>
        <div className="product-lists">
          <ProductTable />
        </div>
      </div>
    </Defaultlayout>
  );
};

export default Product;
