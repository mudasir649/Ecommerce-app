import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import "./datatable.scss";
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';

function DataTable() {

    const actionColumn = [{field: "action", headerName: "Action", width: 200, renderCell: () => {
        return (
            <div className='cellAction'>
                <div className='viewButton'>
                    <Link to="/Ecommerce-app/users/products" style={{textDecoration:"none"}}>
                        View
                    </Link>
                </div>
                <div className='deleteButton'>Delete</div>
            </div>
        )
    }}]

  return (
    <div className='datatable'>
        <div className='databaseTitle'>
            Add New User
            <Link to="/Ecommerce-app/users/new" style={{textDecoration:"none"}} className="link">
                Add New
            </Link>
        </div>
            <DataGrid
                className='dataGrid'
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
    </div>
  )
}

export default DataTable