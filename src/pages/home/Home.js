import Widgets  from '../../components/widgets/Widgets'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.scss"
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Tables from '../../components/table/Tables'

function Home() {
  return (
    <div className='home'>
        <Sidebar />
        <div className='homeContainer'>
          <Navbar/>
          <div className='widgets'>
            <Widgets type="user" />
            <Widgets type="order" />
            <Widgets type="earning" />
            <Widgets type="balance"/>
          </div>
          <div className='chart'>
            <Featured />
            <Chart />
          </div>
          <div className='listContainer'>
            <div className='listTitle'>Latest Transaction</div>
            <Tables />
          </div>
        </div>
    </div>
  )
}

export default Home