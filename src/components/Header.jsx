import React from 'react'
import '../Styles/Header.css'

const Header = ({ search, setSearch }) => {
  return (
    <div className='container'>
        <div className="icon">Design <b className='colorIcon'>P</b>ro</div>
        <div className="search-box">
            <input type="text" placeholder='Enter your search querry' value={search} onChange={(e)=> setSearch(e.target.value)}/>
        </div>
        <div className="profile-icon">
            <img src="img_avatar.png" alt="Profile" />
        </div>
    </div>
  )
}

export default Header