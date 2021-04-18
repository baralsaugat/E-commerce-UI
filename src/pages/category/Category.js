import React from "react";
import Defaultlayout from "../../components/layout/Defaultlayout";
import { useDispatch, useSelector } from "react-redux";
import { AddCategoryForm } from "../../components/add-category-form/AddCategoryForm";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import ListCategory from "../../components/list-category/ListCategory";
const Category = () => {
  return (
    <Defaultlayout>
      <AddCategoryForm />
      <hr />
      <div className="display-categories">
        <ListCategory />
      </div>
    </Defaultlayout>
  );
};

export default Category;
