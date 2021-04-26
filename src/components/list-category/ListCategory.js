import React, { useState } from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { removeCategories } from "../../pages/category/CategoryAction";
import { EditCategoryForm } from "../edit-category-form/EditCategoryForm";
import { toggleCategoryEditModal } from "../../category/categorySlice";

const ListCategory = () => {
  const dispatch = useDispatch();
  const { categoryList, selectedCategory } = useSelector((state) => state.category);

  const [showForm, setShowForm] = useState("");

  const handleOnDeleteClicked = (_id) => {
    if (window.confirm("Are you sure you want to delete this category")) {
      const childIds = categoryList.map((row) => {
        if (row.parentCat === _id) {
          return row._id;
        }
      });

      const idsToDelete = childIds.filter((row) => row);

      dispatch(removeCategories([...idsToDelete, _id]));
    }
  };
  const handleEdit = (_id) => {
    dispatch(toggleCategoryEditModal());

    dispatch(selectACategory(catItem))
    // showForm === _id ? setShowForm("") : setShowForm(_id);
  };

  const topLevelcats = categoryList.filter((row) => !row.parentCat);
  const childCats = categoryList.filter((row) => row.parentCat);
  return (
    <div>
      <ListGroup>
        {topLevelcats.map((row, i) => {
          return (
            <>
              <ListGroup.Item key={i}>
                {row.name}
                <span className="buttons" style={{ marginLeft: "5rem" }}>
                  <Button variant="primary" onClick={() => handleEdit(row._id)}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleOnDeleteClicked(row._id)}
                  >
                    Delete
                  </Button>
                </span>
              </ListGroup.Item>
              {childCats.map(
                (itm) =>
                  itm.parentCat === row._id && (
                    <ListGroup.Item key={i}>
                      {`---> ${itm.name}`}
                      <span className="buttons " style={{ marginLeft: "5rem" }}>
                        {" "}
                        <Button
                          variant="primary"
                          onClick={() => handleEdit(row._id)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleOnDeleteClicked(itm._id)}
                        >
                          Delete
                        </Button>
                      </span>
                    </ListGroup.Item>
                  )
              )}
            </>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default ListCategory;
