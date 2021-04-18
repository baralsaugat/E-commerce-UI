import React, { useState } from "react";
import { Button, Form, Switch, Spinner, Alert } from "react-bootstrap";
import { addNewProduct } from "../../pages/products/ProductAction";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  name: "",
  qty: 0,
  isAvailable: "off",
  price: 0,
  salePrice: 0,
  saleEndDate: null,
  description: "",
  categories: [],
  images: [],
};
export const AddProductForm = () => {
  const dispatch = useDispatch();
  const [newProduct, setnewProduct] = useState(initialState);

  const { isLoading, status, message } = useSelector((state) => state.product);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setnewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewProduct(newProduct));
  };
  return (
    <div>
      {isLoading && <Spinner variant="primary" animation="border" />}
      {message && (
        <Alert variant={status === "success" ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>is available</Form.Label>
          <Form.Check
            name="isAvailable"
            id="isAvailable"
            type="switch"
            label="Available"
            value={newProduct.isAvailable}
            onChange={handleOnChange}
          ></Form.Check>
        </Form.Group>

        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={newProduct.price}
            onChange={handleOnChange}
            name="price"
            type="number"
            placeholder="Sale Price"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Sale Price</Form.Label>
          <Form.Control
            value={newProduct.salePrice}
            onChange={handleOnChange}
            name="salePrice"
            type="number"
            placeholder="Sale Price"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Sale End Date</Form.Label>
          <Form.Control
            name="saleEndDate"
            type="date"
            placeholder="Sale End Date"
            value={newProduct.saleEndDate}
            onChange={handleOnChange}
          />
        </Form.Group>

        {/* <Form.Group>
          <Form.File
            name="images"
            label="Images"
            value={newProduct.images}
            onChange={handleOnChange}
          />
        </Form.Group> */}

        <Form.Group>
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            name="qty"
            required
            type="number"
            placeholder="Quantity"
            value={newProduct.qty}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            as="textarea"
            rows={5}
            placeholder="Write full description"
            value={newProduct.description}
            onChange={handleOnChange}
          />
        </Form.Group>

        {/* <Form.Group>
          <Form.Label>Select Categories</Form.Label>
          <Form.Control
            name="categories"
            as="select"
            multiple
            required
            defaultvalue={newProduct.categories}
            onChange={handleOnChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group> */}

        <Button variant="primary" type="submit" onClick={handleOnSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;
