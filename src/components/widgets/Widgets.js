import React from 'react'
import "./widgets.scss"
import { KeyboardArrowUp, PersonOutline, ShoppingCartOutlined, MonetizationOnOutlined, AccountBalanceWalletOutlined } from '@mui/icons-material'

function Widgets({ type }) {

    let data;

    //temporary
    const amount = 200;
    const diff = 200;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutline className='icon' style={{color: "crimson", backgroundColor:"rgba(255, 0, 0, 0.2)"}} />
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlined className='icon' style={{color: "goldenrod", backgroundColor:"rgba(218, 165, 32, 0.2)"}} />
            }
            break;
        case "earning":
            data = {
                title: "EARNING",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlined className='icon' style={{color: "green", backgroundColor:"rgba(0, 128, 0, 0.2)"}} />
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: false,
                link: "View all orders",
                icon: <AccountBalanceWalletOutlined className='icon' style={{color: "purple", backgroundColor:"rgba(128, 0, 128, 0.2)"}} />
            }
            break;
            
        default:
            break;
    }

  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && "$"} {amount}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
            <div className='percentage positive'>
                <KeyboardArrowUp />
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widgets