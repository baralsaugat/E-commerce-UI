import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Table, Spinner, Alert, Button, Image } from "react-bootstrap";
import {
  fetchProducts,
  deleteProduct,
} from "../../pages/products/ProductAction";

const ProductTable = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoading, status, message, productList } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleOnDelete = (_id) => {
    dispatch(deleteProduct(_id));
  };

  return (
    <div>
      {isLoading && <Spinner variant="primary" animation="border" />}
      {message && (
        <Alert variant={status === "success" ? "success" : "danger"}>
          {message}
        </Alert>
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Price</th>
            <th>Edit</th>

            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productList?.map((row, i) => (
            <tr key={row._id}>
              <td>{i}</td>
              <td>
                {row.status ? (
                  <i class="fas fa-check-circle text-success"></i>
                ) : (
                  <i class="fas fa-times text-danger"></i>
                )}
              </td>
              <td>
                <Image src={row.images} width="80px" height="auto"></Image>
              </td>
              <td>{row.name}</td>
              <td>{row.price}</td>
              <td>
                <Button
                  variant="primary"
                  Button
                  variant="success"
                  onClick={() => history.push(`/product/${row._id}`)}
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  variant="success"
                  onClick={() => handleOnDelete(row._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
