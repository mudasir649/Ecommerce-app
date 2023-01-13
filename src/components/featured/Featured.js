import { KeyboardArrowUpOutlined, MoreVert } from '@mui/icons-material'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";
import "./featured.scss";
import { KeyboardArrowDown } from '@mui/icons-material';

function Featured() {
  return (
    <div className='featured'>
        <div className='top'>
            <h1 className='title'>Total Revenue</h1>
            <MoreVert fontSize='small'/>
        </div>
        <div className='bottom'>
            <div className='featuredChart'>
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
            </div>
            <p className='title'>Total Sales made today</p>
            <p className='amount'>$420</p>
            <p className='desc'>Previous transaction processing. Last payment may not included.</p>
            <div className='summary'>
                <div className='item'>
                    <div className='itemTitle'>Target</div>
                    <div className='itemResult negative'>
                        <KeyboardArrowDown fontSize='small' />
                        <div className='resultAmount'>$12.4k</div>
                    </div>
                </div>
                <div className='item'>
                    <div className='itemTitle'>Target</div>
                    <div className='itemResult positive'>
                        <KeyboardArrowUpOutlined fontSize='small' />
                        <div className='resultAmount'>$12.4k</div>
                    </div>
                </div>
                <div className='item'>
                    <div className='itemTitle'>Target</div>
                    <div className='itemResult positive'>
                        <KeyboardArrowUpOutlined fontSize='small' />
                        <div className='resultAmount'>$12.4k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured