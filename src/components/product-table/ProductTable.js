import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Table, Spinner, Alert, Button } from "react-bootstrap";
import { fetchProducts } from "../../pages/products/ProductAction";

const ProductTable = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoading, status, message, productList } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Status</th>
            <th>Price</th>
            <th>Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productList?.map((row, i) => (
            <tr key={row._id}>
              <td>{i}</td>
              <td>{row.status}</td>
              <td>put img her</td>
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
                <Button variant="success">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
