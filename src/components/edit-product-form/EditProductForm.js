import React, { useState, useEffect } from "react";
import { Button, Form, Switch, Spinner, Alert } from "react-bootstrap";
import { fetchAProduct } from "../../pages/edit-product/EditProductAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const initialState = {
  name: "",
  qty: 0,
  isAvailable: true,
  price: 0,
  salePrice: 0,
  saleEndDate: null,
  description: "",
  categories: [],
  images: [],
};
export const EditProductForm = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const [editProduct, setEditProduct] = useState(initialState);

  const { isLoading, status, message, product } = useSelector(
    (state) => state.selectedProduct
  );

  useEffect(() => {
    //  call api and update our state for a individual product
    if (product._id !== editProduct._id) {
      dispatch(fetchAProduct(_id));
      setEditProduct(product);
    }
  }, [dispatch, editProduct, _id]);

  const handleOnChange = (e) => {
    const { name, value, checked } = e.target;

    let val = value;
    if (name === "isAvailable") {
      val = checked;
    }

    setEditProduct({
      ...editProduct,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {isLoading && <Spinner variant="primary" animation="border" />}
      {message && (
        <Alert variant={status === "success" ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      {!product._id ? (
        <h1>Product is not found</h1>
      ) : (
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="name"
              placeholder="Product Name"
              value={editProduct.name}
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
              value={editProduct.isAvailable}
              onChange={handleOnChange}
            ></Form.Check>
          </Form.Group>

          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              value={editProduct.price}
              onChange={handleOnChange}
              name="price"
              type="number"
              placeholder="Sale Price"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Sale Price</Form.Label>
            <Form.Control
              value={editProduct.salePrice}
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
              value={editProduct.saleEndDate}
              onChange={handleOnChange}
            />
          </Form.Group>

          {/* <Form.Group>
          <Form.File
            name="images"
            label="Images"
            value={editProduct.images}
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
              value={editProduct.qty}
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
              value={editProduct.description}
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
            defaultvalue={editProduct.categories}
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
      )}
    </div>
  );
};

export default EditProductForm;
