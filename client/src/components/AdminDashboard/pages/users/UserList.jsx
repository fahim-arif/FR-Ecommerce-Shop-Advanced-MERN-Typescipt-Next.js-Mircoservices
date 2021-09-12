import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { listUsers } from "../../../../actions/userAction";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../DummyData";

import "./userList.css";

const UserList = () => {
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
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;
  const [data, setData] = useState(userRows);
  console.log(users);

  useEffect(() => {
    dispatch(listUsers());
    if (users) setData(users);
  }, [dispatch, users]);

  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure?")) {
    }
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
    },
    {
      field: "name",
      headerName: "User Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='admin_user_list_user'>
            <img
              className='admin_user_list_img'
              src={params.row.image}
              alt=''
            />
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
    },

    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/users/${params.row.id}`}>
              <div className='admin_user_list_edit btn'>Edit</div>
            </Link>

            <DeleteOutline
              className='admin_user_list_delete'
              onClick={() => deleteHandler(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='admin_userList'>
      <div style={{ display: "flex", justifyContent: "space-between" }}></div>
      <div style={{ height: 780, width: "100%" }}>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={12}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default UserList;
