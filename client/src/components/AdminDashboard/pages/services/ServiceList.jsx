import React, { useState } from "react";
import "./serviceList.css";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { serviceRows } from "../../DummyData";
const ServiceList = () => {
  const [data, setData] = useState(serviceRows);

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
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='admin_service_list'>
            <img
              className='admin_service_list_img'
              src={params.row.avatar}
              alt=''
            />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "registeredUser",
      headerName: "Registed Users",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/service-list/${params.row.id}`}>
              <div className='admin_service_list_edit btn'>Details</div>
            </Link>

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
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={6}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default ServiceList;
