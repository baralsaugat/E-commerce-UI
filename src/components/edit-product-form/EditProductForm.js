import React, { useState, useEffect } from "react";
import { Button, Form, Switch, Spinner, Alert, Image } from "react-bootstrap";
import {
  fetchAProduct,
  updateAProduct,
} from "../../pages/edit-product/EditProductAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateProductSuccess } from "../../pages/edit-product/SelectedProductSlice";

const initialState = {
  name: "",
  qty: 0,
  status: true,
  price: 0,
  salePrice: 0,
  saleEndDate: null,
  description: "",
  categories: [],
  images: [],
  imageToRemove
};
export const EditProductForm = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const [editProduct, setEditProduct] = useState(initialState);

  const [images, setImages] = useState(initialState);

  const { isLoading, status, message, product, result } = useSelector(
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
    if (name === "status") {
      val = checked;
    }

    setEditProduct({
      ...editProduct,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // ///////////

    const formData = new FormData();

    Object.keys(editProduct).map((key) => {
      key !== "images" && formData.append(key, editProduct[key]);
    });

    images.length &&
      [...images].map((image) => {
        formData.append("images", image);
      });

    imgToDelete.length && formData.append("imgToDelete", imgToDelete)
  

    dispatch(updateProductSuccess(formData));
  };

  const onImageDeleteSelect = (e) => {
    const { checked, value } = e.target;
		if (checked) {
			//PUT _ID IN SIDE THE ARRAY
			setImgToDelete({
				...imgToDelete,
				categories: [...imgToDelete, value],
			});
		} else {
			//take _id out of the array
			const updatedCatIds = ImgToDelete.categories.filter(id => id !== value);

			setImgToDelete({
				...newProduct,
				categories: updatedCatIds,
			});
		}
	};

    setImages(files);
  };


  
	const onCatSelect = e => {
		const { checked, value } = e.target;
		if (checked) {
			//PUT _ID IN SIDE THE ARRAY
			setNewProduct({
				...newProduct,
				categories: [...newProduct.categories, value],
			});
		} else {
			//take _id out of the array
			const updatedCatIds = newProduct.categories.filter(id => id !== value);

			setNewProduct({
				...newProduct,
				categories: updatedCatIds,
			});
		}
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
              name="status"
              id="status"
              type="switch"
              label="Available"
              value={editProduct.status}
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

          <hr />
          <div
            
            className="d-flex justify-content-start"
          ></div>

          {editProduct?.image?.length &&
            editProduct.image.map((row, i) => {
              <div className="image-item">
                <Image
                  src={imgSource}
                  width="80px"
                  height="auto"
                  className="m-2 p-1"
                />
                <Form.Check
                  
                  type="checkbox"
                  defaultValue = {imgSource}
                  checked = {imgToDelete? includes(imgSource)}
                  
                  onChange={onImageDeleteSelect}
                ></Form.Check>
              </div>;
            })}
          <hr />

          <Form.Group>
            <Form.File
              name="images"
              label="Upload image file only"
              multiple
              value={editProduct.images}
              onChange={handleOnImageSelect}
              accept="images/*"
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleOnSubmit}>
            Update Product
          </Button>
        </Form>
      )}
    </div>
  );


export default EditProductForm;
