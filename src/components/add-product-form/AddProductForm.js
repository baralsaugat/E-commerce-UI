import React, { useState } from "react";
import { Button, Form, Switch, Spinner, Alert } from "react-bootstrap";
import { addNewProduct } from "../../pages/products/ProductAction";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  name: "",
  qty: 0,
  status: false,
  price: 0,
  salePrice: 0,
  saleEndDate: null,
  description: "",
  // categories: [],
  images: [],
};
export const AddProductForm = () => {
  const dispatch = useDispatch();
  const [newProduct, setnewProduct] = useState(initialState);
  const [images, setImages] = useState(initialState);

  const { isLoading, status, message } = useSelector((state) => state.product);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    console.log(status);

    setnewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(newProduct).map((key) => {
      key !== "images" && formData.append(key, newProduct[key]);
    });

    images.length &&
      [...images].map((image) => {
        formData.append("images", image);
      });

    dispatch(addNewProduct(formData));
  };

  const handleOnImageSelect = (e) => {
    const { files } = e.target;
    setImages(files);
  };
  return (
    <div>
      {isLoading && <Spinner variant="primary" animation="border" />}
      {message && (
        <Alert variant={status === "success" ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      <Form onSubmit={handleOnSubmit} encType>
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
            name="status"
            id="status"
            type="switch"
            label="Available"
            value={newProduct.status}
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

        <Form.Group>
          <Form.File
            name="images"
            label="Upload image file only"
            multiple
            value={newProduct.images}
            onChange={handleOnImageSelect}
            accept="images/*"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleOnSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProductForm;
