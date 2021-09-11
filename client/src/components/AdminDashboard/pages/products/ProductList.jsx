import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./productLists.css";
import { Link, useHistory } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { serviceRows } from "../../DummyData";
import { getProducts, deleteProduct } from "../../../../actions/productActions";
import Product from "../../../../components/Product_depricated";
import { Col, Row, Container, Image } from "react-bootstrap";
import Loading from "../../../Loading";
import Message from "../../../Message";

const AdminProductList = () => {
  // Admin Verification or Else redirect to homepage
  let history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!userInfo) {
    history.push("/");
  } else {
    const { isAdmin } = userInfo;
    if (!isAdmin) {
      history.push("/");
    }
  }

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const { loading: loadingDelete, error: errorDelete, success } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const { success: successCreate } = productCreate;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, success, successCreate]);

  const deleteHandler = (id) => {
    if (window.confirm("Are You sure")) {
      //Delete Products
      dispatch(deleteProduct(id));
    }
  };

  // const handleEdit = (id) => {
  //   console.log(id);
  //   // history.push("/");
  //   history.push(`/admin/product-list/${id}`);
  // };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 120,
    },
    {
      field: "name",
      headerName: "Name",
      width: 300,
      renderCell: (params) => {
        return (
          <div className='admin_service_list'>
            <img
              className='admin_service_list_img'
              src={params.row.image}
              alt=''
            />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      width: 130,
    },
    {
      field: "rating",
      headerName: "rating",
      width: 120,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 160,
    },
    {
      field: "user",
      headerName: "Created By",
      width: 160,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/product-list/${params.row.id}`}>
              <div className='admin_service_list_edit btn'>Edit</div>
            </Link>
            {/* <div>
              <AdminProductEdit
                id={params.row.id}
                className='admin_service_list_edit btn'
              >
                Edit
              </AdminProductEdit>
            </div> */}

            <DeleteOutline
              className='admin_service_list_delete'
              onClick={() => deleteHandler(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className='admin_services'>
      <Link to='/admin/create-product'>
        <button className='create_new_product_btn my-3 mb-5'>
          Create New Product
        </button>
      </Link>
      {loadingDelete && <Loading></Loading>}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {success && <Message>{"Product Was Deleted Successfully"}</Message>}
      <div style={{ height: 780, width: "100%", fontFamily: "Open Sans" }}>
        <DataGrid
          rows={products}
          disableSelectionOnClick
          columns={columns}
          pageSize={12}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default AdminProductList;
