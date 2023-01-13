import React from 'react'
import DataTable from '../../components/datatable/DataTable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

function List() {
  return (
    <div className='home'>
        <Sidebar />
        <div className='homeContainer'>
          <Navbar/>
          <DataTable />
        </div>
    </div>
  )
}

export default List