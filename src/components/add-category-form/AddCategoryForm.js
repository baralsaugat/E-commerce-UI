import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Col, Button, Spinner, Alert } from "react-bootstrap";
import { useState } from "react";
import { addNewCategory } from "../../pages/category/CategoryAction";

// import { getCategories, saveCategory } from "../../apis/categoriesAPIs.js";

const initialState = {
  name: "",
  parentCat: 0,
};

export const AddCategoryForm = () => {
  const dispatch = useDispatch();
  const { isLoading, status, message } = useSelector((state) => state.category);
  const [category, setCategory] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setCategory({
      ...category,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewCategory(category));
  };

  return (
    <div className="add-category-form">
      {isLoading && <Spinner variant="primary" animation="border" />}
      {message && (
        <Alert variant={status === "success" ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      <Form onSubmit={handleOnSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>New Category</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter New Category"
              onChange={handleOnChange}
              value={category.name}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Select Parent Category</Form.Label>
            <Form.Control
              as="select"
              name="parentCat"
              onChange={handleOnChange}
              defaultValue={category.parentCat}
            >
              <option>Choose...</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
};