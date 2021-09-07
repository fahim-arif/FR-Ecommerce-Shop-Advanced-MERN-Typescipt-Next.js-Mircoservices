import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../DummyData";

import "./userList.css";
const UserList = () => {
  const [data, setData] = useState(userRows);


  const deleteHandler = (id) => {
    setData(data.filter((d) => d.id !== id));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='admin_user_list_user'>
            <img
              className='admin_user_list_img'
              src={params.row.avatar}
              alt=''
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 130,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>User Lists</h1>
        <Link to='/admin/create-user'>
          <button className='admin_userDetails_btn'>Create</button>
        </Link>
      </div>
      <div style={{ height: 750, width: "100%" }}>
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
