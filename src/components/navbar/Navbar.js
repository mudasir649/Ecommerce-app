import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsOutlined, SearchOutlined } from '@mui/icons-material'
import React from 'react'
import "./navbar.scss"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder='Search...' />
          <SearchOutlined/>
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlined className='icon' />
            English
          </div>
          <div className='item'>
            <DarkModeOutlined className='icon' />
          </div>
          <div className='item'>
            <FullscreenExitOutlined className='icon' />
          </div>
          <div className='item'>
            <NotificationsOutlined className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlined className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ListOutlined className='icon' />
          </div>
          <div className='item'>
            <img 
            src='https://www.biography.com/.image/t_share/MTgwNDU1MTIxMTE1Njg2NzY0/gettyimages-1197345888.jpg'
            alt='hello'
            className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar